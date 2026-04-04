"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaUsers, FaLeaf, FaGlobe, FaCubes } from 'react-icons/fa';

const CrisisPage = () => {
    // 1. The Cascade Effect (visual flow diagram)
    const actualCascade = [
        "Glacier Loss",
        "Water Insecurity",
        "Food & Agri Crisis",
        "Energy Volatility",
        "Public Health Risk",
        "Economic Disruption"
    ];

    // 2. Four impact quadrants with exact brief statistics
    const impactQuadrants = [
        {
            title: "Economic & Livelihood",
            content: [
                "$30B tourism losses projected by 2050",
                "129M farmers depend on glacier-fed irrigation in HKH",
                "$200B ecosystem service value of glaciers in Qinghai-Tibet Plateau"
            ],
            icon: <FaChartLine />
        },
        {
            title: "Social & Human",
            content: [
                "27M displaced in Dhaka & Kolkata alone (1–3m sea-rise)",
                "Increased regional instability, migration, and conflict zones"
            ],
            icon: <FaUsers />
        },
        {
            title: "Environmental Cascade",
            content: [
                "70% biodiversity loss over the last century",
                "Drastic alteration of flood timing, slope stability, and basin hazards"
            ],
            icon: <FaLeaf />
        },
        {
            title: "Cultural & Knowledge Loss",
            content: [
                "Glaciers anchor identity and spiritual landscapes across HKH communities",
                "Loss erases traditional knowledge systems and causes ecological grief (solastalgia)"
            ],
            icon: <FaGlobe />
        }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/story/crisis.png" 
                        alt="Crisis Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.25] scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-12 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl">
                            Chapter 01: The Cascade
                        </span>
                        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-nohemi text-white mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            The Cascading <br />
                            <span className="text-glacier-teal italic text-4xl md:text-8xl">Reality of Ice Loss</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-light font-cabin max-w-3xl mx-auto mt-10">
                            Glacier risk is systemic risk. When water infrastructure destabilises, entire systems spiral.
                        </p>

                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="mt-20 flex flex-col items-center gap-4 text-white/20 cursor-pointer hover:text-glacier-teal transition-colors"
                        >
                            <span className="font-nohemi text-[10px] uppercase tracking-[0.3em]">Explore Impact</span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                <FaChartLine className="text-lg" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 🏗️ The Cascade Effect Flow */}
            <section className="py-32 px-6 md:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy leading-none mb-4">
                            The Cascade <span className="text-glacier-teal">Effect</span>
                        </h2>
                        <p className="text-glacier-navy/60 max-w-xl text-lg font-light">
                            Visualizing the domino effect: how melting peaks systematically dismantle human and ecological security.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-glacier-offwhite z-0 hidden lg:block -translate-y-1/2"></div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                            {actualCascade.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-glacier-offwhite p-8 rounded-2xl border-b-4 border-glacier-teal shadow-xl shadow-glacier-navy/5 flex flex-col items-center justify-center text-center group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-glacier-teal mb-6 shadow-inner group-hover:bg-glacier-teal group-hover:text-white transition-colors duration-300">
                                        <span className="font-nohemi font-bold text-lg">{index + 1}</span>
                                    </div>
                                    <p className="font-nohemi text-sm md:text-base text-glacier-navy leading-tight uppercase tracking-wider">{step}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 📣 Key Callout */}
            <section className="py-32 px-6 bg-glacier-crimson relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaCubes className="text-white/20 text-6xl mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-nohemi text-white leading-[1.1] tracking-tight">
                            &quot;Glacier Risk Is Systemic Risk.<br />
                            <span className="text-white/80 italic font-light">When water infrastructure destabilises, entire systems spiral.</span>&quot;
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 🔳 Impact Quadrants */}
            <section className="py-32 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {impactQuadrants.map((quad, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-glacier-navy/5 border border-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-teal/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-glacier-offwhite flex items-center justify-center text-glacier-teal text-3xl group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500 shadow-sm">
                                        {quad.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-nohemi text-glacier-navy mb-8 leading-none">{quad.title}</h3>
                                        <ul className="space-y-4">
                                            {quad.content.map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-glacier-navy/70 leading-relaxed group-hover:text-glacier-navy transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2.5 flex-shrink-0"></div>
                                                    <span className="text-sm md:text-base font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Strip to Next Section */}
            <div className="bg-white py-12 border-t border-glacier-navy/5 px-6">
                <div className="max-w-7xl mx-auto flex justify-end">
                    <a href="/why-glaciers-matter/gap" className="flex items-center gap-4 text-glacier-navy hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <span>Next: The Preparedness Gap</span>
                        <FaArrowRight className="text-lg" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CrisisPage;
