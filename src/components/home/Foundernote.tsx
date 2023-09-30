import { Button } from "@nextui-org/button";
import { Container } from "../Container";

export default function FounderNote() {
  return (
    <Container className="border-x bg-[url('/images/bg/foundernote.svg')] border-y px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-4xl ">
        <figure className="mt-10">
          <p className="text-center text-4xl font-semibold my-4  text-gray-900 sm:text-5xl">
            We believe in working as a partner with our clients
          </p>
          <blockquote className="text-center text-xl mx-auto max-w-2xl text-gray-900 sm:text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.
            </p>
          </blockquote>

          <div className="flex  gap-x-6  justify-center items-center my-12 ">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="">
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Kushboo Agarwal
              </h3>
              <p className="text-sm font-semibold leading-6 text-gray-600">
                CEO at KaaresConsultancy
              </p>
            </div>
          </div>
        </figure>
        <div className="flex justify-center items-center my-12">
        <Button
          href="#"
          className="rounded-full bg-black mx-auto text-white hover:bg-gray-800  text-center"
        >
          Our vision & mission
        </Button>
        </div>
        <p className="text-center text-gray-600">Global software and expertise</p>

        <div className=" py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-8 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
              <div className="">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </div>
              <div className=" ">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
              </div>
              <div className="">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
              </div>
              <div className="">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
                  alt="Laravel"
                  width={158}
                  height={48}
                />
              </div>
              <div className=" ">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
              </div>
              <div className="">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
              <div className=" ">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
              </div>
              <div className="">
                <img
                  className="max-h-10 w-full object-contain"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
