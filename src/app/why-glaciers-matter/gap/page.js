"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
    FaLightbulb, FaShieldAlt, FaFileAlt, FaDatabase, FaGraduationCap, FaSeedling, FaArrowRight, FaLink
} from 'react-icons/fa';

const GapPage = () => {
    // Exact 6 Gap Cards from the Brief
    const gapCards = [
        {
            title: "Imagination Gap",
            icon: <FaLightbulb />,
            desc: "Glaciers feel remote, not personal, not urgent to the public consciousness."
        },
        {
            title: "Cultural & Knowledge Silos",
            icon: <FaShieldAlt />,
            desc: "Indigenous wisdom, science, art, and community narratives operate in separation."
        },
        {
            title: "Policy Exclusion",
            icon: <FaFileAlt />,
            desc: "Cryosphere risk is excluded from most national climate adaptation plans."
        },
        {
            title: "Data Inequity",
            icon: <FaDatabase />,
            desc: "Fragmented, inaccessible glacier data. Global South regions are severely underrepresented."
        },
        {
            title: "Education Void",
            icon: <FaGraduationCap />,
            desc: "No integrated glacier curriculum in schools or universities."
        },
        {
            title: "Reactive Capital",
            icon: <FaSeedling />,
            desc: "Funding activates post-disaster. Preparedness remains chronically underbuilt."
        }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />
            
            {/* Premium Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 px-6 md:px-12 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img 
                        src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img2.webp" 
                        alt="Gap Background" 
                        className="object-cover w-full h-full scale-105 opacity-40 grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-glacier-navy/40 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-4xl md:text-8xl font-nohemi text-white mb-8 leading-[0.9] tracking-tighter">
                            The Orphaned <br />
                            <span className="text-glacier-teal italic">Crisis</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-glacier-warmGrey/90 leading-relaxed max-w-4xl mx-auto font-light mb-12">
                            Preparedness for glacier loss sits between climate mitigation, disaster response, and development. It belongs to none of them. This is why it has no clear owner — and why communities pay the price.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/*  Analytical Grid: The 6 System Gaps in a 2x3 grid */}
            <section className="py-32 px-6 md:px-12 bg-white flex justify-center text-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="mb-24">
                        <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy tracking-tight leading-none mb-6">
                            The System <span className="text-glacier-teal italic">Gap</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gapCards.map((gap, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-glacier-offwhite p-12 rounded-[3rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left group hover:bg-glacier-navy hover:text-white transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full -mr-16 -mt-16 group-hover:scale-[3] transition-transform duration-1000"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-glacier-teal text-3xl mb-8 shadow-sm group-hover:bg-glacier-teal group-hover:text-white transition-colors duration-300">
                                        {gap.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-nohemi text-glacier-navy mb-4 group-hover:text-white transition-colors">{gap.title}</h3>
                                    <p className="text-glacier-navy/60 font-light font-cabin leading-relaxed group-hover:text-white/80 transition-colors">
                                        {gap.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-40 px-6 bg-glacier-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-glacier-crimson via-transparent to-transparent"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                    <FaLink className="text-glacier-teal text-5xl mb-8" />
                    <h3 className="text-3xl md:text-5xl font-nohemi text-white mb-8 tracking-tight leading-[1.1]">
                        &quot;Preparedness has no clear owner, <br className="hidden md:block"/> and communities pay the price.&quot;
                    </h3>
                    <p className="text-glacier-teal text-xl md:text-2xl font-bold uppercase tracking-[0.2em] font-nohemi italic border-t border-white/10 pt-8 mt-4">
                        &quot;Investing upstream protects life downstream.&quot;
                    </p>
                </div>
            </section>

            {/* Navigation Strip to Prev/Next Section */}
            <div className="bg-white py-12 border-t border-glacier-navy/5 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="/why-glaciers-matter/crisis" className="flex items-center gap-4 text-glacier-navy/40 hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <FaArrowRight className="text-lg rotate-180" />
                        <span>Prev: The Crisis</span>
                    </a>
                    <a href="/why-glaciers-matter/decade" className="flex items-center gap-4 text-glacier-navy hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <span>Next: The Decisive Decade</span>
                        <FaArrowRight className="text-lg" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GapPage;
