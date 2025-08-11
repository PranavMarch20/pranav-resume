import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { navLinks } from "../constants/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed z-20 top-0 flex flex-col items-center justify-center h-auto w-auto select-none">
            {/* Toggle Button */}
            <button
                onClick={toggleNavbar}
                className={`absolute md:mr-4 top-5 z-30 text-sm text-[#898989] p-[6px] rounded-md shadow-md hover:bg-neutral-700 transition-all duration-2500 ease-out ${isOpen ? "bg-[#121212]" : "bg-[#242424]"}`}
            >
                <p
                    className={`${isOpen ? "rotate-45" : "rotate-0"} transition-all duration-2500 ease-out`}
                >
                    {<FiPlus size={19} />}
                </p>
            </button>

            {/* expandable navbar links */}
            <div className={`fixed z-20 top-0 flex flex-col items-center justify-center h-auto w-auto select-none transition-all duration-200 ease-in-out transform origin-top md:origin-center ${isOpen
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-0 pointer-events-none"
                            } `}>
                <div className="relative ">

                    {/* Navbar Background */}
                    <div
                        className={`flex flex-col z-20 md:flex-row items-center md:px-2 md:py-0 p-16 pb-2 pt-[55px] mt-2 md:mt-[17.5px] md:gap-12 shadow-lg rounded-lg bg-neutral-800 text-white `}
                    >
                        <div
                            className={`flex flex-col md:flex-row items-center gap-4 px-2 py-2 rounded-lg bg-neutral-800 text-white transition-all duration-200 ease-out }`}
                        >
                            {navLinks.left.map((item) => (
                                <a
                                    onClick={toggleNavbar}
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="transition-all text-sm relative group"
                                >
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        <div
                            className={`flex flex-col md:flex-row items-center gap-4 px-2 py-2 rounded-lg bg-neutral-800 text-white transition-all duration-200 ease-out 
                }`}
                        >
                            {navLinks.right.map((item) => (
                                <a
                                    onClick={toggleNavbar}
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="transition-all text-sm relative group"
                                >
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
