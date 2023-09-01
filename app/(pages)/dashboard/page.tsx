'use client'

import { Image } from "@nextui-org/react";

export default function Dashboard () {
  return (
    <>
      <h1 className='mb-10 text-2xl font-bold'>
        Dashboard
      </h1>

      <p className='mb-5 text-center font-medium'>Publishers</p>
      <div className='mb-10 mx-auto w-1/2 grid grid-cols-3 gap-5'>
        <div className='bg-white p-5 flex items-center justify-center rounded-large transition hover:scale-105 cursor-pointer'>
          <Image
            alt='Hoyoverse'
            src='/images/hoyoverse.png'
          />
        </div>
        <div className='bg-white p-5 flex items-center justify-center rounded-large transition hover:scale-105 cursor-pointer'>
          <Image
            alt='Hypergryph'
            src='/images/hypergryph.webp'
          />
        </div>
        <div className='bg-white p-5 flex items-center justify-center rounded-large transition hover:scale-105 cursor-pointer'>
          <Image
            alt='Ubisoft'
            src='/images/ubisoft.png'
            radius='none'
          />
        </div>
      </div>

      <p className='mb-5 text-center font-medium'>Games</p>
      <div className='mx-auto w-1/2 grid grid-cols-3 gap-5'>
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
    </>
  )
}