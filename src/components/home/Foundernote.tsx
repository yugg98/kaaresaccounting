import { Button } from "@nextui-org/button";
import { Container } from "../Container";

export default function FounderNote() {
  return (
    <Container className="border-x bg-[url('/images/bg/foundernote.svg')] border-y px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-4xl ">
        <figure className="mt-10">
          <p className="text-center text-4xl font-semibold my-4 font-dmserif text-gray-900 sm:text-5xl">
            We believe in working as a partner with our clients
          </p>
          <blockquote className="text-center text-xl mx-auto max-w-3xl text-gray-600 sm:text-lg">
            <p>
            With a vision to provide high-quality financial solutions, she founded Kares Consultancy, which has grown to become a trusted partner for businesses. Known for her meticulous approach, attention to detail, and commitment to continuous learning, Khushboo continues to lead Kares Consultancy with unwavering dedication to client success
            </p>
          </blockquote>

          <div className="flex  gap-x-6  justify-center items-center my-9 ">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div >
              <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                Kushboo Agarwal
              </h3>
              <p className="text-sm font-semibold leading-6 text-gray-600">
              CA, CFA (Level 2 Cleared), <br/>
MBA (Finance and Marketing)
              </p>
            </div>
          </div>
        </figure>
        <div className="flex justify-center items-center mt-10">
        <a className="rounded-full max-w-xs font-semibold py-3 px-8 bg-black text-white hover:bg-gray-800 flex my-6 ">
               Our Mission and Vision
              </a>
        </div>
        <p className="text-center mt-16 text-gray-600">
          Global software and expertise
        </p>

        <div className=" py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-8 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
              <div className=" mt-4 flex max-w-screen flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo1.svg"
                  alt="Workcation"
                />
              </div>
              <div className=" mt-4 flex flex-shrink-0 max-w-screen max-w-screenflex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo2.svg"
                  alt="Tuple"
                />
              </div>
              <div className=" mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo3.svg"
                  alt="Level"
                />
              </div>
              <div className=" mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo4.svg"
                  alt="Level"
                />
              </div>
              <div className=" mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo5.svg"
                  alt="Level"
                />
              </div>
              <div className=" mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo6.svg"
                  alt="Level"
                />
              </div>
              <div className=" mt-4 flex flex-shrink-0 flex-grow max-w-screen justify-center lg:ml-4 lg:flex-grow-0">
                <img
                  className="h-10 "
                  src="/images/logo/logo7.svg"
                  alt="Level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
