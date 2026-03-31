"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaMountain, FaTint, FaArrowRight, FaCubes } from 'react-icons/fa';

export default function WhyGlaciersPage() {
    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />
            
            {/* 🏔️ Premium Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-glacier-navy pt-20">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                >
                    <source src="/video/meltingGlacier.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-glacier-navy/70 to-transparent" />

                <div className="relative z-10 max-w-5xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-widest text-[10px] uppercase mb-6 bg-glacier-teal/10 px-3 py-1 rounded-full border border-glacier-teal/20">The Scientific Mission</span>
                        <h1 className="text-5xl md:text-8xl font-nohemi text-white mb-8 leading-[0.95] tracking-tight">
                            Why Glaciers <br />
                            <span className="text-glacier-teal italic">Matter</span>
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-glacier-warmGrey/90 font-light max-w-3xl mx-auto">
                            They store freshwater for billions, dictate regional security, and regulate the Earth’s climate. Protecting them is the foundation of our survival.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 1. THE CRYOSPHERE CRISIS */}
            <section id="cryosphere-crisis" className="py-32 px-6 md:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 text-glacier-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-cabin">
                            <FaExclamationTriangle className="text-lg" />
                            <span>Systemic Breakdown</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy mb-8 leading-none tracking-tight">
                            The Cryosphere <span className="text-glacier-teal italic">Crisis</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-glacier-navy/70 leading-relaxed font-light mb-8">
                            The cryosphere is warming at three times the global average. Glaciers are disappearing, causing cascading failures in ecosystems and displacing entire cultures.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="bg-glacier-offwhite p-8 rounded-2xl shadow-sm border border-glacier-navy/5">
                                <h3 className="text-xl font-bold font-nohemi text-glacier-navy mb-2 uppercase tracking-wide">What is the Cryosphere?</h3>
                                <p className="text-glacier-navy/60 font-light">The frozen parts of Earth — glaciers, snow, permafrost. When this system collapses, irreversible climate feedback loops accelerate.</p>
                            </div>
                            <div className="bg-glacier-offwhite p-8 rounded-2xl shadow-sm border border-glacier-navy/5">
                                <h3 className="text-xl font-bold font-nohemi text-glacier-navy mb-3 uppercase tracking-wide">Key Impacts</h3>
                                <ul className="space-y-3 font-light text-glacier-navy/60">
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2"></div> Glaciers melting at 3x world proxy</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2"></div> 50% may disappear by 2100</li>
                                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2"></div> 2 billion people directly affected</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <img src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.webp" alt="Himalayan Glacier" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-glacier-navy/20 mix-blend-multiply"></div>
                    </motion.div>
                </div>
            </section>

            {/* 📣 High-Impact Callout */}
            <section className="py-32 px-6 bg-glacier-crimson relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
                
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                    >
                        <FaCubes className="text-white/20 text-6xl mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-nohemi text-white leading-[1.1] tracking-tight">
                            &quot;When water infrastructure destabilises, <br />
                            <span className="text-white/80 italic font-light">entire systems spiral.</span> <br /> 
                            Glacier risk is systemic risk.&quot;
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHY HKH MATTERS */}
            <section id="Kush-Himalaya" className="py-32 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 text-glacier-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-cabin">
                            <FaMountain className="text-lg" />
                            <span>The Third Pole</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy mb-6 leading-none tracking-tight">
                            Why the <br /> <span className="text-glacier-teal italic">Hindu Kush Himalaya</span> Matters
                        </h2>
                        <p className="text-lg md:text-xl text-glacier-navy/70 leading-relaxed font-light mb-6">
                            The Hindu Kush Himalaya constitutes the world&apos;s &quot;Third Pole&quot; — storing the largest volume of ice outside the Arctic and Antarctic. It forms the headwaters of 10 major river systems traversing across Asia.
                        </p>
                        <p className="text-lg md:text-xl text-glacier-navy/70 leading-relaxed font-light">
                            When Himalayan glaciers retreat, water security across South Asia breaks down — directly threatening agricultural output, metropolitan stability, and biodiversity.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                            <img src="https://th.bing.com/th/id/OIP.vk9Qspk3dLjSL1-Qa1QpkwHaE8?w=255&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Mountain View 1" />
                        </div>
                        <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                            <img src="https://cdn.britannica.com/27/173827-050-DC76A2F3/Portion-Himalayas-Jammu-and-Kashmir-India-state.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Mountain View 2" />
                        </div>
                        <div className="col-span-2 rounded-[2rem] overflow-hidden shadow-xl h-48">
                            <img src="https://th.bing.com/th/id/R.8b9001e2d39021e7c701428ecea306ea?rik=H4ybye5xH2H7iQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2ff%2f6%2f741149-gorgerous-himalayas-wallpaper-1920x1080-desktop.jpg&ehk=1YRI72kYm0hEpk4reweuYnxlnEarE4xc%2bjzto1jGfvg%3d&risl=&pid=ImgRaw&r=0" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Wide Himalaya" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. WHAT HAPPENS WHEN GLACIERS DISAPPEAR */}
            <section id="Disappear" className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                         initial={{ opacity: 0, scale: 0.95 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
                    >
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale opacity-80">
                            <source src="/video/disappear.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy/80 to-transparent"></div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                    >
                         <div className="flex items-center gap-4 text-glacier-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-cabin">
                            <FaTint className="text-lg" />
                            <span>The Domino Effect</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-nohemi text-glacier-navy mb-8 leading-none tracking-tight">
                            What Happens When <br /> Glaciers <span className="text-glacier-crimson italic">Disappear?</span>
                        </h2>
                        
                        <div className="space-y-6 text-xl text-glacier-navy/70 leading-relaxed font-light mb-8">
                            <p>Rivers shrink. Agriculture defaults. Migration intensifies globally. Glacial lake floods indiscriminately wipe out villages and infrastructure.</p>
                            <p className="font-medium text-glacier-navy">This is not a distant, futuristic crisis. It is a reality unfolding immediately.</p>
                        </div>

                        <a href="/ourStrategy" className="inline-flex items-center gap-3 bg-glacier-navy text-white px-8 py-4 rounded-full font-nohemi text-xs uppercase tracking-widest font-bold hover:bg-glacier-teal transition-all shadow-xl group">
                            See Our Strategy <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 🏁 Systemic Risk Strip */}
            <section className="py-40 px-6 md:px-12 bg-glacier-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-glacier-teal via-transparent to-transparent"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-nohemi text-white mb-16 tracking-tight leading-[1.1]">Protecting glaciers is <br /> the <span className="text-glacier-teal">smartest investment</span> <br /> of our time.</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="/collaborate" className="w-full md:w-auto">
                            <button className="w-full md:w-auto px-12 py-5 bg-glacier-teal text-white rounded-full font-nohemi font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-glacier-navy transition-all duration-300 shadow-2xl" aria-label="Join the movement">
                                Join the Movement
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}