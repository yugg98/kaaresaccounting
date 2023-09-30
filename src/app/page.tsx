import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import NavLinks from '@/components/NavLinks'
import FounderNote from '@/components/home/Foundernote'
import Industries from '@/components/home/Industries'
import Testimonials from '@/components/home/Testimonials'
import Whyus from '@/components/home/Whyus'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <Hero/>
    <Testimonials/>
    <Industries/>
    <Whyus/>
    <FounderNote/>
    <Footer/>
   </div>
  )
}
