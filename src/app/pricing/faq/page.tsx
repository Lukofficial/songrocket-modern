import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing FAQ | SongRocket",
  description: "Frequently asked questions about SongRocket pricing and campaigns.",
};

const faqs = [
  {
    question: "How much will my playlist campaign cost?",
    answer: "The pitching to playlist campaign can start from as low as $3 USD, and you can choose any budget you want for the genres you choose.",
  },
  {
    question: "How long does a campaign run?",
    answer: "Each campaign runs at least 7 days. That's the time curators can reply. If someone would miss it, the campaign goes into extended mode for another 7 days.",
  },
  {
    question: "Can I extend my campaign?",
    answer: "Yes! You can extend any previous campaign as many times as you want. It's similar to a subscription, but completely under your control.",
  },
  {
    question: "What payment options are available?",
    answer: "We accept major credit cards, PayPal, and various other payment methods through our secure payment processor.",
  },
  {
    question: "Is there any guarantee on placements?",
    answer: "No, we don't guarantee any placements, as this is against Spotify's Terms & Conditions. However, our curators carefully review each submission.",
  },
  {
    question: "Can I pitch older releases?",
    answer: "Yes! Older releases can be pitched too. We don't show any release date to curators. Every song has a chance to get viral!",
  },
];

export default function PricingFaqPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Pricing FAQ"
          subtitle="Frequently asked questions about our pricing"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Pricing
            </Link>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-[#FF6B35] transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/70 mb-4">Still have questions?</p>
              <Link
                href="/support"
                className="btn-outline inline-flex items-center"
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
