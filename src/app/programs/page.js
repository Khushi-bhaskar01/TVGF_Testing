import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const programsList = [
  {
    title: "Glacier Dialogues",
    description: "Monthly online policy dialogue series bridging silos between scientists, policymakers, and community practitioners.",
    tag: "Active",
    href: "/programs/glacier-dialogues",
    variant: "teal",
    image: "/programs/dialogues.png",
    metrics: [
      { label: "Geography", value: "Global Reach" },
      { label: "Launch Date", value: "February 2026" }
    ]
  },
  {
    title: "Glacier Guardians Fellowship",
    description: "A 6-month paid fellowship connecting youth to glacier science, climate action, and mountain resilience.",
    tag: "Launching 2026",
    href: "/programs/glacier-guardians-fellowship",
    variant: "teal",
    image: "/programs/fellowship.png",
    metrics: [
      { label: "Eligibility", value: "Ages 22-32" },
      { label: "Status", value: "Cohort 1 Enrollment" }
    ]
  },
  {
    title: "Time Markers / Glacier Memory",
    description: "Permanent installations at historical glacier recession lines making decades of ice loss visible to communities.",
    tag: "Launching 2026",
    href: "/programs/time-markers",
    variant: "teal",
    image: "/programs/time.png",
    metrics: [
      { label: "Location", value: "Pilot in Uttarakhand" },
      { label: "Scale", value: "100k+ Annual Engagement" }
    ]
  },
  {
    title: "India Glacier Watch",
    description: "The full ecosystem hosting digital resilience infrastructure, fellowships, and the Glacier Guardians Network.",
    tag: "In Development",
    href: "/programs/glacierx-platform",
    variant: "crimson",
    image: "/programs/IndiaGlacierWatch.png",
    metrics: [
      { label: "Status", value: "Research & Scoping" },
      { label: "Philosophy", value: "Digital Public Good" }
    ]
  }
];

export default function ProgramsPage() {
  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[20vh] flex flex-col justify-end pt-20 pb-6 px-6 md:px-12 max-w-7xl mx-auto border-b border-glacier-light">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-glacier-lightTeal/10 to-transparent pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-nohemi font-bold text-glacier-navy leading-[0.9] tracking-tight">
              Programs.
            </h1>
          </div>
          <div className="lg:w-1/2 lg:pl-8 lg:border-l-2 border-glacier-soft/30 pb-0.5">
            <p className="text-sm md:text-base text-glacier-warmGrey leading-relaxed font-cabin">
              TVGF&apos;s programmes operate across the SPACE Framework —{' '}
              <span className="text-glacier-teal font-semibold">Science, Policy, Action, Culture, and Education.</span>{' '}
              Each is designed to address a specific gap in the preparedness ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* In Execution Section */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5">
            <h2 className="text-xl md:text-3xl font-nohemi font-bold text-glacier-navy">In Execution — 2026</h2>
          </div>

          {/* Cards Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {programsList.map((program, idx) => (
              <ProgramCard key={idx} {...program} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

{/* Modular Card Component */}
function ProgramCard({ title, description, tag, href, variant, image, metrics = [] }) {
  const isCrimson = variant === 'crimson';
  
  // Adaptive Tailwind Variant Classes
  const styles = {
    borderHover: isCrimson ? 'hover:border-glacier-crimson/30' : 'hover:border-glacier-teal/30',
    shadowHover: isCrimson ? 'hover:shadow-glacier-crimson/5' : 'hover:shadow-glacier-teal/5',
    glowBg: isCrimson ? 'bg-glacier-crimson/5' : 'bg-glacier-teal/5',
    indicatorBg: isCrimson ? 'bg-glacier-crimson' : 'bg-glacier-teal',
    tagBg: isCrimson ? 'bg-glacier-crimson' : 'bg-glacier-teal',
    btnBg: isCrimson ? 'bg-glacier-crimson/10 text-glacier-crimson hover:bg-glacier-crimson' : 'bg-glacier-teal/10 text-glacier-teal hover:bg-glacier-teal'
  };

  return (
    <div className={`group bg-white p-6 lg:p-8 relative flex flex-col h-full border border-glacier-light/40 rounded-xl ${styles.borderHover} hover:shadow-lg ${styles.shadowHover} hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden`}>
      {/* Decorative Glow Elements */}
      <div className={`absolute -right-12 -top-12 w-48 h-48 ${styles.glowBg} rounded-full blur-3xl pointer-events-none z-0`} />
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${styles.indicatorBg} group-hover:w-1.5 transition-all duration-200`} />
      
      {/* Badge Track */}
      <div className="flex justify-between items-start mb-3">
        <span className={`${styles.tagBg} text-white text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase rounded`}>
          {tag}
        </span>
      </div>

      {/* Header Text Content */}
      <h3 className="text-xl font-bold font-nohemi text-glacier-navy mb-1.5">{title}</h3>
      <p className="text-xs md:text-sm text-glacier-warmGrey mb-4 leading-relaxed font-cabin">
        {description}
      </p>

      {/* Compact Responsive Card Image Banner */}
      <div className="relative w-full aspect-[21/9] mb-4 overflow-hidden rounded-lg bg-glacier-light/20 border border-glacier-light/20">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Structured Metrics Context */}
      <div className="flex flex-col gap-2 mb-4 flex-grow pt-3 border-t border-glacier-light/40">
        {metrics.map((metric, metricIdx) => (
          <div key={metricIdx} className="flex justify-between items-center">
            <span className="text-[9px] text-glacier-warmGrey font-bold tracking-widest uppercase">{metric.label}</span>
            <span className="text-xs font-cabin text-glacier-navy font-bold">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* CTA Trigger */}
      <Link href={href} className={`mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 ${styles.btnBg} hover:text-white rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200 w-fit group/btn`}>
        Learn More <span className="transform transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
      </Link>
    </div>
  );
}