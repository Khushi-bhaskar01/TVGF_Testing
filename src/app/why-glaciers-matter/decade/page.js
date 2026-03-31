"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaExclamationCircle, FaChartPie, FaCalendarAlt, FaWater } from 'react-icons/fa';

const DecadePage = () => {
    // Exact GLOF timeline from the brief
    const glofTimeline = [
        { 
            year: "2021", month: "Feb", event: "Chamoli", 
            image: "https://picsum.photos/id/1015/800/500" 
        },
        { 
            year: "2022", month: "May", event: "Shishper GLOF", 
            image: "https://picsum.photos/id/1036/800/500" 
        },
        { 
            year: "2023", month: "Oct", event: "Teesta Basin GLOF / South Lhonak", 
            image: "https://picsum.photos/id/1018/800/500" 
        },
        { 
            year: "2024", month: "Aug", event: "Thame Valley Flood", 
            image: "https://picsum.photos/id/866/800/500" 
        },
        { 
            year: "2025", month: "Current", event: "Four major events: Limi Valley, Rasuwagadhi, Harsil-Dharali, and Shishper II", 
            image: "https://picsum.photos/id/1043/800/500" 
        }
    ];

    // The Window stats
    const events = [
        { label: "UN International Year of Glaciers' Preservation (2025)" },
        { label: "COP30 Brazil" },
        { label: "UN Decade of Action for Cryospheric Sciences (2025–2034)" },
        { label: "The Cryosphere is projected to warm beyond 1.5°C by 2028." },
        { label: "What we do by 2034 determines if glaciers stabilise." },
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />
            
            {/* 🏔️ Premium Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 px-6 md:px-12 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img 
                        src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img5.webp" 
                        alt="Decade Background" 
                        className="object-cover w-full h-full scale-105 opacity-40 grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-glacier-navy/40 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-4xl md:text-8xl font-nohemi text-white mb-8 leading-[0.9] tracking-tighter">
                            The Decisive <br />
                            <span className="text-glacier-crimson italic">Decade</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 🚨 TIPPING POINT ALERT */}
            <section className="py-24 px-6 bg-glacier-navy text-white text-center border-b-[20px] border-glacier-crimson">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-glacier-crimson/20 border border-glacier-crimson/50 rounded-full mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-glacier-crimson animate-pulse"></span>
                        <span className="text-glacier-crimson font-nohemi tracking-widest uppercase text-xs font-bold">Tipping Point Alert</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-nohemi leading-tight tracking-tight">
                        &quot;13 October 2025 — first confirmed climate tipping point (coral mortality).<br />
                        <span className="text-glacier-crimson italic">Glaciers are next.</span>&quot;
                    </h2>
                </div>
            </section>

            {/* 🔳 Analytical Grid: Science, Window, Finance */}
            <section className="py-32 px-6 md:px-12 bg-white flex justify-center text-center">
                <div className="max-w-7xl mx-auto w-full">
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* The Science */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-glacier-offwhite p-12 rounded-[3.5rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left overflow-hidden relative group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-navy/5 rounded-full -mr-16 -mt-16 group-hover:bg-glacier-navy transition-colors duration-1000"></div>

                            <div className="flex items-center gap-4 text-glacier-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-cabin relative z-10">
                                <FaExclamationCircle className="text-lg" /> <span>The Science</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-nohemi text-glacier-navy mb-6 tracking-tight relative z-10 leading-none">HKH cryosphere is warming 2x faster than the global average.</h3>
                            <p className="text-lg font-light text-glacier-navy/60 leading-relaxed relative z-10">
                                At current rates, 75% of Himalayan glaciers could disappear by 2100. Even 1.5°C is not safe for this region.
                            </p>
                        </motion.div>

                        {/* The Window */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-glacier-offwhite p-10 rounded-[3.5rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left overflow-hidden relative group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full -mr-16 -mt-16 group-hover:bg-glacier-teal transition-colors duration-1000"></div>

                            <div className="flex items-center gap-4 text-glacier-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-cabin relative z-10">
                                <FaCalendarAlt className="text-lg" /> <span>The Window</span>
                            </div>
                            <ul className="space-y-4 relative z-10 font-light text-glacier-navy/70 text-sm">
                                {events.map((ev, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2 flex-shrink-0"></div>
                                        <span>{ev.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The Finance Gap */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-glacier-crimson p-10 rounded-[3.5rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left overflow-hidden relative text-white group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-[2.5] transition-transform duration-1000"></div>

                            <div className="flex items-center gap-4 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-cabin relative z-10">
                                <FaChartPie className="text-lg" /> <span>The Finance Gap</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-nohemi text-white tracking-tight relative z-10 leading-[0.9]">
                                $1.9 Trillion <br /> <span className="text-xl font-light italic opacity-60">in global climate finance.</span>
                            </h3>
                            <p className="text-base font-light leading-relaxed relative z-10 border-t border-white/20 pt-4 mt-6">
                                Less than <strong className="font-bold">0.1%</strong> reaches glaciers. Only <strong className="font-bold">~3%</strong> of all climate finance reaches mountain regions.
                            </p>
                            <p className="text-base font-bold leading-relaxed relative z-10 mt-4">
                                15 million people live in direct GLOF hazard zones with minimal financial protection.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* 🌊 Visual Timeline: Escalation of GLOFs */}
             <section className="py-32 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="flex justify-center items-center gap-4 text-glacier-crimson text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-cabin">
                            <FaWater className="text-lg" /> <span>Visual Timeline</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy leading-none">
                            GLOF Event Timeline (2021–2025)
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {glofTimeline.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-glacier-navy/5 flex flex-col group border-2 border-transparent hover:border-glacier-crimson transition-colors"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img src={item.image} alt={item.event} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                    <div className="absolute top-4 left-4 bg-glacier-crimson text-white px-3 py-1 rounded-full text-xs font-nohemi font-bold tracking-widest uppercase shadow-lg">
                                        {item.year} - {item.month}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-nohemi text-glacier-navy font-bold tracking-tight leading-tight">{item.event}</h5>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🏁 Bottom Callout & Link */}
            <section className="py-40 px-6 bg-glacier-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-glacier-crimson via-transparent to-transparent"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-nohemi text-white mb-16 tracking-tight leading-[1.1]">
                        &quot;Investing in glaciers is not charity — <br />
                        <span className="text-glacier-teal italic">it is survival economics.</span>&quot;
                    </h3>
                    <a href="/get-involved/glacier-guardian" className="px-12 py-5 bg-glacier-teal text-white rounded-full font-nohemi font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-glacier-navy transition-all duration-300 shadow-2xl">
                        Join as Glacier Guardian
                    </a>
                </div>
            </section>

             {/* Navigation Strip to Prev Section */}
             <div className="bg-white py-12 border-t border-glacier-navy/5 px-6">
                <div className="max-w-7xl mx-auto flex">
                    <a href="/why-glaciers-matter/gap" className="flex items-center gap-4 text-glacier-navy/40 hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <FaArrowRight className="text-lg rotate-180" />
                        <span>Prev: The Preparedness Gap</span>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DecadePage;
