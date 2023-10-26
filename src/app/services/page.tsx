"use client";
import { Container } from "@/components/Container";
import Cta from "@/components/Cta";
import Stats from "@/components/Stats";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className='bg-[url("/services/one.png")] w-full py-20'>
        <p className="text-5xl font-bold text-white text-center">
          Global compliance and reporting <br /> solutions
        </p>
      </div>
      <Container className="border-x py-10">
        <p className="text-lg">
          In today’s scenario organisations face several challenges while
          expanding into new markets and operating across borders. With the
          evolution of businesses in multiple jurisdictions, execution of
          efficient back-office processes, which ensures consistency in global
          reporting and compliances with varied tax regulations, can become a
          distraction from core operations for multinational organisations.
          <br />
          <br />
          Some of the dynamic organisations outsource these functions to
          maximise performance while minimising costs. Outsourcing these
          services can allow them to concentrate on what is important for their
          business by saving time and money.
          <br />
          <br />
          At Grant Thornton Bharat, we meet the challenges of our clients and
          help them unlock their potential for growth. Our professionals offer
          solutions tailored to meet our clients’ global accounting and
          statutory reporting requirements. With first-hand experience of local
          reporting requirements in more than 120+ locations worldwide, we
          provide seamless and consistent international service delivery through
          a single point of contact.
        </p>
      </Container>
      <Stats />
      <Container className="border-x bg-white py-10">
        <div className="text-left">
          <h2 className="text-xl  font-semibold tracking-tight text-black ">
           Our Services
          </h2>
        </div>
        <div className="my-4">
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between text-xl bg-[#1E2224] text-white w-full py-4 px-6 rounded-lg">
              Do you offer technical support?
              <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform w-8" />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 mx-2 border">
              <ul className=" list-disc p-4">
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
              </ul>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="my-4">
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between text-xl bg-[#1E2224] text-white w-full py-4 px-6 rounded-lg">
              Do you offer technical support?
              <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform w-8" />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 mx-2 border">
              <ul className=" list-disc p-4">
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
              </ul>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="my-4">
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between text-xl bg-[#1E2224] text-white w-full py-4 px-6 rounded-lg">
              Do you offer technical support?
              <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform w-8" />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 mx-2 border">
              <ul className=" list-disc p-4">
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
              </ul>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="my-4">
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between text-xl bg-[#1E2224] text-white w-full py-4 px-6 rounded-lg">
              Do you offer technical support?
              <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform w-8" />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 mx-2 border">
              <ul className=" list-disc p-4">
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
                <li className="my-2">
                  Prepare and maintain books and records under local GAAP or
                  group GAAP
                </li>
              </ul>
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </Container>
      <Cta />
    </div>
  );
};

export default page;
