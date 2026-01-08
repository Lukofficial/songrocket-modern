import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Login for Prices | SongRocket",
  description: "Login to view personalized pricing for your campaigns.",
};

export default function LoginForPricesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Login for Prices"
          subtitle="Access personalized pricing based on your needs"
        />

        <section className="py-20">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                <Lock className="w-10 h-10 text-[#FF6B35]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Sign in to view prices
              </h2>
              <p className="text-white/70 mb-8">
                Create an account or sign in to see personalized pricing based on your genres and campaign goals.
              </p>
              <div className="space-y-4">
                <Link
                  href="https://app.songrocket.com/login"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  target="_blank"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/join"
                  className="btn-outline w-full inline-flex items-center justify-center"
                  target="_blank"
                >
                  Create Account
                </Link>
              </div>
              <p className="text-white/50 text-sm mt-6">
                Campaigns start from as low as $3 USD
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
