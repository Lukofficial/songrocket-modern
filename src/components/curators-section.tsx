"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CuratorsSection() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="for-curators"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0e0c0c] overflow-hidden"
    >
      {/* Background Text */}
      <div className="bg-text absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.02]">
        connect
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden card-hover">
                <img
                  src="/images/curator.jpg"
                  alt="Curator listening to music"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0c]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-bold text-[#c93172]">1.4k+</div>
                <div className="text-sm text-white/70">Active Curators</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B35] reveal-right">
              Curators
            </h2>

            <p className="mt-8 text-lg text-white/80 leading-relaxed reveal-right" style={{ transitionDelay: "0.1s" }}>
              How can you curate incredible Spotify playlists that attract
              listeners and set you apart from the crowd? It's not about the
              titles you use; it's all about the music.
            </p>

            <p className="mt-4 text-lg text-white/80 leading-relaxed reveal-right" style={{ transitionDelay: "0.2s" }}>
              There are some incredible independent artists out there just
              waiting to be heard. Let's connect! and give them a chance in the
              industry while helping you craft a unique playlist.
            </p>

            <div className="mt-10 space-y-4 reveal-right" style={{ transitionDelay: "0.3s" }}>
              <Link
                href="/for-curators"
                className="inline-flex items-center gap-3 group"
              >
                <span className="arrow-btn">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wider group-hover:text-white transition-colors">
                  Learn More
                </span>
              </Link>

              <div>
                <Link
                  href="/for-curators/apply"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="arrow-btn bg-[#c93172]">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-[#c93172] uppercase tracking-wider group-hover:text-white transition-colors">
                    Join Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
