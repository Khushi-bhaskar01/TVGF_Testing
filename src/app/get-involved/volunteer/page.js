"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  "Research & Policy",
  "Media & Communications",
  "Design & Visual",
  "Filmmaking & Storytelling",
  "Grassroots & Community Mobilisation",
  "Technology"
];

export default function VolunteerPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-el", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy">
      <Navbar />

      <main className="pt-20">
        <section className="pt-24 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="hero-el font-nohemi text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Volunteer <br /><span className="text-glacier-teal">& Internships.</span>
            </h1>
            <p className="hero-el font-cabin text-xl md:text-2xl text-glacier-navy/70 leading-relaxed max-w-3xl">
              Direct engagement with an early-stage impactful organisation. Expect mentorship from the core team, real deliverables, and a chance to shape the future of glacier conservation.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32">
          <h2 className="font-nohemi text-3xl font-bold mb-12 uppercase tracking-wider">Available Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 flex items-center gap-6 group hover:border-glacier-teal transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="w-3 h-3 rounded-full bg-glacier-teal group-hover:scale-150 transition-transform duration-500" />
                <span className="font-nohemi text-lg font-bold group-hover:text-glacier-teal transition-colors duration-500">{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Application Redirect - REDESIGNED */}
        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-40">
          <div className="bg-glacier-navy p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,128,128,0.3)]">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glacier-teal/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="inline-block text-glacier-teal font-nohemi font-bold text-[10px] uppercase tracking-[0.4em] mb-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
                Get Involved
              </span>
              <h2 className="font-nohemi text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-none">Apply to <span className="text-glacier-teal italic">Contribute.</span></h2>
              <p className="font-cabin text-xl text-white/60 leading-relaxed mb-16 font-light">
                We review applications on a rolling basis. Join our mission to build extreme climate resilience across the cryosphere. Click below to start your journey with us.
              </p>

              <div className="flex flex-col items-center gap-12">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-16 py-6 bg-glacier-teal text-white rounded-full font-nohemi font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-glacier-navy transition-all duration-500 shadow-2xl hover:-translate-y-1"
                >
                  Start Application
                </a>

                <div className="pt-12 border-t border-white/5 w-full">
                  <p className="font-cabin text-[10px] uppercase font-bold tracking-[0.3em] mb-6 text-white/20">Operational Inquiry</p>
                  <p className="font-cabin text-xl md:text-2xl font-light text-white/60 leading-relaxed">
                    For specific questions regarding internships, write to: <br />
                    <a href="mailto:thevoiceofglaciers@gmail.com" className="text-glacier-teal font-bold underline decoration-2 underline-offset-8 hover:text-white transition-all">thevoiceofglaciers@gmail.com</a>
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
