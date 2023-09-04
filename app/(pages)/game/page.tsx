import CustomTable from "@/components/CustomTable";
import {getGames} from "@/libs/(api)/game";
import Game from "@/types/game"

export default async function Game () {
  const games: Game[] = await getGames()

  const tableHeaders: string[] = ['No', 'Title', 'Published At', 'Publisher Name', 'Action']
  const tableItems: object[] = games.map((item) => ({
    id: item.id,
    title: item.title,
    published_at: item.published_at,
    publisher_name: item.publisher.name
  }))

  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Game
      </h1>

      <div className='w-3/4 mx-auto'>
        <CustomTable
          tableHeaders={tableHeaders}
          tableItems={tableItems}
        />
      </div>
    </>
  )
}