/* eslint-disable react/no-unescaped-entities */
import "remixicon/fonts/remixicon.css";
const Hero = () => {
  return (
<>
<div>
<section className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
          <div className="text-center p-5">
            <h6 className=" text-xs  text-gray-700 font-normal tracking-wider">
              LET'S BUILD SOMETHING TOGETHER
            </h6>
            <h1 className="py-3 text-3xl font-semibold">
             <span className=" text-grape">Sanguine Software Solutions</span> 
            </h1>
            <p className="text-base text-gray-700">
              
Sanguine Software Solutions
The only company in India with a Touch-based POS integrated <br/>ERP solution for the Hospitality Industry on an open source platform.
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="/"
              className=" bg-grape text-white shadow-md rounded p-4 transition-transform duration-300 hover:scale-105"
            >
            Get Free Trial
            </a>
            <a
              href="/"
              className="bg-bg-color text-grape shadow-md rounded p-4 transition-transform duration-300 hover:scale-105"
            >
              Watch Presentation
            </a>
            
          </div>
        </section>
</div>
</>
  )
}

export default Hero