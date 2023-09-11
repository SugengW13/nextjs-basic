'use client'

import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from '@nextui-org/react'
import { store } from "@/store/store";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <NextUIProvider >
          {children}
        </NextUIProvider>
      </SessionProvider>
    </Provider>
  )
}