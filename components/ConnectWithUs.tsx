import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MessageSquare } from "lucide-react";

interface ConnectWithUsProps {
  serviceName?: string; // e.g. "Wayfinding Signage" — personalizes the headline
}

const channels = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 (0) 803 724 5237",
    href: "tel:+2348037245237",
    desc: "Speak directly with our team",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@nadelbitmaps.com",
    href: "mailto:hello@nadelbitmaps.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/2348037245237",
    desc: "Quick responses on WhatsApp",
  },
];

const ConnectWithUs = ({ serviceName }: ConnectWithUsProps) => {
  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden py-20 lg:py-28">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #DA1C21 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Geometry top-right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-[#DA1C21]/6 rotate-12" />
        <div className="absolute -top-8 -right-8 w-44 h-44 border border-[#DA1C21]/8 rotate-12" />
        {/* Geometry bottom-left */}
        <div className="absolute -bottom-16 -left-16 w-60 h-60 border border-[#DA1C21]/5 rotate-45" />
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-[#DA1C21]/[0.04] rotate-45" />
        {/* Gold radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at top, #DA1C21, transparent 65%)" }}
        />
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DA1C21]/35 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Top: Headline ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 border-2 border-[#DA1C21] rotate-45 shrink-0" />
              <span className="text-[#DA1C21] text-[9px] tracking-[0.45em] uppercase font-black">
                Work With Us
              </span>
            </div>

            <h2
              className="font-black text-white leading-none tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              {serviceName ? (
                <>
                  <span className="text-[#DA1C21]">Ready</span> for Your
                  <br />
                  {serviceName} Project?
                </>
              ) : (
                <>
                  <span className="text-[#DA1C21]">Ready</span> to Make
                  <br />
                  Your Brand Unforgettable?
                </>
              )}
            </h2>

            <p className="text-white/35 text-sm leading-relaxed max-w-lg tracking-wide mt-4">
              {serviceName
                ? `Let's talk about your ${serviceName} needs. Our team is ready to deliver a solution that's built for impact, on time and on budget.`
                : "From concept to completion, we handle every detail. Tell us about your project and let's create something extraordinary together."}
            </p>
          </div>

          {/* Desktop CTA cluster */}
          <div className="hidden lg:flex items-center gap-3 pb-1 shrink-0">
            <Link
              href="/contact#quote"
              className="
                flex items-center gap-2
                bg-[#DA1C21] text-[#ffff]
                text-[10px] font-black tracking-[0.2em] uppercase
                px-7 py-4
                hover:bg-white/30 transition-colors duration-200
                group/primary
              "
            >
              Get a Free Quote
              <ArrowUpRight
                size={12}
                className="group-hover/primary:translate-x-0.5 group-hover/primary:-translate-y-0.5 transition-transform duration-150"
              />
            </Link>
          </div>
        </div>

        {/* ── Middle: Channel cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {channels.map(({ icon: Icon, label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="
                group/card flex items-start gap-4 p-5
                border border-[#DA1C21]/12
                hover:border-[#DA1C21]/40 hover:bg-[#DA1C21]/[0.05]
                transition-all duration-250
              "
              style={{ borderRadius: "0.25rem 1.5rem" }}
            >
              {/* Icon box */}
              <div className="
                w-10 h-10 flex items-center justify-center shrink-0
                border border-[#DA1C21]/20
                group-hover/card:border-[#DA1C21]/60
                group-hover/card:bg-[#DA1C21]/10
                transition-all duration-200
              ">
                <Icon size={16} className="text-[#DA1C21]/50 group-hover/card:text-[#DA1C21] transition-colors duration-200" />
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <p className="text-[#DA1C21]/50 text-[8px] tracking-[0.35em] uppercase font-black mb-0.5">
                  {label}
                </p>
                <p className="text-white/70 text-xs font-semibold tracking-wide truncate group-hover/card:text-white transition-colors duration-150">
                  {value}
                </p>
                <p className="text-white/25 text-[9px] tracking-wide mt-0.5">{desc}</p>
              </div>

              <ArrowUpRight
                size={12}
                className="text-[#DA1C21]/0 group-hover/card:text-[#DA1C21]/60 shrink-0 mt-0.5 transition-all duration-150 -translate-x-1 group-hover/card:translate-x-0"
              />
            </a>
          ))}
        </div>

        {/* ── Bottom strip: Divider + Mobile CTAs + Tagline ── */}
        <div className="border-t border-[#DA1C21]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Mobile CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto lg:hidden">
            <Link
              href="/contact#quote"
              className="
                flex items-center justify-center gap-2 w-full sm:w-auto
                bg-[#DA1C21] text-[#0A0A0A]
                text-[10px] font-black tracking-[0.2em] uppercase
                px-6 py-3
                hover:bg-white transition-colors duration-200
              "
            >
              Get a Free Quote <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;