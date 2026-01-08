"use client";

import Link from "next/link";
import { MessageCircle, Mail, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Make Contact"
          subtitle="We're here to help you succeed"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Live Chat */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h2 className="text-2xl font-bold text-white text-center mb-4">
                  The Quickest Way<br />is Live Chat
                </h2>
                <p className="text-white/70 text-center mb-6">
                  To start a live chat, click on the chat icon in the bottom right corner of the screen on any page on SongRocket.com and we'll respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    // In production, this would open Tidio chat widget
                    alert("Live chat would open here. On the live site, click the chat bubble in the bottom right corner.");
                  }}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Live Chat
                </button>
              </div>

              {/* Email */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h2 className="text-2xl font-bold text-white text-center mb-4">
                  Send Us an<br />Email
                </h2>
                <p className="text-white/70 text-center mb-6">
                  We will respond to your email within one business day.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm mb-1">Artists:</p>
                    <a
                      href="mailto:support@songrocket.com"
                      className="text-[#FF6B35] hover:text-white transition-colors"
                    >
                      support@songrocket.com
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm mb-1">Curators:</p>
                    <a
                      href="mailto:curators@songrocket.com"
                      className="text-[#FF6B35] hover:text-white transition-colors"
                    >
                      curators@songrocket.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Banner */}
            <div className="bg-gradient-to-r from-[#c93172]/20 to-[#970fb4]/20 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Have a Question?</h2>
              <p className="text-white/70 mb-6">
                You might find a quick answer to your query by searching our FAQ.
              </p>
              <Link
                href="/support"
                className="btn-outline inline-flex items-center"
              >
                Visit Support Center
              </Link>
            </div>

            {/* Company Info */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
              <div className="text-white/60 space-y-1">
                <p>SongRocket</p>
                <p>Wildbachstrasse 19</p>
                <p>8424 Embrach, Switzerland</p>
                <p className="mt-4">Company Reg No: CHE-137.124.111</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
