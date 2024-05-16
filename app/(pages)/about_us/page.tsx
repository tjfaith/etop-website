'use client'
import { AboutBanner, Mission, Visit } from '@/app/components'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='space-y-10'>
      <AboutBanner/>
      <Mission/>
      <Visit/>
    </div>
  )
}

export default AboutUs