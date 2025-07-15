import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const features = [
  {
    title: "Boost Restaurant Growth",
    description: "Stay organized and improve collaboration with a centralized system.",
    image: "https://i.pinimg.com/736x/e4/12/63/e4126398eefa0efe092ae5c3887c1147.jpg",
  },
  {
    title: "Manage Payroll",
    description: "Stay organized and improve collaboration with a centralized system.",
    image: "https://i.pinimg.com/736x/b6/50/de/b650de523d057de37af92f4bc548d9ab.jpg",
  },
  {
    title: "Simplify Task Management",
    description: "Stay organized and improve collaboration with a centralized system.",
    image: "https://i.pinimg.com/736x/e4/12/63/e4126398eefa0efe092ae5c3887c1147.jpg",
  },
  {
    title: "Digitize Invoices",
    description: "Stay organized and improve collaboration with a centralized system.",
    image: "https://i.pinimg.com/736x/b6/50/de/b650de523d057de37af92f4bc548d9ab.jpg",
  },
  {
    title: "Automate Business Operations",
    description: "Stay organized and improve collaboration with a centralized system.",
    image: "https://i.pinimg.com/736x/e4/12/63/e4126398eefa0efe092ae5c3887c1147.jpg",
  },
];

const trustPoints = [
  { icon: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", label: "Secure Payments" },
  { icon: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", label: "24x7 Support" },
  { icon: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", label: "Trusted by 50K+" },
  { icon: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", label: "Analytics & Reports" },
];

const testimonials = [
  { name: "Ravi Sharma", role: "Owner, Foodies Hub", image: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", review: "Our touch-based POS solutions developed in JAVA (Open Source) and can be used over Linux, Mac and Windows is an excellent" },
  { name: "Priya Sen", role: "Manager, Café Bliss", image: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", review: "Our touch-based POS solutions developed in JAVA (Open Source) and can be used over Linux, Mac and Windows is an excellent" },
  { name: "Anil Kapoor", role: "Founder, Tandoori Nights", image: "https://petpoojaweb.gumlet.io/images/home/Happy-customers.webp?w=376&dpr=2.6", review: "Our touch-based POS solutions developed in JAVA (Open Source) and can be used over Linux, Mac and Windows is an excellent." },
];

export default function CurvedSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="bg-white text-gray-900">
      {/* Features Cards Grid */}
      {/* <section className="p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Petpooja Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group bg-gray-50 hover:bg-purple-100 p-6 transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="opacity-0 group-hover:opacity-100 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-md transition-all"
                >
                  Know More
                </motion.button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* <section className="p-6 md:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Petpooja Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="group relative bg-gray-50 hover:bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="text-center flex flex-col items-center justify-between h-full  w-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-6  -translate-x-1/2 text-sm text-red-600 underline font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
              >
                Know More
              </motion.button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section> */}

    <section className="px-4 md:px-20 py-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Explore  Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover="hover"
            className="relative bg-gray-50 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all p-6 group h-[200px]"
          >
           

            <motion.div
              variants={{
                hover: { y: -10 },
                initial: { y: 0 },
              }}
              className="transition-all"
            >
              <h3 className="text-2xl text-center font-semibold mb-2">{feature.title}</h3>
              <p className=" mt-5 text-xl text-gray-600">{feature.description}</p>
            </motion.div>

            <motion.button
              variants={{
                hover: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: 10 },
              }}
              className="mt-4 text-sm text-red-600 underline font-medium absolute text-center transform items-center opacity-0 group-hover:opacity-100 transition-all"
            >
              Know More
            </motion.button>
             
          </motion.div>
          
        ))}
      </div>
    </section>

      {/* Trust Section */}
      
       <section className="bg-gradient-to-r from-[#051b2c] to-[#061f30] text-white p-14 ">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        {/* Left Side Title */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-sm uppercase tracking-wider text-gray-300 mb-2">
            How we build trust
          </h4>
          <h2 className="text-4xl font-medium leading-tight">
            Amplifying The <br /> Key Metrics <br /> That Matter
          </h2>
        </div>

        {/* Right Side Trust Points */}
        <div className="flex flex-1 flex-wrap gap-6 justify-center md:justify-end">
          {trustPoints.map((item, idx) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={idx}
              className="bg-[#0f2b3f] border-l border-gray-600 px-6 py-4 rounded-lg flex flex-col items-center text-center w-40 min-w-[140px] shadow-lg"
            >
              <img src={item.icon} alt="" className=" w-16 h-14 mb-3" />
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="text-sm text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    

<section className="p-6 md:p-14 bg-white">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Solutions Tailored to You
  </h2>

  <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start justify-between">
    {/* Left Titles */}
    <div className="w-full md:w-1/2 space-y-6">
      {features.map((f, i) => (
        <div
          key={i}
          onMouseEnter={() => setActiveFeature(i)}
          className={`cursor-pointer transition-all duration-300 border-b ${
            activeFeature === i ? "text-black" : "text-gray-700"
          } pb-6`}
        >
          <h3 className="text-xl md:text-2xl font-semibold">{f.title}</h3>

          {activeFeature === i && f.description && (
            <div className="mt-2 text-gray-600 text-sm md:text-base">
              {f.description}
              <div className="text-blue-600 font-medium cursor-pointer hover:underline mt-2">
                Explore
              </div>
              {/* <hr className="border-t border-gray-300 w-full mt-4" /> */}


            </div>
          )}
<div className="mt-4 h-[1px] bg-gray-300 w-full"></div>
        </div>
      ))}
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={features[activeFeature].image}
        alt="feature preview"
        className="w-full max-w-lg rounded-xl shadow-md transition-all duration-500 h-[450px] object-cover"
      />
    </div>
  </div>
</section>


      {/* Client Reviews */}
      {/* <section className="bg-gray-100 p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Here’s What Our Clients Say</h2>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <Card className="p-6 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-lg italic">{t.review}</p>
                <p className="font-semibold mt-2">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

   
 <section className="py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto relative ">
        {/* Top bar with title and arrows */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl  text-grape font-medium">Hear from our clients</h2>

          <div className="flex items-center gap-4">
            <button className=" text-grape hover:scale-110 transition swiper-button-p cursor-pointer">
              <ArrowLeftCircle size={42} />
            </button>
            <button className=" text-grape hover:scale-110 cursor-pointer transition swiper-button">
              <ArrowRightCircle size={42} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button",
            prevEl: ".swiper-button-p",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="p-5">
              <Card className="p-10 rounded-xl shadow-gray-400 shadow-md h-full">
                <CardContent className="flex flex-col h-full justify-between">
                  <p className="text-gray-800 text-base mb-6">{t.review}</p>
                  <div className="flex items-center mt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-black">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>


      {/* Contact Form */}
      {/* <section className="p-6 md:p-10">
        <h2 className="text-5xl font-bold text-center mb-6 text-grape">Get in Touch</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 rounded-md border border-gray-300"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="p-3 rounded-md border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="col-span-1 md:col-span-2 p-3 rounded-md border border-gray-300"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </section> */}

      <section className="bg-gray-100 py-12 px-4 md:px-10 rounded-lg shadow-md max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10">
    {/* Left Title Section */}
    <div>
      <h2 className="text-5xl font-medium text-gray-800 mb-10">
        We would love to answer your questions
      </h2>
      <p className="text-gray-600">
        Have a query? We’d be happy to answer any questions you might have.
      </p>
    </div>

    {/* Form Section */}
    <form className="space-y-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name<span className="text-blue-500">*</span></label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email<span className="text-blue-500">*</span></label>
          <input type="email" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone number<span className="text-blue-500">*</span></label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City<span className="text-blue-500">*</span></label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name<span className="text-blue-500">*</span></label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
      </div>

      {/* Radio Options */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Interested In<span className="text-blue-500">*</span></label>
        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" name="interest" className="accent-blue-600" defaultChecked />
            <span>Mobile POS</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="interest" className="accent-blue-600" />
            <span>Portal integration</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="interest" className="accent-blue-600" />
            <span>Dashboard BI App</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="interest" className="accent-blue-600" />
            <span>KDS</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="interest" className="accent-blue-600" />
            <span>Task Management Software</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-grape text-white font-semibold px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>

    </div>
  );
}
