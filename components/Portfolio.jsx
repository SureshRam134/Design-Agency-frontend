"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            id: 1,
            title: "E-Commerce Website",
            category: "Web Design",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
            description:
                "A modern e-commerce platform with secure payments, product management and responsive design.",
            technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
            client: "Fashion Store",
            duration: "4 Weeks",
        },
        {
            id: 2,
            title: "Restaurant Landing Page",
            category: "UI/UX",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
            description:
                "A responsive restaurant website featuring menu showcase, online reservations and contact details.",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
            client: "Food Hub",
            duration: "2 Weeks",
        },
        {
            id: 3,
            title: "Finance Dashboard",
            category: "Dashboard",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
            description:
                "Interactive analytics dashboard with charts, reports and real-time financial insights.",
            technologies: ["React", "Chart.js", "Tailwind CSS", "REST API"],
            client: "FinTech Pro",
            duration: "5 Weeks",
        },
        {
            id: 4,
            title: "Travel Website",
            category: "Website",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
            description:
                "Travel booking website with destination gallery, packages and inquiry forms.",
            technologies: ["Next.js", "React", "Tailwind CSS"],
            client: "TravelGo",
            duration: "3 Weeks",
        },
        {
            id: 5,
            title: "Fitness App",
            category: "Mobile App",
            image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
            description:
                "Fitness application for workout tracking, diet planning and daily progress monitoring.",
            technologies: ["React Native", "Firebase", "Tailwind CSS"],
            client: "FitLife",
            duration: "6 Weeks",
        },
        {
            id: 6,
            title: "Education Platform",
            category: "E-Learning",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
            description:
                "Online learning platform with video courses, quizzes and student progress tracking.",
            technologies: ["Next.js", "MongoDB", "Node.js", "Express.js"],
            client: "EduLearn",
            duration: "8 Weeks",
        },
    ];

    return (
        <section id="portfolio" className="py-15 lg:py-24 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div>
                    <span className="text-indigo-600 font-semibold uppercase tracking-widest">
                        Portfolio
                    </span>

                    <h2 className="text-indigo-600 text-3xl md:text-5xl font-bold mt-3">
                        Featured Projects
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl">
                        Explore some of our recent work crafted with creativity and
                        modern technology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project?.image}
                                    alt={project?.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center ">
                                    <motion.button
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedProject(project)}
                                        className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold cursor-pointer"
                                    >
                                        View Project
                                    </motion.button>
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="text-sm text-indigo-600 font-semibold">
                                    {project?.category}
                                </span>

                                <h3 className="text-gray-600 text-xl font-bold mt-2">
                                    {project?.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    Modern, responsive and user-friendly project built with the latest web technologies.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">


                        <Image
                            src={selectedProject?.image}
                            alt={selectedProject?.title}
                            width={700}
                            height={400}
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">

                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-indigo-600">
                                    {selectedProject?.title}
                                </h2>

                                <button onClick={() => setSelectedProject(null)} className="text-2xl text-red-600 cursor-pointer" >
                                    ✕
                                </button>
                            </div>

                            <span className="inline-block mt-2 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                                {selectedProject?.category}
                            </span>

                            <p className="mt-5 text-gray-500">
                                {selectedProject?.description}
                            </p>

                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-600">Technologies</h3>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-purple-500 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between text-gray-600">
                                <p>
                                    <strong>Client:</strong> {selectedProject?.client}
                                </p>

                                <p>
                                    <strong>Duration:</strong> {selectedProject?.duration}
                                </p>
                            </div>

                        </div>

                    </motion.div>

                </motion.div>
            )}
        </section>
    );
};

export default Portfolio;