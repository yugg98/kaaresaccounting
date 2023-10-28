import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const faqs = [
    {
      question:
        "What accounting services do you offer for businesses and individuals?",
      answer:
        "Our accounting services include bookkeeping, financial statement preparation, budgeting, and customized accounting solutions to meet your financial needs.",
    },
    {
      question:
        "How can your accounting services help me with financial decision-making?",
      answer:
        "Our accounting services provide accurate financial data and insights that are essential for informed decision-making, helping you manage your finances effectively.",
    },
    {
      question:
        "Can you assist with financial planning and analysis for my business?",
      answer:
        "Yes, we offer financial planning and analysis services to help businesses create budgets, forecast financial outcomes, and make informed financial decisions.",
    },
    {
      question:
        "Do I need to register for GST, and how can you assist with the registration process?",
      answer:
        "GST registration is mandatory for certain businesses. We can help you determine if you need to register and guide you through the registration process, ensuring compliance with GST regulations.",
    },
    {
      question:
        "What are the GST return filing requirements, and how can you assist with them?",
      answer:
        "GST return filing is crucial for maintaining compliance. We offer services for timely and accurate GST return preparation and filing, helping you avoid penalties.",
    },
    {
      question:
        "Can you provide GST audit and reconciliation services for my business?",
      answer:
        "Yes, we offer GST audit and reconciliation services to ensure that your GST returns are accurate and in line with your financial records.",
    },
    {
      question: "What is the importance of an audit for my business?",
      answer:
        "Audits help ensure the accuracy and transparency of financial information. They are also required for regulatory compliance and can boost the confidence of stakeholders in your business.",
    },
    {
      question:
        "What types of audits do you provide, and how do they differ from each other?",
      answer:
        "We offer various audit services, including financial statement audits, internal audits, and tax audits. They differ in scope and purpose, with financial statement audits focusing on financial reporting and compliance, internal audits on internal controls, and tax audits on tax compliance.",
    },
    {
      question: "Do you provide audit services for individuals as well?",
      answer:
        "Yes, we offer audit services for individuals, such as tax audits and forensic audits, to address specific financial and tax-related needs.",
    },
    {
      question:
        "How do I get started with your GST, audit, or accounting services?",
      answer:
        "You can contact us via our website, email, or phone to discuss your specific needs and to arrange a consultation with our experts.",
    },
  ];
  
 export default function Faqs() {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <Link
                href="#"
                className="font-semibold text-black hover:text-gray-800"
              >
                customer support
              </Link>{" "}
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
                  <Disclosure.Panel className="px-4 pt-0 pb-2 text-sm text-gray-500">
                    {faq.answer}
                  </Disclosure.Panel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
  