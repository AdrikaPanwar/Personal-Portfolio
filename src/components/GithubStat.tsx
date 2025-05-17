"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GitHubStats() {
  return (
    <motion.section
      id="github-stats"
      className="py-20 bg-gradient-to-b from-white to-rose-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Github className="w-6 h-6 text-rose-400" />
            <h2 className="text-4xl font-serif font-bold text-rose-900">
              GitHub Activity
            </h2>
            <Github className="w-6 h-6 text-rose-400" />
          </div>
          <p className="text-rose-600 text-lg">My open source journey ✨</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* GitHub Stats Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-rose-100"
            whileHover={{
              y: -5,
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              title="github-stat"
              src="https://github-readme-stats.vercel.app/api?username=AdrikaPanwar&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&title_color=b45309&icon_color=b45309&text_color=1f2937&bg_color=ffffff"
              width="100%"
              height="200px"
              frameBorder="0"
              loading="lazy"
            />
          </motion.div>

          {/* Most Used Languages Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-rose-100"
            whileHover={{
              y: -5,
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              name="github-stat"
              title="github-stat"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=AdrikaPanwar&layout=compact&hide_border=true&title_color=b45309&icon_color=b45309&text_color=1f2937&bg_color=ffffff&card_width=445"
              width="100%"
              height="200px"
              frameBorder="0"
              loading="lazy"
              className="min-w-[240px]"
            />
          </motion.div>
        </motion.div>

        <motion.div className="mt-12 flex justify-center gap-8">
          <motion.a
            href="https://github.com/AdrikaPanwar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
