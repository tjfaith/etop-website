'use client'
import { ServicesBanner, ServicesList } from '@/app/components'
import React from 'react'

const Services = () => {
  return (
    <div className='space-y-10'>
        <ServicesBanner/>
        <ServicesList/>
    </div>
  )
}

export default Services