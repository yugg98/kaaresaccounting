"use client";
import { Container } from "@/components/Container";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Services from "@/components/Services";
import { useSearchParams } from "next/navigation";
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
    question: "How can your financial reporting services assist with compliance and regulatory requirements?",
    answer: "We ensure that your financial reports are compliant with international and local accounting standards, providing accurate and timely information to stakeholders, including investors, regulators, and lenders."
  },
  {
    question: "How do you ensure compliance with the latest accounting standards and regulations?",
    answer: "Our team is dedicated to staying up-to-date with accounting standards and regulations. We provide ongoing training and professional development to ensure that our services are in line with the latest requirements."
  },
  {
    question: "What accounting software do you use for your clients' financial needs?",
    answer: "We adapt to our clients' preferences and use a variety of accounting software, including Xero, QuickBooks, Wave, and many others, to ensure a seamless and efficient process that aligns with your specific requirements."
  },
  {
    question: "Can I continue using my existing accounting software, or will I need to switch to your recommended platform?",
    answer: "You can certainly continue using your existing accounting software if you prefer. We can work with various platforms and tailor our services to integrate with your existing systems."
  },
  {
    question: "How do I share my financial documents with your firm?",
    answer: "You can securely share your financial documents through email or other methods that best suit your needs and ensure data confidentiality."
  },
  {
    question: "Can you assist with transitioning my financial data to a new software platform, if necessary?",
    answer: "Yes, we offer data migration services to help you smoothly transition your financial data to a new software platform, should the need arise."
  },
  {
    question: "How can I trust your firm to handle my financial data and maintain confidentiality?",
    answer: "We take data security and client confidentiality seriously. Our team follows strict protocols to protect your information, and we adhere to industry standards and regulations."
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
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  )
}


export default Page;
