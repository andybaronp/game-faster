import { createClient } from '@supabase/supabase-js'
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(url as string, key as string)

export const singOut = async () => {
  await supabase.auth.signOut()
}
export const singIn = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

export const getSessionSb = async () => await supabase.auth.getSession()
