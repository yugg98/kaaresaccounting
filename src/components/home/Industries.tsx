"use client";
import React from "react";
import { Container } from "../Container";
import icon1 from "@/icons/icon1.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const Industries = () => {
  return (
    <div id="industries">
      <Container className="border-x !px-0">
        <div className="grid md:grid-cols-2 grid-row-reverse">
          <div>
            <div className="grid grid-cols-3 overflow-hidden">
              <div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Education.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Education</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Finance.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Finance</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Healthcare.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Healthcare</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/HiTech.svg" className="w-8" alt="icon1" />
                  <p className="my-4">HiTech</p>
                </div>
              </div>
              <div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Logistics.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Logistics</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Manufacturing.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Manufacturing</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Media.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Media</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Oil.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Oil</p>
                </div>
              </div>
              <div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/RealEstate.svg" className="w-8" alt="icon1" />
                  <p className="my-4">RealEstate</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Retail.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Retail</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Travel.svg" className="w-8" alt="icon1" />
                  <p className="my-4">Travel</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <img src="/logo/Utilities.svg" className="w-8"  alt="icon1" />
                  <p className="my-4">Utilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-10 my-12">
            <div>
              <h2 className="text-4xl font-lg font-dmserif tracking-tight text-black sm:text-6xl">
                Delivering industry-focused legal solutions
              </h2>

              <p className="md:text-lg mt-4 text-gray-600">
                Our team of legal experts collaborates with clients to
                understand their roadblocks and objectives, enabling us to
                develop legal solutions that are efficient and scalable for
                diverse industries.
              </p>
            </div>
            <div>
              <Link href="/" className="rounded-full max-w-xs font-semibold py-3 px-8 bg-black text-white hover:bg-gray-800 flex my-6 ">
                <DocumentArrowDownIcon className="w-6 mr-2" />
                Download Company Profile
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Industries;
