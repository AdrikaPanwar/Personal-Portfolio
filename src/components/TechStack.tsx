"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TechStack() {
  const categories = {
    "Languages 💝": ["Java", "C++", "JavaScript", "Python", "HTML5", "C"],
    "Frameworks ✨": [
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "NestJS",
      "Socket.io",
    ],
    "Databases 🌸": ["MongoDB", "MySQL"],
    "Cloud & Tools 🎀": ["Azure", "Firebase", "Git", "Postman"],
    "Data Science 💫": [
      "Matplotlib",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "SciPy",
    ],
    "Frontend 🌺": ["TailwindCSS", "Bootstrap"],
    "Analytics 💖": ["Power BI", "JWT"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const getGradient = (index: number) => {
    const gradients = [
      "from-rose-400 to-pink-300",
      "from-pink-400 to-purple-300",
      "from-fuchsia-400 to-rose-300",
      "from-violet-400 to-fuchsia-300",
      "from-purple-400 to-pink-300",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <motion.section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-rose-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-400" />
            <h2 className="text-4xl font-serif font-bold text-rose-900">
              My Tech Garden
            </h2>
            <Sparkles className="w-6 h-6 text-rose-400" />
          </div>
          <p className="text-rose-600 text-lg">
            Tools and technologies I love working with 💕
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {Object.entries(categories).map(([category, techs], index) => (
            <motion.div
              key={category}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px -10px rgba(0,0,0,0.1)",
              }}
            >
              <div className={`bg-gradient-to-r ${getGradient(index)} p-4`}>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-white border-2 border-rose-100 text-rose-600 rounded-full text-sm font-medium shadow-sm"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#FFF5F7",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 rounded-full text-sm font-medium">
            Always learning and growing! ✨
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
