import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

export const Dashboard = () => {
    const industryRevenueData = [
        { name: 'Q1', Automobile: 450, Technology: 600, Healthcare: 350, Energy: 280, Finance: 400 },
        { name: 'Q2', Automobile: 500, Technology: 650, Healthcare: 380, Energy: 320, Finance: 450 },
        { name: 'Q3', Automobile: 480, Technology: 700, Healthcare: 420, Energy: 300, Finance: 430 },
        { name: 'Q4', Automobile: 550, Technology: 750, Healthcare: 400, Energy: 350, Finance: 480 }
    ];

    const industryMarketShareData = [
        { name: 'Technology', value: 35 },
        { name: 'Healthcare', value: 25 },
        { name: 'Automobile', value: 20 },
        { name: 'Finance', value: 15 },
        { name: 'Energy', value: 5 }
    ];

    const COLORS = [
        '#8A4FFF',
        '#6A5ACD',
        '#9370DB',
        '#BA55D3',
        '#DA70D6'
    ];
    return (
        <div>
            <div className="bg-gradient-to-tr from-purple-100 to-indigo-100 p-10 mx-auto relative overflow-hidden shadow-sm">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>

                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-purple-700 lg:text-7xl mb-4">Welcome to Clarity</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-purple-600 mb-4">Quarterly Industry Revenues</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={industryRevenueData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E6E6FA" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Automobile" fill={COLORS[0]} />
                                    <Bar dataKey="Technology" fill={COLORS[1]} />
                                    <Bar dataKey="Healthcare" fill={COLORS[2]} />
                                    <Bar dataKey="Energy" fill={COLORS[3]} />
                                    <Bar dataKey="Finance" fill={COLORS[4]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-purple-600 mb-4">Industry Market Share Distribution</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={industryMarketShareData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {industryMarketShareData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                            <div className="text-purple-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Technology Sector</h3>
                            <p className="text-gray-600">Fastest-growing industry with 35% market share and continuous innovation.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                            <div className="text-purple-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Healthcare Innovation</h3>
                            <p className="text-gray-600">Significant growth driven by technological advancements and global health challenges.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                            <div className="text-purple-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Industry Analytics</h3>
                            <p className="text-gray-600">Comprehensive insights into cross-industry technological and economic trends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
