"use client";
import { motion } from "framer-motion";

export default function Partners() {

  const institutional = [
    "ICIMOD",
    "IIT Bhubaneswar (Cryosense Lab)",
    "Ministry of Earth Sciences",
    "NDMA",
    "UNDP",
    "UNESCO",
    "WMO",
    "Conservation International",
    "SDC Foundation"
  ];

  const networks = [
    "Techstars",
    "Startup Weekend",
    "WEF",
    "Global Shapers",
    "2041 Foundation",
    "SEALA",
    "Terra.do",
    "Teach For India",
    "AIYD",
    "ORF"
  ];

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
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Partners & Networks
          </h1>

          <p className="text-[#9CBBF0] max-w-3xl mx-auto text-lg">
            Collaborating across institutions, governments, and global networks
            to build resilience systems for glaciers and mountain communities.
          </p>
        </motion.div>

        {/* RECOGNITION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-center p-10 border-2 border-[#2A787C] rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white transition group relative overflow-hidden"
        >
          {/* glow sweep */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                          bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%]" />

          <h2 className="text-sm tracking-widest mb-2 text-[#2A787C]">
            RECOGNITION
          </h2>

          <p className="text-3xl font-bold group-hover:text-[#2A787C]">
            WEF Young Global Leader 2025
          </p>
        </motion.div>

        {/* INSTITUTIONAL PARTNERS */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center text-[#9CBBF0] uppercase tracking-wider">
            Institutional Partners
          </h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {institutional.map((p) => (
              <motion.div
                key={p}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 0.7, y: 0 }
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="h-20 flex items-center justify-center text-center px-3 
                           bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg
                           hover:bg-white transition group cursor-pointer"
              >
                <span className="text-sm font-semibold group-hover:text-[#2A787C]">
                  {p}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* NETWORKS */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center text-[#9CBBF0] uppercase tracking-wider">
            Global Networks & Affiliations
          </h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {networks.map((n) => (
              <motion.div
                key={n}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 0.7, y: 0 }
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="h-16 flex items-center justify-center text-center px-2
                           bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg
                           hover:bg-white transition group cursor-pointer"
              >
                <span className="text-sm group-hover:text-[#2A787C]">
                  {n}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* NOTE */}
        <p className="text-center text-sm text-[#6B7280] max-w-2xl mx-auto">
          Partner logos will be displayed upon receiving official assets (SVG/PNG) 
          and permissions for use.
        </p>

      </div>
    </main>
  );
}