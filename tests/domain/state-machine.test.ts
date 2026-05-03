import { describe, expect, it } from "vitest";

import { CASE_STATUSES, isCaseStatus } from "@/lib/domain/state-machine";

describe("case status foundation", () => {
  it("defines the architecture-approved case statuses", () => {
    expect(CASE_STATUSES).toEqual([
      "new",
      "missing_info",
      "in_review",
      "report_ready",
      "waiting_decision",
      "referred",
      "closed",
    ]);
  });

  it("guards unknown status values", () => {
    expect(isCaseStatus("new")).toBe(true);
    expect(isCaseStatus("deleted")).toBe(false);
  });
});
