import React from "react";
import {Metadata} from "next";
import CustomNavbar from "@/components/CustomNavbar";

export const metadata: Metadata = {
  title: 'NextJs Basic | Dashboard'
}

export default function PageLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomNavbar />
      <div className='mx-auto p-10 max-w-[1024px]'>
        { children }
      </div>
    </>
  )
}