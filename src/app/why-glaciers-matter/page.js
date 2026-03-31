"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaSearch, FaHistory, FaArrowRight } from 'react-icons/fa';

const LearnLanding = () => {
    const sections = [
        {
            title: "The Crisis",
            tag: "NARRATIVE",
            icon: <FaExclamationTriangle />,
            description: "Understanding the cascading reality of ice loss—from mountain peaks to coastal cities. The threat is not just water; it is survival.",
            href: "/why-glaciers-matter/crisis"
        },
        {
            title: "The Preparedness Gap",
            tag: "ANALYSIS",
            icon: <FaSearch />,
            description: "Why glacier loss remains an orphaned crisis. Identifying the systemic gaps in imagination, policy, and data that prevent effective adaptation.",
            href: "/why-glaciers-matter/gap"
        },
        {
            title: "The Decisive Decade",
            tag: "TIMELINE",
            icon: <FaHistory />,
            description: "Why the years 2025–2034 are critical for the Hindu Kush Himalaya and the 2 billion people dependent on its ice.",
            href: "/why-glaciers-matter/decade"
        }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />
            
            {/*  Premium Hero Section: Why Glaciers Matter */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-24 px-6 md:px-12 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img 
                        src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/hero-image.webp" 
                        alt="Glacier Landscape" 
                        className="object-cover w-full h-full grayscale opacity-30" 
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                        <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-widest text-[10px] uppercase mb-6 bg-glacier-teal/10 px-3 py-1 rounded-full border border-glacier-teal/20">The Evidence Base</span>
                        <h1 className="text-6xl md:text-9xl font-nohemi text-white mb-10 leading-none tracking-tighter">Why Glaciers <br /> <span className="text-glacier-teal italic">Matter</span></h1>
                        <p className="text-lg md:text-2xl text-glacier-warmGrey/80 leading-relaxed font-light font-cabin max-w-3xl">
                            At the center of human survival sits a tower of ice. Protecting them is not just an environmental mandate; 
                            it is the foundation of economic, social, and regional security for 2 billion people.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Narrative Pathways: Vertical Large Sections */}
            <section className="py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        {sections.map((section, idx) => (
                            <Link key={idx} href={section.href} className="group block">
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl shadow-glacier-navy/5 border border-white flex flex-col lg:flex-row items-center gap-16 group-hover:border-glacier-teal transition-all duration-500 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-glacier-teal/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
                                    
                                    <div className="w-24 h-24 rounded-3xl bg-glacier-offwhite flex items-center justify-center text-glacier-teal text-4xl group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                                        {section.icon}
                                    </div>
                                    
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="text-glacier-teal font-nohemi text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">{section.tag}</div>
                                        <h3 className="text-3xl md:text-6xl font-nohemi text-glacier-navy mb-6 tracking-tighter group-hover:text-glacier-teal transition-colors leading-[0.9]">{section.title}</h3>
                                        <p className="text-xl md:text-2xl font-light text-glacier-navy/60 leading-relaxed font-cabin max-w-4xl mx-auto lg:mx-0">
                                            {section.description}
                                        </p>
                                    </div>

                                    <div className="w-20 h-20 rounded-full border border-glacier-navy/10 flex items-center justify-center text-glacier-navy group-hover:bg-glacier-teal group-hover:text-white group-hover:scale-110 transition-all shadow-xl shadow-transparent hover:shadow-glacier-teal/20">
                                        <FaArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LearnLanding;
