import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Apply as Curator | SongRocket",
  description: "Join our network of curators and start earning money for reviewing music.",
};

export default function ApplyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Apply as Curator"
          subtitle="Join our network and start earning"
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

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
              <div className="space-y-4">
                {[
                  "Active Spotify playlist with engaged followers",
                  "Minimum 100 followers on your playlist",
                  "Regular playlist updates (at least monthly)",
                  "Genuine, non-botted followers",
                  "Passion for discovering new music",
                ].map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">What You'll Earn</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">$1-$5</div>
                  <div className="text-white/60">100-1K Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">$5-$10</div>
                  <div className="text-white/60">1K-10K Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">$10-$20</div>
                  <div className="text-white/60">10K+ Followers</div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">How to Apply</h2>
              <ol className="text-white/70 space-y-4">
                <li>
                  <strong className="text-white">1. Create an Account</strong>
                  <p>Sign up for a free SongRocket account.</p>
                </li>
                <li>
                  <strong className="text-white">2. Connect Your Spotify</strong>
                  <p>Link your Spotify account and select your playlists.</p>
                </li>
                <li>
                  <strong className="text-white">3. Submit for Review</strong>
                  <p>Our team will manually review your playlists for quality and authenticity.</p>
                </li>
                <li>
                  <strong className="text-white">4. Start Earning</strong>
                  <p>Once approved, you'll start receiving song submissions to review.</p>
                </li>
              </ol>
            </div>

            <div className="text-center">
              <Link
                href="/join"
                className="btn-primary inline-flex items-center gap-2"
                target="_blank"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
