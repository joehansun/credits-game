'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Move = { player: string; action: string; at: number }

export default function MatchDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [log, setLog] = useState<Move[]>([])

  // Stub realtime: append a fake turn every 2s
  useEffect(()=>{
    const t = setInterval(()=>{
      setLog(l => [...l, { player: Math.random() > 0.5 ? 'You' : 'Opponent', action: 'plays a card', at: Date.now() }])
    }, 2000)
    return ()=>clearInterval(t)
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Match {id}</h1>
      <div className="border rounded p-4">
        <p className="text-sm text-gray-600 mb-2">Real-time table placeholder. Wire Ably/Pusher for production.</p>
        <div className="h-48 overflow-auto border rounded p-2 bg-gray-50">
          {log.map((m, i)=>(
            <div key={i} className="text-sm">{new Date(m.at).toLocaleTimeString()}: <strong>{m.player}</strong> {m.action}</div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-2 border rounded">Play Card</button>
          <button className="px-3 py-2 border rounded">Pass</button>
          <button className="px-3 py-2 border rounded bg-black text-white">Settle</button>
        </div>
      </div>
    </div>
  )
}
