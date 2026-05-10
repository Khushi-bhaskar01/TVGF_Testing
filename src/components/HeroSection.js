"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const skyRef = useRef(null);
  const mountainRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(skyRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(mountainRef.current, {
        yPercent: 5,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(foregroundRef.current, {
        yPercent: -5,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-glacier-navy"
    >
      {/* Layer 1 */}
      <div
        ref={skyRef}
        className="absolute left-0 top-0 w-full z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/bg-main.jpg')",
          height: "120%",
        }}
      />

      {/* Layer 2 */}
      <div
        ref={mountainRef}
        className="absolute left-0 top-0 w-full z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/mid-mountains.png')",
          height: "120%",
        }}
      />

      {/* Layer 3 */}
      <div
        ref={foregroundRef}
        className="absolute left-0 w-full z-20 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/home/front-green.png')",
          height: "120%",
          bottom: "-20%",
        }}
      />

      {/* Color Grading Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-glacier-teal/10 mix-blend-overlay" />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-glacier-navy/90 to-transparent z-30 pointer-events-none" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white px-6">

        {/* 🧊 Hero Logo - UPDATED TO HERO LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10) blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 relative group"
        >
          {/* Subtle logo glow */}
          <div className="absolute inset-0 bg-glacier-teal/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 scale-150"></div>
          
          <Image
            src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-hero-logo.webp"
            alt="Voice of Glacier Logo"
            width={480}
            height={180}
            className="w-52 md:w-70 lg:w-[420px] h-auto object-contain relative z-10"
            priority
          />
        </motion.div>

        {/* Headline - REFINED FOR IMPACT */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-[3.2rem] font-bold leading-[0.85] max-w-4xl font-nohemi text-white tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          Protecting Glaciers. <br />
          <span className="text-glacier-navy italic">Preparing Communities.</span>
        </motion.h1>

        {/* Subtext - GLASSMORPHISM REFINED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-8"
        >
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
          {/* <p className="relative z-10 text-xs md:text-base lg:text-lg text-white/80 backdrop-blur-md bg-white/5 border border-white/10 px-10 py-4 rounded-2xl max-w-xl font-light font-cabin tracking-[0.15em] shadow-2xl">
            Building extreme climate resilience across the Hindu Kush Himalaya.
          </p> */}
        </motion.div>


        {/* CTA Buttons - PREMIUM UPGRADE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-wrap md:flex-nowrap gap-6 justify-center"
        >
          <Link href="/get-involved/glacier-guardian">
            <Button className="group bg-glacier-teal hover:bg-white text-glacier-navy font-nohemi font-bold uppercase tracking-widest text-xs px-10 py-7 rounded-full transition-all duration-500 shadow-[0_15px_40px_-10px_rgba(0,128,128,0.5)] hover:shadow-white/20 hover:-translate-y-1">
              <span className="flex items-center gap-3">
                Join the Movement
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
          </Link>

          <Link href="/get-involved/partner">
            <Button className="group bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white hover:text-glacier-navy text-white font-nohemi font-bold uppercase tracking-widest text-xs px-10 py-7 rounded-full transition-all duration-500 hover:-translate-y-1">
              <span className="flex items-center gap-3">
                <Handshake className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                Partner With Us
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Ice Shards (Subtle Particles) */}
      <div className="absolute inset-0 z-35 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0], 
              y: -500, 
              rotate: 360,
              x: Math.sin(i) * 100
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3
            }}
            className="absolute bg-white/10 w-1 h-1 rounded-full blur-[1px]"
            style={{ 
              left: `${15 + i * 15}%`,
              top: "100%"
            }}
          />
        ))}
      </div>
    </section>
  );
}