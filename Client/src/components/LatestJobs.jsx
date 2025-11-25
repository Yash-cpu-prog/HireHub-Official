import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function LatestJobs() {
  const { allJobs } = useSelector((state) => state.job);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="px-[5%] w-full my-24"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          <span className="text-[#6A38C2]">Latest</span> Opportunities  
          <br />
          <span className="text-gray-600 text-[22px] md:text-[26px] font-medium">
            Handpicked Jobs Just For You
          </span>
        </h1>
      </div>

      {/* Wrapper Box */}
      <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 border border-gray-100">
        
        {/* Category tabs look header (dummy UI) */}
        <div className="flex gap-3 flex-wrap mb-8">
          {["All", "Tech", "Design", "Marketing", "Remote", "Internships"].map(
            (tag, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-[#6A38C2] hover:text-white transition-all"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {allJobs?.slice(0, 7).map((job) => (
            <div
              key={job._id}
              className="transform transition-all hover:-translate-y-2"
            >
              <LatestJobCards job={job} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default LatestJobs;
