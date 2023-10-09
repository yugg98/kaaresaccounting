import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FounderNote from "@/components/home/Foundernote";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import Whyus from "@/components/home/Whyus";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container className="!px-0 border-x">
        <div className="mx-auto max-w-2xl text-center py-8 ">
          <h2 className="text-4xl font-lg tracking-tight font-dmserif text-black sm:text-6xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <Services />
      </Container>
      <Testimonials />
      <Industries />
      <div className="border-t">
        <Container className="border-x ">
          <div className="mx-auto max-w-2xl text-center py-24 px-2 ">
            <h2 className="text-4xl font-dmserif font-lg tracking-tight text-black sm:text-6xl">
              Why Us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="flex justify-center flex-wrap">
              <a className="rounded-full font-semibold  py-3 px-8 bg-black text-white hover:bg-gray-800 flex md:my-6 my-2">
                Know more about us
              </a>
              <a className="rounded-full  underline underline-offset-4 justify-center items-center font-semibold  py-3 px-8   flex md:my-6 my-2">
                Get in touch{" "}
                <ArrowTopRightOnSquareIcon className="h-5 underline" />
              </a>
            </div>
          </div>
        </Container>
        <Whyus />
      </div>
      <FounderNote />
    </div>
  );
}
