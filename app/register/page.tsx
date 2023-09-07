'use client'
import {Button, Link, Input} from "@nextui-org/react";

export default function Page () {
  return (
    <>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-6/12'>
          <h1 className='mb-10 text-4xl font-bold text-center text-success'>
            NextJs Basic
          </h1>
          <h1 className='mb-5 font-medium'>
            Register
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
          <Input
            label='Password Confirmation'
            type='password'
            isRequired
            className='mb-5'
          />
          <p className='float-right mb-5 text-sm'>
            Already have an account?
            <Link href='/' size='sm' color='success' className='ml-2'>
              Login here
            </Link>
          </p>
          <Button
            size='lg'
            color='success'
            className='w-full'
          >
            Register
          </Button>
        </div>
      </div>
    </>
  )
}