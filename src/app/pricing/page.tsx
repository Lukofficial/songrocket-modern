import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Spotify Playlist Campaigns Pricing | SongRocket",
  description: "Start a spotify campaign today, simple and legit. Pitch your song to our playlister network today in 3 simple steps.",
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="How much will my playlist campaign cost?"
          subtitle="Simple, flexible pricing for your music promotion needs"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg mb-6">
                The pitching to playlist campaign can start from as low as <span className="text-[#FF6B35] font-semibold">$3 USD</span>, and you can choose any budget you want for the genres you choose. It allows you to select the number of curators for the genres you want.
              </p>

              <p className="text-white/70 text-lg mb-6">
                For a lower budget, please make sure you are using genres that match your song. Stay tight on the genres you choose. We cover everything from hip hop to lo-fi, folk, country, and rock.
              </p>

              <p className="text-white/70 text-lg mb-8">
                The higher your budget, the more curators you can reach. Sometimes it is good to start low if you have a low budget or are unsure how the track will do. The beauty is that you can extend any previous campaign as many times as you want.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 my-16">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-[#FF6B35] my-4">$3+</div>
                <p className="text-white/60 mb-6">Perfect for testing</p>
                <ul className="text-white/70 text-left space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>1-2 genre focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>7+ days campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Basic curator reach</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-b from-[#FF6B35]/20 to-[#c93172]/20 border border-[#FF6B35]/50 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                <div className="text-4xl font-bold text-[#FF6B35] my-4">$20+</div>
                <p className="text-white/60 mb-6">For serious artists</p>
                <ul className="text-white/70 text-left space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Multiple genres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Extended campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>More curator reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <div className="text-4xl font-bold text-[#FF6B35] my-4">$50+</div>
                <p className="text-white/60 mb-6">Maximum exposure</p>
                <ul className="text-white/70 text-left space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>All genres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Maximum reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Artist spotlight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Important Notes</h3>
              <ul className="text-white/70 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35]">•</span>
                  Each campaign runs at least 7 days
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35]">•</span>
                  Similar to a subscription, but completely under your control
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35]">•</span>
                  You can extend any previous campaign as many times as you want
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35]">•</span>
                  We don't guarantee placements (against Spotify T&Cs)
                </li>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
