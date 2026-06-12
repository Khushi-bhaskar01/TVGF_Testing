"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaGavel, FaHammer, FaUniversalAccess, FaGraduationCap, FaArrowRight, FaBalanceScale, FaMicroscope, FaCompass, FaUsers, FaGlobe } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
    const flowRef = useRef(null);
    const cursorRef = useRef(null);
    const [isHoveringFramework, setIsHoveringFramework] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.title = "Our Story | The Voice of Glacier Foundation";

        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const framework = [
        { k: "S", t: "Science", d: "Open real-time data & citizen science", icon: <FaMicroscope /> },
        { k: "P", t: "Policy", d: "Embedding protection in governance", icon: <FaGavel /> },
        { k: "A", t: "Action", d: "GlacierX & Glacier Guardians Network", icon: <FaHammer /> },
        { k: "C", t: "Culture", d: "Films, rituals & resacralizing ice", icon: <FaUniversalAccess /> },
        { k: "E", t: "Education", d: "Curriculum for future custodians", icon: <FaGraduationCap /> }
    ];

    const theorySteps = [
        { title: "Movement", img: "/1.jpg", desc: "Building a global constituency for glaciers and mobilizing action from the ground up." },
        { title: "Pilots & Proof", img: "/About/pilotnproof.jpg", desc: "Demonstrating actionable, scalable adaptation solutions within highly vulnerable mountain communities." },
        { title: "Catalytic Capital", img: "/3.jpg", desc: "Unlocking structured financing and global investments for deep resilience infrastructure." },
        { title: "Impact & Resilience", img: "/4.jpg", desc: "Securing critical ecosystems, strengthening water security, and increasing adaptive capacity." },
        { title: "Systems Change", img: "/SysChnage.jpg", desc: "A permanent shift in global policy architecture recognizing glaciers as living entities." }
    ];

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Custom Cursor Follower - Simplified (No text) */}
            <AnimatePresence>
                {isHoveringFramework && (
                    <motion.div
                        ref={cursorRef}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference"
                        style={{
                            left: cursorPos.x - 16,
                            top: cursorPos.y - 16,
                        }}
                    >
                        <div className="w-full h-full bg-glacier-teal rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🏔️ OG Cinematic Hero Section */}
            <section className="relative h-[60vh] flex items-start justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/About/banner.JPG"
                        alt="About Us Background"
                        className="object-cover w-full h-full object-[center_50%] scale-100"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-nohemi text-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
                            Our <span className="text-glacier-navy italic">Story</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 🎯 North Star Section - Compact */}
            <section className="py-16 bg-glacier-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glacier-teal/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-nohemi mb-6 leading-none tracking-tighter">
                            North Star: <span className="text-glacier-teal italic">Goals for 2035</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto font-cabin font-light">
                            By 2035, we envision a world where the relationship between humanity and the cryosphere is defined by reverence, protection, and justice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Cryosphere Justice Framework", desc: "Glaciers legally and culturally protected in 10+ countries." },
                            { title: "Cryosphere Pedagogy", desc: "Glacier education embedded in school systems worldwide." },
                            { title: "Real-time Monitoring", desc: "Publicly accessible, open-source glacier monitoring data for all." },
                            { title: "Global Guardians Network", desc: "Mobilizing 100,000+ individuals as active stewards across continents." },
                            { title: "Resacralizing Ice", desc: "Restoring cultural and spiritual bonds through art, ritual, and memory." },
                            { title: "Reverence & Reciprocity", desc: "A redefined human-glacier relationship built on long-term stewardship." }
                        ].map((goal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white hover:text-glacier-navy transition-all duration-500 group"
                            >
                                <div className="text-glacier-teal group-hover:text-glacier-navy text-xl font-nohemi mb-3">0{i + 1}</div>
                                <h3 className="text-xl font-nohemi mb-3 leading-tight">{goal.title}</h3>
                                <p className="text-xm text-white/50 group-hover:text-glacier-navy/70 font-cabin font-light leading-relaxed">{goal.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🏗️ Core Identity Section - Compact */}
            <section className="pt-16 pb-8 px-4 md:px-12 bg-white relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-16">
                    <span className="text-[9px] font-nohemi text-glacier-teal tracking-[0.4em] uppercase mb-4 block font-bold">The Foundation</span>
                    <h2 className="text-2xl md:text-4xl font-nohemi text-glacier-navy leading-tight tracking-tight">
                        Our operational focus lies deep within the <span className="text-glacier-teal italic">Hindu Kush Himalaya (HKH)</span> region.
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Mission & Vision Redesign - Bento Infographic Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 mb-24">
                        
                        {/* 👁️ THE VISION (Photographic & Floating Tags) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-glacier-navy rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden group min-h-[400px] flex flex-col justify-end"
                        >
                            {/* Photographic Background */}
                            <div className="absolute inset-0 z-0">
                                <img src="/1.jpg" alt="Glacier Vision" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-glacier-navy/80 to-glacier-navy/10 mix-blend-multiply" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-glacier-teal/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-lg">
                                        <FaCompass className="text-xl" />
                                    </div>
                                    <h2 className="text-4xl font-nohemi text-white  uppercase font-bold drop-shadow-md">The Vision</h2>
                                </div>
                                <p className="text-2xl md:text-3xl text-white font-nohemi italic leading-tight tracking-tighter drop-shadow-xl mb-8">
                                    &quot;A world where protected glaciers secure water security and climate stability.&quot;
                                </p>

                                {/* Floating Infographic Tags */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                                         Water Security
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-300 delay-200">
                                         Climate Stability
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 🎯 THE MISSION (Infographic Flowchart) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-glacier-navy/5 flex flex-col justify-between relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-glacier-teal/5 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-[3s]" />
                            
                            <div className="relative z-10 mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-glacier-navy flex items-center justify-center text-glacier-teal border border-glacier-navy/10 shadow-lg">
                                        <FaBalanceScale className="text-xl" />
                                    </div>
                                    <h2 className="text-4xl font-nohemi text-glacier-teal uppercase font-bold">The Mission</h2>
                                </div>
                                <p className="text-lg md:text-xl text-glacier-navy font-cabin font-light leading-relaxed">
                                    To enable mountain communities to adapt by connecting <strong className="font-bold text-glacier-teal">science</strong>, <strong className="font-bold text-blue-500">local knowledge</strong>, and <strong className="font-bold text-indigo-500">collective action</strong> through our unique SPACE framework.
                                </p>
                            </div>

                            {/* Mini-Infographic Flowchart */}
                            <div className="relative z-10 mt-auto bg-glacier-offwhite rounded-2xl p-6 border border-glacier-navy/5 shadow-inner">
                                <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-glacier-navy/40 mb-6 text-center">Our Action Flow</span>
                                
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center text-center w-full sm:w-1/3">
                                        <div className="w-12 h-12 rounded-full bg-glacier-teal/10 flex items-center justify-center text-glacier-teal mb-3 relative">
                                            <FaMicroscope className="text-lg" />
                                        </div>
                                        <span className="font-nohemi font-bold text-glacier-navy text-sm">Science</span>
                                    </div>

                                    {/* Connector */}
                                    <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-glacier-teal via-blue-400 to-indigo-400 opacity-50 relative">
                                        <div className="absolute -top-1 right-0 w-2 h-2 border-t-2 border-r-2 border-indigo-400 rotate-45 transform translate-x-1" />
                                    </div>
                                    <div className="sm:hidden w-[2px] h-6 bg-gradient-to-b from-glacier-teal to-blue-400 opacity-50" />

                                    {/* Step 2 */}
                                    <div className="flex flex-col items-center text-center w-full sm:w-1/3">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-3 relative">
                                            <FaGraduationCap className="text-lg" />
                                        </div>
                                        <span className="font-nohemi font-bold text-glacier-navy text-sm">Knowledge</span>
                                    </div>

                                    {/* Connector */}
                                    <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-500 opacity-50 relative">
                                        <div className="absolute -top-1 right-0 w-2 h-2 border-t-2 border-r-2 border-indigo-500 rotate-45 transform translate-x-1" />
                                    </div>
                                    <div className="sm:hidden w-[2px] h-6 bg-gradient-to-b from-blue-400 to-indigo-500 opacity-50" />

                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center text-center w-full sm:w-1/3">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-3 relative">
                                            <FaUsers className="text-lg" />
                                        </div>
                                        <span className="font-nohemi font-bold text-glacier-navy text-sm">Action</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* SPACE Framework - Compact */}
                    <div
                        className="mb-24 max-w-7xl mx-auto px-4"
                        onMouseEnter={() => setIsHoveringFramework(true)}
                        onMouseLeave={() => setIsHoveringFramework(false)}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy tracking-tighter">
                                The <span className="text-glacier-teal italic">SPACE</span> Model
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {framework.map((f, i) => (
                                <motion.div
                                    key={f.k}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="bg-white p-8 rounded-[2rem] border border-glacier-navy/5 shadow-2xl shadow-glacier-navy/5 text-center group hover:bg-glacier-navy hover:text-white transition-all duration-700 cursor-none relative overflow-hidden flex flex-col justify-between min-h-[280px]"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-glacier-teal/10 group-hover:bg-glacier-teal transition-all duration-700"></div>

                                    <div>
                                        <div className="text-glacier-teal text-4xl mb-6 group-hover:text-white transition-all duration-500 flex justify-center group-hover:scale-125">
                                            {f.icon}
                                        </div>

                                        <h3 className="text-3xl font-nohemi text-glacier-navy mb-1 group-hover:text-white transition-colors">
                                            {f.k}
                                        </h3>

                                        <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-glacier-teal mb-4 group-hover:text-white/60 transition-colors">
                                            {f.t}
                                        </span>
                                    </div>

                                    <p className="text-xm font-light leading-relaxed font-cabin text-glacier-navy/70 group-hover:text-white/90 transition-colors">
                                        {f.d}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sumit-Valley Approach - Compact */}
                    <div className="mb-24 bg-[#0a1a2a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,128,128,0.3)]">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glacier-teal rotate-45 blur-[100px]"></div>
                            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rotate-45 blur-[100px]"></div>
                        </div>

                        <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-nohemi mb-6 leading-none tracking-tighter text-white">The <span className="text-glacier-teal italic">Sumit-Valley</span> <br /> Approach</h2>
                            <p className="text-base md:text-lg text-white/80 leading-relaxed font-cabin font-light max-w-2xl mx-auto">
                                A dual force action model where real resilience flows both ways.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-glacier-teal to-transparent -translate-y-1/2 opacity-30 blur-[1px]"></div>
                            
                            {[
                                { label: "Bottom-Up", desc: "Communities, Youth, Educators", icon: <FaUsers />, color: "from-blue-400 to-glacier-teal" },
                                { label: "Dual Flow", desc: "Action Model", icon: <FaCompass />, color: "from-glacier-teal to-blue-500" },
                                { label: "Top-Down", desc: "Governments, UN, COP, NDCs", icon: <FaGlobe />, color: "from-blue-500 to-indigo-600" }
                            ].map((step, idx) => (
                                <motion.div
                                    key={step.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="relative flex flex-col items-center group w-full md:w-1/3"
                                >
                                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-white text-3xl mb-6 backdrop-blur-3xl group-hover:bg-white group-hover:text-glacier-navy transition-all duration-700 shadow-2xl relative overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                        <div className="relative z-10 transition-transform duration-700 group-hover:rotate-[360deg]">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-nohemi mb-2 text-white tracking-tight">{step.label}</h3>
                                    <p className="text-[11px] text-glacier-teal font-nohemi uppercase tracking-[0.2em] font-bold">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Theory of Change - Compact */}
                    <div className="mb-12 theory-container border-t border-glacier-navy/5 pt-16">
                        <div className="text-center mb-16">
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi mb-3 inline-block">Evolution Model</span>
                            <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Theory of <span className="text-glacier-teal italic">Change</span></h2>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                            {theorySteps.map((step, i) => (
                                <TheoryStepCard key={step.title} step={step} index={i} />
                            ))}
                        </div>
                    </div>

                    </div>
            </section>

            <Footer />
        </div>
    );
}

function TheoryStepCard({ step, index }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 30%"],
    });

    const clipPathLeft = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    const clipPathRight = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]
    );

    const isReverse = index % 2 !== 0;

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 mb-24 md:mb-40 ${isReverse ? 'md:flex-row-reverse' : ''}`}>

            {/* Image unmasking via Framer Motion useScroll */}
            <motion.div
                style={{ clipPath: isReverse ? clipPathRight : clipPathLeft }}
                className="w-full md:w-1/2 aspect-[4/3] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,128,128,0.2)] relative overflow-hidden will-change-transform"
            >
                <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[0.5px] border-white/30 rounded-[2.5rem] z-10 pointer-events-none"></div>
            </motion.div>

            {/* Content fading in normally */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 flex flex-col justify-center text-left ${isReverse ? 'md:pl-10' : 'md:pr-10'}`}
            >
                <span className="text-glacier-teal font-nohemi tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Phase 0{index + 1}</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-nohemi text-glacier-navy mb-6 tracking-tight leading-none">{step.title}</h3>
                <p className="text-lg md:text-xl text-glacier-navy/60 font-cabin font-light leading-relaxed max-w-md">
                    {step.desc}
                </p>
            </motion.div>

        </div>
    );
}