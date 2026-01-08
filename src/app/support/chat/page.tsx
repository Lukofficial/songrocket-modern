"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ChatPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Chat with Us"
          subtitle="We're here to help you succeed"
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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                <p className="text-white/70 mb-6">
                  Chat with our support team in real-time. We typically respond within minutes during business hours.
                </p>
                <button
                  type="button"
                  className="btn-primary inline-flex items-center gap-2"
                  onClick={() => {
                    // In production, this would open Tidio chat widget
                    alert("Live chat would open here. On the live site, click the chat bubble in the bottom right corner.");
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Chat
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-white/70 mb-6">
                  Prefer email? Send us a message and we'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:support@songrocket.com"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-[#FF6B35]" />
                <div>
                  <h3 className="text-xl font-bold text-white">Support Hours</h3>
                  <p className="text-white/60">When you can reach us</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Live Chat</h4>
                  <p className="text-white/70">Monday - Friday: 9am - 6pm CET</p>
                  <p className="text-white/70">Saturday: 10am - 4pm CET</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Email Support</h4>
                  <p className="text-white/70">24/7 - Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
