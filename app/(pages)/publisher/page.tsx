'use client'

import CustomTable from "@/components/CustomTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {useEffect} from "react";
import {getItems} from "@/store/features/publisher/publisher-slice";

export default function Publisher () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  const isLoading = useAppSelector((state) => state.publisher.isLoading)
  const publishers = useAppSelector((state) => state.publisher.items)

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

      { isLoading
        ? <h1>Loading</h1>
        : <div className='w-3/4 mx-auto'>
            <CustomTable
              tableHeaders={tableHeaders}
              tableItems={tableItems}
            />
          </div>
      }
    </>
  )
}