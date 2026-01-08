import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pitch to Spotify Playlists | SongRocket",
  description: "Pitch your tunes to Spotify Playlists and get a chance to build your monthly listeners on Spotify",
};

export default function PitchSpotifyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Pitch to Spotify Playlists"
          subtitle="Get your music heard by millions of listeners worldwide"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/for-artists"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to For Artists
            </Link>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>

              <p className="text-white/70 text-lg mb-6">
                Stop searching for Spotify playlist curators! We have a robust network of over 31 million engaged Spotify playlist followers, expanding every day. Concentrate on what truly matters: your music creation.
              </p>

              <p className="text-white/70 text-lg mb-6">
                Pitch your tunes to Spotify Playlists and get a chance to build your monthly listeners on Spotify. Our streamlined playlist pitching process makes it easier than ever.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">The Process</h3>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Upload Your Song</h4>
                    <p className="text-white/70">
                      Upload your song and add campaign information. Choose your genres carefully to match your track.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Set Your Campaign</h4>
                    <p className="text-white/70">
                      Choose your budget and set a date to send your song to playlist curators. Higher budgets reach more curators.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Get Featured</h4>
                    <p className="text-white/70">
                      Make payment, sit back and focus on your next chart-topper. Curators will review and potentially add your song to their playlists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Important Notes</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• Each campaign runs at least 7 days</li>
                  <li>• You can extend campaigns as many times as you want</li>
                  <li>• We don't guarantee placements (against Spotify T&Cs)</li>
                  <li>• Older releases can be pitched too!</li>
                </ul>
              </div>

              <div className="text-center">
                <Link
                  href="/join"
                  className="btn-primary inline-flex items-center gap-2"
                  target="_blank"
                >
                  Start Your Campaign
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
