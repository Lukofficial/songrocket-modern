"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Record Label",
    href: "/record-label",
    dropdown: [
      { label: "Demo Submission", href: "/record-label/demo-submission" },
      { label: "Learn More", href: "/record-label/learn-more" },
    ],
  },
  {
    label: "For Artists",
    href: "/for-artists",
    dropdown: [
      { label: "Pitch to Spotify Playlist", href: "/for-artists/pitch-spotify" },
    ],
  },
  {
    label: "For Curators",
    href: "/for-curators",
    dropdown: [
      { label: "Discover New Music", href: "/for-curators/discover" },
      { label: "Apply as Curator", href: "/for-curators/apply" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    dropdown: [
      { label: "Login For Prices", href: "/pricing/login" },
      { label: "Pricing FAQ", href: "/pricing/faq" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    dropdown: [
      { label: "FAQs", href: "/support/faqs" },
      { label: "For Artists", href: "/support/for-artists" },
      { label: "For Curators", href: "/support/for-curators" },
      { label: "Chat", href: "/support/chat" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0e0c0c]/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo.svg"
                alt="SongRocket"
                className="h-10 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative nav-item"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 min-w-[220px] bg-[#0e0c0c]/95 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${
                        openDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/signin"
                className="px-5 py-2 text-sm font-medium text-[#FF6B35] hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/join"
                className="px-6 py-2.5 text-sm font-semibold text-white border border-[#FF6B35] rounded-full hover:bg-[#FF6B35] transition-all duration-300"
              >
                Join
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-[#0e0c0c] border-l border-white/10 transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 mt-20 p-6">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-sm text-white/70 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-3 border-t border-white/10">
              <Link
                href="/signin"
                className="block text-center py-2 text-[#FF6B35] font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/join"
                className="block text-center py-3 bg-[#FF6B35] text-white rounded-full font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
