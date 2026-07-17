"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorderButton = ({
  children,
  className,
  containerClassName,
  as: Component = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-full p-[2px] text-xl",
        containerClassName
      )}
      {...props}
    >
      <motion.span
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, #06b6d4, #8b5cf6, transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <span
        className={cn(
          "relative block rounded-full bg-gray-950 px-8 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
};
