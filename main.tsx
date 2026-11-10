/// <reference types="vite/client" />
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper, { INITIAL_SHEET_DATA } from './weekly_chores_household_hub';
import rawSource from './weekly_chores_household_hub.tsx?raw';

const SOURCE_LINES = rawSource.split(/\r?\n/);
const SHEET_DATA_END_LINE = (() => {
  const idx = SOURCE_LINES.findIndex((l, i) => i > 37 && l.startsWith('var DAY_STYLES'));
  return idx > 0 ? idx : 935;
})();

function colNumberToLetter(colIdx: number): string {
  let letter = '';
  let temp = colIdx;
  while (temp >= 0) {
    letter = String.fromCharCode((temp % 26) + 65) + letter;
    temp = Math.floor(temp / 26) - 1;
  }
  return letter;
}

interface DataMatchInfo {
  line: number;
  text: string;
  rowIndex: number | null;
  colIndex: number;
  colLetter: string;
  sectionName: string;
  csvFile: string;
  csvLine: number;
}

interface CellCoord {
  tsxLine: number; // 1-based
  sheetIndex: number;
  sheetName: string;
  rowIndex: number;
  colIndex: number;
  value: any;
}

const TSX_CELL_MAP: Map<string, number> = new Map();
const TSX_LINE_TO_COORD: Map<number, CellCoord> = new Map();

(() => {
  let currentSheetIndex = -1;
  let currentSheetName = '';
  let currentRowIndex: number | null = null;
  let inRowArray = false;
  let currentColIndex = -1;

  for (let i = 36; i < SHEET_DATA_END_LINE; i++) {
    const line = SOURCE_LINES[i] || '';
    const nameMatch = line.match(/"name":\s*"([^"]+)"/);
    if (nameMatch) {
      currentSheetName = nameMatch[1];
      currentSheetIndex = currentSheetName.toLowerCase().includes('hub') ? 1 : 0;
      currentRowIndex = null;
      inRowArray = false;
      continue;
    }

    const idxMatch = line.match(/"index_":\s*(\d+)/);
    if (idxMatch && !inRowArray) {
      const nextLine = SOURCE_LINES[i + 1] || '';
      if (!nextLine.includes('"name":')) {
        currentRowIndex = parseInt(idxMatch[1], 10);
      }
      continue;
    }

    if (line.includes('"row": [')) {
      inRowArray = true;
      currentColIndex = 0;
      continue;
    }

    if (inRowArray) {
      if (line.trim().startsWith(']')) {
        inRowArray = false;
        currentColIndex = -1;
        continue;
      }
      if (currentSheetIndex >= 0 && currentRowIndex !== null) {
        const tsxLine = i + 1;
        const trimmed = line.trim().replace(/,$/, '');
        let val: any = trimmed;
        try {
          val = JSON.parse(trimmed);
        } catch (e) {}
        const coord: CellCoord = {
          tsxLine,
          sheetIndex: currentSheetIndex,
          sheetName: currentSheetName,
          rowIndex: currentRowIndex,
          colIndex: currentColIndex,
          value: val,
        };
        TSX_CELL_MAP.set(`${currentSheetIndex}:${currentRowIndex}:${currentColIndex}`, tsxLine);
        TSX_LINE_TO_COORD.set(tsxLine, coord);
      }
      currentColIndex++;
    }
  }
})();

function findInitialSheetDataMatch(el: HTMLElement): DataMatchInfo | null {
  const candidates: string[] = [];
  const directText = (el.innerText || el.textContent || '').trim();
  if (directText.length >= 2 && directText.length <= 140 && !directText.includes('\n')) {
    candidates.push(directText);
  } else if (directText.includes('\n')) {
    for (const part of directText.split('\n')) {
      const p = part.trim();
      if (p.length >= 3 && p.length <= 120) candidates.push(p);
    }
  }

  if (candidates.length === 0) return null;

  for (const candidate of candidates) {
    const clean = candidate.replace(/\s+/g, ' ').trim();
    if (clean.length < 2) continue;

    const exactToken = JSON.stringify(clean).toLowerCase();
    let matchedLine = -1;

    // Pass 1: Exact string literal match inside INITIAL_SHEET_DATA
    for (let i = 36; i < SHEET_DATA_END_LINE; i++) {
      const lineStr = (SOURCE_LINES[i] || '').trim().toLowerCase();
      if (lineStr === exactToken || lineStr === `${exactToken},`) {
        matchedLine = i + 1;
        break;
      }
    }

    // Pass 2: Substring match inside a string literal
    if (matchedLine === -1 && clean.length >= 4) {
      const lowerClean = clean.toLowerCase();
      for (let i = 36; i < SHEET_DATA_END_LINE; i++) {
        const lineStr = (SOURCE_LINES[i] || '').trim().toLowerCase();
        if (lineStr.startsWith('"') && lineStr.includes(lowerClean)) {
          matchedLine = i + 1;
          break;
        }
      }
    }

    if (matchedLine !== -1) {
      const coord = TSX_LINE_TO_COORD.get(matchedLine);
      const rowIndex = coord ? coord.rowIndex : null;
      const colIndex = coord ? coord.colIndex : 0;
      const sectionName = coord ? coord.sheetName : 'INITIAL_SHEET_DATA';
      const isHub = sectionName.toLowerCase().includes('hub');
      const csvFile = isHub
        ? 'Household Hub - Data (CSV).csv'
        : 'Printable Weekly Schedule (CSV).csv';
      const csvLine = rowIndex !== null ? (isHub ? rowIndex + 2 : rowIndex + 1) : 1;
      const colLetter = colNumberToLetter(colIndex + 1);

      return {
        line: matchedLine,
        text: (SOURCE_LINES[matchedLine - 1] || '').trim(),
        rowIndex,
        colIndex,
        colLetter,
        sectionName,
        csvFile,
        csvLine,
      };
    }
  }
  return null;
}

