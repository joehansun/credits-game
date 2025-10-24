import Link from 'next/link'

const mockMatches = [
  { id: 'm1', stake: 50, state: 'PENDING' },
  { id: 'm2', stake: 100, state: 'ACTIVE' },
]

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Matches</h1>
        <Link href="/matches/new" className="px-3 py-2 rounded bg-black text-white">Create Match</Link>
      </div>
      <div className="grid gap-3">
        {mockMatches.map(m => (
          <Link key={m.id} href={`/matches/${m.id}`} className="border rounded p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">Match {m.id}</div>
              <div className="text-sm text-gray-500">Stake: {m.stake} credits</div>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-gray-100">{m.state}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
