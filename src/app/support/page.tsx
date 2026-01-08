import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Users, Music, Lightbulb, Building, Award, Handshake } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SupportSearch } from "@/components/support-search";

export const metadata: Metadata = {
  title: "Support & FAQs | SongRocket",
  description: "Get help with SongRocket. Find answers to frequently asked questions.",
};

const supportCategories = [
  {
    icon: Users,
    title: "Curators",
    description: "How to load playlists, monetize, and become a great curator",
    links: [
      { title: "How to load Playlists or music to playlister", href: "/support/for-curators" },
      { title: "How to monetize a Spotify playlist", href: "/support/for-curators" },
      { title: "5 Steps To Be The Greatest Playlist Curator", href: "/support/for-curators" },
    ],
    viewAllHref: "/support/for-curators",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Common questions about how SongRocket works",
    links: [
      { title: "How does it work?", href: "/support/faqs" },
      { title: "Can I ReRun a finished campaign?", href: "/support/faqs" },
      { title: "Case Study & SongRocket Review", href: "/support/faqs" },
    ],
    viewAllHref: "/support/faqs",
  },
  {
    icon: Music,
    title: "Artists, Labels, Management",
    description: "Everything about campaigns and pricing",
    links: [
      { title: "How much will my playlist campaign cost?", href: "/pricing" },
      { title: "SoundCloud for Artists Updates", href: "/support/for-artists" },
      { title: "Can I trust the platform?", href: "/support/for-artists" },
    ],
    viewAllHref: "/support/for-artists",
  },
  {
    icon: Lightbulb,
    title: "General Tips & Music Industry",
    description: "Industry insights and best practices",
    links: [
      { title: "Spotify Removes Streams", href: "/support/general-tips" },
      { title: "Playlist Promotion Services comparison", href: "/support/general-tips" },
      { title: "Playlisting Service and Pitching", href: "/support/general-tips" },
    ],
    viewAllHref: "/support/general-tips",
  },
  {
    icon: Building,
    title: "SongRocket Records",
    description: "About our record label",
    links: [
      { title: "Submit Your Music", href: "/record-label/demo-submission" },
      { title: "About SongRocket Records", href: "/record-label/learn-more" },
    ],
    viewAllHref: "/record-label",
  },
  {
    icon: Award,
    title: "Solutions",
    description: "Verified reviews and pitching guides",
    links: [
      { title: "Verified SongRocket Reviews", href: "/support/solutions" },
      { title: "Playlist Pitching for Labels", href: "/support/solutions" },
      { title: "Artist Pitching For Playlists", href: "/support/solutions" },
    ],
    viewAllHref: "/support/solutions",
  },
  {
    icon: Handshake,
    title: "Affiliate Partner",
    description: "Earn by referring friends",
    links: [
      { title: "Refer to a friend or network", href: "/support/affiliate" },
    ],
    viewAllHref: "/support/affiliate",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Can we help?"
          subtitle="Find answers to your questions or get in touch with our support team"
        />

        {/* Search */}
        <section className="py-8">
          <div className="px-4">
            <SupportSearch />
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF6B35]/50 transition-all"
                >
                  <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-[#FF6B35] transition-colors text-sm"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.viewAllHref}
                    className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors text-sm font-medium"
                  >
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
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
