"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#home");

    const menus = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-indigo-600/70 to-purple-600/70 border-b border-white/20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <motion.h1  initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-2xl font-bold">Design Agency</motion.h1>
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="hidden md:flex items-center gap-8">
                    {menus.map((menu) => (
                        <li key={menu.name}>
                            <Link
                                href={menu.href}
                                onClick={() => setActive(menu.href)}
                                className={`transition ${active === menu.href
                                    ? "text-blue-500 font-semibold"
                                    : "hover:text-purple-300"
                                    }`}
                            >
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </motion.ul>

                <Link href="#portfolio">
                    <motion.button   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block border border-purple-100/0 bg-white/20 px-4 py-2 rounded-full text-sm cursor-pointer hover:border-purple-600 hover:bg-indigo-600"> Get Started </motion.button>
                </Link>

                {!open && <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                     <Menu size={28} className="text-white cursor-pointer" />
                </button>}
            </div>


            <div className={`fixed top-0 left-0 h-screen w-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 shadow-xl transition-transform duration-300 z-50 ${open ? "translate-x-0" : "-translate-x-full" }`} >
                <div className="flex justify-between items-center px-6 py-4 border-b border-indigo-500">
                    <h2 className="text-2xl font-bold text-white">
                        Design Agency
                    </h2>

                    <button onClick={() => setOpen(false)}>
                        <X className="text-white hover:text-red-600 cursor-pointer" size={28} />
                    </button>
                </div>

                <ul className="flex flex-col mt-6">
                    {menus.map((menu) => (
                        <li key={menu.name}>
                            <Link
                                href={menu.href}
                                onClick={() => {
                                    setActive(menu.href);
                                    setOpen(false);
                                }}
                                className={`block px-6 py-4 transition ${active === menu.href
                                    ? "bg-indigo-200 text-indigo-600 font-semibold"
                                    : "text-white hover:bg-indigo-500"
                                    }`}
                            >
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}


export default Navbar