"use client";

import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import HowWeWorkSection from "@/components/howWeWork";
import { FounderOrigin } from "@/components/FounderOrigin";
import ProgramsSnapshot from "@/components/programsInAction";
import { InstitutionalPartners } from "@/components/InstitutionalPartners";

export default function HomePage() {

  const stats = [
    {
      number: "63,700",
      text: <>glaciers in the HKH region — losing ice <span className="text-lg md:text-xl font-bold text-white tracking-wide drop-shadow-sm">65% faster</span> than a decade ago</>,
      textColor: "text-white",
      lineColor: "bg-white",
    },
    {
      number: "2 Billion+",
      text: "people depend on glacier-fed rivers for water and food",
      textColor: "text-glacier-teal",
      lineColor: "bg-glacier-teal",
    },
    {
      number: "< 0.1%",
      text: <><span className="text-glacier-teal font-semibold selection:bg-glacier-teal selection:text-white">The Orphaned Crisis:</span> of $1.9 trillion in global climate finance reaches glaciers</>,
      textColor: "text-white",
      lineColor: "bg-white",
    },
  ];

  return (
    <div className="bg-glacier-light text-glacier-dark">
      <Navbar />

      {/* Hero Banner */}
      <HeroSection />

      <section className="w-full bg-glacier-navy py-12 px-6 relative overflow-hidden">
        {/* Subtle youthfulness gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-teal/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

          {/* Three Column Stat Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative flex flex-col items-start pt-8 pb-4 cursor-default"
              >
                <div className="absolute top-0 left-0 h-[2px] w-full bg-white/10" />
                
                <div className={`absolute top-0 left-0 h-[2px] w-12 group-hover:w-full transition-all duration-700 ease-in-out ${stat.lineColor} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />

                <h3 className={`font-nohemi text-[54px] leading-none font-bold mb-4 ${stat.textColor}`}>
                  {stat.number}
                </h3>

                <p className="font-cabin text-white/70 group-hover:text-white transition-all duration-500 text-[14px] md:text-[15px] leading-relaxed transform group-hover:translate-x-2 text-left">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-4xl border-t border-white/20 pt-8"
          >
            <p className="font-cabin text-white/90 text-lg md:text-xl italic">
              &quot;The glaciers are not just melting. They are disappearing faster than we are preparing for.&quot;
            </p>
          </motion.div>

        </div>
      </section>



      {/* how we work */}
      <HowWeWorkSection />

      {/* section 5 */}
      <ProgramsSnapshot />


      {/* Movement CTA Strip */}
      <section className="w-full bg-glacier-navy py-16 px-6 text-center relative overflow-hidden border-b border-b-white/10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-glacier-teal/20 to-transparent blur-[80px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-nohemi font-bold text-white mb-6 leading-tight">
            The Glaciers Need a Voice. <span className="text-glacier-teal drop-shadow-md">Be One.</span>
          </h2>

          <p className="font-cabin text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
            Whether you are a researcher, a policymaker, a filmmaker, a community leader, or someone who cares there is a role for you in this work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <Link href="/get-involved/glacier-guardian" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-glacier-teal hover:bg-white hover:text-glacier-navy text-white font-cabin text-base font-medium rounded-md px-8 py-4 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-glacier-teal/40">
                Join the Movement
              </button>
            </Link>

            {/* Secondary CTA */}
            <Link href="/get-involved/partner" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-glacier-navy font-cabin text-base font-medium rounded-md px-8 py-4 transition-all duration-300 hover:scale-[1.02]">
                Partner With Us
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}