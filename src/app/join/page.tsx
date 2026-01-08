"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Music, Users } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function JoinPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"artist" | "curator">("artist");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to actual register page
    window.open("https://app.songrocket.com/register", "_blank");
  };

  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen pt-32 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <img
              src="/images/logo.svg"
              alt="SongRocket"
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-2">Join SongRocket</h1>
            <p className="text-white/60">Start your music journey today</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {/* User Type Selection */}
            {/* User Type Selection - Visual only, no function */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                onClick={() => setUserType("artist")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  userType === "artist"
                    ? "border-[#FF6B35] bg-[#FF6B35]/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <Music className={`w-6 h-6 mx-auto mb-2 ${userType === "artist" ? "text-[#FF6B35]" : "text-white/60"}`} />
                <span className={`block font-medium text-xs leading-tight ${userType === "artist" ? "text-white" : "text-white/60"}`}>
                  Artist / Label / Manager
                </span>
              </button>
              <button
                type="button"
                onClick={() => setUserType("curator")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  userType === "curator"
                    ? "border-[#FF6B35] bg-[#FF6B35]/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <Users className={`w-6 h-6 mx-auto mb-2 ${userType === "curator" ? "text-[#FF6B35]" : "text-white/60"}`} />
                <span className={`block font-medium text-xs leading-tight ${userType === "curator" ? "text-white" : "text-white/60"}`}>
                  Curator
                </span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
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
                <label htmlFor="password" className="block text-white font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors pr-12"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-white font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 rounded border-white/30 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35] focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                />
                <label htmlFor="agree-terms" className="text-white/70 text-sm cursor-pointer">
                  Check here to indicate that you have read and agree to the{" "}
                  <a
                    href="https://songrocket.com/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6B35] hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree-privacy"
                  checked={agreePrivacy}
                  onChange={(e) => setAgreePrivacy(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 rounded border-white/30 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35] focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                />
                <label htmlFor="agree-privacy" className="text-white/70 text-sm cursor-pointer">
                  Check here to indicate that you have read and agree to the{" "}
                  <a
                    href="https://songrocket.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6B35] hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={!agreeTerms || !agreePrivacy}
                className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Account
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Already have an account?{" "}
                <Link href="/signin" className="text-[#FF6B35] hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
