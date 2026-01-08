import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building, Music, Star } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Solutions | SongRocket Support",
  description: "Playlist pitching solutions for labels, artists, and agencies. Verified reviews and case studies.",
};

const solutions = [
  {
    icon: Building,
    title: "Playlist Pitching for Labels",
    description: "Labels can use SongRocket to get their music in front of more people than ever before. Create budget-based campaigns that reach new audiences worldwide.",
    features: [
      "Budget-based campaigns with extend possibilities",
      "Reach from normal playlisters to influencer YouTubers or TikTokers",
      "Multi-user accounts for team collaboration",
      "Artist Spotlight on social media for matching tracks",
    ],
    href: "/support/for-artists",
  },
  {
    icon: Music,
    title: "Artist Pitching For Playlists",
    description: "Independent artists can pitch their music directly to our curated network of playlist curators. Build your audience organically.",
    features: [
      "Start from as low as $3 USD",
      "Target specific genres for better matches",
      "Extend campaigns as many times as you want",
      "No guarantee on placements (Spotify compliant)",
    ],
    href: "/support/for-artists",
  },
  {
    icon: Star,
    title: "Verified SongRocket Reviews",
    description: "Read verified reviews from trusted music industry brands and artists who have used our platform.",
    features: [
      "Real testimonials from real artists",
      "Case studies with actual results",
      "Industry brand endorsements",
      "Transparent success stories",
    ],
    href: "/support/faqs/case-study",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Solutions"
          subtitle="Playlist pitching solutions for every need"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Support
            </Link>

            {/* Solutions Cards */}
            <div className="space-y-8 mb-12">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF6B35]/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                      <p className="text-white/70 mb-6">{solution.description}</p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-white/60">
                            <span className="text-[#FF6B35]">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={solution.href}
                        className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clients */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Trusted by Major Clients</h3>
              <div className="flex justify-center">
                <img
                  src="https://ext.same-assets.com/2308474533/293397193.png"
                  alt="SongRocket Clients - Sony Music, Spinnin' Records, Cat Music, mau5trap, Global Records, Ticoray, Point Blank Music School"
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to get started?</h3>
              <p className="text-white/70 mb-6">
                Join thousands of artists and labels who trust SongRocket for their playlist promotion.
              </p>
              <Link
                href="https://app.songrocket.com/register"
                className="btn-primary inline-flex items-center"
                target="_blank"
              >
                Start Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
