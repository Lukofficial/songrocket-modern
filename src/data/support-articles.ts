// All support articles for search functionality
export interface SupportArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  href: string;
  keywords: string[];
}

export const supportArticles: SupportArticle[] = [
  // FAQs
  {
    id: "faq-1",
    title: "How does it work?",
    description: "In three simple steps, you can create a campaign for an already-released song or a track prior release. This will be pitched to our carefully chosen curator network.",
    category: "FAQs",
    categorySlug: "faqs",
    href: "/support/faqs",
    keywords: ["how", "work", "campaign", "steps", "start", "begin", "process"],
  },
  {
    id: "faq-2",
    title: "Can I ReRun a finished campaign? Or extend it?",
    description: "Yes, once a campaign has finished you can extend it as many times as you want. Similar to a subscription but completely under your control.",
    category: "FAQs",
    categorySlug: "faqs",
    href: "/support/faqs",
    keywords: ["rerun", "extend", "finished", "campaign", "again", "continue"],
  },
  {
    id: "faq-3",
    title: "Case Study & SongRocket Review",
    description: "Real success stories from artists who have used our platform. Check out case studies to see real results.",
    category: "FAQs",
    categorySlug: "faqs",
    href: "/support/faqs",
    keywords: ["case", "study", "review", "success", "results", "testimonial"],
  },
  {
    id: "faq-4",
    title: "How can I become a curator / music influencer?",
    description: "Create an account and connect your Spotify. Go to Settings and make sure your Spotify user with the playlist is connected.",
    category: "FAQs",
    categorySlug: "faqs",
    href: "/support/faqs",
    keywords: ["become", "curator", "influencer", "join", "apply", "playlister"],
  },
  {
    id: "faq-5",
    title: "What is a curator?",
    description: "A curator (also known as a music influencer or playlister) is someone who creates and manages Spotify playlists.",
    category: "FAQs",
    categorySlug: "faqs",
    href: "/support/faqs",
    keywords: ["what", "curator", "definition", "playlister", "influencer"],
  },

  // For Artists
  {
    id: "artist-1",
    title: "How much will my playlist campaign cost?",
    description: "Campaigns start from as low as $3 USD. Choose any budget for your genres. Higher budget means more curators.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/pricing",
    keywords: ["cost", "price", "pricing", "budget", "money", "pay", "campaign"],
  },
  {
    id: "artist-2",
    title: "How long does a campaign run?",
    description: "Each campaign runs at least 7 days. If curators haven't finished reviewing, it extends automatically.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["long", "duration", "days", "time", "run", "campaign"],
  },
  {
    id: "artist-3",
    title: "What payment options are available?",
    description: "We accept major credit cards, PayPal, and various other payment methods through our secure payment processor.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["payment", "pay", "credit", "card", "paypal", "method"],
  },
  {
    id: "artist-4",
    title: "Can I trust the platform?",
    description: "Absolutely! We're registered in Switzerland (CHE-137.124.111), and all our playlists are manually verified and fake-checked.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["trust", "safe", "secure", "legit", "legitimate", "real"],
  },
  {
    id: "artist-5",
    title: "How to identify fake streams and playlists",
    description: "We use AI and manual checks to verify all playlists. Look for engagement rates, follower growth patterns, and playlist activity.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["fake", "streams", "bot", "bots", "identify", "detect"],
  },
  {
    id: "artist-6",
    title: "Is there any guarantee how many plays I get?",
    description: "No, we don't guarantee placements or plays as this goes against Spotify's Terms & Conditions.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["guarantee", "promise", "plays", "streams", "placement"],
  },
  {
    id: "artist-7",
    title: "How do I start a campaign?",
    description: "Create an account, upload your song, select your genres, set your budget, and launch your campaign.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["start", "begin", "create", "launch", "campaign", "how"],
  },
  {
    id: "artist-8",
    title: "What links can I use to pitch my song?",
    description: "You can use Spotify, SoundCloud, or YouTube links. We recommend Spotify for the best results.",
    category: "Artists, Labels, Management",
    categorySlug: "for-artists",
    href: "/support/for-artists",
    keywords: ["links", "spotify", "soundcloud", "youtube", "url", "submit"],
  },

  // For Curators
  {
    id: "curator-1",
    title: "How to load Playlists or music to playlister",
    description: "Create an account, connect your Spotify, click Refresh Playlist, and contact us for approval.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["load", "playlist", "add", "connect", "spotify", "start"],
  },
  {
    id: "curator-2",
    title: "How to monetize a Spotify playlist",
    description: "Once approved as a curator, you'll receive song submissions to review. Earn $1-$20 per review based on your playlist size.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["monetize", "earn", "money", "paid", "income", "revenue"],
  },
  {
    id: "curator-3",
    title: "How much can I get paid?",
    description: "Earn $1-$20 per review depending on your playlist followers and activity. Payments made via Wise.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["paid", "earn", "money", "rate", "per", "review"],
  },
  {
    id: "curator-4",
    title: "What's the minimum payout amount?",
    description: "Minimum payout is $20 USD. Maximum is $12,000 USD per payout.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["minimum", "payout", "withdraw", "cash", "out"],
  },
  {
    id: "curator-5",
    title: "How long does it take to get a payout?",
    description: "Payouts are processed within 1-3 business days via Wise after approval.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["payout", "time", "days", "when", "receive", "payment"],
  },
  {
    id: "curator-6",
    title: "What are the requirements to join as curator?",
    description: "Active Spotify playlist with at least 100 genuine followers, regular updates, and genuine engagement.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["requirements", "join", "apply", "minimum", "followers", "qualify"],
  },
  {
    id: "curator-7",
    title: "How long do I need to keep a track in a playlist?",
    description: "There's no strict minimum, but we recommend keeping tracks for at least 2-4 weeks for best results.",
    category: "Curators",
    categorySlug: "for-curators",
    href: "/support/for-curators",
    keywords: ["keep", "track", "playlist", "duration", "long", "remove"],
  },

  // General Tips
  {
    id: "tips-1",
    title: "Playlisting Service and Pitching to Curators: Why It Still Matters",
    description: "Getting your music heard is key to success. Playlisting services and pitching to curators remain foundational strategies.",
    category: "General Tips & Music Industry",
    categorySlug: "general-tips",
    href: "/support/general-tips",
    keywords: ["playlisting", "pitching", "curators", "important", "why", "matters"],
  },
  {
    id: "tips-2",
    title: "Spotify Removes Streams",
    description: "Understanding why Spotify removes streams and how to avoid artificial streaming that can hurt your account.",
    category: "General Tips & Music Industry",
    categorySlug: "general-tips",
    href: "/support/general-tips",
    keywords: ["spotify", "removes", "streams", "fake", "artificial", "bot"],
  },
  {
    id: "tips-3",
    title: "How to get more streams in 2025",
    description: "Strategies and tips for growing your Spotify streams organically in 2025.",
    category: "General Tips & Music Industry",
    categorySlug: "general-tips",
    href: "/support/general-tips",
    keywords: ["streams", "grow", "increase", "more", "2025", "tips"],
  },
  {
    id: "tips-4",
    title: "The Best Free Music Distribution in 2025",
    description: "Compare the best free music distribution services available for independent artists.",
    category: "General Tips & Music Industry",
    categorySlug: "general-tips",
    href: "/support/general-tips",
    keywords: ["distribution", "free", "distrokid", "tunecore", "upload", "release"],
  },
  {
    id: "tips-5",
    title: "How To Build Your Monthly Listeners on Spotify",
    description: "Practical strategies to grow your monthly listener count on Spotify.",
    category: "General Tips & Music Industry",
    categorySlug: "general-tips",
    href: "/support/general-tips",
    keywords: ["monthly", "listeners", "grow", "build", "increase", "spotify"],
  },
  {
    id: "tips-6",
    title: "Alternative to Submithub, PlaylistPush and Groover",
    description: "Compare SongRocket with other playlist pitching services like Submithub, PlaylistPush, and Groover.",
    category: "General Tips & Music Industry",
    categorySlug: "general-tips",
    href: "/support/general-tips",
    keywords: ["submithub", "playlistpush", "groover", "alternative", "compare", "vs"],
  },

  // Solutions
  {
    id: "solution-1",
    title: "Playlist Pitching for Labels",
    description: "Labels can use SongRocket to reach new audiences worldwide with budget-based campaigns.",
    category: "Solutions",
    categorySlug: "solutions",
    href: "/support/solutions",
    keywords: ["labels", "label", "pitching", "campaigns", "bulk", "multiple"],
  },
  {
    id: "solution-2",
    title: "Artist Pitching For Playlists",
    description: "Independent artists can pitch their music directly to our curated network of playlist curators.",
    category: "Solutions",
    categorySlug: "solutions",
    href: "/support/solutions",
    keywords: ["artist", "pitching", "independent", "indie", "submit", "music"],
  },
  {
    id: "solution-3",
    title: "Verified SongRocket Reviews",
    description: "Read verified reviews from trusted music industry brands and artists who have used our platform.",
    category: "Solutions",
    categorySlug: "solutions",
    href: "/support/solutions",
    keywords: ["reviews", "testimonials", "verified", "trusted", "real"],
  },

  // Affiliate
  {
    id: "affiliate-1",
    title: "Refer to a friend or network",
    description: "Earn 5% lifetime passive income by referring friends to SongRocket. Create your affiliate link in settings.",
    category: "Affiliate Partner",
    categorySlug: "affiliate",
    href: "/support/affiliate",
    keywords: ["affiliate", "refer", "referral", "earn", "commission", "friend"],
  },

  // SongRocket Records
  {
    id: "records-1",
    title: "Submit Your Music to SongRocket Records",
    description: "Submit your demo to SongRocket Records / Sony. We focus on artist development.",
    category: "SongRocket Records",
    categorySlug: "record-label",
    href: "/record-label/demo-submission",
    keywords: ["submit", "demo", "record", "label", "sony", "sign"],
  },
  {
    id: "records-2",
    title: "About SongRocket Records",
    description: "Learn about our partnership with Sony Music and our focus on artist development.",
    category: "SongRocket Records",
    categorySlug: "record-label",
    href: "/record-label/learn-more",
    keywords: ["about", "records", "label", "sony", "partnership", "development"],
  },
];

// Search function
export function searchSupportArticles(query: string): SupportArticle[] {
  if (!query.trim()) return [];

  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return supportArticles
    .map((article) => {
      const titleLower = article.title.toLowerCase();
      const descLower = article.description.toLowerCase();
      const keywordsLower = article.keywords.join(" ").toLowerCase();
      const categoryLower = article.category.toLowerCase();

      let score = 0;

      for (const term of searchTerms) {
        // Title matches (highest weight)
        if (titleLower.includes(term)) score += 10;
        // Keyword matches (high weight)
        if (keywordsLower.includes(term)) score += 5;
        // Description matches (medium weight)
        if (descLower.includes(term)) score += 3;
        // Category matches (lower weight)
        if (categoryLower.includes(term)) score += 2;
      }

      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
}
