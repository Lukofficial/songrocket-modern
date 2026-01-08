import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingScripts } from "@/components/tracking-scripts";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.songrocket.com"),
  title: {
    default: "SongRocket - The Best Spotify Playlist Pitching Service Platform",
    template: "%s | SongRocket",
  },
  description:
    "Playlist pitching service! Pitch your music legit as independent artist, label, PR agency or management to Spotify playlist curators. The best Spotify playlist promotion service network for songs. 31.2M+ follower reach, 1.4k+ unique playlists.",
  keywords: [
    "Spotify playlist pitching",
    "music promotion",
    "playlist curators",
    "Spotify promotion",
    "music marketing",
    "playlist placement",
    "indie music promotion",
    "artist promotion",
    "music distribution",
    "playlist submission",
    "SoundCloud promotion",
    "music influencers",
    "EDM promotion",
    "Hip Hop promotion",
    "Pop music promotion",
  ],
  authors: [{ name: "SongRocket" }],
  creator: "SongRocket",
  publisher: "SongRocket",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.songrocket.com",
    siteName: "SongRocket",
    title: "SongRocket - Get Heard Worldwide",
    description:
      "Connect with top Spotify playlist curators and music influencers. AI secured platform with 31.2M+ follower reach. The best music marketing service for artists and labels.",
    images: [
      {
        url: "https://ext.same-assets.com/1889294069/3961103395.jpeg",
        width: 1200,
        height: 630,
        alt: "SongRocket - Music Promotion Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SongRocket - The Best Spotify Playlist Pitching Service",
    description:
      "Pitch your music to Spotify playlist curators. 31.2M+ follower reach, 1.4k+ unique playlists.",
    site: "@songrocket_",
    creator: "@songrocket_",
    images: ["https://ext.same-assets.com/1889294069/3961103395.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://ext.same-assets.com/1889294069/3861667992.ico",
    shortcut: "https://ext.same-assets.com/1889294069/3861667992.ico",
    apple: "https://ext.same-assets.com/1889294069/3861667992.ico",
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://www.songrocket.com",
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SongRocket",
  url: "https://www.songrocket.com",
  logo: "https://ext.same-assets.com/1889294069/3805986096.svg",
  description:
    "The best Spotify playlist pitching service platform for music marketing. Connect with playlist curators and grow your audience.",
  foundingDate: "2020",
  foundingLocation: "Switzerland",
  sameAs: [
    "https://www.instagram.com/songrocket_",
    "https://x.com/songrocket_",
    "https://soundcloud.com/luk_music",
    "https://open.spotify.com/user/lukofficial",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://www.songrocket.com/support",
  },
  offers: {
    "@type": "Offer",
    description: "Spotify playlist pitching and music promotion services",
    url: "https://www.songrocket.com/pricing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://code.tidio.co" />
        <link rel="preconnect" href="https://ext.same-assets.com" />
        <link rel="preconnect" href="https://static.axept.io" />

        {/* Additional meta tags */}
        <meta name="theme-color" content="#0e0c0c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">
        {children}
        {/* Tracking scripts loaded after page content */}
        <TrackingScripts />
      </body>
    </html>
  );
}
