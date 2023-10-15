"use client";
import { Container } from "@/components/Container";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
export default function Contactus() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstname: "",
    email: "",
    lastname: "",
    phonenumber: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        let docname = data.email;
        await setDoc(doc(db, "contacts", docname), data);
        console.log("Data added successfully to Firestore!");
        // Clear the form fields after submission
        setData({
          firstname: "",
          email: "",
          lastname: "",
          phonenumber: "",
        });
        router.push("/");
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };
  return (
    <div className="relative isolate border-b  ">
      <Container className="border-x !px-0">
        <div className="mx-auto grid px-4 sm:px-6 lg:px-10 grid-cols-1 lg:grid-cols-2 ">
          <div className="relative  lg:static border-r md:pr-10 py-24 px-4">
            <h2 className="text-4xl font-dmserif sm:text-6xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="mt-8 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  11B, first floor, Shahpur Jat,
                  <br /> Near UCO Bank,
                  <br /> South Delhi - 110049
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
                    +91 99104 55478
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
                    contact@kaaresaccounting.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form onSubmit={handleSubmit} className="md:py-24 md:px-10 px-4">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      variant={"underlined"}
                      name="firstname"
                      id="firstname"
                      onChange={handleChange}
                      value={data.firstname}
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
                      name="lastname"
                      id="last-name"
                      onChange={handleChange}
                      value={data.lastname}
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
                      onChange={handleChange}
                      value={data.email}
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
                      name="phonenumber"
                      id="phone-number"
                      onChange={handleChange}
                      value={data.phonenumber}
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
                <button type="submit" className="rounded-full cursor-pointer max-w-xs font-semibold py-3 px-8 bg-black text-white hover:bg-gray-800 flex my-6 ">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:mt-0 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.686195058195!2d77.21345137549773!3d28.549150475710352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzU2LjkiTiA3N8KwMTInNTcuNyJF!5e0!3m2!1sen!2sin!4v1697278191185!5m2!1sen!2sin"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
