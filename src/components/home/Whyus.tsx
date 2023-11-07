

const cards = [
  {
    name: "K",
    description:
      "Knowledgeable",
  },
  {
    name: "A",
    description: "Advanced",
  },
  {
    name: "A",
    description:
      "Affordable",
  },
  {
    name: "R",
    description:
      "Result-driven",
  },
  {
    name: "E",
    description:
      "Ethical",
  },
  {
    name: "S",
    description:
      "Systematic",
  },
];

export default function Whyus() {
  return (
      <div className="relative bg-[url('/images/bg/whyus.svg')] isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-10xl px-6 lg:px-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-6  lg:max-w-none lg:grid-cols-6 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl bg-white/30 hover:scale-95 cursor-pointer hover:bg-white/40 transition-all ease-in-out duration-150 align-middle  p-6 ring-1 ring-inset ring-white/10 "
              >
                <div className="">
                  <h3 className="font-semibold text-3xl text-white">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-md text-white/80">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
