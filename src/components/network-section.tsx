"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function NetworkSection() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2d0a3e 0%, #c93172 50%, #FF6B35 100%)",
      }}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[15rem] md:text-[20rem] lg:text-[25rem] font-bold text-white/5 whitespace-nowrap select-none pointer-events-none">
          Join the network
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Join the <span className="text-[#0e0c0c]">network</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Artists Card */}
          <div className="reveal-scale" style={{ transitionDelay: "0.1s" }}>
            <div className="glass rounded-2xl p-8 lg:p-10 text-center card-hover h-full">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Artists, labels,
                <br />
                and agencies
              </h3>
              <p className="text-white/80 mb-8">
                Easily send your music to our playlist curators. If they like
                it, they'll let you know when and how they plan to share it.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  Join Now
                </span>
              </Link>
            </div>
          </div>

          {/* Curators Card */}
          <div className="reveal-scale" style={{ transitionDelay: "0.2s" }}>
            <div className="glass rounded-2xl p-8 lg:p-10 text-center card-hover h-full">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Playlist
                <br />
                curators
              </h3>
              <p className="text-white/80 mb-8">
                Artist and music discovery made simple for playlisters, bloggers
                and record label A&R representatives.
              </p>
              <Link
                href="/for-curators/apply"
                className="inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  Join Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
