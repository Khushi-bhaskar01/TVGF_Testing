"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaPlay, FaGraduationCap, FaCompass, FaAward, FaBuilding, FaGlobeAmericas, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { X } from "lucide-react";
import Image from 'next/image';
import { gsap } from 'gsap';

export default function FounderStory() {
    const [activeTalk, setActiveTalk] = useState(null);
    const marqueeRef = useRef(null);
    const tweenRef = useRef(null);
    
    useEffect(() => {
        document.title = "Founder Story | The Voice of Glacier Foundation";
        
        // GSAP Infinite Scroll Logic
        if (marqueeRef.current) {
            const marqueeContent = marqueeRef.current;
            const marqueeWidth = marqueeContent.scrollWidth / 3; // We triple the content
            
            tweenRef.current = gsap.to(marqueeContent, {
                x: `-=${marqueeWidth}`,
                duration: 20, 
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % marqueeWidth)
                }
            });
        }

        return () => {
            if (tweenRef.current) tweenRef.current.kill();
        };
    }, []);
    
    useEffect(() => {
        if (!activeTalk) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setActiveTalk(null);
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeTalk]);

    const talks = [
        {
            label: "Featured TEDx Talk",
            title: "Against All Odds: A Mountaineer's Tale of Survival, Hope, and Courage",
            url: "https://youtu.be/0d673rf45mo?si=Y4uTAMJgvOMYBzZ7",
            embedId: "0d673rf45mo",
        },
        {
            label: "Founder Conversation",
            title: "Resilience After Annapurna",
            url: "https://www.youtube.com/watch?v=XerQnwgD4Xc",
            embedId: "XerQnwgD4Xc",
        },
        {
            label: "Founder Feature",
            title: "The Mission Beyond Survival",
            url: "https://youtu.be/K6Isd87VrVI",
            embedId: "K6Isd87VrVI",
        },
        {
            label: "Founder Interview",
            title: "Mountains, Meaning, and Recovery",
            url: "https://youtu.be/rOtiMUsdScA?si=ZpTQ-PEzVph32X9T",
            embedId: "rOtiMUsdScA",
        },
        {
            label: "Mountaineering Podcast",
            title: "Survival on Annapurna 1",
            url: "https://youtu.be/LjygxYJ2nbc?si=P_a5WMawDTpWC2Xy",
            embedId: "LjygxYJ2nbc",
        },
        {
            label: "Everest Mystery Documentary",
            title: "At Death's Door: The Miraculous Rescue",
            url: "https://youtu.be/wFeXfE4xLo0?si=i_vVxWZFe8kyu-ao",
            embedId: "wFeXfE4xLo0",
        },
        {
            label: "CNN-News18 Exclusive",
            title: "The Remarkable Recovery of a Mountaineer",
            url: "https://youtu.be/p6vfa_QC02s?si=PP2hIliZUYVS2TWL",
            embedId: "p6vfa_QC02s",
        },
        {
            label: "Humans of Bombay Feature",
            title: "Stranded in a Glacier for 3 Days",
            url: "https://youtu.be/i5BaGQb-dck",
            embedId: "i5BaGQb-dck",
        }
    ];

    const photos = [
        { url: "/viewheights.jpg", caption: "Mt. Annapurna Expedition, 2023" },
        { url: "/ladakh.jpg", caption: "High Altitude Monitoring, Ladakh" },
        { url: "/ukfootprint.jpg", caption: "Science Reconnaissance, Uttarakhand" },
        { url: "/sikkim.jpg", caption: "Community Dialogue, Sikkim" }
    ];

    const handleArrowClick = (direction) => {
        if (!tweenRef.current) return;
        const currentProgress = tweenRef.current.progress();
        const step = 0.1;
        const newProgress = direction === 'right' ? currentProgress + step : currentProgress - step;
        gsap.to(tweenRef.current, { progress: newProgress, duration: 0.5, ease: "power2.out" });
    };

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden">
            <Navbar />

            {/* 🏔️ Cinematic Hero Section */}
            <section className="relative h-[45vh] flex items-start justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about/Founder.JPG"
                        alt="Founder Expedition Background"
                        fill
                        className="object-cover w-full h-full object-[center_35%] scale-100"
                        priority
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-20 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-nohemi text-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
                            Anurag <span className="text-glacier-teal italic">Maloo</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 📖 Story Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-glacier-teal"></div>
                                <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-glacier-teal font-nohemi">A Miraculous Survival</span>
                            </div>
                            
                            <h2 className="text-5xl md:text-6xl font-nohemi text-glacier-navy tracking-tight leading-[1.1]">
                                The <span className="text-glacier-teal italic">Frozen</span> <br /> Threshold
                            </h2>
                            
                            <div className="text-lg md:text-xl text-glacier-navy/70 leading-relaxed font-cabin space-y-6 font-light">
                                <p>
                                    In 2023, while descending from Mt. Annapurna (8,091m), Anurag Maloo suffered a catastrophic fall into a 6,000m deep icy crevasse.
                                </p>
                                <p className="text-glacier-teal font-medium italic">
                                    &quot;Against all medical odds, he miraculously survived after being trapped for 72 excruciating hours in the terrifying darkness of the glacier.&quot;
                                </p>
                                <p>
                                    Without food, water, or oxygen, his survival became a global mandate to protect the very ice that nearly claimed him.
                                </p>
                                <p>
                                    &quot;For me, mountaineering has never just been about the thrill of summiting peaks. It&apos;s been a journey with a deeper mission - to spread awareness about the United Nations&apos; Sustainable Development Goals (SDGs). That&apos;s what led me to launch the &apos;Climbing4SDGs&apos; initiative, where I use mountaineering as a platform to engage with communities, encourage action, and advocate for global change.&quot;
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,128,128,0.3)] border-[12px] border-glacier-offwhite relative z-10">
                                <Image
                                    src="https://lh3.googleusercontent.com/pw/AP1GczPDj4Z7yW-YETl5rAyR6EVWoQ9Fdv2Lifm7qzBo95XYQQah7uq-9TP4O3FNhOeC_QnxMMrjCt7wDH1wZZaVo1dnuyrMl_hPJKUfbUyLxoPeDm1m0ZX1n4efrSYuKsCpxEuUWdvtWULcdQgm8Y4Rsv5ZNw=w1366-h912-s-no-gm?authuser=0"
                                    alt="Anurag Maloo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-glacier-teal/10 rounded-full blur-[100px] -z-0"></div>
                        </motion.div>
                    </div>

                    {/* 🎥 3D Infinite Video Carousel - GSAP Powered */}
                    <div className="py-32 border-t border-glacier-navy/5 relative overflow-visible">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-glacier-teal mb-4 block">Public Voice</span>
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy tracking-tighter">Talks & <span className="text-glacier-teal italic">Features</span></h2>
                        </div>

                        <div className="relative group/carousel px-4">
                            {/* Overlay Controls */}
                            <button 
                                onClick={() => handleArrowClick('left')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-[40] w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-glacier-teal hover:border-glacier-teal transition-all duration-500 shadow-2xl group-hover/carousel:scale-110 active:scale-95"
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <button 
                                onClick={() => handleArrowClick('right')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-[40] w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-glacier-teal hover:border-glacier-teal transition-all duration-500 shadow-2xl group-hover/carousel:scale-110 active:scale-95"
                            >
                                <FaArrowRight className="text-xl" />
                            </button>

                            {/* 3D Perspective Container */}
                            <div className="perspective-container relative overflow-hidden py-12" style={{ perspective: "2000px" }}>
                                <div 
                                    ref={marqueeRef}
                                    className="flex gap-10 cursor-pointer"
                                    onMouseEnter={() => tweenRef.current?.pause()}
                                    onMouseLeave={() => tweenRef.current?.play()}
                                >
                                    {[...talks, ...talks, ...talks].map((talk, i) => (
                                        <motion.div 
                                            key={`${talk.embedId}-${i}`}
                                            whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="min-w-[400px] md:min-w-[480px] h-[340px] flex-shrink-0"
                                        >
                                            <button
                                                onClick={() => setActiveTalk(talk)}
                                                className="w-full h-full text-left bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-glacier-navy/5 flex flex-col relative group/card"
                                            >
                                                <div className="relative h-2/3 w-full overflow-hidden">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${talk.embedId}/hqdefault.jpg`}
                                                        alt={talk.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/card:bg-black/5 transition-all">
                                                        <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center text-glacier-navy shadow-2xl group-hover/card:bg-glacier-teal group-hover/card:text-white transition-all transform group-hover/card:scale-110">
                                                            <FaPlay className="ml-1 text-lg" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-8 h-1/3 flex flex-col justify-center bg-white">
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal mb-2 block">{talk.label}</span>
                                                    <h3 className="text-lg font-nohemi text-glacier-navy leading-tight group-hover/card:text-glacier-teal transition-colors line-clamp-2">
                                                        {talk.title}
                                                    </h3>
                                                </div>
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 👣 Expedition Archives */}
                    <div className="py-32 border-t border-glacier-navy/5">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-7xl font-nohemi text-glacier-navy tracking-tighter">Polar & Himalayan <span className="text-glacier-teal italic">Footprints</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {photos.map((p, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                                >
                                    <Image src={p.url} alt={p.caption} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-white font-nohemi text-lg uppercase tracking-widest font-bold drop-shadow-lg">{p.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 📺 Video Modal */}
            <AnimatePresence>
                {activeTalk && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 backdrop-blur-2xl bg-black/80"
                            onClick={() => setActiveTalk(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative z-10 w-full max-w-5xl rounded-[3rem] overflow-hidden border border-white/10 bg-black/90 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <button
                                type="button"
                                onClick={() => setActiveTalk(null)}
                                className="absolute right-8 top-8 z-20 h-14 w-14 rounded-full border border-white/10 bg-black/45 text-white flex items-center justify-center hover:bg-white hover:text-glacier-navy transition-all duration-300"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="relative overflow-hidden bg-glacier-navy" style={{ paddingTop: "56.25%" }}>
                                <iframe
                                    className="absolute left-0 top-0 h-full w-full border-0"
                                    src={`https://www.youtube.com/embed/${activeTalk.embedId}?rel=0&modestbranding=1&autoplay=1`}
                                    title={activeTalk.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}