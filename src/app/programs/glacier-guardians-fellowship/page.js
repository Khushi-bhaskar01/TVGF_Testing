"use client";

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GlacierGuardiansFellowshipPage() {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const timelinePhases = [
    {
      period: "Months 1–2",
      title: "Science Immersion",
      desc: "Glacier field research, climate data analysis, and immersive cryosphere studies in high-altitude environments.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    },
    {
      period: "Months 3–4",
      title: "Action Projects",
      desc: "Community glacier monitoring, adaptation workshops, and youth-led climate campaigns across regional hubs.",
      image: "https://images.unsplash.com/photo-1516655855035-d5215bc56041?auto=format&fit=crop&q=80&w=800",
    },
    {
      period: "Months 5–6",
      title: "Policy Translation",
      desc: "Stakeholder engagement, policy brief development, and presentation at regional climate forums.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <main className="min-h-screen bg-[#F2F4F4] selection:bg-[#2A787C] selection:text-white text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-14 px-6 md:px-12 bg-[#042A33] border-b-4 border-[#2A787C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486915307544-b1ae7d33c153?auto=format&fit=crop&q=80&w=2000"
            alt="Majestic Glacier"
            fill
            className="object-cover opacity-25 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042A33] via-[#042A33]/80 to-transparent" />
        </div>

        <motion.div 
          className="max-w-5xl mx-auto relative z-10 w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#8B0333] text-white text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase rounded shadow-md">
              Launching 2026
            </span>
            <span className="font-nohemi text-[10px] font-bold text-[#9CBBF0] uppercase tracking-widest">
              Cohort 1
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-nohemi font-bold text-white leading-tight mb-4 tracking-tight">
            Glacier Guardians <span className="text-[#2A787C]">Fellowship</span>
          </h1>
          
          <p className="text-sm md:text-base text-[#F2F4F4]/90 max-w-xl leading-relaxed font-cabin mb-6">
            A 6-month paid fellowship connecting youth to glacier science, climate action, and mountain resilience.
          </p>

          <div className="flex gap-8 font-cabin text-xs font-semibold text-[#9CBBF0] border-l-4 border-[#2A787C] pl-4 py-1">
            <div className="flex flex-col">
              <span className="text-white tracking-wider uppercase text-[9px] font-bold opacity-60">Eligibility</span> 
              <span className="text-white text-base">Ages 22–32</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white tracking-wider uppercase text-[9px] font-bold opacity-60">Focus Areas</span> 
              <span className="text-white text-base">Science • Policy • Resilience</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Animated Timeline Section */}
      <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10 text-center" {...fadeInUp}>
            <span className="text-[9px] text-[#8B0333] font-bold tracking-[0.3em] uppercase mb-1 block font-nohemi">The Roadmap</span>
            <h2 className="text-2xl md:text-4xl font-nohemi font-bold text-[#042A33] tracking-tight">Three Phases of Action</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D7E2E2] -translate-x-1/2 hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="space-y-10 relative z-10">
              {timelinePhases.map((phase, idx) => (
                <motion.div 
                  key={idx}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Text Card */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="p-5 rounded-2xl bg-[#F2F4F4] border border-[#D7E2E2] hover:border-[#2A787C]/40 transition-all duration-300 shadow-sm relative group">
                      <span className="text-xs text-[#2A787C] font-bold tracking-widest uppercase mb-1 block">{phase.period}</span>
                      <h3 className="text-lg font-nohemi font-bold text-[#042A33] mb-2">{phase.title}</h3>
                      <p className="text-xs text-[#6B7280] font-cabin leading-relaxed">{phase.desc}</p>
                      <div className="absolute top-3 right-3 text-2xl font-bold text-[#042A33]/5 group-hover:text-[#2A787C]/10 transition-colors">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Icon/Circle Separator */}
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#2A787C] text-xs text-white z-20 shadow-lg border-2 border-white shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute" />
                    {idx + 1}
                  </div>

                  {/* Image Component */}
                  <div className="flex-1 w-full">
                    <div className="relative h-48 md:h-56 w-full rounded-2xl overflow-hidden shadow-xl">
                      <Image 
                        src={phase.image}
                        alt={phase.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Outcomes Section */}
      <section className="py-16 px-4 md:px-8 bg-[#F2F4F4]">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10 text-center md:text-left" {...fadeInUp}>
            <span className="text-[9px] text-[#6B7280] font-bold tracking-[0.2em] uppercase mb-1 block font-nohemi">The Result</span>
            <h2 className="text-2xl md:text-4xl font-nohemi font-bold text-[#042A33] tracking-tight">Measurable Impact</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { title: "Youth Leaders", color: "#2A787C", text: "A trained cohort of youth glacier-climate leaders equipped to act in fragile ecosystems." },
              { title: "Monitoring", color: "#8B0333", text: "Generating new monitoring datasets and locally-informed adaptation plans." },
              { title: "Policy Influence", color: "#2A787C", text: "Actionable policy recommendations delivered to vulnerable mountain regional governments." },
              { title: "Global Network", color: "#8B0333", text: "Establishment of a continuous, global alumni action network for peer support." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-5 rounded-xl shadow-sm border-t-4 hover:-translate-y-1 transition-transform duration-300"
                style={{ borderTopColor: item.color }}
                variants={fadeInUp}
              >
                <h4 className="text-base font-nohemi font-bold text-[#042A33] mb-2 leading-tight">{item.title}</h4>
                <p className="text-xs font-cabin text-[#6B7280] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#042A33] w-full py-16 px-6 md:px-12 relative overflow-hidden">
        <motion.div 
          className="absolute -top-24 -left-24 w-72 h-72 bg-[#2A787C]/15 rounded-full blur-[80px]" 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2 className="text-2xl md:text-4xl font-nohemi font-bold text-white mb-4 tracking-tight" {...fadeInUp}>
            Join the <span className="text-[#9CBBF0]">First Cohort</span>.
          </motion.h2>
          <motion.p className="text-xs md:text-sm text-[#F2F4F4]/80 font-cabin mb-8 max-w-xl mx-auto leading-relaxed" {...fadeInUp}>
            We are actively looking for dedicated youth leaders to apply, as well as institutional partners to co-host and co-fund the fellowship.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeInUp}>
            <a 
              href="https://docs.google.com/forms/d/..." 
              target="_blank" 
              className="bg-[#2A787C] text-white px-6 py-3 rounded-full font-cabin text-xs font-bold hover:bg-[#8B0333] transition-all duration-300 w-full sm:w-auto text-center shadow-md"
            >
              Apply for Cohort 1 →
            </a>
            <Link 
              href="/get-involved/partner" 
              className="bg-transparent text-white border border-[#9CBBF0] px-6 py-3 rounded-full font-cabin text-xs font-bold hover:bg-white hover:text-[#042A33] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Partner with Us →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}