import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Music, Star, Zap } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Discover New Music | SongRocket",
  description: "Discover the newest and most popular songs before anyone else. Get paid to review music.",
};

export default function DiscoverPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Discover New Music"
          subtitle="Be the first to hear the next big hit"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/for-curators"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to For Curators
            </Link>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <Music className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fresh Tracks</h3>
                <p className="text-white/60">
                  Get access to unreleased and newly released tracks from emerging artists.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <Star className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Quality Music</h3>
                <p className="text-white/60">
                  All submissions go through our AI-powered quality check before reaching you.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <Zap className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Get Paid</h3>
                <p className="text-white/60">
                  Earn money for every song you review and add to your playlist.
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">How Discovery Works</h2>

              <p className="text-white/70 text-lg mb-6">
                You deserve great music! That's why you are successful with your playlist. SongRocket is the best way to get the newest and most popular songs first.
              </p>

              <p className="text-white/70 text-lg mb-6">
                Stand out from the crowd and choose songs you have never heard before, which will make your playlist as unique as you are.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <ul className="text-white/70 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35]">•</span>
                    Access to thousands of new tracks daily
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35]">•</span>
                    Filter by genre to match your playlist
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35]">•</span>
                    Earn $1-$20 per review
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35]">•</span>
                    Connect with talented artists worldwide
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link
                  href="/join"
                  className="btn-primary inline-flex items-center gap-2"
                  target="_blank"
                >
                  Start Discovering
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
