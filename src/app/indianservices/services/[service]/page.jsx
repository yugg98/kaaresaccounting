"use client";
import { Container } from "@/components/Container";
import Cta from "@/components/Cta";
import Stats from "@/components/Stats";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
import jdata from "@/utils/globalpage.json";
const page = ({ params }) => {
  const [data, setData] = useState({});
  const router = useRouter();
  useEffect(() => {
    jdata.map((e) => {
      if (e.slug == params.service) {
        console.log(e);
        setData(e);
      }
    });
    console.log(data);
  }, []);
  return (
    <div>
      <div className='bg-[url("/services/one.png")] bg-cover  w-full py-20'>
        <Container>
          <p className="text-5xl font-bold text-white text-left max-w-4xl ">
            {data.name}
          </p>
        </Container>
      </div>
      <Container className="border-x py-10">
        <p className="text-lg">{data.desc}</p>
      </Container>
      <Stats data={data} />
      <div className="border-y">
        <Container className="border-x bg-white py-10">
          <div className="text-left">
            <h2 className="text-xl  font-semibold tracking-tight text-black ">
              Our Services
            </h2>
          </div>
          {data?.otherservices?.map((item) => (
            <div className="my-4">
              <Disclosure>
                <Disclosure.Button className="flex items-center justify-between text-xl bg-[#1E2224] text-white w-full py-4 px-6 rounded-lg">
                 {item.title}
                  <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform w-8" />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 mx-2 border">
                  <ul className=" list-disc p-4">
                    {item.points.map(item=>(
                    <li className="my-2">
                     {item}
                    </li>
                    ))}

                  </ul>
                </Disclosure.Panel>
              </Disclosure>
            </div>
          ))}
        </Container>
      </div>
      <Container className="border-x border-b ">
        <div className="grid grid-cols-2 ">
          <div className="border-r py-12">
            <div className="flex my-2 items-center ">
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
              Business Registration
            </div>
            <div className="flex my-2 items-center ">
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
              Business Registration
            </div>
            <div className="flex my-2 items-center ">
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
              Business Registration
            </div>
            <div className="flex my-2 items-center ">
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
              Business Registration
            </div>
          </div>
          <div></div>
        </div>
      </Container>
      <Cta />
    </div>
  );
};

export default page;
