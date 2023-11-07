export default function Stats({ data }: any) {
  return (
    <div className="bg-[#1E2224] py-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-left">
            <h2 className="text-xl  font-semibold tracking-tight text-white ">
              Trusted by creators worldwide
            </h2>
          </div>
          <dl className="mt-8 flex flex-col md:flex-row mx-auto overflow-hidden rounded-2xl text-center ">
            {data.features?.map((stat: any) => (
              <div key={stat.id} className="flex flex-col p-8">
                <img src="/headphone.svg" className="w-8 h-8 mx-auto" />
                <dt className="text-md mt-4 font-semibold leading-6 text-gray-300">
                  {stat.text}
                </dt>
              </div>
            ))}
          </dl>
        </div>
        <p className="text-white text-md mt-4">{data.featuresdesc}</p>
      </div>
    </div>
  );
}
