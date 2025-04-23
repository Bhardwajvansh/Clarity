import React from 'react';
import {
    BarChart2,
    RefreshCw,
    User,
    ExternalLink,
    Bot,
    Send,
    PieChart,
    AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SupplierIQDashboard() {
    const navigate = useNavigate();
    const suppliers = [
        {
            name: 'Roquette',
            status: 'Monitoring',
            statusColor: 'bg-amber-100 text-amber-700',
            description: 'Top 10 provider of pharmaceutical excipients',
            riskScore: 72,
            riskColor: 'bg-blue-500'
        },
        {
            name: 'Qualicaps',
            status: 'Stable',
            statusColor: 'bg-green-100 text-green-700',
            description: 'Manufacturer of hard capsules for oral dosage solutions',
            riskScore: 85,
            riskColor: 'bg-green-500'
        },
        {
            name: 'Tereos Syral',
            status: 'At Risk',
            statusColor: 'bg-red-100 text-red-700',
            description: 'Specializes in starch and derivatives for pharma',
            riskScore: 45,
            riskColor: 'bg-red-500'
        },
        {
            name: 'Ingredion',
            status: 'New',
            statusColor: 'bg-purple-100 text-purple-700',
            description: 'Innovative starch derivatives and ingredients',
            riskScore: 68,
            riskColor: 'bg-purple-500'
        }
    ];

    const stats = [
        { title: 'Monitored Suppliers', value: '450+', color: 'bg-gray-100' },
        { title: 'Risk Alerts', value: '24', color: 'bg-blue-100', textColor: 'text-blue-600' },
        { title: 'Data Sources', value: '50+', color: 'bg-green-100', textColor: 'text-green-600' },
        { title: 'AI Insights', value: '100+', color: 'bg-purple-100', textColor: 'text-purple-600' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div className="bg-blue-600 p-2 rounded-lg mr-3">
                        <BarChart2 size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-medium text-gray-700">Market Intelligence Platform</h1>
                        <div className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Live Data
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center text-sm text-blue-600 mr-4">
                        <RefreshCw size={16} className="mr-1" />
                        Last updated: Today
                    </div>
                    <div className="bg-gray-200 p-2 rounded-full">
                        <User size={20} className="text-gray-600" />
                    </div>
                </div>
            </div>

            <div className="relative min-h-[200px] mb-8">
                <br />
                <div className="mb-2">
                    <h2 className="text-5xl font-bold text-blue-600">SupplierIQ</h2>
                    <p className="text-gray-600 mt-1">AI-powered supplier intelligence and risk assessment</p>
                </div>

                <div className="flex mt-4 space-x-4">
                    <button
                        onClick={() => navigate('/supdash')}
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        <BarChart2 size={18} className="mr-2" />
                        Explore Dashboard
                    </button>
                    <button
                        onClick={() => navigate('/virtual-analyst')}
                        className="flex items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition">
                        <Bot size={18} className="mr-2" />
                        Ask AI Assistant
                    </button>
                </div>

                <div className="absolute right-0 top-0 flex flex-wrap w-120 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                        {stats.map((stat, index) => (
                            <div key={index} className={`${stat.color} p-4 rounded-lg`}>
                                <div className="text-sm text-gray-600">{stat.title}</div>
                                <div className={`text-3xl font-bold ${stat.textColor || 'text-gray-800'}`}>{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute -right-0 -top-25 w-54 h-54 bg-blue-100 rounded-full opacity-20 z-0"></div>
                <div className="absolute right-100 top-30 w-30 h-30 bg-blue-100 rounded-full opacity-20 z-0"></div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-medium text-gray-800">Featured Suppliers</h3>
                    <a href="#" className="flex items-center text-blue-600 text-sm hover:underline">
                        View all suppliers
                        <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {suppliers.map((supplier, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">{supplier.name}</h4>
                                <span className={`text-xs px-2 py-1 rounded-md ${supplier.statusColor}`}>
                                    {supplier.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 h-12">{supplier.description}</p>
                            <div>
                                <div className="flex justify-between items-center text-sm mb-1">
                                    <span className="text-gray-600">Risk Score</span>
                                    <span className="font-medium">{supplier.riskScore}/100</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                    <div
                                        className={`${supplier.riskColor} h-2 rounded-full`}
                                        style={{ width: `${supplier.riskScore}%` }}
                                    ></div>
                                </div>
                                <a href="#" className="text-blue-600 text-sm hover:underline">View details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-4">
                <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <Bot size={20} className="text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">SupplierIQ AI Assistant</h3>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Ask anything about your suppliers..."
                        className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg">
                        <Send size={18} />
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    Try asking: "Which suppliers have the highest risk score?" or "Compare Roquette and Qualicaps financial performance"
                </p>
            </div>
        </div>
    );
}