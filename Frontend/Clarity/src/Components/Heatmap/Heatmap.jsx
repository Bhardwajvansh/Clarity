import React, { useState } from 'react';
import { ChevronDown, X, Info, ArrowRight, ArrowUpRight, ArrowDownRight, Download, LightbulbIcon } from 'lucide-react';

export const RetailMegaTrendsHeatmap = () => {
    const [showInfoPanel, setShowInfoPanel] = useState(true);

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

    // Get color for heatmap cell
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

    // Get border color for active cell
    const getCellBorder = (trendMaturity, trendGrowth, cellValue) => {
        if ((trendMaturity === cellValue) || (trendGrowth === cellValue)) {
            return 'border-2 border-blue-600';
        }
        return 'border border-gray-200';
    };

    // Get color for year-over-year indicator
    const getYoyColor = (value) => {
        if (value > 0) return 'text-green-500';
        if (value < 0) return 'text-red-500';
        return 'text-gray-500';
    };

    // Get arrow icon for year-over-year indicator
    const getYoyArrow = (value) => {
        if (value > 0) return <ArrowUpRight size={14} className="inline" />;
        if (value < 0) return <ArrowDownRight size={14} className="inline" />;
        return null;
    };

    const [selectedTrend, setSelectedTrend] = useState(trendData[0]);

    return (
        <div className="flex min-h-screen bg-gray-100">
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

                    {/* Vertical Axis Label */}
                    <div className="grid grid-cols-7">
                        <div className="col-span-2 -rotate-90 origin-top-left absolute mt-32 -ml-10 text-xs text-gray-600 font-medium">
                            Market Maturity →
                        </div>
                    </div>

                    {/* Heatmap Rows */}
                    <div className="mt-4">
                        {trendData.map((trend) => (
                            <div
                                key={trend.id}
                                className={`grid grid-cols-7 mb-4 p-2 rounded-md transition-all duration-150 ${trend.id === selectedTrend.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-blue-50 hover:border hover:border-blue-100 border border-transparent'}`}
                                onClick={() => setSelectedTrend(trend)}
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
                                    <div className={`h-12 w-full rounded ${getCellColor('Very Low')} ${getCellBorder(trend.marketMaturity, trend.growthPotential, 'Very Low')}`}></div>
                                    <div className={`h-12 w-full rounded ${getCellColor('Low')} ${getCellBorder(trend.marketMaturity, trend.growthPotential, 'Low')}`}></div>
                                    <div className={`h-12 w-full rounded ${getCellColor('Medium')} ${getCellBorder(trend.marketMaturity, trend.growthPotential, 'Medium')}`}></div>
                                    <div className={`h-12 w-full rounded ${getCellColor('High')} ${getCellBorder(trend.marketMaturity, trend.growthPotential, 'High')}`}></div>
                                    <div className={`h-12 w-full rounded ${getCellColor('Very High')} ${getCellBorder(trend.marketMaturity, trend.growthPotential, 'Very High')}`}></div>
                                </div>

                                <div className="col-span-2"></div>
                                <div className="col-span-5 mt-2">
                                    <div className="bg-gray-200 h-3 rounded-full w-full border border-gray-300">
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

                    <div className="text-xs text-gray-500 mt-6 border-t border-gray-200 pt-4">
                        Customer Traction shown as horizontal bars
                    </div>

                    {/* Color Legend */}
                    <div className="flex items-center mt-4 space-x-2 p-3 bg-white rounded-md border border-gray-200">
                        <div className="w-4 h-4 bg-blue-50 border border-gray-300 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">Very Low</span>

                        <div className="w-4 h-4 bg-blue-100 border border-gray-300 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">Low</span>

                        <div className="w-4 h-4 bg-blue-200 border border-gray-300 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">Medium</span>

                        <div className="w-4 h-4 bg-blue-300 border border-gray-300 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">High</span>

                        <div className="w-4 h-4 bg-blue-500 border border-gray-300 rounded"></div>
                        <span className="text-xs text-gray-600">Very High</span>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-72 border-l border-gray-200 p-4 bg-white shadow-md m-4 mt-4 rounded-md">
                {showInfoPanel ? (
                    <div className="mb-6 border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-medium">About This Visualization</h4>
                            <button
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setShowInfoPanel(false)}
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">
                            This heatmap plots each mega trend in retail according to two dimensions:
                        </p>
                        <ul className="list-disc list-inside text-xs text-gray-600 mb-3">
                            <li>Horizontal axis: Market maturity (showing potential market size and growth)</li>
                            <li>Vertical axis: Customer traction (current adoption/momentum)</li>
                        </ul>
                        <p className="text-xs text-gray-600">
                            The color intensity indicates the combined score of both factors.
                        </p>
                    </div>
                ) : null}

                <div className="mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-sm font-medium mb-2 text-blue-600">{selectedTrend.name}</h3>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                        {selectedTrend.description || "No description available."}
                    </p>
                </div>

                {selectedTrend.id === 2 && (
                    <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h3 className="text-sm font-medium mb-2 text-gray-700">Strategic Recommendation</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Priority should be given to the top-right quadrant trends where both market opportunity and customer traction are highest
                        </p>
                    </div>
                )}

                {selectedTrend.id === 6 && (
                    <div className="p-4 bg-blue-50 rounded-lg mb-6 border border-blue-200">
                        <h3 className="text-sm font-medium mb-2 flex items-center text-blue-700">
                            <span className="mr-1">Growth Opportunity</span>
                            <ArrowUpRight size={16} className="text-blue-500" />
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            AR/VR Shopping has high market opportunity but lower current traction, suggesting an emerging growth area with significant future potential.
                        </p>
                    </div>
                )}

                <div className="mb-6">
                    <button className="flex items-center justify-center space-x-2 text-xs bg-gray-100 hover:bg-gray-200 transition-colors rounded-md px-4 py-2 w-full border border-gray-300 shadow-sm">
                        <Download size={14} />
                        <span className="font-medium">View Full Report</span>
                    </button>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium mb-3">Year-over-Year Trend Movement</h3>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                        {[
                            { name: 'E-commerce 2.0', change: 4.5 },
                            { name: 'Personalization AI', change: 7.2 },
                            { name: 'Smart Stores', change: -2 }
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-2 text-xs">
                                <span className="text-gray-600 font-medium">{item.name}</span>
                                <span className={`${getYoyColor(item.change)} font-medium`}>
                                    {item.change > 0 ? '+' : ''}{item.change} {getYoyArrow(item.change)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};