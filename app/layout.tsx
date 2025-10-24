import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold">Credits Game</Link>
              <nav className="flex gap-4 text-sm">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/matches">Matches</Link>
                <Link href="/login">Login</Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
          </main>
          <footer className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Credits Game. Play-money prototype.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
