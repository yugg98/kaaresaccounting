import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import NavLinks from '@/components/NavLinks'
import Services from '@/components/Services'
import FounderNote from '@/components/home/Foundernote'
import Industries from '@/components/home/Industries'
import Testimonials from '@/components/home/Testimonials'
import Whyus from '@/components/home/Whyus'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <Hero/>
    <Container className="!px-0 border-x">
    <div className="mx-auto max-w-2xl text-center py-12 ">
          <h2 className="text-4xl font-lg tracking-tight font-dmserif text-black sm:text-6xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
    <Services/>
    </Container>
    <Testimonials/>
    <Industries/>
    <Whyus/>
    <FounderNote/>
   </div>
  )
}
