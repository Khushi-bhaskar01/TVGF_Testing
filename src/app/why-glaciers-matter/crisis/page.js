"use client";

import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaUsers, FaLeaf, FaGlobe, FaCubes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CrisisPage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray('.cascade-card');
        cards.forEach((card, i) => {
            gsap.fromTo(card, 
                { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
                { 
                    opacity: 1, 
                    x: 0,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);
    // 1. The Cascade Effect (detailed data)
    const detailedCascade = [
        {
            title: "Accelerated Warming",
            data: "3x faster than global average.",
            desc: "The Cryosphere is warming three times faster than the global average, signaling an urgent climate crisis."
        },
        {
            title: "Projected Melt",
            data: "50% melt by 2100.",
            desc: "Half of the world's glaciers could disappear by 2100, threatening ecosystems, water supplies, and sea levels."
        },
        {
            title: "Himalayan Decline",
            data: "40% ice volume lost since 2000.",
            desc: "Himalayan glaciers are rapidly losing volume, fundamentally destabilising regional water systems."
        },
        {
            title: "Water Insecurity",
            data: "Over 2 billion lives at risk.",
            desc: "More than 2 billion people rely on glacier-fed rivers like the Ganges, Indus, and Yangtze for water and food."
        },
        {
            title: "Glacial Flood Threat",
            data: "Increasing GLOF frequency.",
            desc: "Glacial lake outburst floods (GLOFs) are putting lives, downstream infrastructure, and economies at extreme risk."
        },
        {
            title: "Albedo Loss",
            data: "Reduced Earth's reflectivity.",
            desc: "Melting glaciers reduce the planet's reflectivity, causing Earth to absorb more heat and warm even faster."
        }
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
                    </motion.div>
                </div>
            </section>

            {/* 🏗️ The Cascade Effect Flow - Refined & Compact with GSAP */}
            <section ref={containerRef} id="cascade-section" className="py-20 px-6 md:px-12 bg-glacier-offwhite relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-glacier-teal/5 blur-[120px] rounded-full -translate-y-1/4 translate-x-1/3 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="mb-16 text-center">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-glacier-teal mb-4 block font-nohemi">The Systemic Breakdown</span>
                        <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy leading-[0.9] tracking-tighter mb-6">
                            The Cascading <br /> <span className="text-glacier-teal italic">Realities</span>
                        </h2>
                    </div>

                    <div className="space-y-4 relative">
                        {/* Vertical Progress Line */}
                        <div className="absolute left-[2.45rem] md:left-1/2 top-0 w-[1px] h-full bg-glacier-navy/10 -translate-x-1/2 hidden md:block"></div>

                        {detailedCascade.map((step, index) => (
                            <div
                                key={index}
                                className={`cascade-card relative flex flex-col md:flex-row gap-6 md:gap-12 items-center opacity-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Marker */}
                                <div className="z-10 w-12 h-12 rounded-2xl bg-white flex-shrink-0 flex items-center justify-center text-glacier-teal font-nohemi text-lg border border-glacier-navy/5 shadow-lg group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500">
                                    {index + 1}
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 bg-white p-8 rounded-[2rem] border border-glacier-navy/5 shadow-xl shadow-glacier-navy/5 group hover:border-glacier-teal/20 transition-all duration-500 w-full ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                                        <h3 className="font-nohemi text-2xl md:text-3xl text-glacier-navy mb-2 group-hover:text-glacier-teal transition-colors tracking-tight leading-none">{step.title}</h3>
                                        <p className="text-glacier-crimson font-bold text-xs mb-3 uppercase tracking-wider bg-glacier-crimson/5 px-3 py-1 rounded-full w-fit">{step.data}</p>
                                    </div>
                                    <p className="text-glacier-navy/60 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto md:mx-0 font-cabin">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📣 Key Callout */}
            <section className="py-20 px-6 bg-glacier-accent relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaCubes className="text-glacier-teal/20 text-6xl mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-nohemi text-white font-normal leading-tight tracking-tight max-w-5xl mx-auto">
                            &quot;Glacier Risk Is Systemic Risk.<br />
                            <span className="italic">When water infrastructure destabilises, entire systems spiral.&quot;</span>
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 🔳 Impact Quadrants */}
            <section className="py-20 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {impactQuadrants.map((quad, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white p-10 rounded-[2rem] shadow-2xl shadow-glacier-navy/5 border border-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-teal/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-glacier-offwhite flex items-center justify-center text-glacier-teal text-2xl group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500 shadow-sm">
                                        {quad.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-nohemi text-glacier-navy mb-6 leading-none">{quad.title}</h3>
                                        <ul className="space-y-3">
                                            {quad.content.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-glacier-navy/70 leading-relaxed group-hover:text-glacier-navy transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2 flex-shrink-0"></div>
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

            {/*
            <section className="py-24 px-6 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="font-cabin text-xl md:text-3xl text-glacier-navy/80 italic leading-relaxed font-light">
                        &quot;Glaciers store the world&apos;s freshwater, cool the planet, and sustain life.<br className="hidden md:block" />
                        Their rapid disappearance is not just a climate crisis — it&apos;s a life crisis.<br className="hidden md:block" />
                        <span className="font-nohemi font-bold text-glacier-teal not-italic mt-6 block text-lg tracking-widest uppercase">The Voice of Glaciers Foundation exists to protect what remains, before silence replaces ice.</span>&quot;
                    </p>
                </div>
            </section> */}

            {/* Navigation Strip to Next Section */}
            <div className="bg-white py-10 border-t border-glacier-navy/5 px-6">
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