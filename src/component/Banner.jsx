"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1532901074349-dc9d1505589c')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.h1
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl"
          >
            Discover Your <br />{" "}
            <span className="text-[#D4AF37]">Perfect Aesthetic</span>
          </motion.h1>

          <div className="flex gap-4'">
            <Link href="/all-tiles">
              <Button variant="outline" className="btn text-white">
                Browse Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
