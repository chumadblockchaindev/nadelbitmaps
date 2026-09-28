"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Ruler, Search } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import type { InventoryItem } from "@/lib/inventory";

interface BillboardSearchResultProps {
  results: InventoryItem[];
  loading: boolean;
  error: string | null;
  hasSearched: boolean;
  query: string;
  currentPage: number;
  numberOfPages: number;
  onPageChange: (page: number) => void;
}

const BillboardSearchResult = ({
  results,
  loading,
  error,
  hasSearched,
  query,
  currentPage,
  numberOfPages,
  onPageChange,
}: BillboardSearchResultProps) => {
  if (!hasSearched) return null;

  return (
    <div className="mx-auto mt-14 max-w-6xl">
      {loading && (
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <Spinner className="h-10 w-10" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Searching billboards...
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 py-16 text-center">
          <p className="text-sm font-semibold text-[#DA1C21]">
            Something went wrong while fetching results.
          </p>
          <p className="text-xs text-gray-500">{error}</p>
        </div>
      )}

      {!loading && !error && results.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 py-20 text-center">
          <Search size={32} className="text-gray-300" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
            No billboards found
          </p>
          {query && (
            <p className="max-w-sm text-sm text-gray-400">
              We couldn&apos;t find any inventory matching &ldquo;{query}&rdquo;. Try a
              different location or keyword.
            </p>
          )}
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <BillboardCard key={item.id} item={item} />
            ))}
          </div>

          {numberOfPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#DA1C21] hover:text-[#DA1C21] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Page {currentPage} of {numberOfPages}
              </span>

              <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= numberOfPages}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#DA1C21] hover:text-[#DA1C21] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const BillboardCard = ({ item }: { item: InventoryItem }) => {
  const isAvailable = item.status === "available";

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={item.imageUrl}
          alt={item.location}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] ${
            isAvailable
              ? "bg-emerald-500 text-white"
              : "bg-[#0A0A0A]/80 text-white"
          }`}
        >
          {item.status}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start gap-2">
          <MapPin size={16} className="mt-0.5 shrink-0 text-[#DA1C21]" />
          <p className="text-sm font-semibold leading-snug text-[#0A0A0A]">
            {item.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-500">
          <span className="rounded-full bg-gray-100 px-3 py-1 capitalize">
            {item.type}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 capitalize">
            {item.subtype}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
            <Ruler size={12} />
            {item.size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillboardSearchResult;
