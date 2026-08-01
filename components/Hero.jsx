
"use client";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-3 md:px-6 bg-cover bg-center"
            style={{
                backgroundImage:
                    `url('/bg_1.jpeg')`,
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" mt-15 md:mt-0 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs md:text-sm mb-6">
                    <Sparkles size={18} /> Creative Design Agency
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl lg:text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
                    We Build Modern
                    <span className="text-yellow-300"> Digital Experiences</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-6 text-base md:text-lg text-gray-100 max-w-2xl">
                    We help businesses grow with modern websites, creative branding,
                    and user-friendly digital solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}

                    className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link href="#portfolio">
                        <button className="text-sm md:text-base bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                            View Our Work
                        </button>
                    </Link>

                    <Link href="#contact">
                        <button className="text-sm md:text-base border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;