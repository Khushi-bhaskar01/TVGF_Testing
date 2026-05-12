"use client";

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { podcasts } from "@/data/podcasts";
import { Calendar, PlayCircle, ArrowRight, Mic2 } from "lucide-react";
import ShareButtons from "@/components/shareButtons";

export default function GlacierDialoguesPage() {
  // Sort podcasts by date (newest first)
  const sortedPodcasts = [...podcasts].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Latest one for the "Upcoming/Featured" block
  const featuredSession = sortedPodcasts[0];
  // The rest for the archive/recent sessions
  const otherSessions = sortedPodcasts.slice(1);

  const featuredUrl = `https://thevoiceofglaciers.org/glacierDialgoues/${featuredSession.slug}`;

  return (
    <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-teal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="md:w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-glacier-teal text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                Active
              </span>
              <span className="font-cabin text-xs font-bold text-glacier-offwhite/70 uppercase tracking-[0.3em]">
                Running since February 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Glacier Dialogues
            </h1>
            <p className="text-lg md:text-xl text-glacier-offwhite/80 max-w-3xl leading-relaxed font-cabin">
              Monthly online policy dialogue series. Each session brings together scientists, policymakers, and community practitioners to address specific glacier and cryosphere challenges. Global reach.
            </p>
          </div>
        </div>
      </section>



      {/* Upcoming/Featured Session */}
      <section className="py-24 px-6 md:px-12 bg-glacier-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">Current Session</h2>
          </div>

          <div className="group bg-white border border-glacier-light hover:border-glacier-teal/30 shadow-glacier-card relative flex flex-col md:flex-row overflow-hidden transition-all duration-500">
            {/* Image Side */}
            <div className="md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden">
               <Image 
                 src={featuredSession.image} 
                 alt={featuredSession.title} 
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-glacier-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-glacier-teal"></div>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs font-cabin font-bold text-glacier-teal tracking-widest uppercase">Latest Dialogue</span>
                <span className="text-xs font-cabin font-bold text-glacier-warmGrey opacity-60">|</span>
                <span className="text-xs font-cabin font-bold text-glacier-warmGrey">{featuredSession.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold font-nohemi text-glacier-navy mb-6 leading-tight group-hover:text-glacier-teal transition-colors">
                {featuredSession.title}
              </h3>
              
              <p className="text-glacier-warmGrey font-cabin mb-8 line-clamp-2">
                {featuredSession.content}
              </p>

              <div className="w-full md:w-auto flex items-center justify-between">
                <Link href={`/glacierDialgoues/${featuredSession.slug}`} className="inline-flex items-center gap-2 bg-glacier-navy text-white px-8 py-4 font-cabin font-bold hover:bg-glacier-teal transition-all whitespace-nowrap">
                  Read Session Highlights <ArrowRight size={18} />
                </Link>
                <div 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  className="hidden sm:block"
                >
                  <ShareButtons title={featuredSession.title} url={featuredUrl} compact={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sessions Archive */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-glacier-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
            <div>
              <p className="text-glacier-teal text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Reference Library</p>
              <h2 className="text-3xl md:text-4xl font-nohemi font-bold text-glacier-navy">Recent Sessions</h2>
            </div>
            <Link href="/glacierDialgoues" className="text-[11px] text-glacier-teal font-bold tracking-[0.15em] uppercase hover:text-glacier-navy transition-all flex items-center gap-2">
              View All Dialogues <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSessions.map((session) => (
              <DialogueCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DialogueCard({ session }) {
  const dialogueUrl = `https://thevoiceofglaciers.org/glacierDialgoues/${session.slug}`;

  return (
    <div className="group bg-glacier-offwhite border border-transparent hover:border-glacier-teal/20 hover:shadow-xl transition-all duration-500 relative flex flex-col h-full overflow-hidden">
      <Link href={`/glacierDialgoues/${session.slug}`} className="flex flex-col flex-grow">
        {/* Image Area */}
        <div className="relative aspect-video overflow-hidden">
          <Image 
            src={session.image} 
            alt={session.title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-[10px] font-bold text-glacier-teal uppercase tracking-[0.2em] mb-4">
            <Calendar size={12} />
            {session.date}
          </div>

          <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-6 leading-tight group-hover:text-glacier-teal transition-colors flex-grow">
            {session.title}
          </h3>

          <div className="mt-auto pt-6 border-t border-glacier-navy/5 flex items-center justify-between pr-14">
            <span className="text-xs font-cabin text-glacier-warmGrey font-medium truncate pr-4">
              {session.speaker}
            </span>
            <div className="text-glacier-teal hover:text-glacier-navy transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
              Details <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>

      {/* Share Button stationed outside the main Link */}
      <div 
        className="absolute bottom-7 right-6 z-30"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
      >
        <ShareButtons title={session.title} url={dialogueUrl} compact={true} />
      </div>
    </div>
  );
}

