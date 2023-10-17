import Cta from '@/components/Cta'
import Cards from '@/components/about/Cards'
import Hero from '@/components/about/hero'
import FounderNote from '@/components/home/Foundernote'
import Whyus from '@/components/home/Whyus'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Whyus/>
      <Cards/>
      <FounderNote/>
      <Cta/>

    </div>
  )
}

export default page