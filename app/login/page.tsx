'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMagic = async () => {
    setError(null)
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin + '/dashboard' } })
    if (error) setError(error.message)
    else setSent(true)
  }

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="you@example.com"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button onClick={sendMagic} className="px-4 py-2 rounded bg-black text-white w-full">Send magic link</button>
      {sent && <p className="text-green-600 text-sm">Check your email for the sign-in link.</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <p className="text-xs text-gray-500">No password required. Magic link only.</p>
    </div>
  )
}
