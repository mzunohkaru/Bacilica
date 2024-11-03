import * as crypto from 'crypto'

export function hashPassword(password: string): string {
  return crypto.createHash('sha512').update(password).digest('hex')
}

export function verifyPassword(
  password: string,
  hashedPassword: string,
): boolean {
  const verifyHash = crypto.createHash('sha512').update(password).digest('hex')
  return hashedPassword === verifyHash
}
