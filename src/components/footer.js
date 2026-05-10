"use client";

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import Image from 'next/image';

const Footer = () => {

    return (

        <footer className="bg-glacier-navy text-white pt-24 pb-8 px-6 md:px-12 border-t border-white/5 font-cabin relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glacier-teal/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 relative z-10">

                {/* LEFT COLUMN: Logo & Tagline */}
                <div className="md:col-span-3 space-y-6 flex flex-col items-start pr-0 md:pr-10">
                    <Image
                        src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-dark-logo.webp"
                        alt="The Voice of Glaciers"
                        width={180}
                        height={60}
                        className="brightness-0 invert object-contain"
                    />
                    <p className="text-sm text-white/60 leading-relaxed font-light mt-4">
                        Where glaciers speak, communities rise, and the world listens. <br /><br />
                        Protecting Earth&apos;s frozen pulse through science, policy, and community action.
                    </p>
                </div>

                {/* MIDDLE: 4-Column Link Structure */}
                <div className="md:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">About</h4>
                        <ul className="space-y-3 text-sm font-light text-white/50">
                            <li><Link href="/about/story" className="hover:text-glacier-teal transition-colors">Our Story</Link></li>
                            <li><Link href="/about/founder" className="hover:text-glacier-teal transition-colors">Founder Story</Link></li>
                            <li><Link href="/about/team" className="hover:text-glacier-teal transition-colors">Team & Advisors</Link></li>
                            <li><Link href="/about/partners" className="hover:text-glacier-teal transition-colors">Partners & Networks</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Programs</h4>
                        <ul className="space-y-3 text-sm font-light text-white/50">
                            <li><Link href="/programs/glacier-dialogues" className="hover:text-glacier-teal transition-colors">Glacier Dialogues</Link></li>
                            <li><Link href="/programs/glacier-dialogues" className="hover:text-glacier-teal transition-colors">Upcoming Dialogue</Link></li>
                            <li><Link href="/programs/glacier-guardians-fellowship" className="hover:text-glacier-teal transition-colors">Fellowship</Link></li>
                            <li><Link href="/programs/hcsn" className="hover:text-glacier-teal transition-colors">H.C.S.N Network</Link></li>
                            <li><Link href="/programs/glacierx-platform" className="hover:text-glacier-teal transition-colors">India Glacier Watch</Link></li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Get Involved</h4>
                        <ul className="space-y-3 text-sm font-light text-white/50">
                            <li><Link href="/get-involved" className="hover:text-glacier-teal transition-colors">Overview</Link></li>
                            <li><Link href="/get-involved/partner" className="hover:text-glacier-teal transition-colors">Partner With Us</Link></li>
                            <li><Link href="/get-involved/volunteer" className="hover:text-glacier-teal transition-colors">Volunteer / Intern</Link></li>
                            <li><Link href="/get-involved/glacier-guardian" className="hover:text-glacier-teal transition-colors">Glacier Guardians</Link></li>
                        </ul>
                    </div>

                    {/* Media */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Media</h4>
                        <ul className="space-y-3 text-sm font-light text-white/50">
                            <li><Link href="/media" className="hover:text-glacier-teal transition-colors">Media Hub</Link></li>
                            <li><Link href="/media/press" className="hover:text-glacier-teal transition-colors">Press & News</Link></li>
                            <li><Link href="/media/publications" className="hover:text-glacier-teal transition-colors">Publications</Link></li>
                            <li><Link href="/media/sessions" className="hover:text-glacier-teal transition-colors">Recent Sessions</Link></li>
                            <li><Link href="/media/visual" className="hover:text-glacier-teal transition-colors">Visual Media</Link></li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN: Social, Org Info */}
                <div className="md:col-span-3 space-y-8 flex flex-col md:items-end text-left md:text-right">

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Connect</h4>
                        <p className="text-sm font-light text-white/60 mb-2">
                            <a href="mailto:thevoiceofglaciers@gmail.com" className="hover:text-glacier-teal transition-all">thevoiceofglaciers@gmail.com</a>
                        </p>
                        <div className="flex gap-5 md:justify-end">
                            <a href="https://www.linkedin.com/company/the-voice-of-glaciers-foundation/" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><FaLinkedin className="text-2xl" /></a>
                            <a href="https://substack.com/@thevoiceofglaciers" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><SiSubstack className="text-2xl" /></a>
                            <a href="https://www.instagram.com/thevoiceofglaciers/" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><FaInstagram className="text-2xl" /></a>
                            <a href="https://www.youtube.com/@TheVoiceofGlaciers" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><FaYoutube className="text-2xl" /></a>
                        </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/10 md:w-full md:ml-auto">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-nohemi leading-loose">
                            THE VOICE OF GLACIERS FOUNDATION <br />
                            <span className="opacity-40 text-[8px]">Reg: Section 8 Nonprofit | CI: U01100DL2024NPL429811 <br /> Registered Address: C-8/8361, Vasant Kunj, New Delhi, India</span>
                        </p>
                    </div>

                </div>
            </div>

            {/* BOTTOM BAR: Credit Only */}
            <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 pb-2">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em] font-light">
                    <p>© 2026 TVGF</p>
                </div>

                <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em] text-center lg:text-right font-light leading-relaxed">
                    Made with purpose for the glaciers <br className="lg:hidden" />
                    <span className="hidden lg:inline mx-3 opacity-30">|</span>
                    Created by <a href="https://www.linkedin.com/in/adarsh-tiwari-a521401a0/" target="_blank" rel="noopener noreferrer" className="text-glacier-teal font-bold hover:underline transition-all">Adarsh Tiwari</a> and <a href="https://www.linkedin.com/in/khushi-bhaskar-b00586324/" target="_blank" rel="noopener noreferrer" className="text-glacier-teal font-bold hover:underline transition-all">Khushi Bhaskar</a> with love for glaciers
                </div>
            </div>
        </footer>
    );
};

export default Footer;