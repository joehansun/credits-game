'use server'

// In a production build, import Prisma and implement balanced writes.
export async function creditUser(input: { userEmail: string; amount: number; reason?: string; idempotencyKey: string }) {
  // TODO: look up user, create journal entry & lines (debit/credit), update account balance
  return { ok: true }
}

export async function createMatch(input: { userEmail: string; stake: number }) {
  // TODO: create match, move stake from main -> escrow (journal entry)
  return { id: 'new-match-id' }
}

export async function settleMatch(input: { matchId: string; winnerEmail: string }) {
  // TODO: move escrow -> winner main account, mark match settled with fairness hash
  return { ok: true }
}
