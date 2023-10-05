"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Services from "@/components/Services";
const page = () => {
  return (
    <div>
      <Container className="border-x !px-0">
        <div className="mx-auto max-w-2xl text-center py-12 ">
          <h2 className="text-4xl font-lg tracking-tight font-dmserif text-black sm:text-6xl">
            Support center
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <Services />
      </Container>
    </div>
  );
};

export default page;
