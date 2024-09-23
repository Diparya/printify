"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2, // Stagger the cards by 0.2s
            duration: 0.5,
        },
    }),
};

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,  // Trigger animation only once
        threshold: 0.2,     // Trigger when 20% of the component is in view
    });

    return (
        <div className="bg-black py-16" ref={ref}>
            <div className="container mx-auto text-center px-4 md:px-0">
                <h2 className="text-3xl font-bold text-[#4a0074] mb-6">
                    Trusted by over 8M sellers around the world
                </h2>
                <p className="text-gray-400 mb-8">
                    Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                </p>

                {/* Testimonials Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* First Testimonial */}
                    <motion.div
                        className="p-6 bg-gray-200 rounded-lg shadow-md"
                        custom={0}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }} // Zoom effect on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/robert-profile.jpg" // Replace with actual profile image
                                alt="Robert A. Voltaire"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-black">Robert A. Voltaire</h3>
                                <p className="text-[#9d00ff] text-sm">Store link</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Printify has been an incredible service for us musicians unable to keep
                            large amounts of inventory - now we can create designs previously too
                            expensive to print without having to have 1,000 shirts in our jam space.
                            Thanks Printify!
                        </p>
                        <div className="flex">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </motion.div>

                    {/* Second Testimonial */}
                    <motion.div
                        className="p-6 bg-gray-200 rounded-lg shadow-md"
                        custom={1}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }} // Zoom effect on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/quinten-profile.webp" // Replace with actual profile image
                                alt="Quinten Barney"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-black">Quinten Barney</h3>
                                <p className="text-[#9d00ff] text-sm">Etsy Merchant</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            We chose Printify because of their offerings as well as their incredibly
                            low prices. After several years, we’ve come to find that their customer
                            service is also top-notch, and their platform just keeps getting better
                            and better.
                        </p>
                        <div className="flex">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </motion.div>

                    {/* Third Testimonial */}
                    <motion.div
                        className="p-6 bg-gray-200 rounded-lg shadow-md"
                        custom={2}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }} // Zoom effect on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/nikki-profile.jpg" // Replace with actual profile image
                                alt="Nikki"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-black">Nikki</h3>
                                <p className="text-[#9d00ff] text-sm">Store link</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Printify has been a fantastic resource as we grow our business, from the
                            selection of products we can make for our customers to the helpful Customer
                            Service team that makes the whole process a breeze.
                        </p>
                        <div className="flex">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
