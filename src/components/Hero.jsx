
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-10 py-16 bg-white w-full">
      <div className="text-center max-w-5xl" data-aos="fade-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium  font-caveat leading-tight">
          Sanguine Software Solutions
        </h1>
        <p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 font-caveat font-semibold leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The only company in India with a Touch-based POS integrated <br />
          ERP solution for the Hospitality Industry on an open-source platform.
        </p>
      </div>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Link
          to="/"
          className="bg-grape text-white px-6 py-3 text-lg md:text-xl rounded shadow-lg font-medium hover:scale-105 transition-transform font-sans"
        >
          Get Free Trial
        </Link>
        <Link
          to="/"
          className="bg-gray-100 text-grape px-6 py-3 text-xl md:text-xl rounded shadow-lg font-medium hover:scale-105 transition-transform font-sans"
        >
          Watch Presentation
        </Link>
      </div>
    </section>
  );
};

export default Hero;

