import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ArtistsSection } from "@/components/artists-section";
import { CuratorsSection } from "@/components/curators-section";
import { NetworkSection } from "@/components/network-section";
import { FoundedSection } from "@/components/founded-section";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllBlogPosts();

  // Format dates for display
  const formattedPosts = posts.map((post) => ({
    ...post,
    date: new Date(post.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));

  return (
    <main className="min-h-screen bg-[#0e0c0c]">
      <Navigation />
      <HeroSection />
      <ArtistsSection />
      <CuratorsSection />
      <NetworkSection />
      <FoundedSection />
      <BlogSection posts={formattedPosts} />
      <Footer />
    </main>
  );
}
