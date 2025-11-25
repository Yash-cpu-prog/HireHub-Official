import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { APPLICANT_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import { setSingleJob } from '@/redux/jobSlice'
import { toast } from 'sonner'
import Navbar from './shared/Navbar'
import { motion } from 'framer-motion'

const JobDescription = () => {

  const dispatch = useDispatch();
  const { singleJob } = useSelector(state => state.job)
  const { user } = useSelector(state => state.auth)

  const isInitiallyApplied =
    singleJob?.applications?.some(app => app.applicant === user?._id) || false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const { id: jobId } = useParams();

  const applyJobHandler = async () => {
    try {
      const response = await axios.post(`${APPLICANT_API_END_POINT}/apply/${jobId}`, {}, {
        withCredentials: true
      });

      if (response.data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }]
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(response.data.message);
      }

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(app => app.applicant === user?._id)
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto px-[6%] py-12"
      >

        {/* Header Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-10">
          <div className="flex items-start justify-between">

            <div>
              <h1 className="text-3xl font-bold text-gray-900">{singleJob?.title}</h1>

              <div className="flex items-center gap-3 mt-4">
                <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
                  {singleJob?.position} Positions
                </Badge>
                <Badge className="bg-red-50 text-red-700 border border-red-200">
                  {singleJob?.jobType}
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border border-purple-200">
                  {singleJob?.salary} LPA
                </Badge>
              </div>
            </div>

            <Button
              disabled={isApplied}
              onClick={isApplied ? null : applyJobHandler}
              className={`px-6 py-2 text-lg rounded-lg transition-all ${
                isApplied
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white shadow-md"
              }`}
            >
              {isApplied ? "Applied" : "Apply Now"}
            </Button>

          </div>
        </div>

        {/* Job Details Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold border-b pb-4 mb-6 text-gray-900">
            Job Details
          </h2>

          <div className="space-y-4 text-gray-800">

            <div className="flex items-center">
              <h1 className="w-32 font-bold">Role:</h1>
              <span>{singleJob?.title}</span>
            </div>

            <div className="flex items-center">
              <h1 className="w-32 font-bold">Location:</h1>
              <span>{singleJob?.location}</span>
            </div>

            <div>
              <h1 className="font-bold mb-1">Description:</h1>
              <p className="leading-relaxed text-gray-700">
                {singleJob?.description}
              </p>
            </div>

            <div className="flex items-center">
              <h1 className="w-32 font-bold">Experience:</h1>
              <span>{singleJob?.experience} yrs</span>
            </div>

            <div className="flex items-center">
              <h1 className="w-32 font-bold">Salary:</h1>
              <span>{singleJob?.salary} LPA</span>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default JobDescription;

