"use client";

import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaExclamationCircle, FaChartPie, FaWater } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DecadePage = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        // Animate Grid Cards
        gsap.fromTo(".grid-card", 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.2, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".grid-container",
                    start: "top 80%",
                }
            }
        );

        // Animate Timeline Cards
        const tCards = gsap.utils.toArray('.timeline-item');
        tCards.forEach((card, i) => {
            gsap.fromTo(card, 
                { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 1.2, 
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                }
            );
        });
    }, []);

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

            {/* 🏔️ OG Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/story/hkh.jpg"
                        alt="Decade Background"
                        className="object-cover w-full h-full grayscale brightness-[0.3] scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* Changed to glacier-lightTeal from tailwind.config.js */}
                        <span className="inline-block text-glacier-lightTeal font-nohemi font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-12 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl">
                            The Critical Window
                        </span>
                        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-nohemi text-white mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            The Decisive <br />
                            <span className="text-glacier-lightTeal italic">Decade</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-light font-cabin max-w-3xl mx-auto mt-10">
                            The years 2025–2034 represent the final threshold for cryospheric stability globally.
                        </p>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="mt-20 flex flex-col items-center gap-4 text-white/20 cursor-pointer hover:text-glacier-lightTeal transition-colors"
                        >
                            <span className="font-nohemi text-[10px] uppercase tracking-[0.3em]">Critical Timeline</span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                <FaCalendarAlt className="text-lg" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 🚨 TIPPING POINT ALERT */}
            <section className="py-20 px-6 bg-glacier-navy text-white text-center border-b-[15px] border-glacier-lightTeal">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-glacier-lightTeal/20 border border-glacier-lightTeal/50 rounded-full mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-glacier-lightTeal animate-pulse"></span>
                        <span className="text-glacier-lightTeal font-nohemi tracking-widest uppercase text-xs font-bold">Tipping Point Alert</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-nohemi leading-tight tracking-tight">
                        &quot;13 October 2025 — first confirmed climate tipping point (coral mortality).<br />
                        <span className="text-glacier-lightTeal italic">Glaciers are next.</span>&quot;
                    </h2>
                </div>
            </section>

            {/* 🔳 Analytical Grid: Science, Window, Finance */}
            <section className="py-20 px-6 md:px-12 bg-white flex justify-center text-center grid-container">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* The Science */}
                        <div className="grid-card bg-glacier-offwhite p-10 rounded-[3rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left overflow-hidden relative group opacity-0">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-navy/5 rounded-full -mr-16 -mt-16 group-hover:bg-glacier-navy transition-colors duration-1000"></div>
                            <div className="flex items-center gap-4 text-glacier-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-cabin relative z-10">
                                <FaExclamationCircle className="text-lg" /> <span>The Science</span>
                            </div>
                            <h3 className="text-xl md:text-3xl font-nohemi text-glacier-navy mb-6 tracking-tight relative z-10 leading-none">Globally, the cryosphere is warming 2x faster than the global average.</h3>
                            <p className="text-base font-light text-glacier-navy/60 leading-relaxed relative z-10">
                                At current rates, 75% of global glaciers could disappear by 2100. Even 1.5°C is not safe globally.
                            </p>
                        </div>

                        {/* The Window - Standout Card */}
                        <div className="grid-card bg-glacier-navy p-10 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,128,128,0.3)] border border-white/10 text-left overflow-hidden relative group md:scale-105 z-20 opacity-0">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-glacier-teal/10 rounded-full -mr-24 -mt-24 group-hover:bg-glacier-teal transition-colors duration-1000 blur-3xl"></div>
                            <div className="flex items-center gap-4 text-glacier-teal text-[10px] font-bold uppercase tracking-[0.3em] mb-6 font-cabin relative z-10">
                                <FaCalendarAlt className="text-lg" /> <span>The Critical Window</span>
                            </div>
                            <ul className="space-y-4 relative z-10 font-light text-white/80 text-sm md:text-base">
                                {events.map((ev, i) => (
                                    <li key={i} className="flex gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                        <span className="group-hover/item:text-white transition-colors">{ev.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The Finance Gap */}
                        <div className="grid-card bg-glacier-crimson p-10 rounded-[3rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left overflow-hidden relative text-white group opacity-0">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-[2.5] transition-transform duration-1000"></div>
                            <div className="flex items-center gap-4 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-cabin relative z-10">
                                <FaChartPie className="text-lg" /> <span>The Finance Gap</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-nohemi text-white tracking-tight relative z-10 leading-[0.9]">
                                $1.9 Trillion <br /> <span className="text-lg font-light italic opacity-60">in global climate finance.</span>
                            </h3>
                            <p className="text-sm font-light leading-relaxed relative z-10 border-t border-white/20 pt-4 mt-6">
                                Less than <strong className="font-bold">0.1%</strong> reaches glaciers. Only <strong className="font-bold">~3%</strong> of all climate finance reaches mountain regions.
                            </p>
                            <p className="text-sm font-bold leading-relaxed relative z-10 mt-4">
                                15 million people live in direct GLOF hazard zones with minimal financial protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🌊 Visual Timeline: Escalation of GLOFs - Professional Vertical Layout */}
            <section className="py-20 px-6 md:px-12 bg-glacier-offwhite overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex justify-center items-center gap-4 text-glacier-crimson text-[9px] font-bold uppercase tracking-[0.4em] mb-4 font-nohemi">
                             <span>Historical Escalation</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy leading-[0.9] tracking-tighter">
                            GLOF Event <span className="text-glacier-crimson italic">Timeline</span>
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-[20px] md:left-1/2 top-0 w-[1px] h-full bg-glacier-navy/10 -translate-x-1/2"></div>
                        <div className="space-y-8 relative z-10">
                            {glofTimeline.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 opacity-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-glacier-crimson border-4 border-white shadow-xl z-20"></div>
                                    <div className={`pl-12 md:pl-0 md:w-1/2 flex ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                                            <span className="text-[9px] font-bold text-glacier-crimson tracking-[0.3em] uppercase mb-1 font-nohemi">{item.month}</span>
                                            <span className="text-2xl md:text-3xl font-nohemi text-glacier-navy">{item.year}</span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block w-8"></div>
                                    <div className="pl-12 md:pl-0 md:w-1/2">
                                        <div className="bg-white p-6 rounded-[1.5rem] border border-glacier-navy/5 shadow-2xl shadow-glacier-navy/5 group hover:border-glacier-crimson/20 transition-all duration-700">
                                            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-4">
                                                <img src={item.image} alt={item.event} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                                                <div className="absolute inset-0 bg-glacier-navy/5 group-hover:bg-transparent transition-all"></div>
                                            </div>
                                            <h5 className="text-lg md:text-xl font-nohemi text-glacier-navy leading-tight group-hover:text-glacier-crimson transition-colors">{item.event}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏁 Bottom Callout & Link */}
            <section className="py-24 px-6 bg-glacier-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-glacier-crimson via-transparent to-transparent"></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-nohemi text-white mb-12 tracking-tight leading-[1.1]">
                        &quot;Investing in glaciers is not charity — <br />
                        <span className="text-glacier-teal italic">it is survival economics.</span>&quot;
                    </h3>
                    <a href="/get-involved/glacier-guardian" className="px-12 py-5 bg-glacier-teal text-white rounded-full font-nohemi font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-glacier-navy transition-all duration-300 shadow-2xl">
                        Join as Glacier Guardian
                    </a>
                </div>
            </section>

            <div className="bg-white py-10 border-t border-glacier-navy/5 px-6">
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