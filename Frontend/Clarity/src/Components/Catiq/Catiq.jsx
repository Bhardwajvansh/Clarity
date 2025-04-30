import { BarChart2, Bot, Star, TrendingUp, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RefreshCw, Filter, AlertCircle } from 'lucide-react';
import { Bell, ChevronRight, AlertTriangle, Activity, Package, BarChart3 } from 'lucide-react';
import { ChevronDown, Download, TrendingDown, Info } from "lucide-react";


const marketTrendsData = [
    { month: 'Jan', demand: 65, price: 100 },
    { month: 'Feb', demand: 70, price: 102 },
    { month: 'Mar', demand: 75, price: 105 },
    { month: 'Apr', demand: 82, price: 107 },
    { month: 'May', demand: 88, price: 110 },
    { month: 'Jun', demand: 92, price: 115 },
];

const rawMaterialsData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 101 },
    { month: 'Mar', value: 102 },
    { month: 'Apr', value: 103 },
    { month: 'May', value: 104 },
    { month: 'Jun', value: 105.2 },
];

const laborCostsData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 99.5 },
    { month: 'Mar', value: 99 },
    { month: 'Apr', value: 98.5 },
    { month: 'May', value: 98 },
    { month: 'Jun', value: 97.9 },
];


export const Catiq = () => {
    const [activeTab, setActiveTab] = useState("Category Insight");
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [supplyValue, setSupplyValue] = useState(0);
    const [demandValue, setDemandValue] = useState(0);
    const [currentFilter, setCurrentFilter] = useState('All Alerts');
    const [alerts, setAlerts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
            setAlerts([
                {
                    id: 1,
                    category: 'Price Spike',
                    title: 'Raw Material Cost Surge',
                    description: '25% increase in semiconductor prices detected in APAC region',
                    priority: 'high',
                    icon: <TrendingUp size={18} />,
                    time: '10 min ago',
                    action: 'View Details'
                },
                {
                    id: 2,
                    category: 'Supply Risk',
                    title: 'Critical Supplier Warning',
                    description: 'Major supplier reports production facility shutdown',
                    priority: 'high',
                    icon: <AlertTriangle size={18} />,
                    time: '1 hour ago',
                    action: 'View Details'
                },
                {
                    id: 3,
                    category: 'Contract',
                    title: 'Contract Expiration',
                    description: '3 supplier contracts expiring in the next 30 days',
                    priority: 'medium',
                    icon: <Package size={18} />,
                    time: '2 hours ago',
                    action: 'Review Contracts'
                },
                {
                    id: 4,
                    category: 'Inventory',
                    title: 'Stock Level Warning',
                    description: 'Safety stock threshold reached for 5 SKUs',
                    priority: 'medium',
                    icon: <Package size={18} />,
                    time: '3 hours ago',
                    action: 'View Inventory'
                },
                {
                    id: 5,
                    category: 'Market',
                    title: 'New Market Entry',
                    description: 'New supplier identified in European market',
                    priority: 'low',
                    icon: <TrendingUp size={18} />,
                    time: '1 day ago',
                    action: 'Explore Opportunity'
                },
                {
                    id: 6,
                    category: 'Analytics',
                    title: 'Spend Pattern Change',
                    description: 'Unusual spending pattern detected in Q4',
                    priority: 'low',
                    icon: <BarChart3 size={18} />,
                    time: '2 days ago',
                    action: 'View Analysis'
                }
            ]);
            setIsLoaded(true);
        }, 500);
    }, []);

    const filteredAlerts = currentFilter === 'All Alerts'
        ? alerts
        : alerts.filter(alert => alert.priority === currentFilter.toLowerCase().split(' ')[0]);

    const priorityColors = {
        high: 'text-red-500',
        medium: 'text-orange-500',
        low: 'text-blue-500'
    };

    const priorityBorderColors = {
        high: 'border-l-4 border-red-500',
        medium: 'border-l-4 border-orange-500',
        low: 'border-l-4 border-blue-500'
    };

    const priorityIcons = {
        high: <AlertTriangle className="text-red-500" size={20} />,
        medium: <AlertTriangle className="text-orange-500" size={20} />,
        low: <Bell className="text-blue-500" size={20} />
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            setSupplyValue(Math.random() * 100);
            setDemandValue(Math.random() * 100);
        }, 1000);
    };

    useEffect(() => {
        const supplyAnimation = setInterval(() => {
            setSupplyValue(prev => {
                const target = 75;
                if (prev >= target - 1) {
                    clearInterval(supplyAnimation);
                    return target;
                }
                return prev + 1;
            });
        }, 20);

        const demandAnimation = setInterval(() => {
            setDemandValue(prev => {
                const target = 50;
                if (prev >= target - 1) {
                    clearInterval(demandAnimation);
                    return target;
                }
                return prev + 1;
            });
        }, 20);

        return () => {
            clearInterval(supplyAnimation);
            clearInterval(demandAnimation);
        };
    }, []);

    const CircularGauge = ({ value, maxValue = 100, label, status, color }) => {
        const radius = 50;
        const strokeWidth = 10;
        const normalizedRadius = radius - strokeWidth / 2;
        const circumference = normalizedRadius * 2 * Math.PI;
        const strokeDashoffset = circumference - (value / maxValue) * circumference;

        return (
            <div className="flex flex-col items-center">
                <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                    <circle
                        stroke="#e6e6e6"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease' }}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
                <div className="mt-2 text-center">
                    <div className="text-sm font-medium">{label}</div>
                    <div className="text-sm" style={{ color }}>{status}</div>
                </div>
            </div>
        );
    };

    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
    }
    `;
    document.head.appendChild(style);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border border-gray-200 shadow-md rounded">
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }}>
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    const CategoryAlertsDashboard = () => {
        return (
            <div className="bg-gray-50 min-h-screen transition-all duration-300">
                <div className=" bg-white p-6 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Category Alerts</h1>
                            <p className="text-sm text-gray-600">Central alert hub for price volatility, contract expirations, and supply disruptions</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="flex items-center border rounded-lg bg-white">
                                    <Filter size={16} className="text-gray-400 ml-3" />
                                    <select
                                        className="appearance-none bg-transparent py-2 pl-2 pr-8 outline-none text-sm"
                                        value={currentFilter}
                                        onChange={(e) => setCurrentFilter(e.target.value)}
                                    >
                                        <option>All Alerts</option>
                                        <option>High Priority</option>
                                        <option>Medium Priority</option>
                                        <option>Low Priority</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                                <Bell size={16} className="mr-2" />
                                Configure Alerts
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {isLoaded ? (
                            filteredAlerts.length > 0 ? (
                                filteredAlerts.map((alert) => (
                                    <div
                                        key={alert.id}
                                        className={`bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden ${priorityBorderColors[alert.priority]} animate-fadeIn`}
                                    >
                                        <div className="p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center">
                                                    <span className={`mr-2 ${priorityColors[alert.priority]}`}>
                                                        {alert.icon}
                                                    </span>
                                                    <span className="text-sm text-gray-500">{alert.category}</span>
                                                </div>
                                                <span className="text-xs text-gray-500">{alert.time}</span>
                                            </div>
                                            <h3 className="font-semibold text-gray-800 mb-1">{alert.title}</h3>
                                            <p className="text-sm text-gray-600 mb-3">{alert.description}</p>
                                            <div className="flex justify-between items-center">
                                                <button className={`text-sm ${priorityColors[alert.priority]} hover:underline flex items-center`}>
                                                    {alert.action}
                                                    <ChevronRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 flex justify-center items-center h-60">
                                    <div className="text-center">
                                        <Bell size={40} className="mx-auto text-gray-300 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-500">No alerts match your filter</h3>
                                        <p className="text-gray-400">Try changing your filter options</p>
                                    </div>
                                </div>
                            )
                        ) : (
                            // Loading skeleton
                            [...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-xl shadow overflow-hidden animate-pulse">
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="h-5 w-24 bg-gray-200 rounded"></div>
                                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                        </div>
                                        <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
                                        <div className="h-5 w-28 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Priority legends */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="flex items-center mr-6">
                            {priorityIcons.high}
                            <span className="ml-2 text-sm">High Priority</span>
                        </div>
                        <div className="flex items-center mr-6">
                            {priorityIcons.medium}
                            <span className="ml-2 text-sm">Medium Priority</span>
                        </div>
                        <div className="flex items-center">
                            {priorityIcons.low}
                            <span className="ml-2 text-sm">Low Priority</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const CategoryInsight = () => {
        return (
            <div className="w-fullbg-gray-50 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Category Insight</h1>
                        <p className="text-sm text-gray-500">AI-driven trend analysis and market signals</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleRefresh}
                            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                            Refresh Analysis
                        </button>
                        <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition-colors">
                            <Filter className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left column - 2/3 width */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Key Market Trends */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-bold mb-4">Key Market Trends</h2>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={marketTrendsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                        <XAxis dataKey="month" />
                                        <YAxis domain={[60, 120]} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Line
                                            name="Demand Index"
                                            type="monotone"
                                            dataKey="demand"
                                            stroke="#3b82f6"
                                            strokeWidth={2}
                                            dot={{ r: 3 }}
                                            animationDuration={1500}
                                        />
                                        <Line
                                            name="Price Index"
                                            type="monotone"
                                            dataKey="price"
                                            stroke="#ef4444"
                                            strokeWidth={2}
                                            dot={{ r: 3 }}
                                            animationDuration={1500}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex mt-4 text-sm text-gray-600">
                                <div className="flex items-center mr-6">
                                    <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                                    <span>Demand Index</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-red-500 mr-2"></div>
                                    <span>Price Index</span>
                                </div>
                            </div>
                        </div>

                        {/* AI Analysis */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center text-blue-600 mb-2">
                                <AlertCircle className="w-5 h-5 mr-2" />
                                <h2 className="text-lg font-bold">AI Analysis</h2>
                            </div>
                            <p className="text-blue-600">
                                Lubricants demand has increased 12% in APAC region, driven by manufacturing sector growth
                                and increased industrial activity. Price pressure expected to continue through Q2.
                            </p>
                        </div>
                    </div>

                    {/* Right column - 1/3 width */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Market Sentiment */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-bold mb-4">Market Sentiment</h2>
                            <div className="flex justify-around">
                                <CircularGauge
                                    value={supplyValue}
                                    label="Supply"
                                    status="Positive"
                                    color="#10b981"
                                />
                                <CircularGauge
                                    value={demandValue}
                                    label="Demand"
                                    status="Neutral"
                                    color="#f59e0b"
                                />
                            </div>
                        </div>

                        {/* Price Signals */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-bold mb-4">Price Signals</h2>

                            <div className="mb-6">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">Raw Materials</span>
                                    <span className="text-sm font-medium text-red-500">+5.2%</span>
                                </div>
                                <div className="h-16">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={rawMaterialsData}>
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#ef4444"
                                                strokeWidth={2}
                                                dot={false}
                                                animationDuration={1500}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">Labor Costs</span>
                                    <span className="text-sm font-medium text-green-500">-2.1%</span>
                                </div>
                                <div className="h-16">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={laborCostsData}>
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#10b981"
                                                strokeWidth={2}
                                                dot={false}
                                                animationDuration={1500}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <h1 className="font-bold text-3xl text-gray-800">CategoryIQ</h1>
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
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Category Insight" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Category Insight")}
                        >
                            <div className="flex items-center">
                                <BarChart2 size={14} className="mr-1" />
                                Category Insight
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Category Alerts" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Category Alerts")}
                        >
                            <div className="flex items-center">
                                <Star size={14} className="mr-1" />
                                Category Alerts
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Price Analysis" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Price Analysis")}
                        >
                            <div className="flex items-center">
                                <TrendingUp size={14} className="mr-1" />
                                Price Analysis
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Outreach Automation" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Outreach Automation")}
                        >
                            <div className="flex items-center">
                                <Bot size={14} className="mr-1" />
                                AI Chat
                            </div>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                {activeTab === 'Category Insight' && CategoryInsight()}
                {activeTab === 'Category Alerts' && CategoryAlertsDashboard()}
            </main>
        </div>
    )
}
