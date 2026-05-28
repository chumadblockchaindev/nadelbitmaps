import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServicesAboutProps {
  title: string;               // e.g. "Wayfinding Signage"
  subtitle: string;            // e.g. "Built to guide. Designed to impress."
  body: string;                // main paragraph
  highlights?: string[];       // bullet feature list (max 4–5)
  image: string;               // image path e.g. "/img/wayfinding.jpg"
  imageAlt?: string;
  stat?: { value: string; label: string }[];  // e.g. [{value:"200+", label:"Projects Done"}]
  reverse?: boolean;           // flip image/text side
}

const ServicesAbout = ({
  title,
  subtitle,
  body,
  highlights = [],
  image,
  imageAlt = "Service image",
  stat = [],
  reverse = false,
}: ServicesAboutProps) => {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-28">

      {/* ── Subtle background texture ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[520px] ${
            reverse ? "lg:[direction:rtl]" : ""
          }`}
        >

          {/* ── Image side ── */}
          <div
            className={`relative ${reverse ? "[direction:ltr]" : ""}`}
            style={{ isolation: "isolate" }}
          >
            {/* Image container with curve clip */}
            <div
              className={`relative h-[340px] lg:h-full overflow-hidden shadow-2xl shadow-black/10 ${
                reverse
                  ? "rounded-[0_2rem_2rem_0] lg:rounded-[0_3rem_3rem_0]"
                  : "rounded-[2rem_0_0_2rem] lg:rounded-[3rem_0_0_3rem]"
              }`}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Dark overlay gradient */}
              <div
                className={`absolute inset-0 ${
                  reverse
                    ? "bg-gradient-to-l from-black/30 via-transparent to-transparent"
                    : "bg-gradient-to-r from-black/30 via-transparent to-transparent"
                }`}
              />

              {/* Stats overlay — bottom of image */}
              {stat.length > 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    {stat.map(({ value, label }, i) => (
                      <React.Fragment key={label}>
                        <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl">
                          <span className="text-white font-black text-xl leading-none tracking-tight">
                            {value}
                          </span>
                          <span className="text-white/60 text-[9px] tracking-[0.25em] uppercase font-semibold mt-0.5">
                            {label}
                          </span>
                        </div>
                        {i < stat.length - 1 && (
                          <div className="w-px h-8 bg-white/20" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Corner accent diamond */}
              <div
                className={`absolute top-5 ${
                  reverse ? "left-5" : "right-5"
                } w-5 h-5 bg-[#DA1C21] rotate-45 opacity-80`}
              />
            </div>

            {/* Floating gold card — peeks from behind image into text area */}
            <div
              className={`absolute -bottom-6 ${
                reverse ? "-left-4 lg:-left-6" : "-right-4 lg:-right-6"
              } z-10 bg-[#DA1C21] px-5 py-3 shadow-xl shadow-[#DA1C21]/20`}
              style={{
                borderRadius: reverse
                  ? "0.75rem 0 0 0.75rem"
                  : "0 0.75rem 0.75rem 0",
              }}
            >
              <p className="text-[#ffff] text-[8px] tracking-[0.35em] uppercase font-black">
                Nadel Bitmaps
              </p>
              <p className="text-[#ffff]/60 text-[7px] tracking-[0.2em] uppercase font-semibold">
                Multimedia Co.
              </p>
            </div>
          </div>

          {/* ── Text side ── */}
          <div
            className={`relative flex flex-col justify-center pt-12 pb-6 lg:pt-0 lg:pb-0 ${
              reverse
                ? "[direction:ltr] lg:pr-16 xl:pr-20"
                : "lg:pl-16 xl:pl-20"
            }`}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 border-2 border-[#DA1C21] rotate-45 shrink-0" />
              <span className="text-[#DA1C21] text-[9px] tracking-[0.4em] uppercase font-black">
                About This Service
              </span>
            </div>

            {/* Title */}
            <h2
              className="font-black text-[#0A0A0A] leading-none tracking-tight mb-3"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
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

            {/* Subtitle */}
            <p className="text-[#0A0A0A]/40 text-sm tracking-wide italic font-medium mb-6">
              {subtitle}
            </p>

            {/* Thin gold rule */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#DA1C21] to-transparent mb-6" />

            {/* Body text */}
            <p className="text-[#0A0A0A]/55 text-sm leading-[1.85] tracking-wide mb-8">
              {body}
            </p>

            {/* Highlights list */}
            {highlights.length > 0 && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 group">
                    <CheckCircle2
                      size={14}
                      className="text-[#DA1C21] mt-0.5 shrink-0"
                    />
                    <span className="text-[#0A0A0A]/60 text-xs leading-snug tracking-wide">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA row */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact#quote"
                className="
                  flex items-center gap-2
                  bg-[#0A0A0A] text-white
                  text-[10px] font-black tracking-[0.2em] uppercase
                  px-6 py-3
                  hover:bg-[#DA1C21] hover:text-[#ffff]
                  transition-colors duration-200
                  group/cta
                "
              >
                Get a Quote
                <ArrowUpRight
                  size={11}
                  className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-150"
                />
              </Link>

              <Link
                href="/gallery"
                className="
                  flex items-center gap-1.5
                  text-[#0A0A0A]/40 text-[10px] font-semibold tracking-[0.2em] uppercase
                  hover:text-[#DA1C21] transition-colors duration-200
                  group/sec
                "
              >
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAbout;