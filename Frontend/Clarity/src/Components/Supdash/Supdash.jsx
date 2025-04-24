import React, { useState, useEffect, useRef } from 'react';
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
    ChevronRight,
    ChevronLeft,
    User2,
    FileText,
    MoreVertical,
    CheckCircle2,
    FileCog,
    Plus,
    BarChart2,
    Truck,
    Save,
    Trash2,
    Expand,
    FileSpreadsheet,
    FileChartColumn,
    Users,
    PieChartIcon,
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
    const [activeTab2, setActiveTab2] = useState('Overview');
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollContainerRef = useRef(null);
    const [timeFilter, setTimeFilter] = useState('5years');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [forecastPeriod, setForecastPeriod] = useState('3-year');
    const currentYear = 2025;

    const fiveYearData = [
        { year: '2020', electronics: 4.2, healthcare: 3.7, lifescience: 5.1 },
        { year: '2021', electronics: 4.8, healthcare: 3.2, lifescience: 5.5 },
        { year: '2022', electronics: 5.3, healthcare: 2.8, lifescience: 5.7 },
        { year: '2023', electronics: 4.9, healthcare: 3.0, lifescience: 5.2 },
        { year: '2024', electronics: 4.5, healthcare: 2.6, lifescience: 4.8 }
    ];

    const threeYearData = [
        { year: '2022', electronics: 5.3, healthcare: 2.8, lifescience: 5.7 },
        { year: '2023', electronics: 4.9, healthcare: 3.0, lifescience: 5.2 },
        { year: '2024', electronics: 4.5, healthcare: 2.6, lifescience: 4.8 }
    ];

    const salesData = timeFilter === '5years' ? fiveYearData : threeYearData;

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectTimeFilter = (filter) => {
        setTimeFilter(filter);
        setDropdownOpen(false);
    };

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
        { name: "Roquette", share: 17, quality: 75, price: 65, color: "#4285F4" },
        { name: "FUJIFILM", share: 15, quality: 68, price: 60, color: "#34A853" },
        { name: "CRODA", share: 7, quality: 82, price: 75, color: "#FBBC05" },
        { name: "Ashland", share: 6, quality: 63, price: 55, color: "#A259FF" },
        { name: "EVONIK", share: 4, quality: 58, price: 45, color: "#EA4C89" },
        { name: "Generic Suppliers", share: 51, quality: 30, price: 25, color: "#9AA0A6" }
    ];

    const width = 800;
    const height = 500;
    const padding = 80;

    // Function to scale market share to visual size
    const getRadius = (share) => {
        return Math.sqrt(share * 150); // Square root to scale area proportionally
    };

    // Function to calculate position based on quality and price
    const calculatePosition = (quality, price) => {
        // Convert quality and price to SVG coordinates
        const x = padding + (price / 100) * (width - 2 * padding);
        const y = height - padding - (quality / 100) * (height - 2 * padding);
        return { x, y };
    };

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

    const threeYearForecast = [
        { year: currentYear, roquette: 1250, qualicaps: 950 },
        { year: currentYear + 1, roquette: 950, qualicaps: 720 }, // 24% decrease
        { year: currentYear + 2, roquette: 620, qualicaps: 470 }, // 35% decrease
        { year: currentYear + 3, roquette: 500, qualicaps: 380 }, // continued decrease
    ];

    const oneYearForecast = [
        { year: currentYear, roquette: 1250, qualicaps: 950 },
        { year: currentYear + 1, roquette: 950, qualicaps: 720 }, // 24% decrease
    ];

    const volumeData = forecastPeriod === '3-year' ? threeYearForecast : oneYearForecast;

    const handleForecastChange = (e) => {
        setForecastPeriod(e.target.value.toLowerCase().includes('3') ? '3-year' : '1-year');
    };

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

    const [selectedSuppliers, setSelectedSuppliers] = useState({
        'Roquette': true,
        'Qualicaps': true,
        'Towa Sobi': false,
        'FUJIFILM': false,
        'Ingredion': false
    });

    const [selectedMetrics, setSelectedMetrics] = useState({
        'Financial': true,
        'Supply Chain': false,
        'Performance': false,
        'Risk': false
    });

    const [reportSections, setReportSections] = useState([
        { id: 1, title: 'Executive Summary', isAiGenerated: true },
        { id: 2, title: 'Supplier Risk Summary', isAiGenerated: false },
        { id: 3, title: 'Financial Performance Comparison', isAiGenerated: false }
    ]);

    const toggleSupplier = (supplier) => {
        setSelectedSuppliers({
            ...selectedSuppliers,
            [supplier]: !selectedSuppliers[supplier]
        });
    };

    const toggleMetric = (metric) => {
        setSelectedMetrics({
            ...selectedMetrics,
            [metric]: !selectedMetrics[metric]
        });
    };

    const removeSection = (id) => {
        setReportSections(reportSections.filter(section => section.id !== id));
    };

    const addSection = () => {
        const newId = reportSections.length ? Math.max(...reportSections.map(s => s.id)) + 1 : 1;
        setReportSections([...reportSections, { id: newId, title: 'New Section', isAiGenerated: false }]);
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
        { name: 'Supplier Profiles', icon: <User2 size={18} /> },
        { name: 'Financial Analysis', icon: <LineChartIcon size={18} /> },
        { name: 'AI Insights', icon: <BrainCircuit size={18} /> },
        { name: 'Forecasting', icon: <TrendingUp size={18} /> },
        { name: 'Strategic Moves', icon: <Swords size={18} /> },
        { name: 'Market Positions', icon: <BarChartIcon size={18} /> },
        { name: 'Report Builder', icon: <FileCog size={18} /> },
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

    const checkForScrollPosition = () => {
        if (!scrollContainerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
    };

    // Scroll handlers
    const scrollLeft = () => {
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const riskData = [
        { name: 'Overall Score', score: 72, color: 'bg-yellow-400' },
        { name: 'Financial Health', score: 80, color: 'bg-green-500' },
        { name: 'Supply Chain', score: 60, color: 'bg-yellow-400' },
        { name: 'Market Position', score: 88, color: 'bg-green-500' },
        { name: 'Regulatory', score: 78, color: 'bg-green-500' },
        { name: 'Geo-Political', score: 52, color: 'bg-red-500' }
    ];

    // Sample data for recent news
    const newsEvents = [
        { date: 'May 9, 2023', title: 'Launched ProTec Mannitol Starch Blend' },
        { date: 'May 6, 2024', title: 'ST 730 Plant-based Ingredient Launch' },
        { date: 'October 2023', title: 'Qualicaps Acquisition Completed' }
    ];

    // Sample data for competitors
    const competitors = [
        {
            name: 'Cargill',
            letter: 'C',
            description: 'Major player in the pharmaceutical excipients market, known for its starch derivatives and pharmaceutical ingredients, based in the United States.'
        },
        {
            name: 'Tereos Syral',
            letter: 'T',
            description: 'Specializes in starch and its derivatives, making it a key competitor in pharmaceutical formulations, based in France.'
        },
        {
            name: 'Ingredion',
            letter: 'I',
            description: 'Offers a wide range of innovative starch derivatives and specialized ingredients for pharmaceutical use, based in the United States.'
        }
    ];

    const tabs2 = ['Overview', 'Financial Performance', 'Supply Chain', 'Market Position', 'Strategic Moves', 'ESG & Compliance'];


    // Set up scroll event listeners
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            // Initial check
            checkForScrollPosition();

            // Add event listener
            scrollContainer.addEventListener('scroll', checkForScrollPosition);

            // Check when window resizes
            window.addEventListener('resize', checkForScrollPosition);

            // Clean up
            return () => {
                scrollContainer.removeEventListener('scroll', checkForScrollPosition);
                window.removeEventListener('resize', checkForScrollPosition);
            };
        }
    }, []);

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
                    <div className="w-10 h-10 bg-blue-100 font-bold text-blue-600 rounded-md flex items-center justify-center mr-3">
                        RQ
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Roquette</h1>
                        <p className="text-sm text-gray-500">Financial Performance Analysis</p>
                    </div>
                    <span className="ml-4 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">Monitoring</span>
                </div>

                <div className="flex space-x-3">
                    <button
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow transition"
                        onClick={toggleDropdown}
                    >
                        <span>{timeFilter === '5years' ? 'Last 5 Years' : 'Last 3 Years'}</span>
                        <ChevronDown size={16} />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute mt-10 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition rounded-t-lg"
                                onClick={() => selectTimeFilter('5years')}
                            >
                                Last 5 Years
                            </button>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition rounded-b-lg"
                                onClick={() => selectTimeFilter('3years')}
                            >
                                Last 3 Years
                            </button>
                        </div>
                    )}
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
                            <Bar dataKey="electronics" stackId="a" fill="#9E9E9E" name="Electronics" />
                            <Bar dataKey="healthcare" stackId="a" fill="#F44336" name="Healthcare" />
                            <Bar dataKey="lifescience" stackId="a" fill="#E57373" name="Life Science" />
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
                            <select
                                className="w-full p-2 border border-gray-200 rounded-lg bg-white shadow-sm appearance-none pr-8"
                                onChange={handleForecastChange}
                                defaultValue="3-Year Forecast"
                            >
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
                            <Bar name="Roquette (tons)" dataKey="roquette" fill="lightgreen" />
                            <Bar name="Qualicaps (tons)" dataKey="qualicaps" fill="Orange" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-gray-600 text-center mt-2">
                        {forecastPeriod === '3-year'
                            ? "Volumes are forecasted to decrease by 24% in FY26, another 35% in FY27, and stabilize with a slight decrease in FY28 due to demand drop and dual-sourcing strategy"
                            : "Volumes are forecasted to decrease by 24% in FY26 due to demand drop and dual-sourcing strategy"}
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

                            <div className="relative w-full" style={{ height: '500px' }}>
                                {/* Main SVG Chart */}
                                <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
                                    {/* Grid lines */}
                                    <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                                    <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />

                                    {/* Axis labels */}
                                    <text x={width - padding + 10} y={height - padding + 30} fontSize="14" fill="#6b7280" textAnchor="middle">Higher Price</text>
                                    <text x={padding - 10} y={height - padding + 30} fontSize="14" fill="#6b7280" textAnchor="middle">Lower Price</text>
                                    <text x={padding - 40} y={padding - 20} fontSize="14" fill="#6b7280" textAnchor="middle">Premium Quality</text>
                                    <text x={padding - 40} y={height - padding + 20} fontSize="14" fill="#6b7280" textAnchor="middle">Standard Quality</text>

                                    {/* Render each competitor bubble */}
                                    {positioningData.map((comp) => {
                                        const { x, y } = calculatePosition(comp.quality, comp.price);
                                        const radius = getRadius(comp.share);

                                        return (
                                            <g key={comp.name}>
                                                {/* Bubble */}
                                                <circle
                                                    cx={x}
                                                    cy={y}
                                                    r={radius}
                                                    fill={comp.color}
                                                    fillOpacity="0.7"
                                                    stroke={comp.color}
                                                    strokeWidth="1"
                                                />

                                                {/* Company Name */}
                                                <text
                                                    x={x}
                                                    y={y - 5}
                                                    fontSize={radius > 40 ? 16 : 14}
                                                    fontWeight="bold"
                                                    fill={comp.share > 25 ? "#fff" : "#000"}
                                                    textAnchor="middle"
                                                >
                                                    {comp.name}
                                                </text>

                                                {/* Percentage */}
                                                <text
                                                    x={x}
                                                    y={y + 15}
                                                    fontSize={radius > 40 ? 14 : 12}
                                                    fontWeight="bold"
                                                    fill={comp.share > 25 ? "#fff" : "#000"}
                                                    textAnchor="middle"
                                                >
                                                    {comp.share}%
                                                </text>
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* Four quadrant labels */}
                                <div className="absolute top-10 left-1/4 text-gray-600 text-xs">Value Leader</div>
                                <div className="absolute top-10 right-1/4 text-gray-600 text-xs">Premium Leader</div>
                                <div className="absolute bottom-10 left-1/4 text-gray-600 text-xs">Budget Option</div>
                                <div className="absolute bottom-10 right-1/4 text-gray-600 text-xs">Mid-Market</div>
                            </div>

                            <div className="mt-4 text-xs text-gray-600">
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

    const RoquetteDashboard = () => {
        return (
            <div className="bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="p-6 flex items-start justify-between bg-white">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                            <span className="font-bold text-blue-600">RQ</span>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <h1 className="text-xl font-bold">Roquette</h1>
                                <span className="ml-3 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">Monitoring</span>
                            </div>
                            <p className="text-sm text-gray-500">Top 10 provider of pharmaceutical excipients</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            <FileText size={16} />
                            <span>Export Profile</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 bg-white rounded-md hover:bg-gray-50 transition">
                            <Bell size={16} />
                            <span>Set Alert</span>
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 border border-gray-300 bg-white rounded-md hover:bg-gray-50 transition">
                            <MoreVertical size={16} />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-t border-b border-gray-200 bg-white">
                    <div className="flex">
                        {tabs2.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab2(tab)}
                                className={`py-4 px-6 text-sm relative ${activeTab2 === tab
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Company Overview */}
                        <div className="bg-white p-6 rounded shadow">
                            <h2 className="text-lg font-medium mb-4">Company Overview</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Ownership model:</span>
                                    <span className="text-sm font-medium">Private</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Country:</span>
                                    <span className="text-sm font-medium">France</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Founded:</span>
                                    <span className="text-sm font-medium">1933</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm"># FTEs:</span>
                                    <span className="text-sm font-medium">~10,000</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Geography:</span>
                                    <span className="text-sm font-medium">Global</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Turnover:</span>
                                    <span className="text-sm font-medium">EUR 5bn</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Industrial sites:</span>
                                    <span className="text-sm font-medium">+30</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Countries served:</span>
                                    <span className="text-sm font-medium">+100</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Experience:</span>
                                    <span className="text-sm font-medium">90 years</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500 text-sm">Patents/year:</span>
                                    <span className="text-sm font-medium">30</span>
                                </div>
                            </div>
                        </div>

                        {/* Business Description */}
                        <div className="bg-white p-6 rounded shadow">
                            <h2 className="text-lg font-medium mb-4">Business Description</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="min-w-4 mt-1 mr-2">•</div>
                                    <span className="text-sm">Roquette offers plant-based ingredients and is a Top 10 provider of pharmaceutical excipients</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="min-w-4 mt-1 mr-2">•</div>
                                    <span className="text-sm">The company offers products produced from maize, wheat, potato or pea such as Proteins and derivatives, Fibers, Polyols, Cereal sugars, Native and modified starches, and cyclodextrins, Organic acids and organic salts</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="min-w-4 mt-1 mr-2">•</div>
                                    <span className="text-sm">The company serves its products to BioPharma, Pharma & nutraceuticals, Cosmetics, Food & nutrition, Animal nutrition, and industrial markets</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Top Competitors */}
                        <div className="bg-white p-6 rounded shadow">
                            <h2 className="text-lg font-medium mb-4">Top Competitors</h2>
                            <div className="space-y-4">
                                {competitors.map((competitor, index) => (
                                    <div key={index} className="flex">
                                        <div className="mr-3 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                                                {competitor.letter}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-sm">{competitor.name}</h3>
                                            <p className="text-xs text-gray-500 mt-1">{competitor.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Growth Strategy */}
                        <div className="bg-white p-6 rounded shadow">
                            <h2 className="text-lg font-medium mb-4">Growth Strategy</h2>
                            <div className="space-y-4">
                                <div className="flex">
                                    <div className="mr-3 mt-1">
                                        <div className="w-6 h-6 text-blue-500">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sm">Expanding Plant Protein Footprint</h3>
                                        <p className="text-xs text-gray-500 mt-1">Investing in plant-based elements for taste and nutritional value with a focus on the top priority.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-3 mt-1">
                                        <div className="w-6 h-6 text-blue-500">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sm">Innovation Centers</h3>
                                        <p className="text-xs text-gray-500 mt-1">Officially opened brand-new Pharmaceutical Innovation Center near Philadelphia, Pennsylvania in April 2023.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-3 mt-1">
                                        <div className="w-6 h-6 text-blue-500">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sm">Strategic Acquisitions</h3>
                                        <p className="text-xs text-gray-500 mt-1">Completed acquisition of Qualicaps, expanding global footprint in pharmaceutical solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Risk Assessment */}
                        <div className="bg-white p-6 rounded shadow mt-6">
                            <h2 className="text-lg font-medium mb-4">Risk Assessment</h2>
                            <div className="space-y-3">
                                {riskData.map((item, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm">{item.name}</span>
                                            <span className="font-medium text-sm">{item.score}/100</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${item.color} h-2 rounded-full`}
                                                style={{ width: `${item.score}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent News & Events */}
                        <div className="bg-white max-h-3/4 p-6 rounded shadow mt-6">
                            <div className="flex justify-between mb-4">
                                <h2 className="text-lg font-medium">Recent News & Events</h2>
                                <a href="#" className="text-blue-600 text-sm flex items-center">
                                    View all news <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                            <div className="space-y-4">
                                {newsEvents.map((item, index) => (
                                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                                        <p className="text-sm font-medium">{item.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    const CustomReportBuilder = () => {
        return (
            <div className="bg-gray-50 min-h-screen p-6 font-sans">
                <h1 className="text-3xl font-bold text-gray-800">Custom Report Builder</h1>
                <p className="text-gray-600 mb-6">Create tailored reports combining different data points and insights from your supplier intelligence</p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Left Panel - Report Components */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded shadow p-4 mb-6">
                            <h2 className="font-medium text-lg mb-4">Report Components</h2>

                            {/* Select Suppliers */}
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-sm font-medium text-gray-700">Select Suppliers</h3>
                                    <span className="text-xs text-gray-500">Required</span>
                                </div>

                                <div className="space-y-2">
                                    {Object.keys(selectedSuppliers).map((supplier) => (
                                        <div key={supplier} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`supplier-${supplier}`}
                                                checked={selectedSuppliers[supplier]}
                                                onChange={() => toggleSupplier(supplier)}
                                                className="h-4 w-4 text-blue-600 rounded"
                                            />
                                            <label htmlFor={`supplier-${supplier}`} className="ml-2 text-sm text-gray-700">
                                                {supplier}
                                            </label>
                                        </div>
                                    ))}
                                    <button className="text-blue-600 text-sm flex items-center mt-2">
                                        <Plus size={16} className="mr-1" /> Add more suppliers
                                    </button>
                                </div>
                            </div>

                            {/* Select Metrics */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-sm font-medium text-gray-700">Select Metrics</h3>
                                    <span className="text-xs text-gray-500">Min. 1 required</span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <button
                                        className={`p-3 rounded flex flex-col items-center justify-center text-xs transition ${selectedMetrics['Financial'] ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' : 'border border-gray-300'}`}
                                        onClick={() => toggleMetric('Financial')}
                                    >
                                        <BarChart2 size={20} className={selectedMetrics['Financial'] ? 'text-blue-600' : 'text-gray-500'} />
                                        <span className="mt-1">Financial</span>
                                    </button>

                                    <button
                                        className={`p-3 rounded flex flex-col items-center justify-center text-xs transition ${selectedMetrics['Supply Chain'] ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' : 'border border-gray-300'}`}
                                        onClick={() => toggleMetric('Supply Chain')}
                                    >
                                        <Truck size={20} className={selectedMetrics['Supply Chain'] ? 'text-blue-600' : 'text-gray-500'} />
                                        <span className="mt-1">Supply Chain</span>
                                    </button>

                                    <button
                                        className={`p-3 rounded flex flex-col items-center justify-center text-xs transition ${selectedMetrics['Performance'] ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' : 'border border-gray-300'}`}
                                        onClick={() => toggleMetric('Performance')}
                                    >
                                        <LineChartIcon size={20} className={selectedMetrics['Performance'] ? 'text-blue-600' : 'text-gray-500'} />
                                        <span className="mt-1">Performance</span>
                                    </button>

                                    <button
                                        className={`p-3 rounded flex flex-col items-center justify-center text-xs transition ${selectedMetrics['Risk'] ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' : 'border border-gray-300'}`}
                                        onClick={() => toggleMetric('Risk')}
                                    >
                                        <PieChartIcon size={20} className={selectedMetrics['Risk'] ? 'text-blue-600' : 'text-gray-500'} />
                                        <span className="mt-1">Risk</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <Save size={16} className="mr-2" /> Save as Draft
                        </button>
                    </div>

                    {/* Middle Panel - Report Layout */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded shadow p-4 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-medium text-lg">Report Layout</h2>
                                <div className="flex space-x-2">
                                    <button className="p-1 text-gray-600 hover:text-gray-800">
                                        <RefreshCw size={16} />
                                    </button>
                                    <button className="p-1 text-gray-600 hover:text-gray-800">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 min-h-64">
                                {reportSections.map((section) => (
                                    <div key={section.id} className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded flex justify-between items-center">
                                        <div className="flex items-center">
                                            <FileText size={16} className="mr-2 text-gray-600" />
                                            <span className="text-sm">{section.title}</span>
                                            {section.isAiGenerated && (
                                                <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                                                    AI Generated
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-1 text-gray-500 hover:text-gray-700">
                                                <LineChart size={14} />
                                            </button>
                                            <button className="p-1 text-gray-500 hover:text-gray-700">
                                                <BarChart2 size={14} />
                                            </button>
                                            <button className="p-1 text-gray-500 hover:text-gray-700" onClick={() => removeSection(section.id)}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={addSection}
                                className="mt-4 w-full py-2 flex items-center justify-center border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50"
                            >
                                <Plus size={16} className="mr-1" /> Add Section
                            </button>
                        </div>

                        <div className="mb-6">
                            <h2 className="font-medium text-lg mb-4">Report Templates</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="border border-gray-200 rounded p-4 flex flex-col items-center text-center hover:border-blue-500 cursor-pointer">
                                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mb-2">
                                        <FileText size={16} className="text-blue-600" />
                                    </div>
                                    <h3 className="text-sm font-medium">Executive Brief</h3>
                                    <p className="text-xs text-gray-500 mt-1">Concise overview</p>
                                </div>

                                <div className="border border-gray-200 rounded p-4 flex flex-col items-center text-center hover:border-blue-500 cursor-pointer">
                                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center mb-2">
                                        <BarChart2 size={16} className="text-green-600" />
                                    </div>
                                    <h3 className="text-sm font-medium">Financial Deep Dive</h3>
                                    <p className="text-xs text-gray-500 mt-1">Detailed analysis</p>
                                </div>

                                <div className="border border-gray-200 rounded p-4 flex flex-col items-center text-center hover:border-blue-500 cursor-pointer">
                                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center mb-2">
                                        <PieChartIcon size={16} className="text-red-600" />
                                    </div>
                                    <h3 className="text-sm font-medium">Risk Assessment</h3>
                                    <p className="text-xs text-gray-500 mt-1">Focused on risks</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Report Preview and Export */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded shadow p-4 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-medium text-lg">Report Preview</h2>
                                <button className="text-blue-600 text-sm flex items-center">
                                    <Expand size={16} className="mr-1" /> Expand Preview
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-md p-4">
                                <div className="p-4 bg-white border border-gray-200 rounded">
                                    <h3 className="font-medium text-sm mb-1">Roquette & Qualicaps: Strategic Analysis</h3>
                                    <p className="text-xs text-gray-500 mb-4">Generated May 31, 2024</p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium mb-2 border-b border-gray-200 pb-1">Executive Summary</h4>
                                            <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-sm font-medium mb-2">Risk Overview</h4>
                                                <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                                                    <PieChartIcon size={24} className="text-gray-400" />
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-medium mb-2">Financial Metrics</h4>
                                                <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                                                    <BarChart2 size={24} className="text-gray-400" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium mb-2">Market Position Comparison</h4>
                                            <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                                                <LineChartIcon size={24} className="text-gray-400" />
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium mb-2 border-b border-gray-200 pb-1">Strategic Recommendations</h4>
                                            <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded shadow p-4">
                            <h2 className="font-medium text-lg mb-4">Export & Share</h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                                            <FileText size={16} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium">PDF Report</h3>
                                            <p className="text-xs text-gray-500">High quality document</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 px-3 py-1 text-sm">Export</button>
                                </div>

                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center mr-3">
                                            <FileSpreadsheet size={16} className="text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium">Excel Export</h3>
                                            <p className="text-xs text-gray-500">Data tables and metrics</p>
                                        </div>
                                    </div>
                                    <button className="text-green-600 px-3 py-1 text-sm">Export</button>
                                </div>

                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center mr-3">
                                            <FileChartColumn size={16} className="text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium">PowerPoint</h3>
                                            <p className="text-xs text-gray-500">Presentation ready</p>
                                        </div>
                                    </div>
                                    <button className="text-purple-600 px-3 py-1 text-sm">Export</button>
                                </div>

                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center mr-3">
                                            <Users size={16} className="text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium">Share Report</h3>
                                            <p className="text-xs text-gray-500">With team members</p>
                                        </div>
                                    </div>
                                    <button className="text-red-600 px-3 py-1 text-sm">Share</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed right-6 bottom-6 flex items-center">
                    <button className="bg-white border border-gray-300 rounded px-4 py-2 mr-2 flex items-center shadow-sm">
                        <span className="text-gray-700">Preview</span>
                    </button>
                    <button className="bg-blue-600 text-white rounded px-4 py-2 flex items-center shadow-sm">
                        <span className="mr-2">Export</span>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-full mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-20">
                        {/* Left Side - Logo & Brand */}
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                                <Building2 size={24} />
                            </div>
                            <div className="ml-4">
                                <div className="font-semibold text-gray-800 text-sm">SupplierIQ</div>
                                <div className="text-xs text-green-500 font-medium">● Live Data</div>
                            </div>

                            {/* Navigation - Now Scrollable with buttons */}
                            <div className="ml-10 relative flex items-center">
                                {/* Left scroll button */}
                                {canScrollLeft && (
                                    <button
                                        onClick={scrollLeft}
                                        className="absolute left-0 z-10 bg-white bg-opacity-90 rounded-full p-1 shadow-md hover:bg-gray-100"
                                    >
                                        <ChevronLeft size={16} className="text-gray-600" />
                                    </button>
                                )}

                                {/* Scrollable navigation */}
                                <div
                                    ref={scrollContainerRef}
                                    className="max-w-4xl overflow-x-auto scrollbar-hide px-4"
                                    onScroll={checkForScrollPosition}
                                >
                                    <nav className="flex space-x-4 py-1" style={{ minWidth: 'max-content' }}>
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.name}
                                                className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.name
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

                                {/* Right scroll button */}
                                {canScrollRight && (
                                    <button
                                        onClick={scrollRight}
                                        className="absolute right-0 z-10 bg-white bg-opacity-90 rounded-full p-1 shadow-md hover:bg-gray-100"
                                    >
                                        <ChevronRight size={16} className="text-gray-600" />
                                    </button>
                                )}
                            </div>
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

                {/* Add custom CSS to hide scrollbar */}
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                    }
                    .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                    }
                `}</style>
            </header>
            <main>
                {activeTab === 'Dashboard' && renderDashboard()}
                {activeTab === 'Financial Analysis' && renderFinancialAnalysis()}
                {activeTab === 'AI Insights' && SupplierIntelligenceDashboard()}
                {activeTab === 'Forecasting' && VolumeForecastTrendAnalysis()}
                {activeTab === 'Strategic Moves' && StrategicAcquisitionsInvestments()}
                {activeTab === 'Market Positions' && MarketPositionDashboard()}
                {activeTab === 'Supplier Profiles' && RoquetteDashboard()}
                {activeTab === 'Report Builder' && CustomReportBuilder()}
            </main>
        </div>
    );
}