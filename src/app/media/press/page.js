import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

const pressData = [
  {
    id: 'press-1',
    title: 'Extreme weather events rapidly reshaping Himalayan glaciers: IIT study',
    publication: 'Times of India',
    date: '2026-05-11',
    summary: 'IIT Indore study in Nature finds heatwaves and sudden heavy snowfall can rapidly alter Himalayan glacier melt, though long-term warming still drives retreat.',
    link: 'https://timesofindia.indiatimes.com/city/dehradun/extreme-weather-events-rapidly-reshaping-himalayan-glaciers-iit-study/articleshow/131017974.cms',
    type: 'News Feature'
  },
  {
    id: 'press-2',
    title: 'Khangri glacier in Arunachal showing rapid changes, flood threat detected',
    publication: 'The Print / PTI',
    date: '2026-05-11',
    summary: 'Scientists studying the Khangri glacier in Arunachal Pradesh’s Tawang district have observed rapid melting.',
    link: 'https://theprint.in/india/khangri-glacier-in-arunachal-showing-rapid-changes-flood-threat-detected-study/2927895/',
    type: 'News Feature'
  },
  {
    id: 'press-3',
    title: 'Drilling Into the Thwaites Glacier in Antarctica',
    publication: 'The New York Times',
    date: '2026-05-11',
    summary: 'Ten people. Eight weeks. Three thousand feet to pierce a fast-melting Antarctic glacier.',
    link: 'https://www.nytimes.com/2026/05/11/climate/antarctica-expedition-thwaites-glacier.html',
    type: 'External Coverage'
  },
  {
    id: 'press-4',
    title: 'Subglacial CH₄ export from the Greenland Ice Sheet linked to a mid-Holocene warm period',
    publication: 'Phys.org',
    date: '2026-05-11',
    summary: 'In a new paper, an international team led by scientists from Charles University, Czechia, has brought evidence linking widespread release of methane from the Greenland Ice Sheet.',
    link: 'https://phys.org/news/2026-05-subglacial-ch-export-greenland-ice.html',
    type: 'Research Article'
  },
  {
    id: 'press-5',
    title: 'LG Saxena Meets Union Minister CR Patil; Discusses Key Water Resource And Irrigation Initiatives For Ladakh',
    publication: 'Daily Excelsior',
    date: '2026-05-04',
    summary: 'The Lieutenant Governor of Union Territory of Ladakh, Vinai Kumar Saxena, called on the Union Minister for Jal Shakti, CR Patil, in New Delhi.',
    link: 'https://www.dailyexcelsior.com/lg-saxena-meets-union-minister-cr-patil-discusses-key-water-resource-and-irrigation-initiatives-for-ladakh/',
    type: 'News Feature'
  },
  {
    id: 'press-6',
    title: 'Voice of Glaciers: A Ladakh Initiative to Save the Third Pole',
    publication: 'Devdiscourse',
    date: '2026-05-01',
    summary: 'In a major move to protect the fragile ecosystem of the Hindu Kush Himalayas, the \'Voice of Glaciers\' initiative has been launched in Ladakh.',
    link: 'https://www.devdiscourse.com/article/headlines/3894230-voice-of-glaciers-a-ladakh-initiative-to-save-the-third-pole',
    type: 'Initiative Coverage'
  },
  {
    id: 'press-7',
    title: 'Ladakh’s 179 glacial lakes under scientific watch to detect changes, avert hazards',
    publication: 'Daily Excelsior',
    date: '2026-05-01',
    summary: 'Monthly data tracking flags vulnerable hotspots Guidelines, multi-agency action plan to curb climate risks.',
    link: 'https://www.dailyexcelsior.com/ladakhs-179-glacial-lakes-under-scientific-watch-to-detect-changes-avert-hazards/',
    type: 'News Feature'
  },
  {
    id: 'press-8',
    title: 'International Mountain Day: Glaciers matter for food, water and livelihoods',
    publication: 'TVGF Blog',
    date: '2025-12-11',
    summary: 'Today is World Mountain Day. I\'ve spent years in the mountains witnessing firsthand the critical role glaciers play in sustaining livelihoods globally.',
    link: 'https://thevoiceofglaciers.org/media',
    type: 'Internal Blog'
  }
];

export default function PressAndNewsPage() {
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
            Press & News.
          </h1>
          <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin max-w-2xl">
            Official announcements, media appearances, and coverage of The Voice of Glaciers Foundation and our leadership.
          </p>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 px-6 md:px-12 border-b border-glacier-navy/10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-nohemi font-bold text-glacier-navy mb-2">Media & Press Inquiries</h2>
            <p className="font-cabin text-sm text-glacier-warmGrey mb-4">
              For interviews, comments, or press materials, please contact our media desk.
            </p>
            <div className="flex flex-col gap-1">
              <span className="font-bold font-cabin text-glacier-navy text-sm">Media Contact: Romola Butalia</span>
              <a href="mailto:thevoiceofglaciers@gmail.com" className="text-sm font-cabin text-glacier-teal hover:underline">
                thevoiceofglaciers@gmail.com
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href="#"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-glacier-offwhite border border-glacier-navy/10 text-glacier-navy hover:bg-glacier-navy hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Press Kit
            </a>
          </div>
        </div>
      </section>

      {/* Coverage archive */}
      <section className="py-20 px-6 md:px-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {pressData.map((item) => (
              <article
                key={item.id}
                className="bg-white p-8 md:p-10 border border-glacier-navy/10 hover:border-glacier-navy/30 hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row gap-8 md:gap-12"
              >
                {/* Meta Column */}
                <div className="md:w-1/4 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-glacier-navy/10 pb-6 md:pb-0 md:pr-8">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-glacier-navy/50 block mb-1">Publication</span>
                    <strong className="font-cabin text-glacier-navy text-base">{item.publication}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-glacier-navy/50 block mb-1">Date</span>
                    <span className="font-cabin text-glacier-warmGrey text-sm">{formatDate(item.date)}</span>
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="inline-block bg-glacier-offwhite text-glacier-navy text-[10px] font-bold px-3 py-1 uppercase tracking-wider border border-glacier-navy/5">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:w-3/4 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-nohemi font-bold text-glacier-navy mb-4 group-hover:text-glacier-teal transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-cabin text-glacier-warmGrey leading-relaxed mb-8">
                    {item.summary}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-glacier-navy hover:text-glacier-teal transition-colors w-fit"
                  >
                    Read Full Feature <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
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