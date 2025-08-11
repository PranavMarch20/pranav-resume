import React from "react";
import { experienceData } from "../constants/constants.js";

const Experience = () => {
    return (
        <section
            id="experience"
            className="flex flex-col h-fit md:w-[95%] w-[90%] items-center justify-center md:mt-11"
        >
            <div className="flex flex-col items-start justify-center h-auto md:max-w-[700px] w-full gap-10 md:gap-10 ">
                <p className="section-heading md:text-section-heading-md">Experience</p>

                {/* experience card */}
                <div className="flex flex-col items-start justify-start gap-10">
                    {experienceData.map((exp, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-5 w-full pl-4 py-0 border-l border-[#ababab3f]"
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-center">
                                {/* Left Side */}
                                <div className="flex flex-col items-start gap-[6px]">
                                    <div className="text-s-sub md:text-s-sub-md flex items-center">
                                        <span>
                                            <i className="ph ph-map-pin text-[13px] pr-[2px]"></i>
                                            {exp.location}
                                        </span>
                                    </div>
                                    <h2 className="text-highlink md:text-highlink-md">
                                        {exp.company}
                                    </h2>
                                    <p className="text-s-sub md:text-s-sub-md">{exp.role}</p>
                                </div>

                                {/* Right Side */}
                                <p className="text-s-sub md:text-s-sub-md">{exp.period}</p>
                            </div>

                            {/* Bullet Points */}
                            <ul className="mt-4 space-y-2 list-disc px-4 text-para md:text-para-md">
                                {exp.points.map((point, pIdx) => (
                                    <li key={pIdx} className="px-3">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* End of experience card */}
                
            </div>
        </section>
    );
};

export default Experience;
