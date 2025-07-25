import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";


const HeroSection = () => {
  const authkitRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    // GSAP animation for "AuthKit" title
    gsap.fromTo(
      authkitRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // GSAP animation for headline
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full py-10 mt-20 text-center overflow-hidden ">
        

        {/* Intro badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          // className="relative z-10 mb-8 px-4 py-2 rounded-full border border-gray-700 glass-effect"
          className="relative z-10 mb-8 px-4 py-2 "
        >
          {/* <span className="text-lg font-semibold text-gradient"> */}
          <span className="text-xl font-semibold text-primary ">
            Introducing
          </span>
        </motion.div>

        {/* AuthKit Logo/Text */}
        {/* <motion.div ref={authkitRef} className="relative z-10 mb-8"> */}
          {/* Replace img with video as in original HTML if you have the video files */}
          {/* <img
            src="https://www.authkit.com/_next/static/media/authkit.75b93dd5.svg"
            alt="Authkit logo"
            className="w-96 md:w-[476px] h-auto"
          /> */}
          {/* If you have the video files, uncomment and adjust path: */}
          {/* <video autoPlay muted playsInline preload="auto" className="w-full max-w-xl h-auto">
          <source src="/authkit.mov" type="video/mp4" />
          <source src="/authkit.webm" type="video/webm" />
          </video> */}
        {/* </motion.div> */}

        {/* SyncLyft Logo/Text - Responsive Font Sizes */}
        <motion.div ref={authkitRef} className="relative z-10 mb-8">
          <h1
            className="h-auto font-bold text-primary leading-tight
                       text-5xl sm:text-7xl md:text-8xl lg:text-9xl" // Responsive font sizes
          >
            SyncLyft
          </h1>
        </motion.div>

        {/* Headline - Already had some responsiveness */}
        <motion.div ref={headlineRef} className="relative z-10 max-w-2xl px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-gradient"> {/* Added sm:text-xl for very small screens */}
            Smarter hiring, faster placements
            <br />
            for students and recruiters.
          </h2>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
