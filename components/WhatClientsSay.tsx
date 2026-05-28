'use client'

import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: "Chukwuma Okonkwo",
    role: "CEO, Lagos Ventures Ltd",
    company: "Lagos Ventures",
    location: "Lagos, Nigeria",
    content: "Bitmaps transformed our brand visibility across Lagos. Their billboards are strategically placed and our sales increased by 40% within 3 months. Maximum impact, maximum ROI.",
    rating: 5,
    image: "/images/client1.jpg"
  },
  {
    id: 2,
    name: "Amina Ibrahim",
    role: "Marketing Director, Frontier Tech",
    company: "Frontier Tech",
    location: "Abuja, Nigeria",
    content: "The wayfinding signage they designed for our headquarters is exceptional. Clear, professional, and guides visitors perfectly. Their attention to safety compliance is unmatched.",
    rating: 5,
    image: "/images/client2.jpg"
  },
  {
    id: 3,
    name: "Tunde Bakare",
    role: "Founder, Urban Fashion Hub",
    company: "Urban Fashion Hub",
    location: "Lagos, Nigeria",
    content: "Our fabric branding and custom apparel from Bitmaps is world-class. The quality is outstanding and our team looks incredibly professional. Highly recommend their sartorial services.",
    rating: 5,
    image: "/images/client3.jpg"
  },
  {
    id: 4,
    name: "Grace Okafor",
    role: "Brand Manager, SilverStream Corp",
    company: "SilverStream Corp",
    location: "Port Harcourt, Nigeria",
    content: "Their social media advertising campaigns delivered incredible results. 300% engagement increase and measurable lead growth. They understand digital marketing deeply.",
    rating: 5,
    image: "/images/client4.jpg"
  },
  {
    id: 5,
    name: "Ibrahim Musa",
    role: "Operations Head, SafeBuild Industries",
    company: "SafeBuild Industries",
    location: "Kano, Nigeria",
    content: "Fire and egress signage that meets all regulatory standards. Bitmaps delivered safety-compliant solutions that gave us peace of mind. Professional from start to finish.",
    rating: 5,
    image: "/images/client5.jpg"
  },
  {
    id: 6,
    name: "Blessing Eze",
    role: "Creative Director, Glow Events",
    company: "Glow Events",
    location: "Lagos, Nigeria",
    content: "The channel signs they created for our venue are absolutely stunning. 3D illuminated lettering that stands out day and night. Our clients constantly compliment the branding.",
    rating: 5,
    image: "/images/client6.jpg"
  }
]

export default function WhatClientsSay() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    align: 'center'
  }, [Autoplay({ delay: 6000, stopOnInteraction: false })])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

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

  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0A0A0A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DA1C21]/30 bg-[#DA1C21]/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA1C21]">
              Testimonials
            </span>
          </div> */}
          
          <h2 className="mb-4 text-4xl font-black leading-[1.1] uppercase tracking-[0.08em] text-[#0A0A0A] sm:text-5xl lg:text-2xl">
            What Clients Say
          </h2>
          
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Don't just take our word for it. Here's what industry leaders say about working with Bitmaps.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full">
                    {/* Testimonial Card */}
                    <div className="relative h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:border-[#DA1C21]/30 hover:shadow-2xl">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 left-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DA1C21] shadow-lg">
                          <Quote size={20} className="text-[#ffff]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-6">
                        {/* Stars */}
                        <div className="mb-5 flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill="#DA1C21"
                              className="text-[#DA1C21]"
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="mb-6">
                          <p className="text-lg font-bold leading-relaxed text-[#0A0A0A]">
                            "{testimonial.content}"
                          </p>
                        </blockquote>

                        {/* Divider */}
                        <div className="mb-6 h-1 w-16 rounded-full bg-slate-300" />

                        {/* Client Info */}
                        <div className="flex items-start gap-4">
                          {/* Avatar */}
                          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-slate-300">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Details */}
                          <div>
                            <p className="text-base font-black text-[#0A0A0A]">
                              {testimonial.name}
                            </p>
                            <p className="text-sm font-semibold text-[#DA1C21]">
                              {testimonial.role}
                            </p>
                            <p className="text-xs font-medium uppercase tracking-[0.1em] text-gray-500">
                              {testimonial.company} • {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-12 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-10 bg-[#DA1C21]"
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}