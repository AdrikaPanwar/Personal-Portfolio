"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-rose-50 pt-[150px]">

      <motion.div
        className="relative z-10 text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-white/30 backdrop-blur-sm"></div>
            <Image
              src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/97def204-1b39-4aa0-9e52-350d074b5298/c9101007-5442-47e3-ae6c-c156ca32ff4c/w=640,quality=90,fit=scale-down"
              alt="Adrika Panwar"
              width={220}
              height={220}
              className="rounded-full border-4 border-white shadow-xl relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-rose-900 font-serif">
            Adrika Panwar
          </h1>
          
          <p className="text-2xl text-rose-700 font-light">
            Backend Developer & Tech Enthusiast
          </p>

          <div className="flex gap-3 justify-center text-lg text-rose-600">
            <span>✨ Code Creator</span>
            <span>•</span>
            <span>Problem Solver</span>
            <span>•</span>
            <span>Tech Lover</span>
          </div>

          <motion.div className="pt-8 flex gap-4 justify-center">
            <motion.a
              href="#about"
              className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover My Journey
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-white/80 hover:bg-white text-rose-500 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
