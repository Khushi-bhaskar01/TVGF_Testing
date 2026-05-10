"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    index: "01",
    title: "Partner With Us",
    subtitle: "Institutional & Funding Partnerships",
    description:
      "Align your institution, foundation, or corporation with the most urgent conservation mission of our era. All funding conversations happen through this dedicated pathway.",
    href: "/get-involved/partner",
    accent: "#2A787C",
    tags: ["Institutions", "Foundations", "Corporations"],
  },
  {
    index: "02",
    title: "Volunteer & Internships",
    subtitle: "Contribute Your Skills to the Cause",
    description:
      "Direct engagement with an early-stage impactful organisation. Bring your skills in research, media, design, or technology and receive mentorship from the core team.",
    href: "/get-involved/volunteer",
    accent: "#042A33",
    tags: ["Field Research", "Media", "Operations"],
  },
  {
    index: "03",
    title: "Join as Glacier Guardian",
    subtitle: "Become Part of the Community",
    description:
      "The community backbone of the TVGF ecosystem. A global network of climbers, youth leaders, artists, and scientists actively contributing to glacier preparedness.",
    href: "/get-involved/glacier-guardian",
    accent: "#8B0333",
    tags: ["Community", "Movement", "Impact"],
  },
];

export default function GetInvolvedPage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 90%" }
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy">
      <Navbar />
      
      <main className="bg-glacier-offwhite pb-20">
        {/* Simple Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-[0.4em] text-[10px] uppercase mb-6 bg-glacier-navy/5 px-6 py-2 rounded-full border border-glacier-navy/5 shadow-sm">
              The Movement
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-nohemi font-bold text-glacier-navy mb-8 leading-[0.85] tracking-tight">
              Join <br /><span className="text-glacier-teal">Forces.</span>
            </h1>
            <p className="text-xl md:text-2xl text-glacier-warmGrey leading-relaxed font-cabin max-w-3xl">
              Connect your path with ours. Together, we can build the resilience infrastructure required to protect the world&apos;s frozen assets.
            </p>
          </div>
        </section>

        {/* Pathways Grid - REDESIGNED FOR PREMIUM LOOK */}
        <section className="px-6 md:px-20 max-w-7xl mx-auto py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {cards.map((card, i) => (
              <Link 
                key={i} 
                href={card.href}
                className="group relative bg-white rounded-[3rem] p-12 flex flex-col h-full border border-white shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-glacier-teal/20 overflow-hidden"
              >
                {/* Internal Decorative Glow */}
                <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-glacier-teal/5 rounded-full blur-3xl group-hover:bg-glacier-teal/10 transition-all duration-700"></div>
                
                <div className="flex justify-between items-start mb-16 relative z-10">
                   <div className="w-14 h-14 rounded-2xl bg-glacier-offwhite border border-glacier-navy/5 flex items-center justify-center text-glacier-navy text-2xl group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500 shadow-sm">
                      <span className="font-nohemi font-bold">{card.index}</span>
                   </div>
                  <div className="w-12 h-12 rounded-full border border-glacier-navy/5 flex items-center justify-center text-glacier-navy group-hover:bg-glacier-navy group-hover:text-white transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h3 className="font-nohemi text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-glacier-navy group-hover:text-glacier-teal transition-colors">{card.title}</h3>
                  <p className="font-cabin text-glacier-navy/60 text-base mb-10 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                  {card.tags.map((tag, t) => (
                    <span key={t} className="text-[10px] font-nohemi font-bold uppercase tracking-[0.3em] px-4 py-1.5 bg-glacier-offwhite text-glacier-navy/40 rounded-full group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Impact Band - REDESIGNED */}
        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32">
          <div className="w-full bg-[#0a1a2a] rounded-[4rem] py-24 px-12 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,128,128,0.3)]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glacier-teal rotate-45 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rotate-45 blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
               <span className="inline-block text-glacier-teal font-nohemi font-bold text-[10px] uppercase tracking-[0.4em] mb-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
                The Urgency
              </span>
              <h2 className="font-nohemi text-5xl md:text-7xl text-white font-bold mb-10 tracking-tighter leading-none">
                The glaciers <span className="italic font-light">won&apos;t wait.</span>
              </h2>
              <p className="font-cabin text-white/60 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                Connect your path with ours. Together, we can build the resilience infrastructure required to protect the world&apos;s frozen assets.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-5 bg-glacier-teal text-white font-nohemi font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-glacier-navy transition-all duration-500 shadow-2xl">
                  Join as Guardian
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-nohemi font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-glacier-navy transition-all duration-500 backdrop-blur-md">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
