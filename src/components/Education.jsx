import React from "react";
import { educationData } from "../constants/constants";

const Education = () => {
    return (
        <section
            id="education"
            className="flex flex-col h-fit md:w-[95%] w-[90%] items-center justify-center md:mt-11"
        >
            <div className="flex flex-col items-start justify-center h-auto md:max-w-[700px] w-full gap-10 md:gap-10">
                <p className="section-heading md:text-section-heading-md">Education</p>
                <div className="flex flex-col items-start justify-start gap-10 w-full">

                    {educationData.map((edu, idx) => (
                        <div key={idx} className="flex flex-col gap-3 pl-4 py-0 w-full border-l border-[#ababab3f]">
                            {/* Top Row */}
                            <div className="flex justify-between items-center">
                                {/* Left Side */}
                                <div className="flex flex-col items-start gap-[6px]">
                                    <h2 className="text-highlink md:text-highlink-md">
                                        {edu.course}
                                    </h2>
                                    <p className="text-s-sub md:text-s-sub-md w-[80%]">{edu.institution}</p>
                                </div>

                                {/* Right Side */}
                                <p className="text-s-sub md:text-s-sub-md">{edu.period}</p>
                            </div>

                            <p className="mt-4 space-y-2 list-disc text-para md:text-para-md">{edu.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Education;
