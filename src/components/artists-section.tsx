"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ArtistsSection() {
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
      id="for-artists"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0e0c0c] overflow-hidden"
    >
      {/* Background Text */}
      <div className="bg-text absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.02]">
        exposure
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B35] reveal-left">
              Artists
            </h2>

            <p className="mt-8 text-lg text-white/80 leading-relaxed reveal-left" style={{ transitionDelay: "0.1s" }}>
              Pitch and submit your new or old song release to our carefully
              chosen Spotify playlist curators and music influencers. If they
              like what they hear, they'll let you know and place it on the
              playlist. If not, you'll know what you can do to improve your
              song.
            </p>

            <p className="mt-4 text-lg text-white/80 leading-relaxed reveal-left" style={{ transitionDelay: "0.2s" }}>
              The easiest pitching service for artist labels and management
              services.
            </p>

            <div className="mt-10 space-y-4 reveal-left" style={{ transitionDelay: "0.3s" }}>
              <Link
                href="/for-artists"
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
                  href="/join"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="arrow-btn bg-[#c93172]">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-[#c93172] uppercase tracking-wider group-hover:text-white transition-colors">
                    Start a Campaign
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 reveal-right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden card-hover">
                <img
                  src="/images/artist.jpg"
                  alt="Artist with guitar"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0c]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 animate-float">
                <div className="text-2xl font-bold text-[#FF6B35]">50k+</div>
                <div className="text-sm text-white/70">Artists Connected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
