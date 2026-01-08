import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExpandableArticles } from "@/components/expandable-articles";

export const metadata: Metadata = {
  title: "Curators Support | SongRocket",
  description: "Help and guides for playlist curators. Learn how to load playlists, monetize your Spotify playlist, and become a great curator.",
};

const curatorArticles = [
  {
    id: "how-to-load",
    title: "How to load Playlists or music to playlister",
    content: `1. Create an account (same account as artist/label). Dashboard will change once you go to "Settings" and connect your Spotify user with the playlist.

2. Now you should see "Playlists" in the left side menu once you verify your email. Click "Refresh Playlist" - this might take a few minutes depending on how many playlists you have.

3. If successful, get in touch with us via chat or email (curators@songrocket.com) for approval. You'll need to provide social media accounts and any playlist advertising you do.

4. Most important: Delete the genres which don't apply to your playlist to avoid getting wrong song submissions!`,
  },
  {
    id: "monetize",
    title: "How to monetize a Spotify playlist",
    content: `SongRocket allows you to monetize your Spotify playlists by reviewing music from artists and labels.

How it works:
- Artists pay to pitch their music to curators like you
- You receive submissions in your preferred genres
- You listen and decide if the track fits your playlist
- You get paid for every review, whether you accept or decline

The more playlists and followers you have, the more submissions you'll receive and the more you can earn.

This is 100% compliant with Spotify's terms - you're being paid for your time reviewing music, not for placements.`,
  },
  {
    id: "5-steps",
    title: "5 Steps To Be The Greatest Playlist Curator on Spotify",
    content: `1. Focus on a Niche
Pick a specific genre or mood and stick with it. Playlists with clear identities grow faster than generic ones.

2. Maintain Quality
Only add tracks that truly fit your playlist. Listeners trust curators who are selective.

3. Update Regularly
Add fresh tracks weekly. Active playlists perform better in Spotify's algorithm.

4. Engage Your Audience
Share your playlist on social media, interact with followers, and encourage artists to promote when added.

5. Be Professional
Respond to submissions promptly, write helpful feedback, and maintain a good reputation in the industry.`,
  },
  {
    id: "rules",
    title: "Rules for playlist curators",
    content: `As a SongRocket curator, you must follow these rules:

1. Never accept payment outside of SongRocket for placements
2. Only add songs that genuinely fit your playlist
3. Don't buy fake followers or streams
4. Review submissions within the campaign timeframe
5. Provide honest, constructive feedback
6. Keep tracks in your playlist for the recommended duration
7. Never share artist contact information

Violating these rules may result in removal from the platform and forfeiture of unpaid earnings.`,
  },
  {
    id: "onboarding",
    title: "How to get on board and how long does it take?",
    content: `The onboarding process typically takes 1-3 business days:

1. Create your account and connect Spotify
2. Submit your playlists for review
3. Contact us via chat or email
4. We verify your playlist quality and follower authenticity
5. Once approved, you start receiving submissions

We manually review all curator applications to maintain platform quality. Playlists with fake followers or low engagement will not be approved.`,
  },
  {
    id: "review-songs",
    title: "How to review Songs as curator",
    content: `When you receive a submission:

1. Go to your Review queue in the dashboard
2. Click on a submission to see song details
3. Listen to the full track (or at least 30 seconds)
4. Decide: Accept, Decline, or Skip
5. Write a brief review (required for accepts and declines)
6. If accepted, add the song to your playlist
7. Submit your review

Tips:
- Be honest but constructive
- If declining, explain why briefly
- Check if the genre actually matches your playlist`,
  },
  {
    id: "write-reviews",
    title: "How to write reviews",
    content: `Good reviews are specific and helpful:

For Accepts:
"Love the production quality and the catchy hook. This fits perfectly with my chill vibes playlist. Added to position 15."

For Declines:
"The track is well-produced but doesn't fit my playlist's energy. The tempo is too slow for what my listeners expect."

Avoid:
- One-word reviews like "good" or "no"
- Rude or dismissive comments
- Generic copy-paste responses

Quality feedback builds your reputation and encourages artists to pitch to you again.`,
  },
  {
    id: "managing",
    title: "Managing your genres and playlist",
    content: `Proper genre management is crucial:

1. Go to Settings > Playlists
2. Click on each playlist to edit genres
3. Remove genres that don't fit your playlist
4. Add only genres you actively accept

Benefits of accurate genre tagging:
- Receive relevant submissions only
- Higher acceptance rate
- Better artist satisfaction
- More repeat submissions

You can update your genres at any time as your playlist evolves.`,
  },
  {
    id: "requirements",
    title: "What are the requirements to join as curator?",
    content: `To become a SongRocket curator, you need:

Minimum Requirements:
- At least one Spotify playlist
- 100+ genuine followers on your playlist
- Active playlist (updated in the last 30 days)
- Clean history (no fake followers or streams)

Preferred:
- Social media presence
- Multiple playlists
- 1,000+ followers
- Consistent updates

We verify all applications manually. Higher-quality playlists receive more submissions and earn more.`,
  },
  {
    id: "payment",
    title: "How much can I get paid?",
    content: `Curator earnings depend on several factors:

Per-Review Payment:
- Ranges from $1 to $20+ per review
- Based on your playlist size and engagement
- Bigger playlists with more followers earn more

Monthly Potential:
- Small curators: $50-$200/month
- Medium curators: $200-$1,000/month
- Top curators: $1,000+/month

The more playlists you have and the more active you are, the more you can earn. Payment is based on reviews completed, not placements.`,
  },
  {
    id: "payout-options",
    title: "What are the options for payouts?",
    content: `We offer multiple payout methods:

1. PayPal - Fastest option, 1-2 days
2. Bank Transfer (SEPA) - For European curators
3. Bank Transfer (Wire) - International transfers
4. Wise - Low-fee international option

To set up payouts:
1. Go to Settings > Payout
2. Choose your preferred method
3. Enter your payment details
4. Verify your information

You can change your payout method at any time.`,
  },
  {
    id: "payout-time",
    title: "How long does it take to get a payout?",
    content: `Payout processing times:

- PayPal: 1-2 business days
- Bank Transfer (SEPA): 2-3 business days
- Bank Transfer (Wire): 3-5 business days
- Wise: 1-2 business days

We process payout requests within 24 hours. The remaining time is bank processing.

Note: Your first payout may take slightly longer for verification purposes.`,
  },
  {
    id: "minimum-payout",
    title: "What's the minimum payout amount?",
    content: `The minimum payout amount is $20 USD.

Why we have a minimum:
- Reduces transaction fees
- More efficient processing
- Better for curators in the long run

Your earnings accumulate in your account until you reach the minimum. You can request a payout anytime once you've reached $20.`,
  },
  {
    id: "bank-details",
    title: "Where do I set my bank account details?",
    content: `To set up your payment information:

1. Log into your SongRocket account
2. Click on Settings in the left menu
3. Select "Payout" or "Payment Settings"
4. Choose your preferred payout method
5. Enter your bank/PayPal details
6. Click Save

Your information is encrypted and secure. We never share your financial details.

Make sure to double-check your details before saving to avoid payout delays.`,
  },
  {
    id: "manage-tracks",
    title: "Can I manage the tracks in the playlist?",
    content: `Yes! You have full control over your playlist:

- Add tracks from SongRocket submissions
- Remove tracks that no longer fit
- Reorder tracks as you like
- Add your own discoveries

Best practices:
- Keep a balanced mix of new and established tracks
- Remove tracks after a reasonable duration (2-4 weeks minimum)
- Maintain your playlist's vibe and quality

SongRocket doesn't automatically modify your playlist - you always have final say.`,
  },
  {
    id: "track-duration",
    title: "How long do I need to keep a track in a playlist?",
    content: `Recommended minimum: 2 weeks

This gives the track time to:
- Get discovered by your listeners
- Generate meaningful streams for the artist
- Trigger Spotify's algorithm

You can keep tracks longer if they're performing well. Some curators rotate tracks every 4-6 weeks, while others keep popular songs indefinitely.

There's no strict rule, but removing songs too quickly can frustrate artists and hurt your reputation.`,
  },
  {
    id: "gain-followers",
    title: "How can I gain more followers with approved songs?",
    content: `When you add songs from SongRocket:

1. Artists often share playlists they're featured on
2. Their fans discover your playlist
3. Some become followers

To maximize this:
- Encourage artists to share your playlist
- Tag them when you announce additions
- Maintain quality so new listeners stay
- Be active on social media

Cross-promotion is one of the best ways to grow organically. The more quality tracks you add, the more exposure you get.`,
  },
  {
    id: "vacation-mode",
    title: "I'm not available or on vacation for few days or weeks",
    content: `You can pause your curator activity:

1. Go to Settings > Curator Status
2. Enable "Vacation Mode" or "Pause Submissions"
3. Set your return date (optional)
4. Save changes

While paused:
- You won't receive new submissions
- Existing reviews remain pending
- Your playlists stay on the platform
- You can resume anytime

This helps maintain your reputation - it's better to pause than to ignore submissions.`,
  },
  {
    id: "security",
    title: "Is it secure to have a playlist loaded on SongRocket?",
    content: `Yes, your playlists are completely safe:

- We only read playlist data, we cannot modify your playlists
- We use Spotify's official API
- We never access your Spotify password
- You can disconnect at any time

SongRocket only sees:
- Playlist names and follower counts
- Track listings
- Public playlist data

We've been operating since 2020 with thousands of curators and zero security incidents.`,
  },
  {
    id: "paid-placements",
    title: "Is it allowed to offer direct paid placements on Spotify?",
    content: `No - direct paid placements violate Spotify's Terms of Service.

What's NOT allowed:
- Paying or being paid specifically for playlist placement
- Guaranteeing placements for money
- Selling playlist spots directly

What IS allowed (on SongRocket):
- Being paid to review and consider music
- Adding songs you genuinely like
- Declining songs that don't fit

SongRocket is designed to be compliant with Spotify's rules. You're paid for your time reviewing music, not for placements.

Violating Spotify's terms can result in playlist removal and account termination.`,
  },
];

