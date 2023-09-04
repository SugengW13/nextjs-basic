import CustomTable from "@/components/CustomTable";

export default function Game () {
  const tableHeaders: string[] = ['test']
  const tableItems: object[] = [{
    test: 'test'
  }]

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