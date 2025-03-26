import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';

export const Specs = () => {
    const [activeTab, setActiveTab] = useState('engineType');
    const [showAll, setShowAll] = useState(false);
    const data = [
        { id: 1, engineDesign: "Inline", performance: 5.6, transmission: "Automatic", drivetrain: "AWD", wheelSize: 18, length: 4750, width: 1840, height: 1375, wheelbase: 2825, weight: 1610, groundClearance: 130, changes: "No" },
        { id: 2, engineDesign: "V", performance: 5.1, transmission: "Automatic", drivetrain: "FWD", wheelSize: 19, length: 4940, width: 1886, height: 1457, wheelbase: 2924, weight: 1760, groundClearance: 145, changes: "No" },
        { id: 3, engineDesign: "V", performance: 4.5, transmission: "Automatic", drivetrain: "RWD", wheelSize: 20, length: 5172, width: 1945, height: 1488, wheelbase: 3128, weight: 2095, groundClearance: 140, changes: "No" },
        { id: 4, engineDesign: "Inline", performance: 7.0, transmission: "Automatic", drivetrain: "4WD", wheelSize: 17, length: 4485, width: 1849, height: 1616, wheelbase: 2680, weight: 1585, groundClearance: 170, changes: "No" },
        { id: 5, engineDesign: "Inline", performance: 6.1, transmission: "Automatic", drivetrain: "AWD", wheelSize: 18, length: 4682, width: 1898, height: 1662, wheelbase: 2820, weight: 1750, groundClearance: 160, changes: "No" },
        { id: 6, engineDesign: "V", performance: 4.1, transmission: "Automatic", drivetrain: "AWD", wheelSize: 21, length: 5006, width: 1995, height: 1705, wheelbase: 2995, weight: 2170, groundClearance: 170, changes: "No" },
        { id: 7, engineDesign: "Inline", performance: 5.9, transmission: "Automatic", drivetrain: "FWD", wheelSize: 18, length: 4750, width: 1840, height: 1380, wheelbase: 2815, weight: 1600, groundClearance: 130, changes: "No" },
        { id: 8, engineDesign: "V", performance: 5.4, transmission: "Automatic", drivetrain: "RWD", wheelSize: 19, length: 4940, width: 1886, height: 1462, wheelbase: 2914, weight: 1750, groundClearance: 145, changes: "No" },
        { id: 9, engineDesign: "V", performance: 4.8, transmission: "Automatic", drivetrain: "4WD", wheelSize: 20, length: 5172, width: 1945, height: 1493, wheelbase: 3118, weight: 2085, groundClearance: 140, changes: "No" },
        { id: 10, engineDesign: "Inline", performance: 7.3, transmission: "Automatic", drivetrain: "AWD", wheelSize: 17, length: 4485, width: 1849, height: 1621, wheelbase: 2670, weight: 1575, groundClearance: 170, changes: "No" },
        { id: 11, engineDesign: "Inline", performance: 6.4, transmission: "Manual", drivetrain: "AWD", wheelSize: 18, length: 4682, width: 1898, height: 1667, wheelbase: 2810, weight: 1740, groundClearance: 160, changes: "No" },
        { id: 12, engineDesign: "V", performance: 4.4, transmission: "Manual", drivetrain: "FWD", wheelSize: 21, length: 5006, width: 1995, height: 1710, wheelbase: 2985, weight: 2160, groundClearance: 170, changes: "No" },
        { id: 13, engineDesign: "Inline", performance: 6.2, transmission: "Manual", drivetrain: "RWD", wheelSize: 18, length: 4750, width: 1840, height: 1385, wheelbase: 2805, weight: 1590, groundClearance: 130, changes: "No" },
        { id: 14, engineDesign: "V", performance: 5.7, transmission: "Manual", drivetrain: "4WD", wheelSize: 19, length: 4940, width: 1886, height: 1467, wheelbase: 2904, weight: 1740, groundClearance: 145, changes: "No" },
        { id: 15, engineDesign: "V", performance: 5.1, transmission: "Manual", drivetrain: "AWD", wheelSize: 20, length: 5172, width: 1945, height: 1498, wheelbase: 3108, weight: 2075, groundClearance: 140, changes: "No" },
        { id: 16, engineDesign: "Inline", performance: 7.6, transmission: "Manual", drivetrain: "AWD", wheelSize: 17, length: 4485, width: 1849, height: 1626, wheelbase: 2660, weight: 1565, groundClearance: 170, changes: "No" },
        { id: 17, engineDesign: "Inline", performance: 6.7, transmission: "Manual", drivetrain: "FWD", wheelSize: 18, length: 4682, width: 1898, height: 1672, wheelbase: 2800, weight: 1730, groundClearance: 160, changes: "No" },
        { id: 18, engineDesign: "V", performance: 4.7, transmission: "Manual", drivetrain: "RWD", wheelSize: 21, length: 5006, width: 1995, height: 1715, wheelbase: 2975, weight: 2150, groundClearance: 170, changes: "No" },
        { id: 19, engineDesign: "Inline", performance: 5.9, transmission: "Manual", drivetrain: "4WD", wheelSize: 18, length: 4750, width: 1840, height: 1390, wheelbase: 2795, weight: 1580, groundClearance: 130, changes: "No" },
        { id: 20, engineDesign: "V", performance: 5.4, transmission: "Manual", drivetrain: "AWD", wheelSize: 19, length: 4940, width: 1886, height: 1472, wheelbase: 2894, weight: 1730, groundClearance: 145, changes: "No" },
        { id: 21, engineDesign: "V", performance: 4.8, transmission: "Manual", drivetrain: "AWD", wheelSize: 20, length: 5172, width: 1945, height: 1503, wheelbase: 3098, weight: 2065, groundClearance: 140, changes: "No" },
        { id: 22, engineDesign: "Inline", performance: 7.3, transmission: "Manual", drivetrain: "FWD", wheelSize: 17, length: 4485, width: 1849, height: 1631, wheelbase: 2650, weight: 1555, groundClearance: 170, changes: "No" },
        { id: 23, engineDesign: "Inline", performance: 6.4, transmission: "Manual", drivetrain: "RWD", wheelSize: 18, length: 4682, width: 1898, height: 1677, wheelbase: 2790, weight: 1720, groundClearance: 160, changes: "No" },
        { id: 24, engineDesign: "V", performance: 4.4, transmission: "Manual", drivetrain: "4WD", wheelSize: 21, length: 5006, width: 1995, height: 1720, wheelbase: 2965, weight: 2140, groundClearance: 170, changes: "No" },
        { id: 25, engineDesign: "Inline", performance: 6.2, transmission: "Manual", drivetrain: "AWD", wheelSize: 18, length: 4750, width: 1840, height: 1395, wheelbase: 2785, weight: 1570, groundClearance: 130, changes: "No" },
        { id: 26, engineDesign: "V", performance: 5.7, transmission: "Manual", drivetrain: "AWD", wheelSize: 19, length: 4940, width: 1886, height: 1477, wheelbase: 2884, weight: 1720, groundClearance: 145, changes: "No" },
        { id: 27, engineDesign: "V", performance: 5.1, transmission: "Manual", drivetrain: "FWD", wheelSize: 20, length: 5172, width: 1945, height: 1508, wheelbase: 3088, weight: 2055, groundClearance: 140, changes: "No" }
    ];
    const getEngineTypeData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.engineDesign] = (counts[item.engineDesign] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }));
    };
    const getTransmissionData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.transmission] = (counts[item.transmission] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }));
    };
    const getDrivetrainData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.drivetrain] = (counts[item.drivetrain] || 0) + 1;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }))
            .sort((a, b) => b.value - a.value);
    };
    const getPerformanceData = () => {
        const result = [];
        data.forEach(item => {
            result.push({
                engineDesign: item.engineDesign,
                performance: item.performance,
                weight: item.weight,
                size: 20
            });
        });
        return result;
    };
    const getDimensionsData = () => {
        return data.map(item => ({
            id: item.id,
            length: item.length,
            width: item.width,
            height: item.height,
            wheelbase: item.wheelbase,
            engineDesign: item.engineDesign
        })).sort((a, b) => a.length - b.length);
    };
    const engineTypeData = getEngineTypeData();
    const transmissionData = getTransmissionData();
    const drivetrainData = getDrivetrainData();
    const performanceData = getPerformanceData();
    const dimensionsData = getDimensionsData();
    const COLORS = ['#6366f1', '#a78bfa', '#c4b5fd', '#4338ca', '#3730a3', '#312e81', '#8b5cf6', '#7c3aed'];
    const tabs = [
        { id: 'engineType', label: 'Engine Type' },
        { id: 'transmission', label: 'Transmission' },
        { id: 'drivetrain', label: 'Drivetrain' },
        { id: 'performance', label: 'Performance' },
        { id: 'dimensions', label: 'Dimensions' },
        { id: 'table', label: 'Data Table' }
    ];
    const formatName = (name) => {
        if (name.length > 15) {
            return name.substring(0, 15) + '...';
        }
        return name;
    };
    return (
        <div id='SpecificationsDashboard' className="flex flex-col items-center w-full container mx-auto md:px-6">
            <div className="p-4 md:p-6 mx-auto relative overflow-hidden w-full rounded-lg">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-indigo-700 mb-2">Specifications Dashboard</h1>
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
                    {activeTab === 'engineType' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Engine Design</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={engineTypeData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={true}
                                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {engineTypeData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [value, 'Count']} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={engineTypeData}>
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
                    {activeTab === 'transmission' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Transmission</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={transmissionData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={true}
                                                label={({ name, percent }) => `${formatName(name)} (${(percent * 100).toFixed(0)}%)`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {transmissionData.map((entry, index) => (
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
                                            data={transmissionData}
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
                    {activeTab === 'drivetrain' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Distribution by Drivetrain</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart
                                    data={drivetrainData}
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
                    {activeTab === 'performance' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Performance vs Weight by Engine Type</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <ScatterChart
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                >
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey="weight" name="Weight (kg)" unit="kg" />
                                    <YAxis type="number" dataKey="performance" name="0-100km/h" unit="s" />
                                    <ZAxis range={[100, 100]} />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value, name) => {
                                        if (name === 'performance') return [value + 's', '0-100km/h'];
                                        if (name === 'weight') return [value + 'kg', 'Weight'];
                                        return [value, name];
                                    }} />
                                    <Legend />
                                    <Scatter
                                        name="V Engine"
                                        data={performanceData.filter(item => item.engineDesign === 'V')}
                                        fill="#8884d8"
                                        shape="circle"
                                    />
                                    <Scatter
                                        name="Inline Engine"
                                        data={performanceData.filter(item => item.engineDesign === 'Inline')}
                                        fill="#82ca9d"
                                        shape="triangle"
                                    />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                    {activeTab === 'dimensions' && (
                        <div className="w-full h-96 bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Vehicle Dimensions</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart
                                    data={dimensionsData}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="id" label={{ value: 'Vehicle ID', position: 'insideBottomRight', offset: 0 }} />
                                    <YAxis label={{ value: 'mm', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="length" name="Length (mm)" fill="#8884d8" />
                                    <Bar dataKey="width" name="Width (mm)" fill="#82ca9d" />
                                    <Bar dataKey="height" name="Height (mm)" fill="#ffc658" />
                                    <Bar dataKey="wheelbase" name="Wheelbase (mm)" fill="#ff8042" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                    {activeTab === 'table' && (
                        <div className="w-full bg-white bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md overflow-x-auto relative">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-4">Vehicle Specifications Table</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white bg-opacity-90 rounded-lg overflow-hidden text-sm">
                                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                        <tr>
                                            <th className="px-2 py-2 text-left">ID</th>
                                            <th className="px-2 py-2 text-left">Engine</th>
                                            <th className="px-2 py-2 text-left">0-100km/h</th>
                                            <th className="px-2 py-2 text-left">Transmission</th>
                                            <th className="px-2 py-2 text-left">Drivetrain</th>
                                            <th className="px-2 py-2 text-left">Wheel Size</th>
                                            <th className="px-2 py-2 text-left">Length</th>
                                            <th className="px-2 py-2 text-left">Width</th>
                                            <th className="px-2 py-2 text-left">Height</th>
                                            <th className="px-2 py-2 text-left">Wheelbase</th>
                                            <th className="px-2 py-2 text-left">Weight</th>
                                            <th className="px-2 py-2 text-left">Ground Clearance</th>
                                            <th className="px-2 py-2 text-left">Changes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}>
                                                <td className="border-t border-gray-200 px-2 py-1 font-medium text-indigo-700">{row.id}</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.engineDesign}</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.performance}s</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.transmission}</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.drivetrain}</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.wheelSize}"</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.length}mm</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.width}mm</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.height}mm</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.wheelbase}mm</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.weight}kg</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.groundClearance}mm</td>
                                                <td className="border-t border-gray-200 px-2 py-1">{row.changes}</td>
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