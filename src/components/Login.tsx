import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
const supabase = createClient(
  'https://vstbdzcaujholuikmhdp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdGJkemNhdWpob2x1aWttaGRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzk3NDgsImV4cCI6MjAwMjI1NTc0OH0.1ZBth7lSX-f5Rga6_gMcIeODp887QNhdoI8qk0vRryo',
)

export default function Login() {
  const [session, setSession] = useState(null)
  console.log(session)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  } else {
    return <div>Logged in!</div>
  }
}
supabase.auth.getSession()
