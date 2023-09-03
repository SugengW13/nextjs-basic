import CustomTable from "@/components/CustomTable";
import {getPublishers} from "@/libs/(api)/publisher";
import {Publisher} from "@/types/publisher";

export default async function Publisher () {
  const publishers: Publisher[] = await getPublishers()

  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Publisher
      </h1>

      <div className='w-3/4 mx-auto'>
        <CustomTable publishers={publishers}/>
      </div>
    </>
  )
}