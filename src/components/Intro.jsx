import React, { useState } from 'react'
import { introData } from '../constants/constants';

const Intro = () => {
    const [email, setemail] = useState(introData.emailId);

    // Function to copy email to clipboard
    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        .then(() => {
            setemail("Copied!");
            setTimeout(() => setemail(introData.emailId), 1000); // Reset email text after 1 seconds
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
    <section id='intro' className='flex flex-col md:h-[274px] h-[520px] w-[95%] items-center justify-end mt-3'>
        <div className='flex flex-col items-center justify-end h-auto md:max-w-[700px] w-full gap-8 md:gap-8'>
            <div className='flex flex-col md:flex-row items-center md:items-end justify-between gap-7 md:gap-3 w-full'>
                <div className='flex flex-col md:flex-row items-center justify-start gap-4 md:h-[122px] w-[550px]'>
                    <img className='w-[155px] md:w-[122px] rounded-lg' src={introData.profilePic} alt="profile picture" />
                    <div className='flex flex-col items-center md:items-start gap-4'>
                        <div className='flex flex-col items-center md:items-start gap-1'>
                            <h1 className='text-head md:text-head-md'>Pranav Kumar Singh</h1>
                            <div className='flex flex-col md:items-start gap-1'>
                                <h4 className='text-sub md:text-sub-md'>{introData.role}</h4>
                                <h6 className='text-s-sub md:text-s-sub-md flex gap-[3px]'><i className="ph ph-map-pin text-[14px] pt-[2.5px]"></i>{introData.location}</h6>
                            </div>
                        </div>
                        <div>
                            <p className='flex gap-1 items-center text-s-sub md:text-s-sub-md'><i className="ph-fill ph-circle text-[7px] text-[#00FF3C] animate-blink"></i>Available for work</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-col items-center md:items-start justify-between gap-10 md:gap-3'>
                    <a className='text-highlink md:text-highlink-md flex items-center select-none gap-1.5 border-b-[0.5px] border-[#ababab3f] relative group pb-[3px]' href="#contact"><i className="ph ph-link-simple pt-[1px]"></i>Contact me
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className='text-highlink md:text-highlink-md flex items-center select-none gap-1.5 border-b-[0.5px] border-[#ababab3f] relative group pb-[3px]' href={introData.resumePDF} download="Pranav_Resume.pdf"><i className="ph ph-download-simple pt-[1px]"></i>Download CV
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between w-full items-center md:items-start gap-4 pt-2 border-t-[0.5px] border-[#ababab3f]'>
                <p className='text-para md:text-para-md flex gap-1 select-none hover:text-white cursor-pointer transition-colors' onClick={copyEmail}><i className="ph ph-copy pt-[3px]"></i>{email}</p>
                <div className='flex gap-4'>
                    <a className='text-para md:text-para-md flex gap-1 hover:text-white cursor-pointer transition-colors select-none' href="https://github.com/PranavMarch20"><i className="ph ph-github-logo pt-[2px]"></i>Github</a>
                    <a className='text-para md:text-para-md flex gap-1 hover:text-white cursor-pointer transition-colors select-none' href="https://www.linkedin.com/in/pranavmarch20/"><i className="ph ph-linkedin-logo pt-[2px]"></i>LinkedIn</a>
                </div>
            </div>
        </div>
    </section>

)}



export default Intro;