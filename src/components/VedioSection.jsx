
import { RiPauseFill, RiPlayFill } from '@remixicon/react';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function VideoSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video?.duration) {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    }
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
    if (video && isInView) {
      video.play();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f7f7] py-20 text-center overflow-hidden"
    >
      {/* Animated Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white rounded-full -z-10 shadow-xl"
      />

      {/* Tooltip Quote */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-6 bg-white px-4 py-3 rounded-xl shadow-md text-sm text-gray-700 max-w-xs"
      >
        <p className="italic">
          "If you simplify everything, you can do anything!"
        </p>
        <p className="text-xs text-gray-400 text-right">
          – Bill McDermott
        </p>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-semibold text-gray-800 mb-10 mt-10 leading-tight"
      >
        <span className="text-red-500 italic font-caveat">Level</span>
        <span className="italic font-caveat"> up your quality of </span>
        <span className="text-[#00bfa6] underline italic font-caveat">
          work
        </span>
      </motion.h2>

      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="max-w-4xl mx-auto w-full px-4"
      >
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-6">
            <video
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
              className="rounded-xl w-full shadow"
              loop
              muted
            >
              <source
                src="https://download.odoocdn.com/videos/odoo_com/video_homepage.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                className="w-full accent-purple-500 cursor-pointer"
                readOnly
              />
              <Button
                variant="outline"
                size="icon"
                onClick={togglePlay}
                className="text-purple-600 hover:scale-110 transition"
              >
                {isPlaying ? <RiPauseFill size={24} /> : <RiPlayFill size={24} />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
