"use client";

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const galleryData = [
  {
    id: 1,
    src: "/home/himalyanGlacier.jpg",
    title: "Himalayan Panorama",
    location: "Hindu Kush Himalaya",
    category: "Ladakh",
    featured: true
  },
  {
    id: 2,
    src: "/1.jpg", 
    title: "Glacier System Detail",
    location: "Uttarakhand",
    category: "Uttarakhand"
  },
  {
    id: 3,
    src: "/2.jpg",
    title: "Mountain Terrain",
    location: "HKH Region",
    category: "Ladakh"
  },
  {
    id: 4,
    src: "/3.jpg",
    title: "High Altitude Base",
    location: "Expedition Camp",
    category: "Nepal"
  },
  {
    id: 5,
    src: "/4.jpg",
    title: "Ice Formations",
    location: "Crevasse Assessment",
    category: "Nepal"
  },
  {
    id: 6,
    src: "/bg_media.JPG",
    title: "Summit-Valley Trail",
    location: "Himalayas",
    category: "Uttarakhand"
  }
];

export default function VisualMediaPage() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Ladakh', 'Uttarakhand', 'Nepal'];

  // Hero Grid Images
  const gridImages = Array.from({ length: 30 }).map((_, i) => ({
    ...galleryData[i % galleryData.length],
    uniqueId: `grid-img-${i}`
  }));

  // Gallery Section Images with dynamic spans for a beautiful dense grid
  const currentCategoryImages = activeTab === 'All' ? galleryData : galleryData.filter(img => img.category === activeTab);
  const displayGallery = Array.from({ length: activeTab === 'All' ? 18 : Math.max(6, currentCategoryImages.length * 2) }).map((_, i) => {
    const item = currentCategoryImages[i % currentCategoryImages.length];
    return {
      ...item,
      uniqueId: `gal-${activeTab}-${i}`,
      span: (i % 7 === 0) ? 'md:col-span-2 md:row-span-2' : ((i % 5 === 0) ? 'md:col-span-2' : 'col-span-1')
    };
  });

  const containerRef = useRef(null);
  const stackImagesRef = useRef([]);

  useEffect(() => {
    // Animate hero background grid items on load
    gsap.fromTo('.grid-item', 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        stagger: {
          amount: 1.5,
          from: "random"
        }, 
        ease: 'power2.out' 
      }
    );

    // Initial setup for the Gallery GSAP stack
    stackImagesRef.current.forEach((img, i) => {
      if (!img) return;
      gsap.set(img, {
        rotation: (i % 2 === 0 ? 1 : -1) * (i * 4 + Math.random() * 6),
        x: 0,
        y: 0,
        zIndex: 10 - i,
      });
    });
  }, []);

  const handleMouseEnterStack = () => {
    stackImagesRef.current.forEach((img, i) => {
      if (!img) return;
      if (i === 0) {
        gsap.to(img, { rotation: 0, scale: 1.05, duration: 0.6, ease: 'back.out(1.5)', y: -10 });
        return;
      }
      const angle = (i * (360 / (stackImagesRef.current.length - 1))) * (Math.PI / 180);
      const isMobile = window.innerWidth < 768;
      const radius = isMobile ? 80 + (i * 5) : 130 + (i * 8);

      gsap.to(img, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        rotation: (Math.random() - 0.5) * 40,
        scale: isMobile ? 0.9 : 1,
        duration: 0.8,
        ease: 'back.out(1.5)',
      });
    });
  };

  const handleMouseLeaveStack = () => {
    stackImagesRef.current.forEach((img, i) => {
      if (!img) return;
      gsap.to(img, {
        x: 0,
        y: 0,
        rotation: (i % 2 === 0 ? 1 : -1) * (i * 4 + Math.random() * 6),
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      });
    });
  };

  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-navy selection:text-white min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Grid Background */}
      <section className="relative h-[50vh] min-h-[350px] flex flex-col justify-center px-6 md:px-12 w-full border-b border-glacier-navy/10 overflow-hidden text-center">
        
        {/* Background Grid */}
        <div className="absolute inset-0 flex flex-wrap overflow-hidden bg-glacier-navy/5">
          {gridImages.map((img) => (
            <div 
              key={img.uniqueId} 
              className="grid-item relative w-1/3 h-[16.666%] md:w-1/5 md:h-[20%] lg:w-[16.666%] lg:h-[25%] group border-[0.5px] border-glacier-navy/10 overflow-hidden opacity-0 z-0 hover:z-20 transition-all duration-300"
            >
              <img 
                src={img.src} 
                alt=""
                className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:opacity-100"
              />
              {/* Overlay that dims the image until hovered */}
              <div className="absolute inset-0 bg-glacier-offwhite/10 transition-opacity duration-1000 ease-in-out group-hover:opacity-0 pointer-events-none"></div>
            </div>
          ))}

          {/* Global gradient overlays (z-10 so they overlay z-0 grid items, but z-20 hovered items pop above) */}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-glacier-offwhite/40 via-glacier-offwhite/80 to-glacier-offwhite pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-5xl w-full mx-auto animate-in fade-in zoom-in-95 duration-1000 mt-8 pointer-events-none flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-nohemi font-bold text-glacier-navy leading-[0.85] tracking-tight drop-shadow-sm">
            Photography <br className="hidden md:block" />& Film.
          </h1>
        </div>
      </section>

      {/* Featured Film (TEDx) */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <span className="text-xs font-bold text-glacier-teal uppercase tracking-widest block mb-4">Featured Talk</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-nohemi font-bold text-glacier-navy leading-[1.1] mb-6">
              TEDxGateway: <br/> The Miraculous Rescue
            </h2>
            <p className="text-lg text-glacier-warmGrey font-cabin leading-relaxed mb-8">
              In this TEDxGateway talk, TVGF Founder Anurag Maloo shares his 72-hour survival story inside a crevasse on Mt. Annapurna and how it birthed the mission to protect the world&apos;s glaciers.
            </p>
            <Link href="https://www.youtube.com/watch?v=FJ0R7HJmDrs" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-glacier-navy text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-glacier-teal transition-all duration-300 shadow-xl hover:shadow-glacier-teal/30">
              Watch Full Talk <span className="text-lg">→</span>
            </Link>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="w-full aspect-video bg-glacier-navy rounded-2xl overflow-hidden shadow-2xl border border-glacier-navy/10 relative transform hover:scale-[1.02] transition-transform duration-500 group">
              <iframe 
                src="https://www.youtube.com/embed/XerQnwgD4Xc" 
                title="TEDxGateway Talk - Anurag Maloo"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage & Documentaries */}
      <section className="py-20 px-6 md:px-12 bg-glacier-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy mb-4">Global Coverage <br className="md:hidden"/>& Documentaries</h2>
              <p className="text-lg font-cabin text-glacier-warmGrey">Extensive media coverage and in-depth interviews detailing the expedition and our mission.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Everest Mystery */}
            <div className="flex flex-col gap-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-glacier-navy/5 hover:border-glacier-navy/20">
              <div className="w-full aspect-video bg-glacier-navy rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.youtube.com/embed/wFeXfE4xLo0" 
                  title="At Death's Door: The MIRACULOUS Rescue"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.05] transition-transform duration-500 pointer-events-auto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-1 flex-grow">
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-2">Everest Mystery Doc</span>
                <h3 className="text-base font-nohemi font-bold text-glacier-navy leading-tight">At Death&apos;s Door: The Miraculous Rescue</h3>
              </div>
            </div>

            {/* Humans of Bombay */}
            <div className="flex flex-col gap-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-glacier-navy/5 hover:border-glacier-navy/20">
              <div className="w-full aspect-video bg-glacier-navy rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.youtube.com/embed/i5BaGQb-dck" 
                  title="Humans of Bombay Interview"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.05] transition-transform duration-500 pointer-events-auto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-1 flex-grow">
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-2">Humans of Bombay</span>
                <h3 className="text-base font-nohemi font-bold text-glacier-navy leading-tight">Stranded in a Glacier for 3 Days</h3>
              </div>
            </div>

            {/* CNN-News18 */}
            <div className="flex flex-col gap-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-glacier-navy/5 hover:border-glacier-navy/20">
              <div className="w-full aspect-video bg-glacier-navy rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.youtube.com/embed/p6vfa_QC02s" 
                  title="CNN-News18 Interview"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.05] transition-transform duration-500 pointer-events-auto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-1 flex-grow">
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-2">CNN-News18 Exclusive</span>
                <h3 className="text-base font-nohemi font-bold text-glacier-navy leading-tight">The Remarkable Recovery of a Mountaineer</h3>
              </div>
            </div>

            {/* On The Mic With Parth */}
            <div className="flex flex-col gap-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-glacier-navy/5 hover:border-glacier-navy/20">
              <div className="w-full aspect-video bg-glacier-navy rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.youtube.com/embed/LjygxYJ2nbc" 
                  title="On The Mic With Parth"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.05] transition-transform duration-500 pointer-events-auto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-1 flex-grow">
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-2">Mountaineering Podcast</span>
                <h3 className="text-base font-nohemi font-bold text-glacier-navy leading-tight">Survival on Annapurna 1</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Expedition Gallery */}
      <section className="py-24 px-6 md:px-12 flex-grow bg-white border-t border-glacier-navy/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-nohemi font-bold text-glacier-navy mb-6">The <br/>Expedition <br/>Gallery.</h2>
              <p className="text-lg font-cabin text-glacier-warmGrey mb-8 max-w-lg">A comprehensive visual archive documenting our journey, the changing cryosphere, and the magnificent landscapes of the Himalayas.</p>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3 bg-glacier-offwhite p-1.5 rounded-full border border-glacier-navy/5 w-fit">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full ${
                      activeTab === category 
                        ? 'bg-glacier-navy text-white shadow-md' 
                        : 'bg-transparent text-glacier-warmGrey hover:text-glacier-navy hover:bg-white/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* GSAP Hover Stack Collage */}
            <div 
              className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full flex items-center justify-center cursor-pointer group"
              onMouseEnter={handleMouseEnterStack}
              onMouseLeave={handleMouseLeaveStack}
              ref={containerRef}
            >
              {galleryData.slice(0, 6).map((item, i) => (
                <div
                  key={item.id}
                  ref={el => stackImagesRef.current[i] = el}
                  className="absolute w-[200px] md:w-[280px] aspect-[4/3] bg-white p-2 md:p-3 shadow-xl border border-glacier-navy/10 rounded-sm shadow-glacier-navy/10 will-change-transform"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="w-full h-full relative overflow-hidden bg-glacier-navy/5">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Masonry Dense Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-4 md:gap-6 lg:gap-8 mb-12 grid-flow-dense">
            {displayGallery.map((img) => (
              <div 
                key={img.uniqueId} 
                className={`group relative bg-glacier-navy/5 overflow-hidden rounded-2xl border border-glacier-navy/5 hover:border-glacier-navy/20 hover:shadow-2xl transition-all duration-500 ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6 pointer-events-none">
                  <p className="font-nohemi text-lg md:text-xl text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</p>
                  <p className="font-cabin text-xs md:text-sm text-white/80 flex items-center gap-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <svg className="w-3 h-3 text-glacier-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {img.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Usage Policy */}
      <section className="py-20 px-6 md:px-12 bg-glacier-offwhite">
        <div className="max-w-4xl mx-auto bg-white border border-glacier-navy/10 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 rounded-2xl shadow-sm">
          <div className="w-12 h-12 flex-shrink-0 bg-glacier-offwhite border border-glacier-navy/10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-glacier-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold font-nohemi text-glacier-navy mb-2">Photography Usage Policy</h3>
            <p className="font-cabin text-sm text-glacier-warmGrey leading-relaxed">
              All images and video content in this gallery are the property of The Voice of Glaciers Foundation. Media outlets and journalists may use these images for editorial coverage provided they are explicitly credited as: <strong>&quot;Photography courtesy of The Voice of Glaciers Foundation&quot;</strong>. For high-resolution files or commercial inquiries, please contact our press desk.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}