import React, { useState, useEffect } from 'react';
import { Home, BarChart2, Zap, Bell, Settings, Search, MoreHorizontal, ChevronDown, Hexagon, PieChart, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { X, Info, ArrowRight, ArrowUpRight, ArrowDownRight, Download, LightbulbIcon } from 'lucide-react';

export const StrategicDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [animate, setAnimate] = useState(false);

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
        }
    ];

    useEffect(() => {
        setAnimate(true);
    }, []);

    const tabs = [
        { id: 'overview', name: 'Overview', icon: <Home size={18} /> },
        { id: 'analytics', name: 'Analytics', icon: <BarChart2 size={18} /> },
        { id: 'insights', name: 'Insights', icon: <Zap size={18} /> },
        { id: 'alerts', name: 'Alerts', icon: <Bell size={18} /> },
        { id: 'settings', name: 'Settings', icon: <Settings size={18} /> },
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-50 text-gray-800 font-sans">
            <div className="p-6 pb-0">
                <h1 className="text-3xl font-bold text-gray-800">Strategic Dashboard</h1>
                <br />
                <div className="mt-1 mb-2">
                    <h2 className="text-lg font-medium text-gray-600 border-b-2 border-blue-500 inline-block pb-1">Comprehensive Market Intelligence</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    After completing the onboarding process, users land on this strategic dashboard that provides a holistic view
                    of the market landscape with personalized insights across 5 key domains.
                </p>
            </div>
            <div className="flex items-center border-b border-gray-200 px-6">
                <div className="flex space-x-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === tab.id
                                ? 'text-blue-600 border-b-2 border-blue-500'
                                : 'text-gray-600 hover:text-blue-600'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="ml-auto flex items-center">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                </div>
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

                                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
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

                                                    {/* Handle specific position cases */}
                                                    {trend.marketMaturity === 'Medium' && trend.growthPotential === 'Very High' && (
                                                        <div className="absolute ml-[520px] mt-[12px] w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                            {trend.rank}
                                                        </div>
                                                    )}
                                                    {trend.marketMaturity === 'Medium' && trend.growthPotential === 'High' && (
                                                        <div className="absolute ml-[452px] mt-[12px] w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                            {trend.rank}
                                                        </div>
                                                    )}
                                                    {trend.marketMaturity === 'High' && trend.growthPotential === 'Medium' && (
                                                        <div className="absolute ml-[384px] mt-[12px] w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                            {trend.rank}
                                                        </div>
                                                    )}
                                                    {trend.marketMaturity === 'Low' && trend.growthPotential === 'Very High' && (
                                                        <div className="absolute ml-[520px] mt-[12px] w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                            {trend.rank}
                                                        </div>
                                                    )}
                                                    {trend.marketMaturity === 'Low' && trend.growthPotential === 'High' && (
                                                        <div className="absolute ml-[452px] mt-[12px] w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                            {trend.rank}
                                                        </div>
                                                    )}
                                                    {trend.marketMaturity === 'Low' && trend.growthPotential === 'Medium' && (
                                                        <div className="absolute ml-[384px] mt-[12px] w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-medium shadow-sm">
                                                            {trend.rank}
                                                        </div>
                                                    )}

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
                                    {/* This is where you'll insert your radar chart preview */}
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
                            <div className="h-48 bg-gray-50 rounded-md">
                                {/* PLACE YOUR VENDOR RISK ANALYSIS MINI CONTENT HERE */}
                                <div className="w-full h-full opacity-80 p-2">
                                    {/* This is where you'll insert your bar chart preview */}
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
                            <div className="h-48 bg-gray-50 rounded-md">
                                {/* PLACE YOUR BRAND IQ MINI CONTENT HERE */}
                                <div className="w-full h-full opacity-80 p-2">
                                    {/* This is where you'll insert your sentiment analysis preview */}
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

export default StrategicDashboard;