'use client'

import {
  Input,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-6/12'>
          <h1 className='mb-10 text-4xl font-bold text-center text-success'>
            NextJs Basic
          </h1>
          <h1 className='mb-5 font-medium'>
            Login
          </h1>
          <Input
            label='Email'
            type='email'
            isRequired
            className='mb-5'
          />
          <Input
            label='Password'
            type='password'
            isRequired
            className='mb-5'
          />
          <Button
            size='lg'
            color='success'
            className='w-full mb-5'
            onClick={() => router.push('/dashboard')}
          >
            Login
          </Button>
          <Button
            size='lg'
            color='success'
            variant='ghost'
            className='w-full'
            onClick={() => router.push('/register')}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  )
}
