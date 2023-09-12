'use client'

import {
  Input,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {ChangeEvent, useState} from "react";
import {logIn} from "@/store/features/user/user-slice";

export default function Home() {
  const router = useRouter()

  const isLoading = useAppSelector((state) => state.user.isLoading)
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState<string>('admin@gmail.com')
  const [password, setPassword] = useState<string>('password')

  const onInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const onInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onClickLogIn = async () => {
    dispatch(logIn({ email, password }))
  }

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
            onInput={onInputEmail}
          />
          <Input
            label='Password'
            type='password'
            isRequired
            className='mb-5'
            onInput={onInputPassword}
          />
          <Button
            size='lg'
            color='success'
            className='w-full mb-5'
            isLoading={isLoading}
            onClick={() => onClickLogIn()}
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
