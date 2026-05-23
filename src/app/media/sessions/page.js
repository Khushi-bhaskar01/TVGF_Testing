import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

const sessionsData = [
  {
    _id: "GD5",
    topic: "Glacier Dialogue 5",
    title: "Climate Migration & Human Dignity",
    date: "2026-05-06T10:00:00Z",
    status: "completed",
    videoUrl: "http://www.youtube.com/watch?v=F9cuIh0tmF0",
    videoId: "F9cuIh0tmF0",
    image: "https://img.youtube.com/vi/F9cuIh0tmF0/maxresdefault.jpg",
    substackUrl: "https://thevoiceofglaciers.substack.com",
    panelists: [
      { name: "Expert Panelists & Advocates", role: "Climate Policy Speakers" }
    ],
    insights: [
      "A deep examination of displacement and humanitarian frameworks across the shifting Himalayan geography.",
      "Centering human dignity and social protections within evolving regional climate resettlement strategies.",
      "Bridging international climate migration policy directly with affected community leadership."
    ]
  },
  {
    _id: "GD4",
    topic: "Glacier Dialogue 4",
    title: "They Are Already on Ventilator",
    date: "2026-04-09T10:00:00Z",
    status: "completed",
    videoUrl: "http://www.youtube.com/watch?v=oJPeApCg4fQ",
    videoId: "oJPeApCg4fQ",
    image: "https://img.youtube.com/vi/oJPeApCg4fQ/maxresdefault.jpg",
    substackUrl: "https://thevoiceofglaciers.substack.com",
    panelists: [
      { name: "Jaimitra Singh Bisht", role: "Expert Panelist" },
      { name: "Anup Sah", role: "Expert Panelist" },
      { name: "Dr. Shekhar Pathak", role: "Expert Panelist" }
    ],
    insights: [
      "A critical assessment of the immediate, critical threats directly endangering Himalayan ecology.",
      "Exploration of the lived realities and severe environmental stressors building rapidly in the region.",
      "Determining targeted emergency interventions required to assist the most vulnerable global glaciers."
    ]
  },
  {
    _id: "GD3",
    topic: "Glacier Dialogue 3 / UN Side Event",
    title: "From Risk to Resilience: What It Will Actually Take",
    date: "2026-05-01T10:00:00Z",
    status: "completed",
    videoUrl: "http://www.youtube.com/watch?v=ol5jbUqCzQM",
    videoId: "ol5jbUqCzQM",
    image: "https://img.youtube.com/vi/ol5jbUqCzQM/maxresdefault.jpg",
    substackUrl: "https://thevoiceofglaciers.substack.com/p/from-risk-to-resilience-what-glacier",
    panelists: [
      { name: "Dr. Aparna Shukla", role: "MoES" },
      { name: "Dr. Ashim Sattar", role: "IIT Bhubaneswar" },
      { name: "Safi Ahsan Rizvi", role: "Former Advisor, NDMA" },
      { name: "Antony Joh Moothedan", role: "UNDP" }
    ],
    insights: [
      "An essential side event bringing critical scientific panels together with regional policymakers.",
      "Addressing urgent, immediate challenges regarding baseline glacier event preparedness systems.",
      "Emphasizing the co-creation of robust, community-led GLOF adaptation frameworks."
    ]
  },
  {
    _id: "GD2",
    topic: "Glacier Dialogue 2",
    title: "When Glaciers Retreat, Societies Transform",
    date: "2026-05-06T09:00:00Z",
    status: "completed",
    videoUrl: "http://www.youtube.com/watch?v=RvXinE-XVeA",
    videoId: "RvXinE-XVeA",
    image: "https://img.youtube.com/vi/RvXinE-XVeA/maxresdefault.jpg",
    substackUrl: "https://thevoiceofglaciers.substack.com/p/when-glaciers-retreat-societies-transform",
    panelists: [
      { name: "Anoop Nautiyal", role: "Founder, SDC Foundation" },
      { name: "Varsha Singh", role: "Independent Journalist" }
    ],
    insights: [
      "Glacial melt cycles are accelerating rapidly alongside mounting global climate temperatures.",
      "Key scientific panels warn that silent melt developments directly threaten downstream freshwater stability.",
      "Highlighting why deep glacial retreat represents a foundational institutional governance crisis."
    ]
  },
  {
    _id: "GD1",
    topic: "Glacier Dialogue 1",
    title: "Understanding the Science of Glaciers",
    date: "2026-05-22T10:00:00Z",
    status: "completed",
    videoUrl: "http://www.youtube.com/watch?v=A55C59cHDtg",
    videoId: "A55C59cHDtg",
    image: "https://img.youtube.com/vi/A55C59cHDtg/maxresdefault.jpg",
    substackUrl: "https://thevoiceofglaciers.substack.com/p/glaciers-are-not-just-melting-they",
    panelists: [
      { name: "Dr. Ashim Sattar", role: "IIT Bhubaneswar" },
      { name: "Dr. Mohd Farooq Azam", role: "ICIMOD" }
    ],
    insights: [
      "Himalayan ice fields are exhibiting unprecedented melt rates higher than previously recorded.",
      "Direct consequences threatening millions reliant on river systems for vital regional water access.",
      "Emphasizing why modern early warning architectures require cohesive institutional alignment."
    ]
  }
];

