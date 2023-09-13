'use client'

import CustomTable from "@/components/CustomTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {getItems, createItem} from "@/store/features/publisher/publisher-slice";
import {Input, Button} from "@nextui-org/react";
import SearchIcon from "@/components/icons/SearchIcon";
import ModalCreatePublisher from "@/components/ModalCreatePublisher";
import moment from "momnet";

export default function Publisher () {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.publisher.isLoading)
  const isLoadingForm = useAppSelector((state) => state.publisher.isLoadingForm)
  const publishers = useAppSelector((state) => state.publisher.items)

  const [searchKey, setSearchKey] = useState<string>('')

  const tableHeaders: string[] = ['No', 'Name', 'Total Games', 'Created At', 'Action']
  const tableItems: object[] = publishers.map((item) => ({
    id: item.id,
    name: item.name,
    created_at: moment(item.created_at).format('MM-DD-YYYY'),
    total_games: item.games.length
  }))

  const getPublishers = () => {
    dispatch(getItems({
      searchKey
    }))
  }

  const addPublisher = (value: string) => {
    dispatch(createItem({
      name: value
    }))
  }

  const onInputSearchKey = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value)
  }

  const onKeyPressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') getPublishers()
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

      <div className='mb-10 flex gap-5 items-center'>
        <Input
          label='Search'
          type='text'
          onInput={onInputSearchKey}
          onKeyDown={onKeyPressEnter}
          endContent={
            <SearchIcon className='cursor-pointer active:opacity-50' onClick={() => onClickSearch()}/>
          }
        />

        <ModalCreatePublisher
          isLoading={isLoadingForm}
          addPublisher={addPublisher}
        />
      </div>

      {
        isLoading
        ? <h1>Loading</h1>
        : publishers.length > 0
            ? <CustomTable tableHeaders={tableHeaders} tableItems={tableItems} />
            : <h1>Empty</h1>
      }
    </>
  )
}