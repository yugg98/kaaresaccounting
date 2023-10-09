"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Services from "@/components/Services";
import Faqs from "@/components/Faqs";
import { useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams()
  const region = searchParams.get('region')

  return (
    <div>
      <Container className="border-x !px-0  sm:px-6">
        <div className="md:mx-auto max-w-2xl text-center py-12 sm:px-0 mx-12 ">
          <h2 className="text-4xl font-lg tracking-tight font-dmserif text-black sm:text-6xl">
            Support center
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <Services region={region} />
      </Container>
      <Faqs/>

    </div>
  );
};

export default page;
