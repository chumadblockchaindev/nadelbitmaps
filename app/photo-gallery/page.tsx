"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Images,
  MapPin,
} from "lucide-react";
import ConnectWithUs from "@/components/ConnectWithUs";

// ─── Types ────────────────────────────────────────────────
interface GalleryPhoto {
  src: string;
  alt?: string;
  caption?: string;
  category: string;
  location?: string;
  year?: string;
}

// ─── Data ─────────────────────────────────────────────────
const categories = [
  "All",
  "Billboards",
  "Signage",
  "Brand Experiences",
  "Digital & Social",
  "Wayfinding",
];

const photos: GalleryPhoto[] = [
  { src: "/egress.jpg",  alt: "Lekki Expressway Billboard",     caption: "Lekki Expressway",        category: "Billboards",        location: "Lagos",  year: "2024" },
  { src: "/sinage2.jpg",  alt: "Wayfinding System - Mall",       caption: "Ikeja City Mall",          category: "Wayfinding",        location: "Ikeja",  year: "2024" },
  { src: "/sinage3.jpg",  alt: "Channel Sign - Corporate",       caption: "Victoria Island HQ",       category: "Signage",           location: "VI",     year: "2023" },
  { src: "/sinage4.jpg",  alt: "Fabric Branding Event",          caption: "Annual Brand Summit",      category: "Brand Experiences", location: "Abuja",  year: "2024" },
  { src: "/sinage5.jpg",  alt: "Fire Egress Signs - Hospital",   caption: "Lagos University Hospital",category: "Signage",           location: "Surulere",year: "2023"},
  { src: "/sinage6.jpg",  alt: "Social Media Campaign",          caption: "Q4 Digital Campaign",      category: "Digital & Social",  location: "Online", year: "2024" },
  { src: "/sinage7.jpg",  alt: "Billboard - Apapa Bridge",       caption: "Apapa Gantry Billboard",   category: "Billboards",        location: "Apapa",  year: "2023" },
  { src: "/sinage1.jpg",  alt: "Cap Branding - FMCG",            caption: "Product Launch Merch",     category: "Brand Experiences", location: "Lagos",  year: "2024" },
  { src: "/sinage.jpg",  alt: "Outdoor Media Coverage",         caption: "Mile 2 Flyover Wrap",      category: "Billboards",        location: "Mile 2", year: "2024" },
  { src: "/egress.jpg", alt: "Retail Wayfinding",              caption: "Landmark Mall System",     category: "Wayfinding",        location: "VI",     year: "2023" },
  { src: "/egress.jpg", alt: "Mug & Merch Branding",           caption: "Corporate Gift Set",       category: "Brand Experiences", location: "Lagos",  year: "2024" },
  { src: "/egress.jpg", alt: "Instagram Campaign",             caption: "Fashion Brand Campaign",   category: "Digital & Social",  location: "Online", year: "2024" },
];

// Varying heights for masonry feel
const heightClasses = [
  "h-[280px]", "h-[360px]", "h-[240px]",
  "h-[320px]", "h-[260px]", "h-[380px]",
  "h-[300px]", "h-[340px]", "h-[260px]",
  "h-[290px]", "h-[370px]", "h-[250px]",
];

// ─── Main Component ────────────────────────────────────────
export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? photos : photos.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="relative bg-white min-h-screen">

      {/* ══════════════════════════════════════════
          MINI HERO
      ══════════════════════════════════════════ */}
      <section className="relative bg-[#DA1C21] overflow-hidden pt-32 pb-16">

        {/* Background geometry */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #DA1C21 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-[350px] h-[350px] border border-[#DA1C21]/6 rotate-12" />
          <div className="absolute -top-8 -right-8 w-[200px] h-[200px] border border-[#DA1C21]/8 rotate-12" />
          <div className="absolute bottom-0 left-[12%] w-32 h-32 border border-[#DA1C21]/6 rotate-45" />
          <div
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DA1C21]/30 to-transparent"
          />
          <div
            className="absolute top-0 right-0 w-[500px] h-[300px] opacity-[0.04]"
            style={{ background: "radial-gradient(ellipse at top right, #DA1C21, transparent 65%)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-5 h-5 border-2 border-[#DA1C21] rotate-45 shrink-0" />
            <span className="text-[#DA1C21] text-[9px] tracking-[0.45em] uppercase font-black">
              Our Portfolio
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <h1
                className="font-black text-white leading-none tracking-tight mb-4"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="text-black">Photo</span> Gallery
              </h1>
              <p className="text-white/35 text-sm leading-relaxed max-w-lg tracking-wide">
                Every project tells a story. Browse our portfolio of billboards, signage systems, brand experiences, and digital campaigns — built for brands that demand to be seen.
              </p>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="mt-10 h-px bg-gradient-to-r from-[#DA1C21]/20 via-[#DA1C21]/5 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════ */}
      <section className="relative bg-white py-16 lg:py-20 overflow-hidden">

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* WORK watermark */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 text-[200px] font-black leading-none text-[#0A0A0A]/[0.022] tracking-tighter select-none pointer-events-none"
          style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          aria-hidden
        >
          PROJECTS
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* ── Filter Tabs ── */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`
                  relative text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2
                  transition-all duration-200 border
                  ${active === cat
                    ? "bg-[#DA1C21] text-[#ffff] border-[#DA1C21] shadow-md shadow-[#DA1C21]/20"
                    : "bg-white text-[#0A0A0A]/40 border-[#0A0A0A]/10 hover:border-[#DA1C21]/40 hover:text-[#0A0A0A]/70"
                  }
                `}
              >
                {cat}
                {active === cat && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#DA1C21] rotate-45" />
                )}
              </button>
            ))}

            {/* Count */}
            <span className="ml-auto text-[#0A0A0A]/25 text-[10px] tracking-[0.2em] uppercase font-semibold">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* ── Masonry Grid ── */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {filtered.map((photo, i) => (
              <div
                key={`${photo.src}-${i}`}
                className={`
                  relative ${heightClasses[i % heightClasses.length]}
                  break-inside-avoid group/card overflow-hidden
                  cursor-pointer mb-3
                `}
                style={{ borderRadius: i % 3 === 0 ? "1.5rem" : i % 3 === 1 ? "0.75rem 2rem" : "2rem 0.75rem" }}
                onClick={() => setLightbox(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt ?? "Gallery photo"}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-400" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#DA1C21] text-[#ffff] text-[7px] font-black tracking-[0.25em] uppercase px-2 py-1">
                    {photo.category}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-3 right-3 z-10 w-7 h-7 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 rotate-0 group-hover/card:rotate-0">
                  <ArrowUpRight size={12} className="text-white" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                  {photo.caption && (
                    <p className="text-white font-bold text-xs leading-tight tracking-wide mb-1">
                      {photo.caption}
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    {photo.location && (
                      <span className="flex items-center gap-1 text-white/50 text-[9px] tracking-wide">
                        <MapPin size={8} /> {photo.location}
                      </span>
                    )}
                    {photo.year && (
                      <span className="text-white/30 text-[9px]">{photo.year}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-[#0A0A0A]/8 rounded-3xl">
              <Images size={40} className="text-[#DA1C21]/30 mb-3" />
              <p className="text-[#0A0A0A]/25 text-sm tracking-widest uppercase font-semibold">
                No projects in this category yet
              </p>
            </div>
          )}
        </div>
      </section>

      <ConnectWithUs />
    </main>
  );
}