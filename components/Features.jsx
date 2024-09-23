"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [isVisible, setIsVisible] = useState({
    feature1: false,
    feature2: false,
    feature3: false,
  });

  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            if (target === feature1Ref.current) {
              setIsVisible((prev) => ({ ...prev, feature1: true }));
            } else if (target === feature2Ref.current) {
              setIsVisible((prev) => ({ ...prev, feature2: true }));
            } else if (target === feature3Ref.current) {
              setIsVisible((prev) => ({ ...prev, feature3: true }));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(feature1Ref.current);
    observer.observe(feature2Ref.current);
    observer.observe(feature3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#5d3c64] py-16">
      <div className="container mx-auto text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First Feature */}
          <motion.div
            ref={feature1Ref}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.feature1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }} // Hover effect for pop out
          >
            <motion.img
              src="images/higher-profits.svg"
              alt="Higher Profits"
              className="w-20 h-20"
              whileHover={{ scale: 1.1 }} // Extra scaling for the image on hover
            />
            <h3 className="text-lg font-bold text-black">Higher Profits</h3>
            <p className="text-gray-300 max-w-xs">
              We offer some of the lowest prices in the industry because print providers
              continuously compete to win your business.
            </p>
          </motion.div>

          {/* Second Feature */}
          <motion.div
            ref={feature2Ref}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.feature2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }} // Hover effect for pop out
          >
            <motion.img
              src="images/robust-scaling.svg"
              alt="Robust Scaling"
              className="w-20 h-20"
              whileHover={{ scale: 1.1 }} // Extra scaling for the image on hover
            />
            <h3 className="text-lg font-bold text-black">Robust Scaling</h3>
            <p className="text-gray-300 max-w-xs">
              Easily handle peak holiday seasons, with our wide network of partners and
              automatic routing functionality.
            </p>
          </motion.div>

          {/* Third Feature */}
          <motion.div
            ref={feature3Ref}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.feature3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -10 }} // Hover effect for pop out
          >
            <motion.img
              src="images/best-selection.svg"
              alt="Best Selection"
              className="w-20 h-20"
              whileHover={{ scale: 1.1 }} // Extra scaling for the image on hover
            />
            <h3 className="text-lg font-bold text-black">Best Selection</h3>
            <p className="text-gray-300 max-w-xs">
              With 900+ products and top-quality brands, you can choose the best products
              for your business.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
