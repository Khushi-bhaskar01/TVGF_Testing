"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaTint, FaSearch, FaHistory } from "react-icons/fa";

const WhyGlaciersMatter = () => {
    const sections = [
        {
            title: "The Crisis",
            tag: "NARRATIVE",
            icon: <FaTint />,
            description: "The cascading reality of ice loss. The threat is not just water; it is a crisis of survival.",
            href: "/why-glaciers-matter/crisis",
            image: "/story/1.jpg"
        },
        {
            title: "The Preparedness Gap",
            tag: "ANALYSIS",
            icon: <FaSearch />,
            description: "Identifying the systemic gaps in policy and data preventing effective global adaptation.",
            href: "/why-glaciers-matter/gap",
            image: "/story/gap.png"
        },
        {
            title: "The Decisive Decade",
            tag: "TIMELINE",
            icon: <FaHistory />,
            description: "The critical window for the HKH region and the 2 billion people dependent on its ice.",
            href: "/why-glaciers-matter/decade",
            image: "/story/hkh.jpg"
        }
    ];

    const scrollToFirst = () => {
        const firstSection = document.getElementById("content-start");
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden text-slate-800">
            <Navbar />
            
            {/* Premium Static Hero Wall - Clean Light Mode */}
            <section className="relative h-[50vh] min-h-[460px] flex flex-col items-center justify-center bg-white px-6 overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 z-0 opacity-15">
                    <img 
                        src="/story/crisis.png" 
                        className="w-full h-full object-cover grayscale"
                        alt="Glacier background"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-50/50 z-0" />
                
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-nohemi text-slate-900 mb-4 leading-[1] tracking-tighter">
                        Why Glaciers <br /> <span className="text-glacier-teal italic">Matter</span>
                    </h1>
                    
                    <p className="text-base md:text-lg lg:text-xl text-slate-600 font-light font-cabin max-w-2xl mx-auto mt-4 tracking-wide leading-relaxed">
                        Protecting Earth&apos;s freshwater towers is the foundation of economic, social, and regional security for 2 billion people.
                    </p>
                    
                    <motion.div 
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                        className="mt-10 flex flex-col items-center gap-3 group cursor-pointer"
                        onClick={scrollToFirst}
                    >
                        <span className="font-nohemi text-[9px] uppercase tracking-[0.8em] text-slate-400 group-hover:text-glacier-teal transition-colors">
                            Explore The Journey
                        </span>
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-glacier-teal group-hover:bg-glacier-teal/5 transition-all">
                            <FaChevronDown className="text-sm text-slate-400 group-hover:text-glacier-teal" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vertical Content Sections */}
            <div id="content-start" className="bg-slate-50 py-12 space-y-12">
                {sections.map((section, idx) => (
                    <section 
                        key={idx} 
                        className="max-w-6xl mx-auto px-6 md:px-10"
                    >
                        <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden p-8 md:p-12 lg:p-16 relative group">
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
                                {/* Text Content */}
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-glacier-teal/10 flex items-center justify-center text-glacier-teal text-xl border border-glacier-teal/20">
                                            {section.icon}
                                        </div>
                                        <span className="text-glacier-teal font-nohemi text-xs font-bold tracking-[0.4em] uppercase">
                                            {section.tag}
                                        </span>
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-nohemi text-slate-900 tracking-tighter leading-tight">
                                        {section.title}
                                    </h2>
                                    
                                    <p className="text-base md:text-lg text-slate-600 font-light font-cabin leading-relaxed max-w-xl">
                                        {section.description}
                                    </p>

                                    <div className="pt-4">
                                        <Link 
                                            href={section.href} 
                                            className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-3.5 rounded-full font-nohemi text-xs uppercase tracking-widest font-bold hover:bg-glacier-teal transition-all duration-300 group shadow-md shadow-slate-900/10"
                                        >
                                            Explore 
                                            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                                
                                {/* Right Image Block */}
                                <div className="lg:col-span-5">
                                    <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                                        <img 
                                            src={section.image} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                            alt={section.title} 
                                        />
                                        <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Massive Background Tracking Number */}
                            <div className="absolute right-8 bottom-4 z-0 pointer-events-none opacity-[0.03] select-none hidden sm:block">
                                <span className="text-[10rem] md:text-[14rem] font-nohemi text-slate-950 leading-none">
                                    0{idx + 1}
                                </span>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default WhyGlaciersMatter;