import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";

interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
  tag?: string; // e.g. "Featured", "Lagos", "2024"
  span?: "normal" | "wide" | "tall"; // layout variant
}

interface ServicesGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

// Assigns grid layout classes per item based on span + position
function getGridClass(span: GalleryItem["span"], index: number): string {
  if (span === "wide") return "col-span-2 row-span-1";
  if (span === "tall") return "col-span-1 row-span-2";
  return "col-span-1 row-span-1";
}

const ServicesGallery = ({
  title = "Project Gallery",
  subtitle = "A glimpse into our work",
  images = [],
  ctaLabel = "View Full Gallery",
  ctaHref = "/gallery",
}: ServicesGalleryProps) => {
  // Split images: first 5 for hero bento grid, rest for strip
  const bentoImages = images.slice(0, 5);
  const stripImages = images.slice(5, 9);

  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-28">

      {/* ── Subtle top border ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DA1C21]/25 to-transparent" />

      {/* ── Large faded word watermark ── */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[180px] font-black leading-none text-[#0A0A0A]/[0.025] tracking-tighter select-none pointer-events-none"
        style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
        aria-hidden
      >
        WORK
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border-2 border-[#DA1C21] rotate-45 shrink-0" />
              <span className="text-[#DA1C21] text-[9px] tracking-[0.4em] uppercase font-black">
                Our Work
              </span>
            </div>

            <h2
              className="font-black text-[#0A0A0A] leading-none tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              {title.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 0 ? (
                    <span className="text-[#DA1C21]">{word}</span>
                  ) : (
                    <span> {word}</span>
                  )}
                </span>
              ))}
            </h2>

            <p className="text-[#0A0A0A]/35 text-sm tracking-wide italic font-medium mt-2">
              {subtitle}
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href={ctaHref}
            className="
              hidden sm:flex items-center gap-2 shrink-0
              border border-[#0A0A0A]/15 text-[#0A0A0A]/50
              text-[10px] font-black tracking-[0.2em] uppercase
              px-5 py-3 self-end
              hover:bg-[#DA1C21] hover:text-[#0A0A0A] hover:border-[#DA1C21]
              transition-all duration-200 group/cta
            "
          >
            <Images size={12} />
            {ctaLabel}
            <ArrowUpRight
              size={11}
              className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-150"
            />
          </Link>
        </div>

        {/* ── Bento Grid (first 5 images) ── */}
        {bentoImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3 mb-3">

            {/* Item 0 — always LARGE (2x2) */}
            {bentoImages[0] && (
              <div className="col-span-2 row-span-2 relative group/img overflow-hidden rounded-3xl shadow-lg shadow-black/8">
                <Image
                  src={bentoImages[0].src}
                  alt={bentoImages[0].alt ?? "Gallery image"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Overlay item={bentoImages[0]} large />
              </div>
            )}

            {/* Item 1 — normal (1x1) */}
            {bentoImages[1] && (
              <div className="col-span-1 row-span-1 relative group/img overflow-hidden rounded-2xl shadow-md shadow-black/6">
                <Image
                  src={bentoImages[1].src}
                  alt={bentoImages[1].alt ?? "Gallery image"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  sizes="25vw"
                />
                <Overlay item={bentoImages[1]} />
              </div>
            )}

            {/* Item 2 — normal (1x1) */}
            {bentoImages[2] && (
              <div className="col-span-1 row-span-1 relative group/img overflow-hidden rounded-2xl shadow-md shadow-black/6">
                <Image
                  src={bentoImages[2].src}
                  alt={bentoImages[2].alt ?? "Gallery image"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  sizes="25vw"
                />
                <Overlay item={bentoImages[2]} />
              </div>
            )}

            {/* Item 3 — wide (2x1) */}
            {bentoImages[3] && (
              <div className="col-span-2 row-span-1 relative group/img overflow-hidden rounded-2xl shadow-md shadow-black/6">
                <Image
                  src={bentoImages[3].src}
                  alt={bentoImages[3].alt ?? "Gallery image"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  sizes="50vw"
                />
                <Overlay item={bentoImages[3]} />
              </div>
            )}

            {/* Item 4 — only on lg: fills remaining corner */}
            {bentoImages[4] && (
              <div className="hidden lg:block col-span-1 row-span-1 relative group/img overflow-hidden rounded-2xl shadow-md shadow-black/6">
                <Image
                  src={bentoImages[4].src}
                  alt={bentoImages[4].alt ?? "Gallery image"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  sizes="25vw"
                />
                <Overlay item={bentoImages[4]} />

                {/* "More projects" hint if there are strip images */}
                {stripImages.length > 0 && (
                  <div className="absolute inset-0 bg-[#0A0A0A]/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <span className="text-white font-black text-2xl">+{stripImages.length}</span>
                    <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase">More Projects</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Strip row (images 5–8) ── */}
        {stripImages.length > 0 && (
          <div className={`grid gap-3 ${
            stripImages.length === 1 ? "grid-cols-1" :
            stripImages.length === 2 ? "grid-cols-2" :
            stripImages.length === 3 ? "grid-cols-3" :
            "grid-cols-2 sm:grid-cols-4"
          }`}>
            {stripImages.map((item, i) => (
              <div
                key={i}
                className="relative h-[150px] sm:h-[170px] group/img overflow-hidden rounded-2xl shadow-sm shadow-black/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt ?? "Gallery image"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  sizes="25vw"
                />
                <Overlay item={item} />
              </div>
            ))}
          </div>
        )}

        {/* ── Empty state ── */}
        {images.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-[#0A0A0A]/10 rounded-3xl">
            <Images size={40} className="text-[#DA1C21]/30 mb-4" />
            <p className="text-[#0A0A0A]/25 text-sm tracking-widest uppercase font-semibold">
              No images yet
            </p>
          </div>
        )}

        {/* ── Bottom: count + mobile CTA ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#0A0A0A]/6">
          {/* Mobile CTA */}
          <Link
            href={ctaHref}
            className="
              sm:hidden flex items-center gap-2 w-full justify-center
              bg-[#0A0A0A] text-white
              text-[10px] font-black tracking-[0.2em] uppercase
              px-6 py-3
              hover:bg-[#DA1C21] hover:text-[#0A0A0A]
              transition-colors duration-200
            "
          >
            {ctaLabel}
            <ArrowUpRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// ── Reusable image overlay ──
function Overlay({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  return (
    <>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-400" />

      {/* Tag badge */}
      {item.tag && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#DA1C21] text-[#ffff] text-[8px] font-black tracking-[0.25em] uppercase px-2.5 py-1">
            {item.tag}
          </span>
        </div>
      )}

      {/* Caption on hover */}
      {item.caption && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-2 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-300">
          <p className={`text-white font-bold leading-tight tracking-wide ${large ? "text-sm" : "text-xs"}`}>
            {item.caption}
          </p>
        </div>
      )}

      {/* Corner arrow icon on hover */}
      <div className="absolute top-3 right-3 z-10 w-7 h-7 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
        <ArrowUpRight size={12} className="text-white" />
      </div>
    </>
  );
}

export default ServicesGallery;