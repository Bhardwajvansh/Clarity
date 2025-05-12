import React, { useState } from 'react';
import { ChevronDown, Download, AlertTriangle, FileText, LightbulbIcon } from 'lucide-react';

export const KeyAccountsMatrix = () => {
    const accountData = [
        { id: 'GM', name: 'GlobalMart', value: 7500000, potential: 4.2, revenue: 9800000, health: 'Healthy' },
        { id: 'TC', name: 'TechWorld', value: 6200000, potential: 4.5, revenue: 8200000, health: 'Healthy' },
        { id: 'DS', name: 'DataSystems', value: 4800000, potential: 4.1, revenue: 5800000, health: 'Medium' },
        { id: 'EC', name: 'ECommerce Inc', value: 2900000, potential: 2.8, revenue: 3700000, health: 'At Risk' },
        { id: 'FC', name: 'FoodCo', value: 1500000, potential: 2.7, revenue: 2600000, health: 'Healthy' },
        { id: 'LP', name: 'LogiPartners', value: 900000, potential: 1.9, revenue: 1500000, health: 'Medium' }
    ];
    const [timePeriod, setTimePeriod] = useState('Current Quarter');
    const [accountType, setAccountType] = useState('All Accounts');
    const [accountFilter, setAccountFilter] = useState('all');
    const getHealthColor = (status) => {
        switch (status) {
            case 'Healthy': return 'bg-green-500';
            case 'Medium': return 'bg-yellow-500';
            case 'At Risk': return 'bg-gray-300';
            default: return 'bg-gray-300';
        }
    };
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

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mx-auto">
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-800">Key Accounts</h1>
                    <h2 className="text-lg font-medium text-gray-700 mt-1 border-b-2 border-green-500 inline-block pb-1">Account Value & Potential Matrix</h2>
                </div>

                <div className="flex flex-wrap justify-between items-center mb-6">
                    <div className="flex space-x-4">
                        <div className="relative">
                            <label className="text-sm text-gray-600 mb-1 block">Time Period:</label>
                            <div className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-2 shadow-sm hover:bg-gray-50 transition-colors">
                                <span>{timePeriod}</span>
                                <ChevronDown size={16} />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-sm text-gray-600 mb-1 block">Account Type:</label>
                            <div className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-2 shadow-sm hover:bg-gray-50 transition-colors">
                                <span>{accountType}</span>
                                <ChevronDown size={16} />
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-2 shadow-sm hover:bg-gray-50 transition-colors">
                        <Download size={16} />
                        <span>Export</span>
                    </button>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/4 pr-0 lg:pr-6">
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
                                    <span className="text-sm font-medium text-gray-700">{account.name}</span>
                                </div>
                            ))}
                            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                                Account Potential ($)
                            </div>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                                Account Value ($)
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-6 mt-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="all-accounts"
                                    name="account-filter"
                                    className="mr-2"
                                    checked={accountFilter === 'all'}
                                    onChange={() => setAccountFilter('all')}
                                />
                                <label htmlFor="all-accounts" className="text-xs text-gray-600">Primary Accounts</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="secondary-accounts"
                                    name="account-filter"
                                    className="mr-2"
                                    checked={accountFilter === 'secondary'}
                                    onChange={() => setAccountFilter('secondary')}
                                />
                                <label htmlFor="secondary-accounts" className="text-xs text-gray-600">Secondary Accounts</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="tertiary-accounts"
                                    name="account-filter"
                                    className="mr-2"
                                    checked={accountFilter === 'tertiary'}
                                    onChange={() => setAccountFilter('tertiary')}
                                />
                                <label htmlFor="tertiary-accounts" className="text-xs text-gray-600">Tertiary Accounts</label>
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2 text-center">
                            Bubble size represents account revenue
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
                        <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                            <div className="flex items-center mb-3">
                                <LightbulbIcon size={16} className="text-yellow-500 mr-2" />
                                <h3 className="text-sm font-medium text-gray-700">Key Account Insights</h3>
                            </div>

                            <div className="mb-4">
                                <div className="text-sm text-gray-600">Total Account Value</div>
                                <div className="flex items-baseline justify-between">
                                    <div className="text-xl font-bold text-gray-800">$23.6M</div>
                                    <div className="text-xs text-green-600 flex items-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 19V5M5 12l7-7 7 7" />
                                        </svg>
                                        <span>12% increase from last quarter</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 border-t border-gray-200 pt-4">
                                <div className="text-sm text-gray-600">Untapped Potential</div>
                                <div className="flex items-baseline justify-between">
                                    <div className="text-xl font-bold text-gray-800">$7.6M</div>
                                    <div className="text-xs text-blue-600">
                                        <a href="#" className="underline">Across all key accounts</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4 mb-4">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Strategic Recommendations</h3>

                            <div className="mb-3">
                                <div className="flex items-start">
                                    <div className="mt-1 mr-2 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-gray-600">Focus on expanding TechWorld relationship with new product offers</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="flex items-start">
                                    <div className="mt-1 mr-2 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-gray-600">Develop action plan to capture GlobalMart's high potential</p>
                                </div>
                            </div>

                            <div className="mb-1">
                                <div className="flex items-start">
                                    <div className="mt-1 mr-2 text-red-500">
                                        <AlertTriangle size={16} />
                                    </div>
                                    <p className="text-xs text-gray-600">Evaluate ECommerce Inc relationship – declining value</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <button className="flex items-center justify-center space-x-2 text-sm bg-gray-100 hover:bg-gray-200 transition-colors rounded-md px-4 py-2 w-full border border-gray-300 shadow-sm">
                                <FileText size={14} />
                                <span>Account Report</span>
                            </button>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Account Health Indicators</h3>

                            {[
                                { name: 'TechWorld', health: 'Healthy', percentage: 85 },
                                { name: 'GlobalMart', health: 'Healthy', percentage: 90 },
                                { name: 'ECommerce Inc', health: 'At Risk', percentage: 30 },
                                { name: 'FoodCo', health: 'Healthy', percentage: 75 }
                            ].map((account, index) => (
                                <div key={index} className="mb-3">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs text-gray-600">{account.name}</span>
                                        <span className={`text-xs ${account.health === 'Healthy' ? 'text-green-600' : account.health === 'At Risk' ? 'text-gray-500' : 'text-yellow-600'}`}>
                                            {account.health}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${getHealthColor(account.health)}`}
                                            style={{ width: `${account.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};