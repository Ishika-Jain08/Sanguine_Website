import { RiPauseFill, RiPlayFill } from '@remixicon/react';
import { useRef, useState, useEffect } from 'react';
// import { FaPause, FaPlay } from 'react-icons/fa';

export default function VedioSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <section className="bg-[#f7f7f7] py-16 text-center overflow-hidden relative">
      {/* Background Circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#fdfdfd] rounded-full -z-10"></div>

      {/* Tooltip Quote */}
      <div className="absolute top-4 right-10 bg-white px-4 py-2 rounded-xl shadow-md text-sm text-gray-600">
        <p className="italic">If you simplify everything, you can do anything!</p>
        <p className="text-xs text-gray-400">– Bill McDermott, former CEO of SAP</p>
      </div>

      {/* Heading */}
      <h2 className="text-6xl font-semibold text-gray-800 mb-8 py-10 ">
        <span className="text-red-500 italic font-caveat">Level</span>
        <span className="italic font-caveat"> up your quality of </span>
        <span className="text-[#00bfa6] underline italic font-caveat">work</span>
      </h2>

      {/* Video Section */}
      <div className="relative w-full max-w-4xl mx-auto">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          className="rounded-xl shadow-lg w-full"
          loop
          muted
        >
          <source
            src="https://download.odoocdn.com/videos/odoo_com/video_homepage.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Progress Bar with Icon */}
        <div className="flex items-center gap-4 mt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            className="w-full h-2 accent-[#9f7aea]"
            readOnly
          />
          <button
            onClick={togglePlay}
            className="text-[#9f7aea] text-lg hover:scale-110 transition-transform duration-200"
          >
            {isPlaying ? <RiPauseFill /> : <RiPlayFill/>}
          </button>
        </div>
      </div>
    </section>
  );
}
