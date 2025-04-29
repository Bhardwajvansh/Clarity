import React from 'react'
import { useState } from 'react'
import { BarChart2, TrendingUp } from 'lucide-react'
import { Search, Plus, Filter, ArrowUpRight, ChevronDown, MoreHorizontal, AlertCircle, Database, BarChart, LineChart, Bell } from 'lucide-react';
import { Info, ExternalLink, ChevronRight, Lightbulb, BookOpen, Users } from 'lucide-react';


export const Acciq = () => {
    const [activeTab, setActiveTab] = useState("Customer Dashboard");
    const [showMoreDecisionMakers, setShowMoreDecisionMakers] = useState(false);
    const [accounts, setAccounts] = useState([
        {
            id: 1,
            initial: 'B',
            company: 'Brex',
            description: 'Financial Services',
            industry: 'Financial Technology',
            score: 85,
            recentActivity: {
                type: 'Financial Update',
                details: '$235M Credit Facility'
            }
        },
        {
            id: 2,
            initial: 'W',
            company: 'Walmart',
            description: 'Retail',
            industry: 'Retail Giant',
            score: 92,
            recentActivity: {
                type: 'Product Update',
                details: 'Launched supplier program'
            }
        },
        {
            id: 3,
            initial: 'C',
            company: 'Canva',
            description: 'Design Software',
            industry: 'Creative Technology',
            score: 78,
            recentActivity: {
                type: 'Executive Event',
                details: 'CTO product appearance'
            }
        }
    ]);


    const CustomerIntelligenceReport = () => {
        return (
            <div className="bg-gray-50 min-h-screen p-4 font-sans">
                <h1 className="text-indigo-600 text-2xl font-bold mb-1">Customer Intelligence Report</h1>
                <p className="text-gray-500 text-sm mb-6">Detailed view of customer insights, activities, and key contacts after clicking on an account</p>
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="bg-gray-800 text-white h-10 w-10 rounded flex items-center justify-center mr-3">
                                <span className="font-bold">B</span>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">Brex</h2>
                                <p className="text-gray-500 text-sm">Corporate Cards & Financial Technology</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded flex items-center">
                                <span>Contact</span>
                            </button>
                            <button className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded flex items-center">
                                <span>Save</span>
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-2 py-2 rounded">
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg">Latest Financial Updates</h3>
                                <a href="#" className="text-indigo-600 text-sm">View all</a>
                            </div>
                            <div className="bg-white rounded-lg shadow mb-4">
                                <div className="p-4">
                                    <div className="flex items-center mb-1">
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">Financial Update</span>
                                        <span className="text-gray-500 text-xs">January 15, 2025</span>
                                    </div>
                                    <h4 className="font-bold mb-2">Secured $235M Credit Facility For Card Expansion</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Brex has secured a $235 million revolving credit facility to enhance its corporate card offerings. This strategic move aims to strengthen Brex's capital position and accelerate its growth trajectory in corporate cards and aid with payment infrastructure.
                                    </p>
                                    <div className="flex space-x-3 text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <ExternalLink size={14} className="mr-1" />
                                            <span>Finance Globed</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Info size={14} className="mr-1" />
                                            <span>PR Newswire</span>
                                        </div>
                                        <div className="flex items-center">
                                            <ChevronRight size={14} className="mr-1" />
                                            <span>FINANCE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow">
                                <div className="p-4">
                                    <div className="flex items-center mb-1">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">Team Update</span>
                                        <span className="text-gray-500 text-xs">January 17, 2025</span>
                                    </div>
                                    <h4 className="font-bold mb-2">Reorganized Design Team Structure</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Brex has announced a reorganization of their design team structure to better align with their product development goals and customer experience priorities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Why It Matters for Slack</h3>
                            <div className="bg-white rounded-lg shadow p-4">
                                <div className="mb-6">
                                    <div className="flex items-start mb-2">
                                        <div className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">1</div>
                                        <div>
                                            <h4 className="font-bold">Indicates a focus on scaling operations and product growth</h4>
                                            <p className="text-gray-600 text-sm">
                                                The secured credit facility is aimed at expanding Brex's corporate card offerings and financial infrastructure efforts.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-start mb-2">
                                        <div className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">2</div>
                                        <div>
                                            <h4 className="font-bold">Supports an expansion of global operations</h4>
                                            <p className="text-gray-600 text-sm">
                                                The capital enables the expansion of global corporate card offerings, indicating a push towards international markets.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-start mb-2">
                                        <div className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">3</div>
                                        <div>
                                            <h4 className="font-bold">Slack can help enhance team collaboration efficiency across different geographies</h4>
                                            <p className="text-gray-600 text-sm">
                                                Supporting Brex's global expansion efforts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Key Decision Makers</h3>
                            <div className="space-y-3">
                                <div className="bg-white rounded-lg shadow p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-indigo-100 text-indigo-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                                <span className="font-bold">LC</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Lloyd C.</h4>
                                                <p className="text-gray-500 text-xs">Head of Information Technology</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-purple-100 text-purple-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                                <span className="font-bold">PS</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Page Sanchez</h4>
                                                <p className="text-gray-500 text-xs">Director, Marketing Experience</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-pink-100 text-pink-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                                <span className="font-bold">CM</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Camila Matias</h4>
                                                <p className="text-gray-500 text-xs">Chief Operating Officer</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </div>

                                <button
                                    className="text-indigo-600 text-sm flex items-center justify-center w-full"
                                    onClick={() => setShowMoreDecisionMakers(!showMoreDecisionMakers)}
                                >
                                    Show more ({showMoreDecisionMakers ? 'less' : '3'})
                                    <ChevronDown size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg">AI Insights</h3>
                                <button className="bg-indigo-600 text-white text-xs px-3 py-1 rounded">
                                    Ask AI
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-start">
                                        <div className="bg-indigo-100 p-2 rounded mr-3">
                                            <Lightbulb size={20} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Growth Opportunity</h4>
                                            <p className="text-gray-600 text-xs">
                                                The $235M credit facility suggests Brex is preparing for significant expansion. This presents an opportunity to position your product as a scalability enabler for their growth plans.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-start">
                                        <div className="bg-indigo-100 p-2 rounded mr-3">
                                            <Users size={20} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Contact Strategy</h4>
                                            <p className="text-gray-600 text-xs">
                                                Lloyd C. as Head of IT will be instrumental in technology integration decisions as Brex expands globally. Recommended contact with both Lloyd and Camila to address operational capabilities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Database size={20} className="text-indigo-600 mr-2" />
                            <h3 className="font-bold">Comprehensive Company View</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Detailed intelligence reports combine financial data from updates and strategy moves in a single unified interface.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Users size={20} className="text-purple-600 mr-2" />
                            <h3 className="font-bold">Key Decision Maker Profiles</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Automatically identify and highlight decision makers with direct contact information and roles.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Lightbulb size={20} className="text-green-600 mr-2" />
                            <h3 className="font-bold">AI-Driven Opportunity Insights</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Intelligent algorithms analyze customer data to deliver actionable sales opportunities and outreach recommendations.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const CustomerDashboard = () => {
        return (
            <div className="bg-gray-50 min-h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600 mb-1">Customer Dashboard</h1>
                    <p className="text-gray-600 mb-6 text-sm">The main view of the AccountIQ module providing a comprehensive overview of all customer accounts</p>
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-2">
                            <button className="bg-indigo-600 text-white px-3 py-2 rounded flex items-center text-sm">
                                <Plus size={16} className="mr-1" /> Add Account
                            </button>
                            <button className="bg-white border border-gray-300 px-3 py-2 rounded flex items-center text-sm">
                                <Filter size={16} className="mr-1" /> Filters
                            </button>
                            <button className="bg-white border border-gray-300 px-3 py-2 rounded flex items-center text-sm">
                                <BarChart size={16} className="mr-1" /> Sort
                            </button>
                        </div>
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search accounts"
                                className="pl-9 pr-4 py-2 border border-gray-300 rounded w-64"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">Total Accounts</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">234</div>
                                <div className="bg-blue-100 p-1 rounded">
                                    <Database size={16} className="text-blue-600" />
                                </div>
                            </div>
                            <div className="text-green-500 text-xs flex items-center mt-2">
                                <ArrowUpRight size={12} className="mr-1" /> 12% increase
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">Active Opportunities</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">58</div>
                                <div className="bg-purple-100 p-1 rounded">
                                    <BarChart size={16} className="text-purple-600" />
                                </div>
                            </div>
                            <div className="text-red-500 text-xs flex items-center mt-2">
                                <ArrowUpRight size={12} className="mr-1" /> 5% decrease
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">Market Potential</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">$1.2B</div>
                                <div className="bg-green-100 p-1 rounded">
                                    <LineChart size={16} className="text-green-600" />
                                </div>
                            </div>
                            <div className="text-green-500 text-xs flex items-center mt-2">
                                <ArrowUpRight size={12} className="mr-1" /> 8% growth
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">AI Insights</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">42</div>
                                <div className="bg-yellow-100 p-1 rounded">
                                    <AlertCircle size={16} className="text-yellow-600" />
                                </div>
                            </div>
                            <div className="text-blue-500 text-xs flex items-center mt-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div> 7 new this week
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-300 shadow-sm mb-6 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs uppercase text-gray-500 bg-gray-50 border-b border-gray-300">
                                    <th className="px-6 py-3">Company</th>
                                    <th className="px-6 py-3">Industry</th>
                                    <th className="px-6 py-3">Score</th>
                                    <th className="px-6 py-3">Recent Activity</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map(account => (
                                    <tr key={account.id} className="border-b border-gray-300">
                                        <td className="px-6 py-4 flex items-center">
                                            <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${account.initial === 'B' ? 'bg-indigo-600' :
                                                account.initial === 'W' ? 'bg-purple-600' : 'bg-blue-600'
                                                }`}>
                                                {account.initial}
                                            </div>
                                            <div className="ml-3">
                                                <div className="font-medium">{account.company}</div>
                                                <div className="text-xs text-gray-500">{account.description}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">{account.industry}</td>
                                        <td className="px-6 py-4">
                                            <div className="w-24">
                                                <div className="h-2 w-full bg-gray-200 rounded-full">
                                                    <div
                                                        className={`h-2 rounded-full ${account.score > 90 ? 'bg-green-500' :
                                                            account.score > 80 ? 'bg-green-500' : 'bg-green-500'
                                                            }`}
                                                        style={{ width: `${account.score}%` }}
                                                    ></div>
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">{account.score}/100</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`text-xs px-2 py-1 rounded inline-block ${account.recentActivity.type === 'Financial Update' ? 'bg-blue-100 text-blue-700' :
                                                account.recentActivity.type === 'Product Update' ? 'bg-green-100 text-green-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {account.recentActivity.type}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">{account.recentActivity.details}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center">
                                                <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded">
                                                    <AlertCircle size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:bg-gray-50 rounded ml-2">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4 mb-6 border border-indigo-100">
                        <div className="flex items-center mb-2">
                            <div className="bg-indigo-100 p-1 rounded-full">
                                <AlertCircle size={16} className="text-indigo-600" />
                            </div>
                            <span className="ml-2 font-medium text-indigo-800">AI Suggested Action</span>
                        </div>
                        <p className="text-sm text-indigo-800 mb-3">
                            Brex's recent $235M credit facility indicates expansion plans. Consider reaching out to their Head of Information Technology about how your solutions can support their growth.
                        </p>
                        <button className="bg-indigo-600 text-white text-sm px-4 py-1 rounded">
                            Take Action
                        </button>
                    </div>
                    {/* Bottom Features */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex">
                            <div className="bg-blue-100 p-2 rounded mr-3">
                                <Search size={20} className="text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Intelligent Account Discovery</h3>
                                <p className="text-sm text-gray-600">
                                    AI-powered customer detection automatically highlights accounts with recent strategic moves or investment activities.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex">
                            <div className="bg-purple-100 p-2 rounded mr-3">
                                <BarChart size={20} className="text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Custom Scoring Models</h3>
                                <p className="text-sm text-gray-600">
                                    Proprietary account scoring algorithm combines financial data, growth indicators, and opportunity signals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex">
                            <div className="bg-green-100 p-2 rounded mr-3">
                                <Bell size={20} className="text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Real-time Activity Monitoring</h3>
                                <p className="text-sm text-gray-600">
                                    Live notifications on significant account events, executive changes, and new buying opportunities.
                                </p>
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
                    <h1 className="font-bold text-3xl text-gray-800">AccountIQ</h1>
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
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Customer Dashboard" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Customer Dashboard")}
                        >
                            <div className="flex items-center">
                                <BarChart2 size={14} className="mr-1" />
                                Customer Dashboard
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Customer Intelligence Report" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Customer Intelligence Report")}
                        >
                            <div className="flex items-center">
                                <TrendingUp size={14} className="mr-1" />
                                Intelligence Report
                            </div>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                {activeTab === 'Customer Dashboard' && CustomerDashboard()}
                {activeTab === 'Customer Intelligence Report' && CustomerIntelligenceReport()}
            </main>
        </div>
    )
}
