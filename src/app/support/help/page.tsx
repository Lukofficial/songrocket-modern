import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Help Center | SongRocket",
  description: "Find answers to all your questions about SongRocket.",
};

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How does it work?",
        answer: "SongRocket connects artists with playlist curators. Artists submit their songs, curators review them, and if they like them, they add them to their playlists. Simple!",
      },
      {
        question: "How do I start a campaign?",
        answer: "Create an account, upload your song, select your genres, set your budget, and launch your campaign. It takes less than 5 minutes!",
      },
      {
        question: "What links can I use to pitch my song?",
        answer: "You can use Spotify, SoundCloud, or YouTube links. We recommend Spotify for the best results.",
      },
    ],
  },
  {
    title: "Campaigns & Pricing",
    faqs: [
      {
        question: "How much will my playlist campaign cost?",
        answer: "Campaigns start from as low as $3 USD. You can choose any budget based on your needs and the number of curators you want to reach.",
      },
      {
        question: "How long does a campaign run?",
        answer: "Each campaign runs at least 7 days. If curators haven't finished reviewing, it extends automatically.",
      },
      {
        question: "Can I ReRun a finished campaign? Or extend it?",
        answer: "Yes! You can extend any previous campaign as many times as you want. It's completely under your control.",
      },
    ],
  },
  {
    title: "For Curators",
    faqs: [
      {
        question: "How to load Playlists or music to playlister?",
        answer: "Connect your Spotify account, select your playlists, and they'll be automatically loaded. You can manage multiple playlists.",
      },
      {
        question: "How to monetize a Spotify playlist?",
        answer: "Once approved as a curator, you'll receive song submissions to review. You earn $1-$20 per review based on your playlist size.",
      },
      {
        question: "What are the requirements to become a curator?",
        answer: "You need an active Spotify playlist with at least 100 genuine followers. We manually review all applications.",
      },
    ],
  },
  {
    title: "Trust & Safety",
    faqs: [
      {
        question: "Can I trust the platform?",
        answer: "Absolutely! We're registered in Switzerland (CHE-137.124.111), and all our playlists are manually verified and fake-checked.",
      },
      {
        question: "How to identify spot fake streams and playlists?",
        answer: "We use AI and manual checks to verify all playlists. Look for engagement rates, follower growth patterns, and playlist activity.",
      },
      {
        question: "Is there any guarantee how many plays I get?",
        answer: "No, we don't guarantee placements or plays as this goes against Spotify's Terms & Conditions. Results vary based on your music and genre.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Help Center"
          subtitle="Find answers to frequently asked questions"
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

            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-[#FF6B35] transition-transform group-open:rotate-180 flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-white/70">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-white/70 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Link
                href="/support/chat"
                className="btn-primary inline-flex items-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
