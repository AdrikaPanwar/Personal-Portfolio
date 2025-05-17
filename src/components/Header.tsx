"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    {
      name: "Resume",
      href: "https://www.dropbox.com/scl/fi/r04we8m5jykk0hpke8dd0/Without-phone.docx.pdf?rlkey=84pb8i1zurvcfcqftnbi0k8l6&e=2&st=cg64m2ps&dl=0",
      external: true,
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/AdrikaPanwar",
      Icon: Github,
      label: "GitHub",
      color: "hover:text-rose-600",
    },
    {
      href: "https://www.linkedin.com/in/adrika-panwar/",
      Icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-rose-500",
    },
    {
      href: "https://x.com/@AdrikaPanwar",
      Icon: Twitter,
      label: "Twitter",
      color: "hover:text-rose-400",
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? "bg-white"
          : isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="h-8 w-8 bg-gradient-to-br from-rose-400 to-pink-300 rounded-lg flex items-center justify-center text-white font-serif text-lg shadow-md"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                A
              </motion.div>
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent">
                Adrika
              </span>
            </motion.div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={link.href}
                    className="text-rose-700 hover:text-rose-500 font-medium transition-colors relative group"
                    target={link.external ? "_blank" : "_self"}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ href, Icon, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  className={`text-rose-700 ${color} transition-all duration-300`}
                  target="_blank"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="md:hidden flex items-center justify-center w-10 h-10 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <motion.span
                className="w-full h-[2px] bg-rose-600 absolute"
                animate={{
                  top: isMobileMenuOpen ? "50%" : "0",
                  rotate: isMobileMenuOpen ? 45 : 0,
                  translateY: isMobileMenuOpen ? "-50%" : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-[2px] bg-rose-600 absolute top-1/2 -translate-y-1/2"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scale: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-[2px] bg-rose-600 absolute"
                animate={{
                  bottom: isMobileMenuOpen ? "50%" : "0",
                  rotate: isMobileMenuOpen ? -45 : 0,
                  translateY: isMobileMenuOpen ? "50%" : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 0 }}
                  >
                    <Link
                      href={link.href}
                      className="text-rose-700 hover:text-rose-500 font-medium block"
                      target={link.external ? "_blank" : "_self"}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex space-x-4 pt-4 border-t border-rose-100">
                  {socialLinks.map(({ href, Icon, label, color }) => (
                    <Link
                      key={label}
                      href={href}
                      className={`text-rose-700 ${color}`}
                      target="_blank"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
