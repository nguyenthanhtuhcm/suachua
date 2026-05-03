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

  it("reads the public Supabase values from process.env by default", () => {
    const originalUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const originalAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    try {
      process.env.NEXT_PUBLIC_SUPABASE_URL = "https://default.supabase.co";
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "default-anon-key";

      expect(readSupabaseEnv()).toEqual({
        NEXT_PUBLIC_SUPABASE_URL: "https://default.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "default-anon-key",
      });
    } finally {
      if (typeof originalUrl === "undefined") {
        delete process.env.NEXT_PUBLIC_SUPABASE_URL;
      } else {
        process.env.NEXT_PUBLIC_SUPABASE_URL = originalUrl;
      }

      if (typeof originalAnonKey === "undefined") {
        delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      } else {
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalAnonKey;
      }
    }
  });
});
