const DIACRITIC_PATTERN = /[\u0300-\u036f]/g;

export function toPosixSafeSegment(value: string): string {
  const normalized = value
    .normalize("NFD")
    .replace(DIACRITIC_PATTERN, "")
    .toLowerCase()
    .trim()
    .replace(/\./g, "-")
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/-+/g, "-")
    .replace(/^[-_]+|[-_]+$/g, "");

  return normalized || "unnamed";
}

export function buildPrivateEvidencePath(
  caseId: string,
  fileName: string,
): string {
  return [
    "private",
    "cases",
    toPosixSafeSegment(caseId),
    "evidence",
    toPosixSafeSegment(fileName),
  ].join("/");
}
