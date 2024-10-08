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
      <Container className="borde !px-0 sm:px-6">
        <div className="md:mx-auto max-w-5xl md:text-center py-12 px-4 mt-8">
          <h2 className="text-3xl font-lg tracking-tight font-dmserif text-black sm:text-4xl">
            Navigating Growth and Ensuring Financial Resilience
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
                <div key={index} className="p-6 md:p-8 bord-b bord-r ">
                  <p className="text-lg font-semibold mb-4">{e.name}</p>
                  {/* <p className="text-gray-600 mt-1">
                Maintenance of the accounts and preparation of Financial
                Statements. It includes various vast services like simple
                Bookkeeping to complex financial analysis.
              </p> */}
                  <ul className="">
                    {e.otherservice.map((item, index) => (
                      <li
                        key={index}
                        className="border bg-[#FAFBF8] py-2 px-4 my-2 group"
                      >
                        <Link
                          href={"globalservices/services/" + e.slug}
                          className="font-semibold flex items-center space-x-2"
                        >
                          <div className="h-2 max-w-[8px] bg-black w-full"></div>
                          <span className="mr-2 font-medium">
                            {item.name}
                          </span>
                          <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={18}
                            fill="none"
                            className="hidden group-hover:block transition-all duration-150 ease-linear"
                          >
                            <path
                              fill="#000"
                              d="M5.515 4.382a1 1 0 0 0 0-2v2Zm9.466 7.466a1 1 0 1 0-2 0h2Zm-4.848 2.848H6.284v2h3.849v-2Zm-7.466-3.618V7.23h-2v3.848h2Zm0-3.848c0-.738 0-1.224.034-1.595.033-.357.089-.508.141-.599l-1.732-1c-.257.446-.356.923-.4 1.418C.665 5.937.666 6.53.666 7.23h2Zm2.848-4.848c-.701 0-1.294 0-1.776.043-.496.045-.972.143-1.418.4l1 1.732c.09-.052.241-.108.599-.14.37-.034.857-.035 1.595-.035v-2ZM2.842 5.036c.115-.198.28-.364.48-.479l-1-1.732c-.504.29-.922.708-1.212 1.211l1.732 1Zm3.442 9.66c-1.116 0-1.853-.002-2.4-.076-.518-.07-.713-.186-.834-.307l-1.414 1.414c.555.555 1.242.776 1.982.875.71.096 1.606.094 2.666.094v-2ZM.667 11.078c0 1.06-.002 1.956.093 2.667.1.74.321 1.427.876 1.982l1.414-1.414c-.121-.122-.238-.317-.308-.835-.073-.546-.075-1.283-.075-2.4h-2Zm12.314.77c0 .738-.001 1.224-.035 1.595-.032.357-.088.508-.14.598l1.731 1c.257-.445.356-.921.4-1.418.045-.482.044-1.074.044-1.775h-2Zm-2.848 4.848c.7 0 1.293 0 1.775-.043.496-.045.973-.143 1.418-.4l-1-1.732c-.09.052-.241.108-.598.14-.371.034-.858.035-1.595.035v2Zm2.672-2.655c-.115.2-.28.365-.479.48l1 1.732a3.31 3.31 0 0 0 1.211-1.212l-1.732-1Zm1.944-12.38c-2.223 2.224-1.852 5.889.442 8.182l1.414-1.414c-1.692-1.692-1.716-4.08-.442-5.353L14.75 1.662Zm0 0c-1.274 1.275-3.661 1.25-5.353-.441L7.982 2.634c2.293 2.294 5.958 2.665 8.181.442L14.75 1.662Zm-.078-.009L7.599 8.724l1.414 1.414 7.072-7.072-1.414-1.414Z"
                            />
                          </svg>
                          </div>
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
                <div key={index} className="p-6 md:p-8  border-b">
                  <p className="text-lg font-semibold mb-4">
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
                    {e.otherservice.map((item, index) => (
                      <li
                        key={index}
                        className="border bg-[#FAFBF8] py-2 px-4 my-2 group"
                      >
                        <Link
                          href={"globalservices/services/" + e.slug}
                          className=" font-semibold  flex items-center space-x-2"
                        >
                          <div className="h-2 max-w-[8px] bg-black w-full"></div>
                          <span className="mr-2 font-medium">
                           
                            {item.name}
                          </span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={18}
                            fill="none"
                            className=" hidden group-hover:block transition-all duration-150 ease-linear"
                          >
                            <path
                              fill="#000"
                              d="M5.515 4.382a1 1 0 0 0 0-2v2Zm9.466 7.466a1 1 0 1 0-2 0h2Zm-4.848 2.848H6.284v2h3.849v-2Zm-7.466-3.618V7.23h-2v3.848h2Zm0-3.848c0-.738 0-1.224.034-1.595.033-.357.089-.508.141-.599l-1.732-1c-.257.446-.356.923-.4 1.418C.665 5.937.666 6.53.666 7.23h2Zm2.848-4.848c-.701 0-1.294 0-1.776.043-.496.045-.972.143-1.418.4l1 1.732c.09-.052.241-.108.599-.14.37-.034.857-.035 1.595-.035v-2ZM2.842 5.036c.115-.198.28-.364.48-.479l-1-1.732c-.504.29-.922.708-1.212 1.211l1.732 1Zm3.442 9.66c-1.116 0-1.853-.002-2.4-.076-.518-.07-.713-.186-.834-.307l-1.414 1.414c.555.555 1.242.776 1.982.875.71.096 1.606.094 2.666.094v-2ZM.667 11.078c0 1.06-.002 1.956.093 2.667.1.74.321 1.427.876 1.982l1.414-1.414c-.121-.122-.238-.317-.308-.835-.073-.546-.075-1.283-.075-2.4h-2Zm12.314.77c0 .738-.001 1.224-.035 1.595-.032.357-.088.508-.14.598l1.731 1c.257-.445.356-.921.4-1.418.045-.482.044-1.074.044-1.775h-2Zm-2.848 4.848c.7 0 1.293 0 1.775-.043.496-.045.973-.143 1.418-.4l-1-1.732c-.09.052-.241.108-.598.14-.371.034-.858.035-1.595.035v2Zm2.672-2.655c-.115.2-.28.365-.479.48l1 1.732a3.31 3.31 0 0 0 1.211-1.212l-1.732-1Zm1.944-12.38c-2.223 2.224-1.852 5.889.442 8.182l1.414-1.414c-1.692-1.692-1.716-4.08-.442-5.353L14.75 1.662Zm0 0c-1.274 1.275-3.661 1.25-5.353-.441L7.982 2.634c2.293 2.294 5.958 2.665 8.181.442L14.75 1.662Zm-.078-.009L7.599 8.724l1.414 1.414 7.072-7.072-1.414-1.414Z"
                            />
                          </svg></div>
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

export default Global;
