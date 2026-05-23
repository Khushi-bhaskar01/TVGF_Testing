"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaBookOpen, FaUserTie, FaUsers, FaHandshake, FaArrowRight } from 'react-icons/fa';

export default function AboutLanding() {
    useEffect(() => {
        document.title = "About Us | The Voice of Glacier Foundation";
    }, []);

    const cards = [
        { 
            name: "Our Story", 
            href: "/about/story", 
            desc: "Organisation origin, mission, and the SPACE Framework for glacier protection.",
            icon: <FaBookOpen />,
            bg: "bg-glacier-navy"
        },
        { 
            name: "Founder Story", 
            href: "/about/founder", 
            desc: "From a near-fatal mountain fall to founding a global resilience movement.",
            icon: <FaUserTie />,
            bg: "bg-glacier-teal"
        },
        { 
            name: "Team & Advisors", 
            href: "/about/team", 
            desc: "The multidisciplinary experts and advisors driving our mission for glacier resilience.",
            icon: <FaUsers />,
            bg: "bg-glacier-navy"
        },
    ];

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden">
            <Navbar />

          {/* 🏔️ OG Cinematic Hero */}
<section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
        <img 
            src="/About/banner2.JPG" 
            alt="About Us Background" 
            className="object-cover w-full h-full object-[center_30%] scale-100"
        />
    </div>
    <div className="absolute inset-0 bg-black/30"></div>

    <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-4">
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-nohemi text-white leading-none tracking-tighter drop-shadow-2xl">
                About <span className="text-glacier-lightTeal italic">Us</span>
            </h1>
        </motion.div>
    </div>
</section>

           {/* 🧊 Frozen Mandate Section - Compact & Impactful */}
<section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
    {/* Decorative Ice Shard Background Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-teal/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glacier-navy/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-nohemi text-glacier-navy tracking-tighter leading-[0.95] mb-6">
                    Redefining <br />
                    <span className="text-glacier-teal italic">human reliance</span> <br />
                    on the cryosphere.
                </h2>
                <div className="h-1 w-24 bg-glacier-teal rounded-full mb-0 lg:mb-0"></div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-6 border-l-2 border-glacier-teal/20 pl-6 md:pl-10 space-y-4"
            >
                <p className="text-lg md:text-2xl text-glacier-navy font-cabin leading-tight font-light italic">
                    &quot;We connect mountain wisdom with global policy to ensure glaciers are protected as living entities.&quot;
                </p>
                <div className="pt-2">
                    <p className="text-sm md:text-base text-glacier-navy/60 font-cabin leading-relaxed font-light">
                        The Voice of Glacier Foundation was born from a miraculous survival on Mt. Annapurna. Our mission is to build extreme climate resilience across the Hindu Kush Himalaya.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
</section>

            {/* ❄️ Navigation Hub - Enhanced Frozen Aesthetic */}
            <section className="py-24 px-4 md:px-12 bg-glacier-offwhite relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {cards.map((card, i) => (
                            <Link key={i} href={card.href} className="group">
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`relative h-[450px] rounded-[3rem] overflow-hidden border border-white shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-glacier-teal/20 bg-white group`}
                                >
                                    {/* Dynamic Background Image Layer */}
                                    <div className="absolute inset-0 z-0">
                                        <div className={`absolute inset-0 ${card.bg} opacity-90 group-hover:opacity-100 transition-all duration-700`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    </div>

                                    {/* Icy Glass Frosting */}
                                    <div className="absolute inset-0 z-10 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-[4px] transition-all duration-700"></div>

                                    {/* Content Area */}
                                    <div className="relative z-20 p-12 h-full flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-3xl group-hover:bg-glacier-teal group-hover:border-transparent group-hover:scale-110 transition-all duration-500 shadow-xl">
                                                {card.icon}
                                            </div>
                                            <div className="pt-4">
                                                <h3 className="text-4xl font-nohemi text-white tracking-tighter leading-none mb-4 group-hover:text-white transition-colors">
                                                    {card.name}
                                                </h3>
                                                <p className="text-sm text-white/60 font-light leading-relaxed group-hover:text-white transition-colors font-cabin">
                                                    {card.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs font-nohemi font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-glacier-teal transition-all duration-500 transform group-hover:translate-x-2">
                                            <span>Read More</span> 
                                            <div className="w-10 h-[1px] bg-white/20 group-hover:bg-glacier-teal group-hover:w-16 transition-all duration-500"></div>
                                            <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>

                                    {/* Internal Light Flare */}
                                    <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-glacier-teal/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}