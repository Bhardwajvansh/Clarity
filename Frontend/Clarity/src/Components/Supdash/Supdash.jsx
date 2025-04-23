import React, { useState } from 'react';
import {
    Home,
    FileText,
    Bell,
    Settings,
    Search,
    ChevronDown,
    Filter,
    Info,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    CircleCheck,
    BarChart3,
    ArrowRight,
    Plus
} from 'lucide-react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

export const Supdash = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const tabs = [
        { name: 'Dashboard', icon: <Home size={18} /> },
        { name: 'Risk Benchmarking', icon: <FileText size={18} /> },
        { name: 'Supplier Profiles', icon: <FileText size={18} /> },
        { name: 'Financial Analysis', icon: <FileText size={18} /> },
    ];

    const riskDistributionData = [
        { name: 'Low Risk', value: 35, color: '#4CAF50' },
        { name: 'Medium', value: 45, color: '#FFC107' },
        { name: 'High Risk', value: 20, color: '#F44336' },
    ];

    const riskFactors = [
        { name: 'Financial Stability', score: 60, description: '24 suppliers showing declining financial metrics in Q2 2023', color: '#FFB74D' },
        { name: 'Supply Chain Resilience', score: 45, description: 'High global dependency on single-source suppliers for critical materials', color: '#F44336' },
        { name: 'Regulatory Compliance', score: 82, description: 'Strong compliance history with minor issues in emerging markets', color: '#4CAF50' },
        { name: 'Environmental & Sustainability', score: 77, description: '90% of suppliers with published sustainability commitments', color: '#4CAF50' },
    ];

    const suppliers = [
        { id: 'RQ', name: 'Roquette', industry: 'Pharmaceuticals', country: 'France', score: 72, status: 'Monitoring', trend: '-3pts', color: '#FFB74D' },
        { id: 'QC', name: 'Qualicaps', industry: 'Pharmaceuticals', country: 'Japan', score: 85, status: 'Stable', trend: '+2pts', color: '#4CAF50' },
        { id: 'TS', name: 'Teivos Syrjä', industry: 'Pharmaceuticals', country: 'France', score: 45, status: 'At Risk', trend: '-5pts', color: '#F44336' },
    ];

    const salesData = [
        { year: '2019', lifescience: 2.1, healthcare: 4.1, electronics: 2.9, total: 9.1 },
        { year: '2020', lifescience: 2.7, healthcare: 4.7, electronics: 3.2, total: 10.6 },
        { year: '2021', lifescience: 3.1, healthcare: 5.1, electronics: 3.5, total: 11.7 },
        { year: '2022', lifescience: 3.4, healthcare: 5.8, electronics: 4.0, total: 13.2 },
        { year: '2023', lifescience: 3.2, healthcare: 5.2, electronics: 3.8, total: 12.2 },
    ];

    const creditData = [
        { year: '2019', dso: 25, cpi: 32 },
        { year: '2020', dso: 27, cpi: 32 },
        { year: '2021', dso: 28, cpi: 32 },
        { year: '2022', dso: 30, cpi: 28 },
        { year: '2023', dso: 35, cpi: 25 },
    ];

    const creditStrengths = [
        'Diversification',
        'Solid growth prospects of hi-3 business sectors',
        'Portfolio of new drugs skewed towards high-margin products',
        'Track record of conservative financial policies and solid cash flow generation'
    ];

    const creditChallenges = [
        'Exposure to technological shifts and economic cycles',
        'Increasing competition in target selling drugs and a complicated late-stage pipeline',
        'Event risk related to future strategic investments'
    ];

    const renderDashboard = () => (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Supplier Risk Dashboard</h1>

            <div className="flex justify-between items-center mb-6">
                <div className="relative w-64">
                    <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search suppliers..."
                        className="pl-10 pr-4 py-2 border rounded w-full"
                    />
                </div>

                <div className="flex space-x-2">
                    <div className="relative">
                        <button className="flex items-center space-x-2 px-4 py-2 border rounded">
                            <span>All Industries</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <div className="relative">
                        <button className="flex items-center space-x-2 px-4 py-2 border rounded">
                            <span>All Regions</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2">
                        <Filter size={16} />
                        <span>Advanced Filters</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-gray-500">Suppliers</p>
                            <h2 className="text-4xl font-bold">142</h2>
                            <p className="text-xs text-gray-500">Active tracking</p>
                        </div>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">+6</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">+4 this month</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-gray-500">Average Risk Score</p>
                            <h2 className="text-4xl font-bold">67.2</h2>
                            <p className="text-xs text-gray-500">Moderate risk</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">
                            <TrendingUp size={16} className="inline" />
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Trending up</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-gray-500">High Risk Suppliers</p>
                            <h2 className="text-4xl font-bold">17</h2>
                            <p className="text-xs text-gray-500">Requiring attention</p>
                        </div>
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">+3</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">12% of total</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-gray-500">Data Confidence</p>
                            <h2 className="text-4xl font-bold">94%</h2>
                            <p className="text-xs text-gray-500">Based on 30+ sources</p>
                        </div>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">High</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Updated hourly</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Risk Distribution</h3>
                        <Info size={16} className="text-gray-400" />
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={riskDistributionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={0}
                                        dataKey="value"
                                    >
                                        {riskDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                                    <span className="text-sm">Low Risk</span>
                                    <span className="ml-auto text-sm">35%</span>
                                </div>
                                <div className="flex items-center mb-1">
                                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                                    <span className="text-sm">Medium</span>
                                    <span className="ml-auto text-sm">45%</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                                    <span className="text-sm">High Risk</span>
                                    <span className="ml-auto text-sm">20%</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-xl">142</div>
                                <div className="text-xs text-gray-500">Total Suppliers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Risk Factors Analysis</h3>
                        <button className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded flex items-center">
                            <span>AI Insights</span>
                        </button>
                    </div>

                    <div className="space-y-4">
                        {riskFactors.map((factor, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">{factor.name}</span>
                                    <span className="text-gray-500 text-sm">{factor.score}/100</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded h-2">
                                    <div
                                        className="rounded h-2"
                                        style={{
                                            width: `${factor.score}%`,
                                            backgroundColor: factor.color
                                        }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{factor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded shadow mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Top Suppliers by Risk Score</h3>
                    <a href="#" className="text-blue-600 text-sm">View all <ArrowRight size={16} className="inline" /></a>
                </div>

                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 border-b">
                            <th className="pb-2">SUPPLIER</th>
                            <th className="pb-2">INDUSTRY</th>
                            <th className="pb-2">COUNTRY</th>
                            <th className="pb-2">RISK SCORE</th>
                            <th className="pb-2">STATUS</th>
                            <th className="pb-2">TREND</th>
                            <th className="pb-2">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map((supplier) => (
                            <tr key={supplier.id} className="border-b">
                                <td className="py-3">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center mr-2">
                                            {supplier.id}
                                        </div>
                                        <div>
                                            <div className="font-medium">{supplier.name}</div>
                                            <div className="text-xs text-gray-500">Top 10 pharma excipients provider</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{supplier.industry}</td>
                                <td>{supplier.country}</td>
                                <td>{supplier.score}/100</td>
                                <td>
                                    <span
                                        className={`px-2 py-1 rounded text-xs 
                    ${supplier.status === 'Stable' ? 'bg-green-100 text-green-600' :
                                                supplier.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-600' :
                                                    'bg-red-100 text-red-600'}`}
                                    >
                                        {supplier.status}
                                    </span>
                                </td>
                                <td className={supplier.trend.includes('-') ? 'text-red-500' : 'text-green-500'}>
                                    {supplier.trend.includes('-') ?
                                        <TrendingDown size={16} className="inline mr-1" /> :
                                        <TrendingUp size={16} className="inline mr-1" />}
                                    {supplier.trend}
                                </td>
                                <td>
                                    <button
                                        className="text-blue-600 text-sm"
                                        onClick={() => {
                                            setSelectedSupplier('Roquette');
                                            setActiveTab('Financial Analysis');
                                        }}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center mr-2">
                        <Info size={16} />
                    </div>
                    <span className="font-bold">AI Insights</span>
                </div>

                <p className="text-sm">
                    Risk alert: 3 pharmaceutical suppliers in Europe are showing signs of financial stress due to increased production costs.
                    Consider dual-sourcing strategies for critical ingredients.
                </p>

                <div className="mt-3">
                    <button className="text-blue-600 text-sm">Get detailed report</button>
                </div>
            </div>
        </div>
    );

    const renderFinancialAnalysis = () => (
        <div className="p-6">
            <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center mr-3">
                    RQ
                </div>
                <div>
                    <h1 className="text-xl font-bold">Roquette</h1>
                    <p className="text-sm text-gray-500">Financial Performance Analysis</p>
                </div>
                <span className="ml-4 px-2 py-1 rounded bg-yellow-100 text-yellow-600 text-sm">Monitoring</span>
                <div className="ml-auto flex items-center">
                    <div className="relative mr-4">
                        <button className="flex items-center space-x-2 px-4 py-2 border rounded">
                            <span>Last 5 Years</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2">
                        <span>Export Data</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold mb-4">Net Sales</h3>
                    <div className="flex items-center mb-1">
                        <span>Bn/€</span>
                        <span className="ml-auto text-red-500">-6%</span>
                    </div>

                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="electronics" stackId="a" fill="#9E9E9E" />
                            <Bar dataKey="healthcare" stackId="a" fill="#F44336" />
                            <Bar dataKey="lifescience" stackId="a" fill="#E57373" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold mb-4">EBITDA pre</h3>
                    <div className="flex items-center mb-1">
                        <span>(%/€)</span>
                        <span className="ml-auto text-red-500">-14%</span>
                    </div>

                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="electronics" stackId="a" fill="#9E9E9E" name="Electronics" />
                            <Bar dataKey="healthcare" stackId="a" fill="#F44336" name="Healthcare" />
                            <Bar dataKey="lifescience" stackId="a" fill="#E57373" name="Life Science" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Credit Performance</h3>
                        <button className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded flex items-center">
                            <span>AI Analysis</span>
                        </button>
                    </div>

                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={creditData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis yAxisId="left" orientation="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Line yAxisId="left" type="monotone" dataKey="dso" stroke="#000000" activeDot={{ r: 8 }} name="DSO/EBITDA" />
                            <Line yAxisId="right" type="monotone" dataKey="cpi" stroke="#FF0000" name="CPI/OWC (RHS)" />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="mt-4 bg-yellow-50 p-2 rounded border border-yellow-200">
                        <p className="text-xs">Best sources for data?</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold mb-4">Credit Performance</h3>

                    <div className="mb-4">
                        <h4 className="font-medium text-green-600 mb-2">Credit Strengths</h4>
                        <ul className="space-y-2">
                            {creditStrengths.map((strength, index) => (
                                <li key={index} className="flex items-start">
                                    <CircleCheck size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-red-600 mb-2">Credit Challenges</h4>
                        <ul className="space-y-2">
                            {creditChallenges.map((challenge, index) => (
                                <li key={index} className="flex items-start">
                                    <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded shadow mb-8">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center mr-2">
                        <BarChart3 size={16} />
                    </div>
                    <span className="font-bold">AI-Generated Financial Insights</span>
                </div>

                <p className="text-sm mb-4">
                    Roquette's financial performance shows a concerning trend with net sales declining by 6% in 2023 after several years of growth.
                    EBITDA has decreased by 14%, reducing the company's margin from 37% to 28%. This compression suggests cost management
                    challenges in the current economic environment.
                </p>

                <p className="text-sm mb-4">
                    The credit performance indicates improving CPI/OWC ratio, but this may be driven more by debt reduction than operational improvements.
                    Key risk factors to monitor include ongoing capital expenditures related to the Qualicaps acquisition and potential supply chain disruptions.
                </p>

                <div className="mt-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2">
                        <span>Ask AI for Analysis</span>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-full mx-auto px-4 sm:px-6">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center mr-2">
                                    <span className="text-xl font-bold">S</span>
                                </div>
                                <div>
                                    <div className="font-bold text-blue-600">SupplierIQ</div>
                                    <div className="text-xs text-gray-500">Live Data</div>
                                </div>
                            </div>

                            <nav className="ml-6 flex">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        className={`inline-flex items-center px-4 border-b-2 text-sm font-medium ${activeTab === tab.name
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(tab.name)}
                                    >
                                        {tab.icon}
                                        <span className="ml-2">{tab.name}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center">
                            <span className="text-xs text-gray-500 mr-4">Updated: 2h ago</span>
                            <button className="rounded-full bg-gray-200 p-1">
                                <Bell size={18} />
                            </button>
                            <button className="rounded-full bg-gray-200 p-1 ml-2">
                                <Settings size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {activeTab === 'Dashboard' && renderDashboard()}
                {activeTab === 'Financial Analysis' && renderFinancialAnalysis()}
            </main>
        </div>
    );
}