interface SourceInfo {
  file: string;
  line: number;
  col: number;
  tag: string;
  comp: string;
  rect: DOMRect;
  dataMatch: DataMatchInfo | null;
}

interface SnippetLine {
  line: number;
  text: string;
}

function openFileInVsCode(file: string, line: number, col = 1, onToast?: (msg: string) => void) {
  const triggerUriFallback = () => {
    const a = document.createElement('a');
    a.href = `antigravity-ide://file/c:/Dev%20Projects/Weekly_Chores/Weekly-Chores/${encodeURIComponent(file)}:${line}:${col}`;
    a.click();
  };
  fetch(
    `/__open-in-vscode?file=${encodeURIComponent(file)}&line=${line}&col=${col}`
  )
    .then((r) => r.json())
    .then((data) => {
      if (!data || !data.ok) {
        triggerUriFallback();
      }
    })
    .catch(() => {
      triggerUriFallback();
    });
  if (onToast) {
    onToast(`Opened ${file}:${line}`);
  }
}

function popOutCsvMapWindow(onToast?: (msg: string) => void, onBlockedFallback?: () => void) {
  const mapUrl = `${window.location.origin}/?view=csv-map`;
  const win = window.open(
    mapUrl,
    'CsvVisualMapWindow',
    'popup=yes,width=1320,height=840,left=80,top=60'
  );
  if (win) {
    win.focus();
    if (onToast) {
      onToast('Opened CSV Visual Map in a separate window!');
    }
    return;
  }
  fetch('/__popout-csv-map').catch(() => {});
  if (onBlockedFallback) {
    onBlockedFallback();
  }
  if (onToast) {
    onToast('Opened CSV Visual Map!');
  }
}

const syncChannel =
  typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('chores_csv_map_sync') : null;

function broadcastCsvCellSelection(sheetIndex: number, rowIndex: number, colIndex: number, tsxLine?: number) {
  if (syncChannel) {
    syncChannel.postMessage({ sheetIndex, rowIndex, colIndex, tsxLine, updatedAt: Date.now() });
  }
  fetch(
    `/__csv-map-state?sheetIndex=${sheetIndex}&rowIndex=${rowIndex}&colIndex=${colIndex}${
      tsxLine ? `&tsxLine=${tsxLine}` : ''
    }`
  ).catch(() => {});
}

interface CsvMapTableProps {
  isStandalone?: boolean;
  activeCsvSheetIdx: number;
  setActiveCsvSheetIdx: (idx: number) => void;
  selectedCellKey: string | null;
  setSelectedCellKey: (key: string | null) => void;
  onClose?: () => void;
  onToast: (msg: string) => void;
}

