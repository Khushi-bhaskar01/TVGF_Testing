"use client";

import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaUsers, FaLeaf, FaGlobe, FaCubes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const CrisisPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.cascade-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
        { 
          opacity: 1, 
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

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
        "Loss erases traditional knowledge systems and causes ecological grief"
      ],
      icon: <FaGlobe />
    }
  ];

  return (
    <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white text-slate-800">
      <Navbar />

      {/* 🏔️ Compact Cinematic Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-28 pb-12 bg-glacier-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/story/crisis.png" 
            alt="Crisis Background" 
            fill
            priority
            className="object-cover grayscale brightness-[0.25] scale-102"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/50" />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-[0.4em] text-[10px] uppercase mb-4 bg-white/5 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md">
              Chapter 01: The Cascade
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-nohemi font-bold text-white leading-tight tracking-tighter">
              The Cascading <br />
              <span className="text-glacier-teal italic font-normal text-2xl md:text-4xl lg:text-5xl">Reality of Ice Loss</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 🏗️ The Cascade Effect Flow - Clean & Compact Layout */}
      <section ref={containerRef} id="cascade-section" className="py-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-10 text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-glacier-teal mb-2 block font-nohemi">The Systemic Breakdown</span>
            <h2 className="text-2xl md:text-4xl font-nohemi font-bold text-glacier-navy tracking-tight">
              The Cascading <span className="text-glacier-teal italic font-normal">Realities</span>
            </h2>
          </div>

          <div className="space-y-3 relative">
            {/* Thread Progress Bar Line */}
            <div className="absolute left-[1.75rem] md:left-1/2 top-0 w-[1px] h-full bg-glacier-navy/10 -translate-x-1/2 hidden md:block" />

            {detailedCascade.map((step, index) => (
              <div
                key={index}
                className={`cascade-card relative flex flex-col md:flex-row gap-4 md:gap-8 items-center opacity-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Tracker Marker Badge */}
                <div className="z-10 w-9 h-9 rounded-xl bg-white flex-shrink-0 flex items-center justify-center text-glacier-teal font-nohemi text-sm border border-glacier-light shadow-sm transition-all duration-300">
                  {index + 1}
                </div>

                {/* Content Box */}
                <div className={`flex-1 bg-white p-5 rounded-2xl border border-glacier-light/60 shadow-sm hover:border-glacier-teal/20 transition-all duration-300 w-full ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'} mb-1.5`}>
                    <h3 className="font-nohemi text-lg font-bold text-glacier-navy tracking-tight leading-none mb-1">{step.title}</h3>
                    <p className="text-glacier-crimson font-bold text-[9px] uppercase tracking-wider bg-glacier-crimson/5 px-2.5 py-0.5 rounded-full w-fit">{step.data}</p>
                  </div>
                  <p className="text-glacier-warmGrey text-xs md:text-sm font-cabin leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📣 Premium Modular Text Strip */}
      <section className="py-12 px-6 bg-glacier-navy relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <FaCubes className="text-glacier-teal/10 text-4xl mx-auto mb-4" />
            <h2 className="text-xl md:text-3xl font-nohemi text-white font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
              &quot;Glacier Risk Is Systemic Risk. <br />
              <span className="italic text-glacier-soft">When water infrastructure destabilises, entire systems spiral.&quot;</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 🔳 Impact Quadrants - Optimized Compact Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {impactQuadrants.map((quad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-glacier-light/50 relative overflow-hidden transition-all duration-300 hover:border-glacier-teal/20"
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-glacier-offwhite flex items-center justify-center text-glacier-teal text-lg group-hover:bg-glacier-teal group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {quad.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-nohemi font-bold text-glacier-navy mb-3 leading-none">{quad.title}</h3>
                    <ul className="space-y-2">
                      {quad.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-glacier-warmGrey transition-colors duration-200 group-hover:text-glacier-navy">
                          <div className="w-1 h-1 rounded-full bg-glacier-teal mt-1.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm font-cabin leading-relaxed">{item}</span>
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

      {/* Navigation Strip to Next Section */}
      <div className="bg-white py-6 border-t border-glacier-light/40 px-6">
        <div className="max-w-6xl mx-auto flex justify-end">
          <Link href="/why-glaciers-matter/gap" className="flex items-center gap-2 text-glacier-navy hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase group">
            <span>Next: The Preparedness Gap</span>
            <FaArrowRight className="text-xs transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CrisisPage;