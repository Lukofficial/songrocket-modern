"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { searchSupportArticles, type SupportArticle } from "@/data/support-articles";

export function SupportSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SupportArticle[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Search when query changes
  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = searchSupportArticles(query);
      setResults(searchResults.slice(0, 8)); // Limit to 8 results
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].href;
        }
        break;
      case "Escape":
        setIsOpen(false);
        setQuery("");
        break;
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder="Search for help... (e.g., pricing, payout, campaign)"
          className="w-full px-6 py-4 pl-14 pr-12 bg-white/5 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
          aria-label="Search support articles"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls="search-results"
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          id="search-results"
          className="absolute top-full left-0 right-0 mt-2 bg-[#1a1818] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
          role="listbox"
        >
          <div className="p-2">
            <p className="px-4 py-2 text-xs text-white/40 uppercase tracking-wider">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </p>
            {results.map((article, index) => (
              <Link
                key={article.id}
                href={article.href}
                className={`flex items-start gap-4 px-4 py-3 rounded-xl transition-all ${
                  index === selectedIndex
                    ? "bg-[#FF6B35]/20 text-white"
                    : "hover:bg-white/5 text-white/80"
                }`}
                onClick={() => setIsOpen(false)}
                role="option"
                aria-selected={index === selectedIndex}
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{article.title}</h4>
                  <p className="text-sm text-white/50 truncate mt-0.5">
                    {article.description}
                  </p>
                  <span className="inline-block mt-1 text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3 bg-white/5">
            <p className="text-xs text-white/40 text-center">
              Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">↑</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">↓</kbd> to navigate,{" "}
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">Enter</kbd> to select
            </p>
          </div>
        </div>
      )}

      {/* No results message */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-[#1a1818] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
        >
          <div className="p-8 text-center">
            <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <h4 className="text-white font-medium mb-2">No results found</h4>
            <p className="text-white/50 text-sm mb-4">
              Try different keywords or browse our support categories below
            </p>
            <Link
              href="/support/chat"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
