'use client'
import { AboutBanner, Mission, Questions, Visit } from '@/app/components'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='space-y-10'>
      <AboutBanner/>
      <Mission/>
      <Visit/>
      <Questions/>
    </div>
  )
}

export default AboutUs