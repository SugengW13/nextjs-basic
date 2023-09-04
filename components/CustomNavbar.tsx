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
      <NavbarContent justify='start'>
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
            onClick={() => router.push('/publisher')}
          >
            Publisher
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color='success'
            variant='light'
            onClick={() => router.push('/game')}
          >
            Game
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            color='danger'
            variant='flat'
            onClick={() => router.push('/')}
          >
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}