"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, MapPin, Ruler, Radio } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { fetchInventory, type InventoryItem } from "@/lib/inventory";

const DISPLAY_LIMIT = 12;

const AvailableBillboards = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    queueMicrotask(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchInventory({
          status: "available",
          limit: DISPLAY_LIMIT,
        });
        if (!cancelled) setItems(data.results);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Unable to load billboard spaces."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
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

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
              <Radio size={12} className="text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                Available Now
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-black leading-[1.1] uppercase tracking-[0.08em] text-[#0A0A0A] sm:text-5xl">
              Ready-to-Book <span className="text-[#DA1C21]">Billboard Spaces</span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A live look at billboard locations open for booking right now. Secure
              your spot before it&apos;s gone.
            </p>
          </div>

          {/* Arrow controls */}
          {!loading && !error && items.length > 0 && (
            <div className="hidden shrink-0 gap-3 sm:flex">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#DA1C21] hover:text-[#DA1C21]"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#DA1C21] hover:text-[#DA1C21]"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center gap-4 py-20">
            <Spinner className="h-10 w-10" />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Loading available spaces...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 py-16 text-center">
            <p className="text-sm font-semibold text-[#DA1C21]">
              Something went wrong while loading billboard spaces.
            </p>
            <p className="text-xs text-gray-500">{error}</p>
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 py-20 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              No available spaces right now
            </p>
            <p className="text-sm text-gray-400">Check back soon for new inventory.</p>
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-6 flex">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <BillboardSlide item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            {scrollSnaps.length > 1 && (
              <div className="mt-10 flex justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-[#DA1C21]"
                        : "w-1.5 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

const BillboardSlide = ({ item }: { item: InventoryItem }) => {
  return (
    <div className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:border-[#D4A853]/30 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.location}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
          Available
        </span>

        <div className="absolute bottom-4 left-4 right-4 flex items-start gap-2">
          <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
          <p className="text-sm font-bold leading-snug text-white">{item.location}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-500">
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

        <Link
          href={`/billboards/${item.id}?status=${item.status}`}
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#DA1C21] transition-colors hover:text-[#0A0A0A]"
        >
          View This Space
        </Link>
      </div>
    </div>
  );
};

export default AvailableBillboards;
