import { createBrowserClient } from "@supabase/ssr";

import { readSupabaseEnv } from "@/lib/env";
import type { Database } from "@/types/database.types";

export function createClient() {
  const env = readSupabaseEnv();

  return createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
