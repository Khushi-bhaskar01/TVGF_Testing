"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaTint, FaSearch, FaHistory } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyGlaciersMatter = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const sections = [
        {
            title: "The Crisis",
            tag: "NARRATIVE",
            icon: <FaTint />,
            description: "The cascading reality of ice loss. The threat is not just water; it is a crisis of survival.",
            href: "/why-glaciers-matter/crisis",
            image: "/story/crisiss.jpg"
        },
        {
            title: "The Preparedness Gap",
            tag: "ANALYSIS",
            icon: <FaSearch />,
            description: "Identifying the systemic gaps in policy and data preventing effective global adaptation.",
            href: "/why-glaciers-matter/gap",
            image: "/story/gap.png"
        },
        {
            title: "The Decisive Decade",
            tag: "TIMELINE",
            icon: <FaHistory />,
            description: "The critical window for the HKH region and the 2 billion people dependent on its ice.",
            href: "/why-glaciers-matter/decade",
            image: "/story/hkh.jpg"
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal scroll animation
            const pin = gsap.fromTo(
                sectionRef.current,
                { translateX: 0 },
                {
                    translateX: "-200vw",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=6000 top",
                        scrub: 2.5,
                        pin: true,
                        anticipatePin: 1
                    }
                }
            );

            // Hero reveal
            gsap.from(".hero-content > *", {
                opacity: 0,
                y: 40,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out"
            });

            return () => pin.kill();
        });

        return () => ctx.revert();
    }, []);

    const scrollToFirst = () => {
        const trigger = triggerRef.current;
        if (trigger) {
            window.scrollTo({
                top: trigger.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-glacier-navy font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden">
            <Navbar />
            
            {/* Premium Static Hero Wall */}
            <section className="relative h-screen flex flex-col items-center pt-56 bg-glacier-navy px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-90">
                    <img 
                        src="/story/crisis.png" 
                        className="w-full h-full object-cover grayscale brightness-[0.4]"
                        alt="Glacier background"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-glacier-navy via-glacier-navy/90 to-glacier-navy z-0" />
                
                <div className="relative z-10 max-w-5xl mx-auto text-center hero-content">
                    <h1 className="text-3xl md:text-5xl lg:text-[7rem] font-nohemi text-white mb-10 leading-[0.85] tracking-tighter drop-shadow-2xl">
                        Why Glaciers <br /> <span className="text-glacier-teal italic">Matter</span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/50 font-light font-cabin max-w-3xl mx-auto mt-12 tracking-wide leading-relaxed">
                        Protecting Earth&apos;s freshwater towers is the foundation of economic, social, and regional security for 2 billion people.
                    </p>
                    
                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                        className="mt-20 flex flex-col items-center gap-6 group cursor-pointer"
                        onClick={scrollToFirst}
                    >
                        <span className="font-nohemi text-[10px] uppercase tracking-[1em] text-white/20 group-hover:text-glacier-teal transition-colors underline-offset-8">Explore The Journey</span>
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-glacier-teal group-hover:bg-glacier-teal/10 transition-all">
                            <FaChevronDown className="text-xl text-white/30 group-hover:text-glacier-teal" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* GSAP Horizontal Scroll Section */}
            <div ref={triggerRef} className="overflow-hidden bg-glacier-navy">
                <div ref={sectionRef} className="flex h-screen w-[300vw] relative">
                    {sections.map((section, idx) => (
                        <div key={idx} className="h-screen w-screen relative flex items-center justify-center overflow-hidden border-r border-white/5">
                            {/* Background Media */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={section.image} 
                                    alt={section.title} 
                                    className="w-full h-full object-cover brightness-[0.15]" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-20">
                                <div>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-glacier-teal/20 backdrop-blur-3xl flex items-center justify-center text-glacier-teal text-2xl border border-glacier-teal/40">
                                            {section.icon}
                                        </div>
                                        <span className="text-glacier-teal font-nohemi text-sm font-bold tracking-[0.6em] uppercase">{section.tag}</span>
                                    </div>
                                    
                                    <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-nohemi text-white mb-8 leading-[0.85] tracking-tighter drop-shadow-xl">
                                      {section.title}
                                    </h2>
                                    
                                    <p className="text-lg md:text-xl text-white/40 font-light font-cabin mb-12 leading-relaxed max-w-xl">
                                      {section.description}
                                    </p>

                                    <Link href={section.href} className="inline-flex items-center gap-6 bg-white text-glacier-navy px-12 py-5 rounded-full font-nohemi text-xs uppercase tracking-widest font-bold hover:bg-glacier-teal hover:text-white transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                      Explore Chapter 
                                      <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                                    </Link>
                                </div>
                                
                                <div className="hidden lg:block scale-90 md:scale-95">
                                    <div className="relative aspect-[4/5] max-w-xs mx-auto rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
                                        <img src={section.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                                        <div className="absolute inset-0 bg-glacier-navy/40 group-hover:bg-transparent transition-all duration-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Massive Background Tracking Number */}
                            <div className="absolute left-10 md:left-24 bottom-10 md:bottom-24 z-0 pointer-events-none opacity-[0.02]">
                                <span className="text-[12rem] md:text-[15rem] font-nohemi text-white leading-none select-none">
                                    0{idx + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WhyGlaciersMatter;









