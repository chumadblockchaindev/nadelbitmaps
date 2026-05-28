"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiLinkedin, CiYoutube } from "react-icons/ci";
import Image from "next/image";

const services = [
  {
    category: "Outdoor Advertising",
    slug: "outdoor-advertising",
    items: [
      { name: "Billboards", href: "/services/billboards" },
      { name: "Outdoor Media Coverage", href: "/services/outdoor-media" },
    ],
  },
  {
    category: "Signage Solutions",
    slug: "signage-solutions",
    items: [
      { name: "Wayfinding Signage", href: "/services/wayfinding" },
      { name: "Fire & Egress Signs", href: "/services/fire-egress" },
      { name: "Channel Signs", href: "/services/channel-signs" },
    ],
  },
  {
    category: "Brand Experiences",
    slug: "brand-experiences",
    items: [
      { name: "Sartorial / Fabric Branding", href: "/services/fabric-branding" },
      { name: "Cap & Mug Branding", href: "/services/merchandise" },
    ],
  },
  {
    category: "Digital & Social",
    slug: "digital-social",
    items: [
      { name: "Social Media Advertising", href: "/services/social-media" },
    ],
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Get a Quote", href: "/contact#quote" },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: CiFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: CiTwitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: CiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: CiYoutube, href: "https://youtube.com", label: "YouTube" },
];

const contact = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "113, Wetheral Road, Owerri, Imo State Nigeria",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 (0) 803 724 5237",
    href: "tel:+2348037245237",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@nadelbitmaps.com",
    href: "mailto:hello@nadelbitmaps.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">

      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Large rotated square top-right */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] border border-[#DA1C21]/6 rotate-12" />
        <div className="absolute -top-20 -right-20 w-[280px] h-[280px] border border-[#DA1C21]/5 rotate-12" />
        {/* Bottom left geometry */}
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] border border-[#DA1C21]/5 rotate-45" />
        <div className="absolute bottom-10 left-10 w-[120px] h-[120px] border border-[#DA1C21]/8 rotate-45" />
        {/* Subtle radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at center top, #DA1C21, transparent 70%)",
          }}
        />
        {/* Horizontal rule texture lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DA1C21]/30 to-transparent" />
      </div>

      {/* ── Newsletter Strip ── */}
      <div className="relative border-b border-[#DA1C21]/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#DA1C21] text-[9px] tracking-[0.4em] uppercase font-bold mb-1">
              Stay in the Loop
            </p>
            <h3 className="text-slate-900 text-xl font-black tracking-tight">
              Get brand insights & offers
            </h3>
          </div>
          <div className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="
                flex-1 md:w-64 bg-slate-100 border border-[#DA1C21]/20
                text-slate-900 text-xs tracking-wide
                px-4 py-3 outline-none
                placeholder:text-slate-900/20
                focus:border-[#DA1C21]/50
                transition-colors duration-200
              "
            />
            <button className="
              bg-[#DA1C21] text-[#ffff] text-[10px] font-black
              tracking-[0.2em] uppercase px-5 py-3
              flex items-center gap-1.5
              hover:bg-white transition-colors duration-200 shrink-0
            ">
              Subscribe
              <ArrowUpRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.6fr_1fr] gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-50 h-10 shrink-0">
                <Image
                  src="/bitmaps-logo-black.png"
                  alt="Bitmaps Logo"
                  fill
                  loading="lazy"
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-slate-900/35 text-xs leading-relaxed tracking-wide max-w-[260px]">
              From the highway billboard to the branded coffee mug — we cover every touchpoint of your brand's world with precision and creativity.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-3">
              {contact.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group/contact"
                  >
                    <span className="w-7 h-7 flex items-center justify-center border border-[#DA1C21]/20 shrink-0 group-hover/contact:border-[#DA1C21]/60 group-hover/contact:bg-[#DA1C21]/8 transition-all duration-200">
                      <Icon size={12} className="text-[#DA1C21]/60 group-hover/contact:text-[#DA1C21] transition-colors duration-200" />
                    </span>
                    <div>
                      <p className="text-[#DA1C21]/40 text-[8px] tracking-[0.25em] uppercase font-bold leading-none mb-0.5">
                        {label}
                      </p>
                      <p className="text-slate-900/50 text-[10px] leading-snug group-hover/contact:text-slate-900/80 transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <p className="text-[#DA1C21] text-[9px] tracking-[0.35em] uppercase font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#DA1C21]/50" />
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group/link flex items-center gap-2 text-slate-900/40 text-xs tracking-wide hover:text-[#DA1C21] transition-colors duration-150"
                  >
                    <span className="w-3 h-px bg-white/15 group-hover/link:w-5 group-hover/link:bg-[#DA1C21]/60 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <p className="text-[#DA1C21] text-[9px] tracking-[0.35em] uppercase font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#DA1C21]/50" />
              Our Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {services.map((group) => (
                <div key={group.slug}>
                  <Link
                    href={`/services/${group.slug}`}
                    className="text-slate-900/60 text-[10px] font-bold tracking-[0.1em] uppercase hover:text-[#DA1C21] transition-colors duration-150 block mb-2"
                  >
                    {group.category}
                  </Link>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group/svc flex items-center gap-1.5 text-slate-900/25 text-[10px] hover:text-slate-900/60 transition-colors duration-150"
                        >
                          <span className="w-1 h-1 bg-[#DA1C21]/30 rotate-45 shrink-0 group-hover/svc:bg-[#DA1C21]/70 transition-colors duration-150" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 4: Social + Hours ── */}
          <div className="flex flex-col gap-8">
            {/* Social */}
            <div>
              <p className="text-[#DA1C21] text-[9px] tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-[#DA1C21]/50" />
                Follow Us
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      w-8 h-8 flex items-center justify-center
                      border border-[#DA1C21]/15
                      text-slate-900/30
                      hover:border-[#DA1C21]/50 hover:text-[#DA1C21] hover:bg-[#DA1C21]/8
                      transition-all duration-200
                    "
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <p className="text-[#DA1C21] text-[9px] tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-[#DA1C21]/50" />
                Business Hours
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { day: "Mon – Fri", time: "8:00am – 6:00pm" },
                  { day: "Saturday", time: "9:00am – 3:00pm" },
                  { day: "Sunday", time: "Closed" },
                ].map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between gap-4">
                    <span className="text-slate-900/30 text-[10px]">{day}</span>
                    <span className={`text-[10px] font-medium ${time === "Closed" ? "text-red-400/50" : "text-[#DA1C21]/60"}`}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/contact#quote"
              className="
                flex items-center justify-between gap-2
                border border-[#DA1C21]/30 px-4 py-3
                text-[#DA1C21] text-[10px] font-black tracking-[0.2em] uppercase
                hover:bg-[#DA1C21] hover:text-[#0A0A0A] hover:border-[#DA1C21]
                transition-all duration-200 group/cta
              "
            >
              Request a Quote
              <ArrowUpRight size={11} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative border-t border-[#DA1C21]/10">
        {/* Gold gradient rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DA1C21]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-900/20 text-[9px] tracking-[0.25em] uppercase">
            © {new Date().getFullYear()} Nadel Bitmaps Multimedia Co. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-slate-900/20 text-[9px] tracking-[0.2em] uppercase hover:text-[#DA1C21]/60 transition-colors duration-150"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              flex items-center gap-1.5
              text-slate-900/20 text-[9px] tracking-[0.25em] uppercase
              hover:text-[#DA1C21]/60 transition-colors duration-150 group/top
            "
          >
            Back to Top
            <span className="
              w-5 h-5 border border-slate-200/10 flex items-center justify-center
              group-hover/top:border-[#DA1C21]/30 transition-colors duration-150
            ">
              <ArrowUpRight size={9} className="-rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}