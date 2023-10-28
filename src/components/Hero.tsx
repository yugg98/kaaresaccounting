import React from "react";
import { Container } from "./Container";
import Marquee from "react-fast-marquee";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="border-b">
      <Container className="border-x !px-0">
        <div className="grid md:grid-cols-2 px-8 border-b">
          <div className="flex flex-col justify-center my-12 mx-4">
            <div>
            <p className="md:text-6xl text-4xl font-dmserif">
              Accountancy & Taxation, Auditing & Advisory.
            </p>
            <p className="text-lg mt-4 font-normal text-gray-600">
              We are a trusted provider of comprehensive accounting, auditing,
              taxation and Global Bookkeeping and reporting services for
              businesses of all sizes.
            </p>
            </div>
            <div>
            <Link
              href="/globalservices"
              className="rounded-full hover:scale-95 transition-all duration-150 ease-in-out font-semibold py-3 px-8 bg-black text-white hover:bg-gray-800 hidden lg:inline-block	my-8"
            >
              View Our Services
            </Link>
            </div>
          </div>
          <div>
            <img src="/images/hero.png" alt="Hero" />
          </div>
        </div>
        <div className=" ">
          <div className="mx-auto px-6 py-8 lg:px-8">
            <div className="flex md:flex-row flex-col">
              <h2 className="!max-w-md text-center text-lg tracking-tight text-gray-600 lg:max-w-[14rem] lg:text-left">
                Software and tools we use
              </h2>
              <div className="mt-8 flow-root self-center lg:mt-0">
                <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:ml-4">
                  <Marquee>
                    <div className="ml-8 mt-4 flex max-w-screen flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo1.svg"
                        alt="Workcation"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 max-w-screen max-w-screenflex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo2.svg"
                        alt="Tuple"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo3.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo4.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo5.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo6.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-10 mx-4"
                        src="/images/logo/logo7.svg"
                        alt="Level"
                      />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Hero;
