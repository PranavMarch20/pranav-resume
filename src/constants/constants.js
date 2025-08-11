import profilePicture from "../assets/profilepicture.jpg";
import resumepdf from "../assets/testResDownload.pdf";

const navLinks = {
    left: ["Intro", "About", "Work", "Experience"],
    right: ["Education", "Stack", "Ranks", "Contact"]
}

const introData = {
    emailId: "pranavmac13@gmail.com",
    role: "Web Developer",
    location: "Lucknow, India",
    profilePic: profilePicture,
    resumePDF: resumepdf
};

const experienceData = [
    {
        location: "Lucknow, India",
        company: "Digital Innovations Agency",
        role: "Senior Web Designer",
        period: "Jan 2025 – Present",
        points: [
            "Led the redesign of high-traffic websites, resulting in a 30% increase in user engagement.",
            "Managed a team of junior designers, providing mentorship and overseeing project timelines.",
            "Collaborated with cross-functional teams to develop innovative design solutions for diverse clients.",
            "Implemented responsive design principles to ensure optimal performance across all devices.",
        ],
    },
    {
        location: "New Delhi, India",
        company: "Creative Studios",
        role: "UI/UX Designer",
        period: "Jun 2024 – Dec 2024",
        points: [
            "Designed intuitive user interfaces for e-commerce platforms, increasing conversion rates by 15%.",
            "Created wireframes, prototypes, and visual designs for multiple mobile applications.",
            "Worked closely with developers to ensure accurate implementation of designs.",
            "Introduced a design system to maintain consistency across all products.",
        ],
    },
];


const educationData = [
    {
        course: "B. Tech CSE",
        institution: "Babu Banarasi Das University, Lucknow",
        period: "2023 – 27",
        description:
            "With relevant coursework in DSA, DBMS, OS and Computer Networking. Cgpa : 7.98 (till 4th semester).",
    },
    {
        course: "XII th",
        institution: "Army Public School, Nehru Road, Lucknow",
        period: "2021 – 22",
        description:
            "PCM with Computer Science, scored 84.2% in Class XII Board Exams. Also learned HTML, CSS, and JavaScript basics.",
    },
    {
        course: "X th",
        institution: "Army Public School, Nehru Road, Lucknow",
        period: "2019 – 20",
        description:
            "Science and Maths, scored 86.7% in Class X Board Exams. Was active in design competitions.",
    },
];

export { navLinks, introData, experienceData, educationData };