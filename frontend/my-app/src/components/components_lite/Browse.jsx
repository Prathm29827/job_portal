import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector((store) => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]);

    return (
        <div>
            <Navbar />

            <div className="max-w-7xl mx-auto my-10 px-4">
                {/* Page Heading */}
                <h1 className="font-bold text-2xl text-gray-800 mb-6">
                    Browse Jobs ({allJobs.length})
                </h1>

                {/* Search & Filters (future integration) */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search jobs by title..."
                        className="border border-gray-300 rounded-md px-4 py-2 flex-1"
                    />
                    <select className="border border-gray-300 rounded-md px-4 py-2">
                        <option value="">All Categories</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-4 py-2">
                        <option value="">Location</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">On-site</option>
                    </select>
                </div>

                {/* Job Results */}
                {allJobs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allJobs.map((job) => (
                            <Job1 key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 py-20">
                        <h2 className="text-xl font-semibold mb-2">
                            No jobs found
                        </h2>
                        <p className="text-gray-500">
                            Try adjusting your search or filters to find what you’re looking for.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Browse;
