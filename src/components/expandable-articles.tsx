"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface Article {
  id: string;
  title: string;
  content: string;
}

interface ExpandableArticlesProps {
  articles: Article[];
}

export function ExpandableArticles({ articles }: ExpandableArticlesProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    // Check for hash on initial load
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenId(hash);
      // Scroll to the element after a short delay to ensure it's rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (newHash) {
        setOpenId(newHash);
        setTimeout(() => {
          const element = document.getElementById(newHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleArticle = (id: string) => {
    if (openId === id) {
      setOpenId(null);
      // Update URL without hash
      window.history.pushState(null, "", window.location.pathname);
    } else {
      setOpenId(id);
      // Update URL with hash
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="space-y-4 mb-12">
      {articles.map((article) => (
        <div
          key={article.id}
          id={article.id}
          className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleArticle(article.id)}
            className="flex items-center justify-between p-6 cursor-pointer w-full text-left"
            aria-expanded={openId === article.id}
            aria-controls={`content-${article.id}`}
          >
            <span className="text-lg font-semibold text-white pr-4">{article.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#FF6B35] transition-transform flex-shrink-0 ${
                openId === article.id ? "rotate-180" : ""
              }`}
            />
          </button>
          {openId === article.id && (
            <div id={`content-${article.id}`} className="px-6 pb-6">
              <div className="text-white/70 whitespace-pre-line">{article.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
