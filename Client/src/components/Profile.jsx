import React, { useState } from 'react'
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import Footer from './shared/Footer';
import { motion } from "framer-motion"


function Profile() {

    useGetAppliedJobs();
    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth);

    return (
        <>
            <Navbar />

            <div className="w-full px-[6%] py-10 max-sm:px-[3%] bg-[#f8f9ff]">

                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-extrabold mb-6 text-[#1a1a1a]"
                >
                    My Profile
                </motion.h1>

                {/* Main Layout */}
                <div className="grid grid-cols-12 gap-10 max-lg:grid-cols-1">

                    {/* Left Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="col-span-4 max-lg:col-span-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
                    >

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-gray-800">
                                Profile Details
                            </h2>

                            <Button onClick={() => setOpen(true)} variant="outline" className="rounded-full">
                                <Pen size={16} />
                            </Button>
                        </div>

                        {/* Avatar + Name */}
                        <div className="flex items-center gap-5 mb-6">
                            <Avatar className="w-24 h-24">
                                {user?.profile?.profilePhoto ? (
                                    <AvatarImage src={user.profile.profilePhoto} alt="profile" />
                                ) : (
                                    <AvatarImage src="" alt="profile" />
                                )}
                            </Avatar>

                            <div>
                                <h1 className="text-xl font-bold text-gray-900">{user?.fullname}</h1>
                                <p className="text-gray-600 text-sm">{user?.profile?.bio ?? "No bio added"}</p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-3">

                            <div className="flex items-center gap-3 text-gray-700">
                                <Mail size={18} />
                                <span>{user?.email}</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <Contact size={18} />
                                <span>{user?.phoneNumber}</span>
                            </div>

                        </div>

                        {/* Skills Section */}
                        <div className="mt-6">
                            <h3 className="text-md font-bold text-gray-800 mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {user?.profile?.skills?.length > 0 ? (
                                    user.profile.skills.map((skill, index) => (
                                        <Badge key={index} className="px-3 py-1 text-sm rounded-md bg-[#eef2ff] text-[#4338ca]">
                                            {skill}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">No skills added</p>
                                )}
                            </div>
                        </div>

                        {/* Resume Section */}
                        <div className="mt-6">
                            <Label className="font-bold text-gray-800">Resume</Label>
                            {user?.profile?.resume ? (
                                <a
                                    target="blank"
                                    href={user.profile.resume}
                                    className="text-blue-600 hover:underline text-sm block mt-1"
                                >
                                    {user.profile.resumeOriginalName}
                                </a>
                            ) : (
                                <p className="text-gray-500 text-sm mt-1">No resume uploaded</p>
                            )}
                        </div>

                    </motion.div>

                    {/* Right – Applied Jobs */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="col-span-8 max-lg:col-span-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
                    >

                        <h2 className="font-bold text-xl text-gray-800 mb-5">Applied Jobs</h2>

                        <div className="w-full">
                            <AppliedJobTable />
                        </div>

                    </motion.div>

                </div>

            </div>

            {/* Update Profile Modal */}
            <UpdateProfileDialog open={open} setOpen={setOpen} />

            <Footer />
        </>
    )
}

export default Profile;


