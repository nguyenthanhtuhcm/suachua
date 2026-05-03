import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PublicServicesPage from "@/app/(public)/page";
import {
  serviceBoundaryDisclaimers,
  servicePackages,
} from "@/lib/schemas/service.schema";

function countWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

describe("public service packages page", () => {
  it("renders Basic, Pro, and Premium with fit conditions and safety boundaries", () => {
    render(<PublicServicesPage />);

    for (const servicePackage of servicePackages) {
      expect(
        screen.getByRole("heading", { name: servicePackage.name }),
      ).toBeInTheDocument();
      expect(screen.getByText(servicePackage.bestFor)).toBeInTheDocument();
      expect(screen.getByText(servicePackage.boundary)).toBeInTheDocument();
    }

    expect(screen.getByText(/3 ngày làm việc/i)).toBeInTheDocument();
    expect(screen.getByText(/không phải flight clearance/i)).toBeInTheDocument();
    expect(
      screen.getByText(/lab thực hành kỹ thuật, không cấp bằng bay/i),
    ).toBeInTheDocument();
  });

  it("keeps legal and safety disclaimers concise", () => {
    expect(serviceBoundaryDisclaimers).not.toHaveLength(0);

    for (const disclaimer of serviceBoundaryDisclaimers) {
      expect(countWords(disclaimer)).toBeLessThanOrEqual(49);
    }
  });
});
