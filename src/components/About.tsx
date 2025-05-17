"use client";

import { motion } from "framer-motion";
import { Code, BookOpen, Zap, Heart, Star, Sparkles } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const interests = [
    {
      Icon: Code,
      text: "Backend Developer",
      color: "bg-rose-50 text-rose-600",
    },
    {
      Icon: BookOpen,
      text: "Learning Japanese",
      color: "bg-pink-50 text-pink-600",
    },
    { Icon: Zap, text: "AI Enthusiast", color: "bg-rose-50 text-rose-600" },
    { Icon: Heart, text: "Anime Lover", color: "bg-pink-50 text-pink-600" },
    { Icon: Star, text: "Tech Explorer", color: "bg-rose-50 text-rose-600" },
    {
      Icon: Sparkles,
      text: "Creative Coder",
      color: "bg-pink-50 text-pink-600",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 scroll-mt-16 bg-gradient-to-b from-white to-rose-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-serif font-bold text-rose-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-300 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12"
          variants={itemVariants}
        >
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={itemVariants}
            >
              <span className="text-2xl">👋</span> Heeeyyy! I&apos;m Adrika, a
              super serious student (okay, not really 😄) who&apos;s totally
              into learning cool stuff—like quantum tech! Sounds impressive,
              right? 😎
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={itemVariants}
            >
              When I&apos;m not coding or diving into new technologies,
              you&apos;ll find me exploring the fascinating world of anime,
              practicing my Japanese, or working on exciting projects that
              combine creativity with technical innovation! ✨
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
              variants={containerVariants}
            >
              {interests.map(({ Icon, text, color }, index) => (
                <motion.div
                  key={index}
                  className={`${color} rounded-xl p-6`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">{text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="mt-12 text-center" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-3 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>See My Work</span>
                <span className="text-xl">→</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
