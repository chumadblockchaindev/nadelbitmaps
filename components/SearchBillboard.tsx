"use client";

import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import BillboardSearchResult from "@/components/BillboardSearchResult";
import { fetchInventory, type InventoryItem } from "@/lib/inventory";

const RESULTS_PER_PAGE = 9;

const SearchBillboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [results, setResults] = useState<InventoryItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const runSearch = async (location: string, page: number) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const data = await fetchInventory({
        location: location || undefined,
        page,
        limit: RESULTS_PER_PAGE,
      });
      setResults(data.results);
      setCurrentPage(data.currentPage);
      setNumberOfPages(data.numberOfPages);
    } catch (err) {
      setResults([]);
      setError(err instanceof Error ? err.message : "Unable to load results.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    setSubmittedQuery(trimmed);
    runSearch(trimmed, 1);
  };

  const handleQuickLocation = (location: string) => {
    setSearchQuery(location);
    setSubmittedQuery(location);
    runSearch(location, 1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > numberOfPages) return;
    runSearch(submittedQuery, page);
  };

  return (
    <section className="relative w-full bg-white py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0A0A0A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-4xl px-6">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-900/60">
              Find Your Location
            </span>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="mb-6 text-center text-4xl font-black leading-[1.1] uppercase tracking-[0.08em] text-[#0A0A0A] sm:text-5xl lg:text-6xl">
          Search Available
          <br />
          <span className="text-[#DA1C21]">Billboard Spaces</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">
          Discover premium billboard locations across the country. Enter your preferred
          city, area, or keywords to find the perfect spot for maximum visibility and
          impact for your brand.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mx-auto max-w-3xl">
          <div className="relative flex items-center">
            <div className="absolute left-6 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, area, or keywords..."
              className="h-16 w-full rounded-full border border-gray-200 bg-white px-16 pr-36 text-base font-medium text-[#0A0A0A] placeholder:text-gray-400 shadow-sm transition-all duration-300 focus:border-[#D4A853] focus:outline-none focus:ring-2 focus:ring-[#D4A853]/20"
            />

            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 rounded-full bg-[#DA1C21] px-8 py-3.5 font-black uppercase tracking-[0.18em] text-[#ffff] transition-all duration-300 hover:bg-white hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Search
            </button>
          </div>
        </form>

        {/* Quick Location Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
            Popular:
          </span>
          {["Owerri", "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano"].map((location) => (
            <button
              key={location}
              onClick={() => handleQuickLocation(location)}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-[#DA1C21] hover:text-[#DA1C21]"
            >
              <MapPin size={14} />
              {location}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <BillboardSearchResult
          results={results}
          loading={loading}
          error={error}
          hasSearched={hasSearched}
          query={submittedQuery}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onPageChange={handlePageChange}
        />

        {/* Stats */}
        {!hasSearched && (
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-12">
            <div className="text-center">
              <p className="text-3xl font-black text-[#DA1C21]">500+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Billboard Locations
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#DA1C21]">50+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Cities Covered
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#DA1C21]">10M+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Monthly Reach
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBillboard;
