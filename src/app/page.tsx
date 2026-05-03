import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-8 px-6 py-16 sm:px-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            suachua UAV clinic
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Accountless Intake foundation
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Next.js App Router, Supabase, shadcn/ui, Zustand, Zod,
            next-safe-action and Vitest are ready for the first intake flow.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Start intake setup</Button>
          <Button variant="outline" size="lg">
            View tracker shell
          </Button>
        </div>
      </section>
    </main>
  );
}
