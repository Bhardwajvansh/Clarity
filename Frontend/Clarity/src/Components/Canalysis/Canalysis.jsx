import React, { useState } from 'react';
import { ChevronDown, Download, Info, Star, Award, Users, ArrowUp, ArrowDown, ShieldAlert, TrendingUp, Target, GitMerge } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

export default function CompetitorAnalysisDashboard() {
    const [selectedCompetitor, setSelectedCompetitor] = useState('Kia');
    const competitorData = [
        { name: 'Kia', x: 55, y: 65, color: '#2563eb' },
        { name: 'Tesla ', x: 85, y: 75, color: '#10b981' },
        { name: 'Audi ', x: 65, y: 45, color: '#f59e0b' },
        { name: 'Hyundai ', x: 35, y: 35, color: '#ef4444' },
    ];
    const threatAssessmentData = [
        {
            name: 'Kia',
            marketShare: 28,
            status: 'High',
            statusColor: 'bg-red-500',
            growth: '+3.5%'
        },
        {
            name: 'Tesla',
            marketShare: 18,
            status: 'Medium',
            statusColor: 'bg-yellow-500',
            growth: '-1.2%'
        },
        {
            name: 'Audi',
            marketShare: 15,
            status: 'Medium',
            statusColor: 'bg-yellow-500',
            growth: null
        },
        {
            name: 'Hyundai',
            marketShare: 12,
            status: 'Emerging',
            statusColor: 'bg-orange-400',
            growth: '+68%'
        },
    ];
    const movementData = [
        { name: 'Tesla', growth: '+3.5%', color: 'text-green-500', isUp: true },
        { name: 'Kia', growth: '-1.2%', color: 'text-red-500', isUp: false },
        { name: 'Audi', growth: 'New Entrant', color: 'text-blue-500', isUp: true },
        { name: 'Hyundai', growth: '+1.8%', color: 'text-green-500', isUp: true }
    ];
    const getQuadrantName = (x, y) => {
        if (x > 50 && y > 50) return 'Market Leaders';
        if (x > 50 && y <= 50) return 'Service Innovators';
        if (x <= 50 && y > 50) return 'Client Centric';
        return 'Commodity Players';
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex-1 p-6 bg-white shadow-md border border-gray-200 rounded-md m-4">
                <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Competitor Analysis</h1>
                        <h2 className="text-lg font-medium text-gray-700">Service & Client Alignment RADAR</h2>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                            <Download size={16} />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-4 mb-6">
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Industry:</span>
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                            <span>Retail</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Time Period:</span>
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                            <span>Current Quarter</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
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
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
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
                                        className={`absolute rounded-full flex items-center justify-center border-2 bg-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
                                        style={{
                                            width: `15px`,
                                            height: `15px`,
                                            left: posX,
                                            top: posY,
                                            borderColor: comp.color,
                                        }}
                                    >
                                        <span className="text-sm font-medium opacity-80 text-gray-700 mt-5">{comp.name}</span>
                                    </div>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <h3 className="text-base font-medium mb-4">Competitive Threat Assessment</h3>
                        <div className="space-y-4">
                            {threatAssessmentData.map((comp, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="w-32 text-sm font-medium">{comp.name}</div>
                                    <div className="flex-1 mx-2">
                                        <div className="bg-gray-200 h-4 rounded-full relative">
                                            <div
                                                className={`h-4 rounded-full ${comp.statusColor}`}
                                                style={{ width: `${comp.marketShare}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="w-20 text-xs">Market Share: {comp.marketShare}%</div>
                                    <div className={`w-20 text-xs px-2 py-1 rounded ${comp.status === 'High' ? 'bg-red-100 text-red-700' :
                                        comp.status === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-orange-100 text-orange-700'
                                        }`}>
                                        {comp.status}
                                    </div>
                                    {comp.growth && (
                                        <div className={`w-16 text-xs ${comp.growth.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                                            {comp.growth.includes('+') ? <ArrowUp size={12} className="inline mr-1" /> : <ArrowDown size={12} className="inline mr-1" />}
                                            {comp.growth}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <div className="mb-6">
                            <h3 className="text-base font-medium mb-4">Competitive Movement (Last 12 Months)</h3>
                            <div className="space-y-3">
                                {movementData.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-sm">{item.name}</span>
                                        <span className={`${item.color} flex items-center text-sm font-medium`}>
                                            {item.isUp ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
                                            {item.growth}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex items-center mb-3">
                                <ShieldAlert size={16} className="text-blue-600 mr-2" />
                                <h3 className="text-base font-medium">AI Detection Alert</h3>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
                                Our AI has detected 2 potential new market entrants in your space. Click to analyze their potential impact.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-72 border-l border-gray-200 p-4 bg-white shadow-md m-4 mt-4 rounded-md">
                <div className="flex items-center mb-4">
                    <Target size={18} className="text-blue-600 mr-2" />
                    <h4 className="text-base font-medium">Competitive Insights</h4>
                </div>

                <div className="space-y-6">
                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Primary Threat</h5>
                        <p className="text-xs text-gray-600">
                            Innovate Corp maintains leadership in service innovation and is expanding client engagement efforts with new enterprise solutions.
                        </p>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Emerging Challenger</h5>
                        <p className="text-xs text-gray-600">
                            TechDisruptor is rapidly gaining market share with their innovative service model and should be closely monitored.
                        </p>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Competitive Advantage</h5>
                        <p className="text-xs text-gray-600">
                            Your company maintains a balanced portfolio of strengths across all four dimensions, while competitors tend to excel in only one or two areas.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-sm font-medium mb-3">Strategic Recommendations</h5>
                        <div className="space-y-2">
                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Enhance service innovation to maintain leadership against Innovate Corp.
                                </p>
                            </div>

                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Develop counter-strategy for TechDisruptor's digital offerings.
                                </p>
                            </div>

                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Consider partnership with Premium Tech to strengthen niche market presence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <button className="flex items-center justify-center space-x-2 text-xs bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md px-4 py-2 w-full shadow-sm">
                            <Download size={14} />
                            <span className="font-medium">Detailed Competitor Report</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}