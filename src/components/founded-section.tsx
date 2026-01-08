"use client";

import { useEffect, useRef } from "react";

export function FoundedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0e0c0c]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white reveal">
          Founded by artists for artists
        </h2>
      </div>
    </section>
  );
}
