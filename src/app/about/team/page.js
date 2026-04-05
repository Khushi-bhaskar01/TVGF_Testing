"use client";
import { motion } from "framer-motion";

export default function TeamPage() {

  const core = [
    "Anurag Maloo — Founder & CEO",
    "Sruthi Karthikeyan — Operations & Strategy | Ex-Microsoft",
    "Shriya Harshe — Climate Adaptation & Environmental Planner",
    "Deepthi Rao — Fellowship Program Manager",
    "Soham Punde — Filmmaker",
    "Harshit Rautela — Storyteller & Content Creator",
    
  ];

  const advisors = [
    "Romola Butalia — Writer, Conservationist & Senior Media Person",
    " Reinhold Messner - Izabella Koziell — Hold pending confirmation"
  ];

  const experts = [
    "Dr. Arun Shrestha — Sr. Glaciologist, ex-ICIMOD, Nepal",
    "Dr. Ashim Sattar — Glaciologist (GLOF Expert), IIT Bhubaneswar",
    "Dr. Farooq Azam — Cryosphere Specialist, ICIMOD / IIT Indore",
    "Dr. Anjan Ray — Navam Capital / IIT Delhi & CBRI",
    "Ronak Sutaria — Founder & CEO, Respirer Living Sciences",
    "Dr. Suman Sahai — Founder Chairperson, Gene Campaign",
    "Anoop Nautiyal — Founder, SDC Foundation",
    "Dr. Vishal Singh — Executive Director, CEDAR",
    "Safi Ahsan Rizvi — Disaster Risk Analyst, Former IPS, ex-NDMA",
    "Dr. Rasik Ravindra — Chairman SaGAA, Former Director NCPOR",
    "Dr. Bryan Mark — Professor, Ohio State University",
    "Laxman Srikanth — Advisor, Deltares, Netherlands"
  ];

  const cardStyle =
    "p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg hover:bg-white transition group cursor-pointer";

  return (
    <main className="min-h-screen bg-[#042A33] text-white p-8 md:p-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#2A787C]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#8B0333]/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">Team & Advisors</h1>
          <p className="text-[#9CBBF0] mt-4">
            A multidisciplinary team building resilience systems for glaciers and mountain communities.
          </p>
        </motion.div>

        {/* CORE TEAM */}
        <Section title="Core Team" data={core} />

        {/* ADVISORS */}
        <Section title="Advisors" data={advisors} />

        <p className="text-center text-sm text-[#6B7280] italic">
          Senior advisors being announced shortly.
        </p>

        {/* EXPERT PANEL */}
        <Section title="Expert Panel" data={experts} />

      </div>
    </main>
  );

  function Section({ title, data }) {
    return (
      <div>
        <h2 className="text-xl text-[#9CBBF0] uppercase tracking-wider mb-8 text-center">
          {title}
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {data.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={cardStyle}
            >
              <p className="text-sm leading-relaxed group-hover:text-[#2A787C]">
                {item}
              </p>

              {/* bottom accent */}
              <div className="mt-4 w-0 h-[2px] bg-[#8B0333] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
}