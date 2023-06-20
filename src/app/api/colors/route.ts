import { createClient } from '@supabase/supabase-js'
export const POST = async () => {
  // Initialize the JS client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  )

  // Make a request
  const { data } = await supabase.from('colors').select('*')
  return new Response(JSON.stringify(data), { status: 200 })
}
