import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col h-auto md:w-[95%] w-[90%] items-center justify-center '>
        <div className='flex flex-col items-start justify-center h-auto md:max-w-[700px] w-full gap-10 md:gap-8 md:mt-3 '>
            <p className='section-heading md:text-section-heading-md'>About me</p>
            <div className='flex flex-col items-start justify-start gap-5'>
                <p className='text-para md:text-para-md font-bold'>Hello, I'm Pranav Singh, a full-stack developer and CSE student passionate about building innovative, backend-driven applications using MERN, AI, and cloud technologies.</p>
                <p className='text-para md:text-para-md'>My journey in technology began with a curiosity for how software works and a drive to create solutions that solve real-world problems. Over time, I’ve strengthened my skills in web development, backend architecture, and AI-powered systems, focusing on scalable, impactful projects that blend technical precision with practical use.</p>
            </div>
        </div>
    </section>
  )
}

export default About