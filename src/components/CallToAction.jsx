
// import { Link } from "react-router-dom";

// const CallToAction = () => {
//   return (
//     <>
  

// <section className="overflow-hidden text-center pt-10 pb-7 bg-white relative">
//       <div className="max-w-4xl mx-auto px-4">
//         {/* Sparkle above the text */}
//         <div className="relative mb-2">
//           <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl sparkle">
//             ✨
//           </span>
//           <h3 className="text-8xl md:text-5xl font-semibold mb-5 leading-tight font-caveat">
//             <span className=" font-caveat text-8xl relative">Unleash    <br /> Your </span>
           
//              <span className="text-grow font-caveat text-8xl">growth potential</span>
//           </h3>
//         </div>

//         {/* Button */}
//         <Link
//           href="/trial"
//           className="inline-block bg-grape hover:bg-royalPurple-300 text-white text-lg font-semibold px-6 py-3 rounded-md mb-3 transition duration-300"
//         >
//           Start now - Its free
//         </Link>

//         {/* Arrow */}
//         <img
//           src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
//           alt=""
//           className="mx-auto mb-2 w-5" 
//           loading="lazy"
//         />

//         {/* Description */}
//         <small className="text-gray-600 text-sm">
//           No credit card required <br />
//           Instant access
//         </small>
//       </div>
//     </section>

//     </>
    
//   );
// };

// export default CallToAction;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CallToAction = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="overflow-hidden text-center pt-5 pb-10 bg-white relative px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Sparkle */}
        <motion.span
          className="block text-yellow-400 text-2xl mb-2"
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.4 }}
        >
          ✨
        </motion.span>

        {/* Heading */}
        <motion.h3
          className=" text-5xl md:text-6xl font-semibold leading-tight mb-6"
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{delay: 0.2, duration: 0.9 }}
        >
          <span className="block font-caveat">Unleash</span>
          <span className="block font-caveat">Your <span className="text-grow  font-caveat">growth potential</span></span>
        </motion.h3>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="/trial"
            className="inline-block bg-grape hover:scale-105 text-white text-lg font-semibold px-6 py-3 rounded-md transition duration-300"
          >
            Start now – It’s free
          </Link>
        </motion.div>

        {/* Arrow */}
        <motion.img
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
          alt="arrow"
          className="mx-auto my-4 w-5"
          loading="lazy"
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ delay: 0.4, duration: 0.4 }}
        />

        {/* Description */}
        <motion.small
          className="text-gray-600 text-sm"
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          No credit card required <br />
          Instant access
        </motion.small>
      </div>
    </section>
  );
};

export default CallToAction;
