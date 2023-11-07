import { Button } from "@nextui-org/button";
import { Container } from "../Container";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function FounderNote() {
  return (
    <Container className="border-0 bg-[url('/images/bg/foundernote.svg')] bg-cover border-0 px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-4xl">
        <figure className="mt-10">
          <p className="text-left md:text-center max-w-4xl mx-auto text-4xl font-semibold my-4 font-dmserif text-gray-900 sm:text-4xl">
            We believe in working as a partner with our clients
          </p>
          <blockquote className="text-justify md:text-center text-xl mx-auto max-w-3xl text-gray-600 sm:text-md">
            <p>
              With a vision to provide high-quality financial solutions, she
              founded Kares Consultancy, which has grown to become a trusted
              partner for businesses. Known for her meticulous approach,
              attention to detail, and commitment to continuous learning,
              Khushboo continues to lead Kares Consultancy with unwavering
              dedication to client success
            </p>
          </blockquote>

          <div className="flex  gap-x-6  justify-center items-center my-9 ">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                CA Kushboo Agarwal
              </h3>
              <p className="text-sm font-semibold leading-6 text-gray-600">
                CA, CFA (Level 2 Cleared), <br />
                MBA (Finance and Marketing)
              </p>
            </div>
          </div>
        </figure>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <Link
            href="/aboutus"
            className="rounded-full max-w-xs hover:scale-95 transition-all duration-150 ease-in-out font-semibold py-3 px-8 bg-black text-white hover:bg-gray-800 flex my-6 "
          >
            Our Mission and Vision
          </Link>
          <Link href="/contactus" className="rounded-full  underline cursor-pointer underline-offset-4 justify-center items-center font-semibold  py-3 px-8   flex md:my-6 my-2">
                Visit Linkedin{" "}
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    className="ml-1"
  >
    <path
      fill="#000"
      d="M5.515 4.382a1 1 0 0 0 0-2v2Zm9.466 7.466a1 1 0 1 0-2 0h2Zm-4.848 2.848H6.284v2h3.849v-2Zm-7.466-3.618V7.23h-2v3.848h2Zm0-3.848c0-.738 0-1.224.034-1.595.033-.357.089-.508.141-.599l-1.732-1c-.257.446-.356.923-.4 1.418C.665 5.937.666 6.53.666 7.23h2Zm2.848-4.848c-.701 0-1.294 0-1.776.043-.496.045-.972.143-1.418.4l1 1.732c.09-.052.241-.108.599-.14.37-.034.857-.035 1.595-.035v-2ZM2.842 5.036c.115-.198.28-.364.48-.479l-1-1.732c-.504.29-.922.708-1.212 1.211l1.732 1Zm3.442 9.66c-1.116 0-1.853-.002-2.4-.076-.518-.07-.713-.186-.834-.307l-1.414 1.414c.555.555 1.242.776 1.982.875.71.096 1.606.094 2.666.094v-2ZM.667 11.078c0 1.06-.002 1.956.093 2.667.1.74.321 1.427.876 1.982l1.414-1.414c-.121-.122-.238-.317-.308-.835-.073-.546-.075-1.283-.075-2.4h-2Zm12.314.77c0 .738-.001 1.224-.035 1.595-.032.357-.088.508-.14.598l1.731 1c.257-.445.356-.921.4-1.418.045-.482.044-1.074.044-1.775h-2Zm-2.848 4.848c.7 0 1.293 0 1.775-.043.496-.045.973-.143 1.418-.4l-1-1.732c-.09.052-.241.108-.598.14-.371.034-.858.035-1.595.035v2Zm2.672-2.655c-.115.2-.28.365-.479.48l1 1.732a3.31 3.31 0 0 0 1.211-1.212l-1.732-1Zm1.944-12.38c-2.223 2.224-1.852 5.889.442 8.182l1.414-1.414c-1.692-1.692-1.716-4.08-.442-5.353L14.75 1.662Zm0 0c-1.274 1.275-3.661 1.25-5.353-.441L7.982 2.634c2.293 2.294 5.958 2.665 8.181.442L14.75 1.662Zm-.078-.009L7.599 8.724l1.414 1.414 7.072-7.072-1.414-1.414Z"
    />
  </svg>
              </Link>
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
            </div>
            <div className="flex justify-center flex-wrap items-center space-x-8 md:space-x-14 mt-10">
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
