'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const PRODUCTS_AND_SERVICES = [
  {
    id: 1,
    category: "Outdoor Advertising",
    title: "Billboards",
    subtitle: "Large-format outdoor displays that dominate skylines and capture attention. Maximum visibility for maximum impact.",
    image: "/billboard.jpg",
    href: "/services/billboards",
    tags: ["Large-Format", "High Visibility", "Prime Locations"]
  },
  {
    id: 2,
    category: "Outdoor Advertising",
    title: "Outdoor Media Coverage",
    subtitle: "Strategic placement & reach across key locations. Your message delivered to millions through calculated positioning.",
    image: "/outdoor-media.jpg",
    href: "/services/outdoor-media",
    tags: ["Strategic Placement", "Wide Reach", "Targeted"]
  },
  {
    id: 3,
    category: "Signage Solutions",
    title: "Wayfinding Signage",
    subtitle: "Navigate spaces with clarity and confidence. Professional signage that guides people effortlessly through any environment.",
    image: "/wayfinding.jpg",
    href: "/services/wayfinding",
    tags: ["Navigation", "Clarity", "Professional"]
  },
  {
    id: 4,
    category: "Signage Solutions",
    title: "Fire & Egress Signs",
    subtitle: "Safety-compliant signage that protects lives and meets regulatory standards. Critical visibility when it matters most.",
    image: "/fire-egress.jpg",
    href: "/services/fire-egress",
    tags: ["Safety-Compliant", "Regulatory", "Critical"]
  },
  {
    id: 5,
    category: "Signage Solutions",
    title: "Channel Signs",
    subtitle: "3D illuminated lettering that stands out day and night. Premium craftsmanship for brands that demand excellence.",
    image: "/channel-signs.jpg",
    href: "/services/channel-signs",
    tags: ["3D Lettering", "Illuminated", "Premium"]
  },
  {
    id: 6,
    category: "Brand Experiences",
    title: "Sartorial / Fabric Branding",
    subtitle: "Custom apparel & textiles that wear your brand identity. From uniforms to promotional wear, your brand on display.",
    image: "/fabric-branding.jpg",
    href: "/services/fabric-branding",
    tags: ["Custom Apparel", "Textiles", "Uniforms"]
  },
  {
    id: 7,
    category: "Brand Experiences",
    title: "Cap & Mug Branding",
    subtitle: "Branded merchandise & gifting that creates lasting impressions. Practical items that keep your brand top-of-mind.",
    image: "/whoweare.jpg",
    href: "/services/merchandise",
    tags: ["Merchandise", "Gifting", "Promotional"]
  }
]

const PRODUCTS_AND_SERVICES_2 = [
  {
    id: 1,
    category: "Outdoor Advertising",
    title: "Billboards",
    subtitle: "Large-format outdoor displays that dominate skylines and capture attention. Maximum visibility for maximum impact.",
    image: "/electric-billboard.jpg",
    href: "/services/billboards",
    tags: ["Large-Format", "High Visibility", "Prime Locations"]
  },
  {
    id: 2,
    category: "Outdoor Advertising",
    title: "Outdoor Media Coverage",
    subtitle: "Strategic placement & reach across key locations. Your message delivered to millions through calculated positioning.",
    image: "/outdoor-media2.jpg",
    href: "/services/outdoor-media",
    tags: ["Strategic Placement", "Wide Reach", "Targeted"]
  },
  {
    id: 3,
    category: "Signage Solutions",
    title: "Wayfinding Signage",
    subtitle: "Navigate spaces with clarity and confidence. Professional signage that guides people effortlessly through any environment.",
    image: "/wayfinding1.jpg",
    href: "/services/wayfinding",
    tags: ["Navigation", "Clarity", "Professional"]
  },
  {
    id: 4,
    category: "Signage Solutions",
    title: "Fire & Egress Signs",
    subtitle: "Safety-compliant signage that protects lives and meets regulatory standards. Critical visibility when it matters most.",
    image: "/egress.jpg",
    href: "/services/fire-egress",
    tags: ["Safety-Compliant", "Regulatory", "Critical"]
  },
  {
    id: 5,
    category: "Signage Solutions",
    title: "Channel Signs",
    subtitle: "3D illuminated lettering that stands out day and night. Premium craftsmanship for brands that demand excellence.",
    image: "/signage4.jpg",
    href: "/services/channel-signs",
    tags: ["3D Lettering", "Illuminated", "Premium"]
  },
  {
    id: 6,
    category: "Brand Experiences",
    title: "Sartorial / Fabric Branding",
    subtitle: "Custom apparel & textiles that wear your brand identity. From uniforms to promotional wear, your brand on display.",
    image: "/fabric-branding1.jpg",
    href: "/services/fabric-branding",
    tags: ["Custom Apparel", "Textiles", "Uniforms"]
  },
  {
    id: 7,
    category: "Brand Experiences",
    title: "Cap & Mug Branding",
    subtitle: "Branded merchandise & gifting that creates lasting impressions. Practical items that keep your brand top-of-mind.",
    image: "/3d-signage.jpg",
    href: "/services/merchandise",
    tags: ["Merchandise", "Gifting", "Promotional"]
  },
]



