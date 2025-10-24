import Link from 'next/link'

export default function DashboardPage() {
  // In a real app, fetch the authenticated user and balance server-side.
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="border rounded p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Balance</div>
            <div className="text-3xl font-bold">1,000</div>
          </div>
          <div className="flex gap-2">
            <Link className="px-3 py-2 border rounded" href="/admin/credits">Grant Test Credits</Link>
            <Link className="px-3 py-2 border rounded" href="/matches">Find a Match</Link>
          </div>
        </div>
      </div>
      <div className="border rounded p-4">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        <p className="text-sm text-gray-500">Transaction history will appear here.</p>
      </div>
    </div>
  )
}
