"use client";

import { motion } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]); // parallax strength

  return (
    <div ref={ref} className="relative w-full py-6 md:py-4 overflow-hidden">
      {/* PARALLAX BG IMAGE */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
      />

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
