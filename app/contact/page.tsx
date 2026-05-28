"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiLinkedin, CiYoutube } from "react-icons/ci";

// ─── Contact channels ──────────────────────────────────────
const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Our Office",
    value: "113, Wetheral Road, Owerri",
    sub: "Imo state, Nigeria",
    href: "https://maps.google.com",
    cta: "Get Directions",
  },
  {
    icon: Phone,
    label: "Call Us Directly",
    value: "+234 (0) 803 724 5237",
    sub: "Mon – Fri, 8am – 6pm",
    href: "tel:+2348037245237",
    cta: "Call Now",
  },
  {
    icon: Mail,
    label: "Send an Email",
    value: "hello@nadelbitmaps.com",
    sub: "We reply within 24 hours",
    href: "mailto:hello@nadelbitmaps.com",
    cta: "Email Us",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 8:00am – 6:00pm",
    sub: "Saturday: 9:00am – 3:00pm",
    href: null,
    cta: null,
  },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com",  label: "Instagram", handle: "@nadelbitmaps" },
  { icon: CiFacebook,  href: "https://facebook.com",   label: "Facebook",  handle: "Nadel Bitmaps" },
  { icon: CiTwitter,   href: "https://twitter.com",    label: "Twitter / X", handle: "@nadelbitmaps" },
  { icon: CiLinkedin,  href: "https://linkedin.com",   label: "LinkedIn",  handle: "Nadel Bitmaps Multimedia" },
  { icon: CiYoutube,   href: "https://youtube.com",    label: "YouTube",   handle: "Nadel Bitmaps TV" },
];

const subjects = [
  "Billboard Advertising",
  "Signage Solutions",
  "Wayfinding Design",
  "Fire & Egress Signs",
  "Channel Signs",
  "Fabric / Sartorial Branding",
  "Cap & Mug Merchandise",
  "Social Media Advertising",
  "General Enquiry",
];

