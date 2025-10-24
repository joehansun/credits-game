import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Play Credits. Win Bragging Rights.</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Prototype a head‑to‑head card game with server‑side credits and match escrow. Real‑money deposits are disabled by default.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link className="px-4 py-2 rounded bg-black text-white" href="/login">Sign in</Link>
          <Link className="px-4 py-2 rounded border" href="/matches">Browse Matches</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {title: 'Credits Ledger', desc: 'Double-entry journal with idempotent writes.'},
          {title: 'Match Escrow', desc: 'Lock stakes until the match settles.'},
          {title: 'Realtime-Ready', desc: 'Plug in Ably/Pusher to sync turns.'},
        ].map((f)=>(
          <div key={f.title} className="border rounded-lg p-4">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
