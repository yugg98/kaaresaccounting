import Marquee from "react-fast-marquee";
import { Container } from "../Container";

export default function Testimonials() {
  return (
    <div className="bg-[url('/images/bg/testimonial.svg')] py-32">
      <section className=" ">
        <div className="mx-auto max-w-2xl text-center my-6">
          <h2 className="font-dmserif text-4xl font-lg tracking-tight text-white sm:text-6xl">
            What our clients say
          </h2>
          <p className="my-4 text-lg leading-8 text-gray-300">
            We wish to provide customer satisfaction by achieving professional
            excellence.
          </p>
        </div>
        <div className=" flex flex-row my-8">
          <Marquee>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border bg-[url('/images/bg/testimonial2.svg')] px-12 py-12  md:border border-gray-700 md:py-16  md:pr-0  max-w-lg min-w-lg">
              <div className="md:flex-shrink-0">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
              </div>
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis. Nemo
                    expedita voluptas culpa sapiente alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Joseph Rodriguez
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
}
