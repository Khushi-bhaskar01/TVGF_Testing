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
        { name: "Anurag Maloo", title: "Founder & CEO", desc: "Mountaineer & innovator", img: placeholderImg },
        { name: "Sruthi Karthikeyan", title: "Operations & Strategy", desc: "Ex-Microsoft (9 years)", img: placeholderImg },
        { name: "Shriya Harshe", title: "Climate Adaptation", desc: "Environmental planner", img: placeholderImg },
        { name: "Deepthi Rao", title: "Fellowship Manager", desc: "Community engagement", img: placeholderImg },
        { name: "Soham Punde", title: "Filmmaker", desc: "Cinematic narrative", img: placeholderImg },
        { name: "Harshit Rautela", title: "Storyteller & Content", desc: "Impactful media", img: placeholderImg },
        { name: "Divya Nawale", title: "Policy Specialist", desc: "ex-ADB, ex-UNFCCC", img: placeholderImg }
    ];

    const advisors = [
        { name: "Romola Butalia", title: "Writer & Conservationist", img: placeholderImg },
    ];

    const expertPanel = [
        { name: "Dr. Arun Shrestha", institution: "ex-ICIMOD, Nepal", niche: "Sr. Glaciologist", img: placeholderImg },
        { name: "Dr. Ashim Sattar", institution: "IIT Bhubaneswar", niche: "GLOF Expert", img: placeholderImg },
        { name: "Dr. Farooq Azam", institution: "ICIMOD / IIT Indore", niche: "Cryosphere Specialist", img: placeholderImg },
        { name: "Dr. Anjan Ray", institution: "IIT Delhi & CBRI", niche: "Sr. Scientist", img: placeholderImg },
        { name: "Ronak Sutaria", institution: "Respirer Living Sciences", niche: "Founder & CEO", img: placeholderImg },
        { name: "Dr. Suman Sahai", institution: "Gene Campaign", niche: "Founder Chairperson", img: placeholderImg },
        { name: "Anoop Nautiyal", institution: "SDC Foundation", niche: "Founder", img: placeholderImg },
        { name: "Dr. Vishal Singh", institution: "CEDAR", niche: "Executive Director", img: placeholderImg },
        { name: "Safi Ahsan Rizvi", institution: "Former IPS", niche: "Disaster Risk Analyst", img: placeholderImg },
        { name: "Dr. Rasik Ravindra", institution: "Chairman SaGAA", niche: "Former Director", img: placeholderImg },
        { name: "Dr. Bryan Mark", institution: "Ohio State University", niche: "Byrd Polar Research", img: placeholderImg },
        { name: "Laxman Srikanth", institution: "Deltares, Netherlands", niche: "Advisor, DRM", img: placeholderImg }
    ];

    // UNIVERSAL CARD COMPONENT
    // This exact structure is used across all sections to enforce perfect equal sizing.
    const CardLayout = ({ children, index }) => (
        <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className="flex flex-col group text-center w-[140px] sm:w-[160px] md:w-[170px]"
        >
            {children}
        </motion.div>
    );

    const ImageBox = ({ src, alt }) => (
        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-3 shadow-md relative bg-glacier-navy/5">
            <img 
                src={src} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                alt={alt} 
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFA] font-cabin text-glacier-navy selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ COMPACT HERO SECTION */}
            <section className="relative h-[35vh] flex items-center justify-center pt-20 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/4.jpg" 
                        alt="Team & Advisors Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.5] scale-105"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-nohemi text-white tracking-tighter">
                            Our <span className="text-glacier-teal italic">Team</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* TEAM SECTIONS - HIGHLY COMPACT LAYOUT */}
            <section className="py-12 px-6 md:px-12 bg-[#F8FAFA] relative">
                <div className="max-w-7xl mx-auto">
                    
                    {/* CORE TEAM */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-4xl font-nohemi tracking-tight">Core <span className="text-glacier-teal italic">Team</span></h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {coreTeam.map((member, i) => (
                                <CardLayout key={i} index={i}>
                                    <ImageBox src={member.img} alt={member.name} />
                                    <h3 className="text-[13px] md:text-[15px] font-nohemi font-bold mb-1 leading-tight group-hover:text-glacier-teal transition-colors">{member.name}</h3>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-glacier-navy/60 mb-1">{member.title}</p>
                                    <p className="text-[10px] text-glacier-navy/50 font-light leading-snug">{member.desc}</p>
                                </CardLayout>
                            ))}
                        </div>
                    </div>

                    {/* ADVISORS */}
                    <div className="mb-12 border-t border-glacier-navy/10 pt-10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-4xl font-nohemi tracking-tight">Our <span className="text-glacier-teal italic">Advisors</span></h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                             {advisors.map((member, i) => (
                                <CardLayout key={i} index={i}>
                                    <ImageBox src={member.img} alt={member.name} />
                                    <h3 className="text-[13px] md:text-[15px] font-nohemi font-bold mb-1 leading-tight group-hover:text-glacier-teal transition-colors">{member.name}</h3>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-glacier-navy/60 leading-snug">{member.title}</p>
                                </CardLayout>
                            ))}
                        </div>
                    </div>

                    {/* EXPERT PANEL */}
                    <div className="border-t border-glacier-navy/10 pt-10 mb-10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-4xl font-nohemi tracking-tight">Expert <span className="text-glacier-teal italic">Panel</span></h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {expertPanel.map((exp, i) => (
                                <CardLayout key={i} index={i}>
                                    <ImageBox src={exp.img} alt={exp.name} />
                                    <h3 className="text-[13px] md:text-[15px] font-nohemi font-bold mb-1 leading-tight group-hover:text-glacier-teal transition-colors">{exp.name}</h3>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-glacier-navy/50 mb-1">{exp.niche}</p>
                                    <p className="text-[9px] text-glacier-teal font-medium leading-tight uppercase">{exp.institution}</p>
                                </CardLayout>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
