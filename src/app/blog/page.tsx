import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Music Industry Insights & Tips",
  description:
    "Stay updated with the latest music industry news, Spotify playlist tips, artist promotion strategies, and insights to help grow your music career.",
  openGraph: {
    title: "SongRocket Blog - Music Industry Insights",
    description:
      "The latest tips and insights for artists and curators in the music industry.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  // Format dates for display
  const formattedPosts = posts.map((post) => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));

  return (
    <main className="min-h-screen bg-[#0e0c0c]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            The <span className="text-[#FF6B35]">Blog</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 text-center max-w-2xl mx-auto">
            Latest insights, tips, and news from the music industry to help you
            grow as an artist or curator.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formattedPosts.map((post) => (
              <article key={post.slug}>
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
                    {post.formattedDate}
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold text-sm group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
