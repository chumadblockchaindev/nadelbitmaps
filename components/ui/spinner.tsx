"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent text-[#DA1C21]",
        className
      )}
      aria-label="Loading"
    />
  );
}
