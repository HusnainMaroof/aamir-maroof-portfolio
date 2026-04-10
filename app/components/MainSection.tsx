"use client";

import React, { useState, useEffect } from "react";
import { Heart, Grid, X, Film, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- MOCK DATA FOR PROFESSIONAL PROFILE ---
const PROFILE_USER = {
  username: "ELEVATED.",
  subtitle: "Visual Identity & Motion",
  avatar:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=256&auto=format&fit=crop", // Abstract geometric brand logo
};

const PROFILE_POSTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    likes: "4.2k",
    caption:
      "Clean lines and natural light. Our latest residential project in the heart of the city. 🏛️✨ #architecture #minimalism",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    likes: "3.8k",
    caption:
      "Interior details that matter. Less is always more. 🛋️ #interiordesign",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    likes: "5.1k",
    caption: "Concrete and wood textures blending seamlessly.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    likes: "2.9k",
    caption: "Corporate headquarters concept.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    likes: "6.4k",
    caption: "Open workspaces encouraging collaboration. 📐",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1545042746-81e5912411e7?q=80&w=800&auto=format&fit=crop",
    likes: "1.2k",
    caption: "Monochrome living spaces.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    likes: "8.7k",
    caption: "Modern exterior facade.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
    likes: "3.4k",
    caption: "Natural lighting at its finest.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800&auto=format&fit=crop",
    likes: "4.9k",
    caption: "The power of simplicity.",
  },
];

