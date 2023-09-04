import CustomTable from "@/components/CustomTable";
import {getPublishers} from "@/libs/(api)/publisher";
import Publisher from "@/types/publisher";

export default async function Publisher () {
  const publishers: Publisher[] = await getPublishers()

  const tableHeaders: string[] = ['No', 'Name', 'Total Games', 'Action']
  const tableItems: object[] = publishers.map((item) => ({
    id: item.id,
    name: item.name,
    total_games: item.games.length
  }))

  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Publisher
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