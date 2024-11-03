export function generateInvitationToken(): string {
  const array = new Uint8Array(6)
  crypto.getRandomValues(array)

  return Array.from(array)
    .map(x => x % 36)
    .map(x => x.toString(36))
    .join('')
    .slice(0, 6)
}
