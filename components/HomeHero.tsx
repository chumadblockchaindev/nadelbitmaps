
"use client";

import { useState } from "react";
import {Spinner} from "@/components/ui/spinner";

const HomeHero = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen">
        {/* Left Content Section - Sticky on desktop */}
        <div className="sticky top-0 z-10 flex w-1/2 items-center px-6 py-16 h-screen">
          <div className="max-w-xl">
            <h1 className="mb-6 text-3xl font-black leading-[1.1] uppercase tracking-[0.08em] text-slate-900 sm:text-4xl lg:text-4xl">
              Doing Business
              <br />
               Without Advertising 
               <br />
              <span className="text-[#DA1C21]">Is Like Winking at a Girl 
                <br />
                in the Dark</span>
            </h1>
          </div>
        </div>

        {/* Diagonal Separator */}
        <div className="absolute top-0 right-1/2 z-20 h-full w-16 transform skew-x-12 bg-white" />

        {/* Right Video Section */}
        <div className="relative w-1/2 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoReady(true)}
            className="h-full w-full object-cover"
          >
            <source src="/hero-services.mp4" type="video/mp4" />
          </video>
          {!videoReady && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/75">
              <div className="flex flex-col items-center gap-3">
                <Spinner className="text-white" />
                <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                  Loading video
                </p>
              </div>
            </div>
          )}
          {/* Fallback GIF if video not available */}
          {/* <img
            src="/hero-services.gif"
            alt="Outdoor multimedia services showcase"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          /> */}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-screen w-full flex items-start">
        {/* Video Background - Left shifted, positioned behind text */}
        <div className="absolute left-1/4 right-0 top-2/4 z-0 h-1/2 overflow-hidden rounded-l-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoReady(true)}
            className="h-full w-full object-cover"
          >
            <source src="/hero-services.mp4" type="video/mp4" />
          </video>
          {!videoReady && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/75">
              <div className="flex flex-col items-center gap-3">
                <Spinner className="text-white" />
                <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                  Loading video
                </p>
              </div>
            </div>
          )}
          {/* <img
            src="/hero-services.gif"
            alt="Outdoor multimedia services showcase"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          /> */}
        </div>

        {/* Text Content - Positioned on top */}
        <div className="relative z-10 w-full px-6 py-16 mt-24">
          <div className="max-w-xl">
            <h1 className="mb-6 font-black text-3xl leading-none uppercase tracking-tight text-slate-900">
              Doing Business
              <br />
               Without Advertising 
               <br />
              <span className="text-[#DA1C21]">Is Like Winking 
                <br />
                at a Girl in the Dark</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;