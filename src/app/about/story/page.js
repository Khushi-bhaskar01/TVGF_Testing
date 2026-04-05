"use client";
import { motion } from "framer-motion";

export default function Story() {
  const framework = [
    { k: "S", t: "Science", d: "Open real-time data & citizen science" },
    { k: "P", t: "Policy", d: "Embedding protection in governance" },
    { k: "A", t: "Action", d: "GlacierX ecosystem & Glacier Guardians Network" },
    { k: "C", t: "Culture", d: "Films, rituals & resacralizing ice" },
    { k: "E", t: "Education", d: "Curriculum for future custodians" }
  ];

  return (
    <main className="min-h-screen bg-[#042A33] text-white p-8 md:p-20 relative overflow-hidden">

      {/* Background Glow Layers */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#2A787C]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#8B0333]/20 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Our Story
          </h1>

          <p className="text-[#9CBBF0] text-lg max-w-3xl mx-auto">
            TVGF was founded to address the accelerating crisis of glacier loss—
            building a bridge between science, policy, and community-led resilience
            across the Hindu Kush Himalaya.
          </p>
        </motion.div>

        {/* VISION + MISSION */}
        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:bg-white transition group"
          >
            <h3 className="text-[#2A787C] font-bold mb-3 group-hover:text-[#2A787C]">
              Vision
            </h3>
            <p className="group-hover:text-[#2A787C]">
              A world where protected glaciers secure water security, climate stability, and resilient futures.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:bg-white transition group"
          >
            <h3 className="text-[#2A787C] font-bold mb-3">
              Mission
            </h3>
            <p className="group-hover:text-[#2A787C]">
              To enable mountain communities to adapt and lead in a changing cryosphere by connecting science, local knowledge, and collective action.
            </p>
          </motion.div>

        </div>

        {/* SPACE FRAMEWORK */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            The SPACE Framework
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {framework.map((f) => (
              <motion.div
                key={f.k}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg 
                           hover:bg-white transition group relative overflow-hidden"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#8B0333] group-hover:bg-[#2A787C]" />

                <h3 className="text-2xl font-bold text-[#2A787C] mb-2 group-hover:text-[#2A787C]">
                  {f.k}
                </h3>

                <p className="font-semibold mb-2 group-hover:text-[#2A787C]">
                  {f.t}
                </p>

                <p className="text-sm text-[#6B7280] group-hover:text-[#2A787C]">
                  {f.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SUMMIT-VALLEY */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-8 border-l-4 border-[#8B0333] bg-[#8B0333]/5 rounded-xl"
        >
          <p className="text-lg">
            <b>Summit–Valley Approach:</b> Top-down (governments, UN, COP, policy)
            meets bottom-up (communities, youth, educators).  
            <span className="text-[#9CBBF0]"> Real resilience flows both ways.</span>
          </p>
        </motion.div>

        {/* THEORY OF CHANGE */}
        <div className="text-center">
          <p className="text-[#9CBBF0] text-lg">
            Movement → Pilots & Proof → Catalytic Capital → Impact & Resilience → Policy & Systems Change
          </p>
        </div>

        {/* NORTH STAR */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="text-center p-8 bg-white/5 rounded-2xl hover:bg-white transition group"
        >
          <p className="text-xl italic group-hover:text-[#2A787C]">
            "Glaciers protected legally and culturally as living entities."
          </p>
        </motion.div>

        {/* LEGAL */}
        <p className="text-center text-sm text-[#6B7280]">
          Section 8 Company (Not-for-Profit), India. Registration number to be inserted.
        </p>

      </div>
    </main>
  );
}