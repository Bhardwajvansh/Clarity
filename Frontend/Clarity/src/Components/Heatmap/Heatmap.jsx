import React, { useState } from 'react';
import { ChevronDown, X, Info, ArrowRight, ArrowUpRight, ArrowDownRight, Download, LightbulbIcon } from 'lucide-react';

export const RetailMegaTrendsHeatmap = () => {
    const [showInfoPanel, setShowInfoPanel] = useState(true);
    const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
    const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

    const [selectedTime, setSelectedTime] = useState('Last 12 Months');
    const [selectedRegion, setSelectedRegion] = useState('Global');

    const timeOptions = [
        'Last 12 Months',
        'Last 2 Years',
        'Last 5 Years',
    ];

    const regionOptions = [
        'Global',
        'North America',
        'Europe',
        'Asia Pacific',
        'Latin America',
        'Middle East & Africa'
    ];

    const toggleTimeDropdown = () => {
        setTimeDropdownOpen(!timeDropdownOpen);
        if (!timeDropdownOpen) setRegionDropdownOpen(false);
    };

    const toggleRegionDropdown = () => {
        setRegionDropdownOpen(!regionDropdownOpen);
        if (!regionDropdownOpen) setTimeDropdownOpen(false);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setTimeDropdownOpen(false);
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setRegionDropdownOpen(false);
    };

    const closeDropdowns = () => {
        setTimeDropdownOpen(false);
        setRegionDropdownOpen(false);
    };


    const trendData = [
        {
            id: 1,
            name: 'Electric Vehicles (EVs)',
            rank: 1,
            marketMaturity: 'Very High',
            growthPotential: 'High',
            percentage: 95,
            description: 'Electric Vehicles are showing the highest market maturity with significant global adoption.',
            yearOverYearChange: 6.2,
            comments: 'Mass adoption, strong regulatory support, and OEM investment'
        },
        {
            id: 2,
            name: 'Software-Defined Vehicles (SDV)',
            rank: 2,
            marketMaturity: 'High',
            growthPotential: 'Very High',
            percentage: 88,
            description: 'Software-defined vehicles represent the convergence of automotive and tech industries.',
            yearOverYearChange: 9.1,
            comments: 'Vehicle OS platforms, OTA updates, and AI/ML in-vehicle'
        },
        {
            id: 3,
            name: 'Autonomous Driving (ADAS/AV)',
            rank: 3,
            marketMaturity: 'Medium',
            growthPotential: 'Very High',
            percentage: 74,
            description: 'Autonomous driving technologies continue to advance despite regulatory challenges.',
            yearOverYearChange: 5.3,
            comments: 'Advanced pilots, but full autonomy still in limited deployment'
        },
        {
            id: 4,
            name: 'Connected Car Ecosystem',
            rank: 4,
            marketMaturity: 'High',
            growthPotential: 'High',
            percentage: 82,
            description: 'Connected car technologies are becoming standard features across vehicle segments.',
            yearOverYearChange: 3.7,
            comments: 'Telematics, V2X, and data monetization surging'
        },
        {
            id: 5,
            name: 'Sustainable Manufacturing',
            rank: 5,
            marketMaturity: 'Medium',
            growthPotential: 'High',
            percentage: 71,
            description: 'Sustainable manufacturing practices are gaining momentum as environmental concerns grow.',
            yearOverYearChange: 4.5,
            comments: 'Circular supply chains, low-carbon factories rising'
        },
        {
            id: 6,
            name: 'Mobility-as-a-Service (MaaS)',
            rank: 6,
            marketMaturity: 'Medium',
            growthPotential: 'High',
            percentage: 69,
            description: 'Mobility services are transforming urban transportation models.',
            yearOverYearChange: 2.8,
            comments: 'Urban pilots, shifting from ownership to access'
        },
        {
            id: 7,
            name: 'Hydrogen Vehicles (Fuel Cell)',
            rank: 7,
            marketMaturity: 'Low-Medium',
            growthPotential: 'Medium',
            percentage: 58,
            description: 'Hydrogen fuel cell vehicles represent a long-term alternative to battery EVs.',
            yearOverYearChange: 3.2,
            comments: 'Niche but strategic in commercial and long-haul segments'
        },
        {
            id: 8,
            name: 'Battery Tech Innovation',
            rank: 8,
            marketMaturity: 'High',
            growthPotential: 'Very High',
            percentage: 85,
            description: 'Battery technology innovations are critical to EV adoption and performance.',
            yearOverYearChange: 7.5,
            comments: 'Solid-state R&D, range improvements, cost reduction ongoing'
        },
        {
            id: 9,
            name: 'Over-the-Air (OTA) Updates',
            rank: 9,
            marketMaturity: 'High',
            growthPotential: 'Medium',
            percentage: 83,
            description: 'OTA updates are transforming vehicle maintenance and feature deployment.',
            yearOverYearChange: 5.6,
            comments: 'Becoming standard for infotainment and safety updates'
        },
        {
            id: 10,
            name: 'Vehicle Cybersecurity',
            rank: 10,
            marketMaturity: 'Medium',
            growthPotential: 'High',
            percentage: 67,
            description: 'Vehicle cybersecurity is becoming a critical focus area as vehicles become more connected.',
            yearOverYearChange: 8.4,
            comments: 'Regulatory and safety pressures driving market acceleration'
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

    // Check if cell should show rank number
    const shouldShowRank = (trend, maturity, growth) => {
        return (trend.growthPotential === growth);
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

    // Sort trend data based on selected time and region
    const getSortedTrendData = () => {
        // Example logic: sort by percentage for "Last 12 Months", by yearOverYearChange for "Last 2 Years", by rank for "Last 5 Years"
        // You can customize this logic as needed or connect to real data
        let sorted = [...trendData];
        if (selectedTime === "Last 12 Months") {
            sorted.sort((a, b) => b.percentage - a.percentage);
        } else if (selectedTime === "Last 2 Years") {
            sorted.sort((a, b) => b.yearOverYearChange - a.yearOverYearChange);
        } else if (selectedTime === "Last 5 Years") {
            sorted.sort((a, b) => a.rank - b.rank);
        }
        // Optionally, region can further affect sorting (e.g., reverse for a specific region)
        if (selectedRegion === "Asia Pacific") {
            sorted.reverse();
        }
        return sorted;
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex-1 p-6 bg-white shadow-md border border-gray-200 rounded-md m-4">
                <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Sector Analysis</h1>
                        <h2 className="text-lg font-medium text-gray-700">Automobile Mega Trends Heatmap</h2>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="bg-yellow-100 p-2 rounded-full border border-yellow-200">
                            <LightbulbIcon size={18} className="text-yellow-500" />
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4 mb-6 mt-4">
                    <div className="relative">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Time Period:</span>
                            <button
                                onClick={toggleTimeDropdown}
                                className="flex items-center justify-between w-48 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors"
                            >
                                <span>{selectedTime}</span>
                                <ChevronDown size={16} className={`transition-transform ${timeDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>

                        {timeDropdownOpen && (
                            <div className="absolute mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                <ul className="py-1">
                                    {timeOptions.map((option) => (
                                        <li
                                            key={option}
                                            className={`px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 ${selectedTime === option ? 'bg-blue-100' : ''}`}
                                            onClick={() => handleTimeSelect(option)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Region Dropdown */}
                    <div className="relative">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Region:</span>
                            <button
                                onClick={toggleRegionDropdown}
                                className="flex items-center justify-between w-48 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors"
                            >
                                <span>{selectedRegion}</span>
                                <ChevronDown size={16} className={`transition-transform ${regionDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>

                        {regionDropdownOpen && (
                            <div className="absolute mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                <ul className="py-1">
                                    {regionOptions.map((option) => (
                                        <li
                                            key={option}
                                            className={`px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 ${selectedRegion === option ? 'bg-blue-100' : ''}`}
                                            onClick={() => handleRegionSelect(option)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {(timeDropdownOpen || regionDropdownOpen) && (
                        <div
                            className="fixed inset-0 z-0"
                            onClick={closeDropdowns}
                        />
                    )}

                    <div className="ml-auto">
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                            <Download size={16} />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                <div className="mb-4 border-b border-gray-200 pb-2">
                    <h3 className="text-base font-medium">Top 10 Mega Trends in Automobile</h3>
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
                        {getSortedTrendData().map((trend, index) => (
                            <div
                                key={trend.id}
                                className={`grid grid-cols-7 mb-4 p-2 rounded-md transition-all duration-150 ${trend.id === selectedTrend.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-blue-50 hover:border hover:border-blue-100 border border-transparent'}`}
                                onClick={() => setSelectedTrend(trend)}
                                role="button"
                            >
                                <div className="col-span-2 flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs mr-2 shadow-sm">
                                        {index + 1}
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

                    <div className="text-xs text-gray-500 mt-6 border-t border-gray-200 pt-4">
                        Customer Traction shown as horizontal bars
                    </div>

                    {/* Color Legend */}
                    <div className="flex items-center mt-4 space-x-2 p-3 bg-white rounded-md border border-gray-200">
                        <div className="w-4 h-4 bg-blue-50 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">Very Low</span>

                        <div className="w-4 h-4 bg-blue-100 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">Low</span>

                        <div className="w-4 h-4 bg-blue-200 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">Medium</span>

                        <div className="w-4 h-4 bg-blue-300 rounded"></div>
                        <span className="text-xs text-gray-600 mr-2">High</span>

                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
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
                            This heatmap plots each mega trend in Automobile according to two dimensions:
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
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                        Comment: {selectedTrend.comments || "No description available."}
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
                    <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                        <button className="flex items-center justify-center space-x-2 text-xs bg-gray-100 hover:bg-gray-200 transition-colors rounded-md px-4 py-2 w-full border border-gray-300 shadow-sm">
                            <Download size={14} />
                            <span className="font-medium">View Full Report</span>
                        </button>
                    </a>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium mb-3">Year-over-Year Trend Movement</h3>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                        {[
                            { name: 'Electric Vehicles (EVs)', change: 4.5 },
                            { name: 'Autonomous Driving (ADAS/AV)', change: 7.2 },
                            { name: 'Software-Defined Vehicles (SDV)', change: -2 }
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
