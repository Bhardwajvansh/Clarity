import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export const Market = () => {
    const [activeTab, setActiveTab] = useState('brand');
    const [showAllBrands, setShowAllBrands] = useState(false);
    const data = [
        { model: "Audi A5", unitsSold: 1200, countryOfAssembly: "Indonesia", launchYear: 2024, launchMonth: "October", segment: "Luxury", bodyStyle: "Coupe", variant: "Standard" },
        { model: "Audi A5", unitsSold: 1100, countryOfAssembly: "Indonesia", launchYear: 2023, launchMonth: "March", segment: "Luxury", bodyStyle: "Coupe", variant: "Sport" },
        { model: "Audi A6", unitsSold: 1300, countryOfAssembly: "Indonesia", launchYear: 2022, launchMonth: "July", segment: "Luxury", bodyStyle: "Sedan", variant: "Standard" },
        { model: "Audi A8", unitsSold: 1200, countryOfAssembly: "Indonesia", launchYear: 2015, launchMonth: "November", segment: "Luxury", bodyStyle: "Sedan", variant: "Premium" },
        { model: "Audi Q3", unitsSold: 1000, countryOfAssembly: "Indonesia", launchYear: 2020, launchMonth: "February", segment: "Luxury", bodyStyle: "SUV", variant: "Compact" },
        { model: "Audi Q5", unitsSold: 1215, countryOfAssembly: "Indonesia", launchYear: 2024, launchMonth: "May", segment: "Luxury", bodyStyle: "SUV", variant: "Standard" },
        { model: "Audi Q8", unitsSold: 1225, countryOfAssembly: "Indonesia", launchYear: 2023, launchMonth: "September", segment: "Luxury", bodyStyle: "SUV", variant: "Premium" },
        { model: "BAIC BJ40 Plus", unitsSold: 1150, countryOfAssembly: "Indonesia", launchYear: 2018, launchMonth: "January", segment: "Mid-range", bodyStyle: "SUV", variant: "Off-road" },
        { model: "BAIC X55 II", unitsSold: 950, countryOfAssembly: "Indonesia", launchYear: 2019, launchMonth: "March", segment: "Mid-range", bodyStyle: "SUV", variant: "Standard" },
        { model: "Bentley Bentayga", unitsSold: 650, countryOfAssembly: "Indonesia", launchYear: 2021, launchMonth: "June", segment: "Ultra Luxury", bodyStyle: "SUV", variant: "Premium" },
        { model: "Bentley Continental GT", unitsSold: 600, countryOfAssembly: "Indonesia", launchYear: 2018, launchMonth: "October", segment: "Ultra Luxury", bodyStyle: "Coupe", variant: "Premium" },
        { model: "Bentley Flying Spur", unitsSold: 1210, countryOfAssembly: "Indonesia", launchYear: 2016, launchMonth: "February", segment: "Ultra Luxury", bodyStyle: "Sedan", variant: "Premium" },
        { model: "BMW 2 Series", unitsSold: 1110, countryOfAssembly: "Indonesia", launchYear: 2021, launchMonth: "December", segment: "Luxury", bodyStyle: "Coupe", variant: "Standard" },
        { model: "BMW 2 Series Gran Coupe", unitsSold: 1310, countryOfAssembly: "Indonesia", launchYear: 2016, launchMonth: "April", segment: "Luxury", bodyStyle: "Coupe", variant: "Gran Coupe" },
        { model: "BMW 3 Series", unitsSold: 1210, countryOfAssembly: "Indonesia", launchYear: 2017, launchMonth: "August", segment: "Luxury", bodyStyle: "Sedan", variant: "Standard" },
        { model: "BMW 3 Series", unitsSold: 1010, countryOfAssembly: "Indonesia", launchYear: 2019, launchMonth: "November", segment: "Luxury", bodyStyle: "Sedan", variant: "M Sport" },
        { model: "BMW 4 Series", unitsSold: 1225, countryOfAssembly: "Indonesia", launchYear: 2016, launchMonth: "May", segment: "Luxury", bodyStyle: "Coupe", variant: "Standard" },
        { model: "BMW 4 Series", unitsSold: 1235, countryOfAssembly: "Indonesia", launchYear: 2014, launchMonth: "July", segment: "Luxury", bodyStyle: "Coupe", variant: "M Sport" },
        { model: "BMW 5 Series", unitsSold: 1160, countryOfAssembly: "Indonesia", launchYear: 2019, launchMonth: "September", segment: "Luxury", bodyStyle: "Sedan", variant: "Standard" },
        { model: "BMW 5 Series", unitsSold: 960, countryOfAssembly: "Indonesia", launchYear: 2014, launchMonth: "October", segment: "Luxury", bodyStyle: "Sedan", variant: "M Sport" },
        { model: "BMW 7 Series", unitsSold: 660, countryOfAssembly: "Indonesia", launchYear: 2015, launchMonth: "March", segment: "Luxury", bodyStyle: "Sedan", variant: "Premium" },
        { model: "BMW 8 Series", unitsSold: 610, countryOfAssembly: "Indonesia", launchYear: 2017, launchMonth: "July", segment: "Luxury", bodyStyle: "Coupe", variant: "Premium" },
        { model: "BMW i4 Gran Coupe", unitsSold: 1220, countryOfAssembly: "Indonesia", launchYear: 2014, launchMonth: "November", segment: "Luxury", bodyStyle: "Electric", variant: "Gran Coupe" },
        { model: "BMW i5", unitsSold: 1120, countryOfAssembly: "Indonesia", launchYear: 2012, launchMonth: "February", segment: "Luxury", bodyStyle: "Electric", variant: "Standard" },
        { model: "BMW i7", unitsSold: 1320, countryOfAssembly: "Indonesia", launchYear: 2017, launchMonth: "May", segment: "Luxury", bodyStyle: "Electric", variant: "Premium" },
        { model: "BMW iX", unitsSold: 1220, countryOfAssembly: "Indonesia", launchYear: 2012, launchMonth: "September", segment: "Luxury", bodyStyle: "Electric SUV", variant: "Standard" }
    ];
    const getBrandData = () => {
        const counts = {};
        data.forEach(item => {
            const brand = item.model.split(' ')[0];
            counts[brand] = (counts[brand] || 0) + item.unitsSold;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }))
            .sort((a, b) => b.value - a.value);
    };
    const getBodyStyleData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.bodyStyle] = (counts[item.bodyStyle] || 0) + item.unitsSold;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }))
            .sort((a, b) => b.value - a.value);
    };
    const getSegmentData = () => {
        const counts = {};
        data.forEach(item => {
            counts[item.segment] = (counts[item.segment] || 0) + item.unitsSold;
        });
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] }))
            .sort((a, b) => b.value - a.value);
    };
    const getLaunchYearData = () => {
        const yearData = {};
        data.forEach(item => {
            yearData[item.launchYear] = (yearData[item.launchYear] || 0) + item.unitsSold;
        });
        return Object.keys(yearData)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(year => ({ name: year.toString(), value: yearData[year] }));
    };
    const getModelPerformanceData = () => {
        const modelData = {};
        data.forEach(item => {
            modelData[item.model] = (modelData[item.model] || 0) + item.unitsSold;
        });
        return Object.keys(modelData)
            .map(model => ({ name: model, value: modelData[model] }))
            .sort((a, b) => b.value - a.value);
    };

    const brandData = getBrandData();
    const bodyStyleData = getBodyStyleData();
    const segmentData = getSegmentData();
    const launchYearData = getLaunchYearData();
    const modelPerformanceData = getModelPerformanceData();

    const COLORS = ['#6366f1', '#a78bfa', '#c4b5fd', '#4338ca', '#3730a3', '#312e81', '#8b5cf6', '#7c3aed'];

    const displayBrandData = showAllBrands ? brandData : brandData.slice(0, 3);

    const formatName = (name) => {
        if (name.length > 15) {
            return name.substring(0, 15) + '...';
        }
        return name;
    };

    const tabs = [
        { id: 'brand', label: 'Brand Distribution' },
        { id: 'bodyStyle', label: 'Body Style' },
        { id: 'segment', label: 'Segment' },
        { id: 'launchYear', label: 'Launch Year Trend' },
        { id: 'modelPerformance', label: 'Model Performance' },
        { id: 'table', label: 'Data Table' }
    ];

    return (
        <div id='MarketAnalysis' className="flex flex-col items-center w-full container mx-auto md:px-6">
            <div className="p-4 md:p-6 mx-auto relative overflow-hidden w-full rounded-lg">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-indigo-700 mb-2">Market Analysis</h1>
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

                    {activeTab === 'brand' && (
                        <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">Market Data</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={brandData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={true}
                                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                                outerRadius={80}
                                                dataKey="value"
                                            >
                                                {brandData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [value, 'Units Sold']} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={displayBrandData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#6366f1" name="Units Sold" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {!showAllBrands && brandData.length > 3 && (
                                <div className="text-center mt-2">
                                    <button
                                        onClick={() => setShowAllBrands(true)}
                                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                                    >
                                        Show all brands
                                    </button>
                                </div>
                            )}
                            {showAllBrands && (
                                <div className="text-center mt-2">
                                    <button
                                        onClick={() => setShowAllBrands(false)}
                                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                                    >
                                        Show top brands
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'bodyStyle' && (
                        <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">Distribution by Body Style</h3>
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
                                                dataKey="value"
                                            >
                                                {bodyStyleData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [value, 'Units Sold']} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={bodyStyleData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#a78bfa" name="Units Sold" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'segment' && (
                        <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">Distribution by Segment</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={segmentData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={true}
                                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                                outerRadius={80}
                                                dataKey="value"
                                            >
                                                {segmentData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [value, 'Units Sold']} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={segmentData} layout="vertical">
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" />
                                            <YAxis type="category" dataKey="name" width={100} />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#c4b5fd" name="Units Sold" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'launchYear' && (
                        <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">Sales by Launch Year</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <LineChart data={launchYearData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="value" stroke="#4338ca" name="Units Sold" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    )}

                    {activeTab === 'modelPerformance' && (
                        <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md mb-6 relative overflow-hidden">
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">Top Performing Models</h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart
                                    data={modelPerformanceData.slice(0, 10)}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis type="category" dataKey="name" width={120} />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#8b5cf6" name="Units Sold" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}

                    {activeTab === 'table' && (
                        <div className="w-full bg-white p-4 rounded-lg shadow-md overflow-x-auto relative">
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">Vehicle Data Table</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white rounded-lg overflow-hidden text-sm">
                                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Model</th>
                                            <th className="px-4 py-3 text-left">Units Sold</th>
                                            <th className="px-4 py-3 text-left">Segment</th>
                                            <th className="px-4 py-3 text-left">Body Style</th>
                                            <th className="px-4 py-3 text-left">Variant</th>
                                            <th className="px-4 py-3 text-left">Launch Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}>
                                                <td className="border-t border-gray-200 px-4 py-2 font-medium text-indigo-700">{row.model}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{row.unitsSold}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{row.segment}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{row.bodyStyle}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{row.variant}</td>
                                                <td className="border-t border-gray-200 px-4 py-2">{row.launchYear}</td>
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