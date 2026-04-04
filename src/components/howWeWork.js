"use client";

import { motion } from "framer-motion";

export default function HowWeWorkSection() {
  const engines = [
    {
      id: "Engine 1",
      title: "TVGF Foundation",
      subtitle: "Movement & Community",
      role: "Insights, Research, Policy.",
      description: "Builds awareness, anchors community trust, and runs pilots.",
      bgColor: "bg-glacier-navy",
    },
    {
      id: "Engine 2",
      title: "GlacierX Cryosphere Innovation Lab",
      subtitle: "Solutions & Technology",
      role: "Translates community insights",
      description: "Develops adaptation technologies and open-source monitoring tools.",
      bgColor: "bg-glacier-crimson",
    },
    {
      id: "Engine 3",
      title: "TVG Catalytic Fund",
      subtitle: "Capital & Scaling",
      role: "Provides early catalytic capital",
      description: "Scales validated solutions and unlocks downstream co-funding.",
      bgColor: "bg-glacier-teal",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Headings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-nohemi text-glacier-teal tracking-widest uppercase mb-4">
            Our Approach
          </h2>
          <h3 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">
            Three Engines. One Ecosystem.
          </h3>
        </motion.div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-16">
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${engine.bgColor} relative overflow-hidden text-white rounded-2xl p-8 flex flex-col shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group border border-transparent hover:border-white/10`}
            >
              {/* Subtle radial glow in the background on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

              <div className="mb-6 pb-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-nohemi tracking-widest uppercase mb-4 transition-all duration-500 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:border-white/30 border border-transparent">
                  {engine.id}
                </span>
                <h4 className="text-2xl font-nohemi font-bold leading-tight mb-2">
                  {engine.title}
                </h4>
                <p className="text-white/80 font-cabin font-medium text-sm tracking-wide uppercase transition-colors duration-500 group-hover:text-white">
                  {engine.subtitle}
                </p>

                {/* Animated Line Separator */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 overflow-hidden">
                   <div className="w-full h-full bg-white/70 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </div>
              </div>
              
              <div className="font-cabin text-base md:text-lg flex-grow relative z-10 pt-2">
                <p className="font-bold mb-2 text-white transition-opacity duration-500 group-hover:opacity-100 opacity-90">{engine.role}</p>
                <p className="text-white/80 leading-relaxed transition-colors duration-500 group-hover:text-white">{engine.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Flow Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-4xl bg-glacier-offwhite border border-glacier-teal/10 rounded-full py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between shadow-sm"
        >
          <span className="font-nohemi font-bold text-glacier-navy text-sm md:text-base text-center">
            Real-world Pilots
          </span>
          
          <span className="text-glacier-teal my-2 md:my-0 rotate-90 md:rotate-0">
            {/* Arrow Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          
          <span className="font-nohemi font-bold text-glacier-navy text-sm md:text-base text-center">
            Scaled Implementation
          </span>
          
          <span className="text-glacier-teal my-2 md:my-0 rotate-90 md:rotate-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          
          <span className="font-nohemi font-bold text-glacier-navy text-sm md:text-base text-center">
            Systems Change
          </span>
        </motion.div>

      </div>
    </section>
  );
}