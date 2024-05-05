import React from 'react'
import { LineBg } from '@/app/assets'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className="relative h-screen-50">
      <Image
        src={LineBg}
        alt="Line Background"
        layout="fill"
        objectFit="cover"
        className=" -z-10 px-20"
      />
      <div>
        <div className="w-full flex items-center justify-center">
        <div className="uppercase text-5xl  ">
        We Make your <span>Payment</span> Easier and Faster
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner