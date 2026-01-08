import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExpandableArticles } from "@/components/expandable-articles";

export const metadata: Metadata = {
  title: "General Tips & Music Industry | SongRocket Support",
  description: "Music industry tips, guides, and insights. Learn about playlist pitching, music marketing, and how to grow as an artist.",
};

const tipArticles = [
  {
    id: "removes-streams",
    title: "Spotify Removes Streams",
    content: `Spotify actively monitors for artificial streaming and removes fake plays. This can happen if:

- You used a bot service to inflate streams
- Your track was on a playlist with bot listeners
- You bought streams from a third party

Consequences:
- Streams removed from your count
- Royalties clawed back
- Potential removal from algorithmic playlists
- Account flagged or terminated

How to avoid this:
- Only use legitimate promotion services like SongRocket
- Avoid any service that guarantees streams
- Monitor your Spotify for Artists for unusual activity
- Report suspicious activity immediately`,
  },
  {
    id: "comparison",
    title: "Playlist Promotion Services - Comparison",
    content: `How SongRocket compares to other services:

SongRocket:
- Manual curator vetting
- Pay per review, not per stream
- Transparent pricing from $3
- Campaign extensions available
- Real curator feedback

PlaylistPush:
- Similar model to SongRocket
- Generally higher prices
- Less flexible budget options

SubmitHub:
- Credits-based system
- More focused on blogs
- Can be expensive per submission

Groover:
- European-focused
- Similar curator model
- Different pricing structure

All legitimate services share one thing: they don't guarantee placements or streams.`,
  },
  {
    id: "playlisting",
    title: "Playlisting Service and Pitching to Curators",
    content: `Why playlisting still matters in 2025:

1. Algorithm Trigger
Well-performing playlist placements signal to Spotify that your music is worth promoting in Discover Weekly and Release Radar.

2. Real Listeners
Unlike bought streams, playlist listeners are real people who might become fans.

3. Social Proof
Being featured on playlists adds credibility to your artist profile.

4. Long-term Growth
Playlist placement leads to saves, follows, and monthly listeners that persist.

How to maximize success:
- Pitch music that truly fits the playlist genre
- Have professional artwork and metadata
- Write a compelling pitch
- Follow up on feedback`,
  },
  {
    id: "monthly-listeners",
    title: "How To Build Your Monthly Listeners on Spotify",
    content: `Strategies to grow your monthly listeners:

1. Consistent Releases
Release music regularly (every 4-6 weeks) to stay in Release Radar.

2. Playlist Pitching
Use services like SongRocket to get on third-party playlists.

3. Social Media
Promote your Spotify links on TikTok, Instagram, and YouTube.

4. Collaborate
Feature other artists and get featured on their tracks.

5. Engage Fans
Use Spotify for Artists to see where your listeners are and engage them.

6. Pre-saves
Build hype before release with pre-save campaigns.

7. Content Creation
Create content around your music - behind-the-scenes, lyric videos, etc.`,
  },
  {
    id: "legit",
    title: "How to Identify a Legit Playlist Service",
    content: `Signs of a legitimate playlist service:

GREEN FLAGS:
- Transparent about not guaranteeing placements
- Manual curator vetting process
- Payment for reviews, not streams
- Real company information and support
- Positive reviews from verified users
- Compliant with Spotify's terms

RED FLAGS:
- Guarantees streams or placements
- Unusually cheap prices
- No curator vetting
- Promises editorial playlist placement
- No refund or support policy
- Anonymous or offshore company

SongRocket checks all the green flags - we've been operating legitimately since 2020.`,
  },
  {
    id: "distribution",
    title: "The Best Music Distribution in 2025",
    content: `Top distribution services for independent artists:

Free Options:
- DistroKid: $22.99/year unlimited releases
- TuneCore: Per-release pricing
- CD Baby: One-time fee per release
- Amuse: Free tier with limited features

What to look for:
- Keep 100% of royalties
- Fast release times
- Spotify for Artists access
- YouTube Content ID
- Social media integration

Our recommendation: DistroKid for most indie artists due to unlimited releases and quick turnaround.`,
  },
  {
    id: "mistakes",
    title: "Top 10 Mistakes Artists Make",
    content: `Avoid these common mistakes:

1. Buying fake streams - damages your account
2. Ignoring metadata - bad titles/artwork hurt discoverability
3. Releasing too rarely - Spotify favors consistent artists
4. Skipping pre-save campaigns - miss Release Radar opportunity
5. No social media presence - limits organic growth
6. Ignoring analytics - not learning what works
7. Generic pitches - curators skip impersonal messages
8. Wrong genre tags - mismatched submissions get rejected
9. Giving up too early - success takes time
10. Not engaging fans - followers want connection

Focus on building genuine connections and consistent quality releases.`,
  },
  {
    id: "submithub",
    title: "SubmitHub Alternative",
    content: `Looking for alternatives to SubmitHub?

SongRocket advantages:
- Lower minimum budget ($3 vs premium credits)
- Focus on Spotify playlists specifically
- Campaign extensions available
- Real-time dashboard
- More flexible genre targeting

When SubmitHub works better:
- If you want blog coverage
- If you're targeting specific influencers
- If you have a higher budget per submission

Many artists use both platforms for different purposes - SubmitHub for blogs and SongRocket for playlist pitching.`,
  },
  {
    id: "marketing",
    title: "Music Marketing in 2025",
    content: `Key marketing strategies for 2025:

1. Short-Form Video
TikTok and Instagram Reels are essential. Create 15-60 second clips featuring your music.

2. Playlist Pitching
Still one of the most effective ways to grow Spotify streams.

3. Collaboration
Work with other artists to cross-promote.

4. Email List
Build direct connection with fans outside social media.

5. Live Streaming
Twitch and YouTube Live for real-time fan engagement.

6. Influencer Marketing
Get your music in influencer content.

7. Community Building
Discord servers and fan clubs for superfans.

The key is consistency across all channels.`,
  },
  {
    id: "how-to-pitch",
    title: "How to Pitch Your Music to Playlist Curators",
    content: `Write effective pitches with these tips:

1. Be Personal
Address the curator by name if possible.

2. Be Brief
Curators review hundreds of submissions. Get to the point.

3. Explain the Fit
"This track fits your playlist because..." is powerful.

4. Highlight Achievements
Mention streaming numbers, notable features, or press.

5. Be Professional
No typos, proper grammar, professional tone.

6. Include Links
Make it easy to find your track.

Example:
"Hi! I'm [Artist] with my new single [Track]. It's a chill lo-fi beat that would fit perfectly with your 'Study Vibes' playlist. The track has gained 50k streams organically and has been featured on similar playlists. Would love your consideration!"`,
  },
];

