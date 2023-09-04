export async function getGames () {
  const response =
    await fetch(`${process.env.BASE_URL}/api/games`, { next: { revalidate: 0 }})
  return response.json()
}