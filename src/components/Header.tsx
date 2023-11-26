"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import NavLinks from "../components/NavLinks";
import { Button } from "@nextui-org/button";

function MenuIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink({ children, ...props }: any) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
}

export function Header() {
  return (
    <header className="border">
      <nav>
        <Container className="relative z-50 flex justify-between py-6 ">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks  />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }: any) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-20 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/indianservices">
                            Indian Services
                            </MobileNavLink>
                            <MobileNavLink href="/globalservices/">
                            Global Services
                            </MobileNavLink>
                            <MobileNavLink href="/#industries">
                            Industries
                            </MobileNavLink>
                            <MobileNavLink href="/aboutus">About us</MobileNavLink>
                          </div>
                          <div  className="mt-8 flex flex-col gap-4 ">
                            <a
                              href="/contactus"
                              className="rounded-full px-6 py-2 text-center   hover:scale-95 transition-all duration-150 ease-in-out font-semibold bg-black text-white hover:bg-gray-900 lg:hidden block"
                            >
                              Contact us
                            </a>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

            <Link
              href="/contactus"
              className="rounded-full font-semibold text-sm  hover:scale-95 transition-all duration-150 ease-in-out  py-3 px-8 bg-black text-white hover:bg-gray-800 hidden lg:block"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  );
}
