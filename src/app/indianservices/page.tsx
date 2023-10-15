"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Services from "@/components/Services";
import { useSearchParams } from "next/navigation";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Page = () => {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");

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
        <div className="grid sm:grid-cols-2 grid-rows-2 border-y">
          <div className="p-8  border-b border-r ">
            <p className="text-lg">
              <span className="mr-2 text-sm text-gray-500">01</span>
              Registration services
            </p>
            <p className="text-gray-600 mt-1">
              Maintenance of the accounts and preparation of Financial
              Statements. It includes various vast services like simple
              Bookkeeping to complex financial analysis.
            </p>
            <p className="mt-2 font-semibold underline underline-offset-2">
              See how we can help
            </p>
           
          </div>
          <div className="p-8  border-b border-r ">
            <p className="text-lg">
              <span className="mr-2 text-sm text-gray-500">01</span>
              Registration services 1
            </p>
            <p className="text-gray-600 mt-1">
              Maintenance of the accounts and preparation of Financial
              Statements. It includes various vast services like simple
              Bookkeeping to complex financial analysis.
            </p>
            <p className="mt-2 font-semibold underline underline-offset-2">
              See how we can help
            </p>
          </div>
          <div className="p-8  border-b border-r">
            <p className="text-lg">
              <span className="mr-2 text-sm text-gray-500">01</span>
              Registration services 1
            </p>
            <p className="text-gray-600 mt-1">
              Maintenance of the accounts and preparation of Financial
              Statements. It includes various vast services like simple
              Bookkeeping to complex financial analysis.
            </p>
            <p className="mt-2 font-semibold underline underline-offset-2">
              See how we can help
            </p>
          </div>
          <div className="p-8  border-b">
            <p className="text-lg">
              <span className="mr-2 text-sm text-gray-500">01</span>
              Registration services 1
            </p>
            <p className="text-gray-600 mt-1">
              Maintenance of the accounts and preparation of Financial
              Statements. It includes various vast services like simple
              Bookkeeping to complex financial analysis.
            </p>
            <p className="mt-2 font-semibold underline underline-offset-2">
              See how we can help
            </p>
          </div>
        </div>
      </Container>
      <Faqs />
    </div>
  );
};

const faqs = [
  {
    question: "What accounting services do you offer for businesses and individuals?",
    answer: "Our accounting services include bookkeeping, financial statement preparation, budgeting, and customized accounting solutions to meet your financial needs."
  },
  {
    question: "How can your accounting services help me with financial decision-making?",
    answer: "Our accounting services provide accurate financial data and insights that are essential for informed decision-making, helping you manage your finances effectively."
  },
  {
    question: "Can you assist with financial planning and analysis for my business?",
    answer: "Yes, we offer financial planning and analysis services to help businesses create budgets, forecast financial outcomes, and make informed financial decisions."
  },
  {
    question: "Do I need to register for GST, and how can you assist with the registration process?",
    answer: "GST registration is mandatory for certain businesses. We can help you determine if you need to register and guide you through the registration process, ensuring compliance with GST regulations."
  },
  {
    question: "What are the GST return filing requirements, and how can you assist with them?",
    answer: "GST return filing is crucial for maintaining compliance. We offer services for timely and accurate GST return preparation and filing, helping you avoid penalties."
  },
  {
    question: "Can you provide GST audit and reconciliation services for my business?",
    answer: "Yes, we offer GST audit and reconciliation services to ensure that your GST returns are accurate and in line with your financial records."
  },
  {
    question: "What is the importance of an audit for my business?",
    answer: "Audits help ensure the accuracy and transparency of financial information. They are also required for regulatory compliance and can boost the confidence of stakeholders in your business."
  },
  {
    question: "What types of audits do you provide, and how do they differ from each other?",
    answer: "We offer various audit services, including financial statement audits, internal audits, and tax audits. They differ in scope and purpose, with financial statement audits focusing on financial reporting and compliance, internal audits on internal controls, and tax audits on tax compliance."
  },
  {
    question: "Do you provide audit services for individuals as well?",
    answer: "Yes, we offer audit services for individuals, such as tax audits and forensic audits, to address specific financial and tax-related needs."
  },
  {
    question: "How do I get started with your GST, audit, or accounting services?",
    answer: "You can contact us via our website, email, or phone to discuss your specific needs and to arrange a consultation with our experts."
  }
];


function Faqs() {
  return (
      <div className="mx-auto max-w-6xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-4">
              {faqs.map((faq) => (
                <Disclosure key={faq.question}>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left  font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                   <span> {faq.question} </span>
                    </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-0 pb-2 text-sm text-gray-500">{faq.answer}</Disclosure.Panel>
                </Disclosure>
                ))}
            </dl>
          </div>
        </div>
      </div>
  )
}


export default Page;
