// // import behive from "../assets/img/behive.jpg";
// // import chandrma fr/om "../assets/img/chandrma.jpg";
// // import chefsCorner from "../assets/img/chefsCorner.jpg";
// import dale from "../assets/img/dale.jpg";
// import flourWords from "../assets/img/flourWords.jpg";
// import flyingSaucer from "../assets/img/flyingSaucer.jpg";
// import kitcherBar from "../assets/img/kitchenBar.jpg";
// import leFlamingtan from "../assets/img/leFlamingtan.jpg";
// // import levists from "../assets/img/levists.jpg";
// // import murphirs from "../assets/img/murphirs.jpg";
// import nastaExpress from "../assets/img/nastaExpress.jpg";
// // import oaks from "../assets/img/oaks.jpg";
// import playboy from "../assets/img/playboy.jpg";
// // import reddy from "../assets/img/reddy.jpg";
// import sandipani from "../assets/img/sandipani.jpg";
// // import spices from "../assets/img/spices.jpg";
// import theTheka from "../assets/img/theTheka.jpg";
// import throughSports from "../assets/img/throughSports.jpg";
// import zero from "../assets/img/Zero.jpg";
// import zeleb from "../assets/img/zeleb.jpg";
// import { Link } from "react-router-dom";
// const features = [
//   { title: "आँन THE वे है जी", icon: theTheka },
//   { title: "THE FLOUR WORKS", icon: flourWords },
//   { title: "Sandipani", icon: sandipani },
//   { title: "KITCHEN & BAR", icon: kitcherBar },
//   { title: "XO ZERO", icon: zero },
//   { title: "Comradeship Through Sports", icon: throughSports },
//   { title: "Le Flamington", icon: leFlamingtan },
//   { title: "PLAYBOY", icon: playboy },
//   { title: "ZELEB Restaurant", icon: zeleb },
//   { title: "Xpress D", icon: nastaExpress },
//   // { title: "REDDY’S TANDOOR", icon: reddy },
//   // { title: "Oaks", icon: oaks },
//   // { title: "Chandrama", icon: chandrma },
//   // { title: "Behive", icon: behive },
//   // { title: "CHEF’S CORNER", icon: chefsCorner },
//   // { title: "Murphies", icon: murphirs },
//   // { title: "11 Spices", icon: spices },
//   // { title: "Levit8", icon: levists },
//   { title: "Dale’s Eden", icon: dale },
//   { title: "The Flying Saucer Skybar", icon: flyingSaucer },
// ];

// export default function AppGrid() {
//   return (
//     <section className="relative bg-[#f9f9f9] pb-16 pt-32">
//       {/* Wavy Top Curve */}
//       {/* <div className="absolute top-0 left-0 w-full  leading-[0] -z-10 bg-red-500">
//         <svg
//           className="relative block w-full h-32"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path
//             fill="#604058"
//             fillOpacity="1"
//             d="M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
//           ></path>
//         </svg>
//       </div> */}
//       <h1 className="  text-xl text-center mb-10 font-bold text-grape">
//         Trusted By 1,500 + Leading Brands
//       </h1>

//       {/* Cards Grid */}
//       <div className="max-w-6xl mx-auto px-4 ">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 gap-6">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform"
//             >
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className=" w-20 h-16 mb-3"
//               />
//               <h3 className="text-sm font-medium text-gray-700 text-center">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//        <div className=" flex justify-end mr-20"><Link to="/" className=" text-grow font-semibold">View all Apps </Link><img
//   src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
//   alt=""
//   loading="lazy"
//   className="w-10 align-top ms-2 me-3"
// />
// </div>
//       </div>

//       {/* content  */}
//       <div>
//         <section className="flex flex-col items-center justify-center  w-full  mt-32">
//           <div className="text-center p-5">
//             <h1 className=" text-xl font-light leading-normal mb-10">
//               <span className="font-medium">Imagine a vast collection of business apps at your disposal.</span>
//               <br />
//               Got something to improve? There is an app for that.
//               <br />
//               No complexity, no cost, just a one-click install.
//             </h1>
//             <h1 className=" text-xl font-light">
//               Each app simplifies a process and empowers more people.
//               <br />
//               Imagine the impact when everyone gets the right tool for the job,
//               with perfect integration.
//             </h1>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }




// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Card, CardContent } from "@/components/ui/card";
// import { Link } from "react-router-dom";
// import dale from "../assets/img/dale.jpg";
// import flourWords from "../assets/img/flourWords.jpg";
// import flyingSaucer from "../assets/img/flyingSaucer.jpg";
// import kitcherBar from "../assets/img/kitchenBar.jpg";
// import leFlamingtan from "../assets/img/leFlamingtan.jpg";
// import nastaExpress from "../assets/img/nastaExpress.jpg";
// import playboy from "../assets/img/playboy.jpg";
// import sandipani from "../assets/img/sandipani.jpg";
// import theTheka from "../assets/img/theTheka.jpg";
// import throughSports from "../assets/img/throughSports.jpg";
// import zero from "../assets/img/Zero.jpg";
// import zeleb from "../assets/img/zeleb.jpg";

// export default function AppGrid() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false,
//       mirror: true,    
//     });
//   }, []);

