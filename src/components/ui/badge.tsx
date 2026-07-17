import React from "react";
import { cn } from "@/lib/utils";

export const Badge = ({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
        variant === "outline" && "border border-white/20 text-white/70",
        variant === "secondary" && "bg-purple-500/10 text-purple-400 border border-purple-500/20",
        className
      )}
    >
      {children}
    </span>
  );
};
