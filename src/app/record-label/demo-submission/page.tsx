"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function DemoSubmissionPage() {
  const [formData, setFormData] = useState({
    artistName: "",
    yourName: "",
    email: "",
    spotifyLink: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    alert("Thank you for your submission! We will review your demo and contact you if it's a match.");
  };

  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Demo Submission"
          subtitle="Submit your music to SongRocket Records/Sony"
        />

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/record-label"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Record Label
            </Link>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <img
                  src="/images/logo.svg"
                  alt="SongRocket Records"
                  className="h-16 mx-auto mb-6"
                />
                <h2 className="text-2xl font-bold text-white mb-4">
                  SongRocket Records Demo Submission
                </h2>
                <p className="text-white/70">
                  Please use this form to send your demos. We will not reply to every submission, if it's a match we will contact you. Accepted Genres: EDM, Dance, Tech House, House, Pop, Lofi and many more...
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="artistName" className="block text-white font-medium mb-2">
                    Artist Name <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    id="artistName"
                    required
                    value={formData.artistName}
                    onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="Your artist name"
                  />
                </div>

                <div>
                  <label htmlFor="yourName" className="block text-white font-medium mb-2">
                    Your Name <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    id="yourName"
                    required
                    value={formData.yourName}
                    onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    E-Mail <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="spotifyLink" className="block text-white font-medium mb-2">
                    Spotify/SoundCloud Link <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="url"
                    id="spotifyLink"
                    required
                    value={formData.spotifyLink}
                    onChange={(e) => setFormData({ ...formData, spotifyLink: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="https://open.spotify.com/track/..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
                    placeholder="Tell us about yourself and your music..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  Submit Demo
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
