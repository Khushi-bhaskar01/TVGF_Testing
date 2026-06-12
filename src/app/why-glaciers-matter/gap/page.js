"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    FaLightbulb, FaShieldAlt, FaFileAlt, FaDatabase, FaGraduationCap, FaSeedling, FaArrowRight, FaLink, FaSearch
} from 'react-icons/fa';

const GapPage = () => {
    const gapCards = [
        {
            title: "Imagination Gap",
            icon: <FaLightbulb />,
            desc: "Glaciers feel remote, not personal, not urgent to the public consciousness.",
            doodle: "spark"
        },
        {
            title: "Cultural & Knowledge Silos",
            icon: <FaShieldAlt />,
            desc: "Indigenous wisdom, science, art, and community narratives operate in separation.",
            doodle: "rings"
        },
        {
            title: "Policy Exclusion",
            icon: <FaFileAlt />,
            desc: "Cryosphere risk is excluded from most national climate adaptation plans.",
            doodle: "slope"
        },
        {
            title: "Data Inequity",
            icon: <FaDatabase />,
            desc: "Fragmented, inaccessible glacier data. Global South regions are severely underrepresented.",
            doodle: "grid"
        },
        {
            title: "Education Void",
            icon: <FaGraduationCap />,
            desc: "No integrated glacier curriculum in schools or universities.",
            doodle: "peak"
        },
        {
            title: "Reactive Capital",
            icon: <FaSeedling />,
            desc: "Funding activates post-disaster. Preparedness remains chronically underbuilt.",
            doodle: "current"
        }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white text-slate-800">
            <Navbar />
            
            {/* 🏔️ Compact Cinematic Hero Section */}
            <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-28 pb-12 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/story/gap.png" 
                        alt="Gap Background" 
                        fill
                        priority
                        className="object-cover grayscale brightness-[0.2] scale-102"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/50" />

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-nohemi font-bold text-white leading-tight tracking-tighter">
                            The Preparedness <br />
                            <span className="text-glacier-teal italic font-normal text-2xl md:text-4xl lg:text-5xl">Crisis</span>
                        </h1>
                        <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
                            Preparedness for glacier loss sits between climate mitigation, disaster response, and development.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Analytical Grid: High-Density 3-Column Layout */}
            <section className="py-12 px-4 md:px-8 bg-white relative overflow-hidden">
                {/* Embedded Accent Ambient Doodles */}
                <div className="absolute left-4 top-6 text-glacier-teal/10 pointer-events-none hidden md:block">
                    <GapDoodle type="peak" className="w-20 h-20 rotate-[-8deg]" />
                </div>
                <div className="absolute right-4 top-16 text-glacier-crimson/10 pointer-events-none hidden lg:block">
                    <GapDoodle type="spark" className="w-16 h-16 rotate-12" />
                </div>

                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-nohemi font-bold text-glacier-navy tracking-tight">
                            The System <span className="text-glacier-teal italic font-normal">Gap</span>
                        </h2>
                        <div className="mt-3 flex justify-center text-glacier-teal/20">
                            <GapDoodle type="slope" className="w-20 h-6" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {gapCards.map((gap, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04 }}
                                className="bg-glacier-offwhite p-5 md:p-6 rounded-2xl border border-glacier-light/40 shadow-sm text-center group hover:bg-glacier-navy hover:text-white transition-all duration-300 relative overflow-hidden flex flex-col items-center"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-glacier-teal/5 rounded-full -mr-8 -mt-8 group-hover:scale-[3.5] transition-transform duration-700" />
                                
                                {/* Background Decorative Markings */}
                                <div className="absolute right-3 bottom-3 text-glacier-teal/10 group-hover:text-white/5 transition-colors duration-300">
                                    <GapDoodle type={gap.doodle} className="w-14 h-14" />
                                </div>
                                <div className="absolute left-3 top-4 text-glacier-navy/5 group-hover:text-white/5 transition-colors duration-300">
                                    <GapDoodle type="trace" className="w-7 h-7" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center w-full">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-glacier-teal text-base mb-3 shadow-sm group-hover:bg-glacier-teal group-hover:text-white transition-colors duration-300 border border-glacier-light/40">
                                        {gap.icon}
                                    </div>
                                    
                                    <h3 className="text-base font-nohemi font-bold text-glacier-navy mb-1 group-hover:text-white transition-colors tracking-tight">{gap.title}</h3>
                                    
                                    <div className="mb-2 text-glacier-teal/30 group-hover:text-white/20 transition-colors duration-300">
                                        <GapDoodle type={gap.doodle} className="w-10 h-3" />
                                    </div>
                                    
                                    <p className="text-xs text-glacier-warmGrey group-hover:text-white/80 font-cabin leading-relaxed">
                                        {gap.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📣 Key Statement Callout Panel */}
            <section className="py-14 px-6 bg-glacier-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-glacier-crimson via-transparent to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                    <FaLink className="text-glacier-teal text-3xl mb-4" />
                    <h3 className="text-xl md:text-3xl font-nohemi text-white mb-5 tracking-tight max-w-2xl leading-snug">
                        &quot;Preparedness has no clear owner, <br className="hidden md:block"/> and communities pay the price.&quot;
                    </h3>
                    <p className="text-glacier-teal text-base md:text-lg font-bold uppercase tracking-[0.15em] font-nohemi italic border-t border-white/10 pt-5 w-full max-w-xl">
                        &quot;Investing upstream protects life downstream.&quot;
                    </p>
                </div>
            </section>

            {/* Navigation Strip to Prev/Next Section */}
            <div className="bg-white py-5 border-t border-glacier-light/40 px-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link href="/why-glaciers-matter/crisis" className="flex items-center gap-2 text-glacier-navy/50 hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase group">
                        <FaArrowRight className="text-[10px] rotate-180 transform transition-transform group-hover:-translate-x-0.5" />
                        <span>Prev: The Crisis</span>
                    </Link>
                    <Link href="/why-glaciers-matter/decade" className="flex items-center gap-2 text-glacier-navy hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase group">
                        <span>Next: The Decisive Decade</span>
                        <FaArrowRight className="text-[10px] transform transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GapPage;

function GapDoodle({ type, className = "" }) {
    const base = "fill-none stroke-current stroke-[1.6] stroke-linecap-round stroke-linejoin-round";

    if (type === "spark") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M32 10v10M32 44v10M10 32h10M44 32h10M18 18l7 7M39 39l7 7M46 18l-7 7M25 39l-7 7" />
                <circle className={base} cx="32" cy="32" r="8" />
            </svg>
        );
    }

    if (type === "rings") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <circle className={base} cx="32" cy="32" r="10" />
                <circle className={base} cx="32" cy="32" r="19" />
                <circle className={base} cx="32" cy="32" r="28" />
            </svg>
        );
    }

    if (type === "slope") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M8 46c8-8 14-8 22 0s14 8 26-4" />
                <path className={base} d="M10 34c7-5 12-5 18 0s12 5 26-6" />
                <path className={base} d="M14 22c6-4 9-4 14 0s10 4 22-4" />
            </svg>
        );
    }

    if (type === "grid") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M16 14v36M32 14v36M48 14v36M14 16h36M14 32h36M14 48h36" />
                <circle className={base} cx="32" cy="32" r="4" />
            </svg>
        );
    }

    if (type === "peak") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M10 48 24 28l8 10 8-16 14 26" />
                <path className={base} d="M24 28 20 20M40 22l4-8" />
                <path className={base} d="M18 52h28" />
            </svg>
        );
    }

    if (type === "current") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M8 42c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
                <path className={base} d="M8 30c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
                <path className={base} d="M20 16c2 3 5 5 12 5s10-2 12-5" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
            <path className={base} d="M14 42c8-12 16-12 24 0s12 12 12 12" />
            <path className={base} d="M20 24c4-4 8-4 12 0" />
        </svg>
    );
}