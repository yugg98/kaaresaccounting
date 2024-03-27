import Marquee from "react-fast-marquee";
import { Container } from "../Container";

export default function Testimonials() {
  return (
    <div className="bg-[url('/images/bg/testimonial.svg')] bg-cover py-32">
      <section className=" ">
        <div className="mx-auto max-w-2xl text-center my-6">
          <h2 className="font-dmserif text-4xl font-lg tracking-tight text-white sm:text-5xl">
            What our clients say
          </h2>
          <p className="my-4 text-md leading-8 text-gray-300">
            We wish to provide customer satisfaction by achieving professional
            excellence.
          </p>
        </div>
        <div className="gird my-8">
          <Marquee pauseOnHover={true} className="h-full">
            <div className="border h-[550px] w-full bg-[url('/images/bg/testimonial2.svg')] p-12 md:border border-gray-700 md:py-16   max-w-lg min-w-lg">
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-md font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    I had the pleasure of working with CA Khushboo Aggarwal and
                    I am continually impressed by her exceptional skills and
                    dedication to work. She possesses a deep knowledge of
                    financial matters and a keen eye for detail. <br/><br/>They
                    consistently deliver results, whether it&apos;s in managing
                    complex financial data or providing valuable insights for
                    strategic decisions.
                    <br /><br/>
                    Moreover, Khushboo is a highly reliable and proactive
                    professional. Her expertise and professionalism have been
                    invaluable
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://media.licdn.com/dms/image/D4D03AQEnzzITmi6kHg/profile-displayphoto-shrink_400_400/0/1690721725467?e=1717027200&v=beta&t=WlNFhtyedv7K-COd_UfPGQdzDEYXb9X2lE90I3LmjdE"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Puneet Singh Dua
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        Sales | Business Growth | Options Trader | <br /> Kent
                        MBA
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border h-[550px] w-full bg-[url('/images/bg/testimonial2.svg')] p-12 md:border border-gray-700 md:py-16   max-w-lg min-w-lg">
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-md font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Had a very pleasant experience with their service and they
                    are really friendly, very professional and knowledgeable.<br/><br/>
                    They had solutions to all my accounting blunders and saved a
                    ton of my money. Even if you just consult them they will
                    give you very valuable guidance. Keep up the good work 👍
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="/logo.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        The Word Alone Custom Designs
                      </div>
                      <div className="text-base font-medium text-gray-400"></div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="border h-[550px] w-full bg-[url('/images/bg/testimonial2.svg')] p-12 md:border border-gray-700 md:py-16   max-w-lg min-w-lg">
              <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-md font-medium text-white md:flex-grow">
                  <svg
                    className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                  My work is a bit complex as I work for the Government and before her, I tried everything from doing it myself to hiring an accountant, but I couldn&apos;t get things straight. Since I started working with her, I am not concerned about accounting, taxation, or legal. She handles it all for me.<br/><br/> She and her team are always available for me even if I call them late at night. That&apos;s the dedication she and her team show in their work. Not only this, their knowledge and confidence makes me free of all my worries.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="/images/filmy.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        Filmy Chacha
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        CEO
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
