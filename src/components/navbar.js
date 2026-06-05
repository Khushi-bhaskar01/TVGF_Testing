"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  // Track if the entire navbar wrapper is hovered on desktop
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();
  const navRef = useRef(null);
  const sidebarRef = useRef(null);

  const structuredPages = [
    { name: "Home", href: "/", subpages: [] },
    {
      name: "About Us",
      href: "/about",
      subpages: [
        { label: "Our Story", href: "/about/story", desc: "The SPACE framework and our mission." },
        { label: "Founder Story", href: "/about/founder", desc: "Anurag Maloo's survival and vision." },
        { label: "Team & Advisors", href: "/about/team", desc: "The people driving the movement." },
        { label: "Partners", href: "/about/partners", desc: "Our institutional collaborators." },
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
        // { label: "Himalayan Climate Sentinels Network", href: "/programs/hcsn", desc: "Community-powered climate intelligence." },
        { label: "India Glacier Watch", href: "/programs/glacierx-platform", desc: "Open Digital Public Good infrastructure." }
      ]
    },
    {
      name: "Learn",
      href: "/Learn",
      subpages: [
        { label: "Learn", href: "/Learn", desc: "Discover the importance of glaciers." },
        { label: "Glacier Glossary", href: "/Learn#glossary", desc: "A comprehensive dictionary of glacier terms." },
        { label: "Quiz", href: "/Learn#quiz", desc: "Test your knowledge about glaciers." }
      ]
    },
    {
      name: "Media",
      href: "/media",
      subpages: [
        { label: "Press & News", href: "/media/press", desc: "Latest coverage and announcements." },
        { label: "Recent Sessions", href: "/media/sessions", desc: "Archive of past dialogues." },
        { label: "Publications & Reports", href: "/media/publications", desc: "Research and policy briefs." },
        { label: "Photography & Film", href: "/media/visual", desc: "Visuals from the frontlines." }
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
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideNav = navRef.current && navRef.current.contains(event.target);
      const isClickInsideSidebar = sidebarRef.current && sidebarRef.current.contains(event.target);
      if (!isClickInsideNav && !isClickInsideSidebar) {
        setDesktopDropdown(null);
        setMobileDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scrolling when sidebar is open on mobile views
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isTransparent = pathname === "/" && isScrolled && !isHovered && !isOpen;
  
  const isLinkActive = (href) => {
    if (pathname === href) return true;
    if (href !== "/" && pathname.startsWith(`${href}/`)) return true;
    return false;
  };

  return (
    <>
      <nav
        ref={navRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed w-full z-[100] transition-all duration-500 font-cabin rounded-b-xl 
          ${isTransparent 
            ? "bg-transparent py-2 border-b border-white/10" 
            : "bg-white/95 backdrop-blur-md shadow-sm py-1 border-b border-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-10 items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-dark-logo.webp"
                alt="Company Logo"
                width={120}
                height={40}
                className={`h-7 sm:h-8 w-auto object-contain rounded-lg transition-all duration-300 brightness-0 ${isTransparent ? "invert" : ""}`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 items-center justify-end">
              <div className="flex md:space-x-4 lg:space-x-6 items-center h-full mr-6">
                {structuredPages.map((page) => (
                  <div
                    key={page.name}
                    className="relative h-10 flex items-center"
                    onMouseEnter={() => setDesktopDropdown(page.name)}
                    onMouseLeave={() => setDesktopDropdown(null)}
                  >
                    <Link
                      href={page.href}
                      className={`flex items-center gap-1 font-medium text-[11px] lg:text-[13px] transition-colors font-nohemi h-full text-center
                        ${isTransparent ? "text-white hover:text-white/80" : "text-glacier-navy hover:text-glacier-teal"}
                        ${isLinkActive(page.href) ? "text-glacier-teal underline decoration-2 underline-offset-4" : ""}`}
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
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full w-80 z-[100] pt-2
                            ${
                              page.name === "Get Involved" || page.name === "Media" || page.name === "Learn"
                                ? "right-0 origin-top-right"
                                : "left-0 origin-top-left"
                            }`}
                        >
                          <div className="bg-white text-black shadow-xl rounded-xl border border-gray-100/90 p-2">
                            <div className="flex flex-col gap-1">
                              {page.subpages.map((subpage) => (
                                <Link
                                  key={subpage.label}
                                  href={subpage.href}
                                  onClick={() => setDesktopDropdown(null)}
                                  className={`flex flex-col p-2.5 rounded-lg transition-all duration-200 hover:bg-glacier-navy/[0.03] group
                                    ${isLinkActive(subpage.href) ? "bg-glacier-navy/[0.02]" : ""}`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span
                                      className={`text-[13px] font-semibold transition-colors font-nohemi
                                        ${isLinkActive(subpage.href) 
                                          ? "text-glacier-teal font-bold" 
                                          : "text-glacier-navy group-hover:text-glacier-teal"}`}
                                    >
                                      {subpage.label}
                                    </span>
                                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-x-1 transition-all duration-200 text-glacier-teal">
                                      <ChevronDown size={12} className="-rotate-90" />
                                    </span>
                                  </div>
                                  {subpage.desc && (
                                    <p className="text-glacier-warmGrey text-[11px] font-cabin leading-relaxed mt-0.5 group-hover:text-gray-900 transition-colors">
                                      {subpage.desc}
                                    </p>
                                  )}
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
                  className={`hidden lg:flex items-center justify-center text-center px-3 py-1.5 border-2 text-[11px] font-medium rounded-md transition-colors font-cabin backdrop-blur-sm
                    ${isTransparent
                      ? "border-white text-white hover:bg-white hover:text-glacier-navy"
                      : "border-glacier-teal text-glacier-navy hover:bg-glacier-teal hover:text-white"
                    }`}
                >
                  Partner With Us
                </Link>
                <Link
                  href="/get-involved/glacier-guardian"
                  className="flex items-center justify-center text-center px-3 py-1.5 bg-glacier-navy text-white hover:bg-glacier-navy/90 text-[11px] font-medium rounded-md transition-colors font-cabin"
                >
                  Join as Glacier Guardian
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button - Set to maximum z-index layer */}
            <div className="md:hidden z-[9999]">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setMobileDropdown(null);
                }}
                className={`transition-colors ${
                  isOpen 
                    ? "text-white hover:text-glacier-teal" 
                    : isTransparent ? "text-white hover:text-white/80" : "text-glacier-navy hover:text-glacier-teal"
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop layer - Set to maximum z-index layer minus 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[9998] md:hidden"
            />

            {/* Mobile Drawer Container - Set to matching maximum z-index layer */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed right-0 top-0 h-screen w-[60%] sm:w-1/2 bg-glacier-navy shadow-2xl border-l border-white/10 z-[9999] overflow-y-auto"
            >
              <div className="px-6 pt-16 pb-6 space-y-4">
                {structuredPages.map((link) => (
                  <div key={link.name}>
                    {link.subpages?.length > 0 ? (
                      <button
                        onClick={() =>
                          setMobileDropdown((prev) => (prev === link.name ? null : link.name))
                        }
                        className="w-full flex justify-between items-center py-2 text-left"
                      >
                        <span
                          className={`font-medium text-base font-nohemi transition-colors ${isLinkActive(link.href)
                              ? "text-glacier-teal underline underline-offset-4"
                              : "text-white"
                            }`}
                        >
                          {link.name}
                        </span>

                        <motion.span
                          animate={{ rotate: mobileDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-white"
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block font-medium text-base py-2 font-nohemi transition-colors ${isLinkActive(link.href)
                            ? "text-glacier-teal underline underline-offset-4"
                            : "text-white"
                          }`}
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
                          <div className="ml-4 mt-1 space-y-1 pb-1 border-l-2 border-white/20 pl-3">
                            {[
                              ...(link.href && !link.subpages.some(sp => sp.href === link.href)
                                ? [{ label: `${link.name} Overview`, href: link.href }]
                                : []),
                              ...link.subpages
                            ].map((subpage) => (
                              <Link
                                key={subpage.label}
                                href={subpage.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileDropdown(null);
                                }}
                                className={`block text-sm transition-colors font-cabin py-1 ${isLinkActive(subpage.href)
                                    ? "text-glacier-teal underline underline-offset-4 font-bold"
                                    : "text-white/80 hover:text-glacier-teal"
                                  }`}
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
          </>
        )}
      </AnimatePresence>
    </>
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