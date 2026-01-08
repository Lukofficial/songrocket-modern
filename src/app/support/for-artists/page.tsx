import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExpandableArticles } from "@/components/expandable-articles";

export const metadata: Metadata = {
  title: "Artists, Labels & Management Support | SongRocket",
  description: "Help and guides for artists, labels, and management. Learn about campaign pricing, how to submit songs, and more.",
};

const artistArticles = [
  {
    id: "pricing",
    title: "How much will my playlist campaign cost?",
    content: `The pitching to playlist campaign can start from as low as $3 USD, and you can choose any budget you want for the genres you choose. It allows you to select the number of curators for the genres you want.

For a lower budget, please make sure you are using genres that match your song. Stay tight on the genres you choose. We cover everything from hip hop to lo-fi, folk, country, and rock.

If you need help with the genres, please let us know in the chat or by email. Don't overuse the genres. For example, don't use "pop" or "indie pop" when it's a "singer-songwriter" song with no strong drop. Same in dance: don't use "EDM" or "House" if it's a "funky house" track.

The higher your budget, the more curators you can reach. Sometimes it is good to start low if you have a low budget or are unsure how the track will do. The beauty is that you can extend any previous campaign as many times as you want.

Similar to a subscription, but completely under your control. So you can test low, go high later, or on a monthly basis. Each campaign runs at least 7 days. That's the time curators can reply. If for example someone would miss it, the campaign goes into extended mode for another 7 days and more curators will be pitched till full budget is used.`,
  },
  {
    id: "soundcloud",
    title: "SoundCloud for Artists Updates and News",
    content: `SongRocket now supports SoundCloud playlists for pitching! If you're a curator with an active SoundCloud playlist, you can now connect it to our platform.

For artists, this means your music can be pitched to SoundCloud playlisters alongside Spotify curators, giving you more exposure across multiple platforms.

Stay tuned for more updates as we continue to expand our platform support.`,
  },
  {
    id: "trust",
    title: "Can I trust the platform?",
    content: `Yes! SongRocket is a trusted platform used by major labels including Sony Music, Spinnin' Records, Cat Music, mau5trap, Global Records, Ticoray, and Point Blank Music School.

We have processed thousands of campaigns with real results. Our curators are manually vetted to ensure genuine playlists with real followers.

We don't guarantee placements (as this would be against Spotify's terms), but we do guarantee that your music will be heard by real curators who can add it to their playlists if they like it.`,
  },
  {
    id: "toplists",
    title: "Toplists Spotify Playlister Submit To Playlist",
    content: `Our toplists feature shows you the most active and engaged curators on our platform. These curators have the highest acceptance rates and most active playlists.

When you submit your music, it goes to curators who have opted in to receive music in your specific genre. This ensures a targeted approach rather than mass pitching.`,
  },
  {
    id: "artificial-streaming",
    title: "The Hidden Dangers of Artificial Streaming on Spotify",
    content: `Artificial streaming (fake streams) is a serious issue that can permanently damage your artist profile. Spotify actively monitors for fake streams and will:

1. Remove fake streams from your count
2. Remove your music from algorithmic playlists
3. Potentially remove your music from the platform entirely
4. Flag your artist account

SongRocket only works with vetted, real playlists. We have a strict onboarding process for curators to ensure playlist quality and genuine followers.

If you notice unusual activity on your account, contact Spotify support immediately.`,
  },
  {
    id: "healthy-account",
    title: "Healthy Spotify account",
    content: `A healthy Spotify artist account is crucial for success. Here's what makes an account healthy:

1. No history of fake streams or bot activity
2. Organic follower growth
3. Good listener-to-stream ratio
4. Streams from algorithmic playlists (Discover Weekly, Release Radar)
5. Geographic diversity in listeners

If your account has been affected by fake streams in the past, it may take time to recover. Focus on organic growth and legitimate promotion.`,
  },
  {
    id: "troubles",
    title: "Having troubles creating campaign",
    content: `If you're having trouble creating a campaign, try these steps:

1. Make sure your Spotify link is correct (use the direct track link)
2. Check that you've selected at least one genre
3. Ensure your payment method is valid
4. Clear your browser cache and try again

If issues persist, contact our support team via live chat or email at support@songrocket.com.`,
  },
  {
    id: "mp3",
    title: "Why do you need an Mp3 file?",
    content: `We require an MP3 file for several reasons:

1. Preview Quality: Curators can listen to your full track in high quality
2. Unreleased Music: For pre-release campaigns, we need the audio file since it's not yet on Spotify
3. Backup: Ensures curators can always access your music even if there are streaming issues

MP3 files are stored securely and only accessible to approved curators reviewing your campaign.`,
  },
  {
    id: "influencers",
    title: "Spotify Influencers",
    content: `Spotify influencers are curators with large, engaged followings. On SongRocket, we work with influencers who have:

- Playlists with 10,000+ followers
- High engagement rates
- Genuine, organic audiences
- Active playlist maintenance

Your campaign budget determines which tier of influencers will see your music. Higher budgets reach more influential curators.`,
  },
  {
    id: "unreleased",
    title: "How do I start a campaign with an unreleased song?",
    content: `You can pitch unreleased music on SongRocket! Here's how:

1. Create a campaign as normal
2. Upload your MP3 file when prompted
3. Enter your expected release date
4. Curators will review your track before release

This gives curators time to prepare playlists and schedule your track for the release date. Many curators prefer getting music early so they can plan their playlist updates.`,
  },
  {
    id: "fake-streams",
    title: "How to identify fake streams and playlists",
    content: `Here are signs of fake/bot playlists to avoid:

1. Playlist has many followers but low stream counts on songs
2. Songs only have 1-2 second play durations
3. All listeners are from the same obscure location
4. Playlist was created recently with sudden follower growth
5. No engagement (saves, shares, follows)

SongRocket manually vets all curators to filter out fake playlists before they can join our network.`,
  },
  {
    id: "payment-options",
    title: "What payment options are available?",
    content: `We accept the following payment methods:

- Credit/Debit Cards (Visa, Mastercard, American Express)
- PayPal
- Apple Pay
- Google Pay

For labels or teams, you can set up a shared payment method so multiple team members can create campaigns using the same billing account.`,
  },
  {
    id: "good-playlist",
    title: "Is it a good Spotify playlist?",
    content: `Here's how to identify a quality playlist:

1. Organic growth over time (not sudden spikes)
2. Engagement: listeners save songs, follow the playlist
3. Regular updates with fresh tracks
4. Cohesive genre/mood
5. Reasonable follower-to-stream ratio

Our curators go through a vetting process to ensure playlist quality. You can also check curator profiles before your campaign.`,
  },
  {
    id: "secure",
    title: "Playlist Pitch Services - is it secure and safe?",
    content: `Yes, SongRocket is completely safe and secure:

- We never ask for your Spotify password
- All payments are processed through secure payment processors
- We comply with Spotify's terms of service
- We don't use bots or fake streams
- Your music and data are protected

We've been operating since 2020 and have built trust with thousands of artists and labels worldwide.`,
  },
  {
    id: "genres",
    title: "Is my genre covered?",
    content: `We cover a wide range of genres including:

Pop, Rock, Hip Hop, R&B, Electronic, EDM, House, Techno, Lo-Fi, Chill, Ambient, Jazz, Classical, Country, Folk, Indie, Alternative, Metal, Punk, Reggae, Latin, Afrobeats, and many more.

If you're unsure about your genre, choose the closest match or contact support for guidance. Selecting accurate genres helps curators find music that fits their playlists.`,
  },
  {
    id: "campaigns",
    title: "Spotify Playlist Service & promotion campaigns",
    content: `Our campaign service connects you directly with playlist curators. Here's what happens:

1. You create a campaign with your track details
2. Your music is sent to curators in your selected genres
3. Curators have 7+ days to review your submission
4. If they like it, they'll add it to their playlist
5. You can track results in your dashboard

Each campaign includes real curator feedback, playlist placements, and potential follower reach statistics.`,
  },
  {
    id: "campaign-duration",
    title: "How long does a campaign run?",
    content: `Each campaign runs for a minimum of 7 days. This gives curators adequate time to review your music and make placement decisions.

If all curators haven't responded by day 7, the campaign automatically extends for another 7 days to ensure your full budget is used.

You can also extend or re-run completed campaigns at any time to reach more curators or maintain momentum.`,
  },
  {
    id: "expectations",
    title: "What can I expect?",
    content: `Results vary based on many factors:

- Your music quality and appeal
- Genre competition
- Campaign budget
- Current trends

On average, campaigns see:
- 20-40% curator response rate
- 10-25% playlist placement rate
- Placements on playlists ranging from 100 to 100,000+ followers

Remember: we don't guarantee placements. Success depends on whether curators genuinely enjoy your music.`,
  },
  {
    id: "results",
    title: "How can I check my results?",
    content: `You can track your campaign results in real-time through your SongRocket dashboard:

1. Log into your account
2. Go to "Campaigns" section
3. Click on your active or completed campaign
4. View: curator responses, playlist adds, total reach, and more

You'll also receive email notifications when curators add your music to their playlists.`,
  },
  {
    id: "song-duration",
    title: "How long will my song stay on each playlist?",
    content: `Playlist placement duration varies by curator:

- Some curators keep songs for 2-4 weeks
- Others maintain songs for months
- Some have rotating playlists with regular updates

We encourage curators to keep songs for at least 2 weeks, but ultimately it's their decision based on playlist engagement and listener feedback.`,
  },
  {
    id: "both",
    title: "I'm an artist and curator, can I be both?",
    content: `Yes! Many of our users are both artists and curators. You can:

1. Run campaigns to promote your own music
2. Earn money by reviewing other artists' submissions
3. Build your curator reputation while growing as an artist

Just make sure to use separate sections of the platform for each role. You cannot add your own music to your own playlists through our platform.`,
  },
  {
    id: "guarantee",
    title: "Is there any guarantee how many plays I get?",
    content: `No, and be wary of any service that guarantees streams or placements.

Guaranteeing streams would violate Spotify's terms of service and likely involves fake/bot activity.

What we guarantee:
- Your music will be heard by real curators
- Curators will provide feedback
- Any placements are on legitimate, vetted playlists

Actual stream counts depend on playlist size, listener engagement, and whether listeners enjoy your music.`,
  },
  {
    id: "submit",
    title: "How to submit a song?",
    content: `Submitting a song is easy:

1. Create an account or log in
2. Click "Create Campaign"
3. Enter your Spotify track link
4. Upload an MP3 file
5. Select your genres
6. Set your budget
7. Launch your campaign

That's it! Curators will start reviewing your music within 24-48 hours.`,
  },
  {
    id: "why-songrocket",
    title: "Why should I use SongRocket?",
    content: `SongRocket offers several advantages:

1. Trusted by major labels (Sony, Spinnin' Records, etc.)
2. All curators are manually vetted
3. Transparent pricing with no hidden fees
4. Real-time campaign tracking
5. Direct curator feedback
6. Low minimum budget ($3)
7. Supports pre-release music
8. Founded by artists, for artists

Join thousands of artists who have grown their Spotify presence through our platform.`,
  },
  {
    id: "start-campaign",
    title: "How do I start a campaign?",
    content: `Starting a campaign takes just a few minutes:

1. Sign up at app.songrocket.com
2. Verify your email
3. Click "New Campaign"
4. Paste your Spotify track link
5. Choose genres and budget
6. Complete payment
7. Your campaign goes live!

Need help? Use our live chat or contact support@songrocket.com.`,
  },
  {
    id: "older-release",
    title: "Older release - Can I still run a campaign?",
    content: `Yes! There's no release date requirement for campaigns. You can promote:

- Brand new releases
- Songs released months or years ago
- Entire back catalogs

Many artists successfully promote older tracks to give them new life. We don't display release dates to curators, so your music is judged purely on quality.`,
  },
  {
    id: "links",
    title: "What links can I use to pitch my song?",
    content: `You can use:

1. Spotify track links (spotify.com/track/...)
2. Spotify URI (spotify:track:...)
3. Pre-save links (for unreleased music with MP3 upload)

Make sure you're using the direct track link, not a playlist or album link. The track must be publicly available on Spotify (or include an MP3 for unreleased tracks).`,
  },
];

