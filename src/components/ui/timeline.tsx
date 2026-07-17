import React from "react";
import { cn } from "@/lib/utils";

export const TimelineItem = ({
  title,
  company,
  period,
  description,
  tags,
  className,
}: {
  title: string;
  company: string;
  period: string;
  description: string[];
  tags?: string[];
  className?: string;
}) => {
  return (
    <div className={cn("relative pl-8 pb-10 last:pb-0 group", className)}>
      {/* Line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-purple-500/20 group-last:hidden" />
      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-cyan-500 bg-gray-950 group-hover:bg-cyan-500 transition-colors z-10" />

      <div className="ml-4">
        <span className="text-xs text-cyan-400 font-mono">{period}</span>
        <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
        <p className="text-sm text-purple-400 font-medium">{company}</p>
        <ul className="mt-3 space-y-2">
          {description.map((desc, idx) => (
            <li key={idx} className="text-sm text-gray-400 leading-relaxed flex items-start gap-2">
              <span className="text-cyan-500 mt-1 shrink-0">▹</span>
              {desc}
            </li>
          ))}
        </ul>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
