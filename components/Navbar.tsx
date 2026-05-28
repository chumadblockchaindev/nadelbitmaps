"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import NavMenu from "./NavMenu";
import Image from "next/image";

const services = [
  {
    category: "Outdoor Advertising",
    imgurl: "/images/heroimg1.jpg",
    slug: "outdoor-advertising",
    description: "Maximum visibility, maximum impact",
    items: [
      { name: "Billboards", href: "/outdoor-advertising/billboards", desc: "Large-format outdoor displays" },
      { name: "Mobile Billboards", href: "/outdoor-advertising/mobile-billboard", desc: "Strategic placement & reach" },
    ],
  },
  {
    category: "Signage Solutions",
    imgurl: "/images/heroimg2.jpg",
    slug: "signage-solutions",
    description: "Guide, inform, and direct",
    items: [
      { name: "Wayfinding Signage", href: "/signage-solutions/wayfinding-signage", desc: "Navigate spaces with clarity" },
      { name: "Fire & Egress Signs", href: "/signage-solutions/fire-and-egress-signage", desc: "Safety-compliant signage" },
      { name: "Channel Signs", href: "/signage-solutions/channel-signage", desc: "3D illuminated lettering" },
    ],
  },
  {
    category: "Branding",
    imgurl: "/images/heroimg3.jpg",
    slug: "brand-experiences",
    description: "Wear your brand, live your brand",
    items: [
      { name: "Sartorial / Fabric Branding", href: "/branding/fabric-branding", desc: "Custom apparel & textiles" },
      { name: "Cap & Mug Branding", href: "/branding/cap-and-mug-branding", desc: "Branded merchandise & gifting" },
          { name: "Vehicle Branding", href: "/branding/vehicle-branding", desc: "Branded Vehicles" },
    ],
  },
  {
    category: "Multimedia",
    imgurl: "/multimedia.jpg",
    slug: "multimedia",
    description: "Amplify your presence online",
    items: [
      { name: "Social Media Advertising", href: "/multimedia/social-media-advertising", desc: "Targeted digital campaigns" },
      { name: "Video Coverage", href: "/multimedia/video-coverage", desc: "Engaging visual content" },
    ],
  },
];

const navLinks = [
  { name: "Gallery", href: "/photo-gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showwhitelogo = [
    "/outdoor-advertising/billboards",
    "/outdoor-advertising/mobile-billboard",
    "/signage-solutions/wayfinding-signage",
    "/signage-solutions/fire-and-egress-signage",
    "/signage-solutions/channel-signage",
    "/branding/fabric-branding",
    "/branding/cap-and-mug-branding",
    "/multimedia/social-media-advertising",
    "/photo-gallery",
    "/branding/vehicle-branding"
  ].some((path) => pathname?.includes(path));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#D4A853]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-50">
             {/* Show white logo if page is among pages to display white logo */}
             { showwhitelogo ? 
              <Image
                src="/bitmaps-logo-white.png"
                alt="Bitmaps Logo"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              /> :
              <Image
                src="/bitmaps-logo-black.png"
                alt="Bitmaps Logo"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
             }
            </div>
          </Link>

          <Link href={"/"} className="hidden md:block rounded-full px-4 py-2 text-sm text-slate-900/80 transition-colors font-bold hover:bg-slate-100 hover:text-[#DA1C21]"
            >Home</Link> 

          <div className="hidden lg:flex items-center gap-1">
            {services.map((group) => (
              <NavMenu
                key={group.slug}
                category={group.category}
                slug={group.slug}
                imgurl={group.imgurl}
                description={group.description}
                items={group.items}
              />
            ))}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-900/80 transition-colors hover:bg-slate-100 hover:text-[#DA1C21]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:block rounded-full bg-[#DA1C21] my-0 md:mx-auto px-6 py-3 text-xs font-bold uppercase text-[#ffff] hover:bg-white hover:text-black items-center"
            >
              Contact us
            </Link>

            <button
              className="rounded-full border border-slate-200/10 bg-slate-100 p-2 text-slate-900 backdrop-blur-md transition-colors hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-100 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-slate-200/10 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200/10 px-6 py-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-900">Nadel</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#DA1C21]">Bitmaps</p>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-full border border-slate-200/10 bg-slate-100 p-2 text-slate-900"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-2 px-4 py-5">
        
            <Link
              href={'/'}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-2xl border border-slate-200/10 bg-slate-100 px-4 py-4 text-slate-900 transition-colors hover:border-[#D4A853]/30 hover:bg-[#D4A853]/10"
            >
              <span className="font-medium">Home</span>
              <ArrowUpRight size={16} className="text-[#DA1C21]" />
            </Link>
        </div>

        <div className="px-4 pb-6">
          <div className="mb-3 px-2 text-xs font-black uppercase tracking-[0.25em] text-slate-900/60">
            Services
          </div>

          <div className="space-y-3">
            {services.map((group) => (
              <div key={group.slug} className="rounded-2xl border border-slate-200/10 bg-slate-100 overflow-hidden">
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.slug ? null : group.slug)
                  }
                  className="flex w-full items-center justify-between px-4 py-4 text-left text-slate-900"
                >
                  <div>
                    <p className="font-semibold">{group.category}</p>
                    <p className="text-xs text-slate-900/55">{group.description}</p>
                  </div>
                  <span className="text-[#DA1C21] text-xl leading-none">
                    {mobileExpanded === group.slug ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    mobileExpanded === group.slug
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden border-t border-slate-200/10 px-4 py-3">
                    <div className="space-y-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-xl px-3 py-3 text-sm text-slate-900/80 transition-colors hover:bg-slate-100 hover:text-slate-900"
                        >
                          <span className="block font-medium">{item.name}</span>
                          <span className="block text-xs text-slate-900/50">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 px-4 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-2xl border border-slate-200/10 bg-slate-100 px-4 py-4 text-slate-900 transition-colors hover:border-[#D4A853]/30 hover:bg-[#D4A853]/10"
            >
              <span className="font-medium">{link.name}</span>
              <ArrowUpRight size={16} className="text-[#DA1C21]" />
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}