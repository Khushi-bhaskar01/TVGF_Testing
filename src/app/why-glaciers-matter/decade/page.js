"use client";

import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaExclamationCircle, FaChartPie } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DecadePage = () => {
  useEffect(() => {
    // Animate Grid Cards
    gsap.fromTo(".grid-card", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top 85%",
        }
      }
    );

    // Animate Timeline Cards
    const tCards = gsap.utils.toArray('.timeline-item');
    tCards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, x: i % 2 === 0 ? -25 : 25 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  const glofTimeline = [
    { year: "2021", month: "Feb", event: "Chamoli", image: "https://picsum.photos/id/1015/600/400" },
    { year: "2022", month: "May", event: "Shishper GLOF", image: "https://picsum.photos/id/1036/600/400" },
    { year: "2023", month: "Oct", event: "Teesta Basin GLOF / South Lhonak", image: "https://picsum.photos/id/1018/600/400" },
    { year: "2024", month: "Aug", event: "Thame Valley Flood", image: "https://picsum.photos/id/866/600/400" },
    { year: "2026", month: "Current", event: "Four major events: Limi Valley, Rasuwagadhi, Harsil-Dharali, and Shishper II", image: "https://picsum.photos/id/1043/600/400" }
  ];

  const events = [
    { label: "UN International Year of Glaciers' Preservation" },
    { label: "COP30 Brazil" },
    { label: "UN Decade of Action for Cryospheric Sciences (2025–2034)" },
    { label: "The Cryosphere is projected to warm beyond 1.5°C by 2028." },
    { label: "What we do by 2034 determines if glaciers stabilise." },
  ];

  const scrollToFirst = () => {
    const firstSection = document.getElementById("content-start");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white text-slate-800">
      <Navbar />

      {/* 🏔️ Compact Cinematic Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-28 pb-12 bg-glacier-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/story/hkh.jpg"
            alt="Decade Background"
            fill
            priority
            className="object-cover grayscale brightness-[0.3] scale-102"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/50" />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-glacier-lightTeal font-nohemi font-bold tracking-[0.4em] text-[10px] uppercase mb-4 bg-white/5 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md">
              The Critical Window
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-nohemi font-bold text-white leading-tight tracking-tighter">
              The Decisive <br />
              <span className="text-glacier-lightTeal italic font-normal text-2xl md:text-4xl lg:text-5xl">Decade</span>
            </h1>
            <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
              The years 2025–2034 represent the final threshold for cryospheric stability globally.
            </p>

            <div onClick={scrollToFirst} className="mt-6 flex flex-col items-center gap-1.5 text-white/30 cursor-pointer hover:text-glacier-lightTeal transition-colors">
              <span className="font-nohemi text-[9px] uppercase tracking-[0.25em]">Critical Timeline</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <FaCalendarAlt className="text-xs" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🚨 TIPPING POINT ALERT */}
      <section id="content-start" className="py-10 px-6 bg-glacier-navy text-white text-center border-b-[8px] border-glacier-lightTeal">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-glacier-lightTeal/15 border border-glacier-lightTeal/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-glacier-lightTeal animate-pulse" />
            <span className="text-glacier-lightTeal font-nohemi tracking-widest uppercase text-[9px] font-bold">Tipping Point Alert</span>
          </div>
          <h2 className="text-xl md:text-2xl font-nohemi font-normal tracking-tight leading-relaxed max-w-2xl mx-auto">
            &quot;13 October 2025 — first confirmed climate tipping point. <br className="hidden md:block"/>
            <span className="text-glacier-lightTeal italic">Glaciers are next.</span>&quot;
          </h2>
        </div>
      </section>

      {/* 🔳 Analytical Grid: Science, Window, Finance */}
      <section className="py-12 px-4 md:px-8 bg-white grid-container">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* The Science */}
            <div className="grid-card bg-glacier-offwhite p-6 rounded-2xl border border-glacier-light/40 shadow-sm overflow-hidden relative group opacity-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-glacier-navy text-[9px] font-bold uppercase tracking-wider mb-4 font-cabin">
                  <FaExclamationCircle className="text-sm" /> <span>The Science</span>
                </div>
                <h3 className="text-lg md:text-xl font-nohemi font-bold text-glacier-navy mb-3 tracking-tight leading-snug">Globally, the cryosphere is warming 2x faster than the global average.</h3>
              </div>
              <p className="text-xs md:text-sm text-glacier-warmGrey font-light leading-relaxed pt-3 border-t border-glacier-light/60">
                At current rates, 75% of global glaciers could disappear by 2100. Even 1.5°C is not safe globally.
              </p>
            </div>

            {/* The Window - Standout Card */}
            <div className="grid-card bg-glacier-navy p-6 rounded-2xl border border-white/10 shadow-lg text-left overflow-hidden relative group opacity-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-glacier-teal text-[9px] font-bold uppercase tracking-wider mb-4 font-cabin">
                  <FaCalendarAlt className="text-sm" /> <span>The Critical Window</span>
                </div>
                <ul className="space-y-2.5 font-light text-white/80 text-xs md:text-sm">
                  {events.map((ev, i) => (
                    <li key={i} className="flex gap-2.5 group/item items-start">
                      <div className="w-1 h-1 rounded-full bg-glacier-teal mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="group-hover/item:text-white transition-colors">{ev.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Finance Gap */}
            <div className="grid-card bg-glacier-crimson p-6 rounded-2xl border border-white/10 shadow-sm overflow-hidden relative text-white group opacity-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-white/60 text-[9px] font-bold uppercase tracking-wider mb-4 font-cabin">
                  <FaChartPie className="text-sm" /> <span>The Finance Gap</span>
                </div>
                <h3 className="text-xl md:text-2xl font-nohemi font-bold text-white tracking-tight leading-tight mb-2">
                  $1.9 Trillion <br /> <span className="text-xs font-light italic opacity-60">in global climate finance.</span>
                </h3>
              </div>
              <div className="border-t border-white/20 pt-3 mt-4 text-xs font-light space-y-2">
                <p>Less than <strong className="font-bold">0.1%</strong> reaches glaciers. Only <strong className="font-bold">~3%</strong> of all climate finance reaches mountain regions.</p>
                <p className="font-bold opacity-90">15 million people live in direct GLOF hazard zones with minimal financial protection.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌊 Visual Timeline: Escalation of GLOFs */}
      <section className="py-12 px-4 md:px-8 bg-glacier-offwhite overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-glacier-crimson mb-2 block font-nohemi">Historical Escalation</span>
            <h2 className="text-2xl md:text-4xl font-nohemi font-bold text-glacier-navy tracking-tight">
              GLOF Event <span className="text-glacier-crimson italic font-normal">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[16px] md:left-1/2 top-0 w-[1px] h-full bg-glacier-navy/10 -translate-x-1/2" />
            
            <div className="space-y-4 relative z-10">
              {glofTimeline.map((item, idx) => (
                <div 
                  key={idx}
                  className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-4 opacity-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-glacier-crimson border-2 border-white shadow-sm z-20" />
                  
                  <div className={`pl-8 md:pl-0 md:w-1/2 flex ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-[9px] font-bold text-glacier-crimson tracking-wider uppercase font-nohemi">{item.month}</span>
                      <span className="text-xl md:text-2xl font-nohemi font-bold text-glacier-navy">{item.year}</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-4" />
                  
                  <div className="pl-8 md:pl-0 md:w-1/2 w-full">
                    <div className="bg-white p-4 rounded-xl border border-glacier-light/40 shadow-sm group hover:border-glacier-crimson/20 transition-all duration-300">
                      <div className="aspect-[21/9] relative rounded-lg overflow-hidden mb-3">
                        <Image 
                          src={item.image} 
                          alt={item.event} 
                          fill 
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500" 
                        />
                      </div>
                      <h5 className="text-sm md:text-base font-nohemi font-bold text-glacier-navy leading-tight group-hover:text-glacier-crimson transition-colors">{item.event}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 Bottom Callout & Action */}
      <section className="py-14 px-6 bg-glacier-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-glacier-crimson via-transparent to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h3 className="text-xl md:text-3xl font-nohemi text-white mb-6 tracking-tight leading-snug">
            &quot;Investing in glaciers is not charity — <br />
            <span className="text-glacier-teal italic font-normal">it is survival economics.</span>&quot;
          </h3>
          <Link href="/get-involved/glacier-guardian" className="px-8 py-3 bg-glacier-teal text-white rounded-full font-nohemi font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-glacier-navy transition-all duration-300 shadow-sm">
            Join as Glacier Guardian
          </Link>
        </div>
      </section>

      {/* Backwards Stepper History Strip */}
      <div className="bg-white py-4 border-t border-glacier-light/40 px-6">
        <div className="max-w-6xl mx-auto flex">
          <Link href="/why-glaciers-matter/gap" className="flex items-center gap-2 text-glacier-navy/50 hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase group">
            <FaArrowRight className="text-xs rotate-180 transform transition-transform group-hover:-translate-x-0.5" />
            <span>Prev: The Preparedness Gap</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DecadePage;