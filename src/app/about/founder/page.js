"use client";
import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <main className="min-h-screen bg-[#042A33] text-[#F2F4F4] p-8 md:p-20 relative overflow-hidden">

   
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#2A787C]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#8B0333]/20 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">

    
        <motion.h1
          initial={{ opacity: 0, y: 60, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.8 }}
          className="text-[#2A787C] text-4xl font-bold mb-10 italic tracking-tight"
        >
          Survival as a Responsibility
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            className="md:col-span-2 space-y-6 text-lg leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >

            {/* Paragraph */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              In 2023, Anurag Maloo survived a near-fatal fall at ~6,000m on Mt. Annapurna. Trapped for 72 hours in an icy crevasse, survival became a mandate to protect the glaciers.
            </motion.p>

            {/* Quote with highlight animation */}
            <motion.blockquote
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative border-l-4 border-[#8B0333] pl-6 py-3 text-[#9CBBF0] italic bg-[#8B0333]/5 overflow-hidden"
            >
              {/* Animated glow sweep */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%]" />

              "If we can build national financial and digital infrastructure at scale, we can build resilience infrastructure for glaciers."
            </motion.blockquote>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-white/5 p-6 rounded-xl border border-[#2A787C]/30 backdrop-blur-lg relative overflow-hidden group"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#2A787C]/10 blur-xl" />

            <h3 className="text-[#2A787C] font-bold mb-4 uppercase text-xs tracking-wider">
              Credentials
            </h3>

            <ul className="text-sm space-y-4">
              {[
                "WEF Young Global Leader 2025",
                "15+ years in Venture Capital & Startups",
                "Fellow: RSA, ORF Raisina-QUAD 2025"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-start gap-2 group-hover:translate-x-1 transition"
                >
                  <span className="text-[#8B0333]">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>

          </motion.div>

        </div>
      </div>
    </main>
  );
}