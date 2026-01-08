import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, DollarSign, Settings } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Legit Spotify Playlist Promotion Service | SongRocket",
  description: "Playlist Curator Network. Pitch your song to top 10 spotify playlister curator network, created by an artist. For PR Company, Manager, Music Label, Agencies and Artists.",
};

export default function ForArtistsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Connect with active and legit playlist curators"
          subtitle="Stop searching for Spotify playlist curators! We have a robust network of over 31 million engaged Spotify playlist followers, expanding every day. Concentrate on what truly matters: your music creation."
        />

        {/* Exposure Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Exposure</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  How to reach new fans and listeners? Build your fanbase
                </h3>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Ready to promote your new song or upcoming release? Pitch it to Spotify playlist curators for a chance to get featured! Our streamlined playlist pitching process makes it easier than ever. Plus, you could be considered for editorial playlists down the line.
                </p>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Don't wait, start your promotional campaign today! You can also pitch from an older release, as we all know... Every song has a chance to get viral and doesn't have an expiry date to get heard from the audience you deserve!
                </p>
                <Link
                  href="https://app.songrocket.com/register"
                  className="btn-primary inline-flex items-center gap-2"
                  target="_blank"
                >
                  Start a Campaign
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="reveal-right">
                <img
                  src="https://ext.same-assets.com/1889294069/4063450113.jpeg"
                  alt="Artist exposure"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-gradient-to-b from-[#c93172] via-[#970fb4] to-[#FF6B35]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="reveal">
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-white/30 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload</h3>
                <p className="text-white/80">
                  Upload your song and add campaign information
                </p>
              </div>
              <div className="reveal">
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-white/30 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Specify</h3>
                <p className="text-white/80">
                  Set a date to send your song to playlist curators
                </p>
              </div>
              <div className="reveal">
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-white/30 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Create</h3>
                <p className="text-white/80">
                  Make payment, sit back and focus on your next chart-topper
                </p>
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
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <Target className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Whatever your genre</h3>
                <p className="text-white/60">
                  We have music influencers around the globe curating spotify playlists for EDM, Rock, Pop, Drum&Bass, RnB, Trance, Techno, Lo-Fi, Hip-Hop, R&B and many more genres and sub genres.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <Settings className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Individual campaigns</h3>
                <p className="text-white/60">
                  Choose what pricing budget you have to run your spotify campaign with us. You can simply target through genre so that your song is not targeting any other genre than your actual track is.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Flexible pricing</h3>
                <p className="text-white/60">
                  Simple, flexible pricing strategy for your music allows you to join millions of listeners around the world. Start your spotify playlist campaign now.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to launch?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              In 3 simple steps you are ready to SongRocket with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.songrocket.com/register"
                className="btn-primary inline-flex items-center justify-center gap-2"
                target="_blank"
              >
                Start a Campaign
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
