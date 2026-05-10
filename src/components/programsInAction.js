"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramsSnapshot() {
  const programs = [
    {
      title: "Glacier Dialogues",
      status: "ACTIVE",
      statusColor: "bg-green-100 text-green-700",
      description: "Monthly online policy dialogue series bridging scientists, policymakers, and communities.",
      keyFact: "Running since February 2026",
      link: "/programs/glacier-dialogues"
    },
    {
      title: "Glacier Guardians Fellowship",
      status: "LAUNCHING 2026",
      statusColor: "bg-glacier-teal/10 text-glacier-teal",
      description: "6-month paid fellowship in environmental science, climate policy, and mountain development.",
      keyFact: "Ages 22–32",
      link: "/programs/glacier-guardians-fellowship"
    },
    {
      title: "GlacierX Festival",
      status: "LAUNCHING 2026",
      statusColor: "bg-glacier-teal/10 text-glacier-teal",
      description: "Immersive convergence of science, art, ritual, and policy.",
      keyFact: "Himalayan region, 2026",
      link: "/programs/glacierx-festival"
    },
    {
      title: "Time Markers / Glacier Memory",
      status: "LAUNCHING 2026",
      statusColor: "bg-glacier-teal/10 text-glacier-teal",
      description: "Permanent installations at historical glacier recession lines.",
      keyFact: "Making ice loss visible.",
      link: "/programs/time-markers"
    }
  ];

  return (
    <section className="w-full bg-glacier-navy py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-glacier-teal"></div>
            <h2 className="text-sm font-nohemi text-glacier-teal tracking-widest uppercase">
              What We&apos;re Building
            </h2>
            <div className="h-px w-8 bg-glacier-teal"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-nohemi font-bold text-white">
            Programmes in Motion
          </h3>
        </motion.div>

        {/* 2x2 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={program.link} className="block group h-full">
                <div className="h-full bg-glacier-offwhite rounded-xl p-6 md:p-8 flex flex-col shadow-sm border-l-4 border-glacier-teal transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative z-0 overflow-hidden">

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-glacier-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full md:text-xs text-[10px] font-bold font-cabin tracking-wide shadow-sm transition-transform duration-300 group-hover:scale-105 ${program.statusColor}`}>
                      {program.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pr-24 mb-5">
                    <h4 className="md:text-2xl text-xl font-nohemi font-bold text-glacier-navy group-hover:text-glacier-teal transition-colors duration-300">
                      {program.title}
                    </h4>
                  </div>

                  <p className="font-cabin text-glacier-warmGrey text-base leading-relaxed flex-grow mb-8">
                    {program.description}
                  </p>

                  {/* Bottom Fact */}
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-200/60 transition-colors duration-300 group-hover:border-glacier-teal/20">
                    <p className="font-cabin text-glacier-teal text-sm font-medium">
                      {program.keyFact}
                    </p>

                    {/* Action Icon */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border shadow-md bg-glacier-teal border-glacier-teal md:bg-transparent md:border-transparent md:shadow-none md:group-hover:bg-glacier-teal md:group-hover:border-glacier-teal md:group-hover:shadow-md">
                      <svg
                        className="w-4 h-4 transform transition-all duration-300 ease-out text-white translate-x-0 opacity-100 md:text-glacier-teal md:-translate-x-2 md:opacity-0 md:group-hover:text-white md:group-hover:translate-x-0 md:group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 bg-transparent border-2 border-glacier-teal text-glacier-teal hover:bg-glacier-teal hover:text-white font-cabin text-base font-medium rounded-md px-8 py-4 transition-all duration-300"
          >
            See All Programmes
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}