export default function ProductsServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    align: 'start'
  }, [Autoplay({ delay: 2500, stopOnInteraction: false })])

  const [emblaRef2, emblaApi2] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    align: 'start'
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const onSelect = () => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
  }

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi2) return
    const interval = window.setInterval(() => {
      emblaApi2.scrollPrev()
    }, 2500)

    return () => window.clearInterval(interval)
  }, [emblaApi2])

  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4A853 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A853]">
              Our Offerings
            </span>
          </div> */}
          
          <h2 className="mb-4 text-4xl font-black leading-[1.1] uppercase tracking-[0.08em] text-slate-900 sm:text-5xl lg:text-2xl">
            Products & Services
          </h2>
          
          <p className="max-w-2xl text-base leading-relaxed text-slate-900/70 sm:text-lg">
            Comprehensive outdoor multimedia solutions designed to build relationships through design. 
            From billboards to digital campaigns, we cover it all.
          </p>
        </div>

        {/* Slider Container */}
        <div className="mt-4 rounded-[2rem] border border-slate-200/10 bg-slate-50 p-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {PRODUCTS_AND_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                >
                  <div className="group relative h-full min-h-[480px] rounded-3xl border border-slate-200/10 bg-slate-100 p-1 transition-all duration-500 hover:border-[#D4A853]/30 hover:bg-[#D4A853]/5">
                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden rounded-t-[23px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-black uppercase tracking-[0.08em] text-slate-900">
                        {service.title}
                      </h3>
                      
                      <p className="mb-5 text-sm leading-relaxed text-slate-900/60">
                        {service.subtitle}
                      </p>

                      {/* Tags */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200/10 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-900/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={service.href}
                        className="group/btn inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#DA1C21] transition-colors hover:text-slate-900"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {/* <div className="mt-12 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-[#DA1C21]"
                    : "w-1.5 bg-slate-100 hover:bg-slate-100"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}

          {/* Reverse Direction Slider */}
          <div className="mt-4 rounded-[2rem] border border-slate-200/10 bg-slate-50 p-4">
            <div className="overflow-hidden" ref={emblaRef2}>
              <div className="flex">
                {PRODUCTS_AND_SERVICES_2.map((service) => (
                  <div
                    key={`reverse-${service.id}`}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                  >
                    <div className="group relative h-full min-h-[480px] rounded-3xl border border-slate-200/10 bg-white p-1 transition-all duration-500 hover:border-[#D4A853]/30 hover:bg-[#D4A853]/5">
                      <div className="relative h-64 w-full overflow-hidden rounded-t-[23px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="mb-3 text-2xl font-black uppercase tracking-[0.08em] text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mb-5 text-sm leading-relaxed text-slate-900/60">
                          {service.subtitle}
                        </p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-200/10 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-900/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={service.href}
                          className="group/btn inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#DA1C21] transition-colors hover:text-slate-900"
                        >
                          Learn More
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}