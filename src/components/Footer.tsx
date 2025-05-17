'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { 
      name: 'Resume', 
      href: 'https://www.dropbox.com/scl/fi/r04we8m5jykk0hpke8dd0/Without-phone.docx.pdf?rlkey=84pb8i1zurvcfcqftnbi0k8l6&e=2&st=cg64m2ps&dl=0',
      external: true 
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AdrikaPanwar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/adrika-panwar/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/@AdrikaPanwar', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ]

  return (
    <motion.footer
      className="bg-gradient-to-b from-rose-200 to-rose-300 pt-20 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="font-serif text-2xl font-bold text-rose-800 mb-4">Adrika Panwar</h3>
            <p className="text-rose-700">Backend Developer & Tech Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h4 className="font-medium text-rose-800 mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-rose-700 hover:text-rose-900 transition-colors"
                  target={link.external ? "_blank" : "_self"}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="font-medium text-rose-800 mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-700 hover:text-rose-900 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center pt-8 border-t border-rose-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-rose-700">Built with</span>
            <Heart className="w-4 h-4 text-rose-600 fill-current" />
            <span className="text-rose-700">using Next.js</span>
          </div>
          <p className="text-rose-700 text-sm">
            © 2024 Adrika Panwar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
