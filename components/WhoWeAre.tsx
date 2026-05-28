"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const WhoWeAre = () => {
  const keyValues = [
    "Custom outdoor advertising solutions",
    "Safety-compliant signage installations",
    "Premium fabric & apparel branding",
    "Strategic social media campaigns",
    "End-to-end brand experience design",
    "Nationwide delivery & installation",
  ];

  return (
    <section className="relative w-full bg-white py-24 sm:py-32">
      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image on the Left */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/10 bg-slate-100 shadow-2xl">
              <Image
                src="/ceo.jpg"
                alt="Who We Are"
                width={600}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/80 via-transparent to-[#D4A853]/20" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-slate-200/30 bg-slate-100/95 p-6 shadow-2xl backdrop-blur-md sm:block">
              <p className="text-4xl font-black text-[#DA1C21]">10+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-900/60">
                Years Experience
              </p>
            </div>
          </div>

          {/* Text on the Right */}
          <div className="relative">
            {/* Badge */}
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-4 py-2 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A853]">
                About Us
              </span>
            </div> */}

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-black leading-[1.1] uppercase tracking-[0.08em] text-slate-900 sm:text-2xl">
             About us
            </h2>

            {/* Description */}
            <p className="mb-8 leading-relaxed text-slate-900/70">
              Nadel Bitmaps is a premier outdoor multimedia company dedicated to creating maximum
              visibility and impact for your brand. We specialize in comprehensive branding
              solutions that span physical and digital spaces, ensuring your message reaches
              your audience wherever they are.
            </p>

            <p className="mb-10 leading-relaxed text-slate-900/70">
              From large-format billboards and safety-compliant signage to custom fabric
              branding and targeted social media campaigns, we deliver end-to-end brand
              experiences that transform how the world sees your business.
            </p>

            {/* Key Values List */}
            <div className="mb-10 space-y-4">
              {keyValues.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-black" />
                  <span className="text-sm leading-relaxed text-slate-900/80">{value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#OAOAOA] bg-[#DA1C21] px-7 py-3.5 font-black uppercase tracking-[0.18em] hover:text-black text-[#ffff] transition-all duration-300 hover:bg-white hover:scale-105"
              >
                Contact us
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;