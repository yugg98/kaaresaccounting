import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Container } from '../Container'

const cards = [
  {
    name: 'K - Knowledgeable',
    description: 'We have a team of knowledgeable experts who bring precision and insight to every financial challenge, ensuring your success.',

    icon: PhoneIcon,
  },
  {
    name: 'A',
    description: 'Accountability',
    icon: LifebuoyIcon,
  },
  {
    name: 'A',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
  {
    name: 'R',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
  {
    name: 'E',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
  {
    name: 'S',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]

export default function Whyus() {
  return (
    <div className='border-t'>
        <Container className="border-x ">
        <div className="mx-auto max-w-2xl text-center py-24 ">
          <h2 className="text-4xl font-lg tracking-tight text-black sm:text-6xl">
            Support center
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        </Container>
    <div className="relative bg-[url('/images/bg/whyus.svg')] isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
     
    
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
       
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-6  lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/30 p-6 ring-1 ring-inset ring-white/10">
              <div className="text-base leading-7">
                <h3 className="font-semibold text-3xl text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
