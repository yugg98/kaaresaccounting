const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
  ]
  
  export default function  Stats() {
    return (
      <div className="bg-[#1E2224] py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-left">
              <h2 className="text-xl  font-semibold tracking-tight text-white ">Trusted by creators worldwide</h2>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col  p-8">
                    <img src="/headphone.svg" className="w-10 h-10 mx-auto" />
                  <dt className="text-xl mt-4 font-semibold leading-6 text-gray-300">{stat.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        <p className="text-white text-lg mt-4">Our ability to be agile through our global network and with an approach that focuses on efficiency and cost effectiveness, enables us to provide value-driven solutions to our clients. Our offices include a dedicated facility, India Knowledge and Capability Centre (IKCC), which is pivotal to service both the domestic and global markets efficiently and cost effectively.</p>

        </div>
      </div>
    )
  }
  