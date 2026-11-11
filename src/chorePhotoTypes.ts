// Chore Photo Proofs Service & Compression Utility
// Allows kids to capture, compress, and attach photo proof of completed tasks
// for parent verification, approval stars, and household activity feed broadcasts.

export interface ChorePhotoProof {
  id: string;
  url: string; // Base64 data URL (compressed JPEG)
  timestamp: number;
  kidName: string;
  taskTitle: string;
  dateKey: string;
  choreIndex: number;
  note?: string;
  verified?: boolean; // Parent approval
  verifiedBy?: string; // e.g. "Thom" or "Meghan"
  verifiedAt?: number;
  redoRequested?: boolean;
  redoFeedback?: string;
}

const STORAGE_KEY_PHOTO_PROOFS = "weekly_chores_photo_proofs_v1";

/**
 * Resizes and compresses an image file to a lightweight Base64 JPEG data URL.
 * Keeps image crisp while ensuring it is small (~60-120KB) for instant network sync.
 */
export async function compressImageFile(
  file: File,
  maxDimension = 960,
  quality = 0.78
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to load image"));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(readerEvent.target?.result as string);
          return;
        }

        // Draw image onto canvas
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to lightweight JPEG data URL
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.src = readerEvent.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Retrieves all stored chore photo proofs from local storage.
 */
export function getAllChorePhotoProofs(): ChorePhotoProof[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PHOTO_PROOFS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Saves or updates a chore photo proof in the persistent registry.
 */
export function saveChorePhotoProof(proof: ChorePhotoProof): ChorePhotoProof[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getAllChorePhotoProofs();
    // Replace if exists for same dateKey, choreIndex, and kidName, or append
    const filtered = current.filter(
      p => !(
        p.dateKey === proof.dateKey &&
        p.choreIndex === proof.choreIndex &&
        p.kidName.toLowerCase() === proof.kidName.toLowerCase()
      ) && p.id !== proof.id
    );

    // Keep the latest 80 photo proofs to prevent unbounded storage growth
    const updated = [proof, ...filtered].slice(0, 80);
    localStorage.setItem(STORAGE_KEY_PHOTO_PROOFS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn("Error saving chore photo proof:", err);
    return [];
  }
}

/**
 * Retrieves photo proof for a specific chore, date, and kid.
 */
export function getPhotoProofForChore(
  dateKey: string,
  choreIndex: number,
  kidName?: string
): ChorePhotoProof | null {
  const all = getAllChorePhotoProofs();
  return all.find(p => {
    const matchDate = p.dateKey === dateKey;
    const matchChore = p.choreIndex === choreIndex;
    const matchKid = kidName ? p.kidName.toLowerCase() === kidName.toLowerCase() : true;
    return matchDate && matchChore && matchKid;
  }) || null;
}

/**
 * Marks a photo proof as verified or requests a redo.
 */
export function updateChorePhotoVerification(
  proofId: string,
  verified: boolean,
  verifiedBy = "Parents",
  redoFeedback?: string
): ChorePhotoProof | null {
  if (typeof window === "undefined") return null;
  try {
    const all = getAllChorePhotoProofs();
    let updatedProof: ChorePhotoProof | null = null;

    const nextList = all.map(p => {
      if (p.id === proofId) {
        updatedProof = {
          ...p,
          verified,
          verifiedBy,
          verifiedAt: Date.now(),
          redoRequested: !verified,
          redoFeedback: !verified ? redoFeedback : undefined
        };
        return updatedProof;
      }
      return p;
    });

    if (updatedProof) {
      localStorage.setItem(STORAGE_KEY_PHOTO_PROOFS, JSON.stringify(nextList));
    }
    return updatedProof;
  } catch {
    return null;
  }
}

/**
 * Counts photo proofs pending parent review.
 */
export function getPendingPhotoProofsCount(): number {
  const all = getAllChorePhotoProofs();
  return all.filter(p => !p.verified && !p.redoRequested).length;
}

export interface ChorePhotoRequest {
  id: string;
  dateKey: string;
  choreIndex: number;
  kidName: string;
  taskTitle: string;
  requestedBy: string; // e.g. "Thom & Meghan"
  requestedAt: number;
  message?: string;
  fulfilled?: boolean;
}

const STORAGE_KEY_PHOTO_REQUESTS = "weekly_chores_photo_requests_v1";

export function getStoredPhotoRequests(): ChorePhotoRequest[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PHOTO_REQUESTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePhotoRequest(req: ChorePhotoRequest): ChorePhotoRequest[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getStoredPhotoRequests();
    const filtered = current.filter(
      r => !(
        r.dateKey === req.dateKey &&
        r.choreIndex === req.choreIndex &&
        r.kidName.toLowerCase() === req.kidName.toLowerCase()
      )
    );
    const updated = [req, ...filtered].slice(0, 50);
    localStorage.setItem(STORAGE_KEY_PHOTO_REQUESTS, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function hasPendingPhotoRequest(
  dateKey: string,
  choreIndex: number,
  kidName: string
): boolean {
  const reqs = getStoredPhotoRequests();
  return reqs.some(
    r =>
      r.dateKey === dateKey &&
      r.choreIndex === choreIndex &&
      r.kidName.toLowerCase() === kidName.toLowerCase() &&
      !r.fulfilled
  );
}

export function markPhotoRequestFulfilled(
  dateKey: string,
  choreIndex: number,
  kidName: string
): void {
  if (typeof window === "undefined") return;
  try {
    const reqs = getStoredPhotoRequests();
    const updated = reqs.map(r => {
      if (
        r.dateKey === dateKey &&
        r.choreIndex === choreIndex &&
        r.kidName.toLowerCase() === kidName.toLowerCase()
      ) {
        return { ...r, fulfilled: true };
      }
      return r;
    });
    localStorage.setItem(STORAGE_KEY_PHOTO_REQUESTS, JSON.stringify(updated));
  } catch {}
}

