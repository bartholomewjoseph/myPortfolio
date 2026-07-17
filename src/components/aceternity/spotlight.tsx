"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className = "",
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn(
        "pointer-events-none absolute z-[1] h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="spotlight-gradient"
          cx={position.x}
          cy={position.y}
          r="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={fill} stopOpacity="0.15" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#spotlight-gradient)" />
    </svg>
  );
};
