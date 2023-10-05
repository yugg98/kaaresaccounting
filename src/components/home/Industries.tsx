'use client'
import React from "react";
import { Container } from "../Container";
import icon1 from "@/icons/icon1.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
const Industries = () => {
  return (
    <div>
      <Container className="border-x !px-0">
        <div className="grid md:grid-cols-2 grid-row-reverse">
          <div>
            <div className="grid grid-cols-3 overflow-hidden">
              <div >
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
              </div>
              <div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
              </div>
              <div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
                <div className="border flex justify-center items-center flex-col p-8">
                  <Image src={icon1} alt="icon1" />
                  <p className="my-4">Industry</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-10 my-12">
            <p className="text-4xl ">
              Accountancy & Taxation, Auditing & Advisory.
            </p>
            <p className="md:text-lg mt-6">
              We are a trusted provider of comprehensive accounting, auditing,
              taxation and Global Bookkeeping and reporting services for
              businesses of all sizes.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Industries;