export default function ForCuratorsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Curators Support"
          subtitle="Everything you need to know about being a curator on SongRocket"
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

            {/* Featured Article */}
            <div id="how-to-load-featured" className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">How to Load Playlists</h2>
              <div className="text-white/70 space-y-4">
                <p><strong className="text-white">1.</strong> Create an account (same account as artist/label). Dashboard will change once you go to "Settings" and connect your Spotify user with the playlist.</p>
                <p><strong className="text-white">2.</strong> Now you should see "Playlists" in the left side menu once you verify your email. Click "Refresh Playlist" - this might take a few minutes depending on how many playlists you have.</p>
                <p><strong className="text-white">3.</strong> If successful, get in touch with us via chat or email (curators@songrocket.com) for approval. You'll need to provide social media accounts and any playlist advertising you do.</p>
                <p><strong className="text-white">4.</strong> Most important: Delete the genres which don't apply to your playlist to avoid getting wrong song submissions!</p>
              </div>
              <Link
                href="/join"
                className="btn-primary inline-flex items-center gap-2 mt-6"
                target="_blank"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">$1-$20</div>
                <div className="text-white/60">Per Review</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">$20</div>
                <div className="text-white/60">Minimum Payout</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">1-3 Days</div>
                <div className="text-white/60">Payout Time</div>
              </div>
            </div>

            {/* All Articles - Expandable with hash URL support */}
            <h3 className="text-xl font-bold text-white mb-6">All Curator Articles</h3>
            <ExpandableArticles articles={curatorArticles} />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to start earning?</h3>
              <p className="text-white/70 mb-6">
                Join our network of curators and start monetizing your playlists today.
              </p>
              <Link
                href="/join"
                className="btn-primary inline-flex items-center"
                target="_blank"
              >
                Apply as Curator
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
