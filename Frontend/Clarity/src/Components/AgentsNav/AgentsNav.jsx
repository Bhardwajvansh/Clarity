import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Car,
    Stethoscope,
    Laptop,
    Box,
    Database,
    FileText,
    Bot,
    UserRound,
    LogOut,
    ChevronRight,
    ChevronDown
} from "lucide-react";
import { Footer } from "../Footer/Footer";
import Agents from "../Agents/Agents";

const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
];

export const AgentsNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [clarityDropdownOpen, setClarityDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const SidebarItem = ({ icon, label, onClick, isDropdown }) => (
        <div
            className="relative group w-full"
        >
            <div
                onClick={onClick}
                className={`
                    flex items-center 
                    p-3 
                    cursor-pointer 
                    rounded-lg 
                    transition-all 
                    ease-in-out 
                    duration-500
                    ${isExpanded ? 'w-full pl-4' : 'w-full pl-2'}
                    hover:bg-[${COLORS[0]}]/10
                    ${isDropdown ? 'relative' : ''}
                `}
            >
                {React.cloneElement(icon, {
                    className: `text-[${COLORS[0]}] mr-3 transition-all duration-500 ease-in-out`,
                    size: 24
                })}
                <div
                    className={`
                        overflow-hidden 
                        transition-all 
                        duration-500 
                        ease-in-out 
                        ${isExpanded ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}
                        flex items-center
                    `}
                >
                    <span className="text-gray-800 text-sm whitespace-nowrap flex items-center">
                        {label}
                        {isDropdown && (
                            <ChevronDown
                                className={`
                                    ml-2 
                                    transition-transform 
                                    duration-300 
                                    ease-in-out
                                    ${clarityDropdownOpen ? 'rotate-180' : ''}
                                `}
                                style={{ color: COLORS[0] }}
                                size={20}
                            />
                        )}
                    </span>
                </div>
            </div>

            {isDropdown && isExpanded && clarityDropdownOpen && (
                <div
                    className="absolute left-full top-0 ml-2 bg-white shadow-2xl rounded-lg p-2 z-50 transition-all duration-500 ease-in-out"
                    style={{
                        borderLeft: `4px solid ${COLORS[0]}`,
                        boxShadow: `0 10px 15px -3px ${COLORS[0]}30`
                    }}
                >
                    <div className="flex flex-col space-y-2">
                        {[
                            { icon: <Car />, label: "Automobile", href: "/automobile" },
                            { icon: <Stethoscope />, label: "Healthcare", href: "/healthcare" },
                            { icon: <Laptop />, label: "Technology", href: "/technology" },
                            { icon: <Box />, label: "Coal", href: "/Coal" }
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`
                                    flex items-center 
                                    p-2 
                                    hover:bg-[${COLORS[0]}]/10 
                                    rounded-lg 
                                    group/subitem
                                    transition-all 
                                    duration-300
                                    ease-in-out
                                `}
                            >
                                {React.cloneElement(item.icon, {
                                    className: `mr-2 text-[${COLORS[0]}] transition-transform duration-500 ease-in-out group-hover/subitem:rotate-6`,
                                    size: 20
                                })}
                                <span className="transition-all duration-500 ease-in-out group-hover/subitem:translate-x-1">
                                    {item.label}
                                </span>
                                <ChevronRight
                                    className={`
                                        ml-auto 
                                        opacity-0 
                                        group-hover/subitem:opacity-100 
                                        transition-all 
                                        duration-300
                                        ease-in-out
                                    `}
                                    style={{ color: COLORS[0] }}
                                    size={16}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            <div
                className={`
                    fixed 
                    left-0 
                    top-0 
                    h-full 
                    bg-white 
                    shadow-xl 
                    transition-all 
                    duration-300 
                    ease-in-out
                    z-50 
                    group
                    w-16 
                    hover:w-64
                `}
                onMouseEnter={() => {
                    setIsExpanded(true);
                }}
                onMouseLeave={() => {
                    setIsExpanded(false);
                    setClarityDropdownOpen(false);
                }}
            >
                <div
                    className="p-4 flex items-center justify-center h-16 border-b transition-all duration-500 ease-in-out"
                    style={{ borderBottomColor: COLORS[0] }}
                >
                    <h1
                        className="text-2xl font-bold tracking-wider transition-all duration-500 ease-in-out"
                        style={{
                            color: COLORS[0],
                            transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                            opacity: isExpanded ? 1 : 0.7
                        }}
                    >
                        {isExpanded ? "Clarity" : "C"}
                    </h1>
                </div>

                <div
                    className="flex flex-col space-y-2 p-2"
                    onMouseEnter={() => setIsExpanded(true)}
                >
                    <SidebarItem
                        icon={<LayoutDashboard />}
                        label="Dashboard"
                        onClick={() => navigate('/dashboard')}
                    />

                    <SidebarItem
                        icon={<Laptop />}
                        label="Clarity"
                        isDropdown={true}
                        onClick={() => setClarityDropdownOpen(!clarityDropdownOpen)}
                    />

                    <SidebarItem
                        icon={<Database />}
                        label="Data Library"
                        onClick={() => navigate('/data-library')}
                    />

                    <SidebarItem
                        icon={<FileText />}
                        label="Report Builder"
                        onClick={() => navigate('/report-builder')}
                    />

                    <SidebarItem
                        icon={<Bot />}
                        label="AI Analyst"
                        onClick={() => navigate('/ai-analyst')}
                    />

                    <SidebarItem
                        icon={<UserRound />}
                        label="Virtual Analyst Assistant"
                        onClick={() => navigate('/virtual-analyst')}
                    />

                    <div className="absolute bottom-0 w-full p-2">
                        <SidebarItem
                            icon={<LogOut />}
                            label="Logout"
                            onClick={handleLogout}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`
                    ml-16 
                    transition-all 
                    duration-500 
                    ease-in-out
                    ${isExpanded ? 'md:ml-64' : 'md:ml-16'}
                `}
            >
                <div>
                    <Agents />
                    <Footer />
                </div>
            </div>
        </>
    );
};