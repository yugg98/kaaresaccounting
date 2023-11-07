"use client";
import { Container } from "@/components/Container";
import Cta from "@/components/Cta";
import Stats from "@/components/Stats";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import htmlReactParser from "html-react-parser";
import jdata from "@/utils/indianpage.json";
import gdata from "@/utils/indiandata.json";
import Loader from "@/components/Loader";
import LeadForm from "@/components/LeadForm";

const Page = ({ params }) => {
  const [data, setData] = useState({});
  const router = useRouter();
  const [loader,setLoader] = useState(false)
  useEffect(() => {
    jdata.map((e) => {
      if (e.slug == params.service) {
        console.log(e);
        setData(e);
        setLoader(true)
      }
    });
    console.log(data);
  }, []);
  return (
    <>
    {loader?
    <div>
      <div className='bg-[url("/services/one.png")] bg-cover  w-full py-20'>
        <Container>
          <p className=" font-bold text-white text-left max-w-4xl ">
            {data.name}
          </p>
        </Container>
      </div>
      <Container className="border-x py-10">
        <p className="text-md">{htmlReactParser(data.desc)}</p>
      </Container>
      <Stats data={data} />
      <div className="border-y">
        <Container className="border-x bg-white py-10">
          <div className="text-left">
            <h2 className="text-lg  font-semibold tracking-tight text-black ">
              Our Services
            </h2>
          </div>
          {data?.otherservices?.map((item) => (
            <div className="my-4" key={item}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between space-x-2 bg-[#1E2224] text-white w-full py-4 px-6 rounded-lg">
                          <p className="text-sm md:text-lg text-left">{item.title}</p>
                          <div>
                          {open ? (
                            <ChevronRightIcon className="rotate-90 w-6 h-6" />
                          ) : (
                            <ChevronRightIcon className="w-6 h-6" />
                          )}</div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 mx-2 border">
                      <ul className=" list-disc p-4">
                        {item.points.map((item,index) => (
                          <li className="my-2" key={index}>{item}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </Container>
      </div>
      <Container className="border-x border-b ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="border-r py-12">
            {gdata.map((item,index) => (
              <div key={index} className="flex my-2 items-center ">
                <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                <p className="text-md">{item.name}</p>
              </div>
            ))}
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </Container>
      <Cta />
    </div>
    :<Loader/>
            }  
    </>
  );
};

export default Page;
