import React from 'react'
import { Stripe } from "@/app/assets";
import Image from "next/image";
import { HighlightedTextProps } from '@/app/interfaces/components.interface';

const HighlightedText = ({text}:HighlightedTextProps) => {
  return (
    <div className="text-primary relative">
    <div>{text}</div>
    <div>
      <Image
        src={Stripe}
        alt="Line Background"
        className=" absolute -bottom-3"
      />
    </div>
  </div>
  )
}

export default HighlightedText