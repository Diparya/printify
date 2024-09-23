"use client"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Solutions = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger the animation when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textAnimation = {
    hidden: { opacity: 0, x: -100 }, // Animate from the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 100 }, // Animate from the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="bg-gray-800 py-16">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between px-4 lg:px-0">
        {/* Animated Text Section */}
        <motion.div
          className="text-center md:text-left mb-8 md:mb-0"
          initial="hidden"
          animate={controls}
          variants={textAnimation}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Are you a large business looking for custom solutions?
          </h2>
          <button className="bg-[#9d00ff] hover:bg-[#9d00ffe4] text-white px-6 py-3 rounded font-medium">
            Talk to sales
          </button>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={imageAnimation}
        >
          <img
            src="/images/Custom Solutions.svg"
            alt="Custom Solutions"
            className="w-80 h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
