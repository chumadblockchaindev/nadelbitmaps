"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const pageVariants: Record<string, Variants> = {
  home: {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
  },
  branding: {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, x: 80, transition: { duration: 0.3 } },
  },
  multimedia: {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, y: -80, transition: { duration: 0.3 } },
  },
  outdoor: {
    initial: { opacity: 0, rotate: -5, x: -30 },
    animate: { opacity: 1, rotate: 0, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, rotate: 5, x: 30, transition: { duration: 0.3 } },
  },
  signage: {
    initial: { opacity: 0, scale: 0.92, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.3 } },
  },
  contact: {
    initial: { opacity: 0, x: 0, y: 100 },
    animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
  },
  photoGallery: {
    initial: { opacity: 0, rotateX: 15, y: 30 },
    animate: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, rotateX: -15, transition: { duration: 0.3 } },
  },
  default: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.25 } },
  },
};

function getVariantForPath(pathname: string) {
  if (pathname === "/") return pageVariants.home;

  const segment = pathname.split("/")[1] || "";

  switch (segment) {
    case "branding":
      return pageVariants.branding;
    case "multimedia":
      return pageVariants.multimedia;
    case "outdoor-advertising":
      return pageVariants.outdoor;
    case "signage-solutions":
      return pageVariants.signage;
    case "contact":
      return pageVariants.contact;
    case "photo-gallery":
      return pageVariants.photoGallery;
    case "branding-package":
      return pageVariants.branding;
    default:
      return pageVariants.default;
  }
}

interface AnimatedPageProps {
  children: React.ReactNode;
}

export default function AnimatedPage({ children }: AnimatedPageProps) {
  const pathname = usePathname();
  const variants = getVariantForPath(pathname || "/");

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        className="min-h-full"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
