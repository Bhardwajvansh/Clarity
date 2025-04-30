import { BarChart2, Bot, Star, TrendingUp, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RefreshCw, Filter, AlertCircle } from 'lucide-react';
import { Bell, ChevronRight, AlertTriangle, Activity, Package, BarChart3 } from 'lucide-react';
import { ChevronDown, Download, TrendingDown, Info } from "lucide-react";
import { BarChart, Bar } from "recharts";
import {
    MessageSquare,
    PieChart,
    Send,
    CheckCircle2,
    FileText
} from "lucide-react";


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
    const [rawMaterialChange, setRawMaterialChange] = useState(5);
    const [laborCostChange, setLaborCostChange] = useState(0);
    const [logisticsCostChange, setLogisticsCostChange] = useState(10);
    const [currentMargin, setCurrentMargin] = useState(32);
    const [projectedMargin, setProjectedMargin] = useState(28.5);
    const [impact, setImpact] = useState(-3.5);
    const [category, setCategory] = useState("Electronics Category");
    const [inputValue, setInputValue] = useState("");

    const priceData = {
        averageChange: "+12.4%",
        supplyRisk: "Medium",
        marketVolatility: "Low"
    };

    const recommendations = [
        "Diversify supplier base",
        "Lock in Q2 prices now",
        "Review inventory levels"
    ];

    const reports = [
        { title: "Q1 Category Review", updated: "2 days ago" },
        { title: "Supplier Analysis", updated: "1 week ago" }
    ];

    const priceDrivers = [
        { factor: "Semiconductor shortage", impact: "+15%" },
        { factor: "Increased logistics costs", impact: "+8%" },
        { factor: "Labor cost inflation", impact: "+5%" }
    ];

    const forecast = [
        { prediction: "Gradual improvement in supply chain" },
        { prediction: "Potential 5-7% price decrease" },
        { prediction: "New suppliers entering the market" }
    ];

    const handleSubmit = () => {
        setInputValue("");
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const costData = {
        baseAmount: 100,
        rawMaterials: 25,
        labor: 15,
        logistics: 10,
        tariffs: 7,
        overhead: 10
    };

    const finalPrice = costData.baseAmount + costData.rawMaterials + costData.labor +
        costData.logistics + costData.tariffs + costData.overhead;

    const [showAISuggestion, setShowAISuggestion] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAISuggestion(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const newImpact = -0.2 * rawMaterialChange +
            -0.15 * laborCostChange +
            -0.13 * logisticsCostChange;

        const roundedImpact = Math.round(newImpact * 10) / 10;
        setImpact(roundedImpact);
        setProjectedMargin(Math.round((currentMargin + roundedImpact) * 10) / 10);

        const rawMaterialAdjustment = costData.rawMaterials * (1 + rawMaterialChange / 100);
        const laborAdjustment = costData.labor * (1 + laborCostChange / 100);
        const logisticsAdjustment = costData.logistics * (1 + logisticsCostChange / 100);
    }, [rawMaterialChange, laborCostChange, logisticsCostChange, currentMargin]);

    const chartData = [
        { name: "Base Cost", value: costData.baseAmount, color: "#3b82f6" },
        { name: "Raw Materials", value: costData.rawMaterials, color: "#ef4444" },
        { name: "Labor", value: costData.labor, color: "#f97316" },
        { name: "Logistics", value: costData.logistics, color: "#22c55e" },
        { name: "Tariffs", value: costData.tariffs, color: "#a855f7" },
        { name: "Overhead", value: costData.overhead, color: "#6366f1" },
        { name: "Final Price", value: finalPrice, color: "#3b82f6" }
    ];

    const categories = [
        "Electronics Category",
        "Furniture",
        "Apparel",
        "Home Goods",
        "Automotive"
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
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

    const ProcurementDashboard = () => {
        return (
            <div className="flex flex-col h-screen bg-gray-50 p-6 font-sans">
                {/* Header */}
                <header className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Embedded AI Chat & Analysis</h1>
                        <p className="text-gray-500 text-sm">Context-aware insights and interactive analysis</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <select
                                value={category}
                                onChange={handleCategoryChange}
                                className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option>Electronics Category</option>
                                <option>Office Supplies</option>
                                <option>Raw Materials</option>
                                <option>IT Services</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
                        </div>
                        <button
                            className="bg-blue-500 text-white rounded-md py-2 px-4 flex items-center gap-2 hover:bg-purple-700 transition-colors duration-200"
                        >
                            <PieChart className="h-5 w-5" />
                            <span>New Analysis</span>
                        </button>
                    </div>
                </header>

                {/* Main content */}
                <div className="flex flex-1 gap-6 overflow-hidden">
                    {/* Chat section - Left side */}
                    <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {/* User message */}
                            <div className="bg-blue-50 rounded-lg p-4 max-w-lg ml-auto">
                                <div className="font-medium text-gray-700 mb-1">You</div>
                                <p>Show me Q1 price drivers for Electronics category</p>
                            </div>

                            {/* AI response */}
                            <div className="bg-gray-50 rounded-lg p-4 max-w-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-purple-100 p-1 rounded-full">
                                        <MessageSquare className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <div className="font-medium text-gray-700">CategoryIQ AI</div>
                                </div>

                                <p className="mb-3">In Q1 2024, the main price drivers for Electronics were:</p>
                                <ul className="space-y-2 mb-3">
                                    {priceDrivers.map((driver, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-gray-700">•</span>
                                            <span className="text-gray-700">{driver.factor} ({driver.impact} impact)</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-start gap-2 text-blue-600 mt-4">
                                    <AlertCircle className="h-4 w-4 mt-0.5" />
                                    <p className="text-sm">Consider long-term contracts with key suppliers to mitigate price volatility</p>
                                </div>
                            </div>

                            {/* User second message */}
                            <div className="bg-blue-50 rounded-lg p-4 max-w-lg ml-auto">
                                <div className="font-medium text-gray-700 mb-1">You</div>
                                <p>What's the forecast for next quarter?</p>
                            </div>

                            {/* AI second response */}
                            <div className="bg-gray-50 rounded-lg p-4 max-w-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-purple-100 p-1 rounded-full">
                                        <MessageSquare className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <div className="font-medium text-gray-700">CategoryIQ AI</div>
                                </div>

                                <p className="mb-3">Based on market analysis, we expect:</p>
                                <ul className="space-y-2 mb-3">
                                    {forecast.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-gray-700">•</span>
                                            <span className="text-gray-700">{item.prediction}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Action buttons */}
                                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                                    <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-3 py-1 transition-colors duration-200">
                                        Show price trends
                                    </button>
                                    <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-3 py-1 transition-colors duration-200">
                                        Compare with last year
                                    </button>
                                    <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-3 py-1 transition-colors duration-200">
                                        Risk analysis
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Input area */}
                        <div className="p-4 border-t border-gray-200 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask anything about your category..."
                                className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Insights section - Right side */}
                    <div className="w-72 space-y-6">
                        {/* Quick Analysis */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h3 className="font-bold text-gray-800 mb-4">Quick Analysis</h3>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Average Price Change</span>
                                    <span className="font-medium text-red-500">{priceData.averageChange}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Supply Risk Level</span>
                                    <span className="font-medium text-orange-500">{priceData.supplyRisk}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Market Volatility</span>
                                    <span className="font-medium text-green-500">{priceData.marketVolatility}</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Recommendations */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h3 className="font-bold text-gray-800 mb-4">Key Recommendations</h3>

                            <div className="space-y-3">
                                {recommendations.map((rec, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{rec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Related Reports */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h3 className="font-bold text-gray-800 mb-4">Related Reports</h3>

                            <div className="space-y-4">
                                {reports.map((report, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-1 rounded">
                                            <FileText className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-gray-800 font-medium">{report.title}</div>
                                            <div className="text-gray-500 text-xs">Updated {report.updated}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const CostPriceAnalysis = () => {
        return (
            <div className="bg-gray-50 p-6 flex flex-col w-full font-sans">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Cost vs. Price Analysis</h1>
                        <p className="text-gray-500 text-sm">Component breakdown and margin impact scenarios</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                {selectedCategory}
                                <ChevronDown size={16} />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
                                    {categories.map((category) => (
                                        <div
                                            key={category}
                                            className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Download size={16} />
                            Export Analysis
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h2 className="text-lg font-bold mb-4">Cost Component Breakdown</h2>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                                    barGap={2}
                                    animationDuration={1000}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fontSize: 11 }}
                                        tickLine={false}
                                        axisLine={{ stroke: "#e5e7eb" }}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 11 }}
                                        tickLine={false}
                                        axisLine={{ stroke: "#e5e7eb" }}
                                        tickFormatter={(value) => `${value}`}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                                        contentStyle={{
                                            borderRadius: '0.375rem',
                                            border: '1px solid #e5e7eb',
                                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                        }}
                                        formatter={(value) => [`${value}`, 'Cost']}
                                    />
                                    <Bar
                                        dataKey="value"
                                        radius={[4, 4, 0, 0]}
                                        isAnimationActive={true}
                                        animationEasing="ease-in-out"
                                        fill={(entry) => entry.color}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h2 className="text-lg font-bold mb-4">Margin Impact Scenarios</h2>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-700">Raw Material Cost Change</span>
                                        <span className="text-sm font-medium text-blue-600">{rawMaterialChange > 0 ? `+${rawMaterialChange}%` : `${rawMaterialChange}%`}</span>
                                    </div>
                                    <div className="relative">
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <div
                                                className="absolute h-2 bg-blue-500 rounded-full"
                                                style={{
                                                    width: `${((rawMaterialChange + 20) / 40) * 100}%`,
                                                    left: 0
                                                }}
                                            ></div>
                                        </div>
                                        <input
                                            type="range"
                                            min="-20"
                                            max="20"
                                            value={rawMaterialChange}
                                            onChange={(e) => setRawMaterialChange(parseInt(e.target.value))}
                                            className="absolute w-full h-2 opacity-0 cursor-pointer"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>-20%</span>
                                            <span>+20%</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-700">Labor Cost Change</span>
                                        <span className="text-sm font-medium text-blue-600">{laborCostChange > 0 ? `+${laborCostChange}%` : `${laborCostChange}%`}</span>
                                    </div>
                                    <div className="relative">
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <div
                                                className="absolute h-2 bg-blue-500 rounded-full"
                                                style={{
                                                    width: `${((laborCostChange + 20) / 40) * 100}%`,
                                                    left: 0
                                                }}
                                            ></div>
                                        </div>
                                        <input
                                            type="range"
                                            min="-20"
                                            max="20"
                                            value={laborCostChange}
                                            onChange={(e) => setLaborCostChange(parseInt(e.target.value))}
                                            className="absolute w-full h-2 opacity-0 cursor-pointer"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>-20%</span>
                                            <span>+20%</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-700">Logistics Cost Change</span>
                                        <span className="text-sm font-medium text-blue-600">{logisticsCostChange > 0 ? `+${logisticsCostChange}%` : `${logisticsCostChange}%`}</span>
                                    </div>
                                    <div className="relative">
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <div
                                                className="absolute h-2 bg-blue-500 rounded-full"
                                                style={{
                                                    width: `${((logisticsCostChange + 20) / 40) * 100}%`,
                                                    left: 0
                                                }}
                                            ></div>
                                        </div>
                                        <input
                                            type="range"
                                            min="-20"
                                            max="20"
                                            value={logisticsCostChange}
                                            onChange={(e) => setLogisticsCostChange(parseInt(e.target.value))}
                                            className="absolute w-full h-2 opacity-0 cursor-pointer"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>-20%</span>
                                            <span>+20%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h2 className="text-lg font-bold mb-4">Impact Summary</h2>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Current Margin</span>
                                    <span className="font-bold text-gray-900">{currentMargin}%</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Projected Margin</span>
                                    <span className="font-bold text-red-500">{projectedMargin}%</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Impact</span>
                                    <span className="font-bold text-red-500">{impact}%</span>
                                </div>
                            </div>

                            <div
                                className={`mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 transition-all duration-500 flex items-start gap-2 ${showAISuggestion ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                                    }`}
                            >
                                <div className="text-amber-500 mt-0.5">
                                    <AlertCircle size={16} />
                                </div>
                                <div>
                                    <p className="text-sm text-amber-700">
                                        <span className="font-medium">AI suggests</span> negotiating volume discounts with raw material suppliers to offset rising logistics costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const CategoryAlertsDashboard = () => {
        return (
            <div className="transition-all duration-300">
                <div className="bg-gray-50 min-h-screen p-6 transition-all duration-300">
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
                            <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
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
            <div className="bg-gray-50 p-6">
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
                    <div className="lg:col-span-2 space-y-6">
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

                    <div className="lg:col-span-1 space-y-6">
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
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "AI Chat" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("AI Chat")}
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
                {activeTab === 'Price Analysis' && CostPriceAnalysis()}
                {activeTab === 'AI Chat' && ProcurementDashboard()}
            </main>
        </div>
    )
}
