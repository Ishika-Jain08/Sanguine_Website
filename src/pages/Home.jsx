import { useEffect, useRef } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LocomotiveScroll from "locomotive-scroll";
import AppGrid from "../components/AppGrid";
import VideoSection from "../components/VedioSection";
// import StackedImagesSection from "../components/StackedImagesSection";
// import Img from "../components/Img";
import CallToAction from "../components/CallToAction";
// import FeaturesSection from "../components/FeatureSection";
import CurevedSection from "../components/CurvedSection";
// import Products from "./Products";
// import Products from "./Products"

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el:scrollRef.current,
      smooth:true,
    });
    return()=>{
      scroll.destroy();
    }
  },[])
  return (
  <>
  <div id="main" ref={scrollRef} className="scroll-container">
  <Hero/>
  {/* <Products/> */}
<AppGrid/>
<VideoSection/>
{/* <StackedImagesSection/> */}
{/* <Img/> */}
{/* <FeaturesSection/> */}
<CallToAction/>
<CurevedSection/>
<Footer/>
{/* <Products/> */}
  </div>

  </>
  )
}

export default Home