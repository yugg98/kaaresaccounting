import React from 'react'
import { Container } from './Container'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="border-y">
    <Container className="border-x">
        <div className="grid md:grid-cols-2">
            <div className='flex flex-col justify-center items-center'>
                <p className="text-6xl">Accountancy & Taxation, Auditing & Advisory.</p>
                <p className="text-lg mt-6">We are a trusted provider of comprehensive accounting, auditing, taxation and Global Bookkeeping and reporting services for businesses of all sizes.</p>
            </div>
            <div>
                <img src="/images/hero.png" alt="Hero" />
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Hero