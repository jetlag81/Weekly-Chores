// Shared Canonical Chore Utilities for Multi-Device Household Synchronization

export function normalizeTaskName(title: string | null | undefined): string {
  if (!title) return "";
  return String(title)
    .toLowerCase()
    .replace(/[•\-\–\—\(\)\:\,\/\n\r]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getChoreCanonicalKey(title: string | null | undefined): string {
  if (!title) return "";
  const lower = String(title).toLowerCase();

  // 1. Pet Care
  if (lower.includes("litter")) return "litter_box";
  if (
    lower.includes("herd") ||
    (lower.includes("feed") && (lower.includes("breakfast") || lower.includes("supper") || lower.includes("herd") || lower.includes("animal")))
  ) {
    return "feed_herd";
  }
  if (lower.includes("walk") && (lower.includes("dog") || lower.includes("ellie") || lower.includes("lewis"))) {
    return "walk_dogs";
  }
  if (lower.includes("feeding station") || (lower.includes("deep clean") && lower.includes("feeding"))) {
    return "feeding_station_deep_clean";
  }

  // 2. Kitchen
  if (lower.includes("dishwasher") && (lower.includes("empty") || lower.includes("load") || lower.includes("before supper"))) {
    return "empty_dishwasher";
  }
  if (
    (lower.includes("supper") && (lower.includes("plan") || lower.includes("prep") || lower.includes("meal") || lower.includes("make"))) ||
    (lower.includes("dinner") && lower.includes("plan"))
  ) {
    return "make_supper";
  }
  if (
    lower.includes("kitchen cleanup") ||
    lower.includes("kitchen clean-up") ||
    (lower.includes("dishes") && (lower.includes("dinner") || lower.includes("clean")))
  ) {
    return "dinner_dishes";
  }

  // 3. Bedrooms & Personal
  if (lower.includes("bedroom") || lower.includes("personal spaces")) return "tidy_bedrooms";
  if (lower.includes("laundry")) return "laundry";
  if (lower.includes("basement")) return "clean_basement";

  // 4. Curbside Waste & Recycling
  if (lower.includes("recycling")) return "curbside_recycling";
  if (lower.includes("waste")) return "curbside_waste";

  // 5. Administration
  if (lower.includes("sign-off") || lower.includes("sign off") || lower.includes("inspection")) {
    return "weekly_sign_off";
  }

  return normalizeTaskName(title);
}

export function matchChore(
  taskA: string | null | undefined,
  taskB: string | null | undefined,
  indexA?: number,
  indexB?: number
): boolean {
  if (indexA !== undefined && indexB !== undefined && indexA === indexB) return true;
  if (!taskA || !taskB) return false;
  const keyA = getChoreCanonicalKey(taskA);
  const keyB = getChoreCanonicalKey(taskB);
  if (keyA && keyB && keyA === keyB) return true;
  const normA = normalizeTaskName(taskA);
  const normB = normalizeTaskName(taskB);
  if (normA && normB && (normA === normB || normA.includes(normB) || normB.includes(normA))) return true;
  return false;
}

