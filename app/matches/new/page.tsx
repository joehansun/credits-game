'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewMatchPage() {
  const [stake, setStake] = useState(50)
  const router = useRouter()

  const create = async () => {
    // TODO: call server action to create a match and escrow stake
    router.push('/matches/m-new')
  }

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Create a Match</h1>
      <label className="block text-sm">Stake (credits)</label>
      <input type="number" value={stake} onChange={e=>setStake(parseInt(e.target.value||'0'))} className="w-full border rounded px-3 py-2" />
      <button onClick={create} className="px-4 py-2 rounded bg-black text-white">Create</button>
    </div>
  )
}
