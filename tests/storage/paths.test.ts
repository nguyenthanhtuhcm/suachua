import { describe, expect, it } from "vitest";

import {
  buildPrivateEvidencePath,
  toPosixSafeSegment,
} from "@/lib/storage/paths";

describe("storage path helpers", () => {
  it("normalizes unsafe file or folder segments to POSIX-safe names", () => {
    expect(toPosixSafeSegment("  DJI Log 01.BIN  ")).toBe("dji_log_01-bin");
    expect(toPosixSafeSegment("ảnh FC mặt trước.jpg")).toBe(
      "anh_fc_mat_truoc-jpg",
    );
  });

  it("builds private evidence paths under the private namespace", () => {
    expect(buildPrivateEvidencePath("CASE-001", "Flight Log.BIN")).toBe(
      "private/cases/case-001/evidence/flight_log-bin",
    );
  });
});
