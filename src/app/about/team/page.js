"use client";

import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TeamPage() {
    useEffect(() => {
        document.title = "Team & Advisors | The Voice of Glacier Foundation";
    }, []);

    const placeholderImg = "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/hero-image.webp";

    const coreTeam = [
        { name: "Anurag Maloo", title: "Founder & CEO", desc: "Mountaineer, survivalist, and innovation ecosystem builder.", img: placeholderImg },
        { name: "Sruthi Karthikeyan", title: "Operations & Strategy", desc: "Ex-Microsoft (9 years), driving institutional scaling.", img: placeholderImg },
        { name: "Shriya Harshe", title: "Climate Adaptation", desc: "Environmental planner specialized in mountain ecosystems.", img: placeholderImg },
        { name: "Deepthi Rao", title: "Fellowship Manager", desc: "Orchestrating community engagement and leadership programs.", img: placeholderImg },
        { name: "Soham Punde", title: "Filmmaker", desc: "Capturing the cinematic narrative of our changing cryosphere.", img: placeholderImg },
        { name: "Harshit Rautela", title: "Storyteller & Content", desc: "Crafting impactful media for glacier awareness.", img: placeholderImg },
        { name: "Divya Nawale", title: "Policy Specialist", desc: "UNEP, ex-ADB, ex-UNFCCC climate policy expert.", img: placeholderImg }
    ];

    const advisors = [
        { name: "Romola Butalia", title: "Writer, Conservationist & Senior Media Person", img: placeholderImg },
    ];

    const expertPanel = [
        { name: "Dr. Arun Shrestha", institution: "ex-ICIMOD, Nepal", niche: "Sr. Glaciologist", img: placeholderImg },
        { name: "Dr. Ashim Sattar", institution: "IIT Bhubaneswar", niche: "GLOF Expert (Cryosense)", img: placeholderImg },
        { name: "Dr. Farooq Azam", institution: "ICIMOD / IIT Indore", niche: "Cryosphere Specialist", img: placeholderImg },
        { name: "Dr. Anjan Ray", institution: "IIT Delhi & CBRI", niche: "Sr. Scientist", img: placeholderImg },
        { name: "Ronak Sutaria", institution: "Respirer Living Sciences", niche: "Founder & CEO", img: placeholderImg },
        { name: "Dr. Suman Sahai", institution: "Gene Campaign", niche: "Founder Chairperson", img: placeholderImg },
        { name: "Anoop Nautiyal", institution: "SDC Foundation", niche: "Founder", img: placeholderImg },
        { name: "Dr. Vishal Singh", institution: "CEDAR", niche: "Executive Director", img: placeholderImg },
        { name: "Safi Ahsan Rizvi", institution: "Former IPS", niche: "Disaster Risk Analyst", img: placeholderImg },
        { name: "Dr. Rasik Ravindra", institution: "Chairman SaGAA", niche: "Former Director, NCPOR", img: placeholderImg },
        { name: "Dr. Bryan Mark", institution: "Ohio State University", niche: "Byrd Polar Research", img: placeholderImg },
        { name: "Laxman Srikanth", institution: "Deltares, Netherlands", niche: "Advisor, DRM", img: placeholderImg }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero */}
            <section className="relative h-[50vh] flex items-center justify-center pt-24 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/4.jpg" 
                        alt="Team & Advisors Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.6] scale-110"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-nohemi text-white mb-6 leading-none tracking-tighter">
                            Our <span className="text-glacier-teal italic">Team</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Team Sections */}
            <section className="py-16 px-6 md:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Core Team - 4 columns to reduce whitespace */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Core <span className="text-glacier-teal italic">Team</span></h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {coreTeam.map((member, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="flex flex-col group"
                                >
                                    <div className="w-[80%] mx-auto block aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 shadow-xl shadow-glacier-navy/10 relative">
                                        <img 
                                            src={member.img} 
                                            className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                                            alt={member.name} 
                                        />
                                        <div className="absolute inset-0 bg-glacier-navy/5 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                    <div className="px-2 text-center">
                                        <h3 className="text-lg md:text-xl font-nohemi text-glacier-navy mb-1">{member.name}</h3>
                                        <div className="w-6 h-[1px] bg-glacier-teal my-2 mx-auto"></div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-glacier-navy/60 mb-2">{member.title}</p>
                                        <p className="text-[10px] text-glacier-navy/50 font-light leading-relaxed max-w-[180px] mx-auto">{member.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Advisors Section - Large format */}
                    <div className="mb-20 border-t border-glacier-navy/5 pt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Our <span className="text-glacier-teal italic">Advisors</span></h2>
                        </div>
                        
                        <div className="flex justify-center">
                             {advisors.map((member, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="flex flex-col group items-center mx-auto"
                                >
                                    <div className="w-[40%] md:w-[35%] mx-auto block aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-glacier-navy/10 relative">
                                        <img 
                                            src={member.img} 
                                            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                                            alt={member.name} 
                                        />
                                        <div className="absolute inset-0 bg-glacier-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                    <div className="px-4 text-center">
                                        <h3 className="text-xl md:text-2xl font-nohemi text-glacier-navy mb-1">{member.name}</h3>
                                        <div className="w-6 h-[1.5px] bg-glacier-teal my-2 mx-auto"></div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-glacier-navy/60 leading-relaxed max-w-[250px] mx-auto">{member.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Expert Panel - Scaling up images */}
                    <div className="border-t border-glacier-navy/5 pt-16">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Expert <span className="text-glacier-teal italic">Panel</span></h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12">
                            {expertPanel.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.03, duration: 0.4 }}
                                    className="group text-center max-w-[200px] mx-auto w-full"
                                >
                                    <div className="w-[70%] md:w-[75%] mx-auto aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 shadow-[0_15px_30px_-10px_rgba(0,128,128,0.1)] relative">
                                        <img
                                            src={exp.img}
                                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                            alt={exp.name}
                                        />
                                    </div>
                                    <h4 className="text-[13px] font-nohemi text-glacier-navy mb-1 group-hover:text-glacier-teal transition-colors leading-tight">{exp.name}</h4>
                                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-glacier-navy/50 mb-1">{exp.niche}</p>
                                    <p className="text-[8px] text-glacier-teal font-medium leading-tight uppercase tracking-wide">{exp.institution}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