export default function ProfilePage() {
  const [selectedPost, setSelectedPost] = useState<
    (typeof PROFILE_POSTS)[0] | null
  >(null);
  const [activeTab, setActiveTab] = useState("thumbnails");
  const [motionResolution, setMotionResolution] = useState<
    "1080x1920" | "1920x1080"
  >("1080x1920");

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPost]);

  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const gridItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const tabContentVariants = {
    initial: { opacity: 0, y: 10, filter: "blur(4px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(4px)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-black min-h-screen text-neutral-200 font-sans antialiased selection:bg-neutral-800">
      {/* MAIN PROFILE CONTAINER */}
      <main className="w-full max-w-[935px] mx-auto pt-8 md:pt-16 pb-20 px-4 md:px-0">
        {/* HEADER SECTION - LOGO AND NAME SIDE BY SIDE */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 mb-12 md:mb-20 md:pl-8"
        >
          {/* Avatar / Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-[110px] h-[110px] md:w-[150px] md:h-[150px] shrink-0 rounded-full border border-neutral-800 p-1 cursor-pointer transition-transform duration-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900">
              {/* Note: Using standard img tag. For Next.js image optimization, use next/image and configure external domains in next.config.js */}
              <img
                src={PROFILE_USER.avatar}
                alt={`${PROFILE_USER.username} Logo`}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* User Info / Brand Name */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-[0.2em] uppercase cursor-default">
              {PROFILE_USER.username}
            </h1>
            <p className="mt-3 md:mt-4 text-neutral-500 text-[10px] md:text-xs tracking-[0.4em] font-light uppercase cursor-default">
              {PROFILE_USER.subtitle}
            </p>
          </div>
        </motion.header>

        {/* TABS - TWO BUTTONS */}
        <div className="flex justify-center border-t border-neutral-900 gap-12 md:gap-32">
          <button
            onClick={() => setActiveTab("thumbnails")}
            className={`flex items-center gap-3 py-6 border-t cursor-pointer focus:outline-none ${activeTab === "thumbnails" ? "border-white text-white" : "border-transparent text-neutral-600 hover:text-neutral-300"} text-[11px] md:text-[12px] font-medium tracking-[0.25em] -mt-[1px] transition-all duration-300`}
          >
            <Grid
              size={14}
              strokeWidth={activeTab === "thumbnails" ? 2 : 1.5}
            />{" "}
            THUMBNAILS
          </button>
          <button
            onClick={() => setActiveTab("motion-graphics")}
            className={`flex items-center gap-3 py-6 border-t cursor-pointer focus:outline-none ${activeTab === "motion-graphics" ? "border-white text-white" : "border-transparent text-neutral-600 hover:text-neutral-300"} text-[11px] md:text-[12px] font-medium tracking-[0.25em] -mt-[1px] transition-all duration-300`}
          >
            <Film
              size={14}
              strokeWidth={activeTab === "motion-graphics" ? 2 : 1.5}
            />{" "}
            MOTION GRAPHICS
          </button>
        </div>

        {/* TAB CONTENT WITH ANIMATE PRESENCE */}
        <div className="mt-4 md:mt-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* THUMBNAILS GRID */}
            {activeTab === "thumbnails" && (
              <motion.div
                key="thumbnails"
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
                >
                  {PROFILE_POSTS.map((post) => (
                    <motion.div
                      key={post.id}
                      className="aspect-square bg-neutral-900 relative group cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => setSelectedPost(post)}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        src={post.image}
                        alt="Project thumbnail"
                        className="w-full h-full object-cover"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-6">
                        <div className="flex items-center gap-2 text-white font-medium tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Project
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* MOTION GRAPHICS GRID */}
            {activeTab === "motion-graphics" && (
              <motion.div
                key="motion-graphics"
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col"
              >
                {/* SUB-NAVIGATION FOR RESOLUTIONS */}
                <div className="flex justify-center gap-8 md:gap-16 mb-8 md:mb-12">
                  <button
                    onClick={() => setMotionResolution("1080x1920")}
                    className={`text-[10px] md:text-[11px] tracking-[0.2em] transition-all duration-300 cursor-pointer focus:outline-none ${motionResolution === "1080x1920" ? "text-white font-medium border-b border-white pb-1" : "text-neutral-600 hover:text-neutral-300 border-b border-transparent pb-1"}`}
                  >
                    1080 × 1920
                  </button>
                  <button
                    onClick={() => setMotionResolution("1920x1080")}
                    className={`text-[10px] md:text-[11px] tracking-[0.2em] transition-all duration-300 cursor-pointer focus:outline-none ${motionResolution === "1920x1080" ? "text-white font-medium border-b border-white pb-1" : "text-neutral-600 hover:text-neutral-300 border-b border-transparent pb-1"}`}
                  >
                    1920 × 1080
                  </button>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className={`grid gap-2 md:gap-4 transition-all duration-500 ${motionResolution === "1080x1920" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto w-full"}`}
                >
                  {/* Sliced to show fewer items as if they are separate videos */}
                  {PROFILE_POSTS.slice(
                    0,
                    motionResolution === "1080x1920" ? 6 : 4,
                  ).map((post) => (
                    <motion.div
                      key={post.id}
                      className={`${motionResolution === "1080x1920" ? "aspect-[9/16]" : "aspect-video"} bg-neutral-900 relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500`}
                      onClick={() => setSelectedPost(post)}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        src={post.image}
                        alt="Motion Graphic"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90"
                      />

                      {/* Always-on Frosted Play Icon */}
                      <div className="absolute inset-0 flex justify-center items-center pointer-events-none transition-transform duration-500 group-hover:scale-110">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/30 backdrop-blur-md flex justify-center items-center border border-white/20 text-white shadow-xl">
                          <Play className="ml-1 fill-white" size={24} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* IMMERSIVE PROJECT MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
          >
            {/* Minimal Close Button */}
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-neutral-500 hover:text-white transition-colors z-50 cursor-pointer focus:outline-none"
              onClick={() => setSelectedPost(null)}
            >
              <X size={36} strokeWidth={1} />
            </button>

            {/* Modal Content - Pure Focus on Project */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[1200px] flex flex-col items-center justify-center cursor-default"
            >
              <div className="relative flex items-center justify-center w-full max-h-[75vh]">
                <img
                  src={selectedPost.image}
                  alt="Project Details"
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>

              {/* Minimalist Caption Box */}
              <div className="mt-8 md:mt-12 max-w-2xl text-center px-4">
                <p className="text-white text-sm md:text-base font-light tracking-wide leading-relaxed">
                  {selectedPost.caption}
                </p>
                <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500">
                  <Heart size={14} className="fill-neutral-500" />
                  <span className="text-xs uppercase tracking-widest">
                    {selectedPost.likes}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