//   const features = [
//   { title: "आँन THE वे है जी", icon: theTheka },
//   { title: "THE FLOUR WORKS", icon: flourWords },
//   { title: "Sandipani", icon: sandipani },
//   { title: "KITCHEN & BAR", icon: kitcherBar },
//   { title: "XO ZERO", icon: zero },
//   { title: "Comradeship Through Sports", icon: throughSports },
//   { title: "Le Flamington", icon: leFlamingtan },
//   { title: "PLAYBOY", icon: playboy },
//   { title: "ZELEB Restaurant", icon: zeleb },
//   { title: "Xpress D", icon: nastaExpress },
//   { title: "Dale’s Eden", icon: dale },
//   { title: "The Flying Saucer Skybar", icon: flyingSaucer },
// ];

//   return (
//     <section className="relative bg-[#f9f9f9] pb-16 pt-32">
//       <h1 className="text-xl text-center mb-10 font-bold text-grape">
//         Trusted By 1,500 + Leading Brands
//       </h1>

//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 gap-6">
//           {features.map((item, index) => (
//             <Card
//               key={index}
//               data-aos="zoom-in-up"
//               className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform opacity-100"
//               // className="p-4 flex flex-col items-center rounded-xl shadow-md hover:scale-105 transition-transform"
//             >
//               <CardContent className="flex flex-col items-center">
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-20 h-16 mb-3 object-contain"
//                 />
//                 <h3 className="text-sm font-medium text-gray-700 text-center">
//                   {item.title}
//                 </h3>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="flex justify-end mr-20">
//           <Link to="/" className="text-grow font-semibold">
//             View all Apps
//           </Link>
//           <img
//             src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
//             alt="arrow"
//             loading="lazy"
//             className="w-10 align-top ms-2 me-3"
//           />
//         </div>
//       </div>

//       <section className="flex flex-col items-center justify-center w-full mt-32">
//         <div className="text-center p-5" data-aos="fade-up">
//           <h1 className="text-xl font-light leading-normal mb-10">
//             <span className="font-medium">
//               Imagine a vast collection of business apps at your disposal.
//             </span>
//             <br />
//             Got something to improve? There is an app for that.
//             <br />
//             No complexity, no cost, just a one-click install.
//           </h1>
//           <h1 className="text-xl font-light">
//             Each app simplifies a process and empowers more people.
//             <br />
//             Imagine the impact when everyone gets the right tool for the job,
//             with perfect integration.
//           </h1>
//         </div>
//       </section>
//     </section>
//   );
// }


import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import dale from "../assets/img/dale.jpg";
import flourWords from "../assets/img/flourWords.jpg";
import flyingSaucer from "../assets/img/flyingSaucer.jpg";
import kitcherBar from "../assets/img/kitchenBar.jpg";
import leFlamingtan from "../assets/img/leFlamingtan.jpg";
import nastaExpress from "../assets/img/nastaExpress.jpg";
import playboy from "../assets/img/playboy.jpg";
import sandipani from "../assets/img/sandipani.jpg";
import theTheka from "../assets/img/theTheka.jpg";
import throughSports from "../assets/img/throughSports.jpg";
import zero from "../assets/img/Zero.jpg";
import zeleb from "../assets/img/zeleb.jpg";

export default function AppGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

    const features = [
  { title: "आँन THE वे है जी", icon: theTheka },
  { title: "THE FLOUR WORKS", icon: flourWords },
  { title: "Sandipani", icon: sandipani },
  { title: "KITCHEN & BAR", icon: kitcherBar },
  { title: "XO ZERO", icon: zero },
  { title: "Comradeship Through Sports", icon: throughSports },
  { title: "Le Flamington", icon: leFlamingtan },
  { title: "PLAYBOY", icon: playboy },
  { title: "ZELEB Restaurant", icon: zeleb },
  { title: "Xpress D", icon: nastaExpress },
  { title: "Dale’s Eden", icon: dale },
  { title: "The Flying Saucer Skybar", icon: flyingSaucer },
];
  return (
    <section className="relative bg-[#f9f9f9] pb-16 pt-10">
      <h1 className="text-xl text-center mb-10 font-bold text-grape">
        Trusted By 1,500+ Leading Brands
      </h1>

      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
                <CardContent className="flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-16 mb-3 object-contain"
                  />
                  <h3 className="text-sm font-medium text-gray-700 text-center">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end mr-20">
          {/* <Link to="/" className="text-grow font-semibold">
            View all Apps
          </Link> */}
          <Link
  to="/"
  className="text-grow font-semibold hover:scale-105 transition-colors duration-300"
>
  View all Apps
</Link>

          <img
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
            alt="arrow"
            loading="lazy"
            className="w-10 align-top ms-2 me-3"
          />
        </div>
      </div>

      {/* Text Section Below */}
      <section className="flex flex-col items-center justify-center w-full mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-5"
        >
          <h1 className="text-xl font-light leading-normal mb-10">
            <span className="font-medium">
              Imagine a vast collection of business apps at your disposal.
            </span>
            <br />
            Got something to improve? There is an app for that.
            <br />
            No complexity, no cost, just a one-click install.
          </h1>
          <h1 className="text-xl font-light">
            Each app simplifies a process and empowers more people.
            <br />
            Imagine the impact when everyone gets the right tool for the job,
            with perfect integration.
          </h1>
        </motion.div>
      </section>
    </section>
  );
}
