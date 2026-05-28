import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface ServicesHeroProps {
  category: string;       // e.g. "Signage Solutions"
  categorySlug: string;   // e.g. "signage-solutions"
  title: string;          // e.g. "Wayfinding Signage"
  description: string;    // 1–2 sentence service description
  tagline?: string;       // short punchy line e.g. "Guide. Direct. Inspire."
  index?: string;         // display number e.g. "01"
}

// Category accent symbols — matches NavMenu
const categoryMeta: Record<string, { icon: string }> = {
  "outdoor-advertising": { icon: "◈" },
  "signage-solutions":   { icon: "⬡" },
  "brand-experiences":   { icon: "◆" },
  "digital-social":      { icon: "◉" },
};

const ServicesHero = ({
  category,
  categorySlug,
  title,
  description,
}: ServicesHeroProps) => {
  const meta = categoryMeta[categorySlug] ?? { icon: "◈" };

  return (
    <section className="relative bg-[#da1c21] overflow-hidden pt-32 pb-20 min-h-[420px] flex items-end">

      {/* ── Background geometry ── */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* Rotated squares */}
        <div className="absolute top-12 right-[15%] w-48 h-48 border border-[#D4A853]/6 rotate-12" />
        <div className="absolute top-20 right-[18%] w-28 h-28 border border-[#D4A853]/8 rotate-12" />
        <div className="absolute -bottom-10 left-[8%] w-36 h-36 border border-[#D4A853]/5 rotate-45" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4A853 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853]/40 to-transparent"
        />

        {/* Radial glow left */}
        <div
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #D4A853, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

      

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div>

            {/* Title */}
            <h1
              className="text-white font-black leading-none tracking-tight mb-4"
              style={{
                fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 2.5rem)",
                letterSpacing: "0.02em",
              }}
            >
              {/* Split title — first word gold, rest white */}
              {title.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 0 ? (
                    <span className="text-[#000000]">{word}</span>
                  ) : (
                    <span> {word}</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-white/45 text-sm leading-relaxed max-w-xl tracking-wide">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 h-px bg-gradient-to-r from-[#D4A853]/20 via-[#D4A853]/5 to-transparent" />
      </div>
    </section>
  );
};

export default ServicesHero;