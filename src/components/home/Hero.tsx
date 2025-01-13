import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20  w-[92vw] max-w-screen-2xl mx-auto ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Collaborate visually with MiroClone
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Bring your team's ideas to life with our infinite canvas. Plan, brainstorm, and organize like never before.
          </p>
          <div className="flex space-x-4">
            <a href="/signin">
                <button className='bg-[#343434] py-1.5 px-3 rounded text-white'> Get Started for Free</button>            
            </a>
            <button>Watch Demo</button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/images/hero-img.webp"
            alt="MiroClone Whiteboard Preview"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

