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
const Page = () => {
  console.log(data);
  return (
    <div>
      <Container className="border-x !px-0  sm:px-6">
        <div className="md:mx-auto max-w-5xl text-center py-12 sm:px-0 mx-12 ">
          <h2 className="text-3xl font-lg tracking-tight font-dmserif text-black sm:text-5xl">
            Navigating Growth and Ensuring Financial Resilience
          </h2>
          <p className="mt-10">
            We are experts in delivering growth navigation services and strong
            compliance, giving you the assurance you need to explore new
            possibilities while preserving your financial stability.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A distinguished firm specialising in providing top-tier financial
            and accounting solutions to foreign clients. With a wealth of
            experience and a dedication to excellence, we offer a wide array of
            services tailored to meet the unique needs of businesses operating
            on the global stage. We understand the importance of financial
            excellence, growth management, and compliance in today's dynamic
            business landscape.
          </p>
        </div>
        <div className="flex flex-wrap border-y">
          <div className="md:w-1/2">
            {data
              .filter((_, index) => index % 2 === 0)
              .map((e, index) => (
                <div className="p-8  border-b border-r ">
                  <p className="text-lg">
                   
                    {e.name}
                  </p>
                  {/* <p className="text-gray-600 mt-1">
                Maintenance of the accounts and preparation of Financial
                Statements. It includes various vast services like simple
                Bookkeeping to complex financial analysis.
              </p> */}
                  <ul className="">
                    {e.otherservice.map((item) => (
                      <li className="border bg-[#FAFBF8] py-2 px-4 my-2">
                        <Link
                          href={"globalservices/services/" + e.slug}
                          className=" font-semibold  flex "
                        >
                          <span className="mr-2"> {item.name} </span>{" "}
                          <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="md:first-line md:w-1/2">
            {data
              .filter((_, index) => index % 2 != 0)
              .map((e, index) => (
                <div className="p-8  border-b border-r  ">
                  <p className="text-lg">
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
                  <ul className="">
                    {e.otherservice.map((item) => (
                      <li className="border bg-[#FAFBF8] py-2 px-4 my-2">
                        <Link
                          href={"gobalservices/services/" + e.slug}
                          className=" font-semibold  flex "
                        >
                          <span className="mr-2"> {item.name} </span>{" "}
                          <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Faqs />
    </div>
  );
};


export default Page;
