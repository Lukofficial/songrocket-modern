import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Headphones, Users, HelpCircle, Plane, Wifi } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Spotify Promotion Network for Curators | SongRocket",
  description: "Get your passive income by receiving tracks to review for your playlist. Not every playlist is able to join.",
};

export default function ForCuratorsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Discover new artists and monetise your playlist"
          subtitle="You deserve great music! That's why you are successful with your playlist. SongRocket is the best way to get the newest and most popular songs first."
        />

        {/* Listen Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Listen</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Listen, write and earn while writing reviews
                </h3>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Our world is changing; more jobs are going digital. That's why we strongly believe curators, or music influencers, play a big role in this music industry. Generate passive income by reviewing songs.
                </p>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Stand out from the crowd and choose songs you have never heard before, which will make your playlist as unique as you are.
                </p>
                <Link
                  href="https://app.songrocket.com/register"
                  className="btn-primary inline-flex items-center gap-2"
                  target="_blank"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="reveal-right">
                <img
                  src="https://ext.same-assets.com/1889294069/478944833.jpeg"
                  alt="Curator listening"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="gradient-text">Great features</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Review and earn</h3>
                <p className="text-white/60">
                  We would call you simply "Music Influencers". We know how hard is getting people following playlists. So that's why you deserve to get paid.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid payouts</h3>
                <p className="text-white/60">
                  Payouts are made instantly. Start earning from $1 to $20 per review depending on the number of followers you have and how active your playlist is.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <Headphones className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">A&R and Labels</h3>
                <p className="text-white/60">
                  Pick up new talented artists like singers, bands, producers, songwriters and composers waiting to get exposure and hopefully signed.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <HelpCircle className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fanatical support</h3>
                <p className="text-white/60">
                  It's important to help you in any case. We are here for you, and should get a respond on the same day.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Get more followers</h3>
                <p className="text-white/60">
                  Once you approve a song, get the artist to engage with the playlist, for example sharing on social media. Any artist you help, they could help you too.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <Plane className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Vacation mode</h3>
                <p className="text-white/60">
                  When you're away, choose this mode to pause submissions during that time. Simply to turn it off on your return and get started again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for new music?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.songrocket.com/register"
                className="btn-primary inline-flex items-center justify-center gap-2"
                target="_blank"
              >
                Join Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/support"
                className="btn-outline inline-flex items-center justify-center"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
