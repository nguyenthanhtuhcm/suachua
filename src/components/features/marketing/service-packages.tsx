import { ArrowRight, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  serviceBoundaryDisclaimers,
  servicePackages,
  type ServicePackage,
} from "@/lib/schemas/service.schema";
import { cn } from "@/lib/utils";

const accentClasses: Record<ServicePackage["accent"], string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-950",
  green: "border-emerald-200 bg-emerald-50 text-emerald-950",
  slate: "border-slate-200 bg-slate-50 text-slate-950",
};

const iconClasses: Record<ServicePackage["accent"], string> = {
  blue: "bg-blue-600 text-white",
  green: "bg-emerald-600 text-white",
  slate: "bg-slate-700 text-white",
};

export function ServicePackages() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-10">
          <div className="flex flex-col justify-center gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-900">
              <ShieldCheck aria-hidden="true" className="size-4" />
              Clinical Lab UAV service
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Chọn gói chẩn đoán trước khi gửi case
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                Basic, Pro và Premium được phân tách theo bằng chứng, mức rủi ro
                và phạm vi pháp lý để bạn không kỳ vọng nhầm về việc được phép bay.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="min-h-11 rounded-md bg-blue-700">
                Gửi case Basic
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-h-11 rounded-md border-slate-300"
              >
                Xem ranh giới an toàn
              </Button>
            </div>
          </div>

          <div
            aria-label="Các cảnh báo pháp lý và an toàn"
            className="grid gap-3"
          >
            {serviceBoundaryDisclaimers.map((disclaimer) => (
              <div
                key={disclaimer}
                className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
              >
                <ClipboardCheck
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-emerald-700"
                />
                <p>{disclaimer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-packages" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center gap-3">
          <FileText aria-hidden="true" className="size-5 text-blue-700" />
          <h2 className="text-xl font-semibold text-slate-950">
            Gói dịch vụ công khai
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {servicePackages.map((servicePackage) => (
            <article
              key={servicePackage.id}
              className="flex min-h-[24rem] flex-col rounded-md border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {servicePackage.label}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-slate-950">
                    {servicePackage.name}
                  </h3>
                </div>
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md",
                    iconClasses[servicePackage.accent],
                  )}
                >
                  <FileText aria-hidden="true" className="size-5" />
                </div>
              </div>

              <dl className="grid flex-1 gap-4 text-sm leading-6">
                <div>
                  <dt className="font-medium text-slate-950">Phù hợp khi</dt>
                  <dd className="mt-1 text-slate-600">{servicePackage.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-950">Kết quả nhận được</dt>
                  <dd className="mt-1 text-slate-600">{servicePackage.outcome}</dd>
                </div>
                <div
                  className={cn(
                    "rounded-md border p-3 text-sm leading-6",
                    accentClasses[servicePackage.accent],
                  )}
                >
                  <dt className="font-semibold">SLA</dt>
                  <dd className="mt-1">{servicePackage.sla}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-950">
                    Ranh giới legal/safety
                  </dt>
                  <dd className="mt-1 text-slate-600">
                    {servicePackage.boundary}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
