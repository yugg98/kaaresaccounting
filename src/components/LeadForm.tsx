"use client";
import { Container } from "@/components/Container";
import {
  SparklesIcon,
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
        <div className="bg-[#FAFBF8] border border-gray-200 shadow-sm mx-4 my-8 md:m-8 rounded-2xl">
          <p className="px-6 py-4 flex border-b"><SparklesIcon className="w-6 h-6 mr-2 text-amber-600" />Stay 100% compliant with <span className="font-semibold ml-1">{" "} Free Expert Advice</span></p>
          <form onSubmit={handleSubmit} className="md:py-4 md:px-10 px-4">
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
                {/* <div className="sm:col-span-2">
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
                </div> */}
              </div>
              
            </div>
            
          </form>
          <div className="mt-8 flex justify-end">
                <button type="submit" className="rounded-full bg-[#FAFBF8] transition-all text-sm duration-150 ease-in-out hover:scale-95 absolute -mt-6 mr-8 cursor-pointer max-w-xs font-semibold py-3 px-8 hover:bg-black hover:text-white border-gray-200 border flex">
                  Request a callback
                </button>
              </div>
        </div>
  );
}
