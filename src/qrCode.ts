// Self-contained QR Code Generator (SVG & Matrix)
// Generates standard QR Code Model 2 (Versions 1-4) with Error Correction

// Galois Field GF(256) tables for QR Reed-Solomon error correction
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);

(() => {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x = (x << 1) ^ (x >= 128 ? 0x11d : 0);
  }
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();

function gMul(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return EXP_TABLE[LOG_TABLE[a] + LOG_TABLE[b]];
}

function rsGeneratorPoly(numEcc: number): Uint8Array {
  let g = new Uint8Array([1]);
  for (let i = 0; i < numEcc; i++) {
    const factor = [1, EXP_TABLE[i]];
    const nextG = new Uint8Array(g.length + 1);
    for (let j = 0; j < g.length; j++) {
      nextG[j] ^= gMul(g[j], factor[0]);
      nextG[j + 1] ^= gMul(g[j], factor[1]);
    }
    g = nextG;
  }
  return g;
}

function rsComputeEcc(data: Uint8Array, numEcc: number): Uint8Array {
  const gen = rsGeneratorPoly(numEcc);
  const remainder = new Uint8Array(numEcc);
  for (let i = 0; i < data.length; i++) {
    const factor = data[i] ^ remainder[0];
    for (let j = 0; j < numEcc - 1; j++) {
      remainder[j] = remainder[j + 1] ^ gMul(gen[j + 1], factor);
    }
    remainder[numEcc - 1] = gMul(gen[numEcc], factor);
  }
  return remainder;
}

// Version configs for Error Correction Level M
// Version 1: 21x21, 16 data bytes, 10 EC bytes
// Version 2: 25x25, 28 data bytes, 16 EC bytes
// Version 3: 29x29, 44 data bytes, 26 EC bytes
// Version 4: 33x33, 64 data bytes, 36 EC bytes (2 blocks of 32 data, 18 EC)
interface QRVersionSpec {
  version: number;
  size: number;
  dataCapacity: number;
  numEccPerBlock: number;
  blocks: number;
  alignmentPatterns: number[];
}

const VERSIONS: QRVersionSpec[] = [
  { version: 1, size: 21, dataCapacity: 16, numEccPerBlock: 10, blocks: 1, alignmentPatterns: [] },
  { version: 2, size: 25, dataCapacity: 28, numEccPerBlock: 16, blocks: 1, alignmentPatterns: [6, 18] },
  { version: 3, size: 29, dataCapacity: 44, numEccPerBlock: 26, blocks: 1, alignmentPatterns: [6, 22] },
  { version: 4, size: 33, dataCapacity: 64, numEccPerBlock: 18, blocks: 2, alignmentPatterns: [6, 26] },
];

export interface QRCodeData {
  modules: boolean[][];
  size: number;
  svgPath: string;
}

export function generateQRCode(text: string): QRCodeData {
  const utf8 = new TextEncoder().encode(text);
  const textLen = utf8.length;

  // Pick smallest fitting version
  let spec = VERSIONS.find(v => v.dataCapacity >= textLen + 3);
  if (!spec) {
    spec = VERSIONS[VERSIONS.length - 1];
  }

  // Encode byte mode data stream (Mode = 0100, 8-bit count)
  const bitStream: number[] = [];
  function pushBits(val: number, count: number) {
    for (let i = count - 1; i >= 0; i--) {
      bitStream.push((val >> i) & 1);
    }
  }

  pushBits(0b0100, 4); // Byte mode indicator
  pushBits(textLen, 8); // Character count indicator
  for (let i = 0; i < textLen; i++) {
    pushBits(utf8[i], 8);
  }

  // Terminator (up to 4 zeroes)
  const maxBits = spec.dataCapacity * 8;
  const termLen = Math.min(4, maxBits - bitStream.length);
  for (let i = 0; i < termLen; i++) bitStream.push(0);

  // Pad to 8-bit boundary
  while (bitStream.length % 8 !== 0) bitStream.push(0);

  // Convert to bytes
  const dataBytes: number[] = [];
  for (let i = 0; i < bitStream.length; i += 8) {
    let byteVal = 0;
    for (let b = 0; b < 8; b++) {
      byteVal = (byteVal << 1) | bitStream[i + b];
    }
    dataBytes.push(byteVal);
  }

  // Pad bytes (0xEC, 0x11) until dataCapacity is reached
  const padBytes = [0xec, 0x11];
  let pIdx = 0;
  while (dataBytes.length < spec.dataCapacity) {
    dataBytes.push(padBytes[pIdx % 2]);
    pIdx++;
  }

  // Divide into blocks and compute Reed-Solomon EC
  const dataUint = new Uint8Array(dataBytes);
  const rawCodewords: Uint8Array[] = [];
  const eccCodewords: Uint8Array[] = [];
  const blockSize = Math.floor(spec.dataCapacity / spec.blocks);

  for (let b = 0; b < spec.blocks; b++) {
    const start = b * blockSize;
    const end = b === spec.blocks - 1 ? spec.dataCapacity : (b + 1) * blockSize;
    const blockData = dataUint.slice(start, end);
    rawCodewords.push(blockData);
    eccCodewords.push(rsComputeEcc(blockData, spec.numEccPerBlock));
  }

  // Interleave data and EC bytes
  const finalSequence: number[] = [];
  const maxBlockLen = Math.max(...rawCodewords.map(c => c.length));
  for (let i = 0; i < maxBlockLen; i++) {
    for (let b = 0; b < spec.blocks; b++) {
      if (i < rawCodewords[b].length) {
        finalSequence.push(rawCodewords[b][i]);
      }
    }
  }
  for (let i = 0; i < spec.numEccPerBlock; i++) {
    for (let b = 0; b < spec.blocks; b++) {
      finalSequence.push(eccCodewords[b][i]);
    }
  }

  // Initialize Matrix
  const N = spec.size;
  const matrix: (boolean | null)[][] = Array.from({ length: N }, () => Array(N).fill(null));
  const isFunctionModule: boolean[][] = Array.from({ length: N }, () => Array(N).fill(false));

  function setModule(r: number, c: number, val: boolean) {
    matrix[r][c] = val;
    isFunctionModule[r][c] = true;
  }

  // 1. Finder patterns (7x7) + separators at (0,0), (0, N-7), (N-7, 0)
  function placeFinder(top: number, left: number) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const row = top + r;
        const col = left + c;
        if (row >= 0 && row < N && col >= 0 && col < N) {
          const isBlack = (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
                          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
                          (r >= 2 && r <= 4 && c >= 2 && c <= 4);
          setModule(row, col, isBlack);
        }
      }
    }
  }

  placeFinder(0, 0);
  placeFinder(0, N - 7);
  placeFinder(N - 7, 0);

  // 2. Alignment patterns
  if (spec.alignmentPatterns.length > 0) {
    const coords = spec.alignmentPatterns;
    for (const r of coords) {
      for (const c of coords) {
        if (isFunctionModule[r][c]) continue;
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            const isBlack = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
            setModule(r + dr, c + dc, isBlack);
          }
        }
      }
    }
  }

  // 3. Timing patterns
  for (let i = 8; i < N - 8; i++) {
    if (!isFunctionModule[6][i]) setModule(6, i, i % 2 === 0);
    if (!isFunctionModule[i][6]) setModule(i, 6, i % 2 === 0);
  }

  // 4. Dark module
  setModule(N - 8, 8, true);

  // 5. Reserve format info areas
  for (let i = 0; i <= 8; i++) {
    if (!isFunctionModule[8][i]) isFunctionModule[8][i] = true;
    if (!isFunctionModule[i][8]) isFunctionModule[i][8] = true;
    if (!isFunctionModule[8][N - 1 - i]) isFunctionModule[8][N - 1 - i] = true;
    if (!isFunctionModule[N - 1 - i][8]) isFunctionModule[N - 1 - i][8] = true;
  }

  // 6. Place Data Codewords (right-to-left in 2-column zig-zag)
  let bitIdx = 0;
  const totalBits = finalSequence.length * 8;
  let upward = true;

  for (let right = N - 1; right > 0; right -= 2) {
    if (right === 6) right--; // Skip vertical timing column
    const rows = upward
      ? Array.from({ length: N }, (_, idx) => N - 1 - idx)
      : Array.from({ length: N }, (_, idx) => idx);

    for (const r of rows) {
      for (let c = right; c >= right - 1; c--) {
        if (!isFunctionModule[r][c]) {
          let bit = false;
          if (bitIdx < totalBits) {
            const byte = finalSequence[Math.floor(bitIdx / 8)];
            const offset = 7 - (bitIdx % 8);
            bit = ((byte >> offset) & 1) === 1;
            bitIdx++;
          }
          matrix[r][c] = bit;
        }
      }
    }
    upward = !upward;
  }

  // 7. Apply standard mask pattern (Mask 0: (row + col) % 2 === 0)
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!isFunctionModule[r][c]) {
        if ((r + c) % 2 === 0) {
          matrix[r][c] = !matrix[r][c];
        }
      }
    }
  }

  // 8. Place Format Information (EC Level M = 00, Mask 0 = 000 -> Format Bits: 101010000010010)
  // Masked with 101010000010010 XOR 101010000010010 = 0b101010000010010
  // Pre-calculated standard format info for Level M, Mask 0: 0x5412 (101010000010010)
  const formatBits = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];

  // Top-left format modules
  const tlCoords: [number, number][] = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]
  ];
  for (let i = 0; i < 15; i++) {
    const [r, c] = tlCoords[i];
    matrix[r][c] = formatBits[i] === 1;
  }

  // Split format modules around bottom-left and top-right
  const splitCoords: [number, number][] = [
    [N - 1, 8], [N - 2, 8], [N - 3, 8], [N - 4, 8], [N - 5, 8], [N - 6, 8], [N - 7, 8],
    [8, N - 8], [8, N - 7], [8, N - 6], [8, N - 5], [8, N - 4], [8, N - 3], [8, N - 2], [8, N - 1]
  ];
  for (let i = 0; i < 15; i++) {
    const [r, c] = splitCoords[i];
    matrix[r][c] = formatBits[i] === 1;
  }

  // Build SVG Path for all true modules
  const finalizedMatrix: boolean[][] = matrix.map(row => row.map(cell => !!cell));
  let svgPath = "";
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (finalizedMatrix[r][c]) {
        svgPath += `M${c},${r}h1v1h-1z `;
      }
    }
  }

  return {
    modules: finalizedMatrix,
    size: N,
    svgPath: svgPath.trim()
  };
}

