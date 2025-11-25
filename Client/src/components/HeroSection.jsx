import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/Hero.jpg..jpg"; // make sure this path matches your folder structure

function HeroSection() {
  return (
    <section className="w-full bg-[#e5f1ff] flex justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 items-center p-10"
      >
        {/* LEFT TEXT SIDE */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Work<br />Together to Create<br />Wonders with Us
          </h1>

          <p className="text-gray-600 text-lg">
            A visionary creative, crafting captivating wonders through art and
            design. Adept at turning imagination into extraordinary reality.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600">
              Let’s Talk
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-full hover:bg-gray-100">
              Start Project
            </button>
          </div>

          <div className="flex gap-10 mt-8">
            <div>
              <h2 className="text-2xl font-bold">15+</h2>
              <p className="text-gray-600 text-sm">years experience</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">26K</h2>
              <p className="text-gray-600 text-sm">projects success</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">98%</h2>
              <p className="text-gray-600 text-sm">satisfied rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative flex justify-center mt-10 md:mt-0">

          {/* MAIN IMAGE */}
          <img
            src={HeroImg}
            alt="Hero Pic"
            className="w-[420px] object-contain z-20"
          />

          {/* FLOATING TAGS */}
          <div className="absolute top-10 right-0 bg-white px-4 py-2 rounded-full shadow-md z-30">
            Illustration
          </div>

          <div className="absolute top-28 right-4 bg-white px-4 py-2 rounded-full shadow-md z-30">
            Graphic Design
          </div>

          <div className="absolute bottom-10 right-8 bg-white px-4 py-2 rounded-full shadow-md z-30">
            Creative Branding
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;








