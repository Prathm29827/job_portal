import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector((store) => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (!searchedQuery || searchedQuery.trim() === "") {
            setFilterJobs(allJobs);
            return;
        }

        const filteredJobs = allJobs.filter((job) => {
            const query = searchedQuery.toLowerCase();
            return (
                job.title?.toLowerCase().includes(query) ||
                job.description?.toLowerCase().includes(query) ||
                job.location?.toLowerCase().includes(query) ||
                job.experience?.toLowerCase().includes(query) ||
                job.salary?.toLowerCase().includes(query)
            );
        });

        setFilterJobs(filteredJobs);
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />

            <div className="max-w-7xl mx-auto mt-6 px-4">
                {/* Page Heading */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Available Jobs ({filterJobs.length})
                </h1>

                {/* Top Filter Bar */}
                <div className="flex flex-wrap gap-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6">
                    <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700">
                        <option value="">All Categories</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="marketing">Marketing</option>
                    </select>

                    <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700">
                        <option value="">Location</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">On-site</option>
                        <option value="hybrid">Hybrid</option>
                    </select>

                    <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700">
                        <option value="">Experience</option>
                        <option value="fresher">Fresher</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                    </select>

                    <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700">
                        <option value="">Salary Range</option>
                        <option value="0-3">0 - 3 LPA</option>
                        <option value="3-6">3 - 6 LPA</option>
                        <option value="6-10">6 - 10 LPA</option>
                        <option value="10+">10+ LPA</option>
                    </select>
                </div>

                {/* Job Grid */}
                {filterJobs.length <= 0 ? (
                    <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-gray-700">
                                No jobs found
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Try adjusting your filters or search query.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filterJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Job1 job={job} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jobs;
