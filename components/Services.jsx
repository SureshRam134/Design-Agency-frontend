"use client";

import { motion } from "framer-motion";
import { Palette, Code2, MonitorSmartphone, Megaphone, } from "lucide-react";
import { useState } from "react";

const Services = () => {

    const [selectedService, setSelectedService] = useState(null);
    const services = [
        {
            icon: <Palette size={38} />,
            title: "UI/UX Design",
            description: "Modern and user-friendly interface designs.",
            features: [
                "User Research",
                "Wireframing",
                "Responsive Design",
                "Interactive Prototypes",
            ],
        },
        {
            icon: <Code2 size={38} />,
            title: "Web Development",
            description: "Fast, responsive and scalable web applications.",
            features: [
                "React & Next.js",
                "Responsive Websites",
                "REST API Integration",
                "Performance Optimization",
            ],
        },
        {
            icon: <MonitorSmartphone size={38} />,
            title: "Brand Identity",
            description: "Build a strong and memorable brand presence.",
            features: [
                "Logo Design",
                "Brand Guidelines",
                "Color Palette",
                "Visual Identity",
            ],
        },
        {
            icon: <Megaphone size={38} />,
            title: "Digital Marketing",
            description: "Grow your business with smart marketing strategies.",
            features: [
                "SEO Optimization",
                "Social Media Marketing",
                "Google Ads",
                "Content Strategy",
            ],
        },
    ];

    return (
        <section
            id="services"
            className="py-15 lg:py-24 bg-gray-50 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-indigo-600 font-semibold uppercase tracking-widest">
                        Our Services
                    </span>

                    <h2 className="text-indigo-600 text-3xl md:text-5xl font-bold mt-3">
                        What We Offer
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl">
                        We create beautiful digital experiences that help businesses
                        grow faster and stand out from the competition.
                    </p>
                </motion.div>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, }}
                            key={index}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                                {service.icon}
                            </div>

                            <h3 className=" text-gray-600 text-xl font-bold mt-6">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                {service.description}
                            </p>

                            <button
                                onClick={() => setSelectedService(service)}
                                className="mt-6 text-indigo-600 font-semibold group-hover:translate-x-2 transition cursor-pointer"
                            >
                                Learn More →
                            </button>
                        </motion.div>
                    ))}

                </div>
            </div>
            {selectedService && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl p-8 max-w-md w-full relative">

                        <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-2xl text-red-600 cursor-pointer" >
                            ✕
                        </button>

                        <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                            {selectedService.icon}
                        </div>

                        <h2 className="text-indigo-600 text-2xl font-bold mt-6">
                            {selectedService.title}
                        </h2>

                        <p className="text-gray-500 mt-4">
                            {selectedService.description}
                        </p>

                        <ul className="mt-6 space-y-3">
                            {selectedService.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 text-gray-600"
                                >
                                    <span className="text-green-500 font-bold">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setSelectedService(null)}
                            className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                        >
                            Close
                        </button>

                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Services;