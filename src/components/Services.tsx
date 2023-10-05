"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";

const Services = () => {
  return (
    <Container className="border-x !px-0">
      <div className="mx-auto max-w-2xl text-center py-12 ">
        <h2 className="text-4xl font-lg tracking-tight text-black sm:text-6xl">
          Support center
        </h2>
        <p className="mt-6 text-lg leading-8 text-black">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
      <div className="w-full divide-y">
        <Tab.Group>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ?  "text-black text-xl py-4 w-1/2 border border-b-2 border-b-black outline-none" :  " text-black text-xl py-4 w-1/2 border border-b-0 outline-none" 
                  }
                >
                  International Services 🌏
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
    </Container>
  );
};

export default page;
