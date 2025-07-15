
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
   
    {/* <div className="relative m-20 bg-[#f3f4f6] rounded-xl p-20 md:p-10 flex flex-col md:flex-row  items-center md:items-center gap-6"> */}
      {/* Quotation icon */}
      {/* <img
        src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
        alt=""
        className="absolute top-0 left-6 -translate-y-1/2 hidden md:block w-12"
      /> */}

      {/* Left side: Testimonial text */}
      {/* <div className="md:w-2/3">
        <blockquote className="text-2xl font-normal text-gray-900 leading-relaxed">
          The processing time for accounting documents has been noticeably
          reduced, in certain cases even from 2 days to only 5 hours. As a
          result we can now focus on what matters: reporting and advising the
          client.
        </blockquote>
      </div> */}

      {/* Right side: Author info */}
      {/* <div className="flex md:flex-col md:items-end gap-4 md:gap-3 md:w-1/3">
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/van_donink.webp"
          alt="Harry Van Donink"
          className="hidden sm:block rounded-full w-20 h-20 object-cover"
        />
        <div className="text-right">
          <p className="font-bold text-gray-900">Harry Van Donink</p>
          <p className="text-sm text-gray-600">CEO KPMG Belgium</p>
        </div>
        
      </div> */}
      
    {/* </div> */}

<section className="overflow-hidden text-center pt-10 pb-7 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Sparkle above the text */}
        <div className="relative mb-2">
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl sparkle">
            ✨
          </span>
          <h3 className="text-8xl md:text-5xl font-semibold mb-5 leading-tight font-caveat">
            <span className=" font-caveat text-8xl relative">Unleash    <br /> Your </span>
           
             <span className="text-grow font-caveat text-8xl">growth potential</span>
          </h3>
        </div>

        {/* Button */}
        <Link
          href="/trial"
          className="inline-block bg-grape hover:bg-royalPurple-300 text-white text-lg font-semibold px-6 py-3 rounded-md mb-3 transition duration-300"
        >
          Start now - Its free
        </Link>

        {/* Arrow */}
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
          alt=""
          className="mx-auto mb-2 w-5" 
          loading="lazy"
        />

        {/* Description */}
        <small className="text-gray-600 text-sm">
          No credit card required <br />
          Instant access
        </small>
      </div>
    </section>

    </>
    
  );
};

export default CallToAction;
