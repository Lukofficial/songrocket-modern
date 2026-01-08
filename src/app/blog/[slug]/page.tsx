import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { marked } from "marked";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  const htmlContent = await marked(post.content);

  // Format date for display
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#0e0c0c]">
      <Navigation />

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#FF6B35] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-[#FF6B35] rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Author */}
          {post.author && (
            <p className="text-white/60 mb-6">By {post.author}</p>
          )}

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#FF6B35] prose-a:no-underline hover:prose-a:underline
              prose-ul:text-white/80 prose-ol:text-white/80
              prose-li:mb-2
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-white/70">Share this article:</span>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-[#FF6B35] hover:bg-white/10 transition-all"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
