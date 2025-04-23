import React, { useState, useEffect } from 'react';
import { Home, BarChart2, Zap, Bell, Settings, Search, MoreHorizontal, ChevronDown, Hexagon, PieChart, AlertTriangle } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter, ZAxis } from 'recharts';
import { useNavigate } from 'react-router-dom';

export const StrategicDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [animate, setAnimate] = useState(false);
    const radarData = [
        { subject: 'Quality', A: 120, B: 110, fullMark: 150 },
        { subject: 'Price', A: 98, B: 130, fullMark: 150 },
        { subject: 'Service', A: 86, B: 130, fullMark: 150 },
        { subject: 'Innovation', A: 99, B: 100, fullMark: 150 },
        { subject: 'Reliability', A: 85, B: 90, fullMark: 150 },
        { subject: 'Support', A: 65, B: 85, fullMark: 150 },
    ];

    const scatterData = [
        { x: 70, y: 50, z: 100, name: 'Client A' },
        { x: 30, y: 80, z: 100, name: 'Client B' },
    ];

    const vendorData = [
        { name: 'Vendor A', risk: 75 },
        { name: 'Vendor B', risk: 45 },
        { name: 'Vendor C', risk: 65 },
        { name: 'Vendor D', risk: 90 },
        { name: 'Vendor E', risk: 30 },
    ];

    const sentimentData = [
        { name: 'Brand A', value: 70, color: '#FF6B6B' },
        { name: 'Brand B', value: 90, color: '#4ECDC4' },
        { name: 'Brand C', value: 80, color: '#FFD166' },
        { name: 'Brand D', value: 40, color: '#FF6B6B' },
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
                <div className={` transition-opacity duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        onClick={() => navigate('/mtheatmap')}
                        className="bg-white cursor-pointer border-t-4 border-blue-500 rounded-lg shadow-sm mb-6 p-4 hover:shadow-lg transition-shadow duration-200">
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
                        <div className="flex h-56 bg-gray-50 rounded-md">
                            <div className="flex-1 flex items-center justify-center">
                                <Hexagon className="text-gray-800" size={36} />
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <BarChart2 className="text-gray-800" size={36} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div
                            onClick={() => navigate('/kaccounts')}
                            className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-base font-semibold">Key Accounts</h3>
                                    <p className="text-xs text-gray-500">Account Value & Potential Matrix</p>
                                </div>
                                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <ScatterChart
                                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" dataKey="x" name="value" />
                                        <YAxis type="number" dataKey="y" name="potential" />
                                        <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" />
                                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                        <Scatter name="Accounts" data={scatterData} fill="#8884d8" />
                                        <Scatter name="Accounts" data={[{ x: 30, y: 30, z: 100, name: 'Client C' }]} fill="#82ca9d" />
                                    </ScatterChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div
                            onClick={() => navigate('/canalysis')}
                            className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-orange-400 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-base font-semibold">Competitor Analysis</h3>
                                    <p className="text-xs text-gray-500">Service & Client Alignment RADAR</p>
                                </div>
                                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                        <Radar name="Competitor" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                                        <Radar name="Your Company" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div
                            onClick={() => navigate('/vendorrisk')}
                            className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-gray-500 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-base font-semibold">Vendor Risk Analysis</h3>
                                    <p className="text-xs text-gray-500">Risk Factors & Spend Contribution</p>
                                </div>
                                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={vendorData}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="risk" fill="#d1d5db" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="bg-white cursor-pointer rounded-lg shadow-sm p-4 border-t-4 border-red-500 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-base font-semibold">Brand IQ</h3>
                                    <p className="text-xs text-gray-500">News Sentiment Analysis</p>
                                </div>
                                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>
                            <div className="h-48 flex items-end justify-center space-x-6">
                                {sentimentData.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div
                                            className="w-16 rounded-t-lg transition-all duration-1000"
                                            style={{
                                                height: `${item.value}px`,
                                                backgroundColor: item.color,
                                                opacity: animate ? 1 : 0,
                                                transform: animate ? 'translateY(0)' : 'translateY(20px)'
                                            }}
                                        ></div>
                                        <p className="text-xs mt-2">{item.name}</p>
                                    </div>
                                ))}
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