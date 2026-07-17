import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" &&
          "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md",
        variant === "outline" &&
          "border border-white/20 bg-transparent hover:bg-cyan-500/10 text-white hover:border-cyan-500/30",
        variant === "ghost" &&
          "hover:bg-cyan-500/10 text-white",
        size === "default" && "h-10 px-6 py-2",
        size === "sm" && "h-8 px-4 text-xs",
        size === "lg" && "h-12 px-8 text-base",
        size === "icon" && "h-10 w-10",
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";
