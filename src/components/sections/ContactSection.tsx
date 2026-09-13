"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%EB%91%90%EB%B2%94-%EA%B3%A0-304b1b40b/",
    icon: <FaLinkedinIn size={20} aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Koh-Du-Beom",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dubeom/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.777.91.957 1.47.163.46.349 1.26.404 2.43.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 01.957-1.47 4.088 4.088 0 011.47-.957c.46-.163 1.26-.349 2.43-.404C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.151.558 2.913a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.762.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.151-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.762.5-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.151-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.86.63C19.098.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const emails = [
  { label: "Naver", address: "bean3260@naver.com" },
  { label: "Gmail", address: "beanleaf3260@gmail.com" },
];

export default function ContactSection() {
  return (
    <footer id="contact" className="border-t border-zinc-800 py-12 md:py-16" role="contentinfo">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        {/* <motion.p
          className="mt-4 text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          함께 일하고 싶으시다면 연락주세요.
        </motion.p> */}

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 text-sm text-zinc-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {emails.map((e) => (
            <p key={e.label}>
              <span className="text-zinc-300">{e.label}</span>{" "}
              <span className="text-zinc-500">:</span>{" "}
              {e.address}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
              aria-label={link.label}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* <p className="mt-16 text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} 고두범. Built with Next.js &amp; Three.js.
        </p> */}
      </div>
    </footer>
  );
}
