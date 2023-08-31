'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function CustomNavbar () {
  const router = useRouter()

  return (
    <Navbar isBordered>
      <NavbarContent className='flex justify-center'>
        <NavbarItem>
          <Button
            color='success'
            variant='light'
            onClick={() => router.push('/dashboard')}
          >
            Dashboard
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color='success'
            variant='light'
          >
            Publisher
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color='success'
            variant='light'
          >
            Game
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}