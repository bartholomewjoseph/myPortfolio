"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    tags?: string[];
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <CardItem key={idx} item={item} index={idx} />
      ))}
    </div>
  );
};

const CardItem = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    tags?: string[];
  };
  index: number;
}) => {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative group block p-6 h-full w-full"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-6 h-full flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors duration-300"
      >
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

        <div className="relative z-10">
          {item.icon && <div className="mb-4 text-cyan-400">{item.icon}</div>}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {item.tags && item.tags.length > 0 && (
          <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
            {item.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.link && (
          <div className="relative z-10 mt-4 flex items-center text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Project</span>
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </motion.div>
    </motion.a>
  );
};
