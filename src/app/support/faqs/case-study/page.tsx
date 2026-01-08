import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Case Study & SongRocket Review | SongRocket",
  description: "Real success stories from SongRocket campaigns. See how artists and labels have grown their Spotify presence with our platform.",
};

export default function CaseStudyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Case Study & SongRocket Review"
          subtitle="Real success stories from our platform"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/support/faqs"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to FAQs
            </Link>

            {/* Introduction */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-white/80">
                I'm happy to share some of SongRocket case studies review every now and then.
                Especially if we have some really success with a track.
              </p>
            </div>

            {/* INNA Case Study */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">INNA - Global Records</h2>
              <div className="text-white/70 space-y-4 mb-8">
                <p>
                  <span className="text-[#FF6B35] font-semibold">INNA</span> is probably the most famous artist roster on SongRocket besides Timmy Trumpet.
                  The trusted label <span className="text-[#FF6B35] font-semibold">GlobalRecords</span> is pitching into SongRocket.
                </p>
                <p>
                  INNA is well known in the industry collabed with R3HAB and Sash! "Rock My Body" or with J Balvin with "Cola Song"
                </p>
                <p>Here is a snapshot of the last campaign from her label:</p>
              </div>

              {/* INNA Campaign Results - Original Screenshot */}
              <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/2308474533/1707352435.png"
                  alt="INNA - Everything Or Nothing - Campaign Results: 45 playlist adds, 987,829 follower reach"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Dennis Bro Case Study */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Dennis Bro - TikTok Influencer</h2>
              <div className="text-white/70 space-y-4 mb-8">
                <p>
                  <span className="text-[#FF6B35] font-semibold">Dennis Bro</span> is a TikTok influencer and very popular on Instagram,
                  his videos are getting viral every time besides that he also produces songs with catchy beats and vocals.
                </p>
                <p>
                  He has been a valued customer and we appreciate his trust in our company.
                </p>
              </div>

              {/* Dennis Bro Campaign Results - Original Screenshot */}
              <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/2308474533/1711744060.png"
                  alt="Dennis Bro - Bad Boys Fly High - Campaign Results: 81 playlist adds, 920,574 follower reach"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Running Up That Hill Case Study */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Running Up That Hill - Skye Holland & Steve Kroeger</h2>
              <div className="text-white/70 space-y-4 mb-8">
                <p>
                  The next one is <span className="text-[#FF6B35] font-semibold">"Running Up That Hill"</span> covered by
                  <span className="text-[#FF6B35] font-semibold"> Skye Holland</span> and
                  <span className="text-[#FF6B35] font-semibold"> Steve Kroeger</span> was released with Prodigy Music Group.
                </p>
                <p>
                  The release was on the 17. June, that's the day when the track was pitched into SongRocket as well.
                </p>
              </div>

              {/* Running Up That Hill Campaign Results - Original Screenshot */}
              <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden mb-8">
                <Image
                  src="https://ext.same-assets.com/2308474533/814143471.png"
                  alt="Running Up That Hill - Campaign Results: 54 playlist adds, 701,293 follower reach"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Spotify for Artists Screenshot */}
              <div className="space-y-6 mb-8">
                <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2308474533/2984795602.jpeg"
                    alt="Spotify for Artists - Running Up That Hill - 438,164 streams"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white/70 text-center text-sm">
                  Spotify for Artists showing 438,164 streams and growing
                </p>
              </div>

              <div className="text-white/70 space-y-4 mb-8">
                <p>
                  So not everyone was or is a fan of the track especially with a cover when the original was just being discovered through Netflix (Stranger Things).
                </p>
                <p>
                  But it does have some nice playlists adds over the next few weeks as the campaign did run till July.
                  It has been picked up by the editorial list from Spotify (Tropical House) on the 12. of August, Discovered Weekly and Radio.
                </p>
                <p>
                  <span className="text-[#FF6B35] font-semibold">So the peak we had after few weeks later was 11k streams on one day.</span>
                </p>
              </div>

              {/* Top 100 Playlists Screenshot */}
              <div className="space-y-6 mb-8">
                <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2308474533/656790807.jpeg"
                    alt="Top 100 of 3,270 playlists for this song"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white/70 text-center text-sm">
                  Top 100 of 3,270 playlists for this song - including Spotify's Tropical House editorial
                </p>
              </div>

              <div className="text-white/70 space-y-4 mb-8">
                <p>
                  It worked for the algorithm from Spotify from saves and has been added to private lists as well.
                  It's very important that the Discovered Weekly and Radio gets triggered. If that does not happen, you know something isn't right.
                </p>
              </div>

              {/* Playlist Sources Screenshot */}
              <div className="space-y-6 mb-8">
                <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2308474533/2755210814.jpeg"
                    alt="Running Up That Hill playlist sources"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Source of Streams Screenshot */}
              <div className="space-y-6 mb-8">
                <div className="relative w-full aspect-[16/9] bg-[#1a1818] rounded-xl overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2308474533/2396557647.jpeg"
                    alt="Source of streams breakdown"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white/70 text-center text-sm">
                  Source of streams showing healthy balance: 46% Spotify algorithmic, 18% listener's own playlists, 20% other listener's playlists
                </p>
              </div>

              <div className="text-white/70 space-y-4">
                <p>
                  You can clearly see a solid and healthy balance between algorithmic playlists, editorial and private playlists.
                </p>
                <p>
                  So far the track has done <span className="text-[#FF6B35] font-semibold">450k in Streams since 17. June</span> and hit different radio stations as well.
                  It will be interesting to see how it will unfold in the next few weeks and months.
                </p>
                <p>
                  Again this is a good example, not every track will find a position in the Spotify streaming world, a lot of factors are to consider.
                  The most important: no fake streams and a healthy Spotify Artist account. It also proves that just because you haven't been added on an editorial on day one doesn't mean you can't get added later on.
                </p>
                <p className="text-white/50 italic">
                  I like to mention as well SongRocket doesn't guarantee any playlist adds nor placement.
                </p>
              </div>
            </div>

            {/* SongRocket Deck Sheet Preview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">SongRocket Deck Sheet</h3>
              <div className="relative w-full aspect-[4/3] bg-[#1a1818] rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://ext.same-assets.com/2308474533/2900777764.png"
                  alt="SongRocket Deck Sheet Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* More Resources */}
            <div className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-white/70 mb-6">
                Check Mike Warner's analysis or download our deck sheet with more examples.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://medium.com/@askmikewarner/i-ran-two-campaigns-on-songrocket-heres-what-happened-bf0dcae65f78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Read Mike Warner's Review
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1jKODiVWWEukA3-M_MKKCZ7LZN5bq9vjV/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Download Deck Sheet
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Client Logos */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Our Clients</h3>
              <p className="text-white/60 text-center mb-8">
                For more, visit our Instagram
              </p>
              <div className="relative w-full h-[200px]">
                <Image
                  src="https://ext.same-assets.com/2308474533/293397193.png"
                  alt="SongRocket clients including Sony Music, Spinnin' Records, Cat Music, mau5trap, Global Records, Ticoray, Point Blank Music School"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to start your success story?</h3>
              <p className="text-white/70 mb-6">
                Join thousands of artists who have grown their Spotify presence through our platform.
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
