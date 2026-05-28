'use client'

import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const SLIDES = [
  {
    id: 1,
    title: "Outdoor Advertising",
    subtitle: "\"Your Brand, Bigger Than the Sky\" — We put your message where the world can't miss it — bold billboards, strategic placements, maximum reach.",
    image: "/images/heroimg1.jpg", // Add your images to the /public folder
  },
  {
    id: 2,
    title: "Sinage Solutions",
    subtitle: "\"Every Space Tells a Story\"\nFrom wayfinding to fire egress, we design signage that guides, informs, and commands attention.",
    image: "/images/heroimg2.jpg",
  },
]

export default function HeroSlider() {
  // Initialize Embla with the Autoplay plugin (4-second delay)
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  return (
    <div className="relative overflow-hidden w-full h-[85vh]" ref={emblaRef}>
      {/* Container holding all the slides */}
      <div className="flex h-full">
        {SLIDES.map((slide) => (
          <div 
            key={slide.id} 
            className="flex-[0_0_100%] min-w-0 h-full relative flex items-center justify-center"
          >
            {/* Background Image Optimized via Next.js */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              loading={slide.id === 1 ? "eager" : "lazy"}
              priority={slide.id === 1} // Preloads the first image immediately for LCP SEO points
              sizes="100vw"
              className="object-cover object-center brightness-[0.4]"
            />

            {/* Slide Content (SEO Friendly Heading Text) */}
            <div className="relative z-10 text-center text-slate-900 px-4 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                {slide.subtitle}
              </p>
              <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-[#DA1C21] hover:text-slate-900 transition">
                Get a Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}