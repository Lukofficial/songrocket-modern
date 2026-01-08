"use client";

import { useEffect, useRef } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export function PageHeader({ title, subtitle, gradient = true }: PageHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        headerRef.current.style.setProperty("--scroll", String(scrollY * 0.3));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={headerRef}
      className="relative pt-32 pb-20 overflow-hidden bg-[#0e0c0c]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#FF6B35]/20 to-transparent opacity-50 blur-3xl" />
      </div>

      {/* Animated Wave Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {gradient ? (
            <span className="gradient-text">{title}</span>
          ) : (
            <span className="text-white">{title}</span>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
