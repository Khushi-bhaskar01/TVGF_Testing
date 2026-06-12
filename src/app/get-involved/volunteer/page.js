"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: "Research & Policy",
    desc: "Analyze climate data, monitor glacier changes, and help draft impactful policy briefs.",
    img: "/1.jpg"
  },
  {
    title: "Media & Communications",
    desc: "Amplify our mission globally through strategic campaigns and digital storytelling.",
    img: "/2.jpg"
  },
  {
    title: "Design & Visual",
    desc: "Shape our brand identity by crafting compelling graphics and intuitive interfaces.",
    img: "/3.jpg"
  },
  {
    title: "Filmmaking & Storytelling",
    desc: "Document the frontline of climate change and capture the human stories behind the ice.",
    img: "/4.jpg"
  },
  {
    title: "Grassroots Mobilisation",
    desc: "Build community networks and empower local action for glacier resilience.",
    img: "/bg_media.JPG"
  },
  {
    title: "Technology",
    desc: "Develop robust data pipelines, interactive mapping, and platforms that power our movement.",
    img: "/home/himalyanGlacier.jpg"
  }
];

export default function VolunteerPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo(".hero-el", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      );

      // Section Fade-ins
      gsap.utils.toArray(".fade-up-section").forEach(section => {
        gsap.fromTo(section,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            }
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy">
      <Navbar />

      <main className="pt-12">
        {/* HERO SECTION */}
        <section className="relative w-full pt-20 pb-16 px-6 md:px-12 overflow-hidden bg-glacier-navy border-b border-glacier-navy/10">
          {/* 🌊 Glacier Video Ambient Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-30 scale-105 saturate-[0.8] mix-blend-screen"
            >
              <source src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/AnuragMaloo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glacier-navy/50 to-[#F8FAFA] mix-blend-multiply" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Micro Interaction Badge */}
              <div className="hero-el inline-flex items-center justify-center gap-2 px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-lg mb-6 mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-glacier-teal animate-pulse" />
                <span className="font-nohemi font-bold text-[9px] uppercase tracking-[0.2em] text-white">
                  TVGF Global Engagement 2026
                </span>
              </div>
              
              <h1 className="hero-el font-nohemi text-5xl md:text-7xl font-bold leading-[0.95] mb-6 tracking-tight drop-shadow-2xl">
                Volunteer <br /><span className="text-glacier-teal italic">& Internships.</span>
              </h1>
              <p className="hero-el font-cabin text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Direct engagement with an early-stage impactful organisation. Expect mentorship from the core team, real deliverables, and a chance to shape the future of glacier conservation.
              </p>
            </div>
          </div>
        </section>

        {/* THE EXPERIENCE (NEW SECTION) */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 fade-up-section">
          <div className="text-center mb-12">
            <h2 className="font-nohemi text-3xl font-bold text-glacier-navy tracking-tighter">What to Expect</h2>
            <p className="font-cabin text-glacier-warmGrey mt-2 max-w-xl mx-auto">An internship at TVGF isn&apos;t about fetching coffee. It&apos;s about pushing boundaries.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-12 h-12 bg-glacier-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-glacier-teal transition-colors duration-500">
                <svg className="w-6 h-6 text-glacier-teal group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="font-nohemi font-bold text-xl text-glacier-navy mb-3">Direct Mentorship</h3>
              <p className="font-cabin text-sm text-glacier-navy/70 leading-relaxed">Work directly with our core leadership team. We invest deeply in your growth and skill development.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-12 h-12 bg-glacier-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-glacier-teal transition-colors duration-500">
                <svg className="w-6 h-6 text-glacier-teal group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-nohemi font-bold text-xl text-glacier-navy mb-3">Tangible Deliverables</h3>
              <p className="font-cabin text-sm text-glacier-navy/70 leading-relaxed">Take ownership of real projects that have a direct and measurable impact on our global conservation efforts.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-12 h-12 bg-glacier-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-glacier-teal transition-colors duration-500">
                <svg className="w-6 h-6 text-glacier-teal group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="font-nohemi font-bold text-xl text-glacier-navy mb-3">Global Network</h3>
              <p className="font-cabin text-sm text-glacier-navy/70 leading-relaxed">Join an expansive network of leading scientists, climbers, and policymakers dedicated to the cryosphere.</p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE IMAGE CARDS (REDESIGNED AREAS) */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 fade-up-section">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <h2 className="font-nohemi text-4xl md:text-5xl font-bold text-glacier-navy tracking-tighter">Available <span className="text-glacier-teal italic">Roles.</span></h2>
            <p className="font-cabin text-sm text-glacier-warmGrey max-w-xs mt-4 md:mt-0">Find the vertical where your skills can make the highest impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <div key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-glacier-navy cursor-pointer">
                <img 
                  src={area.img} 
                  alt={area.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out" 
                />
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-glacier-navy/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-8 h-8 rounded-full bg-glacier-teal/20 backdrop-blur-sm flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <h3 className="font-nohemi text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">{area.title}</h3>
                  <div className="overflow-hidden">
                    <p className="font-cabin text-sm text-white/80 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GLASSMORPHIC CTA REDIRECT */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 fade-up-section">
          <div className="relative p-10 md:p-20 rounded-[2rem] overflow-hidden shadow-2xl text-white group">
            {/* Background Image Layer */}
            <img 
              src="/home/himalyanGlacier.jpg" 
              alt="Glacier Expedition" 
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" 
            />
            {/* Blur & Gradient Overlays */}
            <div className="absolute inset-0 bg-glacier-navy/70 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-glacier-teal/40 to-transparent opacity-50" />
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="inline-block text-white font-nohemi font-bold text-[9px] uppercase tracking-[0.4em] mb-6 bg-white/10 px-5 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
                Get Involved
              </span>
              <h2 className="font-nohemi text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-none drop-shadow-lg">
                Apply to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-glacier-teal italic">Contribute.</span>
              </h2>
              <p className="font-cabin text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
                We review applications on a rolling basis. Join our mission to build extreme climate resilience across the cryosphere. Click below to start your journey with us.
              </p>

              <div className="flex flex-col items-center gap-8">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-white/10 border border-white/40 backdrop-blur-md text-white rounded-full font-nohemi font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-white hover:text-glacier-navy hover:border-white transition-all duration-500 shadow-[0_0_30px_rgba(42,120,124,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:-translate-y-1"
                >
                  Start Application
                </a>

                <div className="pt-10 border-t border-white/20 w-full mt-4">
                  <p className="font-cabin text-[9px] uppercase font-bold tracking-[0.3em] mb-3 text-white/60">Operational Inquiry</p>
                  <p className="font-cabin text-base font-light text-white/90 leading-relaxed">
                    For specific questions regarding internships, write to: <br />
                    <a href="mailto:thevoiceofglaciers@gmail.com" className="text-white font-bold underline decoration-white/40 underline-offset-8 hover:decoration-white transition-all duration-300">thevoiceofglaciers@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
