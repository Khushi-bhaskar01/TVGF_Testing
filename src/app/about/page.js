"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutLanding() {
  const cards = [
    { name: "Our Story", href: "/about/story", desc: "Our mission, vision, and the SPACE Framework." },
    { name: "Founder Story", href: "/about/founder", desc: "From Annapurna survival to founding TVGF." },
    { name: "Team & Advisors", href: "/about/team", desc: "Core team, advisors, and expert panel." },
    { name: "Partners & Networks", href: "/about/partners", desc: "Institutional and global collaborators." }
  ];

  return (
    <main className="min-h-screen bg-[#042A33] text-white p-8 md:p-24 flex items-center">

      <div className="max-w-6xl mx-auto w-full text-center">

        <h1 className="text-white text-5xl font-bold mb-6">About TVGF</h1>

        <p className="text-[#9CBBF0] text-xl mb-16 max-w-3xl mx-auto">
          The Void Glacier Foundation (TVGF) is a registered Section 8 nonprofit in India, 
          born from a near-death survival experience in the Himalayas, now focused on building 
          institutional capacity and preparedness across the Hindu Kush Himalaya (HKH).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <motion.div key={card.name} whileHover={{ scale: 1.03 }}>
              <Link href={card.href}
                className="block p-10 bg-white/5 rounded-2xl hover:bg-white transition group"
              >
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[#2A787C]">
                  {card.name}
                </h2>
                <p className="text-[#6B7280] group-hover:text-[#2A787C]">
                  {card.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}