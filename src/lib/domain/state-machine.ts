export const CASE_STATUSES = [
  "new",
  "missing_info",
  "in_review",
  "report_ready",
  "waiting_decision",
  "referred",
  "closed",
] as const;

export type CaseStatus = (typeof CASE_STATUSES)[number];

export function isCaseStatus(value: unknown): value is CaseStatus {
  return (
    typeof value === "string" &&
    CASE_STATUSES.includes(value as CaseStatus)
  );
}
