"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

const Services = ({region}:any) => {
  const [selectedIndex, setSelectedIndex] = useState(region=="india"?1:0)
  useEffect(()=>{
    setSelectedIndex(region=="india"?1:0)
  },[region])
  return (
      <div className="w-full divide-y">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ?  "text-black text-xl py-4 w-1/2 border border-b-2 border-b-black outline-none px-4" :  " text-black text-xl py-4 w-1/2 border border-b-0 outline-none px-6" 
                  }
                >
                  Gloabal Services 🌏
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ?  "text-black text-xl py-4 w-1/2 border border-b-2 border-b-black outline-none px-4" :  " text-black text-xl py-4 w-1/2 border border-b-0 outline-none px-6" 
                  }
                >
                  Indian Services 🌏
                </button>
              )}
            </Tab>
            {/* ...  */}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
                <div className="grid sm:grid-cols-2 grid-rows-2">
                    <div className="p-8  border-b min-w-xl">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                    <div className="p-8  border-b">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                    <div className="p-8  border-b">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                    <div className="p-8  border-b">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                </div>
            </Tab.Panel>
            <Tab.Panel>
                <div className="grid sm:grid-cols-2 grid-rows-2">
                    <div className="p-8 border-r border-b min-w-xl">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                    <div className="p-8 border-r border-b">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                    <div className="p-8 border-r border-b">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                    <div className="p-8 border-r border-b">
                        <p className="text-lg"><span className="mr-2 text-sm text-gray-500">01</span>Registration services</p>
                        <p className="text-gray-600 mt-1">Maintenance of the accounts and preparation of Financial Statements. It includes various vast services like simple Bookkeeping to complex financial analysis.</p>
                        <p className="mt-2 font-semibold underline underline-offset-2" >See how we can help</p>
                    </div>
                </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
  );
};

export default Services;
