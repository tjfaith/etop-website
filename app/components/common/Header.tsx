import React from 'react'
import Image from 'next/image'
import {FullLogo} from '@/app/assets'
import {Button} from '@/app/components'

const Header = () => {
  return (
    <div className=" px-28 pt-5 flex w-full items-center justify-between">
        <Image src={FullLogo} alt="logo" width={120} height={20}/>
        <ul className="flex items-center justify-between gap-10">
          <li>
            About us
          </li>
          <li>Services</li>
          <li>Industry solutions</li>
          <li>Contact us</li>
        </ul>
        <Button onClick={()=>{}} label="Get in touch"/>
    </div>
  )
}

export default Header