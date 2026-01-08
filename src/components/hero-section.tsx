"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Count-up stat component
function CountUpStat({
  end,
  suffix,
  decimals = 0,
  label,
}: {
  end: number;
  suffix: string;
  decimals?: number;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = end * easeOutQuart;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end]);

  const formattedValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#FF6B35]">
        {formattedValue}{suffix}
      </div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.setProperty("--scroll", String(scrollY));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle video load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0c0c]"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-70" : "opacity-0"
          }`}
          poster="/images/hero-bg.jpg"
        >
          <source
            src="https://ext.same-assets.com/1889294069/2558279518.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback Image (shown while video loads) */}
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0" : "opacity-60"
          }`}
          loading="eager"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0c0c]/70 via-[#0e0c0c]/30 to-[#0e0c0c]" />

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 wave-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="hero-title animate-fade-in-up">
          <span className="text-white">Get heard.</span>
          <br />
          <span className="gradient-text">Worldwide.</span>
        </h1>

        <p
          className="hero-subtitle max-w-3xl mx-auto mt-8 text-white/80 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Real music promotion. Connect with the top music Influencers and
          Spotify playlists including SoundCloud around the globe. AI secured
          platform with a coverage to date{" "}
          <span className="text-[#FF6B35] font-semibold">31.2 million</span>{" "}
          follower reach within{" "}
          <span className="text-[#FF6B35] font-semibold">1.4k unique</span> fake
          checked playlists. Best music marketing playlist service for Artists
          and Labels.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link href="#for-artists" className="btn-primary group inline-flex items-center gap-2">
            Discover
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/join" className="btn-outline">
            Join Now
          </Link>
        </div>

        {/* Stats with Count-up Animation */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <CountUpStat end={31.2} suffix="M+" decimals={1} label="Follower Reach" />
          <CountUpStat end={1.4} suffix="k+" decimals={1} label="Unique Playlists" />
          <CountUpStat end={50} suffix="k+" decimals={0} label="Artists Helped" />
          <CountUpStat end={35} suffix="%" decimals={0} label="Approve Rate" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#FF6B35] rounded-full" />
        </div>
      </div>
    </section>
  );
}
