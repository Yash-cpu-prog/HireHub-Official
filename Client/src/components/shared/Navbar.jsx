import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { BriefcaseBusiness, BuildingIcon, HomeIcon, LogOut, MenuIcon, SearchCheck, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { setSearchedQuery } from '@/redux/jobSlice'

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);

    const logoutHandler = async () => {
        try {
            const response = await axios.post(
                `${USER_API_END_POINT}/logout`,
                {},
                { withCredentials: true }
            );

            if (response.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message);
        }
    };

    const resetQuery = () => dispatch(setSearchedQuery(''));

    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-gray-200 shadow-sm">
            <div className="mx-auto flex items-center justify-between h-16 px-3 sm:px-[5%] lg:px-[10%]">

                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer flex items-center gap-1"
                >
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Hire<span className="text-indigo-600">Hub</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex items-center gap-10 text-gray-700 font-medium">
                    {
                        user?.role === "recruiter" ? (
                            <>
                                <Link className="hover:text-indigo-600 transition-all duration-200" to="/admin/companies">Companies</Link>
                                <Link className="hover:text-indigo-600 transition-all duration-200" to="/admin/jobs">Jobs</Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    onClick={resetQuery}
                                    to="/"
                                    className="hover:text-indigo-600 transition-all duration-200"
                                >
                                    Home
                                </Link>
                                <Link to="/jobs" className="hover:text-indigo-600 transition-all duration-200">Jobs</Link>
                                <Link
                                    to="/browse"
                                    onClick={resetQuery}
                                    className="hover:text-indigo-600 transition-all duration-200"
                                >
                                    Browse
                                </Link>
                            </>
                        )
                    }
                </nav>

                {/* Authentication */}
                <div className="flex items-center gap-4">

                    {!user ? (
                        <div className="flex items-center gap-3">
                            <Link to="/login">
                                <Button variant="outline" className="rounded-full px-6 py-2 border-indigo-300 hover:bg-indigo-50 transition">
                                    Login
                                </Button>
                            </Link>

                            <Link to="/signup">
                                <Button className="rounded-full px-6 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (

                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer ring-2 ring-indigo-300 shadow">
                                    <AvatarImage
                                        src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                                        alt="Profile"
                                    />
                                </Avatar>
                            </PopoverTrigger>

                            <PopoverContent className="w-80 bg-white/95 backdrop-blur-xl shadow-xl border border-indigo-100 rounded-xl p-5">
                                <div className="flex gap-4 pb-4 border-b border-gray-200">
                                    <Avatar className="ring-2 ring-indigo-200">
                                        <AvatarImage
                                            src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                                        />
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-lg">{user?.fullname}</h4>
                                        <p className="text-sm text-gray-500">
                                            {user?.profile?.bio || "Welcome to HireHub!"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-4 text-gray-800">
                                    {user.role === "student" && (
                                        <div className="flex items-center gap-3 mb-3 cursor-pointer hover:text-indigo-600 transition">
                                            <User2 className="text-indigo-600" />
                                            <Link to="/profile" className="font-medium">View Profile</Link>
                                        </div>
                                    )}

                                    <div
                                        className="flex items-center gap-3 cursor-pointer text-red-500 hover:text-red-600 transition"
                                        onClick={logoutHandler}
                                    >
                                        <LogOut />
                                        <p className="font-medium">Logout</p>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}

                    {/* Mobile Menu */}
                    <div className="sm:hidden">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer bg-indigo-200 p-2 rounded-full">
                                    <MenuIcon className="text-indigo-700" />
                                </Avatar>
                            </PopoverTrigger>

                            <PopoverContent className="w-72 bg-white/90 backdrop-blur-xl border border-indigo-100 shadow-xl p-5 rounded-xl">
                                <div className="flex flex-col gap-6 text-gray-900 text-lg">

                                    {user?.role === "recruiter" ? (
                                        <>
                                            <div onClick={() => navigate("/admin/companies")} className="flex gap-4 items-center cursor-pointer hover:text-indigo-600 transition">
                                                <BuildingIcon />
                                                Companies
                                            </div>

                                            <div onClick={() => navigate("/admin/jobs")} className="flex gap-4 items-center cursor-pointer hover:text-indigo-600 transition">
                                                <BriefcaseBusiness />
                                                Jobs
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div onClick={() => { navigate("/"); resetQuery(); }} className="flex gap-4 items-center cursor-pointer hover:text-indigo-600 transition">
                                                <HomeIcon />
                                                Home
                                            </div>

                                            <div onClick={() => navigate("/jobs")} className="flex gap-4 items-center cursor-pointer hover:text-indigo-600 transition">
                                                <BriefcaseBusiness />
                                                Jobs
                                            </div>

                                            <div onClick={() => { navigate("/browse"); resetQuery(); }} className="flex gap-4 items-center cursor-pointer hover:text-indigo-600 transition">
                                                <SearchCheck />
                                                Browse
                                            </div>
                                        </>
                                    )}

                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;




