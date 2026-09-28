"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BillboardGalleryProps {
  images: string[];
  alt: string;
}

const BillboardGallery = ({ images, alt }: BillboardGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 sm:aspect-[16/10]">
        <Image
          src={activeImage}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
                index === activeIndex
                  ? "border-[#DA1C21]"
                  : "border-transparent hover:border-gray-200"
              }`}
              aria-label={`View angle ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} — angle ${index + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BillboardGallery;