function CsvVisualMapPanel({
  isStandalone = false,
  activeCsvSheetIdx,
  setActiveCsvSheetIdx,
  selectedCellKey,
  setSelectedCellKey,
  onClose,
  onToast,
}: CsvMapTableProps) {
  const activeSheet = INITIAL_SHEET_DATA[activeCsvSheetIdx] || INITIAL_SHEET_DATA[0];
  const activeCsvFileName =
    activeCsvSheetIdx === 1
      ? 'Household Hub - Data (CSV).csv'
      : 'Printable Weekly Schedule (CSV).csv';
  const maxCols = activeCsvSheetIdx === 1 ? 12 : 15;

  useEffect(() => {
    if (!selectedCellKey) return;
    const el = document.querySelector(`[data-cell-key="${selectedCellKey}"]`) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [selectedCellKey, activeCsvSheetIdx]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0F172A',
        color: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '10px 14px',
          backgroundColor: '#1E293B',
          borderBottom: '1px solid #334155',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 800, fontSize: '13px', color: '#FBBF24' }}>
            📊 Live .tsx ↔ .csv Visual Spreadsheet Map
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setActiveCsvSheetIdx(0)}
              style={{
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeCsvSheetIdx === 0 ? '1px solid #38BDF8' : '1px solid #475569',
                backgroundColor: activeCsvSheetIdx === 0 ? '#0284C7' : '#0F172A',
                color: '#FFFFFF',
              }}
            >
              Sheet 0: Printable Weekly Schedule (CSV)
            </button>
            <button
              type="button"
              onClick={() => setActiveCsvSheetIdx(1)}
              style={{
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeCsvSheetIdx === 1 ? '1px solid #34D399' : '1px solid #475569',
                backgroundColor: activeCsvSheetIdx === 1 ? '#059669' : '#0F172A',
                color: '#FFFFFF',
              }}
            >
              Sheet 1: Household Hub - Data (CSV)
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: '#CBD5E1' }}>
          <span>
            <strong>Click Cell</strong> = Open in <code style={{ color: '#38BDF8' }}>.tsx</code> •{' '}
            <strong>Shift+Click Cell</strong> = Open in <code style={{ color: '#FBBF24' }}>.csv</code>
          </span>
          {!isStandalone && (
            <button
              type="button"
              onClick={() => {
                popOutCsvMapWindow(onToast);
                if (onClose) onClose();
              }}
              title="Pop out into a separate standalone window"
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                border: '1px solid #60A5FA',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              ↗ Open in Separate Window
            </button>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '4px 9px',
                borderRadius: '6px',
                backgroundColor: '#334155',
                color: '#F8FAFC',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              ✕ Close
            </button>
          )}
        </div>
      </div>

      {/* Active Cell Banner */}
      {selectedCellKey && (() => {
        const [sStr, rStr, cStr] = selectedCellKey.split(':');
        const sIdx = parseInt(sStr, 10);
        const rIdx = parseInt(rStr, 10);
        const cIdx = parseInt(cStr, 10);
        const tsxLine = TSX_CELL_MAP.get(selectedCellKey);
        const coord = tsxLine ? TSX_LINE_TO_COORD.get(tsxLine) : null;
        const csvName =
          sIdx === 1 ? 'Household Hub - Data (CSV).csv' : 'Printable Weekly Schedule (CSV).csv';
        const csvLineNum = sIdx === 1 ? rIdx + 2 : rIdx + 1;
        const colLetter = colNumberToLetter(cIdx + 1);
        return (
          <div
            style={{
              padding: '6px 14px',
              backgroundColor: '#022C22',
              borderBottom: '1px solid #065F46',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              fontSize: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{ color: '#FBBF24', fontWeight: 700 }}>
                📄 {csvName} → Line {csvLineNum}, Col {colLetter}
              </span>
              <span style={{ color: '#34D399', fontWeight: 700 }}>
                ⚛️ weekly_chores_household_hub.tsx → Line {tsxLine || '?'} (index_ {rIdx}, row[{cIdx}])
              </span>
              {coord && (
                <span
                  style={{
                    color: '#F8FAFC',
                    backgroundColor: '#064E3B',
                    padding: '1px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                  }}
                >
                  {JSON.stringify(coord.value)}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {tsxLine && (
                <button
                  type="button"
                  onClick={() => openFileInVsCode('weekly_chores_household_hub.tsx', tsxLine, 1, onToast)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '5px',
                    backgroundColor: '#059669',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  Jump to .tsx Line {tsxLine}
                </button>
              )}
              <button
                type="button"
                onClick={() => openFileInVsCode(csvName, csvLineNum, 1, onToast)}
                style={{
                  padding: '3px 8px',
                  borderRadius: '5px',
                  backgroundColor: '#D97706',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                Jump to .csv Line {csvLineNum}
              </button>
            </div>
          </div>
        );
      })()}

      {/* Spreadsheet Grid */}
      <div style={{ flex: 1, overflow: 'auto', padding: '8px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '11px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#1E293B', position: 'sticky', top: 0, zIndex: 2 }}>
              <th style={{ border: '1px solid #334155', padding: '6px 8px', color: '#FBBF24', textAlign: 'center', minWidth: '72px' }}>
                CSV Line
              </th>
              <th style={{ border: '1px solid #334155', padding: '6px 8px', color: '#34D399', textAlign: 'center', minWidth: '72px' }}>
                TSX index_
              </th>
              {Array.from({ length: maxCols }).map((_, cIdx) => (
                <th
                  key={cIdx}
                  style={{
                    border: '1px solid #334155',
                    padding: '6px 8px',
                    color: '#93C5FD',
                    textAlign: 'left',
                    minWidth: '125px',
                  }}
                >
                  Col {colNumberToLetter(cIdx + 1)}{' '}
                  <span style={{ color: '#64748B', fontWeight: 400 }}>(row[{cIdx}])</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(activeSheet.data || []).map((rowObj: any) => {
              const rIdx = rowObj.index_;
              const csvLineNum = activeCsvSheetIdx === 1 ? rIdx + 2 : rIdx + 1;
              return (
                <tr key={rIdx} style={{ borderBottom: '1px solid #1E293B' }}>
                  <td
                    onClick={() => openFileInVsCode(activeCsvFileName, csvLineNum, 1, onToast)}
                    title={`Click to open ${activeCsvFileName} at Line ${csvLineNum}`}
                    style={{
                      border: '1px solid #334155',
                      padding: '5px 6px',
                      textAlign: 'center',
                      color: '#FDE68A',
                      backgroundColor: '#1E293B',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    L{csvLineNum}
                  </td>
                  <td
                    style={{
                      border: '1px solid #334155',
                      padding: '5px 6px',
                      textAlign: 'center',
                      color: '#A7F3D0',
                      backgroundColor: '#0F172A',
                      fontWeight: 600,
                    }}
                  >
                    #{rIdx}
                  </td>
                  {Array.from({ length: maxCols }).map((_, cIdx) => {
                    const cellVal = rowObj.row ? rowObj.row[cIdx] : null;
                    const tsxLine = TSX_CELL_MAP.get(`${activeCsvSheetIdx}:${rIdx}:${cIdx}`);
                    const cellKey = `${activeCsvSheetIdx}:${rIdx}:${cIdx}`;
                    const isSelected = selectedCellKey === cellKey;
                    const isEmpty = cellVal === null || cellVal === undefined || cellVal === '';

                    return (
                      <td
                        key={cIdx}
                        data-cell-key={cellKey}
                        onClick={(e) => {
                          setSelectedCellKey(cellKey);
                          broadcastCsvCellSelection(activeCsvSheetIdx, rIdx, cIdx, tsxLine);
                          if (e.shiftKey) {
                            openFileInVsCode(activeCsvFileName, csvLineNum, 1, onToast);
                          } else if (tsxLine) {
                            openFileInVsCode('weekly_chores_household_hub.tsx', tsxLine, 1, onToast);
                          }
                        }}
                        title={`TSX Line ${tsxLine || '?'} • ${activeCsvFileName} Line ${csvLineNum}, Col ${colNumberToLetter(cIdx + 1)}\nClick = Open in .tsx | Shift+Click = Open in .csv`}
                        style={{
                          border: isSelected ? '2px solid #F59E0B' : '1px solid #334155',
                          backgroundColor: isSelected
                            ? 'rgba(245, 158, 11, 0.28)'
                            : isEmpty
                            ? '#090D16'
                            : '#0F172A',
                          color: isEmpty ? '#334155' : '#F8FAFC',
                          padding: '5px 7px',
                          cursor: 'pointer',
                          maxWidth: '210px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4px', alignItems: 'baseline' }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {isEmpty ? '·' : String(cellVal)}
                          </span>
                          {tsxLine && (
                            <span style={{ fontSize: '9px', color: isSelected ? '#FBBF24' : '#475569', flexShrink: 0 }}>
                              :{tsxLine}
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StandaloneCsvMapWindow() {
  const [activeCsvSheetIdx, setActiveCsvSheetIdx] = useState<number>(1);
  const [selectedCellKey, setSelectedCellKey] = useState<string | null>(null);
  const [jumpToast, setJumpToast] = useState<string | null>(null);
  const lastUpdatedRef = useRef<number>(0);

  const triggerToast = (msg: string) => {
    setJumpToast(msg);
    setTimeout(() => setJumpToast(null), 2400);
  };

  useEffect(() => {
    document.title = '📊 CSV Visual Map — Weekly Chores & Household Hub';

    const onSyncMsg = (ev: MessageEvent) => {
      const data = ev.data;
      if (data && typeof data.sheetIndex === 'number' && data.rowIndex !== null && data.rowIndex !== undefined) {
        lastUpdatedRef.current = data.updatedAt || Date.now();
        setActiveCsvSheetIdx(data.sheetIndex);
        setSelectedCellKey(`${data.sheetIndex}:${data.rowIndex}:${data.colIndex ?? 0}`);
      }
    };
    if (syncChannel) {
      syncChannel.addEventListener('message', onSyncMsg);
    }

    // Also poll Vite server state so VS Code cursor movements & cross-browser windows sync automatically!
    const interval = setInterval(() => {
      fetch('/__csv-map-state')
        .then((r) => r.json())
        .then((state) => {
          if (
            state &&
            state.updatedAt > lastUpdatedRef.current &&
            state.rowIndex !== null &&
            state.rowIndex !== undefined
          ) {
            lastUpdatedRef.current = state.updatedAt;
            setActiveCsvSheetIdx(state.sheetIndex);
            setSelectedCellKey(`${state.sheetIndex}:${state.rowIndex}:${state.colIndex ?? 0}`);
          }
        })
        .catch(() => {});
    }, 400);

    return () => {
      if (syncChannel) syncChannel.removeEventListener('message', onSyncMsg);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <CsvVisualMapPanel
        isStandalone={true}
        activeCsvSheetIdx={activeCsvSheetIdx}
        setActiveCsvSheetIdx={setActiveCsvSheetIdx}
        selectedCellKey={selectedCellKey}
        setSelectedCellKey={setSelectedCellKey}
        onToast={triggerToast}
      />
      {jumpToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '18px',
            right: '18px',
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 700,
            boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
            zIndex: 9999,
          }}
        >
          ✓ {jumpToast}
        </div>
      )}
    </div>
  );
}

type DockCorner = 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right' | 'float';
const DOCK_CORNER_KEY = '__code_inspector_dock_corner';

function CodeInspectorOverlay() {
  const [inspectToggle, setInspectToggle] = useState(false);
  const [altPressed, setAltPressed] = useState(false);
  const [dockCorner, setDockCorner] = useState<DockCorner>(() => {
    try {
      const saved = localStorage.getItem(DOCK_CORNER_KEY) as DockCorner | null;
      if (saved && ['top-right', 'bottom-left', 'top-left', 'bottom-right', 'float'].includes(saved)) {
        return saved;
      }
    } catch (e) {}
    return 'top-right';
  });
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<SourceInfo | null>(null);
  const [snippet, setSnippet] = useState<SnippetLine[]>([]);
  const [jumpToast, setJumpToast] = useState<string | null>(null);
  const [showInlineCsvMap, setShowInlineCsvMap] = useState(false);
  const [inlineCsvSheetIdx, setInlineCsvSheetIdx] = useState<number>(1);
  const [inlineSelectedCellKey, setInlineSelectedCellKey] = useState<string | null>(null);
  const lastLocKeyRef = useRef<string>('');
  const lastBroadcastCellRef = useRef<string>('');

  const isInspecting = inspectToggle || altPressed;

  const triggerToast = (msg: string) => {
    setJumpToast(msg);
    setTimeout(() => setJumpToast(null), 2400);
  };

  const handleSaveAsDefault = async () => {
    try {
      const rawData = localStorage.getItem('weekly_chores_canvas_sheet_data_v5');
      if (!rawData) {
        triggerToast('⚠️ No data found in localStorage');
        return;
      }
      const res = await fetch('/__save-config?asDefault=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sheetData: JSON.parse(rawData) }),
      });
      const data = await res.json();
      if (data.ok) {
        triggerToast('✓ Saved current browser setup as default in code and config file!');
      } else {
        triggerToast(`⚠️ Failed: ${data.error}`);
      }
    } catch (e: any) {
      triggerToast(`⚠️ Failed: ${e?.message || String(e)}`);
    }
  };

  const handleExportConfig = () => {
    try {
      const rawData = localStorage.getItem('weekly_chores_canvas_sheet_data_v5');
      const payload = {
        sheetData: rawData ? JSON.parse(rawData) : null,
        version: '5.0',
        exportedAt: new Date().toISOString(),
        appName: 'Weekly Chores & Household Hub',
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `weekly-chores-config-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      fetch('/__save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});

      triggerToast('✓ Exported configuration backup (.json)!');
    } catch (e: any) {
      triggerToast(`⚠️ Export failed: ${e?.message || String(e)}`);
    }
  };

  const handleImportConfigFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        const dataToLoad = parsed.sheetData || (Array.isArray(parsed) ? parsed : null);
        if (Array.isArray(dataToLoad) && dataToLoad.length > 0) {
          localStorage.setItem('weekly_chores_canvas_sheet_data_v5', JSON.stringify(dataToLoad));
          window.postMessage({ type: 'SYNC_DATA', payload: dataToLoad }, '*');
          triggerToast(`✓ Loaded configuration from "${file.name}"!`);
        } else {
          triggerToast('⚠️ Invalid config: missing sheetData');
        }
      } catch (err: any) {
        triggerToast(`⚠️ Failed to parse: ${err?.message || String(err)}`);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const cycleDockCorner = () => {
    setDockCorner((prev) => {
      const order: DockCorner[] = ['top-right', 'bottom-left', 'top-left', 'bottom-right', 'float'];
      const next = order[(order.indexOf(prev) + 1) % order.length];
      try {
        localStorage.setItem(DOCK_CORNER_KEY, next);
      } catch (e) {}
      triggerToast(`Inspector window docked: ${next.replace('-', ' ').toUpperCase()}`);
      return next;
    });
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        setAltPressed(true);
      } else if (e.key === 'Escape') {
        if (inspectToggle) {
          setInspectToggle(false);
          setHovered(null);
        }
      } else if ((e.key === 'd' || e.key === 'D') && isInspecting) {
        cycleDockCorner();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        setAltPressed(false);
        if (!inspectToggle) setHovered(null);
      }
    };
    const onBlur = () => {
      setAltPressed(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
    };
  }, [inspectToggle]);

  useEffect(() => {
    if (!isInspecting) {
      setHovered(null);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || target.closest('#__code-inspector-ui')) {
        setHovered(null);
        return;
      }

      setMousePos({ x: e.clientX, y: e.clientY });

      const el = target.closest('[data-source-loc]') as HTMLElement | null;
      if (!el) {
        setHovered(null);
        return;
      }

      const locAttr = el.getAttribute('data-source-loc') || '';
      const compAttr = el.getAttribute('data-source-comp') || '';
      const parts = locAttr.split(':');
      if (parts.length < 3) return;

      const col = parseInt(parts.pop()!, 10);
      const line = parseInt(parts.pop()!, 10);
      const file = parts.join(':');
      const rect = el.getBoundingClientRect();
      const dataMatch = findInitialSheetDataMatch(el);

      if (dataMatch && dataMatch.rowIndex !== null) {
        const sIdx = dataMatch.sectionName.toLowerCase().includes('hub') ? 1 : 0;
        const cKey = `${sIdx}:${dataMatch.rowIndex}:${dataMatch.colIndex}`;
        if (lastBroadcastCellRef.current !== cKey) {
          lastBroadcastCellRef.current = cKey;
          setInlineCsvSheetIdx(sIdx);
          setInlineSelectedCellKey(cKey);
          broadcastCsvCellSelection(sIdx, dataMatch.rowIndex, dataMatch.colIndex, dataMatch.line);
        }
      }

      setHovered({
        file,
        line,
        col,
        tag: el.tagName.toLowerCase(),
        comp: compAttr,
        rect,
        dataMatch,
      });

      const locKey = `${file}:${line}`;
      if (lastLocKeyRef.current !== locKey) {
        lastLocKeyRef.current = locKey;
        const start = Math.max(1, line - 1);
        const end = Math.min(SOURCE_LINES.length, line + 1);
        const localSnippet: SnippetLine[] = [];
        for (let i = start; i <= end; i++) {
          localSnippet.push({ line: i, text: SOURCE_LINES[i - 1] ?? '' });
        }
        setSnippet(localSnippet);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || target.closest('#__code-inspector-ui')) return;

      const el = target.closest('[data-source-loc]') as HTMLElement | null;
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();

      const locAttr = el.getAttribute('data-source-loc') || '';
      const parts = locAttr.split(':');
      if (parts.length < 3) return;

      let col = parseInt(parts.pop()!, 10);
      let line = parseInt(parts.pop()!, 10);
      let file = parts.join(':');

      const dataMatch = findInitialSheetDataMatch(el);

      if ((e.ctrlKey || e.metaKey) && dataMatch) {
        file = dataMatch.csvFile;
        line = dataMatch.csvLine;
        col = 1;
      } else if (e.shiftKey && dataMatch) {
        line = dataMatch.line;
        col = 1;
      }

      openFileInVsCode(file, line, col, triggerToast);
    };

    window.addEventListener('mousemove', handleMouseMove, true);
    window.addEventListener('click', handleClick, true);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove, true);
      window.removeEventListener('click', handleClick, true);
    };
  }, [isInspecting]);

  // Determine placement for the detailed code card with smart auto-flipping to prevent covering hovered elements
  let cardStyle: React.CSSProperties = {};
  if (hovered) {
    const pad = 16;
    const cardW = 465;
    const cardH = 320;
    const r = hovered.rect;

    if (dockCorner === 'top-right') {
      const collides = r.right > window.innerWidth - (cardW + pad * 2) && r.top < cardH + pad;
      if (collides) {
        cardStyle = { bottom: `${pad + 48}px`, left: `${pad}px` };
      } else {
        cardStyle = { top: `${pad}px`, right: `${pad}px` };
      }
    } else if (dockCorner === 'bottom-left') {
      const collides = r.left < cardW + pad * 2 && r.bottom > window.innerHeight - (cardH + pad + 48);
      if (collides) {
        cardStyle = { top: `${pad}px`, right: `${pad}px` };
      } else {
        cardStyle = { bottom: `${pad + 48}px`, left: `${pad}px` };
      }
    } else if (dockCorner === 'top-left') {
      const collides = r.left < cardW + pad * 2 && r.top < cardH + pad;
      if (collides) {
        cardStyle = { bottom: `${pad + 48}px`, right: `${pad}px` };
      } else {
        cardStyle = { top: `${pad}px`, left: `${pad}px` };
      }
    } else if (dockCorner === 'bottom-right') {
      const collides = r.right > window.innerWidth - (cardW + pad * 2) && r.bottom > window.innerHeight - (cardH + pad + 48);
      if (collides) {
        cardStyle = { top: `${pad}px`, left: `${pad}px` };
      } else {
        cardStyle = { bottom: `${pad + 48}px`, right: `${pad}px` };
      }
    } else {
      // 'float' - smart side-offset so it NEVER covers the element itself
      let fTop = r.top;
      let fLeft = r.right + 16;
      if (fLeft + cardW > window.innerWidth - pad) {
        fLeft = r.left - cardW - 16;
      }
      if (fLeft < pad) {
        fLeft = Math.max(pad, Math.min(r.left, window.innerWidth - cardW - pad));
        fTop = r.top > cardH + pad ? r.top - cardH - 12 : r.bottom + 12;
      }
      fTop = Math.max(pad, Math.min(fTop, window.innerHeight - cardH - pad));
      cardStyle = { top: `${fTop}px`, left: `${fLeft}px` };
    }
  }

  let isMouseNearCard = false;
  if (cardRef.current && isInspecting) {
    const cr = cardRef.current.getBoundingClientRect();
    const cx = Math.max(cr.left, Math.min(mousePos.x, cr.right));
    const cy = Math.max(cr.top, Math.min(mousePos.y, cr.bottom));
    const dist = Math.hypot(mousePos.x - cx, mousePos.y - cy);
    if (dist < 40) isMouseNearCard = true;
  }

  return (
    <div id="__code-inspector-ui" style={{ position: 'fixed', zIndex: 999999, pointerEvents: 'none' }}>
      {/* Hover Highlight Box */}
      {isInspecting && hovered && (
        <>
          <div
            style={{
              position: 'fixed',
              top: hovered.rect.top,
              left: hovered.rect.left,
              width: hovered.rect.width,
              height: hovered.rect.height,
              border: '2px solid #3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.12)',
              borderRadius: '4px',
              pointerEvents: 'none',
              transition: 'all 0.04s ease-out',
            }}
          />
          {/* Mini Element Badge directly next to element border (unobtrusive, doesn't cover content) */}
          <div
            style={{
              position: 'fixed',
              top: hovered.rect.top > 24 ? hovered.rect.top - 22 : hovered.rect.bottom + 4,
              left: Math.max(4, Math.min(hovered.rect.left, window.innerWidth - 240)),
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: '#0F172A',
              color: '#93C5FD',
              border: '1px solid #3B82F6',
              fontSize: '10px',
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>&lt;{hovered.tag}&gt;{hovered.comp ? ` in <${hovered.comp}>` : ''}</span>
            <span style={{ color: '#38BDF8', fontWeight: 600 }}>• Line {hovered.line}</span>
          </div>

          {/* Detailed Floating / Docked Code Card */}
          <div
            ref={cardRef}
            style={{
              position: 'fixed',
              ...cardStyle,
              width: '465px',
              maxWidth: 'calc(100vw - 32px)',
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              padding: '10px 14px',
              borderRadius: '10px',
              boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.65)',
              border: '1px solid #334155',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: '11px',
              lineHeight: '1.45',
              pointerEvents: 'auto',
              opacity: isMouseNearCard ? 0.22 : 0.98,
              transition: 'opacity 0.15s ease, top 0.2s ease, left 0.2s ease, right 0.2s ease, bottom 0.2s ease',
              zIndex: 999999,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#60A5FA', fontWeight: 700, fontSize: '11.5px' }}>
                &lt;{hovered.tag}&gt;
                {hovered.comp ? (
                  <span style={{ color: '#C084FC', fontWeight: 500 }}> in {hovered.comp}</span>
                ) : null}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
                  onClick={cycleDockCorner}
                  title="Move inspector window corner (or press 'D' key)"
                  style={{
                    backgroundColor: '#1E293B',
                    color: '#93C5FD',
                    border: '1px solid #3B82F6',
                    borderRadius: '4px',
                    padding: '2px 7px',
                    fontSize: '9.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>◰</span>
                  <span>Dock: {dockCorner.replace('-', ' ')}</span>
                </button>
                <span style={{ color: '#38BDF8', backgroundColor: '#1E293B', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>
                  Line {hovered.line}:{hovered.col}
                </span>
              </div>
            </div>
            <div style={{ color: '#94A3B8', fontSize: '10px', marginBottom: '6px' }}>
              {hovered.file} (<strong>Click</strong> = UI code)
            </div>
            {snippet.length > 0 && (
              <div
                style={{
                  backgroundColor: '#020617',
                  padding: '6px 8px',
                  borderRadius: '5px',
                  border: '1px solid #1E293B',
                  overflowX: 'hidden',
                  whiteSpace: 'pre',
                }}
              >
                {snippet.map((s) => {
                  const isTarget = s.line === hovered.line;
                  const colOffset = isTarget && hovered.col > 30 ? Math.max(0, hovered.col - 1) : 0;
                  const previewText =
                    colOffset > 0
                      ? '…' + s.text.slice(colOffset, colOffset + 55)
                      : s.text.trim().slice(0, 56);
                  return (
                    <div
                      key={s.line}
                      style={{
                        backgroundColor: isTarget ? 'rgba(59, 130, 246, 0.22)' : 'transparent',
                        color: isTarget ? '#F8FAFC' : '#64748B',
                        fontWeight: isTarget ? 600 : 400,
                        padding: '0 4px',
                        borderRadius: '2px',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      }}
                    >
                      <span style={{ display: 'inline-block', width: '36px', color: isTarget ? '#60A5FA' : '#475569', userSelect: 'none' }}>
                        {s.line}
                      </span>
                      {previewText}
                    </div>
                  );
                })}
              </div>
            )}

            {/* INITIAL_SHEET_DATA + CSV Match Section */}
            {hovered.dataMatch && (
              <div
                style={{
                  marginTop: '8px',
                  paddingTop: '6px',
                  borderTop: '1px solid #334155',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ color: '#34D399', fontWeight: 700 }}>
                    📊 TSX Data (index_ {hovered.dataMatch.rowIndex}, row[{hovered.dataMatch.colIndex}])
                  </span>
                  <span style={{ color: '#6EE7B7', backgroundColor: '#064E3B', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    TSX Line {hovered.dataMatch.line}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ color: '#FBBF24', fontWeight: 700 }}>
                    📄 {hovered.dataMatch.csvFile}
                  </span>
                  <span style={{ color: '#FDE68A', backgroundColor: '#78350F', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    CSV Line {hovered.dataMatch.csvLine} • Col {hovered.dataMatch.colLetter}
                  </span>
                </div>
                <div style={{ color: '#94A3B8', fontSize: '10px', marginBottom: '4px' }}>
                  <strong>Shift+Click</strong> = .tsx Data • <strong>Ctrl+Click</strong> = .csv File
                </div>
                <div
                  style={{
                    backgroundColor: '#022C22',
                    color: '#ECFDF5',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid #065F46',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#34D399', marginRight: '8px' }}>{hovered.dataMatch.line}</span>
                  {hovered.dataMatch.text.slice(0, 56)}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Jump Confirmation Toast */}
      {jumpToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '54px',
            right: '16px',
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          ✓ {jumpToast}
        </div>
      )}

      {/* Inline CSV Visual Map Drawer (when opened inline or if popups are blocked) */}
      {showInlineCsvMap && (
        <div
          style={{
            position: 'fixed',
            bottom: '56px',
            left: '16px',
            right: '16px',
            height: '52vh',
            pointerEvents: 'auto',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid #F59E0B',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65)',
          }}
        >
          <CsvVisualMapPanel
            isStandalone={false}
            activeCsvSheetIdx={inlineCsvSheetIdx}
            setActiveCsvSheetIdx={setInlineCsvSheetIdx}
            selectedCellKey={inlineSelectedCellKey}
            setSelectedCellKey={setInlineSelectedCellKey}
            onClose={() => setShowInlineCsvMap(false)}
            onToast={triggerToast}
          />
        </div>
      )}

      {/* Floating Bottom-Right Toolbar */}
      <div
        style={{
          position: 'fixed',
          bottom: '14px',
          right: '16px',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <button
          type="button"
          onClick={() => popOutCsvMapWindow(triggerToast, () => setShowInlineCsvMap(true))}
          title="Open the CSV Visual Map in a separate standalone desktop window"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid #F59E0B',
            backgroundColor: '#78350F',
            color: '#FEF3C7',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>↗</span>
          <span>Pop Out CSV Map</span>
        </button>

        <button
          type="button"
          onClick={handleSaveAsDefault}
          title="Save current browser setup as the permanent default in code (.tsx) and configuration file"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid #059669',
            backgroundColor: '#065F46',
            color: '#ECFDF5',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>💾</span>
          <span>Save as Default</span>
        </button>

        <button
          type="button"
          onClick={handleExportConfig}
          title="Download/export configuration backup file (.json)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid #334155',
            backgroundColor: '#1E293B',
            color: '#E2E8F0',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>⬇️</span>
          <span>Export Config</span>
        </button>

        <label
          title="Import/restore a configuration backup file (.json)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid #334155',
            backgroundColor: '#1E293B',
            color: '#E2E8F0',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>⬆️</span>
          <span>Import Config</span>
          <input type="file" accept=".json" onChange={handleImportConfigFile} style={{ display: 'none' }} />
        </label>

        <button
          type="button"
          onClick={() => {
            try {
              localStorage.removeItem('weekly_chores_canvas_sheet_data_v1');
              localStorage.removeItem('weekly_chores_canvas_sheet_data_v2');
              localStorage.removeItem('weekly_chores_canvas_sheet_data_v3');
              localStorage.removeItem('weekly_chores_canvas_sheet_data_v4');
              localStorage.removeItem('weekly_chores_canvas_sheet_data_v5');
            } catch (e) {}
            window.postMessage(
              { type: 'SYNC_DATA', payload: INITIAL_SHEET_DATA },
              '*'
            );
            triggerToast('Reset to INITIAL_SHEET_DATA');
          }}
          title="Clear cached localStorage and reload INITIAL_SHEET_DATA from code"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid #334155',
            backgroundColor: '#1E293B',
            color: '#E2E8F0',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>🔄</span>
          <span>Reset Data</span>
        </button>

        <button
          type="button"
          onClick={() => setInspectToggle((v) => !v)}
          title="Toggle Inspect Mode (or hold Alt key while hovering)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            border: isInspecting ? '2px solid #93C5FD' : '1px solid #334155',
            backgroundColor: isInspecting ? '#2563EB' : '#0F172A',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>🔍</span>
          <span>{isInspecting ? 'Inspecting Code (Click element)' : 'Inspect Code (or hold Alt)'}</span>
        </button>

        {isInspecting && (
          <button
            type="button"
            onClick={cycleDockCorner}
            title="Cycle inspector info window corner (or press 'D' key while inspecting)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid #475569',
              backgroundColor: '#1E293B',
              color: '#93C5FD',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.15s ease',
            }}
          >
            <span>◰</span>
            <span>Dock: {dockCorner.replace('-', ' ')} (Key: D)</span>
          </button>
        )}
      </div>
    </div>
  );
}

const isStandaloneCsvView =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('view') === 'csv-map';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isStandaloneCsvView ? (
      <StandaloneCsvMapWindow />
    ) : (
      <>
        <AppWrapper />
        <CodeInspectorOverlay />
      </>
    )}
  </React.StrictMode>
);
