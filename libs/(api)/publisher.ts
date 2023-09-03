export async function getPublishers () {
  const response =
    await fetch(`${process.env.BASE_URL}/api/publishers`, { next: { revalidate: 0 }})
  return response.json()
}