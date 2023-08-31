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
      <div className='p-10'>
        { children }
      </div>
    </>
  )
}