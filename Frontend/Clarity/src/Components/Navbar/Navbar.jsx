import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [statsDropdownOpen, setStatsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            const dropdown = document.getElementById("stats-dropdown");
            const dropdownButton = document.getElementById("stats-dropdown-button");

            if (dropdown && dropdownButton &&
                !dropdown.contains(event.target) &&
                !dropdownButton.contains(event.target)) {
                setStatsDropdownOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleStatsDropdown = () => {
        setStatsDropdownOpen(!statsDropdownOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute -top-20 right-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>

                <div className="flex items-center justify-between h-16 relative z-10">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white font-extrabold text-4xl tracking-tight hover:scale-105 transition-transform duration-300">
                            Clarity
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="#Prices" className="text-indigo-100 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                                Prices
                            </a>
                            <div className="relative">
                                <button
                                    id="stats-dropdown-button"
                                    onClick={toggleStatsDropdown}
                                    className="text-indigo-100 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center"
                                >
                                    Statistics
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${statsDropdownOpen ? 'transform rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {statsDropdownOpen && (
                                    <div
                                        id="stats-dropdown"
                                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
                                    >
                                        <a href="#Parameters" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-800">
                                            Parameters
                                        </a>
                                        <a href="#MarketAnalysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-800">
                                            Market Analysis
                                        </a>
                                        <a href="#SpecificationsDashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-800">
                                            Specifications Dashboard
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a href="#Headlines" className="text-indigo-100 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                                Headlines
                            </a>
                            <button
                                onClick={handleLogout}
                                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-indigo-100 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-indigo-800 bg-opacity-95 backdrop-filter backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#Prices"
                            className="text-indigo-100 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Prices
                        </a>

                        <div className="relative">
                            <button
                                onClick={() => setStatsDropdownOpen(!statsDropdownOpen)}
                                className="w-full text-left flex justify-between items-center text-indigo-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                            >
                                <span>Statistics</span>
                                <svg
                                    className={`h-5 w-5 transition-transform duration-200 ${statsDropdownOpen ? 'transform rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {statsDropdownOpen && (
                                <div className="pl-4 space-y-1 mt-1">
                                    <a
                                        href="#Parameters"
                                        className="text-indigo-200 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Parameters
                                    </a>
                                    <a
                                        href="#MarketAnalysis"
                                        className="text-indigo-200 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Market Analysis
                                    </a>
                                    <a
                                        href="#SpecificationsDashboard"
                                        className="text-indigo-200 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Specifications Dashboard
                                    </a>
                                </div>
                            )}
                        </div>

                        <a
                            href="#Headlines"
                            className="text-indigo-100 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Headlines
                        </a>
                        <button
                            onClick={() => {
                                handleLogout();
                                setIsOpen(false);
                            }}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 mt-4"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;