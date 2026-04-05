"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isActive, setIsActive] = useState("/");

  const pathname = usePathname();
  const navRef = useRef(null);

  const structuredPages = [
    {
      name: "Home",
      href: "/",
      subpages: []
    },
    {
      name: "About Us",
      href: "/about",
      subpages: [
        { label: "Our Story", href: "/about/story", desc: "The SPACE framework and our mission." },
        { label: "Founder Story", href: "/about/founder", desc: "Anurag Maloo's survival and vision." },
        { label: "Team & Advisors", href: "/about/team", desc: "The people driving the movement." },
        { label: "Partners & Networks", href: "/about/partners", desc: "Our institutional collaborators." },
        
      ]
    },
    {
      name: "Why Glaciers Matter",
      href: "/why-glaciers-matter",
      subpages: [
        { label: "The Crisis", href: "/why-glaciers-matter/crisis", desc: "The systemic risk of glacier loss." },
        { label: "The Preparedness Gap", href: "/why-glaciers-matter/gap", desc: "Why communities are left vulnerable." },
        { label: "The Decisive Decade", href: "/why-glaciers-matter/decade", desc: "The narrow window for action." }
      ]
    },
    {
      name: "Programs",
      href: "/programs",
      subpages: [
        { label: "Glacier Dialogues", href: "/programs/glacier-dialogues", desc: "Monthly policy dialogue series." },
        { label: "Glacier Guardians Fellowship", href: "/programs/glacier-guardians-fellowship", desc: "Empowering youth climate leaders." },
        { label: "GlacierX Festival", href: "/programs/glacierx-festival", desc: "Convergence of science, art, and policy." },
        { label: "Time Markers", href: "/programs/time-markers", desc: "Installations at historical recession lines." },
        { label: "HCSN", href: "/programs/hcsn", desc: "Himalayan Climate Sentinels Network." },
        { label: "GlacierX Platform", href: "/programs/glacierx-platform", desc: "Open Digital Public Good infrastructure." }
      ]
    },
    {
      name: "Get Involved",
      href: "/get-involved",
      subpages: [
        { label: "Partner With Us", href: "/get-involved/partner", desc: "Institutional and funding partnerships." },
        { label: "Volunteer & Internships", href: "/get-involved/volunteer", desc: "Contribute your skills to the cause." },
        { label: "Join as Glacier Guardian", href: "/get-involved/glacier-guardian", desc: "Become part of the community." }
      ]
    },
    {
      name: "Media",
      href: "/media",
      subpages: [
        { label: "Press & News", href: "/media/press", desc: "Latest coverage and announcements." },
        { label: "Glacier Dialogues Sessions", href: "/media/sessions", desc: "Archive of past dialogues." },
        { label: "Publications & Reports", href: "/media/publications", desc: "Research and policy briefs." },
        { label: "Photography & Film", href: "/media/visual", desc: "Visuals from the frontlines." }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDesktopDropdown(null);
        setMobileDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTransparent = pathname === "/" && showNavbar;

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 font-cabin rounded-b-xl ${isTransparent ? "bg-transparent py-4 border-b border-white/20" : "bg-white shadow-md py-2 border-b border-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-dark-logo.webp"
              alt="Company Logo"
              width={140}
              height={48}
              className="h-8 sm:h-10 w-auto object-contain rounded-lg transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="flex md:space-x-4 lg:space-x-6 items-center h-full mr-6">
              {structuredPages.map((page) => (
                <div
                  key={page.name}
                  className="relative h-14 flex items-center"
                  onMouseEnter={() => setDesktopDropdown(page.name)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Link
                    href={page.href}
                    className={`flex items-center gap-1 font-medium text-xs md:text-[13px] lg:text-sm transition-colors font-nohemi h-full 
                      ${isTransparent ? "text-white" : "text-glacier-navy hover:text-glacier-teal"}
                      ${isActive === page.href ? "underline decoration-2 underline-offset-4 text-glacier-teal" : ""}`}
                  >
                    {page.name}
                    {page.subpages?.length > 0 && (
                      <motion.span
                        animate={{ rotate: desktopDropdown === page.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    )}
                  </Link>

                  <AnimatePresence>
                    {page.subpages?.length > 0 && desktopDropdown === page.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`fixed left-0 w-full bg-white text-black shadow-lg border-t border-gray-100 z-50 
                          ${isTransparent ? "top-[88px]" : "top-[72px]"}`}
                      >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                            {page.subpages.map((subpage) => (
                              <Link
                                key={subpage.label}
                                href={subpage.href}
                                onClick={() => setDesktopDropdown(null)}
                                className="block group"
                              >
                                <h3 className="text-glacier-navy font-semibold text-base mb-1 group-hover:text-glacier-teal transition-colors font-nohemi">
                                  {subpage.label}
                                </h3>
                                <p className="text-glacier-warmGrey text-sm font-cabin leading-relaxed group-hover:text-gray-900 transition-colors">
                                  {subpage.desc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className={`flex items-center gap-3 border-l pl-6 ${isTransparent ? 'border-white/20' : 'border-gray-200'}`}>
              <Link
                href="/get-involved/partner"
                className={`hidden lg:flex items-center justify-center px-4 py-2 border-2 text-sm font-medium rounded-md transition-colors font-cabin backdrop-blur-sm
                  ${isTransparent
                    ? "border-white text-white hover:bg-white hover:text-glacier-navy"
                    : "border-glacier-teal text-glacier-navy hover:bg-glacier-teal hover:text-white"
                  }`}
              >
                Partner With Us
              </Link>
              <Link
                href="/get-involved/glacier-guardian"
                className="flex items-center justify-center px-4 py-2 bg-glacier-navy text-white hover:bg-glacier-navy/90 text-sm font-medium rounded-md transition-colors font-cabin"
              >
                Join as Glacier Guardian
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setMobileDropdown(null);
              }}
              className={`transition-colors ${isTransparent ? "text-white hover:text-white/80" : "text-glacier-navy hover:text-glacier-teal"}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-glacier-navy shadow-xl border-t border-white/10 absolute w-full left-0 top-full"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              {structuredPages.map((link) => (
                <div key={link.name}>
                  {link.subpages?.length > 0 ? (
                    <button
                      onClick={() =>
                        setMobileDropdown((prev) =>
                          prev === link.name ? null : link.name
                        )
                      }
                      className="w-full flex justify-between items-center text-left text-white font-medium text-base py-2 font-nohemi"
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: mobileDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-glacier-teal"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white font-medium text-base py-2 font-nohemi"
                    >
                      {link.name}
                    </Link>
                  )}

                  <AnimatePresence>
                    {mobileDropdown === link.name && link.subpages?.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-2 space-y-2 pb-2 border-l-2 border-white/20 pl-3">
                          {link.subpages.map((subpage) => (
                            <Link
                              key={subpage.label}
                              href={subpage.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdown(null);
                              }}
                              className="block text-white/80 text-sm hover:text-glacier-teal transition-colors font-cabin py-1.5"
                            >
                              {subpage.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-white/20 mt-4">
                <PartnerWithUsButton onclick={() => setIsOpen(false)} />
                <JoinAsGlacierGuardianButton onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export const JoinAsGlacierGuardianButton = ({ onClick }) => {
  return (
    <Link
      href="/get-involved/glacier-guardian"
      onClick={onClick}
      className="w-full flex items-center justify-center px-4 py-2 bg-glacier-teal text-white hover:bg-glacier-teal/90 text-sm font-medium rounded-md transition-colors font-cabin"
    >
      Join as Glacier Guardian
    </Link>
  );
};

export const PartnerWithUsButton = ({ onclick }) => {
  return (
    <Link
      href="/get-involved/partner"
      onClick={onclick}
      className="w-full flex items-center justify-center px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-glacier-navy text-sm font-medium rounded-md transition-colors font-cabin"
    >
      Partner With Us
    </Link>
  );
};