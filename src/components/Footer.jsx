// /* eslint-disable react/no-unescaped-entities */
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-8 px-5 sm:px-10 py-10 sm:py-16 mt-28 min-h-[50vh]">
//         <div className="w-full grid grid-cols-1 sm:grid-cols-[1.5fr_2fr_1fr] gap-8 sm:gap-12">
//           {/* Left Section */}
//           <div className="flex flex-col items-center gap-4">
//             <div className="text-center">
//               <p className="italic text-lg sm:text-xl">
//                 "Your Vision, My Code—Together, We Build Success."
//               </p>
//             </div>
//             <div className="flex space-x-4">
//               <Link
//                 to="https://www.linkedin.com/in/ishika-jain08/"
//                 className="text-xl sm:text-2xl hover:text-blue-500 transition"
//               >
//                 <i className="ri-linkedin-fill"></i>
//               </Link>
//               <Link
//                 to="https://github.com/Ishika-Jain08"
//                 className="text-xl sm:text-2xl hover:text-gray-400 transition"
//               >
//                 <i className="ri-github-fill"></i>
//               </Link>
             
//             </div>
//           </div>

//           {/* Center Section */}
//           <div className="flex flex-col items-center gap-3">
//             <img
//               src={logo}
//               alt="Ishika Jain Logo"
//               className=" w-60 sm:w-28  rounded-full object-cover"
//             />
//             {/* <h3 className="text-lg sm:text-2xl font-bold text-gray-200">
//               ISHIKA JAIN
//             </h3> */}
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-col items-center gap-4 text-center">
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-200">
//               Get in Touch
//             </h2>
//             <ul className="space-y-1 sm:space-y-2">
//               <li className="text-sm sm:text-base">Email: ishikajian@gmail.com</li>
//             </ul>
//           </div>
//         </div>

//         <hr className="w-full h-[1px] bg-gray-600 border-none my-6 sm:my-8" />

//         <p className="text-center text-gray-400 text-sm sm:text-base font-bold">
//           Copyright © 2025 -Sanguine - Powered by Advizr Media
//         </p>
//       </div>
//     </>
//   );
// };

// export default Footer;


import { RiFacebookBoxFill ,RiInstagramFill,RiLinkedinBoxFill,RiTwitterFill

} from "@remixicon/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#282c34] text-white px-6 md:px-20 py-10">
      <h1 className=" text-center text-2xl mb-16">Sanguine Software Solutions</h1>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-600 pb-10">
        {/* Sections */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg mb-2">Community</h3>
           <Link to="/" className="text-sm text-gray-300 hover:text-white">Tutorials</Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white">Documentation</Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white">Forum</Link>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg mb-2">Services</h3>
          <Link to="/odoo-hosting" className="text-sm text-gray-300 hover:text-white">Odoo.sh Hosting</Link>
          <Link to="/support" className="text-sm text-gray-300 hover:text-white">Support</Link>
          <Link to="/upgrade" className="text-sm text-gray-300 hover:text-white">Upgrade</Link>
          <Link to="/custom-dev" className="text-sm text-gray-300 hover:text-white">Custom Developments</Link>
          <Link to="/education" className="text-sm text-gray-300 hover:text-white">Education</Link>
          <Link to="/accountant" className="text-sm text-gray-300 hover:text-white">Find an Accountant</Link>
          <Link to="/partners" className="text-sm text-gray-300 hover:text-white">Find a Partner</Link>
          <Link to="/become-partner" className="text-sm text-gray-300 hover:text-white">Become a Partner</Link>
          
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg">About us</h3>
          <Link to="/company" className="text-sm text-gray-300 hover:text-white">Our company</Link>
          <Link to="/brand-assets" className="text-sm text-gray-300 hover:text-white">Brand Assets</Link>
          <Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact us</Link>
          <Link to="/jobs" className="text-sm text-gray-300 hover:text-white">Jobs</Link>
          <Link to="/events" className="text-sm text-gray-300 hover:text-white">Events</Link>
          <Link to="/podcast" className="text-sm text-gray-300 hover:text-white">Podcast</Link>
          <Link to="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
          <Link to="/customers" className="text-sm text-gray-300 hover:text-white">Customers</Link>
          <Link to="/legal" className="text-sm text-gray-300 hover:text-white">Legal • Privacy</Link>
          <Link to="/security" className="text-sm text-gray-300 hover:text-white">Security</Link>
          
          
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg mb-2">Contact us</h3>
          <p className="text-sm text-gray-300 leading-relaxed"><strong>Pune Office:</strong><br />
          Shub Laxmi Society, Sr. No. 29/7B,<br />
            Opp. Novotel, Wadgaon Sheri, Pune - 411014</p>
 <p className="text-sm text-gray-300">
            Support: +91 77760 02200<br />
            Sales: +91 98508 73037<br />
            HR: +91 80876 58217
          </p>
<p className="text-sm text-gray-300 leading-relaxed">
            <strong>Mumbai Office:</strong><br />
            904, JMS Business Centre, Jogeshwari West,<br />
            Link Road, Mumbai - 400102<br />
            Mumbai: +91 91361 98884<br />
            <a href="mailto:sachin@sanguinesoftwares.com" className="hover:underline">sachin@sanguinesoftwares.com</a>
          </p>
 <div className="flex gap-4 text-white text-lg mt-4 md:mt-0">
         
          <RiFacebookBoxFill/>
          <RiTwitterFill/>
          <RiLinkedinBoxFill/>
          <RiInstagramFill/>
        </div>
          
        </div>
      </div>

      

      {/* Made with */}
      <hr className="w-full h-[1px] bg-gray-600 border-none my-6 sm:my-8" />
      <div className="text-center text-sm text-gray-400 hover:text-gray-200  border-t border-gray-600 pt-4">
        Copyright © 2025 -Sanguine - Powered by Advizr Media
      </div>
    </footer>
    
  );
};

export default Footer;
