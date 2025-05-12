import React, { useState } from 'react';
import { ChevronDown, AlertTriangle, Flag, AlertCircle, DownloadCloud, TrendingDown, TrendingUp, Package, Bot } from 'lucide-react';

export default function VendorRiskAnalysisDashboard() {
    const [selectedVendor, setSelectedVendor] = useState('GlobalParts Inc');
    const financialRiskVendors = [
        { name: 'Denso', risk: 'Medium' },
        { name: 'CATL', risk: 'High' },
        { name: 'Nippon Steel', risk: 'Medium' }
    ];

    const operationalRiskVendors = [
        { name: 'CATL', risk: 'High' },
        { name: 'TSMC', risk: 'High' },
        { name: 'Denso', risk: 'Medium' },
        { name: 'Nippon Steel', risk: 'Low' },
        { name: 'Bosch Mobility Solutions', risk: 'Low' },
        { name: 'ZF Friedrichshafen AG', risk: 'Low' }
    ];

    const complianceRiskVendors = [
        { name: 'CATL', risk: 'High' },
        { name: 'TSMC', risk: 'Medium' },
        { name: 'Bosch Mobility Solutions', risk: 'Low' }
    ];

    const topSuppliers = [
        { name: 'Denso', spend: 5200000, percentage: 35, color: 'bg-red-400' },
        { name: 'CATL', spend: 3100000, percentage: 21, color: 'bg-blue-200' },
        { name: 'TSMC', spend: 2400000, percentage: 16, color: 'bg-green-400' },
        { name: 'Nippon Steel', spend: 1600000, percentage: 11, color: 'bg-purple-400' },
        { name: 'Bosch Mobility Solutions', spend: 1000000, percentage: 7, color: 'bg-teal-400' }
    ];


    const riskTrends = [
        { name: 'Overall Risk Score', change: -12, isPositive: true },
        { name: 'Supply Chain Disruptions', change: 8, isPositive: false },
        { name: 'Financial Stability', change: 0, isPositive: true },
        { name: 'Compliance Issues', change: -24, isPositive: true }
    ];

    const getRiskColor = (risk) => {
        switch (risk) {
            case 'High': return 'bg-red-100 text-red-600';
            case 'Medium': return 'bg-gray-100 text-gray-600';
            case 'Low': return 'bg-green-100 text-green-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex-1 p-6 bg-white shadow-md border border-gray-200 rounded-md m-4">
                <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Vendor Risk Analysis</h1>
                        <h2 className="text-lg font-medium text-gray-700">Supply Chain Risk & Spend Contribution</h2>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                            <DownloadCloud size={16} />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-4 mb-6">
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Risk Category:</span>
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50 transition-colors">
                            <span>All Categories</span>
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

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
                <div className="mb-6">
                    <h3 className="text-base font-medium mb-4">Vendor Risk Factors by Category</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                            <div className="bg-red-500 text-white p-3">
                                <h4 className="text-sm font-medium">Financial Risk</h4>
                                <div className="flex items-center space-x-1">
                                    <span className="text-lg font-medium">5</span>
                                    <span className="text-xs">Vendors</span>
                                </div>
                            </div>
                            <div className="p-3">
                                {financialRiskVendors.map((vendor, index) => (
                                    <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                                        <span className="text-sm">{vendor.name}</span>
                                        <span className={`text-xs px-2 py-1 rounded ${getRiskColor(vendor.risk)}`}>
                                            {vendor.risk}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                            <div className="bg-green-500 text-white p-3">
                                <h4 className="text-sm font-medium">Operational Risk</h4>
                                <div className="flex items-center space-x-1">
                                    <span className="text-lg font-medium">4</span>
                                    <span className="text-xs">Vendors</span>
                                </div>
                            </div>
                            <div className="p-3">
                                {operationalRiskVendors.slice(0, 4).map((vendor, index) => (
                                    <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                                        <span className="text-sm">{vendor.name}</span>
                                        <span className={`text-xs px-2 py-1 rounded ${getRiskColor(vendor.risk)}`}>
                                            {vendor.risk}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                            <div className="bg-blue-500 text-white p-3">
                                <h4 className="text-sm font-medium">Compliance Risk</h4>
                                <div className="flex items-center space-x-1">
                                    <span className="text-lg font-medium">3</span>
                                    <span className="text-xs">Vendors</span>
                                </div>
                            </div>
                            <div className="p-3">
                                {complianceRiskVendors.map((vendor, index) => (
                                    <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                                        <span className="text-sm">{vendor.name}</span>
                                        <span className={`text-xs px-2 py-1 rounded ${getRiskColor(vendor.risk)}`}>
                                            {vendor.risk}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-base font-medium mb-4">Top Suppliers by Spend Contribution</h3>
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        {topSuppliers.map((supplier, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center">
                                        <span className="text-sm">{supplier.name}</span>
                                        {supplier.name === 'GlobalParts Inc' && (
                                            <span className="ml-2 text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                                                32%
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium">
                                        ${(supplier.spend / 1000000).toFixed(1)}M ({supplier.percentage}%)
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`${supplier.color} h-3 rounded-full`}
                                        style={{ width: `${supplier.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center text-xs text-gray-500 mt-4">
                            <Package size={14} className="mr-1" />
                            <span>Showing top 5 suppliers (80% of total spend). 20% distributed among 20 other vendors.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-72 border-l border-gray-200 p-4 bg-white shadow-md m-4 mt-4 rounded-md">
                <div className="flex items-center mb-4">
                    <Package size={18} className="text-blue-600 mr-2" />
                    <h4 className="text-base font-medium">Supply Chain Insights</h4>
                </div>

                <div className="space-y-6">
                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Risk Concentration</h5>
                        <p className="text-xs text-gray-600">
                            32% of total spend is with GlobalParts Inc, which also has high financial and supply risks.
                        </p>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Supply Chain Vulnerability</h5>
                        <p className="text-xs text-gray-600">
                            3 of top 5 suppliers are concentrated in the same geographic region, increasing exposure to regional disruptions.
                        </p>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Risk Mitigation Opportunity</h5>
                        <p className="text-xs text-gray-600">
                            TechSupply Co shows low risk across most categories and could be evaluated for increased allocation.
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
                                    Develop secondary source for GlobalParts Inc components.
                                </p>
                            </div>

                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Implement financial monitoring for high-risk vendors.
                                </p>
                            </div>

                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Consider geographic diversification for key components.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center space-x-1 text-xs bg-white border border-gray-300 hover:bg-gray-50 transition-colors rounded-md px-3 py-2 shadow-sm">
                            <span className="font-medium">Risk Report</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center space-x-1 text-xs bg-gray-800 hover:bg-gray-900 text-white transition-colors rounded-md px-3 py-2 shadow-sm">
                            <span className="font-medium">Mitigation Plan</span>
                        </button>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-medium mb-3">Risk Trend Analysis</h3>
                        <div className="space-y-2">
                            {riskTrends.map((trend, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs">
                                    <span className="text-gray-600">{trend.name}</span>
                                    <div className={trend.isPositive ? 'text-green-500' : 'text-red-500'}>
                                        {trend.change === 0 ? (
                                            <span>− 0%</span>
                                        ) : (
                                            <span className="flex items-center">
                                                {trend.isPositive ? <TrendingDown size={14} className="mr-1" /> : <TrendingUp size={14} className="mr-1" />}
                                                {trend.change > 0 ? '+' : ''}{trend.change}%
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center mb-3">
                            <Bot size={16} className="text-blue-600 mr-2" />
                            <h3 className="text-sm font-medium">AI Risk Alert</h3>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-xs text-gray-700">
                            Our AI has detected potential financial instability signals for GlobalParts Inc based on recent pattern changes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}