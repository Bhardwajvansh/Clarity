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
import { Parameters } from "../Parameters/Parameters";
import { Market } from "../Market/Market";
import { Specs } from "../Specs/Specs";
import { Footer } from "../Footer/Footer";

const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
];

// Static content for industry analysis sections
const MARKET_SECTIONS = {
    marketOverview: {
        title: "Market Overview",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">1. Market Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">1.1 Definitions and Scope</h3>
                        <p>Comprehensive market definitions and research scope details.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">1.2 Market Introduction</h3>
                        <p>Introductory overview of market landscape and key characteristics.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">1.3 Market</h3>
                        <p>Introductory overview of market landscape and key characteristics.</p>
                    </div>
                </div>
            </div>
        )
    },
    executiveSummary: {
        title: "Executive Summary",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">2. Executive Summary</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "2.1 Key Trends by Product/Service Type",
                        "2.2 Key Trends by Technology/Connectivity/Form",
                        "2.3 Key Trends by Application/Functionality",
                        "2.4 Key Trends by End-Use Industry/Sector",
                        "2.5 Key Trends by Geography",
                        "2.6 Market Revenue and Size Snapshot"
                    ].map((section, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-2">{section}</h3>
                            <p>Detailed insights and key trends for the specified market segment.</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    comparativeAnalysis: {
        title: "Comparative Analysis",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">3. Comparative Analysis</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "3.1 Market Share Analysis - Major Companies",
                        "3.2 Product/Service Benchmarking - Major Companies",
                        "3.3 Top 5 Financials Analysis",
                        "3.4 Patent Analysis - Major Companies",
                        "3.5 Pricing Analysis (Average Selling Prices - ASPs)"
                    ].map((section, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-2">{section}</h3>
                            <p>Comprehensive comparative insights and analysis.</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    startupScenario: {
        title: "Startup Companies Scenario",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">4. Startup Companies Scenario</h2>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">4.1 Major Startup Company Analysis</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium">4.1.1 Investment</h4>
                            <p>Detailed investment analysis for startup companies.</p>
                        </div>
                        <div>
                            <h4 className="font-medium">4.1.2 Revenue</h4>
                            <p>Revenue streams and financial performance insights.</p>
                        </div>
                        <div>
                            <h4 className="font-medium">4.1.3 Product/Service Portfolio</h4>
                            <p>Comprehensive overview of startup product offerings.</p>
                        </div>
                        <div>
                            <h4 className="font-medium">4.1.4 Venture Capital and Funding Scenario</h4>
                            <p>Analysis of funding landscape and investment trends.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    marketEntryScenario: {
        title: "Market Entry Scenario",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">5. Market Entry Scenario</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.1 Regulatory Framework Overview</h3>
                        <p>Comprehensive analysis of regulatory environment and compliance requirements.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.2 New Business and Ease of Doing Business Index</h3>
                        <p>Evaluation of market entry barriers and business environment.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.3 Successful Venture Profiles</h3>
                        <p>Case studies of successful market entry strategies.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.4 Customer Analysis - Major Companies</h3>
                        <p>In-depth customer segment analysis and preferences.</p>
                    </div>
                </div>
            </div>
        )
    },
    marketForces: {
        title: "Market Forces",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">6. Market Forces</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">6.1 Market Drivers</h3>
                        <p>Key factors driving market growth and expansion.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">6.2 Market Constraints and Challenges</h3>
                        <p>Identification of market limitations and potential obstacles.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">6.3 Opportunities</h3>
                        <p>Emerging market opportunities and potential growth areas.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">6.4 Porter's Five Force Model</h3>
                        <ul className="list-disc pl-5">
                            <li>6.4.1 Bargaining Power of Suppliers</li>
                            <li>6.4.2 Bargaining Power of Buyers</li>
                            <li>6.4.3 Threat of New Entrants</li>
                            <li>6.4.4 Competitive Rivalry</li>
                            <li>6.4.5 Threat of Substitutes</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    strategicAnalysis: {
        title: "Strategic Analysis",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">7. Strategic Analysis</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">7.1 Value/Supply Chain Analysis</h3>
                        <p>Comprehensive examination of the industry value chain.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">7.2 Opportunity Analysis</h3>
                        <p>Identification and evaluation of strategic market opportunities.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">7.3 Product/Market Life Cycle</h3>
                        <p>Analysis of product market positioning and evolution.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">7.4 Distributor Analysis - Major Companies</h3>
                        <p>Comprehensive review of distribution channels and strategies.</p>
                    </div>
                </div>
            </div>
        )
    }
};

export const AutoNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [clarityDropdownOpen, setClarityDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');
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
                <div
                    className="flex bg-[#8A4FFF]/20 p-4 space-x-4 shadow-sm overflow-x-auto whitespace-nowrap"
                >
                    <button
                        onClick={() => setActiveSection('dashboard')}
                        className={`
                           px-4 
                           py-2 
                           rounded-md 
                           transition-all 
                           duration-300 
                           text-sm 
                           font-medium
                           whitespace-nowrap
                           truncate
                           max-w-[200px]
                           ${activeSection === 'dashboard'
                                ? `bg-[#8A4FFF] text-white shadow-lg`
                                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'}
                       `}
                    >
                        Dashboard
                    </button>
                    {Object.keys(MARKET_SECTIONS).map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`
                               px-4 
                               py-2 
                               rounded-md 
                               transition-all 
                               duration-300 
                               text-sm 
                               font-medium
                               whitespace-nowrap
                               truncate
                               max-w-[200px]
                               ${activeSection === section
                                    ? `bg-[#8A4FFF] text-white shadow-lg`
                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'}
                           `}
                        >
                            {MARKET_SECTIONS[section].title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-6">
                    {activeSection === 'dashboard' ? (
                        <>
                            <Parameters />
                            <Market />
                            <Specs />
                        </>
                    ) : (
                        MARKET_SECTIONS[activeSection].content
                    )}
                </div>

                <Footer />
            </div>
        </>
    );
};