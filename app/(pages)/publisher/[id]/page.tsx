'use client'

import {
  Button,
  Image
} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function DetailPublisher () {
  const router = useRouter()

  return (
    <>
      <div className='mb-10 w-full flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>
          [ Publisher Name ]
        </h1>

        <Button
          onClick={() => router.back()}
        >
          Back
        </Button>
      </div>

      <div>
        <div className='w-1/3 bg-white mb-10 p-5 flex items-center justify-center rounded-large'>
          <Image
            alt='Hypergryph'
            src='/images/hypergryph.webp'
          />
        </div>

        <p className='font-medium mb-5'>Games</p>

        <div className='grid grid-cols-6 gap-5'>
          <Image
            alt='Honkai Star Rail'
            src='/images/hsr.webp'
            className='transition hover:scale-105 cursor-pointer'
          />
          <Image
            alt='Genshin Impact'
            src='/images/gi.webp'
            className='transition hover:scale-105 cursor-pointer'
          />
          <Image
            alt='Arknights'
            src='/images/ak.png'
            className='transition hover:scale-105 cursor-pointer'
          />
        </div>
      </div>
    </>
  )
}