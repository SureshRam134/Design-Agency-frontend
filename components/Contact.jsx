"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.name || !form.email || !form.message) {
            return toast.error("Please fill all fields");
        }

        if (!emailRegex.test(form.email)) {
            return toast.error("Please enter a valid email address");
        }


        const oldData =
            JSON.parse(localStorage.getItem("contactData")) || [];

        oldData.push({
            ...form,
            id: Date.now(),
        });

        localStorage.setItem(
            "contactData",
            JSON.stringify(oldData)
        );

        toast.success("Message Sent Successfully 🎉");

        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="py-15 lg:py-24 bg-gray-50 px-3 md:px-6 " >
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-indigo-600 font-semibold uppercase text-center tracking-widest mb-7 lg:mb-10">
                Contact
            </motion.h1>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:block">
                    <h2 className="text-5xl font-bold leading-tight text-indigo-600">
                        Let's Build Your
                        <span className="text-purple-600"> Dream Website.</span>
                    </h2>

                    <p className="mt-6 text-gray-500 text-lg leading-8">
                        We create modern, responsive and user-friendly websites that help
                        businesses grow and stand out online.
                    </p>

                    <div className="mt-10 space-y-5">
                        <div>
                            <h4 className="text-xl text-gray-600 font-semibold">✔ Modern Design</h4>
                            <p className="text-gray-500">
                                Clean and attractive website designs.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl text-gray-600 font-semibold">✔ Fast Development</h4>
                            <p className="text-gray-500">
                                Responsive websites built with modern technologies.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl text-gray-600 font-semibold">✔ Trusted Support</h4>
                            <p className="text-gray-500">
                                We help you launch and grow your online presence.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-md mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-5 lg:p-10 shadow-2xl">

                    <h2 className="text-4xl font-bold text-center">
                        Contact Us
                    </h2>

                    <p className="text-center text-gray-300 mt-3 mb-10">
                        Let's build something amazing together.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none border-white tracking-wider font-medium"
                        />

                        <input
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none border-white tracking-wider font-medium"
                        />

                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none border-white tracking-wider font-medium"
                        />

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition cursor-pointer "
                        >
                            Send Message
                        </motion.button>
                    </form>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;