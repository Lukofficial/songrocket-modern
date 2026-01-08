import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "SongRocket Records - The Music Label | SongRocket",
  description: "Record label of SongRocket, more than just a label. Send us your demo now. With focus on artist development",
};

export default function RecordLabelPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="SongRocket Records"
          subtitle="A record label with focusing on artist development"
        />

        {/* Connect Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Connect</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Let's start the journey<br />with your music
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  With Sony as a direct partner we believe developing a musician artist is a long and arduous process. It requires dedication, hard work, and creativity to take an aspiring musician from obscurity to stardom. This can be especially true for independent artists who don't have the backing of a major label or production company behind them.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src="https://ext.same-assets.com/1889294069/1289339205.png"
                    alt="Sony Music & SongRocket Records"
                    className="h-16"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/record-label/learn-more"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/record-label/demo-submission"
                    className="btn-outline inline-flex items-center justify-center gap-2"
                  >
                    Demo Submission
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="reveal-right">
                <img
                  src="https://ext.same-assets.com/1889294069/627716214.jpeg"
                  alt="Artist performing"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-[#c93172]/20 via-[#970fb4]/20 to-[#FF6B35]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="reveal">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Artist development
                </h3>
                <p className="text-white/70">
                  Build a professional career in the music industry, this process involves more than just a song release
                </p>
              </div>
              <div className="reveal">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Clear direction and focus areas
                </h3>
                <p className="text-white/70">
                  Includes elements like branding, marketing, music PR and social media. We will help you find your path
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founded Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0">
            <img
              src="https://ext.same-assets.com/1889294069/2760096291.jpeg"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Founded by artists for artists
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
