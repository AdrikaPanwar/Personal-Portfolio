"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Heart, Star } from "lucide-react";

const projects = [
  {
    title: "NEWS-RSS",
    description: "A news aggregator built with Flask and Tailwind CSS",
    image:
      "https://assets.super.so/bb6f12db-412a-4006-82d0-54d7bed9ffce/images/58f38392-2a23-4ec3-a39c-0b4612c12be6/Screenshot_from_2024-10-09_10-17-27.png",
    github: "https://github.com/AdrikaPanwar/NEWS-RSS",
    tags: ["Flask", "Tailwind", "Jinja5"],
    gradient: "from-rose-400 to-pink-300",
    emoji: "📰",
  },
  {
    title: "Quant-SQL Optimizer",
    description: "A quantum-inspired SQL query optimizer",
    image:
      "https://assets.super.so/bb6f12db-412a-4006-82d0-54d7bed9ffce/images/4438c38a-c7f3-4ed5-8212-a492a8ce40aa/Screenshot_from_2024-10-09_10-10-03.png",
    github: "https://github.com/AdrikaPanwar/quant-sql-optimizer",
    tags: ["Qiskit", "Python", "Django"],
    gradient: "from-pink-400 to-purple-300",
    emoji: "⚛️",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-rose-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-rose-400" />
            <h2 className="text-4xl font-serif font-bold text-rose-900">
              My Creative Projects
            </h2>
            <Star className="w-6 h-6 text-rose-400" />
          </div>
          <p className="text-rose-600 text-lg">
            Building solutions with passion 💫
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <span className="text-2xl">{project.emoji}</span>
              </div>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-500 font-medium"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
          target="_blank"
            href="https://github.com/AdrikaPanwar"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5" />
            <span>See More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
