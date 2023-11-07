'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const [active, setActive] = useState(null)
  const pathname = usePathname()

  useEffect(()=>{
    if (pathname !== "/" && pathname !== "/indianservices" && pathname !== "/globalservices" && pathname !== "/#industries" && pathname !== "/aboutus") {
      setActive(null);
    }
  },[pathname])

  return [
    ['Indian Services', '/indianservices'],
    ['Global Services', '/globalservices'],
    ['Industries', '/#industries'],
    ['About us', '/aboutus'],

  ].map(([label, href], index:any) => (
    <Link
      key={label}
      href={href}
      onClick={()=>setActive(index)}
      className={"relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors delay-150 hover:text-black"}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
          <motion.span
            className={active==index||hoveredIndex==index?"absolute inset-0 rounded-lg  font-bold":""}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
      </AnimatePresence>
      <span  className={active==index||hoveredIndex==index?"relative z-10 underline underline-offset-4 ":"relative z-10 "}>{label}</span>
    </Link>
  ))
}
