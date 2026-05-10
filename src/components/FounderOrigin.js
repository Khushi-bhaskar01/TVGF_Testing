import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export const FounderOrigin = () => {
  return (
    <section className="w-full bg-glacier-offwhite py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-glacier-teal"></div>
            <h2 className="text-sm font-nohemi text-glacier-teal tracking-widest uppercase">
              The Origin
            </h2>
          </div>

          <h3 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy mb-6 leading-tight">
            A survival story that became a responsibility.
          </h3>

          <div className="font-cabin text-glacier-warmGrey text-lg leading-relaxed space-y-4 mb-8">
            <p>
              In 2023, founder Anurag Maloo survived a near-fatal fall at ~6,000m on Mt. Annapurna. For 72 hours, he was trapped deep inside an icy crevasse without food, water, or oxygen.
            </p>
            <p>
              Against all odds, he was rescued. But survival was not a return to normal it became a deep responsibility. This profound experience on the mountain ignited the founding of The Voice of Glaciers Foundation.
            </p>
          </div>

          <Link
            href="/about/founder"
            className="group inline-flex items-center text-glacier-teal font-cabin font-bold text-lg hover:text-glacier-navy transition-colors duration-300"
          >
            Read the full story
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </motion.div>

        {/* Right Columm */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-end"
        >
          <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-lg border border-glacier-teal/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">

            {/* Portrait */}
            <div className="w-full h-64 md:h-72 lg:h-96 relative">
              <Image
                src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/hero-image.webp"
                alt="Anurag Maloo - Founder of TVGF"
                fill
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>

            {/* Credentials Panel */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                {/* Logo */}
                <Image
                  src="/partners/WEF.svg"
                  alt="World Economic Forum"
                  width={80}
                  height={80}
                  className="shrink-0 object-contain"
                />
                <span className="font-nohemi text-glacier-navy font-semibold text-lg leading-tight">
                  WEF Young Global Leader 2025
                </span>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-glacier-teal/40 to-transparent mb-4" />

              <p className="font-cabin text-glacier-warmGrey text-xs md:text-sm tracking-widest uppercase font-medium">
                Seedstars <span className="text-glacier-teal mx-2 opacity-50">•</span> Techstars <span className="text-glacier-teal mx-2 opacity-50">•</span> RSA
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
