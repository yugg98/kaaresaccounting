import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FounderNote from "@/components/home/Foundernote";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import Whyus from "@/components/home/Whyus";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Industries />
      <div className="border-t">
        <Container className="border-x ">
          <div className="mx-auto max-w-2xl text-center py-24 px-2 ">
            <h2 className="text-4xl font-dmserif font-lg tracking-tight text-black sm:text-6xl">
              Why Us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
            Our team of legal experts collaborates with clients to understand their roadblocks and objectives, enabling us to develop legal solutions that are efficient and scalable for diverse industries.
            </p>
            <div className="flex justify-center flex-wrap">
              <Link href="/aboutus" className="rounded-full font-semibold cursor-pointer  py-3 px-8 bg-black text-white hover:bg-gray-800 flex md:my-6 my-2">
                Know more about us
              </Link>
              <Link href="/contactus" className="rounded-full  underline cursor-pointer underline-offset-4 justify-center items-center font-semibold  py-3 px-8   flex md:my-6 my-2">
                Get in touch{" "}
                <ArrowTopRightOnSquareIcon className="h-5 underline" />
              </Link>
            </div>
          </div>
        </Container>
        <Whyus />
      </div>
      <FounderNote />
    </div>
  );
}
