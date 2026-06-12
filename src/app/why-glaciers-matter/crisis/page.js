"use client";

import React, { useEffect, useRef, useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaUsers, FaLeaf, FaGlobe, FaCubes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimatedChart = ({ data, color, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      className={`w-full bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100 p-2 flex flex-col ${className || 'h-28 mt-4'}`}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      {isVisible && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <defs>
              <linearGradient id={`colorValue-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelStyle={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}
              itemStyle={{ color: color, fontSize: '14px', fontWeight: 'bold' }}
              cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }}
              labelFormatter={(label) => `Year: ${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={3}
              fillOpacity={1} 
              fill={`url(#colorValue-${color.replace('#', '')})`} 
              isAnimationActive={true}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </motion.div>
  );
};

const CrisisPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.cascade-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const detailedCascade = [
    {
      title: "Accelerated Warming",
      data: "3x faster than global average.",
      desc: "The Cryosphere is warming three times faster than the global average, signaling an urgent climate crisis.",
      chartData: [{ name: '1980', value: 0 }, { name: '1990', value: 0.5 }, { name: '2000', value: 1.2 }, { name: '2010', value: 2.1 }, { name: '2020', value: 3.5 }],
      chartColor: "#ef4444" // red
    },
    {
      title: "Projected Melt",
      data: "50% melt by 2100.",
      desc: "Half of the world's glaciers could disappear by 2100, threatening ecosystems, water supplies, and sea levels.",
      chartData: [{ name: '2000', value: 100 }, { name: '2025', value: 85 }, { name: '2050', value: 70 }, { name: '2075', value: 60 }, { name: '2100', value: 50 }],
      chartColor: "#3b82f6" // blue
    },
    {
      title: "Himalayan Decline",
      data: "40% ice volume lost since 2000.",
      desc: "Himalayan glaciers are rapidly losing volume, fundamentally destabilising regional water systems.",
      chartData: [{ name: '2000', value: 100 }, { name: '2005', value: 92 }, { name: '2010', value: 81 }, { name: '2015', value: 72 }, { name: '2020', value: 60 }],
      chartColor: "#3b82f6" // blue
    },
    {
      title: "Water Insecurity",
      data: "Over 2 billion lives at risk.",
      desc: "More than 2 billion people rely on glacier-fed rivers like the Ganges, Indus, and Yangtze for water and food.",
      chartData: [{ name: '2000', value: 1.2 }, { name: '2010', value: 1.5 }, { name: '2020', value: 1.9 }, { name: '2030', value: 2.1 }, { name: '2040', value: 2.5 }],
      chartColor: "#ef4444" // red
    },
    {
      title: "Glacial Flood Threat",
      data: "Increasing GLOF frequency.",
      desc: "Glacial lake outburst floods (GLOFs) are putting lives, downstream infrastructure, and economies at extreme risk.",
      chartData: [{ name: '1990', value: 5 }, { name: '2000', value: 12 }, { name: '2010', value: 28 }, { name: '2020', value: 45 }, { name: '2030', value: 65 }],
      chartColor: "#ef4444" // red
    },
    {
      title: "Albedo Loss",
      data: "Reduced Earth's reflectivity.",
      desc: "Melting glaciers reduce the planet's reflectivity, causing Earth to absorb more heat and warm even faster.",
      chartData: [{ name: '1980', value: 100 }, { name: '1990', value: 96 }, { name: '2000', value: 88 }, { name: '2010', value: 75 }, { name: '2020', value: 60 }],
      chartColor: "#3b82f6" // blue
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

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-nohemi font-bold text-white leading-tight tracking-tighter">
              The Cascading <br />
              <span className="text-glacier-teal italic font-normal text-2xl md:text-4xl lg:text-5xl">Reality of Ice Loss</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 🏗️ The Cascade Effect Flow - Responsive Bento Grid Layout */}
      <section ref={containerRef} id="cascade-section" className="min-h-screen w-full py-16 px-6 md:px-12 relative bg-glacier-offwhite overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col relative z-10">
          {/* Header */}
          <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal mb-3 block font-nohemi">The Systemic Breakdown</span>
              <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy tracking-tight leading-none">
                The Cascading <span className="text-glacier-teal italic font-normal">Realities</span>
              </h2>
            </div>
            <p className="text-glacier-warmGrey text-sm md:text-base font-cabin max-w-md">
              A deeply interconnected chain reaction. The loss of ice triggers irreversible shifts across the entire global ecosystem.
            </p>
          </div>

          {/* Grid Layout - Flows naturally without squishing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {detailedCascade.map((step, index) => {
              // 3x3 layout: Index 0 takes 2x2, others take 1x1
              let spanClass = index === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2" : "col-span-1 row-span-1";

              return (
                <div
                  key={index}
                  className={`cascade-card flex flex-col bg-white p-4 rounded-[1.5rem] md:rounded-[2rem] border border-glacier-light/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 w-full group overflow-hidden relative ${spanClass}`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-glacier-teal/5 to-transparent rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full min-h-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-glacier-teal font-nohemi text-xs font-bold shadow-sm flex-shrink-0">
                        0{index + 1}
                      </div>
                      <p className={`font-bold text-[8px] md:text-[9px] uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap truncate ml-2 flex-shrink-0 ${step.type === 'decrease' ? 'text-blue-600 bg-blue-50' : 'text-red-600 bg-red-50'}`}>
                        {step.data}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-nohemi text-xl md:text-2xl font-bold text-glacier-navy tracking-tight mb-2 group-hover:text-glacier-teal transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-glacier-warmGrey text-sm font-cabin leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    
                    {/* React Graph Animated on Scroll */}
                    <div className={`w-full ${index === 0 ? 'flex-1 mt-6 min-h-[150px]' : 'h-28 mt-auto'}`}>
                      <ScrollAnimatedChart data={step.chartData} color={step.chartColor} className="h-full w-full p-1" />
                    </div>
                  </div>
                </div>
              );
            })}
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