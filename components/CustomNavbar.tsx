'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {logOut} from "@/store/features/user/user-slice";

export default function CustomNavbar () {
  const router = useRouter()
  const isLoading = useAppSelector((state) => state.user.isLoading)
  const dispatch = useAppDispatch()

  const onClickLogOut = async () => {
    dispatch(logOut())
  }

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
            isLoading={isLoading}
            onClick={() => onClickLogOut()}
          >
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}