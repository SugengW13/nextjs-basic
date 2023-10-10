export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    '/api/games', '/api/publishers', '/api/users',
    '/dashboard', '/publisher', '/game'
  ]
}