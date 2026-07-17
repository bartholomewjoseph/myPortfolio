import React from "react";
import { cn } from "@/lib/utils";

export const SectionHeading = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
    </div>
  );
};
