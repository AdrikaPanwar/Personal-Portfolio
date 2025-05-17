"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  Sparkles,
  Code,
  BarChart2,
  Rocket,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "IIT Bombay - Entrepreneurship",
      duration: "July 2024 - October 2024",
      description:
        "Collaborated with IITs and startups like Physics Wallah, enhancing my understanding of technology and entrepreneurship. Developed problem-solving and strategic planning skills while inspiring fellow students.",
      icon: Rocket,
      gradient: "from-rose-400 to-pink-300",
    },
  ];

  const aspirations = [
    {
      role: "Data Analytics",
      description:
        "Passionate about transforming data into actionable insights",
      icon: BarChart2,
      gradient: "from-purple-400 to-pink-300",
    },
    {
      role: "Backend Development",
      description:
        "Eager to build robust and scalable server-side applications",
      icon: Code,
      gradient: "from-fuchsia-400 to-rose-300",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 bg-gradient-to-b from-rose-200 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-rose-400" />
            <h2 className="text-4xl font-serif font-bold text-rose-900">
              Experience & Aspirations
            </h2>
            <Briefcase className="w-6 h-6 text-rose-400" />
          </div>
          <p className="text-rose-600 text-lg">
            Building my journey one step at a time ✨
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-rose-100"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px -10px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className={`bg-gradient-to-r ${exp.gradient} p-6 flex items-center gap-4`}
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <exp.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white drop-shadow-sm">
                    {exp.title}
                  </h3>
                  <p className="text-white font-medium">{exp.duration}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-800 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looking For Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-16 border border-rose-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-rose-100 p-2 rounded-lg">
              <Search className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-rose-900">
              Looking For Opportunities
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {aspirations.map((aspiration, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-r ${aspiration.gradient}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/20 p-2 rounded-lg w-fit mb-4">
                  <aspiration.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white drop-shadow-sm mb-2">
                  {aspiration.role}
                </h4>
                <p className="text-white font-medium leading-relaxed">
                  {aspiration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-rose-100 rounded-full">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <span className="text-rose-900 font-medium">
              Open to learning new technologies and embracing challenges!
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
