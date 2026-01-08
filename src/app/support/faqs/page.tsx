import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExpandableArticles } from "@/components/expandable-articles";

export const metadata: Metadata = {
  title: "FAQs | SongRocket Support",
  description: "Frequently asked questions about how SongRocket works. Learn how to create campaigns, become a curator, and more.",
};

const faqArticles = [
  {
    id: "how-does-it-work",
    title: "How does it work?",
    content: `In three simple steps, you can create a campaign for an already-released song or a track prior release. This will be pitched to our carefully chosen curator network.

There is an onboarding process which takes place to avoid fake playlists/curators to be approved, it's not automated like on other platforms.

After you set the campaign and launch date you are ready. Curators have at least 7 days to review the song you submitted.

1. Create an account and add your track
2. Select genres and set your budget
3. Launch and watch the results come in`,
  },
  {
    id: "rerun-extend",
    title: "Can I ReRun a finished campaign? Or extend it?",
    content: `Yes, once a campaign has finished you can extend it as many times as you want. This is similar to a subscription but completely under your control.

You can test low, go high later, or run it on a monthly basis. Each campaign extension gives you access to more curators who haven't seen your track yet.

To extend a campaign:
1. Go to your Campaigns dashboard
2. Find the completed campaign
3. Click "Extend Campaign"
4. Choose your new budget
5. Your campaign continues with fresh curators`,
  },
  {
    id: "become-curator",
    title: "How can I become a curator / music influencer?",
    content: `Create an account and connect your Spotify. Go to Settings and make sure your Spotify user with the playlist is connected.

Once you see 'Playlists' in the menu, click 'Refresh Playlist' and contact us for approval.

Requirements to become a curator:
- Active Spotify playlist(s) with genuine followers
- Regular playlist updates
- No history of fake followers or bot activity
- Responsive to submissions

Curators earn money by reviewing music submissions. The more playlists and followers you have, the more you can earn.`,
  },
  {
    id: "what-is-curator",
    title: "What is a curator?",
    content: `A curator (also known as a music influencer or playlister) is someone who creates and manages Spotify playlists. Curators review and add songs to their playlists, helping artists reach new audiences.

On SongRocket, curators:
- Receive music submissions from artists
- Review tracks in their preferred genres
- Add songs they like to their playlists
- Get paid for reviewing music
- Help artists grow their audience`,
  },
  {
    id: "gain-followers",
    title: "How can I gain more playlist followers?",
    content: `Focus on these strategies to grow your playlist:

1. Pick a specific niche or genre - be known for something
2. Maintain consistent quality - only add songs that fit
3. Update regularly - fresh content keeps followers engaged
4. Promote on social media - share your playlist everywhere
5. Collaborate with artists - they'll share when featured
6. Engage with your audience - respond to comments
7. Cross-promote with other curators

When you approve songs on SongRocket, encourage artists to share and promote your playlist.`,
  },
  {
    id: "contact-support",
    title: "How do I contact support?",
    content: `You can reach our support team through:

1. Live Chat - Click the chat icon on our website
2. Email - support@songrocket.com
3. Social Media - @songrocket_ on Instagram and X

Our team typically responds within 24 hours. For urgent issues, live chat is the fastest option.`,
  },
];

export default function FaqsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="FAQs"
          subtitle="Answers to the most common questions about SongRocket"
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

            {/* Featured: Case Study */}
            <Link
              href="/support/faqs/case-study"
              className="block bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 mb-12 hover:border-[#FF6B35]/50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                    Case Study & SongRocket Review
                  </h2>
                  <p className="text-white/70">
                    See real success stories from artists and labels who have used our platform.
                    Includes campaign results, Spotify analytics, and client testimonials.
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#FF6B35] flex-shrink-0 ml-4" />
              </div>
            </Link>

            {/* All FAQs - Expandable with hash URL support */}
            <ExpandableArticles articles={faqArticles} />

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
