import CustomTable from "@/components/CustomTable";

export default function Publisher () {
  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Publisher
      </h1>

      <div className='w-3/4 mx-auto'>
        <CustomTable/>
      </div>
    </>
  )
}