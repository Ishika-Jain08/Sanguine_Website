
import { RiYoutubeLine } from "@remixicon/react";
import { Link } from "react-router-dom";


const OverlappingMediaLayout = () => {
  return (
    <>
      <div className=" mb-20">
        {/* <h1 className=" font-caveat text-center text-6xl font-semibold mt-10  ">
          Optimized for <span className="font-caveat text-grow">productivity</span> 
        </h1> */}

        {/* <div className="relative w-full  py-32 flex items-center justify-center overflow-hidden mt-10 ">
          <img
            src="https://i.pinimg.com/1200x/3f/96/a6/3f96a675b4714a2d7719f1efe7869210.jpg"
            alt="Center"
            className="z-20 w-[550px] h-[450px] object-cover rounded shadow-xl"
          />

          <img
            src="https://i.pinimg.com/1200x/27/a3/8b/27a38be220039034799e0c25d4682f6c.jpg"
            alt="Left"
            className="absolute left-[20%] top-[25%] -translate-y-1/2 z-30 w-[280px] rounded object-cover shadow-lg"
          />

          <img
            src="https://i.pinimg.com/1200x/aa/16/12/aa1612ba9420e1c8d5d734f234a2eb56.jpg"
            alt="Right"
            className="absolute right-[20%] top-[65%] -translate-y-1/2 z-20 w-[300px] rounded shadow-lg"
          />

          <video
            src="https://download.odoocdn.com/videos/odoo_com/video_homepage.mp4"
            autoPlay
            loop
            muted
            className="absolute bottom-[0px] z-40 w-[420px] rounded shadow-lg left-[20%] "
          />
        </div> */}
        <div className=" py-20">
          <h1 className=" text-center text-xl font-light leading-20">
            {" "}
            <span className=" font-medium">Experience true speed,</span> reduced
            data entry,
            <br /> smart AI, and a fast UI. All operations are done <br />
            in less than 90ms - faster than a blink.
          </h1>
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_3.svg"
            alt=""
            className="rotate-[40deg] o_rtl_no_rotate mx-auto mb-4 w-14"
            loading="lazy"
          />
          <Link to="/" className="flex items-center justify-center">
      <RiYoutubeLine className="w-[45px] h-[45px] font-light text-red-400" />
      <p className=" text-grape font-caveat font-semibold text-2xl hover:text-gray-800">Compare with SAP</p>
    </Link>
          
        </div>
      </div>
    </>
  );
};

export default OverlappingMediaLayout;


