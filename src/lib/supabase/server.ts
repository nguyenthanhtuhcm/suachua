import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { readSupabaseEnv } from "@/lib/env";
import type { Database } from "@/types/database.types";

export async function createClient() {
  const env = readSupabaseEnv();
  const cookieStore = await cookies();

  return createServerClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Server Components cannot set cookies. Server Actions and Route
            // Handlers can, so auth refresh still works in write contexts.
          }
        },
      },
    },
  );
}
