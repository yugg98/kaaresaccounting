"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Services from "@/components/Services";
import { Disclosure } from "@headlessui/react";
import {
  ArrowTopRightOnSquareIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import data from "@/utils/data.json";
import Link from "next/link";
import Faqs from "@/components/Faqs";
const Global = () => {
  console.log(data);
  return (
    <div>
      <Container className="borde !px-0 sm:px-6 my-10">
        <div className="md:mx-auto max-w-5xl md:text-center py-12 px-4 mt-8">
          <h2 className="text-3xl font-lg tracking-tight font-dmserif text-black sm:text-4xl">
            Our Global Services
          </h2>
          <p className="mt-10">
            We are experts in delivering growth navigation services and strong
            compliance, giving you the assurance you need to explore new
            possibilities while preserving your financial stability.
          </p>
          <p className="mt-6 text-md  text-gray-600">
            A distinguished firm specialising in providing top-tier financial
            and accounting solutions to foreign clients. With a wealth of
            experience and a dedication to excellence, we offer a wide array of
            services tailored to meet the unique needs of businesses operating
            on the global stage. We understand the importance of financial
            excellence, growth management, and compliance in today&apos;s
            dynamic business landscape.
          </p>
        </div>
        <div className="flex flex-wrap bord-y">
          <div className="md:w-1/2">
            {data
              .filter((_, index) => index % 2 === 0)
              .map((e, index) => (
                <div key={index} className="p-6 md:p-8 border-b border-r ">
                  <p className="text-lg font-semibold ">{e.name}</p>
                  {/* <p className="text-gray-600 mt-1">
                Maintenance of the accounts and preparation of Financial
                Statements. It includes various vast services like simple
                Bookkeeping to complex financial analysis.
              </p> */}
                 
                </div>
              ))}
          </div>
          <div className="md:first-line md:w-1/2">
            {data
              .filter((_, index) => index % 2 != 0)
              .map((e, index) => (
                <div key={index} className="p-6 md:p-8  border-b">
                  <p className="text-lg font-semibold ">
                    {/* <span className="mr-2 text-sm text-gray-500">
                      0{index + 1}
                    </span> */}
                    {e.name}
                  </p>
                  {/* <p className="text-gray-600 mt-1">
                Maintenance of the accounts and preparation of Financial
                Statements. It includes various vast services like simple
                Bookkeeping to complex financial analysis.
              </p> */}
                  
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Global;