// ─── Page ──────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600)); // simulate send
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative bg-[#ffff] overflow-hidden pt-32 pb-20">

        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div
            className="absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage: "radial-gradient(circle, #DA1C21 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] border border-[#DA1C21]/6 rotate-12" />
          <div className="absolute -top-10 -right-10 w-[240px] h-[240px] border border-[#DA1C21]/8 rotate-12" />
          <div className="absolute bottom-0 left-[8%] w-40 h-40 border border-[#DA1C21]/5 rotate-45" />
          <div
            className="absolute top-0 right-0 w-[600px] h-[350px] opacity-[0.04]"
            style={{ background: "radial-gradient(ellipse at top right, #DA1C21, transparent 65%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DA1C21]/25 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 border-2 border-[#DA1C21] rotate-45 shrink-0" />
                <span className="text-[#DA1C21] text-[9px] tracking-[0.45em] uppercase font-black">
                  Get In Touch
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-black text-black leading-none tracking-tight mb-5"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="text-[#DA1C21]">Let's Build</span>
                <br />
                Something Bold.
              </h1>

              <p className="text-black/40 text-sm leading-relaxed max-w-lg tracking-wide">
                Have a project in mind? Whether it's a highway billboard, a full wayfinding system, or branded merch for your next event — we'd love to hear from you. Fill in the form and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Quick stat pills */}
            <div className="flex flex-row lg:flex-col items-start gap-3 pb-1">
              {[
                { v: "24hr",  l: "Response Time" },
                { v: "200+",  l: "Projects Done" },
                { v: "100%",  l: "Client Focused" },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center border border-[#DA1C21]/15 px-5 py-3 min-w-[90px]">
                  <span
                    className="text-[#DA1C21] font-black leading-none"
                    style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif", fontSize: "1.8rem" }}
                  >
                    {v}
                  </span>
                  <span className="text-black/25 text-[8px] tracking-[0.3em] uppercase font-semibold mt-0.5 text-center">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom rule */}
          <div className="mt-12 h-px bg-gradient-to-r from-[#DA1C21]/20 via-[#DA1C21]/5 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FORM + INFO GRID
      ══════════════════════════════════════════ */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.016] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Faded watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-[#0A0A0A]/[0.022] tracking-tighter select-none pointer-events-none pr-4"
          style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          aria-hidden
        >
          HELLO
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 xl:gap-20 items-start">

            {/* ── CONTACT FORM ── */}
            <div className="relative">
              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#DA1C21] rotate-45 z-10" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-2 border-[#DA1C21] rotate-45 z-10" />

              <div className="relative bg-[#0A0A0A] p-8 lg:p-10 overflow-hidden">
                {/* Gold top strip */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DA1C21] via-[#DA1C21]/50 to-transparent" />
                {/* Dot texture on card */}
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #DA1C21 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative z-10">
                  <p className="text-[#DA1C21] text-[9px] tracking-[0.4em] uppercase font-black mb-1">
                    Send a Message
                  </p>
                  <h2
                    className="text-white font-black leading-none mb-8"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                    }}
                  >
                    {submitted ? "Message Received!" : "Start the Conversation"}
                  </h2>

                  {/* Success state */}
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                      <div className="w-16 h-16 flex items-center justify-center border-2 border-[#DA1C21]/40 rotate-45">
                        <CheckCircle2 size={28} className="text-[#DA1C21] -rotate-45" />
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed max-w-xs tracking-wide">
                        Thanks for reaching out! Our team will be in touch within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                        className="mt-2 text-[#DA1C21] text-[10px] tracking-[0.25em] uppercase font-black border border-[#DA1C21] px-5 py-2.5 hover:bg-[#DA1C21] hover:text-[#0A0A0A] transition-all duration-200"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                      {/* Row 1 */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-white text-[9px] tracking-[0.3em] uppercase font-bold">
                            Full Name <span className="text-[#DA1C21]">*</span>
                          </label>
                          <input
                            type="text" name="name" required
                            value={form.name} onChange={handleChange}
                            placeholder="e.g. Chioma Okafor"
                            className="bg-white border border-[#DA1C21]/15 text-black text-xs tracking-wide px-4 py-3 outline-none placeholder:text-black/15 focus:border-[#DA1C21]/50 transition-colors duration-200"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-white text-[9px] tracking-[0.3em] uppercase font-bold">
                            Email Address <span className="text-[#DA1C21]">*</span>
                          </label>
                          <input
                            type="email" name="email" required
                            value={form.email} onChange={handleChange}
                            placeholder="you@company.com"
                            className="bg-white border border-[#DA1C21]/15 text-black text-xs tracking-wide px-4 py-3 outline-none placeholder:text-black/15 focus:border-[#DA1C21]/50 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-white text-[9px] tracking-[0.3em] uppercase font-bold">
                            Phone Number
                          </label>
                          <input
                            type="tel" name="phone"
                            value={form.phone} onChange={handleChange}
                            placeholder="+234 000 000 0000"
                            className="bg-white border border-[#DA1C21]/15 text-black text-xs tracking-wide px-4 py-3 outline-none placeholder:text-black/15 focus:border-[#DA1C21]/50 transition-colors duration-200"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-white text-[9px] tracking-[0.3em] uppercase font-bold">
                            Service of Interest <span className="text-[#DA1C21]">*</span>
                          </label>
                          <select
                            name="subject" required
                            value={form.subject} onChange={handleChange}
                            className="bg-white border border-[#DA1C21]/15 text-xs tracking-wide px-4 py-3 outline-none focus:border-[#DA1C21]/50 transition-colors duration-200 appearance-none cursor-pointer text-black/60"
                          >
                            <option value="" disabled>Select a service…</option>
                            {subjects.map((s) => (
                              <option key={s} value={s} className="bg-[#0A0A0A] text-white">{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-white text-[9px] tracking-[0.3em] uppercase font-bold">
                          Your Message <span className="text-[#DA1C21]">*</span>
                        </label>
                        <textarea
                          name="message" required rows={5}
                          value={form.message} onChange={handleChange}
                          placeholder="Tell us about your project, timeline, and budget…"
                          className="bg-white border border-[#DA1C21]/15 text-black text-xs tracking-wide px-4 py-3 outline-none placeholder:text-black/15 focus:border-[#DA1C21]/50 transition-colors duration-200 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="
                          flex items-center justify-center gap-2 w-full mt-2
                          bg-[#DA1C21] text-[#ffff]
                          text-[10px] font-black tracking-[0.25em] uppercase
                          py-4 px-6
                          hover:bg-white hover:text-black transition-all duration-200
                          disabled:opacity-60 disabled:cursor-not-allowed
                          group/btn
                        "
                      >
                        {loading ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-[#0A0A0A] border-t-[#0A0A0A] rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={12} />
                            Send Message
                            <ArrowUpRight size={11} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
                          </>
                        )}
                      </button>

                      <p className="text-black/15 text-[8px] tracking-[0.2em] uppercase text-center">
                        We respond within 24 hours · No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="flex flex-col gap-8 lg:pt-2">

              {/* Section label */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 border-2 border-[#DA1C21] rotate-45 shrink-0" />
                  <span className="text-[#DA1C21] text-[9px] tracking-[0.45em] uppercase font-black">
                    Find Us
                  </span>
                </div>
                <h2
                  className="font-black text-[#0A0A0A] leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  <span className="text-[#DA1C21]">Contact</span> Details
                </h2>
                <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-[#DA1C21] to-transparent" />
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-3">
                {contactInfo.map(({ icon: Icon, label, value, sub, href, cta }) => (
                  <div
                    key={label}
                    className="group flex items-start gap-4 p-5 border border-[#0A0A0A]/6 hover:border-[#DA1C21]/25 hover:bg-[#DA1C21]/[0.03] transition-all duration-200"
                    style={{ borderRadius: "0.5rem 1.5rem" }}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center border border-[#DA1C21]/20 shrink-0 group-hover:border-[#DA1C21]/50 group-hover:bg-[#DA1C21]/8 transition-all duration-200">
                      <Icon size={16} className="text-[#DA1C21]/50 group-hover:text-[#DA1C21] transition-colors duration-200" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#0A0A0A] text-[8px] tracking-[0.3em] uppercase font-bold mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#0A0A0A]/75 text-xs font-semibold tracking-wide leading-snug truncate">
                        {value}
                      </p>
                      <p className="text-[#0A0A0A] text-[10px] tracking-wide mt-0.5">{sub}</p>
                    </div>

                    {/* CTA */}
                    {href && cta && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1 text-[#DA1C21] text-[9px] tracking-[0.2em] uppercase font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:underline"
                      >
                        {cta}
                        <ArrowUpRight size={9} />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-[#0A0A0A] text-[9px] tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-[#DA1C21]/40" />
                  Follow Our Work
                </p>
                <div className="flex flex-col gap-2">
                  {socials.map(({ icon: Icon, href, label, handle }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group/social py-2 border-b border-[#0A0A0A]/5 last:border-0 hover:border-[#DA1C21]/15 transition-colors duration-150"
                    >
                      <div className="w-7 h-7 flex items-center justify-center border border-[#0A0A0A]/8 group-hover/social:border-[#DA1C21]/40 group-hover/social:bg-[#DA1C21]/6 transition-all duration-200 shrink-0">
                        <Icon size={13} className="text-[#0A0A0A] group-hover/social:text-[#DA1C21] transition-colors duration-200" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#0A0A0A]/60 text-[10px] font-semibold tracking-wide group-hover/social:text-[#0A0A0A]/90 transition-colors duration-150">
                          {label}
                        </span>
                        <span className="text-[#0A0A0A]/25 text-[9px] tracking-wide">{handle}</span>
                      </div>
                      <ArrowUpRight
                        size={10}
                        className="ml-auto text-[#DA1C21]/0 group-hover/social:text-[#DA1C21]/60 transition-all duration-150"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAP STRIP
      ══════════════════════════════════════════ */}
      <section className="relative h-[300px] lg:h-[380px] overflow-hidden border-t border-[#0A0A0A]/6">
        {/* Embedded Google Map (replace src with real embed URL) */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4731!3d6.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNTIuMyJOIDPCsDI4JzIzLjIiRQ!5e0!3m2!1sen!2sng!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.85)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nadel Bitmaps Location"
        />

        {/* Map overlay card */}
        <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#DA1C21]/20 p-5 max-w-[220px]">
          <div className="h-[2px] bg-gradient-to-r from-[#DA1C21] to-transparent mb-3 -mx-5 -mt-5 mb-3" />
          <p className="text-[#DA1C21] text-[8px] tracking-[0.35em] uppercase font-black mb-1">Our Office</p>
          <p className="text-white text-xs font-semibold leading-snug">113, Wetheral Road</p>
          <p className="text-white/40 text-[10px]">Owerri, Imo state, Nigeria</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 mt-3 text-[#DA1C21] text-[9px] tracking-[0.2em] uppercase font-black hover:text-black transition-colors duration-150"
          >
            Open in Maps <ArrowUpRight size={9} />
          </a>
        </div>
      </section>

    </main>
  );
}