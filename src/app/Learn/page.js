"use client";

import { motion } from "framer-motion";import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlacierGlossary from "@/components/glossary";
import GlacierCard from "@/components/GlacierCard";
import QuizSection from "@/components/quizSection";

const glacierDetails = [
  {
    title: "Gangotri Glacier (Uttarakhand)",
    location: "Garhwal Himalayas, source of the Ganga River",
    retreat: "~1 km in the last 70 years (~15-20 meters/year)",
    concern: "Significant mass & length loss; freshwater source for millions.",
    beforeImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/gangotri-new.webp",
    afterImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/gangotri-old.webp",
    beforeLabel: "1984",
    afterLabel: "2023",
  },
  {
    title: "Siachen Glacier (Ladakh)",
    location: "Eastern Karakoram Range",
    retreat: "~1,000 meters over 30 years",
    concern: "Military activity accelerates melt; climate sensitive.",
    beforeImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/siachen-old.webp",
    afterImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/siachen-new.webp",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Pindari Glacier (Uttarakhand)",
    location: "Kumaon region",
    retreat: "~135 meters from 1958 to 2020 (~2 meters/year recently)",
    concern: "Moraine shift observed; high scientific attention.",
    beforeImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/Pindari-old.webp",
    afterImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/Pindari-new.webp",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Zemu Glacier (Sikkim)",
    location: "Near Kanchenjunga, Eastern Himalayas",
    retreat: "~27% area loss in recent decades",
    concern: "Vital for Teesta River; rapid satellite-observed retreat.",
    beforeImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/Zemu-old.webp",
    afterImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/Zemu-new.webp",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Dokriani Glacier (Uttarakhand)",
    location: "Bhagirathi Valley",
    retreat: "~20 meters/year",
    concern: "Volume loss confirmed by Wadia Institute studies.",
    beforeImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/DokrainGlacier-old.webp",
    afterImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/DokrianiGlacier-new.webp",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Chhota Shigri Glacier (Himachal Pradesh)",
    location: "Lahaul-Spiti region",
    retreat: "~15-20 meters/year",
    concern: "One of India's benchmark glaciers with detailed data.",
    beforeImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/chotta-old.webp",
    afterImage: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/glacierData/chotta-new.webp",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
];

export default function LearnPage() {
  return (
    <main className="w-full text-glacier-dark overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* Hero Section with Quick Links */}
      <section className="relative h-screen w-full overflow-hidden" id="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/AnuragMaloo.mp4"
        />
        <div className="absolute inset-0 bg-glacier-dark bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl sm:text-5xl font-nohemi mb-4">
            Learn about Glaciers
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl font-cabin mb-8">
            One of the most valuable components of nature
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: "Introduction", id: "introduction" },
              { label: "Explore", id: "explore" },
              { label: "Glacier Data", id: "glacier-data" },
              { label: "Glossary", id: "glossary" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="bg-white text-glacier-primary px-4 py-2 rounded font-semibold font-cabin hover:bg-glacier-light transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section
        className="py-24 px-6 md:px-12 lg:px-24 bg-white text-glacier-navy font-cabin"
        id="introduction"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-nohemi font-bold mb-6 text-glacier-navy tracking-tight">
              Introduction
            </h2>
            <blockquote className="text-xl md:text-2xl italic text-glacier-teal font-light max-w-4xl mx-auto">
              &#8220;When the ice melts, it&#39;s not just water that disappears&mdash;it&#39;s memory, balance, and the future.&#8221;
            </blockquote>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg md:text-xl text-glacier-warmGrey leading-relaxed"
            >
              <p>
                The <strong>cryosphere</strong> includes all components of the Earth System that are frozen&mdash;such as snow cover, glaciers, ice sheets, ice shelves, icebergs, sea ice, lake ice, river ice, permafrost, and seasonally frozen ground.
              </p>
              <p>
                It plays a critical role in regulating Earth&#39;s climate, supporting ecosystems, and providing water to billions of people.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-glacier-offwhite p-8 md:p-10 rounded-[2rem] border border-glacier-light/50 shadow-xl shadow-glacier-navy/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-glacier-teal/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-6">Alarming Changes</h3>
              <p className="text-base text-glacier-warmGrey mb-6">According to the <strong>IPCC Special Report</strong>, the cryosphere is undergoing rapid shifts:</p>
              <ul className="space-y-4">
                {[
                  { text: "70% of Earth's freshwater is locked in snow and ice" },
                  { text: "10% of Earth's land area is covered by glaciers or ice sheets" },
                  { text: "Sea level rise (2006-2015) was 2.5x faster than 1901-1990" },
                  { text: "Arctic snow cover in June dropped 13.4% per decade since 1967" },
                  { text: "Ice sheets are up to 4 km thick in East Antarctica" },
                  { text: "Antarctica holds ice that could raise sea levels by 58 meters" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-glacier-navy">
                    <span className="w-2 h-2 mt-2 rounded-full bg-glacier-teal flex-shrink-0"></span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Explore */}
      <section
        className="py-24 px-6 md:px-12 lg:px-24 bg-glacier-navy text-white font-cabin relative overflow-hidden"
        id="explore"
      >
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/hero/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-nohemi font-bold text-white tracking-tight mb-4">
                Explore Further
              </h2>
              <p className="text-glacier-offwhite/70 text-lg md:text-xl max-w-2xl">Dive into curated resources and global repositories to deepen your understanding of the cryosphere.</p>
            </div>
          </motion.div>

          <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory custom-scrollbar">
            {[
              {
                title: "NASA Climate Change",
                link: "https://climate.nasa.gov/",
                image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/explore/nasa.webp",
                category: "Resource"
              },
              {
                title: "Learn about Cryosphere",
                link: "https://wmo.int/topics/cryosphere",
                image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/explore/cryosphere.webp",
                category: "Education"
              },
              {
                title: "Year of Glaciers' Preservation",
                link: "https://wmo.int/resources/campaigns/launch-of-website-international-year-of-glaciers-preservation-2025",
                image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/explore/YearOfGlacier.webp",
                category: "Initiative"
              },
              {
                title: "National Snow & Ice Data Center",
                link: "https://nsidc.org/learn/parts-cryosphere/glaciers",
                image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/explore/NationalSnowIceDomain.webp",
                category: "Data"
              },
              {
                title: "List of Glaciers in India",
                link: "https://en.wikipedia.org/wiki/List_of_glaciers_in_India",
                image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/explore/ListOfGlacier.webp",
                category: "Archive"
              },
            ].map((item, i) => (
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl overflow-hidden min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] shadow-2xl snap-start border border-white/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-glacier-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-glacier-teal text-xs font-bold tracking-widest uppercase mb-3 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                  <h4 className="text-white text-2xl md:text-3xl font-nohemi font-bold leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h4>
                  <div className="mt-6 flex items-center gap-2 text-white/70 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    Visit Resource <span>→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>


      {/* Section 3: Glacier Data Comparison */}
      <section
        className="py-24 px-6 md:px-12 lg:px-24 bg-glacier-offwhite font-cabin relative"
        id="glacier-data"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-nohemi font-bold text-glacier-navy mb-6 tracking-tight">
              Glacier Changes Over Time
            </h2>
            <p className="text-lg md:text-xl text-glacier-warmGrey max-w-3xl mx-auto">Visual evidence of glacial retreat across significant Himalayan and Karakoram ranges.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
            {glacierDetails.map((glacier, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={index}
              >
                <GlacierCard
                  title={glacier.title}
                  location={glacier.location}
                  retreat={glacier.retreat}
                  concern={glacier.concern}
                  beforeImage={glacier.beforeImage}
                  afterImage={glacier.afterImage}
                  beforeLabel={glacier.beforeLabel}
                  afterLabel={glacier.afterLabel}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <QuizSection />

      {/* Section 4: Glossary */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative" id="glossary">
        <div className="max-w-7xl mx-auto">
          <GlacierGlossary />
        </div>
      </section>

      <Footer />
    </main>
  );
}
