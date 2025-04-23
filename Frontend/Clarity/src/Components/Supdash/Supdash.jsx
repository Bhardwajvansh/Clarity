import React, { useState } from 'react';
import {
    Home,
    Bell,
    Settings,
    Search,
    ChevronDown,
    Filter,
    Info,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    CircleCheck,
    BarChart3,
    ArrowRight,
    UserCircle,
    Building2,
    LineChartIcon,
    Building,
    Globe,
    Calendar,
    MapPin,
    ExternalLink,
    GitMerge,
    Zap,
    Swords,
    BarChartIcon,
} from 'lucide-react';
import { Lightbulb, RefreshCw, Send, BrainCircuit, DollarSign, AlertCircle } from 'lucide-react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    ScatterChart,
    Scatter,
} from 'recharts';
export const Supdash = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const nodes = [
        { id: "roquette", name: "Roquette", type: "main", x: 300, y: 200 },
        { id: "qualicaps", name: "Qualicaps", type: "acquisition", x: 150, y: 100 },
        { id: "jrspharma", name: "JRS Pharma", type: "acquisition", x: 450, y: 100 },
        { id: "huihui", name: "Huihui", type: "competitor", x: 150, y: 300 },
        { id: "cartech", name: "CarTech", type: "competitor", x: 450, y: 300 },
        { id: "basf", name: "BASF", type: "supplier", x: 200, y: 350 },
        { id: "dowchem", name: "Dow Chemical", type: "supplier", x: 400, y: 350 }
    ];

    const marketShareData = [
        { name: 'Roquette', value: 17, color: '#3b82f6' },
        { name: 'FUJIFILM', value: 15, color: '#84cc16' },
        { name: 'CRODA', value: 7, color: '#f59e0b' },
        { name: 'Ashland', value: 6, color: '#a855f7' },
        { name: 'EVONIK', value: 4, color: '#ec4899' },
        { name: 'Others', value: 51, color: '#9ca3af' }
    ];

    const positioningData = [
        { name: 'Roquette', x: 60, y: 75, size: 17, color: '#3b82f6' },
        { name: 'FUJIFILM', x: 80, y: 85, size: 15, color: '#84cc16' },
        { name: 'CRODA', x: 70, y: 65, size: 7, color: '#f59e0b' },
        { name: 'Ashland', x: 55, y: 60, size: 6, color: '#a855f7' },
        { name: 'EVONIK', x: 45, y: 50, size: 4, color: '#ec4899' },
        { name: 'Generic Suppliers', x: 30, y: 25, size: 11, color: '#9ca3af' }
    ];

    const CompetitivePositioningMap = () => {
        const renderTooltip = (props) => {
            const { payload } = props;
            if (payload && payload.length > 0) {
                const data = payload[0].payload;
                return (
                    <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-sm text-gray-600">Market Share: {data.size}%</p>
                    </div>
                );
            }
            return null;
        };
    }

    const renderTooltip = (props) => {
        const { payload } = props;
        if (payload && payload.length > 0) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                    <p className="font-medium">{data.name}</p>
                    <p className="text-sm text-gray-600">Market Share: {data.size}%</p>
                </div>
            );
        }
        return null;
    };

    const productPortfolioData = [
        { name: 'H.C.D. 60 DEUR GL STAND GR.', value: 2 },
        { name: 'INF FINAL SIRB TYP I CPI', value: 2 },
        { name: 'H.C.D. STAND 60 OT', value: 2 },
        { name: 'H.C.D. STAND 80 OT', value: 2 },
        { name: 'MANNITOL (ROQUETTE)', value: 2 },
        { name: 'H.C.Q. 30 DEUR GL STAND GR.', value: 1 },
        { name: 'Other (20)', value: 5 }
    ];

    const spendEvolutionData = [
        { name: 'FY20', value: 8, percentage: '17%', baseline: true, colors: { top: '#ef4444', bottom: '#fca5a5' } },
        { name: 'FY21', value: 12, percentage: '25%', growth: '+50%', colors: { top: '#ef4444', bottom: '#fca5a5' } },
        { name: 'FY22', value: 9, percentage: '20%', growth: '-25%', colors: { top: '#ef4444', bottom: '#fca5a5' } },
        { name: 'FY23', value: 15, percentage: '35%', growth: '+67%', colors: { top: '#ef4444', bottom: '#fca5a5' } }
    ];

    const links = [
        { source: "roquette", target: "qualicaps", type: "acquisition", strength: "strong" },
        { source: "roquette", target: "jrspharma", type: "acquisition", strength: "strong" },
        { source: "roquette", target: "huihui", type: "competitor", strength: "weak" },
        { source: "roquette", target: "cartech", type: "competitor", strength: "medium" },
        { source: "qualicaps", target: "basf", type: "supplier", strength: "medium" },
        { source: "jrspharma", target: "dowchem", type: "supplier", strength: "medium" },
        { source: "huihui", target: "cartech", type: "partnership", strength: "weak" }
    ];

    const volumeData = [
        { year: "2021", roquette: 780, qualicaps: 52, total: 832 },
        { year: "2022", roquette: 538, qualicaps: 66, total: 604 },
        { year: "2023", roquette: 538, qualicaps: 66, total: 604 },
        { year: "2024", roquette: 418, qualicaps: 39, total: 457, forecast: true },
        { year: "2025 H1", roquette: 327, qualicaps: 15, total: 342, forecast: true }
    ];

    const priceData = [
        { year: "2021", volume: 832, price: 100 },
        { year: "2022", volume: 604, price: 115 },
        { year: "2023", volume: 604, price: 126 },
        { year: "2024", volume: 457, price: 150 }
    ];

    const getNodeColor = (type) => {
        switch (type) {
            case "main": return "#3b82f6"; // blue-500
            case "acquisition": return "#8b5cf6"; // purple-500
            case "competitor": return "#f59e0b"; // amber-500
            case "supplier": return "#10b981"; // emerald-500
            default: return "#6b7280"; // gray-500
        }
    };

    const getNodeSize = (type) => {
        switch (type) {
            case "main": return 60;
            case "acquisition": return 45;
            default: return 35;
        }
    };

    const getLinkColor = (type, strength) => {
        const opacity = strength === "strong" ? "1" : strength === "medium" ? "0.7" : "0.4";

        switch (type) {
            case "acquisition": return `rgba(139, 92, 246, ${opacity})`; // purple with opacity
            case "competitor": return `rgba(245, 158, 11, ${opacity})`; // amber with opacity
            case "partnership": return `rgba(16, 185, 129, ${opacity})`; // emerald with opacity
            case "supplier": return `rgba(107, 114, 128, ${opacity})`; // gray with opacity
            default: return `rgba(107, 114, 128, ${opacity})`;
        }
    };

    const getLinkWidth = (strength) => {
        switch (strength) {
            case "strong": return 3;
            case "medium": return 2;
            default: return 1;
        }
    };

    const [activeNode, setActiveNode] = React.useState(null);
    const [tooltipContent, setTooltipContent] = React.useState("");
    const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = React.useState(false);

    const handleMouseOver = (node, event) => {
        setActiveNode(node.id);
        setTooltipContent(getTooltipContent(node));
        setTooltipPosition({
            x: event.nativeEvent.offsetX,
            y: event.nativeEvent.offsetY
        });
        setShowTooltip(true);
    };

    const handleMouseOut = () => {
        setActiveNode(null);
        setShowTooltip(false);
    };

    const getTooltipContent = (node) => {
        switch (node.type) {
            case "main":
                return `${node.name}: Primary company with recent acquisitions`;
            case "acquisition":
                return `${node.name}: Recently acquired by Roquette (2023-2024)`;
            case "competitor":
                return `${node.name}: Alternative supplier for qualification`;
            case "supplier":
                return `${node.name}: Raw material provider`;
            default:
                return node.name;
        }
    };

    const getRelevantLinks = (nodeId) => {
        if (!activeNode) return [];
        return links.filter(link => link.source === nodeId || link.target === nodeId);
    };

    const isConnectedToActive = (nodeId) => {
        if (!activeNode) return false;
        return links.some(link =>
            (link.source === activeNode && link.target === nodeId) ||
            (link.target === activeNode && link.source === nodeId)
        );
    };

    const tabs = [
        { name: 'Dashboard', icon: <Home size={18} /> },
        { name: 'Financial Analysis', icon: <LineChartIcon size={18} /> },
        { name: 'AI Insights', icon: <BrainCircuit size={18} /> },
        { name: 'Forecasting', icon: <TrendingUp size={18} /> },
        { name: 'Strategic Moves', icon: <Swords size={18} /> },
        { name: 'Market Positions', icon: <BarChartIcon size={18} /> },
    ];

    const riskDistributionData = [
        { name: 'Low Risk', value: 35, color: '#4CAF50' },
        { name: 'Medium', value: 45, color: '#FFC107' },
        { name: 'High Risk', value: 20, color: '#F44336' },
    ];

    const riskFactors = [
        { name: 'Financial Stability', score: 60, description: '24 suppliers showing declining financial metrics in Q2 2023', color: '#FFB74D' },
        { name: 'Supply Chain Resilience', score: 45, description: 'High global dependency on single-source suppliers for critical materials', color: '#F44336' },
        { name: 'Regulatory Compliance', score: 82, description: 'Strong compliance history with minor issues in emerging markets', color: '#4CAF50' },
        { name: 'Environmental & Sustainability', score: 77, description: '90% of suppliers with published sustainability commitments', color: '#4CAF50' },
    ];

    const suppliers = [
        { id: 'RQ', name: 'Roquette', industry: 'Pharmaceuticals', country: 'France', score: 72, status: 'Monitoring', trend: '-3pts', color: '#FFB74D' },
        { id: 'QC', name: 'Qualicaps', industry: 'Pharmaceuticals', country: 'Japan', score: 85, status: 'Stable', trend: '+2pts', color: '#4CAF50' },
        { id: 'TS', name: 'Teivos Syrjä', industry: 'Pharmaceuticals', country: 'France', score: 45, status: 'At Risk', trend: '-5pts', color: '#F44336' },
    ];

    const salesData = [
        { year: '2019', lifescience: 2.1, healthcare: 4.1, electronics: 2.9, total: 9.1 },
        { year: '2020', lifescience: 2.7, healthcare: 4.7, electronics: 3.2, total: 10.6 },
        { year: '2021', lifescience: 3.1, healthcare: 5.1, electronics: 3.5, total: 11.7 },
        { year: '2022', lifescience: 3.4, healthcare: 5.8, electronics: 4.0, total: 13.2 },
        { year: '2023', lifescience: 3.2, healthcare: 5.2, electronics: 3.8, total: 12.2 },
    ];

    const creditData = [
        { year: '2019', dso: 25, cpi: 32 },
        { year: '2020', dso: 27, cpi: 32 },
        { year: '2021', dso: 28, cpi: 32 },
        { year: '2022', dso: 30, cpi: 28 },
        { year: '2023', dso: 35, cpi: 25 },
    ];

    const creditStrengths = [
        'Diversification',
        'Solid growth prospects of hi-3 business sectors',
        'Portfolio of new drugs skewed towards high-margin products',
        'Track record of conservative financial policies and solid cash flow generation'
    ];

    const creditChallenges = [
        'Exposure to technological shifts and economic cycles',
        'Increasing competition in target selling drugs and a complicated late-stage pipeline',
        'Event risk related to future strategic investments'
    ];

    const renderDashboard = () => (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Supplier Risk Dashboard</h1>

            <div className="flex justify-between items-center mb-8">
                <div className="relative w-72">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search suppliers..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow transition">
                        <span>All Industries</span>
                        <ChevronDown size={16} />
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow transition">
                        <span>All Regions</span>
                        <ChevronDown size={16} />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center space-x-2">
                        <Filter size={16} />
                        <span>Advanced Filters</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {[{
                    title: 'Suppliers', value: '142', subtitle: 'Active tracking', badge: '+6', info: '+4 this month', color: 'blue'
                }, {
                    title: 'Average Risk Score', value: '67.2', subtitle: 'Moderate risk', badge: <TrendingUp size={16} />, info: 'Trending up', color: 'yellow'
                }, {
                    title: 'High Risk Suppliers', value: '17', subtitle: 'Requiring attention', badge: '+3', info: '12% of total', color: 'red'
                }, {
                    title: 'Data Confidence', value: '94%', subtitle: 'Based on 50+ sources', badge: 'High', info: 'Updated hourly', color: 'green'
                }].map((card, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-gray-500">{card.title}</p>
                                <h2 className="text-4xl font-bold">{card.value}</h2>
                                <p className="text-xs text-gray-500">{card.subtitle}</p>
                            </div>
                            <span className={`bg-${card.color}-100 text-${card.color}-600 text-xs px-2 py-1 rounded-full`}>{card.badge}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{card.info}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Risk Distribution</h3>
                        <Info size={16} className="text-gray-400" />
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={riskDistributionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        dataKey="value"
                                    >
                                        {riskDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            {riskDistributionData.map((risk, idx) => (
                                <div className="flex items-center mb-2" key={idx}>
                                    <span className={`inline-block w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: risk.color }}></span>
                                    <span className="text-sm">{risk.name}</span>
                                    <span className="ml-auto text-sm">{risk.percentage}%</span>
                                </div>
                            ))}
                            <div className="text-center mt-4">
                                <div className="font-bold text-xl">142</div>
                                <div className="text-xs text-gray-400">Total Suppliers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Risk Factors Analysis</h3>
                        <button className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">AI Insights</button>
                    </div>
                    <div className="space-y-6">
                        {riskFactors.map((factor, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{factor.name}</span>
                                    <span className="text-gray-500">{factor.score}/100</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full"
                                        style={{ width: `${factor.score}%`, backgroundColor: factor.color }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{factor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Top Suppliers by Risk Score</h3>
                    <a href="#" className="text-blue-600 text-sm flex items-center space-x-1">
                        <span>View all</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
                <table className="w-full text-sm text-gray-700">
                    <thead>
                        <tr className="text-xs text-gray-500 border-b border-gray-200">
                            <th className="pb-2">SUPPLIER</th>
                            <th className="pb-2">INDUSTRY</th>
                            <th className="pb-2">COUNTRY</th>
                            <th className="pb-2">RISK SCORE</th>
                            <th className="pb-2">STATUS</th>
                            <th className="pb-2">TREND</th>
                            <th className="pb-2">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map((supplier) => (
                            <tr key={supplier.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-4 flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                                        {supplier.id}
                                    </div>
                                    <div>
                                        <div className="font-medium">{supplier.name}</div>
                                        <div className="text-xs text-gray-400">Top 10 pharma excipients provider</div>
                                    </div>
                                </td>
                                <td>{supplier.industry}</td>
                                <td>{supplier.country}</td>
                                <td>{supplier.score}/100</td>
                                <td>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${supplier.status === 'Stable' ? 'bg-green-100 text-green-700' : supplier.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                        {supplier.status}
                                    </span>
                                </td>
                                <td className={supplier.trend.includes('-') ? 'text-red-500' : 'text-green-500'}>
                                    {supplier.trend.includes('-') ? <TrendingDown size={16} className="inline mr-1" /> : <TrendingUp size={16} className="inline mr-1" />}
                                    {supplier.trend}
                                </td>
                                <td>
                                    <button className="text-blue-600 text-sm hover:underline">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl shadow-inner border border-blue-200">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                        <Info size={16} />
                    </div>
                    <span className="font-bold text-blue-800">AI Insights</span>
                </div>
                <p className="text-sm text-blue-900">
                    Risk alert: 3 pharmaceutical suppliers in Europe are showing signs of financial stress due to increased production costs. Consider dual-sourcing strategies for critical ingredients.
                </p>
                <button className="text-blue-600 text-sm mt-3 underline">Get detailed report</button>
            </div>
        </div>
    );


    const renderFinancialAnalysis = () => (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Supplier Financial Analysis</h1>

            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        RQ
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Roquette</h2>
                        <p className="text-sm text-gray-500">Financial Performance Analysis</p>
                    </div>
                    <span className="ml-4 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">Monitoring</span>
                </div>

                <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow transition">
                        <span>Last 5 Years</span>
                        <ChevronDown size={16} />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center space-x-2">
                        <span>Export Data</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Net Sales</h3>
                        <span className="text-red-500 flex items-center">
                            <TrendingDown size={16} className="inline mr-1" />
                            -6%
                        </span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="electronics" stackId="a" fill="#9E9E9E" />
                            <Bar dataKey="healthcare" stackId="a" fill="#F44336" />
                            <Bar dataKey="lifescience" stackId="a" fill="#E57373" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-gray-400 mt-2">Bn/€ by business segment</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">EBITDA pre</h3>
                        <span className="text-red-500 flex items-center">
                            <TrendingDown size={16} className="inline mr-1" />
                            -14%
                        </span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="electronics" stackId="a" fill="#9E9E9E" name="Electronics" />
                            <Bar dataKey="healthcare" stackId="a" fill="#F44336" name="Healthcare" />
                            <Bar dataKey="lifescience" stackId="a" fill="#E57373" name="Life Science" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-gray-400 mt-2">(%/€) by business segment</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Credit Performance</h3>
                        <button className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">AI Analysis</button>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={creditData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis yAxisId="left" orientation="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Line yAxisId="left" type="monotone" dataKey="dso" stroke="#000000" activeDot={{ r: 8 }} name="DSO/EBITDA" />
                            <Line yAxisId="right" type="monotone" dataKey="cpi" stroke="#FF0000" name="CPI/OWC (RHS)" />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                        <p className="text-xs text-yellow-700">Best sources for data?</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Credit Assessment</h3>
                        <Info size={16} className="text-gray-400" />
                    </div>
                    <div className="mb-4">
                        <h4 className="font-medium text-green-600 mb-2">Credit Strengths</h4>
                        <ul className="space-y-2">
                            {creditStrengths.map((strength, index) => (
                                <li key={index} className="flex items-start">
                                    <CircleCheck size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-red-600 mb-2">Credit Challenges</h4>
                        <ul className="space-y-2">
                            {creditChallenges.map((challenge, index) => (
                                <li key={index} className="flex items-start">
                                    <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl shadow-inner border border-blue-200 mb-10">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                        <BarChart3 size={16} />
                    </div>
                    <span className="font-bold text-blue-800">AI-Generated Financial Insights</span>
                </div>
                <p className="text-sm text-blue-900 mb-4">
                    Roquette's financial performance shows a concerning trend with net sales declining by 6% in 2023 after several years of growth.
                    EBITDA has decreased by 14%, reducing the company's margin from 37% to 28%. This compression suggests cost management
                    challenges in the current economic environment.
                </p>
                <p className="text-sm text-blue-900 mb-4">
                    The credit performance indicates improving CPI/OWC ratio, but this may be driven more by debt reduction than operational improvements.
                    Key risk factors to monitor include ongoing capital expenditures related to the Qualicaps acquisition and potential supply chain disruptions.
                </p>
                <button className="text-blue-600 text-sm underline">Ask AI for further analysis</button>
            </div>
        </div>
    );

    const SupplierIntelligenceDashboard = () => {
        return (
            <div className="bg-gray-50 p-6">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">AI-Powered Supplier Intelligence</h1>
                        <p className="text-sm text-gray-500">Advanced AI analysis and actionable insights for strategic decision-making</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="relative w-48">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>Roquette</option>
                                <option>Other Suppliers</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-3 text-gray-400" size={16} />
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <RefreshCw size={16} />
                            <span>Refresh Analysis</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - Key Insights */}
                    <div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-center mb-4">
                                <Lightbulb className="text-blue-500 mr-2" size={20} />
                                <h2 className="font-bold text-gray-800">Key Insights for Roquette</h2>
                            </div>

                            {/* Price Risk Alert */}
                            <div className="border-l-4 border-orange-400 bg-white p-4 rounded-r-lg shadow-sm mb-4">
                                <div className="flex justify-between mb-1">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700">Price Risk Alert</span>
                                        <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">High Priority</span>
                                    </div>
                                    <div className="bg-blue-100 text-blue-600 rounded-full px-2 py-0.5 text-xs flex items-center">
                                        <span>93% Confidence</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Pricing analysis indicates 13-20% probable increase through 2025. Recommend initiating contract negotiations in next 60 days to lock in rates before Qualicaps integration completes.
                                </p>
                            </div>

                            {/* Supply Chain Vulnerability */}
                            <div className="border-l-4 border-red-400 bg-white p-4 rounded-r-lg shadow-sm mb-4">
                                <div className="flex justify-between mb-1">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700">Supply Chain Vulnerability</span>
                                        <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">Critical</span>
                                    </div>
                                    <div className="bg-blue-100 text-blue-600 rounded-full px-2 py-0.5 text-xs flex items-center">
                                        <span>97% Confidence</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Dual-sourcing strategy for excipients is progressing well but 3 key products remain single-sourced with Roquette. Qualicaps acquisition further concentrates market power. Expedite qualification of alternatives.
                                </p>
                            </div>

                            {/* Strategic Opportunity */}
                            <div className="border-l-4 border-green-400 bg-white p-4 rounded-r-lg shadow-sm mb-4">
                                <div className="flex justify-between mb-1">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700">Strategic Opportunity</span>
                                        <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Actionable</span>
                                    </div>
                                    <div className="bg-blue-100 text-blue-600 rounded-full px-2 py-0.5 text-xs flex items-center">
                                        <span>91% Confidence</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Roquette's €25M investment in Lestrem plant creates negotiation leverage. Volume guarantees of 12-18% could secure 7-10% price concessions during the equipment transition period (Q3 2024-Q1 2025).
                                </p>
                            </div>

                            {/* Innovation Pipeline Alert */}
                            <div className="border-l-4 border-blue-400 bg-white p-4 rounded-r-lg shadow-sm">
                                <div className="flex justify-between mb-1">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700">Innovation Pipeline Alert</span>
                                        <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Monitor</span>
                                    </div>
                                    <div className="bg-blue-100 text-blue-600 rounded-full px-2 py-0.5 text-xs flex items-center">
                                        <span>78% Confidence</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Patent analysis shows Roquette's increased R&D activity in moisture-resistant excipients, aligning with your pipeline needs for 2025. Consider joint development agreement to secure preferential access.
                                </p>
                            </div>
                        </div>

                        {/* Strategic Recommendations */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <BarChart3 className="text-purple-500 mr-2" size={20} />
                                    <h2 className="font-bold text-gray-800">Strategic Recommendations</h2>
                                </div>
                                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Based on 55+ data points</span>
                            </div>

                            {/* Recommendation 1 */}
                            <div className="mb-5">
                                <div className="flex items-start mb-2">
                                    <div className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">
                                        <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Establish Long-Term Partnership Agreement</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Negotiate multi-year contract with guaranteed minimum volumes (450-500 tons annually) to secure pricing stability. Target completion by Q3 2024 to leverage Lestrem plant expansion.
                                        </p>
                                        <div className="flex items-center mt-2">
                                            <span className="text-xs text-gray-500 mr-2">Implementation Complexity:</span>
                                            <div className="bg-blue-100 text-blue-600 px-2 py-0.5 text-xs rounded-full">Medium</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recommendation 2 */}
                                <div className="mb-5">
                                    <div className="flex items-start mb-2">
                                        <div className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">
                                            <span className="text-sm font-medium">2</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Accelerate Secondary Supplier Qualification</h3>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Prioritize qualification of Huihui and CarTech for the 3 critical single-sourced excipients. Target completion before Q1 2025 when Roquette integrates further consolidates.
                                            </p>
                                            <div className="flex items-center mt-2">
                                                <span className="text-xs text-gray-500 mr-2">Implementation Complexity:</span>
                                                <div className="bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded-full">High</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recommendation 3 */}
                                <div>
                                    <div className="flex items-start mb-2">
                                        <div className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">
                                            <span className="text-sm font-medium">3</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Explore Joint Innovation Initiative</h3>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Leverage Roquette's new Pharmaceutical Innovation Center for co-development of next-gen moisture-resistant excipients needed for your 2025 pipeline products. Initial discussions in Q4 2024.
                                            </p>
                                            <div className="flex items-center mt-2">
                                                <span className="text-xs text-gray-500 mr-2">Implementation Complexity:</span>
                                                <div className="bg-blue-100 text-blue-600 px-2 py-0.5 text-xs rounded-full">Medium</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Network Visualization & AI Assistant */}
                    <div>
                        {/* Supplier Intelligence Network */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <svg className="text-green-500 mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a8 8 0 0 1 8 8"></path>
                                        <path d="M12 12a2 2 0 1 0-2-2"></path>
                                    </svg>
                                    <h2 className="font-bold text-gray-800">Supplier Intelligence Network</h2>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg className="mr-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16v-4"></path>
                                            <path d="M12 8h.01"></path>
                                        </svg>
                                        <span>Interactive graph</span>
                                    </div>
                                    <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                                        <svg className="mr-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14 21 3"></path>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        </svg>
                                        <span>Expand</span>
                                    </div>
                                </div>
                            </div>

                            {/* Network Legend */}
                            <div className="flex space-x-4 mb-3 text-xs">
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 rounded-full mr-1 bg-blue-500"></span>
                                    <span>Main</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 rounded-full mr-1 bg-purple-500"></span>
                                    <span>Acquisition</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 rounded-full mr-1 bg-amber-500"></span>
                                    <span>Competitor</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 rounded-full mr-1 bg-emerald-500"></span>
                                    <span>Supplier</span>
                                </div>
                            </div>

                            {/* Network Visualization */}
                            <div className="h-96 w-full bg-gray-50 relative rounded-lg border border-gray-100 overflow-hidden">
                                <svg width="100%" height="100%" viewBox="0 0 600 400">
                                    {/* Links */}
                                    {links.map((link, idx) => {
                                        const source = nodes.find(n => n.id === link.source);
                                        const target = nodes.find(n => n.id === link.target);
                                        const isHighlighted = activeNode && (link.source === activeNode || link.target === activeNode);

                                        return (
                                            <g key={`link-${idx}`}>
                                                <line
                                                    x1={source.x}
                                                    y1={source.y}
                                                    x2={target.x}
                                                    y2={target.y}
                                                    stroke={getLinkColor(link.type, link.strength)}
                                                    strokeWidth={isHighlighted ? getLinkWidth(link.strength) + 1 : getLinkWidth(link.strength)}
                                                    strokeOpacity={isHighlighted ? 1 : (activeNode ? 0.3 : 0.7)}
                                                />
                                                {/* Add directional markers for acquisition relationships */}
                                                {link.type === "acquisition" && (
                                                    <polygon
                                                        points={`${target.x},${target.y} ${target.x - 5},${target.y - 3} ${target.x - 5},${target.y + 3}`}
                                                        transform={`rotate(${Math.atan2(target.y - source.y, target.x - source.x) * 180 / Math.PI + 180}, ${target.x}, ${target.y})`}
                                                        fill={getLinkColor(link.type, link.strength)}
                                                        opacity={isHighlighted ? 1 : (activeNode ? 0.3 : 0.7)}
                                                    />
                                                )}
                                            </g>
                                        );
                                    })}

                                    {/* Nodes */}
                                    {nodes.map((node) => {
                                        const nodeSize = getNodeSize(node.type);
                                        const isActive = activeNode === node.id;
                                        const isConnected = isConnectedToActive(node.id);
                                        const opacity = activeNode ? (isActive || isConnected ? 1 : 0.4) : 1;

                                        return (
                                            <g
                                                key={node.id}
                                                onMouseOver={(e) => handleMouseOver(node, e)}
                                                onMouseOut={handleMouseOut}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {/* Highlight effect for active node */}
                                                {isActive && (
                                                    <circle
                                                        cx={node.x}
                                                        cy={node.y}
                                                        r={nodeSize + 5}
                                                        fill="none"
                                                        stroke="#3b82f6"
                                                        strokeWidth="2"
                                                        strokeDasharray="3,2"
                                                    />
                                                )}

                                                <circle
                                                    cx={node.x}
                                                    cy={node.y}
                                                    r={nodeSize}
                                                    fill={getNodeColor(node.type)}
                                                    opacity={opacity}
                                                    stroke={isActive || isConnected ? "#ffffff" : "none"}
                                                    strokeWidth="2"
                                                />

                                                <text
                                                    x={node.x}
                                                    y={node.y + (nodeSize + 15)}
                                                    textAnchor="middle"
                                                    fill="#4b5563"
                                                    fontSize="12"
                                                    opacity={opacity}
                                                >
                                                    {node.name}
                                                </text>

                                                {/* Add icon or initials to node */}
                                                <text
                                                    x={node.x}
                                                    y={node.y + 4}
                                                    textAnchor="middle"
                                                    fill="#ffffff"
                                                    fontSize={node.type === "main" ? "16" : "12"}
                                                    fontWeight="bold"
                                                >
                                                    {node.name.substring(0, 2).toUpperCase()}
                                                </text>
                                            </g>
                                        );
                                    })}

                                    {/* Tooltip */}
                                    {showTooltip && (
                                        <foreignObject
                                            x={tooltipPosition.x + 10}
                                            y={tooltipPosition.y - 15}
                                            width="200"
                                            height="50"
                                            style={{ overflow: 'visible' }}
                                        >
                                            <div className="bg-gray-800 text-white px-3 py-2 rounded text-xs shadow-lg whitespace-nowrap">
                                                {tooltipContent}
                                            </div>
                                        </foreignObject>
                                    )}
                                </svg>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mt-4">
                                <div className="flex items-start">
                                    <div className="bg-purple-100 text-purple-600 p-1 rounded mr-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-700 font-medium mb-1">Roquette Acquisitions</p>
                                        <p className="text-xs text-gray-600">
                                            Recent strategic acquisitions of Qualicaps (2023) and JRS Pharma (2024) have consolidated Roquette's market position in pharmaceutical excipients.
                                        </p>
                                        <p className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">
                                            Hover over nodes and connections to explore relationships
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SupplierIQ AI Assistant */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                                    <BrainCircuit size={18} />
                                </div>
                                <h2 className="font-bold text-gray-800">SupplierIQ AI Assistant</h2>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                                <p className="text-sm text-blue-800 font-medium mb-1">
                                    How will Roquette's acquisition of Qualicaps impact our supply chain?
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                <p className="text-sm text-gray-600 mb-2">
                                    <span className="font-medium text-gray-800">SupplierIQ:</span> Based on my analysis, Roquette's acquisition of Qualicaps creates both challenges and opportunities:
                                </p>
                                <p className="text-sm text-gray-600">
                                    The acquisition consolidates their market position, potentially increasing pricing power for key excipients. However, it also creates integration opportunities where you can negotiate volume-based agreements during their transition period over the next 8-12 months.
                                </p>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask anything about Roquette or supplier strategies..."
                                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
                                />
                                <button className="absolute right-2 top-2 bg-blue-600 text-white p-1 rounded-md">
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const VolumeForecastTrendAnalysis = () => {
        return (
            <div className="bg-gray-50 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Volume Forecast & Trend Analysis</h2>
                        <p className="text-sm text-gray-500">Projected volumes and trending patterns for Roquette supplies</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="relative w-48">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>All Product Lines</option>
                                <option>Excipients</option>
                                <option>Active Ingredients</option>
                            </select>
                        </div>
                        <div className="relative w-48">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>5-Year Forecast</option>
                                <option>3-Year Forecast</option>
                                <option>1-Year Forecast</option>
                            </select>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <RefreshCw size={16} />
                            <span>Update Forecast</span>
                        </button>
                    </div>
                </div>

                {/* Volume Chart */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={volumeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar name="Roquette (tons)" dataKey="roquette" fill="#cc2828" />
                            <Bar name="Qualicaps (tons)" dataKey="qualicaps" fill="#e74c3c" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-gray-600 text-center mt-2">
                        Volumes are forecasted to decrease by 24% in FY24 and another 35% in FY25 due to demand drop and dual-sourcing
                    </p>
                </div>

                {/* Analysis Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Volume Trend Analysis Panel */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                        <div className="flex items-center mb-3">
                            <div className="bg-blue-100 p-1 rounded-full mr-2">
                                <TrendingDown className="text-blue-600" size={18} />
                            </div>
                            <h3 className="font-medium text-gray-800">Volume Trend Analysis</h3>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-start text-sm">
                                <span className="text-red-500 mr-2">⮯</span>
                                <span className="text-gray-600">Continuous volume reduction since 2021 with accelerating decline rate</span>
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="text-gray-500 mr-2">◉</span>
                                <span className="text-gray-600">Qualicaps volumes maintaining proportional share despite overall decline</span>
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="text-blue-500 mr-2">◉</span>
                                <span className="text-gray-600">Dual-sourcing strategy successfully reducing dependency by 59% from peak</span>
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="text-gray-500 mr-2">↗</span>
                                <span className="text-gray-600">Correlation between volume decreases and increase in average price point</span>
                            </li>
                        </ul>

                        <div className="mt-3 text-xs text-gray-500 flex items-center">
                            <span className="mr-1">Confidence Score:</span>
                            <span className="font-medium">92%</span>
                        </div>
                    </div>

                    {/* Price Impact Analysis Panel */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                        <div className="flex items-center mb-3">
                            <div className="bg-green-100 p-1 rounded-full mr-2">
                                <DollarSign className="text-green-600" size={18} />
                            </div>
                            <h3 className="font-medium text-gray-800">Price Impact Analysis</h3>
                        </div>

                        <div className="h-36">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={priceData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                    <Line type="monotone" dataKey="volume" stroke="#3b82f6" dot={{ r: 4 }} />
                                    <Line type="monotone" dataKey="price" stroke="#10b981" dot={{ r: 4 }} />
                                    <XAxis dataKey="year" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <p className="text-xs text-gray-600 mt-3">
                            The inverse relationship between volume and price suggests price increases of 15% in FY22 and 20% in FY23. Forecast models predict additional 19-25% price increases through 2025 as volume declines continue.
                        </p>
                    </div>

                    {/* Risk & Mitigation Strategy Panel */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                        <div className="flex items-center mb-3">
                            <div className="bg-red-100 p-1 rounded-full mr-2">
                                <AlertTriangle className="text-red-600" size={18} />
                            </div>
                            <h3 className="font-medium text-gray-800">Risk & Mitigation Strategy</h3>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Price Risk</span>
                                <span className="text-red-600 font-medium">High</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Supply Continuity</span>
                                <span className="text-amber-600 font-medium">Medium</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Quality Consistency</span>
                                <span className="text-green-600 font-medium">Low</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                        </div>

                        <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Mitigation Strategies</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start text-xs">
                                <span className="text-green-600 mr-1">◉</span>
                                <span className="text-gray-600">Lock in multi-year contract with 15-18% volume guarantee</span>
                            </li>
                            <li className="flex items-start text-xs">
                                <span className="text-amber-600 mr-1">◉</span>
                                <span className="text-gray-600">Accelerate alternate supplier qualification timeline</span>
                            </li>
                            <li className="flex items-start text-xs">
                                <span className="text-blue-600 mr-1">◉</span>
                                <span className="text-gray-600">Monitor Roquette's polyol plant expansion to negotiate concessions</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* AI Insights Section */}
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                            <Info size={16} />
                        </div>
                        <h3 className="font-medium text-blue-800">AI-Generated Forecast Insights</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Analysis of historical volumes and pricing data suggests that the continued volume decrease is primarily driven by strategic dual-sourcing decisions rather than demand fluctuations for end products. The transition patterns show Qualicaps, JRS Pharma indicate a strategic shift toward higher-margin market segments.
                    </p>
                    <p className="text-sm text-gray-700">
                        While volumes are projected to decrease by ~59% from 2021 to 2025, this may create negotiation leverage if synchronized with Roquette's capacity expansion timeline in the Lestrem site. Consider long-term partnership proposals with contingent volume commitments that could secure 12-15% price advantages compared to spot market rates.
                    </p>
                    <div className="flex mt-3">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center text-xs mr-3">
                            <span>Run What-if Scenario</span>
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg flex items-center text-xs mr-3">
                            <span>Export Analysis</span>
                        </button>
                        <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg flex items-center text-xs">
                            <span>Ask AI for more details</span>
                            <ArrowRight size={14} className="ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const StrategicAcquisitionsInvestments = () => {
        return (
            <div className="bg-gray-50 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Strategic Acquisitions & Investments</h2>
                        <p className="text-sm text-gray-500">Tracking key strategic moves and their market impact</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="relative w-32">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>All Categories</option>
                                <option>Acquisitions</option>
                                <option>Investments</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-3 text-gray-400" size={16} />
                        </div>
                        <div className="relative w-32">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>Last 3 Years</option>
                                <option>Last Year</option>
                                <option>All Time</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-3 text-gray-400" size={16} />
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <span>Update View</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {/* Left Column - Acquisitions */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mb-6 flex items-center">
                            <div className="bg-blue-100 p-1 rounded-full mr-2">
                                <Building className="text-blue-600" size={18} />
                            </div>
                            <h3 className="font-bold text-gray-800">Recent Strategic Acquisitions</h3>
                            <div className="ml-3 bg-blue-100 text-blue-600 px-2 py-0.5 text-xs rounded-full flex items-center">
                                <Info size={12} className="mr-1" />
                                <span>AI Insights</span>
                            </div>
                        </div>

                        {/* IFF Pharma Solutions Acquisition */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">IFF Pharma Solutions Acquisition</h4>
                                <div className="flex items-center">
                                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 text-xs rounded-full">In Progress</span>
                                    <span className="ml-3 font-bold text-blue-600">$2.85bn</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Announced March 2024
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                Worldwide producer of excipients for oral dosage solutions. Enhances Roquette's US footprint and significantly expands its industry-leading formulation capabilities and drug delivery research and development.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <Globe size={12} className="mr-1" />
                                    <span>Global Presence</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <Building size={12} className="mr-1" />
                                    <span>Pharmaceuticals</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <Calendar size={12} className="mr-1" />
                                    <span>Expected completion: Q4 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Qualicaps Acquisition */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">Qualicaps Acquisition</h4>
                                <div className="flex items-center">
                                    <span className="bg-green-100 text-green-600 px-2 py-0.5 text-xs rounded-full">Completed</span>
                                    <span className="ml-3 font-bold text-green-600">Undisclosed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                October 2023
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                Third largest producer of hard capsules for oral dosage solutions. With this acquisition, Roquette expects to expand the global footprint of its pharmaceutical business, as well as enrich its offering of oral dosage solutions.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <MapPin size={12} className="mr-1" />
                                    <span>Nara, Japan</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <Building size={12} className="mr-1" />
                                    <span>Hard Capsules Manufacturing</span>
                                </div>
                            </div>
                            <div className="flex items-center text-xs text-green-600">
                                <span>Integration in progress</span>
                            </div>
                        </div>

                        {/* Potential Future Targets */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">Potential Future Targets</h4>
                                <div className="flex items-center">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 text-xs rounded-full">AI Prediction</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Based on Roquette's acquisition pattern, AI suggests the company may target smaller specialized excipient producers with strong innovation pipelines, particularly in Asia-Pacific and North America.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Strategic Investments */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-800 flex items-center">
                                <div className="bg-purple-100 p-1 rounded-full mr-2">
                                    <DollarSign className="text-purple-600" size={18} />
                                </div>
                                Strategic Investments
                            </h3>
                        </div>

                        {/* Lestrem Plant Investment */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">Lestrem Plant Investment</h4>
                                <div className="flex items-center">
                                    <span className="font-bold text-purple-600">€25M</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Expansion of manufacturing facility in France. Will increase safety standards for FSMA, WA4 and consolidate industrial operations contributing to production performance improvement.
                            </p>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs text-gray-500">Project Completion:</span>
                                <div className="w-32 bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <span className="text-xs text-gray-500">65%</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <MapPin size={12} className="mr-1" />
                                    <span>France</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <ExternalLink size={12} className="mr-1" />
                                    <span>Largest polyol plant in the world</span>
                                </div>
                            </div>
                        </div>

                        {/* Pharmaceutical Innovation Center */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">Pharmaceutical Innovation Center</h4>
                                <div className="flex items-center">
                                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 text-xs rounded-full">Completed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Opened brand-new innovation center near Philadelphia, Pennsylvania in April 2023. Located in the heart of the United States Northeast pharmaceutical corridor.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <Building size={12} className="mr-1" />
                                    <span>R&D Focus</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <MapPin size={12} className="mr-1" />
                                    <span>Pennsylvania, USA</span>
                                </div>
                            </div>
                        </div>

                        {/* Plant Protein Expansion */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">Plant Protein Expansion</h4>
                                <div className="flex items-center">
                                    <span className="bg-green-100 text-green-600 px-2 py-0.5 text-xs rounded-full">Ongoing</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Strategic expansion in the plant protein sector, meeting growing consumer demands for taste and nutritional value in plant-based ingredients.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    <MapPin size={12} className="mr-1" />
                                    <span>Vic-sur-Aisne, France</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategic Impact Analysis */}
                <div className="mt-6">
                    <div className="mb-4 flex items-center">
                        <h3 className="font-bold text-gray-800">Strategic Impact Analysis</h3>
                        <div className="ml-2 bg-gray-100 rounded-full p-1">
                            <Info size={14} className="text-gray-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Market Position Enhancement */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-start mb-2">
                                <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                                    <TrendingUp className="text-green-600" size={16} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-1">Market Position Enhancement</h4>
                                    <p className="text-xs text-gray-600">
                                        The combined acquisitions strengthen Roquette's leadership position in oral dosage solutions, moving from a component supplier to offering complete drug delivery solutions. This strengthens margins overall while in the pharmaceutical segment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Geographical Expansion */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-start mb-2">
                                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                                    <Globe className="text-blue-600" size={16} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-1">Geographical Expansion</h4>
                                    <p className="text-xs text-gray-600">
                                        The strategic acquisitions expand Roquette's global footprint in the pharmaceutical sector. Qualicaps provides stronger facility in Japan and Asia, while the IFF Pharma acquisition strengthens presence in the US. These gains provide both direct market access and distribution channels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Integration Challenges */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-start mb-2">
                                <div className="bg-amber-100 p-1 rounded-full mr-2 mt-1">
                                    <GitMerge className="text-amber-600" size={16} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-1">Integration Challenges</h4>
                                    <p className="text-xs text-gray-600">
                                        Multiple consecutive acquisitions pose integration challenges relating to cultural alignment, efficiency, technology harmonization, and supply chain realignment may cause temporary operational disruptions. Progress monitoring is essential during the 12-24 month integration period.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Innovation Acceleration */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-start mb-2">
                                <div className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                                    <Zap className="text-purple-600" size={16} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-1">Innovation Acceleration</h4>
                                    <p className="text-xs text-gray-600">
                                        Combined R&D operations and the new innovation center are expected to accelerate product development cycles. Patent activity monitoring suggests a 35% increase in innovation output is achievable within 18 months.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Implications for Takeda */}
                <div className="my-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">Implications for Takeda</h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Customer Impact Assessment</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Pricing Pressure */}
                        <div className="flex items-start">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 mr-3 mt-1 shrink-0">
                                <span className="text-blue-700 text-sm font-medium">$</span>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Pricing Pressure</h4>
                                <p className="text-xs text-gray-600">
                                    With Roquette's expanding in the excipients type on which Takeda's spending is focused (oral dosage solutions, e.g., sweeteners, cellulose-based excipients), it would be a medium-term risk. Actions needed to mitigate that these acquisition triggers price rises.
                                </p>
                            </div>
                        </div>

                        {/* Contract Leverage */}
                        <div className="flex items-start">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 mr-3 mt-1 shrink-0">
                                <span className="text-green-700 text-sm font-medium">C</span>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Contract Leverage</h4>
                                <p className="text-xs text-gray-600">
                                    Takeda maintains a small share of wallet for Roquette (5-2% of FY23 revenues), but has consolidated portfolio with Qualicaps. As Roquette consolidates more of Takeda's supply chain, opportunity to leverage volume commitments emerges.
                                </p>
                            </div>
                        </div>

                        {/* Operational Efficiency */}
                        <div className="flex items-start">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 mr-3 mt-1 shrink-0">
                                <span className="text-amber-700 text-sm font-medium">Op</span>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Operational Efficiency</h4>
                                <p className="text-xs text-gray-600">
                                    Consolidation of suppliers through Roquette's acquisitions will likely be helpful, with target and consistent volumes. Opportunity exists for long-term supply agreements in exchange for pricing concessions.
                                </p>
                            </div>
                        </div>

                        {/* Innovation Opportunities */}
                        <div className="flex items-start">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 mr-3 mt-1 shrink-0">
                                <span className="text-purple-700 text-sm font-medium">I</span>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Innovation Opportunities</h4>
                                <p className="text-xs text-gray-600">
                                    Roquette's expanded capabilities create opportunities for co-development projects. Early engagement with their new innovation center could secure preferential access to new technologies and formulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const MarketPositionDashboard = () => {
        return (
            <div className="bg-gray-50 p-6">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Market Position & Competitors</h1>
                        <p className="text-sm text-gray-500">Analysis of suppliers' competitive landscape and market share</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="relative w-48">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>Pharmaceutical Industry</option>
                                <option>Food Industry</option>
                                <option>Cosmetics Industry</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-3 text-gray-400" size={16} />
                        </div>
                        <div className="relative w-32">
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8">
                                <option>Global View</option>
                                <option>Regional View</option>
                                <option>Local View</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-3 text-gray-400" size={16} />
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <RefreshCw size={16} />
                            <span>Update View</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - Market Share & Competitive Positioning */}
                    <div>
                        {/* Market Share Chart */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <h2 className="font-bold text-gray-800">Market Share - Excipients Category</h2>
                                    <Info className="ml-2 text-gray-400" size={16} />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="relative" style={{ width: '280px', height: '280px' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={marketShareData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={70}
                                                outerRadius={110}
                                                paddingAngle={0}
                                                dataKey="value"
                                            >
                                                {marketShareData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => `${value}%`} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                        <p className="font-bold text-gray-800">Excipients</p>
                                        <p className="text-xs text-gray-500">FY23 Market</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 grid grid-cols-3 gap-2">
                                {marketShareData.map((item) => (
                                    <div key={item.name} className="flex items-center text-xs">
                                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-gray-700">{item.name} - {item.value}%</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs text-gray-500 mt-4">
                                Data Source: Internal spend reporting
                            </div>
                        </div>

                        {/* Competitive Positioning Map */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-gray-800">Competitive Positioning Map</h2>
                                <div>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <ExternalLink size={18} />
                                    </button>
                                </div>
                            </div>

                            <div style={{ width: '100%', height: 320 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <ScatterChart
                                        margin={{ top: 30, right: 20, bottom: 50, left: 40 }}
                                    >
                                        <CartesianGrid stroke="#f0f0f0" strokeWidth={0.5} />
                                        <XAxis
                                            type="number"
                                            dataKey="x"
                                            domain={[0, 100]}
                                            tickLine={false}
                                            axisLine={{ stroke: '#e5e7eb' }}
                                            tick={{ fontSize: 10, fill: '#6b7280' }}
                                            tickFormatter={() => ''}
                                            label={{
                                                value: 'Lower Price',
                                                position: 'bottom',
                                                offset: 0,
                                                fill: '#6b7280',
                                                fontSize: 12
                                            }}
                                        />
                                        <YAxis
                                            type="number"
                                            dataKey="y"
                                            domain={[0, 100]}
                                            tickLine={false}
                                            axisLine={{ stroke: '#e5e7eb' }}
                                            tick={{ fontSize: 10, fill: '#6b7280' }}
                                            tickFormatter={() => ''}
                                            label={{
                                                value: 'Standard Quality',
                                                position: 'left',
                                                angle: -90,
                                                offset: 0,
                                                fill: '#6b7280',
                                                fontSize: 12,
                                                style: { textAnchor: 'middle' }
                                            }}
                                        />
                                        <ZAxis
                                            type="number"
                                            dataKey="size"
                                            range={[40, 80]}
                                            domain={[0, 20]}
                                        />
                                        <Tooltip content={renderTooltip} />
                                        <Scatter data={positioningData}>
                                            {positioningData.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.color}
                                                    fillOpacity={0.8}
                                                />
                                            ))}
                                        </Scatter>
                                    </ScatterChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="mt-6 text-xs text-gray-600">
                                Bubble size represents relative market share. Position based on average price point and quality perception.
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Products Analysis & Spend Evolution */}
                    <div>
                        {/* Product Portfolio Analysis */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-gray-800">Product Portfolio Analysis</h2>
                                <div className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full flex items-center">
                                    <Info size={12} className="mr-1" />
                                    <span>AI Insights</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {productPortfolioData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="text-sm text-gray-700">{item.name}</div>
                                        <div className="flex items-center">
                                            <div className="w-16 h-2 bg-blue-100 rounded-full mr-2">
                                                <div
                                                    className="h-full bg-blue-600 rounded-full"
                                                    style={{ width: `${(item.value / 5) * 100}%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-blue-600">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-medium text-gray-700">Total</div>
                                    <div className="text-sm font-medium text-blue-600">15</div>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    Portfolio of Roquette excipients in FY23, QY
                                </div>
                            </div>
                        </div>

                        {/* Annual Spend Evolution */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-gray-800">Annual Spend Evolution</h2>
                                <div className="text-sm text-gray-500">
                                    2021-2023, QoY
                                </div>
                            </div>

                            <div style={{ width: '100%', height: 250 }}>
                                <ResponsiveContainer>
                                    <BarChart
                                        data={spendEvolutionData}
                                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                        <YAxis hide={true} />
                                        <Tooltip />
                                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                            {spendEvolutionData.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.colors.top}
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Legend below chart */}
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                {spendEvolutionData.map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-xs font-medium text-gray-600">{item.percentage}</div>
                                        {item.growth && (
                                            <div className={`text-xs ${item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                                {item.growth}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Insights */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <h2 className="font-bold text-gray-800">Key Insights</h2>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <TrendingUp className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                                    <p className="text-sm text-gray-700">
                                        <span className="font-medium">Volumes with Roquette are not increasing</span> in FY22 onwards (in fact decreasing) - increased spend due to price increases
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <AlertCircle className="text-red-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                                    <p className="text-sm text-gray-700">
                                        <span className="font-medium">Volumes with Qualicaps are not decreasing</span> - increased spend due to price increases
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <Info className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                                    <p className="text-sm text-gray-700">
                                        Competitive analysis indicates increasing pricing pressure from FUJIFILM (15% share), which is positioned similarly in the premium quality segment. The forecasted 24% volume decrease in FY24 suggests a strategic contraction that may require strategic repositioning.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex">
                                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded flex items-center">
                                    <span>Detailed Competitive Analysis</span>
                                </button>
                                <button className="ml-2 bg-white text-blue-600 text-sm px-4 py-2 rounded border border-blue-600 flex items-center">
                                    <span>Ask AI about market trends</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-full mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-20">
                        {/* Left Side - Logo & Brand */}
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                                <Building2 size={24} />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 text-sm">SupplierIQ</div>
                                <div className="text-xs text-green-500 font-medium">● Live Data</div>
                            </div>

                            {/* Navigation */}
                            <nav className="ml-10 flex space-x-4">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-all ${activeTab === tab.name
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                                            }`}
                                        onClick={() => setActiveTab(tab.name)}
                                    >
                                        {tab.icon}
                                        <span className="ml-1">{tab.name}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Right Side - Status & Actions */}
                        <div className="flex items-center space-x-4">
                            <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                                Updated: 2h ago
                            </div>
                            <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
                                <Bell size={18} className="text-gray-600" />
                            </button>
                            <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
                                <Settings size={18} className="text-gray-600" />
                            </button>
                            <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
                                <UserCircle size={20} className="text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {activeTab === 'Dashboard' && renderDashboard()}
                {activeTab === 'Financial Analysis' && renderFinancialAnalysis()}
                {activeTab === 'AI Insights' && SupplierIntelligenceDashboard()}
                {activeTab === 'Forecasting' && VolumeForecastTrendAnalysis()}
                {activeTab === 'Strategic Moves' && StrategicAcquisitionsInvestments()}
                {activeTab === 'Market Positions' && MarketPositionDashboard()}
            </main>
        </div>
    );
}