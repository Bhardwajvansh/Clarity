import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const Parameters = () => {
    const [activeTab, setActiveTab] = useState('bodyStyle');
    const [showAll, setShowAll] = useState(false);
    const data = [
        { country: 'Indonesia', model: 'Audi A5', segment: 'D', bodyStyle: 'coupe', variant: 'Petrol' },
        { country: 'Indonesia', model: 'Audi A5', segment: 'D', bodyStyle: 'hatchback', variant: 'Diesel' },
        { country: 'Indonesia', model: 'Audi A6', segment: 'E', bodyStyle: 'sedan', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'Audi A8', segment: 'F', bodyStyle: 'sedan', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'Audi Q3', segment: 'C-SUV (Medium)', bodyStyle: 'SUV', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'Audi Q5', segment: 'D-SUV (Large)', bodyStyle: 'SUV', variant: 'Petrol' },
        { country: 'Indonesia', model: 'Audi Q8', segment: 'E-SUV', bodyStyle: 'SUV', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BAIC BJ40 Plus', segment: 'C-SUV (Medium)', bodyStyle: 'SUV', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'BAIC X55 II', segment: 'C-SUV (Medium)', bodyStyle: 'SUV', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'Bentley Bentayga', segment: 'E-SUV', bodyStyle: 'SUV', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'Bentley Continental GT', segment: 'E', bodyStyle: 'coupe', variant: 'Petrol' },
        { country: 'Indonesia', model: 'Bentley Flying Spur', segment: 'E', bodyStyle: 'sedan', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BMW 2 Series', segment: 'C', bodyStyle: 'coupe', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'BMW 2 Series Gran Coupe', segment: 'C', bodyStyle: 'sedan', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'BMW 3 Series', segment: 'D', bodyStyle: 'estate', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'BMW 3 Series', segment: 'D', bodyStyle: 'sedan', variant: 'Petrol' },
        { country: 'Indonesia', model: 'BMW 4 Series', segment: 'D', bodyStyle: 'cabriolet (4 seats)', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BMW 4 Series', segment: 'D', bodyStyle: 'coupe', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'BMW 5 Series', segment: 'E', bodyStyle: 'estate', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'BMW 5 Series', segment: 'E', bodyStyle: 'sedan', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'BMW 7 Series', segment: 'F', bodyStyle: 'sedan', variant: 'Petrol' },
        { country: 'Indonesia', model: 'BMW 8 Series', segment: 'E', bodyStyle: 'coupe', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BMW i4 Gran Coupe', segment: 'D', bodyStyle: 'hatchback', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'BMW i5', segment: 'E-LUX', bodyStyle: 'sedan', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'BMW i7', segment: 'F', bodyStyle: 'sedan', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'BMW iX', segment: 'D-SUV (Large)', bodyStyle: 'SUV', variant: 'Petrol' },
        { country: 'Indonesia', model: 'BMW iX1', segment: 'B-SUV (Small)', bodyStyle: 'SUV', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BMW X1', segment: 'B-SUV (Small)', bodyStyle: 'SUV', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'BMW X3', segment: 'C-SUV (Medium)', bodyStyle: 'SUV', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'BMW X4', segment: 'C-SUV (Medium)', bodyStyle: 'SUV', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'BMW X5', segment: 'D-SUV (Large)', bodyStyle: 'SUV', variant: 'Petrol' },
        { country: 'Indonesia', model: 'BMW X6', segment: 'E-SUV', bodyStyle: 'SUV', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BMW X7', segment: 'E-SUV', bodyStyle: 'SUV', variant: 'BE -Battery Electric' },
        { country: 'Indonesia', model: 'BMW XM', segment: 'E-SUV', bodyStyle: 'SUV', variant: 'Mild Hybrid' },
        { country: 'Indonesia', model: 'BMW Z4', segment: 'S (Sport cars)', bodyStyle: 'roadster (2 seats)', variant: 'Full Hybrid Electric' },
        { country: 'Indonesia', model: 'BYD Atto 3', segment: 'B-SUV (Small)', bodyStyle: 'SUV', variant: 'Petrol' },
        { country: 'Indonesia', model: 'BYD Dolphin', segment: 'B', bodyStyle: 'hatchback', variant: 'Diesel' },
        { country: 'Indonesia', model: 'BYD M6', segment: 'D-MPV (Large)', bodyStyle: 'MPV', variant: 'BE -Battery Electric' }
    ];

    const getBodyStyleData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.bodyStyle] = (counts[item.bodyStyle] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }));
    };
    const getVariantData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.variant] = (counts[item.variant] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }));
    };
    const getSegmentData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.segment] = (counts[item.segment] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }))
            .sort((a, b) => b.value - a.value);
    };
    const getBrandData = () => {
        const counts = {};
        data.forEach(item => {
            const brand = item.model.split(' ')[0];
            counts[brand] = (counts[brand] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }))
            .sort((a, b) => b.value - a.value);
    };
    const bodyStyleData = getBodyStyleData();
    const variantData = getVariantData();
    const segmentData = getSegmentData();
    const brandData = getBrandData();
    const displayBrandData = showAll ? brandData : brandData.slice(0, 3);
    const sortedBodyStyleData = [...bodyStyleData].sort((a, b) => b.value - a.value);
    const COLORS = ['#6366f1', '#a78bfa', '#c4b5fd', '#4338ca', '#3730a3', '#312e81', '#8b5cf6', '#7c3aed'];
    const tabs = [
        { id: 'bodyStyle', label: 'Body Style' },
        { id: 'variant', label: 'Variant' },
        { id: 'segment', label: 'Segment' },
        { id: 'brand', label: 'Brand Distribution' },
        { id: 'table', label: 'Data Table' }
    ];
    const formatName = (name) => {
        if (name.length > 15) {
            return name.substring(0, 15) + '...';
        }
        return name;
    };
    return (
        <div id='Parameters' className="flex flex-col items-center w-full container mx-auto md:px-6">
            <div className="p-4 md:p-6 mx-auto relative w-full rounded-lg">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-indigo-700 mb-2">Parameters</h1>
                    <br />
                    <div className="flex flex-wrap mb-6 border-b border-gray-200">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 text-sm md:text-base font-medium rounded-t-lg mr-2 ${activeTab === tab.id
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    {activeTab === 'bodyStyle' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Body Style</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={bodyStyleData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={true}
                                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {bodyStyleData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [value, 'Count']} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={sortedBodyStyleData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                            <XAxis dataKey="name" tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                            <YAxis tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#6366f1" name="Count" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'variant' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Variant</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={variantData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={true}
                                                label={({ name, percent }) => `${formatName(name)} (${(percent * 100).toFixed(0)}%)`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {variantData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [value, 'Count']} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={variantData.sort((a, b) => b.value - a.value)}
                                            layout="vertical"
                                            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                            <XAxis type="number" tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                            <YAxis type="category" dataKey="name" width={100} tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#a78bfa" name="Count" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'segment' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Segment</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart
                                    data={segmentData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                    <XAxis type="number" tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                    <YAxis type="category" dataKey="name" width={120} tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#c4b5fd" name="Count" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                    {activeTab === 'brand' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Brand</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart data={displayBrandData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                    <XAxis dataKey="name" tick={{ fill: '#4a5568', fontSize: '0.8rem' }} />
                                    <YAxis tick={{ fill: '#4a5568', fontSize: '0.7rem' }} />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#4338ca" name="Count" />
                                </BarChart>
                            </ResponsiveContainer>

                            {!showAll && brandData.length > 3 && (
                                <div className="text-center mt-2">
                                    <button
                                        onClick={() => setShowAll(true)}
                                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                                    >
                                        Show all brands
                                    </button>
                                </div>
                            )}
                            {showAll && (
                                <div className="text-center mt-2">
                                    <button
                                        onClick={() => setShowAll(false)}
                                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                                    >
                                        Show top brands
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'table' && (
                        <div className="w-full bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md overflow-x-auto relative">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Vehicle Data Table</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white bg-opacity-90 rounded-lg text-sm md:text-base">
                                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                        <tr>
                                            <th className="px-2 md:px-4 py-2 md:py-3 text-left">Model</th>
                                            <th className="px-2 md:px-4 py-2 md:py-3 text-left">Segment</th>
                                            <th className="px-2 md:px-4 py-2 md:py-3 text-left">Body Style</th>
                                            <th className="px-2 md:px-4 py-2 md:py-3 text-left">Variant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}>
                                                <td className="border-t border-gray-200 px-2 md:px-4 py-1 md:py-2 font-medium text-indigo-700">{row.model}</td>
                                                <td className="border-t border-gray-200 px-2 md:px-4 py-1 md:py-2">{row.segment}</td>
                                                <td className="border-t border-gray-200 px-2 md:px-4 py-1 md:py-2">{row.bodyStyle}</td>
                                                <td className="border-t border-gray-200 px-2 md:px-4 py-1 md:py-2">{row.variant}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};