export default function ForArtistsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Artists, Labels, Management"
          subtitle="Everything you need to know about running campaigns on SongRocket"
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

            {/* Featured Article - Pricing */}
            <div className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">How Much Will My Campaign Cost?</h2>
              <div className="text-white/70 space-y-4">
                <p>The pitching to playlist campaign can start from as low as <span className="text-[#FF6B35] font-semibold">$3 USD</span>, and you can choose any budget you want for the genres you choose.</p>
                <p>For a lower budget, make sure you're using genres that match your song. Stay tight on the genres you choose - we cover everything from hip hop to lo-fi, folk, country, and rock.</p>
                <p>The higher your budget, the more curators you can reach. You can extend any previous campaign as many times as you want - similar to a subscription, but completely under your control.</p>
                <p>Each campaign runs at least 7 days. If curators haven't finished reviewing, it extends automatically.</p>
              </div>
              <Link
                href="/pricing"
                className="btn-primary inline-flex items-center gap-2 mt-6"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#FF6B35]">$3+</div>
                <div className="text-white/60 text-sm">Min. Campaign</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#FF6B35]">7+ Days</div>
                <div className="text-white/60 text-sm">Campaign Duration</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#FF6B35]">1.4K+</div>
                <div className="text-white/60 text-sm">Curators</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#FF6B35]">31M+</div>
                <div className="text-white/60 text-sm">Follower Reach</div>
              </div>
            </div>

            {/* All Articles - Expandable with hash URL support */}
            <h3 className="text-xl font-bold text-white mb-6">All Artist Articles</h3>
            <ExpandableArticles articles={artistArticles} />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to launch your campaign?</h3>
              <p className="text-white/70 mb-6">
                Start promoting your music to our network of playlist curators today.
              </p>
              <Link
                href="https://app.songrocket.com/register"
                className="btn-primary inline-flex items-center"
                target="_blank"
              >
                Start a Campaign
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
