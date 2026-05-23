"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, delay: i * 0.08,
            scrollTrigger: { trigger: card, start: "top 92%" }
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy">
      <Navbar />
      
      <main className="bg-glacier-offwhite pb-12">
        {/* 🏔️ Premium Cinematic Hero Section */}
<section className="relative pt-32 pb-20 px-6 md:px-12 xl:px-16 overflow-hidden bg-[#F8FAFA] border-b border-slate-100">
  
  {/* 🌊 Glacier Video Ambient Layer */}
  <div className="absolute pointer-events-none overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover opacity-[0.18] scale-105 saturate-[0.75] contrast-[1.02] filter blur-[0.5px]"
    >
      <source src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/AnuragMaloo.mp4" type="video/mp4" />
    </video>
    {/* Glacier Dynamic Light Grading Overlay */}
  </div>

  {/* Decorative Fine Interface Lines */}

  {/* Foreground Layout Container */}
  <div className="max-w-7xl mx-auto relative z-10 pl-0 lg:pl-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      {/* Left Column: Heading & Framework Tag */}
      <div className="lg:col-span-7 space-y-6">
        {/* Micro Interaction Badge */}
        <div className="hero-animate inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/60 border border-slate-200/80 backdrop-blur-md rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-glacier-teal animate-pulse" />
          <span className="font-nohemi font-bold text-[10px] uppercase tracking-[0.2em] text-glacier-navy/80">
            TVGF Global Engagement 2026
          </span>
        </div>

        {/* Master Typographic Layout */}
        <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-nohemi font-bold text-glacier-navy leading-[0.85] tracking-tighter">
          Join <br />
          <span className="relative inline-block text-glacier-teal">
            Forces
            <span className="absolute bottom-1 left-0 w-full h-[4px] bg-glacier-teal/10 rounded-full" />
          </span>
          <span className="text-glacier-navy/30">.</span>
        </h1>
      </div>

      {/* Right Column: Editorial Intro Text & Border-Fence Divider */}
      <div className="lg:col-span-5 lg:pt-16 lg:pl-8 lg:border-l border-slate-200/60">
        <p className="hero-animate font-cabin text-base md:text-lg lg:text-xl text-glacier-warmGrey/90 leading-relaxed font-light">
          Connect your path with ours. Together, we can build the actionable resilience infrastructure, policy structures, and data systems required to protect the world&apos;s frozen assets.
        </p>
        
        {/* Subtle geometric anchor decoration */}
        <div className="hero-animate hidden lg:flex items-center gap-2 mt-8 text-slate-300">
          <div className="h-[1px] w-12 bg-current" />
          <span className="font-nohemi text-[9px] uppercase tracking-widest font-bold text-slate-400 select-none">
            SPACE Framework Alignment
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* Pathways Grid - Compressed spacing layout */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, i) => (
              <Link 
                key={i} 
                href={card.href}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="group relative bg-white rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-full border border-slate-100 shadow-xl hover:-translate-y-2 hover:shadow-glacier-teal/10 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Internal Decorative Glow */}
                <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-glacier-teal/5 rounded-full blur-3xl pointer-events-none z-0"></div>
                
                <div className="flex justify-between items-start mb-10 relative z-10">
                   <div className="w-12 h-12 rounded-xl bg-glacier-offwhite border border-glacier-navy/5 flex items-center justify-center text-glacier-navy text-xl group-hover:bg-glacier-teal group-hover:text-white transition-all duration-400 shadow-sm">
                      <span className="font-nohemi font-bold">{card.index}</span>
                   </div>
                  <div className="w-10 h-10 rounded-full border border-glacier-navy/5 flex items-center justify-center text-glacier-navy group-hover:bg-glacier-navy group-hover:text-white transition-all duration-400">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h3 className="font-nohemi text-2xl lg:text-3xl font-bold mb-4 tracking-tighter text-glacier-navy group-hover:text-glacier-teal transition-colors">{card.title}</h3>
                  <p className="font-cabin text-glacier-navy/60 text-sm md:text-base mb-6 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-4 border-t border-slate-50">
                  {card.tags.map((tag, t) => (
                    <span key={t} className="text-[9px] font-nohemi font-bold uppercase tracking-[0.25em] px-3 py-1 bg-glacier-offwhite text-glacier-navy/40 rounded-full group-hover:bg-glacier-teal group-hover:text-white transition-all duration-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Impact Band - Compacted and elegant */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto my-12">
          <div className="w-full bg-[#0a1a2a] rounded-[2.5rem] py-16 px-8 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glacier-teal rotate-45 blur-[100px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rotate-45 blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-glacier-teal font-nohemi font-bold text-[9px] uppercase tracking-[0.35em] mb-5 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                The Urgency
              </span>
              <h2 className="font-nohemi text-4xl md:text-5xl text-white font-bold mb-6 tracking-tighter leading-none">
                The glaciers <span className="italic font-light">won&apos;t wait.</span>
              </h2>
              <p className="font-cabin text-white/60 text-sm md:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
                Connect your path with ours. Together, we can build the resilience infrastructure required to protect the world&apos;s frozen assets.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-glacier-teal text-white font-nohemi font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-white hover:text-glacier-navy transition-all duration-400 text-center">
                  Join The Movement
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-nohemi font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-white hover:text-glacier-navy transition-all duration-400 backdrop-blur-md text-center">
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