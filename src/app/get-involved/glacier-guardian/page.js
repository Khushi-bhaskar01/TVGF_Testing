"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  "Climbers & Mountaineers",
  "Local Community Members",
  "Youth Leaders",
  "Artists & Filmmakers",
  "Scientists & Educators",
  "Journalists"
];

export default function GlacierGuardianPage() {
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
        <section className="pt-24 pb-20 px-6 md:px-20 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-el font-nohemi text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Glacier <br /><span className="text-glacier-teal">Guardian.</span>
            </h1>
            <p className="hero-el font-cabin text-xl md:text-2xl text-glacier-navy/70 leading-relaxed max-w-3xl mx-auto">
              The Glacier Guardians Network is the community backbone of the entire TVGF ecosystem. We are a global movement of individuals dedicated to protecting Earth&apos;s cryosphere.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-nohemi text-4xl font-bold mb-10 leading-tight">Who can <br /><span className="text-glacier-teal">Join?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profiles.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-glacier-teal" />
                    <span className="font-cabin font-bold text-sm text-glacier-navy/80">{p}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 font-cabin text-lg text-glacier-navy/60 leading-relaxed">
                ...anyone who wants to actively contribute to glacier preparedness and be a witness to the changing cryosphere.
              </p>
            </div>
            
            <div className="bg-glacier-teal/[0.03] p-12 md:p-16 rounded-[40px] border border-glacier-teal/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-glacier-teal/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
              
              <h2 className="font-nohemi text-2xl font-bold mb-10 uppercase tracking-widest text-glacier-teal/60">Membership Meaning</h2>
              <ul className="space-y-10 font-cabin relative z-10">
                <li className="flex gap-6">
                  <span className="font-nohemi text-glacier-teal/30 font-bold text-3xl pt-1">01</span>
                  <div>
                    <p className="text-lg font-bold mb-2">Activation Toolkits</p>
                    <p className="text-sm text-glacier-navy/60 leading-relaxed">Ready-to-use resources for local advocacy and education.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="font-nohemi text-glacier-teal/30 font-bold text-3xl pt-1">02</span>
                  <div>
                    <p className="text-lg font-bold mb-2">Education Platforms</p>
                    <p className="text-sm text-glacier-navy/60 leading-relaxed">Exclusive access to climate science workshops and data.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="font-nohemi text-glacier-teal/30 font-bold text-3xl pt-1">03</span>
                  <div>
                    <p className="text-lg font-bold mb-2">Community Tools</p>
                    <p className="text-sm text-glacier-navy/60 leading-relaxed">Direct connection with other guardians globally to co-create impact.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Guardian Network Redirect - REDESIGNED */}
        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-40">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[4rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-glacier-teal/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="font-nohemi text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-none">Join the <span className="text-glacier-teal italic">Network.</span></h2>
              <p className="font-cabin text-xl text-glacier-navy/70 mb-14 leading-relaxed font-light">
                Become a sentinel for the cryosphere. Our global network of Guardians is the frontline of glacier preparedness. Start your journey by filling out the official registration form.
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-16 py-6 bg-glacier-teal text-white rounded-full font-nohemi font-bold tracking-[0.2em] uppercase text-xs hover:bg-glacier-navy transition-all duration-500 shadow-2xl hover:-translate-y-1"
              >
                Join The Movement
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
