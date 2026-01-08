import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About SongRocket",
  description: "Everything you need to know about us. SongRocket is building a huge network of music curators and influencers.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="About Us"
          subtitle="Connecting independent music makers with listeners around the globe"
        />

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  It's hard to imagine a world without playlists
                </h2>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  They power the music we hear online, on the radio, on TV, in shops, airports, restaurants, and gyms. What if you could get your music into these places and beyond?
                </p>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  With so many music supervisors listening to playlists to discover new music and artists, there's a chance of getting picked up and going viral. The more song engagements you have, the better your chances.
                </p>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  That's where we come in. <span className="text-[#FF6B35] font-semibold">SongRocket is building a huge network of music curators and influencers</span> to get your songs into as many playlists as possible.
                </p>
                <p className="text-white/70 text-lg mb-8">
                  So what are you waiting for?
                </p>
                <Link
                  href="https://app.songrocket.com/register"
                  className="btn-primary inline-flex items-center gap-2"
                  target="_blank"
                >
                  Join SongRocket
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="reveal-right">
                <img
                  src="https://ext.same-assets.com/1889294069/2024782659.jpeg"
                  alt="Artist with headphones"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-[#0e0c0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left order-2 lg:order-1">
                <img
                  src="https://ext.same-assets.com/1889294069/3714081268.jpeg"
                  alt="Luk - Founder"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="reveal-right order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Founder</span>
                </h2>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Luk discovered his love for electronic music back in 1997 when his older brother handed down his DJ equipment and taught him to spin vinyl. Initially Luk was obsessed with Trance, Techno, Acid, and Progressive, but his deep passion for other genres grew.
                </p>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Through his passion, Luk progressed his self-taught skills of Electro and House, to play in some top clubs in Switzerland. His presence behind the mixer consistently creating an enthusiastic and attentive crowd.
                </p>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  By the end of December 2018, Luk started to release his own tracks and has over <span className="text-[#FF6B35] font-semibold">3.5 million streams</span> on Spotify and other platforms only so far - a significant accomplishment for an independent artist. His goal is now with SongRocket to connect independent music makers with listeners around the globe.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://open.spotify.com/user/lukofficial?si=GdJPMByWTnaX6tExRFaQUw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    Follow on Spotify
                  </a>
                  <a
                    href="https://soundcloud.com/luk_music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    Follow on SoundCloud
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Network CTA */}
        <section className="py-20 bg-gradient-to-r from-[#c93172] via-transparent to-[#970fb4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Artists, labels, and agencies
                </h3>
                <p className="text-white/80 mb-6">
                  Easily send your music to our playlist curators. If they like it, they'll let you know when and how they plan to share it.
                </p>
                <Link
                  href="https://app.songrocket.com/register"
                  className="btn-outline border-white text-white hover:bg-white hover:text-[#0e0c0c] inline-flex items-center"
                  target="_blank"
                >
                  Join Now
                </Link>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Playlist curators
                </h3>
                <p className="text-white/80 mb-6">
                  Artist and music discovery made simple for playlisters, bloggers and record label A&R representatives.
                </p>
                <Link
                  href="https://app.songrocket.com/register"
                  className="btn-outline border-white text-white hover:bg-white hover:text-[#0e0c0c] inline-flex items-center"
                  target="_blank"
                >
                  Join Now
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
