import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Music, Users, Briefcase, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About SongRocket Records | SongRocket",
  description: "Learn more about SongRocket Records and our partnership with Sony Music. We focus on artist development and helping independent artists reach global audiences.",
};

export default function LearnMorePage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="About SongRocket Records"
          subtitle="More than just a label - We're your partner in success"
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/record-label"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Record Label
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Partnership with <span className="gradient-text">Sony Music</span>
                </h2>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  As a direct partner with Sony Music, we believe developing a musician artist is a long and arduous process. It requires dedication, hard work, and creativity to take an aspiring musician from obscurity to stardom.
                </p>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  This can be especially true for independent artists who don't have the backing of a major label or production company behind them. That's where we come in.
                </p>
                <img
                  src="https://ext.same-assets.com/1889294069/1289339205.png"
                  alt="Sony Music & SongRocket Records"
                  className="h-20"
                />
              </div>
              <div>
                <img
                  src="https://ext.same-assets.com/1889294069/4002073208.jpeg"
                  alt="Music production"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: Music,
                  title: "Artist Development",
                  description: "Build a professional career in the music industry with comprehensive support.",
                },
                {
                  icon: Users,
                  title: "Global Network",
                  description: "Access to our network of curators, influencers, and industry professionals.",
                },
                {
                  icon: Briefcase,
                  title: "Branding & Marketing",
                  description: "Professional branding, marketing, music PR and social media strategies.",
                },
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description: "Clear direction and focus areas to help you find your path to success.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Submit your demo today and take the first step towards your music career with SongRocket Records.
              </p>
              <Link
                href="/record-label/demo-submission"
                className="btn-primary inline-flex items-center gap-2"
              >
                Submit Your Demo
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
