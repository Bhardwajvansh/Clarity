import { useState } from "react";
import {
    User,
    Car,
    DollarSign,
    Globe,
    TrendingUp,
    AlertTriangle,
    ChevronRight,
    BarChart2,
    Battery,
    Cpu,
    MapPin,
    ShieldAlert,
    Zap,
    Users,
    Star,
    Award,
    Target,
    Flag,
    AlertCircle,
} from "lucide-react";
import { useEffect } from "react";
import { Home, Bell, Settings, Search, MoreHorizontal, ChevronDown, Hexagon, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { X, Info, ArrowRight, ArrowUpRight, ArrowDownRight, Download, LightbulbIcon } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';


const Landingdash = () => {
    return (
        <div className="grid grid-cols-12 gap-4 p-4">
            {/* User Profile Section */}
            <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <User size={18} />
                        <h2 className="font-semibold">User Profile</h2>
                    </div>
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                        JP
                    </div>
                    <h3 className="font-semibold">John Peterson</h3>
                    <p className="text-xs text-gray-500">VP of Strategy</p>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Your Focus Areas</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm">EV Strategy</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm">Connected Mobility</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm">Competitor Analysis</span>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">Weekly Goals</h3>
                        <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                </div>

                <button className="flex items-center justify-center w-full text-gray-600 border border-gray-300 rounded-md py-1.5 text-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        Edit Profile
                    </div>
                </button>
            </div>

            {/* Top Areas to Focus This Week */}
            <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <TrendingUp size={18} className="text-blue-600" />
                            <h2 className="font-semibold">Top Areas to Focus This Week</h2>
                        </div>
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
                    </div>
                </div>

                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">EV Platform Adoption</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">+8%</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                        Transition to electric vehicle platforms showing strong momentum. Need to accelerate charging infrastructure partnerships.
                    </p>
                    <p className="text-xs text-gray-500 mb-2">Impact: $880M/year</p>
                    <button className="text-blue-600 text-xs hover:text-blue-800 transition-colors">
                        Analyze →
                    </button>
                </div>

                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Connected Services Conversion</h3>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">-6%</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                        Connected car service adoption rate declining. User experience issues identified in mobile app interface.
                    </p>
                    <p className="text-xs text-gray-500 mb-2">Impact: $45M/quarter</p>
                    <button className="text-blue-600 text-xs hover:text-blue-800 transition-colors">
                        Analyze →
                    </button>
                </div>

                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Dealership Experience Optimization</h3>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">-2%</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                        Customer satisfaction scores below target. Dealership digital integration showing mixed results across regions.
                    </p>
                    <p className="text-xs text-gray-500 mb-2">Impact: $95M/year</p>
                    <button className="text-blue-600 text-xs hover:text-blue-800 transition-colors">
                        Analyze →
                    </button>
                </div>
            </div>

            {/* Top Revenue Opportunities */}
            <div className="col-span-12 md:col-span-5 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <DollarSign size={18} className="text-blue-600" />
                            <h2 className="font-semibold">Top Revenue Opportunities</h2>
                        </div>
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
                    </div>
                </div>

                <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold mb-2">Next-Gen ADAS Solutions Cross-Sell</h3>
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-1 rounded mr-1">LX</span>
                            <span className="text-xs text-gray-600">Luxury Segment Customers</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">$1.2M</span>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">Probability</span>
                        <span className="text-xs">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Expected close: Q1 2023</p>
                </div>

                <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold mb-2">Autonomous Driving Technology</h3>
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                            <span className="text-xs font-medium bg-purple-100 text-purple-800 px-1 rounded mr-1">FM</span>
                            <span className="text-xs text-gray-600">Fleet Management Firms</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">$850K</span>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">Probability</span>
                        <span className="text-xs">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Expected close: Q4 2023</p>
                </div>

                <div className="p-4">
                    <h3 className="font-semibold mb-2">Subscription-Based Vehicle Services</h3>
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                            <span className="text-xs font-medium bg-cyan-100 text-cyan-800 px-1 rounded mr-1">CM</span>
                            <span className="text-xs text-gray-600">Consumer Market</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">$680K</span>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">Probability</span>
                        <span className="text-xs">52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: "52%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Expected close: Q4 2023</p>
                </div>
            </div>

            {/* Global Automotive Performance */}
            <div className="col-span-12 md:col-span-6 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Globe size={18} className="text-blue-600" />
                            <h2 className="font-semibold text-sm">Global Automotive Performance</h2>
                        </div>
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">C-SUITE</span>
                    </div>
                </div>

                <div className="p-4">
                    {/* Column Headers */}
                    <div className="grid grid-cols-4 gap-4 mb-4 text-xs font-medium text-center">
                        <div></div>
                        <div>Vehicle Sales<br />Growth</div>
                        <div>EV Adoption<br />Rate</div>
                        <div>Market<br />Share</div>
                    </div>

                    {/* Data Rows */}
                    {[
                        { region: "North America", values: ["+4.2%", "+18.7%", "+0.5%"], colors: ["bg-green-100 text-green-800", "bg-green-100 text-green-800", "bg-yellow-100 text-yellow-800"] },
                        { region: "Europe", values: ["+0.8%", "+32.5%", "+1.2%"], colors: ["bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800", "bg-green-100 text-green-800"] },
                        { region: "Asia-Pacific", values: ["+9.3%", "+15.2%", "+1.1%"], colors: ["bg-green-100 text-green-800", "bg-green-100 text-green-800", "bg-green-100 text-green-800"] },
                        { region: "Latin America", values: ["+2.1%", "+4.7%", "-0.7%"], colors: ["bg-yellow-100 text-yellow-800", "bg-yellow-100 text-yellow-800", "bg-orange-100 text-orange-800"] },
                        { region: "ME & Africa", values: ["+1.8%", "+2.3%", "+0.2%"], colors: ["bg-yellow-100 text-yellow-800", "bg-yellow-100 text-yellow-800", "bg-yellow-100 text-yellow-800"] },
                    ].map((row, index) => (
                        <div key={index} className="grid grid-cols-4 gap-4 items-center mb-3 text-xs">
                            <div className="flex items-center space-x-1">
                                <MapPin size={14} className="text-blue-600" />
                                <span className="font-medium">{row.region}</span>
                            </div>
                            {row.values.map((val, i) => (
                                <div key={i} className="flex justify-center">
                                    <span className={`font-medium px-2 py-1 rounded w-16 text-center ${row.colors[i]}`}>{val}</span>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Legend */}
                    <div className="flex justify-center mt-6 text-xs">
                        <div className="grid grid-cols-5 gap-4 items-center">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-red-500 mr-1 rounded"></div>
                                <span>Low</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-orange-400 mr-1 rounded"></div>
                                <span>Below Avg</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-yellow-400 mr-1 rounded"></div>
                                <span>Average</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-300 mr-1 rounded"></div>
                                <span>Above Avg</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 mr-1 rounded"></div>
                                <span>High</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Automotive Operational Metrics */}
            <div className="col-span-12 md:col-span-6 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <BarChart2 size={18} className="text-blue-600" />
                            <h2 className="font-semibold">Automotive Operational Metrics</h2>
                        </div>
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">SUITE</span>
                    </div>
                </div>

                <div className="p-4 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-medium text-sm">Manufacturing Efficiency</h3>
                            <p className="text-xs text-gray-500">Production optimization</p>
                        </div>
                        <div className="flex items-center">
                            <div className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                                +8.4% ↑
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-medium text-sm">Supply Chain Resilience</h3>
                            <p className="text-xs text-gray-500">Component availability</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "76%" }}></div>
                            </div>
                            <span className="font-medium">76%</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-medium text-sm">R&D Allocation</h3>
                            <p className="text-xs text-gray-500">EV tech investment</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                            </div>
                            <span className="font-medium">42%</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-medium text-sm">Quality Control Metrics</h3>
                            <p className="text-xs text-gray-500">Defect reduction</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "64%" }}></div>
                            </div>
                            <span className="font-medium">64%</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-medium text-sm">Sustainability Index</h3>
                            <p className="text-xs text-gray-500">Carbon footprint reduction</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "53%" }}></div>
                            </div>
                            <span className="font-medium">53%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Automotive Industry Risk Assessment */}
            <div className="col-span-12 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <ShieldAlert size={18} className="text-blue-600" />
                            <h2 className="font-semibold">Automotive Industry Risk Assessment</h2>
                        </div>
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">SUITE</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="bg-red-50 rounded-lg p-3">
                        <div className="flex items-start mb-2">
                            <div className="w-1 h-1 rounded-full bg-red-500 mt-2 mr-1"></div>
                            <h3 className="font-medium text-sm">Regulatory Changes</h3>
                        </div>
                        <p className="text-xs text-gray-700 mb-2">
                            New emission standards in EU and California requiring 40% ZEV sales by 2027 may impact production planning.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="text-xs">Impact: High</div>
                            <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-1">
                                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                                <span className="text-xs">85%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-3">
                        <div className="flex items-start mb-2">
                            <div className="w-1 h-1 rounded-full bg-yellow-500 mt-2 mr-1"></div>
                            <h3 className="font-medium text-sm">Technology Disruption</h3>
                        </div>
                        <p className="text-xs text-gray-700 mb-2">
                            Acceleration of autonomous driving technology by competitors threatens traditional vehicle ownership models.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="text-xs">Impact: High</div>
                            <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-1">
                                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: "62%" }}></div>
                                </div>
                                <span className="text-xs">62%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-start mb-2">
                            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 mr-1"></div>
                            <h3 className="font-medium text-sm">Raw Material Constraints</h3>
                        </div>
                        <p className="text-xs text-gray-700 mb-2">
                            Limited lithium and cobalt supply for EV batteries could impact production scaling and pricing for next-gen vehicles.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="text-xs">Impact: Medium</div>
                            <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-1">
                                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "78%" }}></div>
                                </div>
                                <span className="text-xs">78%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const AutomotiveDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    const navigate = useNavigate();

    const StrategicDashboard = () => {
        const accountData = [
            { id: 'GM', name: 'GlobalMart', value: 7500000, potential: 4.2, revenue: 9800000, health: 'Healthy' },
            { id: 'TC', name: 'TechWorld', value: 6200000, potential: 4.5, revenue: 8200000, health: 'Healthy' },
            { id: 'DS', name: 'DataSystems', value: 4800000, potential: 4.1, revenue: 5800000, health: 'Medium' },
            { id: 'EC', name: 'ECommerce Inc', value: 2900000, potential: 2.8, revenue: 3700000, health: 'At Risk' },
            { id: 'FC', name: 'FoodCo', value: 1500000, potential: 2.7, revenue: 2600000, health: 'Healthy' },
            { id: 'LP', name: 'LogiPartners', value: 900000, potential: 1.9, revenue: 1500000, health: 'Medium' }
        ];

        const getBubblePosition = (account) => {
            const maxValue = 10000000;
            const xPos = (account.value / maxValue) * 100;
            const maxPotential = 5;
            const yPos = (account.potential / maxPotential) * 100;

            return {
                left: `${Math.min(Math.max(xPos, 15), 85)}%`,
                top: `${Math.min(Math.max(100 - yPos, 15), 85)}%`,
            };
        };

        const getQuadrantColor = (quadrant) => {
            switch (quadrant) {
                case 'top-left': return 'bg-green-50';
                case 'top-right': return 'bg-blue-50';
                case 'bottom-left': return 'bg-red-50';
                case 'bottom-right': return 'bg-yellow-50';
                default: return 'bg-white';
            }
        };
        const getBubbleSize = (revenue) => {
            const baseSize = 50;
            const maxRevenue = 10000000;
            const sizeMultiplier = (revenue / maxRevenue) * 1.5;
            return Math.max(baseSize * sizeMultiplier, 40);
        };
        const getBubbleBorderColor = (id) => {
            switch (id) {
                case 'GM': return 'border-green-500';
                case 'TC': return 'border-green-500';
                case 'DS': return 'border-orange-300';
                case 'EC': return 'border-blue-400';
                case 'FC': return 'border-blue-300';
                case 'LP': return 'border-orange-300';
                default: return 'border-gray-300';
            }
        };

        const shouldShowRank = (trend, maturity, growth) => {
            return (trend.marketMaturity === maturity && trend.growthPotential === growth);
        };

        const getCellColor = (value) => {
            switch (value) {
                case 'Very Low': return 'bg-blue-50';
                case 'Low': return 'bg-blue-100';
                case 'Medium': return 'bg-blue-200';
                case 'High': return 'bg-blue-300';
                case 'Very High': return 'bg-blue-500';
                default: return 'bg-blue-50';
            }
        };

        const trendData = [
            {
                id: 1,
                name: 'E-commerce 2.0',
                rank: 1,
                marketMaturity: 'Medium',
                growthPotential: 'Very High',
                percentage: 92,
                description: 'Advanced digital shopping experiences with personalization and seamless checkout is showing the highest potential in both market opportunity and current traction.',
                yearOverYearChange: 4.5
            },
            {
                id: 2,
                name: 'Personalization AI',
                rank: 2,
                marketMaturity: 'Medium',
                growthPotential: 'Very High',
                percentage: 88,
                description: 'Technologies that deliver 1:1 personalized shopping experiences are becoming necessary for competitive advantage in the retail sector.',
                yearOverYearChange: 7.2
            },
            {
                id: 3,
                name: 'Sustainable Retail',
                rank: 3,
                marketMaturity: 'Medium',
                growthPotential: 'High',
                percentage: 76
            },
            {
                id: 4,
                name: 'Omnichannel Integration',
                rank: 4,
                marketMaturity: 'High',
                growthPotential: 'Medium',
                percentage: 71
            },
            {
                id: 5,
                name: 'Social Commerce',
                rank: 5,
                marketMaturity: 'Medium',
                growthPotential: 'High',
                percentage: 68
            },
            {
                id: 6,
                name: 'AR/VR Shopping',
                rank: 6,
                marketMaturity: 'Low',
                growthPotential: 'Very High',
                percentage: 67,
                description: 'AR/VR Shopping has high market opportunity but lower current traction, suggesting an emerging growth area with significant future potential.',
                yearOverYearChange: null
            },
            {
                id: 7,
                name: 'Supply Chain Optimization',
                rank: 7,
                marketMaturity: 'High',
                growthPotential: 'Medium',
                percentage: 58
            },
            {
                id: 8,
                name: 'Voice Commerce',
                rank: 8,
                marketMaturity: 'Low',
                growthPotential: 'High',
                percentage: 57
            },
            {
                id: 9,
                name: 'Subscription Models',
                rank: 9,
                marketMaturity: 'Medium',
                growthPotential: 'Medium',
                percentage: 48
            },
            {
                id: 10,
                name: 'Smart Stores',
                rank: 10,
                marketMaturity: 'Low',
                growthPotential: 'Medium',
                percentage: 47,
                yearOverYearChange: -2
            }
        ];

        const competitorData = [
            { name: 'Your Company', x: 55, y: 65, color: '#2563eb' },
            { name: 'Innovate Corp', x: 85, y: 75, color: '#10b981' },
            { name: 'TechDisruptor', x: 65, y: 45, color: '#f59e0b' },
            { name: 'Global Solutions', x: 35, y: 35, color: '#ef4444' },
            { name: 'Premium Tech', x: 75, y: 25, color: '#8b5cf6' }
        ];

        const brandSentimentData = [
            { name: 'TechBrand', value: 85, color: '#22c55e' },
            { name: 'FoodCo', value: 65, color: '#3b82f6' },
            { name: 'RetailX', value: 80, color: '#9ca3af' },
            { name: 'ElectroGoods', value: -35, color: '#e5e7eb' },
            { name: 'AutoParts', value: -75, color: '#ef4444' }
        ];

        return (
            <div className="flex flex-col h-screen bg-gray-50 text-gray-800 font-sans">
                <div className="p-6 pb-0">
                    <div className="mt-1 mb-2">
                        <h2 className="text-lg font-medium text-gray-600 border-b-2 border-blue-500 inline-block pb-1">Comprehensive Market Intelligence</h2>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        After completing the onboarding process, users land on this strategic dashboard that provides a holistic view
                        of the market landscape with personalized insights across 5 key domains.
                    </p>
                </div>

                <div className="flex-1 overflow-auto p-6">
                    <div className={`transition-opacity duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
                        <div
                            onClick={() => navigate('/mtheatmap')}
                            className="bg-white cursor-pointer border-t-4 border-blue-500 rounded-lg shadow-sm mb-6 p-4 hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-base font-semibold">Sector Analysis: Retail</h3>
                                    <p className="text-xs text-gray-500">Top Mega Trends Heat Map</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <ChevronDown size={18} />
                                    </button>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex bg-gray-50 rounded-md">
                                <div className="w-full h-full opacity-80 p-2">
                                    <div className="flex-1 p-6 bg-white shadow-md border border-gray-200 rounded-md m-4">
                                        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                                            <div>
                                                <h1 className="text-xl font-bold text-gray-800">Sector Analysis</h1>
                                                <h2 className="text-lg font-medium text-gray-700">Retail Mega Trends Heatmap</h2>
                                            </div>
                                            <div className="flex space-x-2 items-center">
                                                <div className="bg-yellow-100 p-2 rounded-full border border-yellow-200">
                                                    <LightbulbIcon size={18} className="text-yellow-500" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4 mb-6 mt-4">
                                            <div className="flex items-center">
                                                <span className="text-sm text-gray-600 mr-2">Time Period:</span>
                                                <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                                                    <span>Last 12 Months</span>
                                                    <ChevronDown size={16} />
                                                </button>
                                            </div>

                                            <div className="flex items-center">
                                                <span className="text-sm text-gray-600 mr-2">Region:</span>
                                                <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                                                    <span>Global</span>
                                                    <ChevronDown size={16} />
                                                </button>
                                            </div>

                                            <div className="ml-auto">
                                                <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                                                    <Download size={16} />
                                                    <span>Export</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mb-4 border-b border-gray-200 pb-2">
                                            <h3 className="text-base font-medium">Top 10 Mega Trends in Retail</h3>
                                            <div className="flex items-center text-xs text-gray-500 mt-1 mb-3">
                                                <Info size={14} className="mr-1" />
                                                <span>Updated: July 2023</span>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 max-h-96 overflow-auto">
                                            {/* Heatmap Header */}
                                            <div className="grid grid-cols-7 mb-4">
                                                <div className="col-span-2"></div>
                                                <div className="col-span-5 grid grid-cols-5 text-xs text-gray-600 font-medium">
                                                    <div className="text-center">Very Low</div>
                                                    <div className="text-center">Low</div>
                                                    <div className="text-center">Medium</div>
                                                    <div className="text-center">High</div>
                                                    <div className="text-center">Very High</div>
                                                </div>
                                            </div>
                                            {/* Heatmap Rows */}
                                            <div className="mt-4">
                                                {trendData.map((trend) => (
                                                    <div
                                                        key={trend.id}
                                                        className={`grid grid-cols-7 mb-4 p-2 rounded-md transition-all duration-150 ${trend.id === 1 ? 'bg-blue-50 border border-blue-200' : ' border border-transparent'}`}
                                                        role="button"
                                                    >
                                                        <div className="col-span-2 flex items-center">
                                                            <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs mr-2 shadow-sm">
                                                                {trend.rank}
                                                            </div>
                                                            <div className="text-sm font-medium">{trend.name}</div>
                                                        </div>

                                                        {/* Heatmap Cells */}
                                                        <div className="col-span-5 grid grid-cols-5 gap-1">
                                                            <div className={`h-12 w-full rounded ${getCellColor('Very Low')} relative`}>
                                                                {shouldShowRank(trend, 'Very Low', 'Very Low') && (
                                                                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                                        {trend.rank}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={`h-12 w-full rounded ${getCellColor('Low')} relative`}>
                                                                {shouldShowRank(trend, 'Low', 'Low') && (
                                                                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                                        {trend.rank}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={`h-12 w-full rounded ${getCellColor('Medium')} relative`}>
                                                                {shouldShowRank(trend, 'Medium', 'Medium') && (
                                                                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                                        {trend.rank}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={`h-12 w-full rounded ${getCellColor('High')} relative`}>
                                                                {shouldShowRank(trend, 'High', 'High') && (
                                                                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                                        {trend.rank}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={`h-12 w-full rounded ${getCellColor('Very High')} relative`}>
                                                                {shouldShowRank(trend, 'Very High', 'Very High') && (
                                                                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                                        {trend.rank}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-span-2"></div>
                                                        <div className="col-span-5 mt-2">
                                                            <div className="bg-gray-200 h-3 rounded-full w-full">
                                                                <div
                                                                    className="bg-blue-500 h-3 rounded-full shadow-sm"
                                                                    style={{ width: `${trend.percentage}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-2"></div>
                                                        <div className="col-span-5 flex justify-end text-xs font-medium text-gray-600 mt-1">
                                                            {trend.percentage}%
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                                onClick={() => navigate('/kaccounts')}
                                className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="text-base font-semibold">Key Accounts</h3>
                                        <p className="text-xs text-gray-500">Account Value & Potential Matrix</p>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                                <div className="bg-gray-50 rounded-md">
                                    <div className="w-full h-full opacity-80 p-2">
                                        {/* This is where you'll insert your scatter plot preview */}
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mx-auto">
                                            <div className="mb-6">
                                                <h1 className="text-xl font-bold text-gray-800">Key Accounts</h1>
                                                <h2 className="text-lg font-medium text-gray-700 mt-1 border-b-2 border-green-500 inline-block pb-1">Account Value & Potential Matrix</h2>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-full pr-0">
                                                    <div className="relative h-96 border border-gray-200 rounded-lg mb-6">
                                                        <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-tl-lg border-r border-b border-gray-200 flex items-center justify-center">
                                                            <div className={`absolute inset-0 ${getQuadrantColor('top-left')}`}></div>
                                                            <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded border border-green-200">
                                                                High Value Nurture
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-tr-lg border-l border-b border-gray-200 flex items-center justify-center">
                                                            <div className={`absolute inset-0 ${getQuadrantColor('top-right')}`}></div>
                                                            <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded border border-blue-200">
                                                                Key Growth Drivers
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-bl-lg border-r border-t border-gray-200 flex items-center justify-center">
                                                            <div className={`absolute inset-0 ${getQuadrantColor('bottom-left')}`}></div>
                                                            <div className="absolute bottom-4 left-4 bg-red-50 text-red-800 text-xs font-medium px-2.5 py-1 rounded border border-red-200">
                                                                Monitor or Divest
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-br-lg border-l border-t border-gray-200 flex items-center justify-center">
                                                            <div className={`absolute inset-0 ${getQuadrantColor('bottom-right')}`}></div>
                                                            <div className="absolute bottom-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded border border-yellow-200 flex items-center">
                                                                <span className="mr-1">High Potential Focus</span>
                                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {accountData.map(account => (
                                                            <div
                                                                key={account.id}
                                                                className={`absolute rounded-full flex items-center justify-center border-2 ${getBubbleBorderColor(account.id)} bg-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
                                                                style={{
                                                                    ...getBubblePosition(account),
                                                                    width: `${getBubbleSize(account.revenue)}px`,
                                                                    height: `${getBubbleSize(account.revenue)}px`,
                                                                    transform: 'translate(-50%, -50%)',
                                                                }}
                                                            >
                                                                <span className="text-sm font-medium text-gray-700">{account.id}</span>
                                                            </div>
                                                        ))}
                                                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                                                            Account Potential ($)
                                                        </div>
                                                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                                                            Account Value ($)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => navigate('/canalysis')}
                                className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-orange-400 hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="text-base font-semibold">Competitor Analysis</h3>
                                        <p className="text-xs text-gray-500">Service & Client Alignment RADAR</p>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                                <div className=" bg-gray-50 rounded-md">
                                    <div className="w-full h-full opacity-80 p-2">
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mx-auto">
                                            <div>
                                                <h1 className="text-xl font-bold text-gray-800">Competitor Analysis</h1>
                                                <h2 className="text-lg font-medium text-gray-700 mt-1 border-b-2 border-orange-400 inline-block pb-1">Service & Client Alignment RADAR</h2>
                                            </div>
                                            {/* <div className="border border-gray-200 w-full rounded-lg p-4 bg-gray-50">
                                                <h3 className="text-base font-medium mb-2">Competitive Positioning RADAR</h3>
                                                <div className="h-80">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <ScatterChart
                                                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                                        >
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis
                                                                type="number"
                                                                dataKey="x"
                                                                name="Market Coverage"
                                                                domain={[0, 100]}
                                                                label={{ value: 'Market Coverage', position: 'bottom', offset: 0 }}
                                                                axisLine={{ stroke: '#E5E7EB' }}
                                                                tick={{ fill: '#6B7280', fontSize: 10 }}
                                                            />
                                                            <YAxis
                                                                type="number"
                                                                dataKey="y"
                                                                name="Client Engagement"
                                                                domain={[0, 100]}
                                                                label={{ value: 'High Client Engagement', position: 'left', angle: -90, offset: 10 }}
                                                                axisLine={{ stroke: '#E5E7EB' }}
                                                                tick={{ fill: '#6B7280', fontSize: 10 }}
                                                            />
                                                            <Tooltip
                                                                formatter={(value, name) => [value, name]}
                                                                labelFormatter={() => ''}
                                                                content={({ payload }) => {
                                                                    if (payload && payload.length) {
                                                                        const data = payload[0].payload;
                                                                        return (
                                                                            <div className="bg-white p-2 border border-gray-200 shadow-sm rounded">
                                                                                <p className="font-medium text-sm">{data.name}</p>
                                                                                <p className="text-xs text-gray-600">Market Coverage: {data.x}%</p>
                                                                                <p className="text-xs text-gray-600">Client Engagement: {data.y}%</p>
                                                                                <p className="text-xs text-gray-500 mt-1">{getQuadrantName(data.x, data.y)}</p>
                                                                            </div>
                                                                        );
                                                                    }
                                                                    return null;
                                                                }}
                                                            />
                                                            <Scatter data={competitorData}>
                                                                {competitorData.map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                                ))}
                                                            </Scatter>
                                                        </ScatterChart>
                                                    </ResponsiveContainer>
                                                </div>
                                                <div className="flex items-center text-xs text-gray-500 mt-4">
                                                    <Info size={14} className="mr-1" />
                                                    <span>Distance from center indicates stronger performance in each dimension</span>
                                                </div>
                                            </div> */}
                                            <br />
                                            <div className="border border-gray-200 w-full rounded-lg p-4 bg-gray-50">
                                                <h3 className="text-base font-medium mb-2">Service & Client Alignment Matrix</h3>
                                                <div className="h-80 relative">
                                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                                        <div className="border-r border-b border-gray-200 bg-blue-50 flex items-center justify-center">
                                                            <div className="text-center p-4">
                                                                <Star className="text-blue-500 mx-auto mb-2" size={20} />
                                                                <p className="text-sm font-medium">Market Leaders</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-b border-gray-200 bg-green-50 flex items-center justify-center">
                                                            <div className="text-center p-4">
                                                                <Award className="text-green-500 mx-auto mb-2" size={20} />
                                                                <p className="text-sm font-medium">Service Innovators</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-r border-gray-200 bg-yellow-50 flex items-center justify-center">
                                                            <div className="text-center p-4">
                                                                <Users className="text-yellow-500 mx-auto mb-2" size={20} />
                                                                <p className="text-sm font-medium">Client Centric</p>
                                                            </div>
                                                        </div>
                                                        <div className="bg-red-50 flex items-center justify-center">
                                                            <div className="text-center p-4">
                                                                <Target className="text-red-500 mx-auto mb-2" size={20} />
                                                                <p className="text-sm font-medium">Commodity Players</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {competitorData.map((comp, idx) => {
                                                        const posX = (comp.x / 100) * 100 + '%';
                                                        const posY = (1 - comp.y / 100) * 100 + '%';

                                                        return (
                                                            <div
                                                                key={idx}
                                                                className="absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                                                style={{
                                                                    left: posX,
                                                                    top: posY,
                                                                    backgroundColor: comp.color,
                                                                }}
                                                                title={comp.name}
                                                            />
                                                        );
                                                    })}

                                                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                                                        <span>← Low Service Alignment</span>
                                                        <span>High Service Alignment →</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center text-xs text-gray-500 mt-4">
                                                    <span>Client Engagement</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vendor Risk Analysis Card */}
                            <div
                                onClick={() => navigate('/vendorrisk')}
                                className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-gray-500 hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="text-base font-semibold">Vendor Risk Analysis</h3>
                                        <p className="text-xs text-gray-500">Risk Factors & Spend Contribution</p>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                                <div className="bg-gray-50 rounded-md">
                                    <div className="w-full h-full opacity-80 p-2">
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mx-auto">
                                            <div>
                                                <h1 className="text-xl font-bold text-gray-800">Vendor Risk Analysis</h1>
                                                <h2 className="text-lg font-medium text-gray-700 mt-1 border-b-2 border-gray-500 inline-block pb-1">Supply Chain Risk & Spend Contribution</h2>
                                            </div>
                                            <br />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                                                    <h3 className="text-xs text-gray-500 mb-2">Risk Score</h3>
                                                    <div className="flex items-center mb-1">
                                                        <AlertTriangle size={18} className="text-yellow-600 mr-2" />
                                                        <span className="text-3xl font-bold text-gray-800">64</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500">Medium Risk</p>
                                                </div>
                                                <div className="border border-gray-200 rounded-lg p-4 bg-white relative">
                                                    <div className="absolute top-4 right-4">
                                                        <div className="p-2 bg-red-100 rounded-full">
                                                            <Flag size={16} className="text-red-500" />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xs text-gray-500 mb-2">Critical Suppliers</h3>
                                                    <div className="flex items-center mb-1">
                                                        <span className="text-3xl font-bold text-gray-800">7</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-xs text-gray-500">Total Suppliers</p>
                                                        <p className="text-xs text-gray-500">25</p>
                                                    </div>
                                                    <p className="text-xs text-red-500">28% of all suppliers</p>
                                                </div>
                                                <div className="border border-gray-200 rounded-lg p-4 bg-white relative">
                                                    <div className="absolute top-4 right-4">
                                                        <div className="p-2 bg-red-100 rounded-full">
                                                            <AlertCircle size={16} className="text-red-500" />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xs text-gray-500 mb-2">High Risk Vendors</h3>
                                                    <div className="flex items-center mb-1">
                                                        <span className="text-3xl font-bold text-gray-800">5</span>
                                                    </div>
                                                    <p className="text-xs text-red-500">20% of all vendors</p>
                                                </div>
                                                <div className="border border-gray-200 rounded-lg p-4 bg-white relative">
                                                    <div className="absolute top-4 right-4">
                                                        <div className="p-2 bg-blue-100 rounded-full">
                                                            <AlertCircle size={16} className="text-blue-500" />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xs text-gray-500 mb-2">Risk Incidents</h3>
                                                    <div className="flex items-center mb-1">
                                                        <span className="text-3xl font-bold text-gray-800">14</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-xs text-gray-500">Previous Period</p>
                                                        <p className="text-xs text-gray-500">19</p>
                                                    </div>
                                                    <p className="text-xs text-green-500">↓ 26% decrease</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Brand IQ Card */}
                            <div
                                onClick={() => navigate('/brandiq')}
                                className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-red-500 hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="text-base font-semibold">Brand IQ</h3>
                                        <p className="text-xs text-gray-500">News Sentiment Analysis</p>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                                <div className="bg-gray-50 rounded-md">
                                    <div className="w-full h-full opacity-80 p-2">
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mx-auto">
                                            <div>
                                                <h1 className="text-xl font-bold text-gray-800">Brand IQ</h1>
                                                <h2 className="text-lg font-medium text-gray-700 mt-1 border-b-2 border-gray-500 inline-block pb-1">News Sentiment Analysis</h2>
                                            </div>
                                            <br />
                                            <div className="flex justify-between items-end h-64 mb-2">
                                                {brandSentimentData.map((brand, idx) => (
                                                    <div key={idx} className="flex flex-col items-center w-1/5">
                                                        <div className="h-48 flex items-end justify-center w-full">
                                                            <div
                                                                className="w-16 rounded-t-md"
                                                                style={{
                                                                    height: `${Math.abs(brand.value) * 0.45}%`,
                                                                    backgroundColor: brand.color
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="mt-2 text-sm text-center">{brand.name}</div>
                                                        <div className={`mt-1 font-medium ${brand.value > 0 ? 'text-green-500' : brand.value < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                                                            {brand.value > 0 ? '+' : ''}{brand.value}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-center items-center text-xs text-gray-600 space-x-4 mt-4">
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                                                    <span>Very Negative</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 rounded-full bg-gray-400 mr-1"></div>
                                                    <span>Neutral</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                                                    <span>Very Positive</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between">
                    <div className="text-xs text-gray-500">7/12</div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-black"></div>
                        <span className="ml-2 text-sm font-medium">Intelligence Portal</span>
                    </div>
                </div> */}
            </div>
        );
    };

    return (
        <div className="w-full h-full bg-gray-50 text-gray-800 font-sans overflow-auto">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <h1 className="font-bold text-3xl text-gray-800">Strategic Dashboard</h1>
                    <span className="text-xs ml-10 text-gray-500">Last update: Today, 9:52 AM</span>
                </div>
                <div className="flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search dashboard..."
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm w-48"
                        />
                    </div>
                    <div className="flex ml-4 space-x-1">
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "overview" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("overview")}
                        >
                            <div className="flex items-center">
                                <BarChart2 size={14} className="mr-1" />
                                Overview
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "analytics" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("analytics")}
                        >
                            <div className="flex items-center">
                                <TrendingUp size={14} className="mr-1" />
                                Analytics
                            </div>
                        </button>
                        {/* <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "insights" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("insights")}
                        >
                            <div className="flex items-center">
                                <Zap size={14} className="mr-1" />
                                Insights
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "alerts" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("alerts")}
                        >
                            <div className="flex items-center">
                                <AlertTriangle size={14} className="mr-1" />
                                Alerts
                            </div>
                        </button> */}
                    </div>
                </div>
            </header>

            <main>
                {activeTab === 'overview' && Landingdash()}
                {activeTab === 'analytics' && StrategicDashboard()}
            </main>
        </div>
    );
}