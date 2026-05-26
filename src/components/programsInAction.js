"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProgramsSnapshot() {
  const programs = [
    {
      title: "Glacier Dialogues",
      status: "ACTIVE",
      statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      description: "Monthly online policy dialogue series bridging scientists, policymakers, and communities.",
      keyFact: "Running since February 2026",
      link: "/programs/glacier-dialogues",
      image: "/programs/dialogues.png",
    },
    {
      title: "Glacier Guardians Fellowship",
      status: "LAUNCHING 2026",
      statusColor: "bg-[#2A787C]/10 text-[#2A787C] border border-[#2A787C]/20",
      description: "6-month paid fellowship in environmental science, climate policy, and mountain development.",
      keyFact: "Ages 22–32",
      link: "/programs/glacier-guardians-fellowship",
      image: "/programs/fellowship.png",
    },
    {
      title: "GlacierX Festival",
      status: "LAUNCHING 2026",
      statusColor: "bg-[#2A787C]/10 text-[#2A787C] border border-[#2A787C]/20",
      description: "Immersive convergence of science, art, ritual, and policy celebrating cryosphere cultures.",
      keyFact: "Himalayan region, 2026",
      link: "/programs/glacierx-festival",
      image: "/programs/IndiaGlacierWatch.png",
    },
    {
      title: "Time Markers / Glacier Memory",
      status: "LAUNCHING 2026",
      statusColor: "bg-[#2A787C]/10 text-[#2A787C] border border-[#2A787C]/20",
      description: "Permanent installations at historical glacier recession lines making deep ice loss visually visible.",
      keyFact: "Making ice loss visible.",
      link: "/programs/time-markers",
      image: "/programs/time.png",
    }
  ];

  return (
    <section className="w-full bg-[#F2F4F4] py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Structural Atmospheric Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2A787C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-6 bg-[#2A787C]"></div>
            <h2 className="text-[11px] font-nohemi text-[#2A787C] tracking-[0.25em] uppercase font-bold">
              What We&apos;re Building
            </h2>
            <div className="h-[1px] w-6 bg-[#2A787C]"></div>
          </div>
          <h3 className="text-3xl sm:text-5xl font-nohemi font-bold text-[#042A33] tracking-tight">
            Programmes in Motion
          </h3>
        </motion.div>

        {/* 2x2 Clean Structural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={program.link} className="block group h-full">
                <div className="h-full bg-white rounded-2xl border border-[#D7E2E2] hover:border-[#2A787C]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 relative">
                  
                  {/* 1. Image Block Container (Strictly Top) */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <Image 
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle top shade purely to maintain visibility for the status badge */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
                    
                    {/* Positioned Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-2.5 py-1 rounded text-[10px] font-bold font-cabin tracking-wide backdrop-blur-xs shadow-xs ${program.statusColor}`}>
                        {program.status}
                      </span>
                    </div>
                  </div>

                  {/* 2. Text & Content Area (Strictly Bottom) */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-white border-t border-[#F2F4F4]">
                    <div>
                      {/* Section Heading */}
                      <h4 className="text-xl sm:text-2xl font-nohemi font-bold text-[#042A33] tracking-tight group-hover:text-[#2A787C] transition-colors duration-300 mb-3">
                        {program.title}
                      </h4>
                      {/* Section Description */}
                      <p className="font-cabin text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6">
                        {program.description}
                      </p>
                    </div>

                    {/* Bottom Fact Strip */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#F2F4F4] group-hover:border-[#2A787C]/20 transition-colors duration-500">
                      <p className="font-cabin text-[#2A787C] text-xs sm:text-sm font-bold tracking-wide">
                        {program.keyFact}
                      </p>

                      {/* Micro-interactive Action Circle */}
                      <div className="w-8 h-8 rounded-full bg-[#F2F4F4] border border-[#D7E2E2] group-hover:bg-[#2A787C] group-hover:border-[#2A787C] flex items-center justify-center transition-all duration-300 shadow-xs">
                        <svg
                          className="w-3.5 h-3.5 transform text-[#042A33] group-hover:text-white transition-all duration-300 ease-out"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Global Action Link Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 bg-transparent border-2 border-[#2A787C] text-[#2A787C] hover:bg-[#2A787C] hover:text-white font-cabin text-sm font-bold rounded-full px-8 py-3.5 transition-all duration-300 shadow-xs"
          >
            See All Programmes
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}