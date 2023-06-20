import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
)

export const singOut = async () => {
  await supabase.auth.signOut()
}
export const singIn = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

export const getSessionSb = async () => await supabase.auth.getSession()
