import React from "react";
import { Button } from "./ui/button";
import { Bookmark, MapPin } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const now = new Date();
    const diff = now.getTime() - createdAt.getTime();
    return Math.floor(diff / (1000 * 3600 * 24));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        relative bg-white/70 backdrop-blur-xl 
        rounded-2xl shadow-lg border border-gray-200
        px-6 py-7 flex flex-col gap-5 
        hover:shadow-2xl hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Floating Badge */}
      <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        {daysAgoFunction(job?.createdAt) === 0
          ? "New"
          : `${daysAgoFunction(job?.createdAt)}d ago`}
      </span>

      {/* Company Row */}
      <div className="flex items-center gap-4">
        <Avatar className="w-14 h-14 ring-2 ring-purple-200 shadow-md">
          <AvatarImage
            src={
              job?.company?.logo ||
              "https://th.bing.com/th/id/OIP.NU9zscMHAn83CpLA9fDjrgHaHa?rs=1&pid=ImgDetMain"
            }
          />
        </Avatar>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
            {job?.company?.companyName}
          </h2>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin size={14} />
            <span>India</span>
          </div>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="ml-auto rounded-full hover:bg-purple-100"
        >
          <Bookmark />
        </Button>
      </div>

      {/* Job Title */}
      <h1 className="text-xl font-bold text-gray-900 leading-snug">
        {job?.title}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {job?.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-50 text-blue-700 border-blue-200">
          {job?.position} Positions
        </Badge>

        <Badge className="bg-orange-50 text-orange-700 border-orange-200">
          {job?.jobType}
        </Badge>

        <Badge className="bg-purple-50 text-purple-700 border-purple-200">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-3 mt-3">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${job._id}`)}
          className="w-1/2 border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Details
        </Button>

        <Button className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white">
          Save
        </Button>
      </div>
    </motion.div>
  );
};

export default Job;

