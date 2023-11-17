"use client";
import { Container } from "@/components/Container";
import {
  SparklesIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
export default function Leadform() {
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
    <div className="bg-white max-w-sm fixed z-[100000] bottom-6 right-6 md:bottom-20  border border-gray-200 shadow-sm mx-4 my-8 md:m-8 rounded-2xl">
        {error == "" ? null : (
              <div
                className="flex items-center max-w-xl p-4 my-4 text-sm font-semibold text-red-600 rounded bg-red-50"
                role="alert"
              >
                <InformationCircleIcon
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                <span className="sr-only">Info</span>
                <div>{error}</div>
              </div>
            )}
             {success ? (
              <div
                className="flex items-center max-w-xl p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Thank You! </span> We will reach out
                  to you soon
                </div>
              </div>
            ) : null}
      <p className="px-6 py-4 flex border-b flex-wrap text-black text-sm">
        <SparklesIcon className="w-6 h-6 mr-2 text-amber-600" />
        Stay 100% compliant with{" "}
        <span className="font-semibold ml-1"> Free Expert Advice</span>
      </p>

      <form onSubmit={handleSubmit} className="md:py-4 md:px-8 px-8">
        <div className="mx-auto max-w-xl  lg:max-w-xs">
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
            <div className="sm:col-span-2 pb-6">
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
         <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-full bg-[#FAFBF8] transition-all text-sm duration-150 ease-in-out hover:scale-95 absolute  mr-8 cursor-pointer max-w-xs font-semibold py-3 px-8 hover:bg-black hover:text-white border-gray-200 border flex"
        >
          Request a callback
        </button>
       
      </div>
      </form>
     
    </div>
  );
}
