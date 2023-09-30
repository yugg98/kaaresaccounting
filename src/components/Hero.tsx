import React from "react";
import { Container } from "./Container";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="border-y">
      <Container className="border-x">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-6xl">
              Accountancy & Taxation, Auditing & Advisory.
            </p>
            <p className="text-lg mt-6">
              We are a trusted provider of comprehensive accounting, auditing,
              taxation and Global Bookkeeping and reporting services for
              businesses of all sizes.
            </p>
          </div>
          <div>
            <img src="/images/hero.png" alt="Hero" />
          </div>
        </div>
        <div className=" ">
          <div className="mx-auto  px-6 py-16 sm:py-24 lg:px-8">
            <div className="flex">
              <h2 className="!max-w-sm	 text-center text-lg  tracking-tight text-gray-600 lg:max-w-[10rem] lg:text-left">
                Software and tools we use
              </h2>
              <div className="mt-8 flow-root self-center lg:mt-0">
                <div className="-ml-8  -mt-4 flex flex-wrap justify-between lg:ml-4">
                  <Marquee>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"
                        alt="Workcation"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg"
                        alt="Tuple"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                        alt="Level"
                      />
                    </div>
                    <div className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
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
