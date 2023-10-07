"use client"
import { Container } from "@/components/Container";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {Button, Input, Textarea} from "@nextui-org/react";
export default function Contactus() {
  return (
    <div className="relative isolate border-y  ">
      <Container className="border-x !px-0">
        <div className="mx-auto grid px-4 sm:px-6 lg:px-10 grid-cols-1 lg:grid-cols-2 ">
          <div className="relative  lg:static border-r md:pr-10 py-24 px-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hello@example.com"
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form action="#" method="POST" className="md:py-24 md:px-10 px-4">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      variant={"underlined"}
                      name="first-name"
                      id="first-name"
                      label="First Name"
                      autoComplete="given-name"
                    />
                  </div>
                </div>
                <div>
                  
                  <div className="mt-2.5">
                    <Input
                      variant={"underlined"}
                      type="text"
                      name="last-name"
                      id="last-name"
                      label="Last Name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                 
                  <div className="mt-2.5">
                    <Input
                      variant={"underlined"}
                      type="email"
                      name="email"
                      id="email"
                      label="Email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                 
                  <div className="mt-2.5">
                    <Input
                      variant={"underlined"}
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      label="Phone Number"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                 
                  <div className="mt-2.5">
                    <Textarea
                      name="message"
                      id="message"
                      label="Message"
                      rows={4}
                      variant="underlined"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  type="submit"
                  className=" bg-gray-800 rounded-full px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:mt-0 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1696014332387!5m2!1sen!2sin"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </Container>
      
    </div>
  );
}