export default function GlacierDialoguesSessionsPage() {
  const sortedSessions = [...sessionsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-navy selection:text-white min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-6xl mx-auto border-b border-glacier-navy/10 w-full">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-4xl md:text-5xl font-nohemi font-bold text-glacier-navy tracking-tight mb-4">
            Glacier Dialogues Archive.
          </h1>
          <p className="text-base md:text-lg text-glacier-warmGrey font-cabin max-w-xl">
            Recorded broadcasts of our policy dialogue sessions tracking scientific panels and global ecosystem insights.
          </p>
        </div>
      </section>

      {/* Compact Video Grid Stack */}
      <section className="py-12 px-6 md:px-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {sortedSessions.map((session) => (
              <article 
                key={session._id} 
                className="bg-white border border-glacier-navy/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row group overflow-hidden"
              >
                {/* Compact Row Thumb */}
                <a 
                  href={session.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video lg:w-72 bg-glacier-navy/5 overflow-hidden lg:border-r border-b lg:border-b-0 border-glacier-navy/10 flex-shrink-0 block"
                >
                  <img 
                    src={session.image} 
                    alt={session.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-glacier-navy/10 flex items-center justify-center transition-opacity group-hover:bg-glacier-navy/20">
                    <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300 text-glacier-navy">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Compact Content Split */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-glacier-navy/60 text-[10px] font-bold tracking-wider uppercase">
                        {session.topic}
                      </span>
                      <span className="text-glacier-warmGrey font-cabin text-xs whitespace-nowrap">
                        {formatDate(session.date)}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-nohemi font-bold text-glacier-navy leading-snug mb-2">
                      <a 
                        href={session.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-glacier-teal transition-colors"
                      >
                        {session.title}
                      </a>
                    </h2> 

                    <p className="font-cabin text-glacier-navy text-xs mb-3 text-glacier-navy/80">
                      <strong className="text-glacier-navy/50 font-bold uppercase text-[9px] tracking-wider block mb-0.5">Speakers</strong>
                      {session.panelists.map(p => p.name).join(' • ')}
                    </p>
                  </div>

                  {/* Compact Bottom Footer Actions */}
                  <div className="pt-3 border-t border-glacier-navy/5 flex items-center justify-between gap-4">
                    <a 
                      href={session.videoUrl} 
                      target='_blank'
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-glacier-navy text-white hover:bg-glacier-teal text-[11px] font-bold tracking-wide uppercase transition-colors"
                    >
                      Watch <span>▶</span>
                    </a>
                    {session.substackUrl && (
                      <Link 
                        href={session.substackUrl} 
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold font-cabin text-glacier-warmGrey hover:text-glacier-teal transition-colors"
                      >
                        Summary Summary <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}