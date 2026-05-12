import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

const publicationsData = [
  {
    id: 'pub-1',
    title: 'Dushanbe Glaciers Declaration: High-Level International Conference',
    authors: 'International Conference Framework',
    date: '2025-01-01',
    description: 'Official declaration document from the High-Level International Conference on Glacier Preservation, outlining global commitments to cryosphere monitoring and resilience funding.',
    type: 'Conference Declaration',
    downloadLink: '/Dushanbe-Glaciers-Declaration-High-Level-International-Conference.pdf'
  }
];

export default function PublicationsPage() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-navy selection:text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto border-b border-glacier-navy/10 w-full">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-glacier-navy leading-tight tracking-tight mb-6">
            Publications.
          </h1>
          <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin max-w-2xl">
            Policy briefs, evidence-based reports, and research outputs produced by TVGF and our institutional partners.
          </p>
        </div>
      </section>

      {/* Publications list */}
      <section className="py-20 px-6 md:px-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {publicationsData.map((pub) => (
              <article 
                key={pub.id} 
                className="bg-white p-8 md:p-12 border border-glacier-navy/10 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-6"
              >
                <div className="flex justify-between items-start border-b border-glacier-navy/10 pb-6">
                  <div>
                    <span className="inline-block bg-glacier-offwhite text-glacier-navy text-[10px] font-bold px-3 py-1 uppercase tracking-wider border border-glacier-navy/5 mb-4">
                      {pub.type}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-nohemi font-bold text-glacier-navy leading-tight mb-3">
                      {pub.title}
                    </h2>
                    <p className="font-cabin text-sm text-glacier-navy/80">
                      <strong>Source:</strong> {pub.authors}
                    </p>
                  </div>
                  <span className="hidden md:block font-cabin text-sm text-glacier-warmGrey whitespace-nowrap ml-6">
                    {formatDate(pub.date)}
                  </span>
                </div>

                <div className="mt-8 w-full aspect-[1/1.2] md:aspect-[16/9] lg:aspect-[21/9] bg-glacier-offwhite border border-glacier-navy/10 rounded-sm overflow-hidden shadow-inner relative group">
                  <div className="absolute inset-0 flex items-center justify-center bg-glacier-navy/5">
                    <span className="font-cabin text-glacier-warmGrey animate-pulse">Loading Document...</span>
                  </div>
                  <iframe 
                    src={`${pub.downloadLink}#toolbar=0&navpanes=0&scrollbar=0`} 
                    className="relative z-10 w-full h-full"
                    title={pub.title}
                  />
                  {/* Fallback button in case iframe fails on some mobile devices */}
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={pub.downloadLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-glacier-navy text-white hover:bg-glacier-teal text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-lg"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Open in New Tab
                    </a>
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