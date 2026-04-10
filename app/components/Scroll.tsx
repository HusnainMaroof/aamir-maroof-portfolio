"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  opacity?: number;
  fontSize?: string;
  fontWeight?: string;
  iconColor?: string;
}

const expertise: string[] = [
  "PRODUCT DESIGN",
  "MOTION DESIGN",
  "BRANDING",
  "UI/UX",
  "ANIMATION",
  "VISUAL DESIGN",
];

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction = "left",
  speed = 20,
  opacity = 1,
  fontSize = "text-5xl lg:text-7xl",
  fontWeight = "font-bold",
  iconColor = "text-blue-500",
}) => {
  const isLeft = direction === "left";

  return (
    <div
      className="flex w-full overflow-hidden whitespace-nowrap py-3 lg:py-4"
      style={{ opacity }}
    >
      <motion.div
        initial={{ x: isLeft ? "0%" : "-50%" }}
        animate={{ x: isLeft ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 lg:gap-16 items-center pr-12 lg:pr-16"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-12 lg:gap-16"
          >
            <span
              className={`${fontSize} ${fontWeight} tracking-tighter text-white select-none`}
            >
              {item}
            </span>
            <span className={`${iconColor} flex-shrink-0`}>
              <Sparkles size={24} fill="currentColor" />
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function InfiniteMarquee() {
  return (
    <section className="relative bg-neutral-950 py-16 lg:py-24 overflow-hidden border-y border-white/5">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <MarqueeRow
        items={expertise}
        direction="left"
        speed={25}
        fontSize="text-6xl lg:text-8xl"
        fontWeight="font-black"
        iconColor="text-blue-500"
      />

      <MarqueeRow
        items={expertise}
        direction="right"
        speed={40}
        opacity={0.3}
        fontSize="text-4xl lg:text-6xl"
        fontWeight="font-light"
        iconColor="text-emerald-400"
      />

      <MarqueeRow
        items={expertise}
        direction="left"
        speed={30}
        opacity={0.6}
        fontSize="text-5xl lg:text-7xl"
        fontWeight="font-medium"
        iconColor="text-purple-500"
      />

      {/* Side gradients */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-neutral-950 via-neutral-950/90 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
