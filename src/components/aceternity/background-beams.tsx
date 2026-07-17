"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <svg
        className="pointer-events-none absolute z-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.05)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139,92,246,0)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.05)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1={`${i * 10}%`}
            y1="0%"
            x2={`${(i * 10 + 30) % 100}%`}
            y2="100%"
            stroke={i % 2 === 0 ? "url(#beam1)" : "url(#beam2)"}
            strokeWidth="1"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />
    </div>
  );
};
