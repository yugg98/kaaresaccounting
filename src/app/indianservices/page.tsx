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
import data from "@/utils/indiandata.json";
import Link from "next/link";
import Faqs from "@/components/Faqs";
const Page = () => {
  console.log(data);
  return (
    <div>
      <Container className="border-x !px-0  sm:px-6">
        <div className="md:mx-auto max-w-5xl text-center py-12 sm:px-0 mx-12 ">
          <h2 className="text-3xl font-lg tracking-tight font-dmserif text-black sm:text-5xl">
            Compliance-driven strategies for sustainable growth
          </h2>
          <p className="mt-10">
            Welcome to KAARES, a trustworthy partner in offering our esteemed
            clients in India a broad range of financial and business solutions.
          </p>
          <p className="mt-6 md:text-lg text-sm md:leading-8 text-gray-600">
            We provide a range of services that are specialised to fit the
            particular demands of organisations across numerous industries
            thanks to a committed team of seasoned specialists. We are dedicated
            to providing excellence at every turn, whether you are a startup
            looking for advice on business registration or an established
            corporation needing in-depth auditing and assurance services. View
            the full list of our services below to see how we can assist you in
            achieving financial success:
          </p>
        </div>
        <div className="flex flex-wrap border-y">
          <div className="md:w-1/2">
            {data
              .filter((_, index) => index % 2 === 0)
              .map((e, index) => (
                <div key={index} className="p-8  border-b border-r ">
                  <p className="text-lg">
                   
                    {e.name}
                  </p>
                  {/* <p className="text-gray-600 mt-1">
                Maintenance of the accounts and preparation of Financial
                Statements. It includes various vast services like simple
                Bookkeeping to complex financial analysis.
              </p> */}
                  <ul className="">
                    {e.otherservice.map((item,index) => (
                      <li key={index} className="border bg-[#FAFBF8] py-2 px-4 my-2">
                        <Link
                          href={"indianservices/services/" + e.slug}
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
                <div key={index} className="p-8  border-b border-r  ">
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
                    {e.otherservice.map((item,index) => (
                      <li key={index} className="border bg-[#FAFBF8] py-2 px-4 my-2">
                        <Link
                          href={"indianservices/services/" + e.slug}
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
