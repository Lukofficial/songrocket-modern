"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to actual login page
    window.open("https://app.songrocket.com/login", "_blank");
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
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-white/60">Sign in to your account</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35]" />
                  <span className="text-white/60 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-[#FF6B35] text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Don't have an account?{" "}
                <Link href="/join" className="text-[#FF6B35] hover:underline">
                  Join now
                </Link>
              </p>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-6">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-[#FF6B35] hover:underline">Terms</Link>
            {" "}and{" "}
            <Link href="/privacy" className="text-[#FF6B35] hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
