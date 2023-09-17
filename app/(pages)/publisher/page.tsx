'use client'

import CustomTable from "@/components/CustomTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {getItems, createItem, deleteItem, updateItem} from "@/store/features/publisher/publisher-slice";
import {Input} from "@nextui-org/react";
import SearchIcon from "@/components/icons/SearchIcon";
import ModalFormPublisher from "@/components/ModalFormPublisher";
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

  const deletePublisher = (id: string) => {
    dispatch(deleteItem({id}))
  }

  const updatePublisher = (id: string, name: string) => {
    dispatch(updateItem({ id, name }))
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

        <ModalFormPublisher
          formType={'CREATE'}
          isLoading={isLoadingForm}
          addPublisher={addPublisher}
          updatePublisher={() => {}}
        />
      </div>

      {
        isLoading
        ? <h1>Loading</h1>
        : publishers.length > 0
            ? <CustomTable
                isLoadingForm={isLoadingForm}
                tableHeaders={tableHeaders}
                tableItems={tableItems}
                deleteItem={deletePublisher}
                updateItem={updatePublisher}
              />
            : <h1>Empty</h1>
      }
    </>
  )
}