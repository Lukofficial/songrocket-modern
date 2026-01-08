import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, Link2, TrendingUp, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Affiliate Partner | SongRocket Support",
  description: "Earn lifetime passive income by referring friends to SongRocket. Join our affiliate program today.",
};

export default function AffiliatePage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Affiliate Partner"
          subtitle="Earn lifetime passive income by referring friends to SongRocket"
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

            {/* Main Content */}
            <div className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Refer to a Friend or Network</h2>
              <div className="text-white/70 space-y-4">
                <p>Earn lifetime passive income by creating a referral link in your settings!</p>
                <p>Send it to your audience from followers, email database, website, Linktree, playlist description, YouTube channel, Instagram, TikTok - wherever your audience is!</p>
                <p><strong className="text-white">Important:</strong> Whenever the link is clicked by new users, it's saved in the browser cache. Even if they browse around or visit another website, once they come back and sign up from the standard register page, it still gets triggered automatically as a new client from the affiliate program.</p>
                <p>You will earn a lifetime commission whenever a campaign gets created - doesn't matter how big or how many times they create a campaign.</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">5% Commission</h3>
                <p className="text-white/60">
                  Start earning 5% from each campaign's revenue. Commissions are automatically added to your balance.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lifetime Earnings</h3>
                <p className="text-white/60">
                  Earn every time your referrals create campaigns - for life! No limits on how much you can earn.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <Link2 className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Easy Tracking</h3>
                <p className="text-white/60">
                  Get notifications when new referrals sign up. Track your earnings in the balance section.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Limit</h3>
                <p className="text-white/60">
                  Refer as many people as you want. The more you refer, the more you earn!
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-6">How It Works</h3>
              <ol className="space-y-4 text-white/70">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">1</span>
                  <div>
                    <strong className="text-white">Create your referral link</strong>
                    <p>Go to Settings in your dashboard and generate your unique affiliate link.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">2</span>
                  <div>
                    <strong className="text-white">Share with your network</strong>
                    <p>Post it on social media, your website, playlist descriptions, or send directly to friends.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">3</span>
                  <div>
                    <strong className="text-white">Start earning</strong>
                    <p>When your referrals create campaigns, you automatically earn 5% commission - for life!</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Let's build the network even bigger!</h3>
              <p className="text-white/70 mb-6">
                If you have any questions, please don't hesitate to contact us.
              </p>
              <Link
                href="https://app.songrocket.com/register"
                className="btn-primary inline-flex items-center gap-2"
                target="_blank"
              >
                Join the Affiliate Program
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
