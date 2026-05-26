"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaTint, FaSearch, FaHistory } from "react-icons/fa";

const WhyGlaciersMatter = () => {
  const sections = [
    {
      title: "The Crisis",
      tag: "NARRATIVE",
      icon: <FaTint />,
      description: "The cascading reality of ice loss. The threat is not just water; it is a crisis of survival.",
      href: "/why-glaciers-matter/crisis",
      image: "/story/1.jpg"
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

  const scrollToFirst = () => {
    const firstSection = document.getElementById("content-start");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden text-slate-800">
      <Navbar />
      
      {/* Premium Compact Hero Wall */}
      <section className="relative min-h-[35vh] flex flex-col items-center justify-center bg-white px-6 pt-28 pb-10 overflow-hidden border-b border-glacier-light/40">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="/story/crisis.png" 
            fill
            className="object-cover grayscale"
            alt="Glacier background"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-glacier-offwhite/40 z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy mb-3 leading-[1.1] tracking-tighter">
            Why Glaciers <span className="text-glacier-teal italic font-normal">Matter</span>
          </h1>
          
          <p className="text-sm md:text-base text-glacier-warmGrey max-w-xl mx-auto tracking-wide leading-relaxed">
            Protecting Earth&apos;s freshwater towers is the foundation of economic, social, and regional security for 2 billion people.
          </p>
          
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="mt-6 flex flex-col items-center gap-2 group cursor-pointer"
            onClick={scrollToFirst}
          >
            <span className="font-nohemi text-[9px] uppercase tracking-[0.6em] text-glacier-warmGrey/60 group-hover:text-glacier-teal transition-colors">
              Explore The Journey
            </span>
            <div className="w-7 h-7 rounded-full border border-glacier-light flex items-center justify-center group-hover:border-glacier-teal group-hover:bg-glacier-teal/5 transition-all">
              <FaChevronDown className="text-[10px] text-glacier-warmGrey/60 group-hover:text-glacier-teal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Density Responsive Card Deck Grid */}
      <div id="content-start" className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-glacier-light/50 shadow-sm hover:shadow-md hover:border-glacier-teal/20 transition-all duration-300 flex flex-col h-full overflow-hidden p-5 relative"
            >
              {/* Image Header Area */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-glacier-light/30 shadow-sm mb-4">
                <Image 
                  src={section.image} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103" 
                  alt={section.title} 
                />
                <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all duration-300" />
              </div>

              {/* Card Meta Indicator */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg bg-glacier-teal/10 flex items-center justify-center text-glacier-teal text-xs border border-glacier-teal/15">
                  {section.icon}
                </div>
                <span className="text-glacier-teal font-nohemi text-[9px] font-bold tracking-[0.25em] uppercase">
                  {section.tag}
                </span>
              </div>

              {/* Text Area */}
              <h2 className="text-xl font-nohemi font-bold text-glacier-navy tracking-tight mb-2">
                {section.title}
              </h2>
              
              <p className="text-xs md:text-sm text-glacier-warmGrey font-cabin leading-relaxed flex-grow mb-5">
                {section.description}
              </p>

              {/* Trigger Footer Action */}
              <div className="pt-2 mt-auto border-t border-glacier-light/40">
                <Link 
                  href={section.href} 
                  className="inline-flex items-center gap-2 bg-glacier-navy text-white px-4 py-2 w-full justify-center rounded-full font-nohemi text-[10px] uppercase tracking-widest font-bold hover:bg-glacier-teal transition-all duration-300 group shadow-sm"
                >
                  Explore 
                  <FaArrowRight className="text-[8px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Watermark Backing layout */}
              <div className="absolute right-4 top-3 z-0 pointer-events-none opacity-[0.015] select-none hidden lg:block">
                <span className="text-5xl font-nohemi font-bold text-glacier-navy">
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