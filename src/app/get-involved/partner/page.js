"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const partnershipTypes = [
  {
    title: "Knowledge Partner",
    desc: "Research institutions, universities, scientists: share data, co-author reports, support evidence-based storytelling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21V12M12 12L15 9M12 12L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2C7.58172 2 4 5.58172 4 10H20C20 5.58172 16.4183 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Funding & Resource Partner",
    desc: "Foundations, philanthropists, CSR arms: provide grants, in-kind resources, or capital to enable programmes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Community Partner",
    desc: "NGOs, local government, mountain communities: co-design resilience programmes and bridge indigenous knowledge with global platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C23 17.1662 21.761 15.6114 20.0632 15.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 11C21.2091 11 23 9.20914 23 7C23 4.79086 21.2091 3 19 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Policy & Advocacy Partner",
    desc: "Government bodies, think tanks, UN agencies: collaborate on climate diplomacy, policy reform, and roundtables.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7L12 3L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Storytelling & Media Partner",
    desc: "Filmmakers, journalists, artists, media organisations: amplify glacier narratives and shape global public discourse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M15 10V14M15 10H5C3.89543 10 3 10.8954 3 12V18C3 19.1046 3.89543 20 5 20H15V14M15 14H5C3.89543 14 3 13.1046 3 12V6C3 4.89543 3.89543 4 5 4H15V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// Production-ready programmatic image links targeting your visual topics
const featuredBanners = [
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=600&auto=format&fit=crop",
    alt: "Scientific Research field operations on high alpine range ice fields",
    caption: "Scientific Research Alliances"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    alt: "Mountain valley village community members interacting under peaks",
    caption: "Indigenous Community Resilience"
  },
  {
    src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop",
    alt: "High level policy diplomacy roundtables and summit frameworks",
    caption: "Policy Reform & Diplomacy"
  }
];

export default function PartnerPage() {
  const pageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-el", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, delay: i * 0.05,
            scrollTrigger: { trigger: card, start: "top 95%" }
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy flex flex-col">
      <Navbar />

      <main className="pt-28 flex-grow">
        {/* Compact Hero Section */}
        <section className="px-6 md:px-12 max-w-6xl mx-auto mb-10">
          <div className="max-w-3xl">
            <h1 className="hero-el font-nohemi text-4xl md:text-6xl font-bold leading-tight mb-3 tracking-tight">
              Partner <span className="text-glacier-teal">With Us.</span>
            </h1>
            <p className="hero-el font-cabin text-base md:text-lg text-glacier-navy/70 leading-relaxed">
              We believe in &quot;partnership&quot;, not just &quot;donations&quot;. Align your vision with our mission to build a resilient future for Earth&apos;s cryosphere.
            </p>
          </div>
        </section>

        {/* Visual Pillars Showcase Section - Error-Free Native Grid Implementation */}
        <section className="px-6 md:px-12 max-w-6xl mx-auto mb-14 hero-el">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBanners.map((banner, index) => (
              <div 
                key={index} 
                className="overflow-hidden bg-white border border-gray-100 rounded-3xl p-3 shadow-sm group hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img 
                    src={banner.src} 
                    alt={banner.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="pt-3 pb-1 px-2">
                  <span className="font-nohemi font-bold text-xs uppercase tracking-wider text-glacier-navy/80 block group-hover:text-glacier-teal transition-colors">
                    {banner.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dense Partnership Types Grid */}
        <section className="px-6 md:px-12 max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnershipTypes.map((type, i) => (
              <div
                key={i}
                ref={el => { cardsRef.current[i] = el; }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-glacier-teal/20 hover:shadow-lg transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-glacier-teal/5 text-glacier-teal transition-transform group-hover:scale-105">
                    {type.icon}
                  </div>
                  <h3 className="font-nohemi text-lg font-bold mb-2">{type.title}</h3>
                  <p className="font-cabin text-xs leading-relaxed text-glacier-navy/60">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inline Streamlined Inquiry CTA */}
        <section className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl overflow-hidden relative text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-glacier-teal/5 rounded-full blur-[60px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-glacier-teal font-nohemi font-bold text-[9px] uppercase tracking-[0.3em] mb-4 bg-glacier-offwhite px-4 py-1 rounded-full border border-glacier-navy/5">
                Next Steps
              </span>
              <h2 className="font-nohemi text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Start a <span className="text-glacier-teal italic">Conversation.</span>
              </h2>
              <p className="font-cabin text-sm md:text-base text-glacier-navy/70 mb-8 leading-relaxed">
                Fill out our official partnership inquiry form, and a member of our leadership team will reach out directly to discuss collaborative vision alignment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-gray-100 w-full">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-glacier-navy text-white rounded-full font-nohemi font-bold tracking-wider uppercase text-[11px] hover:bg-glacier-teal transition-colors text-center shadow-md"
                >
                  Open Inquiry Form
                </a>
                <p className="font-cabin text-xs text-glacier-navy/60 text-center sm:text-left">
                  Or email directly at:<br />
                  <a href="mailto:thevoiceofglaciers@gmail.com" className="text-glacier-teal font-bold underline underline-offset-4 hover:opacity-80 transition-opacity">thevoiceofglaciers@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}