'use client'
import React from 'react'
import {CareerBanner, OpenPosition, Values, WeOffer, FindRole} from '@/app/components'
const Careers = () => {
  return (
    <div className="space-y-10">
        <CareerBanner/>
        <Values/>
        <WeOffer/>
        <OpenPosition/>
        <FindRole/>
    </div>
  )
}

export default Careers