export default function GeneralTipsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="General Tips & Music Industry"
          subtitle="Insights, tips, and guides to help you succeed in the music industry"
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
            <div className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Why Playlisting Still Matters in 2025</h2>
              <div className="text-white/70 space-y-4">
                <p>In the ever-evolving music industry, one thing remains constant: <strong className="text-white">getting your music heard is key to success</strong>. While social media platforms and viral trends come and go, playlisting services and pitching to curators continue to be a foundational strategy.</p>
                <p>Curators build loyal followings over time. Their listeners trust their taste and actively engage with the music they feature. Getting your song on a well-followed playlist can generate repeat listens, follows, and even viral word-of-mouth.</p>
                <p>Spotify's algorithm monitors how users interact with your song. If your track performs well with low skip rate and high saves, it's more likely to be picked up by algorithmic playlists like Discover Weekly and Release Radar.</p>
              </div>
              <Link
                href="/for-artists"
                className="btn-primary inline-flex items-center gap-2 mt-6"
              >
                Start a Campaign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* All Articles - Expandable with hash URL support */}
            <h3 className="text-xl font-bold text-white mb-6">All Tips & Guides</h3>
            <ExpandableArticles articles={tipArticles} />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Want more tips?</h3>
              <p className="text-white/70 mb-6">
                Check out our blog for the latest music industry news and insights.
              </p>
              <Link
                href="/blog"
                className="btn-primary inline-flex items-center"
              >
                Visit Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
