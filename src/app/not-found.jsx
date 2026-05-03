"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      
      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-8xl font-bold"
      >
        404
      </motion.h1>

      {/* Animated Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-300"
      >
        Oops! Your Page Doesn't exist. Please check your URL again
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Go Back Home
          </button>
        </Link>
      </motion.div>

      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 text-5xl"
      >
        🚀
      </motion.div>

    </div>
  );
}