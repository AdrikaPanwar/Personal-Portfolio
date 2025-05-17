"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function HeartCursor() {
  const cursor = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursor.x.set(e.clientX);
      cursor.y.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        a, button {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursor.x,
          y: cursor.y,
          translateX: "0%",
          translateY: "0%",
          rotate: "35deg",
        }}
      >
        <div className="w-8 h-8 flex items-center justify-center text-2xl">
          👈
        </div>
      </motion.div>
    </>
  );
}