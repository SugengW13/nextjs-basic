'use client'

import CustomTable from "@/components/CustomTable";
import moment from "momnet";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {useEffect} from "react";
import {getItems} from "@/store/features/game/game-slice";

export default function Game () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  const isLoading = useAppSelector((state) => state.game.isLoading)
  const games = useAppSelector((state) => state.game.items)

  const tableHeaders: string[] = ['No', 'Title', 'Published At', 'Publisher Name', 'Action']
  const tableItems: object[] = games.map((item) => ({
    id: item.id,
    title: item.title,
    published_at: moment(item.published_at).format('DD-MM-YYYY'),
    publisher_name: item.publisher.name
  }))

  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Game
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