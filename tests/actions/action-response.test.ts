import { describe, expect, it } from "vitest";

import {
  createActionFailure,
  createActionSuccess,
} from "@/lib/actions/action-response";

describe("ActionResponse helpers", () => {
  it("creates a success response with typed data", () => {
    expect(createActionSuccess({ caseId: "CASE-001" })).toEqual({
      success: true,
      data: { caseId: "CASE-001" },
    });
  });

  it("creates a server-error response", () => {
    expect(createActionFailure("Upload failed")).toEqual({
      success: false,
      serverError: "Upload failed",
    });
  });
});
