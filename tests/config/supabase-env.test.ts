import { describe, expect, it } from "vitest";

import { readSupabaseEnv, supabaseEnvSchema } from "@/lib/env";

describe("supabase environment validation", () => {
  it("accepts a public Supabase URL and anon key", () => {
    const result = supabaseEnvSchema.safeParse({
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon-key",
    });

    expect(result.success).toBe(true);
  });

  it("throws a clear configuration error when required variables are missing", () => {
    expect(() => readSupabaseEnv({})).toThrow(
      "Supabase environment variables are not configured correctly",
    );
  });
});
