"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinksLeft = [
  { label: "Home", href: "/" },
  { label: "Artists", href: "/for-artists" },
  { label: "Curators", href: "/for-curators" },
  { label: "Pricing", href: "/pricing" },
];

const footerLinksRight = [
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/support/faqs" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0e0c0c]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Centered Logo */}
        <div className="flex justify-center mb-12">
          <Link href="/">
            <img
              src="/images/logo-footer.svg"
              alt="SongRocket"
              className="h-20"
            />
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Mission Statement - Left */}
          <div className="text-white/80 text-sm leading-relaxed">
            Our goal is to connect independent music makers with listeners
            around the globe. So they can focus on what really matters...
            Making music.
          </div>

          {/* Links Column 1 - Center Left */}
          <div className="flex justify-center">
            <ul className="space-y-3">
              {footerLinksLeft.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-3 text-white hover:text-[#FF6B35] transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 - Center Right */}
          <div className="flex justify-center md:justify-end">
            <ul className="space-y-3">
              {footerLinksRight.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-3 text-white hover:text-[#FF6B35] transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons - Centered */}
        <div className="flex justify-center gap-4 mt-16">
          <a
            href="https://soundcloud.com/luk_music"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            aria-label="SoundCloud"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/songrocket_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/songrocket_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            aria-label="X"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://open.spotify.com/user/lukofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Spotify"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              SongRocket is an independently owned and operated business and is
              not affiliated in any way with Spotify. Copyright © 2020 - 2026
              SongRocket. All rights reserved. Registered in Switzerland,
              company reg no. CHE-137.124.111
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/terms"
                className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-wider"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-wider"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
