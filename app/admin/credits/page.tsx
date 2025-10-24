'use client'
import { useState } from 'react'

export default function AdminCreditsPage() {
  const [amount, setAmount] = useState(100)
  const [email, setEmail] = useState('')

  const grant = async () => {
    alert(`Would grant ${amount} credits to ${email} (stub).`)
  }

  const remove = async () => {
    alert(`Would remove ${amount} credits from ${email} (stub).`)
  }

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Admin: Test Credits</h1>
      <input className="w-full border rounded px-3 py-2" placeholder="user email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full border rounded px-3 py-2" type="number" value={amount} onChange={e=>setAmount(parseInt(e.target.value||'0'))} />
      <div className="flex gap-2">
        <button onClick={grant} className="px-3 py-2 rounded bg-black text-white">Grant</button>
        <button onClick={remove} className="px-3 py-2 rounded border">Remove</button>
      </div>
      <p className="text-xs text-gray-500">These actions should call server actions that write balanced journal entries.</p>
    </div>
  )
}
