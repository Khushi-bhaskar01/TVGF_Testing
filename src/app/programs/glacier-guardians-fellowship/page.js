import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

export default function GlacierGuardiansFellowshipPage() {
    return (
        <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-teal overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-teal/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
                    <div className="md:w-full">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-glacier-teal text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                                Launching 2026
                            </span>
                            <span className="font-cabin text-xs font-bold text-glacier-offwhite/70 uppercase tracking-[0.3em]">
                                Cohort 1
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Glacier Guardians <br className="hidden md:block" /> Fellowship
                        </h1>
                        <p className="text-lg md:text-xl text-glacier-offwhite/80 max-w-3xl leading-relaxed font-cabin mb-10">
                            A 6-month paid fellowship connecting youth to glacier science, climate action, and mountain resilience.
                        </p>

                        {/* Quick Facts Strip */}
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 font-cabin text-sm font-semibold text-glacier-lightTeal border-l-2 border-glacier-teal pl-6">
                            <div className="flex items-center gap-2">
                                <span className="text-white tracking-[0.1em] uppercase text-[10px]">Eligibility:</span> 
                                Ages 22–32
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white tracking-[0.1em] uppercase text-[10px]">Focus:</span> 
                                Environmental Science, Climate Policy, Mountain Development
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Structure (Three Phases) */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center md:text-left">
                        <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Program Structure</span>
                        <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">Three Phases of Action</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Phase 1 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <span className="text-[10px] text-glacier-teal font-bold tracking-[0.2em] uppercase mb-3 block relative z-10">Months 1–2</span>
                            <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Phase 1: Science Immersion</h3>
                            <p className="text-base text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Glacier field research, climate data analysis, and immersive cryosphere studies.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <span className="text-[10px] text-glacier-teal font-bold tracking-[0.2em] uppercase mb-3 block relative z-10">Months 3–4</span>
                            <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Phase 2: Action Projects</h3>
                            <p className="text-base text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Community glacier monitoring, adaptation workshops, and youth-led climate campaigns.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <span className="text-[10px] text-glacier-teal font-bold tracking-[0.2em] uppercase mb-3 block relative z-10">Months 5–6</span>
                            <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Phase 3: Policy Translation</h3>
                            <p className="text-base text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Stakeholder engagement, policy brief development, and presentation at regional climate forums.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 px-6 md:px-12 bg-glacier-offwhite border-t border-glacier-light">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Measurable Impact</span>
                        <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">Program Outcomes</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="border-t-2 border-glacier-teal pt-6">
                            <h4 className="text-xl font-nohemi font-bold text-glacier-navy mb-3">Youth Leaders</h4>
                            <p className="text-sm font-cabin text-glacier-warmGrey leading-relaxed">
                                A trained cohort of youth glacier-climate leaders equipped to act.
                            </p>
                        </div>
                        <div className="border-t-2 border-glacier-teal pt-6">
                            <h4 className="text-xl font-nohemi font-bold text-glacier-navy mb-3">Monitoring & Adaptation</h4>
                            <p className="text-sm font-cabin text-glacier-warmGrey leading-relaxed">
                                Generating new monitoring datasets and locally-informed adaptation plans.
                            </p>
                        </div>
                        <div className="border-t-2 border-glacier-teal pt-6">
                            <h4 className="text-xl font-nohemi font-bold text-glacier-navy mb-3">Policy Influence</h4>
                            <p className="text-sm font-cabin text-glacier-warmGrey leading-relaxed">
                                Actionable policy recommendations for vulnerable mountain regions.
                            </p>
                        </div>
                        <div className="border-t-2 border-glacier-teal pt-6">
                            <h4 className="text-xl font-nohemi font-bold text-glacier-navy mb-3">Global Network</h4>
                            <p className="text-sm font-cabin text-glacier-warmGrey leading-relaxed">
                                Establishment of a continuous, global alumni action network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="bg-glacier-navy w-full py-24 px-6 md:px-12 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glacier-teal/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-white mb-6">
                        Join the First Cohort.
                    </h2>
                    <p className="text-lg text-glacier-offwhite/80 font-cabin mb-10 max-w-xl">
                        We are actively looking for dedicated youth leaders to apply, as well as institutional partners to co-host and co-fund the fellowship.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-glacier-teal text-white px-8 py-4 rounded-sm font-cabin font-bold hover:bg-white hover:text-glacier-navy transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center shadow-lg shadow-glacier-teal/20"
                        >
                            Apply for Cohort 1 →
                        </a>
                        <Link href="/get-involved/partner" className="bg-transparent text-white border border-glacier-lightTeal px-8 py-4 rounded-sm font-cabin font-bold hover:border-white transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center">
                            Partner with the Fellowship →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}