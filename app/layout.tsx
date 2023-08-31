import React from 'react';
import type { Metadata } from 'next'
import {Providers} from "@/app/providers";
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJs Basic'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark h-full'>
      <body>
        <Providers>
          <main className='h-screen'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
