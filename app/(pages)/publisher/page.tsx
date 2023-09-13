'use client'

import CustomTable from "@/components/CustomTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {getItems} from "@/store/features/publisher/publisher-slice";
import {Input} from "@nextui-org/react";
import SearchIcon from "@/components/icons/SearchIcon";

export default function Publisher () {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.publisher.isLoading)
  const publishers = useAppSelector((state) => state.publisher.items)

  const [searchKey, setSearchKey] = useState<string>('')

  const tableHeaders: string[] = ['No', 'Name', 'Total Games', 'Action']
  const tableItems: object[] = publishers.map((item) => ({
    id: item.id,
    name: item.name,
    total_games: item.games.length
  }))

  const getPublishers = () => {
    dispatch(getItems({
      searchKey
    }))
  }

  const onInputSearchKey = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value)
  }

  const onKeyPressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') { getPublishers() }
  }

  const onClickSearch = () => { getPublishers() }

  useEffect(() => {
    getPublishers()
  }, [])

  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Publisher
      </h1>

      <Input
        label='Search'
        type='text'
        className='mb-10'
        isRequired
        onInput={onInputSearchKey}
        onKeyDown={onKeyPressEnter}
        endContent={
          <SearchIcon className='cursor-pointer active:opacity-50' onClick={() => onClickSearch()}/>
        }
      />

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