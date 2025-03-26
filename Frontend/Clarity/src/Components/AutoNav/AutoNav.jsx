import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Car,
    Stethoscope,
    Laptop,
    DollarSign,
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
const STATIC_CONTENT = {
    dashboard: {
        title: "Dashboard Overview",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#8A4FFF]">Automotive Dashboard</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#6A5ACD] mb-2">Key Segments</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Electric Vehicles</li>
                            <li>Autonomous Driving Technologies</li>
                            <li>Connected Car Solutions</li>
                            <li>Hybrid Powertrains</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#BA55D3] mb-2">Emerging Trends</h3>
                        <p>The automotive industry is experiencing rapid transformation driven by electrification, autonomous technologies, and sustainable mobility solutions.</p>
                    </div>
                </div>
            </div>
        )
    },
    marketSize: {
        title: "Market Size Analysis",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#6A5ACD]">Global Automotive Market Size</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#9370DB] mb-2">Market Valuation</h3>
                        <div className="text-2xl font-bold text-[#8A4FFF]">$2.95 Trillion</div>
                        <p className="text-green-600">Expected CAGR: 7.5% (2023-2030)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#BA55D3] mb-2">Regional Breakdown</h3>
                        <ul className="space-y-2">
                            <li>Asia-Pacific: 45% Market Share</li>
                            <li>North America: 25% Market Share</li>
                            <li>Europe: 20% Market Share</li>
                            <li>Rest of World: 10% Market Share</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    revenueForecast: {
        title: "Revenue Forecast",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#DA70D6]">Automotive Revenue Projections</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#8A4FFF] mb-2">Segment Forecast</h3>
                        <ul className="space-y-2">
                            <li>Electric Vehicles: $957B by 2030</li>
                            <li>Autonomous Vehicles: $556B by 2030</li>
                            <li>Connected Car Tech: $225B by 2030</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#6A5ACD] mb-2">Revenue Growth Trajectory</h3>
                        <div className="text-lg">
                            <p>Steady YoY growth expected</p>
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-[#9370DB] h-2.5 rounded-full"
                                    style={{ width: '75%' }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Projected 7.5% Annual Growth</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    competitiveAnalysis: {
        title: "Competitive Analysis",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#BA55D3]">Competitive Landscape</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#9370DB] mb-2">Market Leaders</h3>
                        <ul className="space-y-2">
                            <li>Toyota: 12% Market Share</li>
                            <li>Volkswagen: 10.5% Market Share</li>
                            <li>Ford: 8.2% Market Share</li>
                            <li>Tesla: 6.7% Market Share</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-[#6A5ACD] mb-2">Market Dynamics</h3>
                        <p>Intense competition driven by technological innovation, electrification, and sustainability efforts.</p>
                    </div>
                </div>
            </div>
        )
    },
    categoryAlert: {
        title: "Category Alerts",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#DA70D6]">Industry Category Alerts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                        <h3 className="font-semibold text-red-600 mb-2">Supply Chain Disruption</h3>
                        <p>Semiconductor shortages continue to impact production capabilities.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-600 mb-2">Emerging Opportunity</h3>
                        <p>Growing market for electric and autonomous vehicle technologies.</p>
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
            await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
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
                            { icon: <DollarSign />, label: "Finance", href: "/finance" }
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
                    className="flex bg-gradient-to-r from-[#8A4FFF]/20 to-[#DA70D6]/20 p-4 space-x-4 shadow-sm"
                >
                    {Object.keys(STATIC_CONTENT).map((section) => (
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
                                ${activeSection === section
                                    ? `bg-gradient-to-r from-[${COLORS[0]}] to-[${COLORS[4]}] text-white shadow-lg`
                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'}
                            `}
                        >
                            {section === 'dashboard' ? 'Dashboard' :
                                section === 'marketSize' ? 'Market Size' :
                                    section === 'revenueForecast' ? 'Revenue Forecast' :
                                        section === 'competitiveAnalysis' ? 'Competitive Analysis' :
                                            'Category Alert'}
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
                        STATIC_CONTENT[activeSection].content
                    )}
                </div>

                <Footer />
            </div>
        </>
    );
};