import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

const sessionsData = [
  {
    _id: "GD4",
    topic: "Glacier Dialogue 4",
    title: "They Are Already on Ventilator",
    date: "2026-04-01T10:00:00Z",
    status: "upcoming", 
    videoUrl: null,
    image: "https://wallpaperaccess.com/full/2150664.jpg",
    substackUrl: "",
    panelists: [
      { name: "Jaimitra Singh Bisht", role: "Expert Panelist" },
      { name: "Anup Sah", role: "Expert Panelist" },
      { name: "Dr. Shekhar Pathak", role: "Expert Panelist" }
    ],
    insights: [
      "A critical assessment of the immediate threats to Himalayan ecology.",
      "Exploration of the lived realities and environmental stressors in the region.",
      "Discussion on emergency interventions required for the most vulnerable glaciers."
    ]
  },
  {
    _id: "GD3",
    topic: "Glacier Dialogue 3 / UN Side Event",
    title: "From Risk to Resilience: What It Will Actually Take",
    date: "2026-03-19T10:00:00Z",
    status: "completed",
    videoUrl: null,
    image: "/dialogues/gd1.jpeg",
    substackUrl: "https://thevoiceofglaciers.substack.com/p/from-risk-to-resilience-what-glacier",
    panelists: [
      { name: "Dr. Aparna Shukla", role: "MoES" },
      { name: "Dr. Ashim Sattar", role: "IIT Bhubaneswar" },
      { name: "Safi Ahsan Rizvi", role: "Former Advisor, NDMA" },
      { name: "Antony Joh Moothedan", role: "UNDP" }
    ],
    insights: [
      "A UN side event for World Glacier Day bringing together scientists and policymakers.",
      "Engagement with hard, urgent questions about glacier preparedness.",
      "Focus on co-creating community-led GLOF adaptation frameworks."
    ]
  },
  {
    _id: "GD2",
    topic: "Glacier Dialogue 2",
    title: "When Glaciers Retreat, Societies Transform",
    date: "2026-02-24T10:00:00Z",
    status: "completed",
    videoUrl: null,
    image: "/MediaSession.JPG",
    substackUrl: "https://thevoiceofglaciers.substack.com/p/when-glaciers-retreat-societies-transform",
    panelists: [
      { name: "Anoop Nautiyal", role: "Founder, SDC Foundation" },
      { name: "Varsha Singh", role: "Independent Journalist" }
    ],
    insights: [
      "Glacial melting is accelerating due to rising global temperatures.",
      "Scientists warn that this silent crisis could disrupt freshwater ecosystems.",
      "Glacier retreat is not merely an environmental crisis; it is a governance crisis."
    ]
  },
  {
    _id: "GD1",
    topic: "Glacier Dialogue 1",
    title: "What the Mountains Are Telling Us",
    date: "2026-02-17T10:00:00Z",
    status: "completed",
    videoUrl: null,
    image: "/dialogues/gd2.png",
    substackUrl: "https://thevoiceofglaciers.substack.com/p/glaciers-are-not-just-melting-they",
    panelists: [
      { name: "Dr. Ashim Sattar", role: "IIT Bhubaneswar" },
      { name: "Dr. Mohd Farooq Azam", role: "ICIMOD" }
    ],
    insights: [
      "The Himalayan glaciers are retreating faster than ever recorded.",
      "This impacts millions who rely on glacier-fed rivers for daily survival.",
      "Early warning systems require immediate institutional alignment."
    ]
  }
];

export default function GlacierDialoguesSessionsPage() {
  // Sorting sessions --- newest first
  const sortedSessions = [...sessionsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-navy selection:text-white min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-glacier-navy/10 w-full">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-glacier-navy leading-tight tracking-tight mb-6">
            Glacier Dialogues Archive.
          </h1>
          <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin max-w-2xl">
            A complete record of our policy dialogue sessions. Explore key insights, expert panelist details, and full event recordings.
          </p>
        </div>
      </section>

      {/* Session List */}
      <section className="py-20 px-6 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sortedSessions.map((session) => (
              <article 
                key={session._id} 
                className={`bg-white border ${session.status === 'upcoming' ? 'border-glacier-teal shadow-md' : 'border-glacier-navy/10 shadow-sm'} hover:shadow-xl transition-all duration-300 flex flex-col group h-full overflow-hidden`}
              >
                {/* Image Area */}
                <div className="relative aspect-video bg-glacier-navy/5 overflow-hidden border-b border-glacier-navy/10 flex-shrink-0">
                  {session.image ? (
                    <img src={session.image} alt={session.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-glacier-navy/20">
                       <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    </div>
                  )}
                  {session.status === 'upcoming' && (
                    <span className="absolute top-4 right-4 bg-glacier-teal text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider animate-pulse shadow-md">
                      Upcoming Session
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-glacier-navy/60 text-xs font-bold tracking-widest uppercase block">
                      {session.topic}
                    </span>
                    <span className="text-glacier-warmGrey font-cabin text-sm whitespace-nowrap ml-4">
                      {formatDate(session.date)}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-nohemi font-bold text-glacier-navy leading-tight mb-6">
                    {session.title}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-[10px] font-bold tracking-widest uppercase text-glacier-navy/50 mb-2">Panelists</h3>
                    <p className="font-cabin text-glacier-navy text-sm leading-relaxed">
                      {session.panelists.map(p => p.name).join(' • ')}
                    </p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <h3 className="text-[10px] font-bold tracking-widest uppercase text-glacier-navy/50 mb-2">Key Insights</h3>
                    <ul className="flex flex-col gap-2 font-cabin text-glacier-warmGrey text-sm list-disc pl-4 leading-relaxed">
                      {session.insights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-6 border-t border-glacier-navy/10">
                    {session.status === 'upcoming' ? (
                      <Link 
                        href="/programs/glacier-dialogues" 
                        className="inline-flex items-center justify-center w-full md:w-auto gap-2 px-6 py-3 bg-glacier-navy text-white hover:bg-glacier-teal text-xs font-bold tracking-widest uppercase transition-all duration-300"
                      >
                        Register to Attend <span>→</span>
                      </Link>
                    ) : (
                      <Link 
                        href={session.substackUrl} 
                        target='_blank'
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold font-cabin text-glacier-navy hover:text-glacier-teal transition-colors"
                      >
                        Read full summary on Substack <span>→</span>
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