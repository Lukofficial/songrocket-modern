"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
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

  // Use provided posts or empty array
  const displayPosts = posts?.slice(0, 3) || [];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24 lg:py-32 bg-[#0e0c0c]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Latest from the <span className="text-[#FF6B35]">Blog</span>
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              Stay updated with the latest music industry news, tips, and
              insights to help grow your career.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:text-white transition-colors group"
          >
            View All Posts
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <article
              key={post.slug}
              className="reveal-scale"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-[#FF6B35] rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
