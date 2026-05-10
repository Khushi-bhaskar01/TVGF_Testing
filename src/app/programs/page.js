import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-glacier-light">

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-glacier-lightTeal/10 to-transparent pointer-events-none -z-10"></div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">

          <div className="lg:w-3/5">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-nohemi font-bold text-glacier-navy leading-[0.85] tracking-tight">
              Programs.
            </h1>
          </div>
          <div className="lg:w-2/5 lg:pl-10 lg:border-l-2 border-glacier-lightTeal/40 pb-2">
            <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin">
              TVGF&apos;s programmes operate across the SPACE Framework —{' '}
              <span className="text-glacier-teal font-semibold">Science, Policy, Action, Culture, and Education.</span>{' '}
              Each is designed to address a specific gap in the preparedness ecosystem.
            </p>
          </div>

        </div>
      </section>

      {/* In Execution Section */}
      <section className="py-24 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">In Execution — 2026</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* Card 1- Glacier Dialogues */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-transparent hover:border-glacier-teal/30 hover:shadow-2xl hover:shadow-glacier-teal/10 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-glacier-teal/5 rounded-full blur-3xl group-hover:bg-glacier-teal/10 group-hover:scale-150 transition-all duration-700 pointer-events-none z-0"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-glacier-navy/5 rounded-full blur-2xl group-hover:bg-glacier-navy/10 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0"></div>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal group-hover:w-2 transition-all duration-300"></div>
              <div className="flex justify-between items-start mb-8">
                <span className="bg-glacier-teal text-white text-xs font-bold px-3 py-1.5 tracking-widest uppercase">Active</span>
              </div>
              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4">Glacier Dialogues</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin">
                Monthly online policy dialogue series bridging silos between scientists, policymakers, and community practitioners.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Geography</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Global Reach</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Launch Date</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">February 2026</span>
                </div>
              </div>

              <Link href="/programs/glacier-dialogues" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-teal/10 hover:bg-glacier-teal hover:text-white rounded-full text-xs text-glacier-teal font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn">
                Learn More <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

            {/* Card 2- Glacier Guardians Fellowship */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-transparent hover:border-glacier-teal/30 hover:shadow-2xl hover:shadow-glacier-teal/10 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-glacier-teal/5 rounded-full blur-3xl group-hover:bg-glacier-teal/10 group-hover:scale-150 transition-all duration-700 pointer-events-none z-0"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-glacier-navy/5 rounded-full blur-2xl group-hover:bg-glacier-navy/10 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0"></div>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal group-hover:w-2 transition-all duration-300"></div>
              <div className="flex justify-between items-start mb-8">
                <span className="bg-glacier-teal text-white text-xs font-bold px-3 py-1.5 tracking-widest uppercase">Launching 2026</span>
              </div>
              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4">Glacier Guardians Fellowship</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin">
                A 6-month paid fellowship connecting youth to glacier science, climate action, and mountain resilience.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Eligibility</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Ages 22-32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Status</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Cohort 1 Enrollment</span>
                </div>
              </div>

              <Link href="/programs/glacier-guardians-fellowship" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-teal/10 hover:bg-glacier-teal hover:text-white rounded-full text-xs text-glacier-teal font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn">
                Learn More <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

            {/* Card 4- Time Markers / Glacier Memory */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-transparent hover:border-glacier-teal/30 hover:shadow-2xl hover:shadow-glacier-teal/10 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-glacier-teal/5 rounded-full blur-3xl group-hover:bg-glacier-teal/10 group-hover:scale-150 transition-all duration-700 pointer-events-none z-0"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-glacier-navy/5 rounded-full blur-2xl group-hover:bg-glacier-navy/10 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0"></div>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal group-hover:w-2 transition-all duration-300"></div>
              <div className="flex justify-between items-start mb-8">
                <span className="bg-glacier-teal text-white text-xs font-bold px-3 py-1.5 tracking-widest uppercase">Launching 2026</span>
              </div>
              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4">Time Markers / Glacier Memory</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin">
                Permanent installations at historical glacier recession lines making decades of ice loss visible to communities.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Location</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Pilot in Uttarakhand</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Scale</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">100k+ Annual Engagement</span>
                </div>
              </div>

              <Link href="/programs/time-markers" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-teal/10 hover:bg-glacier-teal hover:text-white rounded-full text-xs text-glacier-teal font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn">
                Learn More <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

            {/* Card 6- India Glacier Watch (formerly GlacierX Platform) */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-transparent hover:border-glacier-teal/30 hover:shadow-2xl hover:shadow-glacier-teal/10 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-glacier-teal/5 rounded-full blur-3xl group-hover:bg-glacier-teal/10 group-hover:scale-150 transition-all duration-700 pointer-events-none z-0"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-glacier-navy/5 rounded-full blur-2xl group-hover:bg-glacier-navy/10 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0"></div>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-warmGrey group-hover:w-2 transition-all duration-300"></div>
              <div className="flex justify-between items-start mb-8">
                <span className="bg-glacier-warmGrey text-white text-xs font-bold px-3 py-1.5 tracking-widest uppercase">In Development</span>
              </div>
              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4">India Glacier Watch</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin">
                The full ecosystem hosting digital resilience infrastructure, fellowships, and the Glacier Guardians Network.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Status</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Research & Scoping</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Philosophy</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Digital Public Good</span>
                </div>
              </div>

              <Link href="/programs/glacierx-platform" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-teal/10 hover:bg-glacier-teal hover:text-white rounded-full text-xs text-glacier-teal font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn">
                Learn More <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
