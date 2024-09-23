"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [isVisible, setIsVisible] = useState({
    service1: false,
    service2: false,
    service3: false,
  });

  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            if (target === service1Ref.current) {
              setIsVisible((prev) => ({ ...prev, service1: true }));
            } else if (target === service2Ref.current) {
              setIsVisible((prev) => ({ ...prev, service2: true }));
            } else if (target === service3Ref.current) {
              setIsVisible((prev) => ({ ...prev, service3: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(service1Ref.current);
    observer.observe(service2Ref.current);
    observer.observe(service3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto text-center px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First Item */}
          <motion.div
            ref={service1Ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isVisible.service1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.img
              src="/images/custom-products.webp"
              alt="Create custom products"
              className="w-32 h-32 mb-4"
              whileHover={{ scale: 1.1, y: -10 }}  // Hover effect for popping out
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-[#9d00ff] font-semibold text-lg">CREATE</h3>
            <p className="text-xl font-semibold mb-2">custom products</p>
            <p className="text-gray-400">
              Easily add your designs to a wide range of products using our free tools.
            </p>
          </motion.div>

          {/* Second Item */}
          <motion.div
            ref={service2Ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isVisible.service2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="/images/your-products.webp"
              alt="Sell on your terms"
              className="w-32 h-32 mb-4"
              whileHover={{ scale: 1.1, y: -10 }}  // Hover effect for popping out
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-[#9d00ff] font-semibold text-lg">SELL</h3>
            <p className="text-xl font-semibold mb-2">on your terms</p>
            <p className="text-gray-400">
              You choose the products, sale price, and where to sell.
            </p>
          </motion.div>

          {/* Third Item */}
          <motion.div
            ref={service3Ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isVisible.service3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.img
              src="/images/fullfillment.webp"
              alt="We handle fulfillment"
              className="w-32 h-32 mb-4"
              whileHover={{ scale: 1.1, y: -10 }}  // Hover effect for popping out
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-[#9d00ff] font-semibold text-lg">WE HANDLE</h3>
            <p className="text-xl font-semibold mb-2">fulfillment</p>
            <p className="text-gray-400">
              Once an order is placed, we automatically handle all the printing and delivery logistics.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
