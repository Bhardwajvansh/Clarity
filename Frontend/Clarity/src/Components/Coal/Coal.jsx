import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import {
    LayoutDashboard,
    Car,
    Stethoscope,
    Laptop,
    Box,
    Database,
    FileText,
    Bot,
    UserRound,
    LogOut,
    ChevronRight,
    ChevronDown
} from "lucide-react";
import { Parameters } from "../Parameters/Parameters";
import { Market } from "../Market/Market";
import { Specs } from "../Specs/Specs";
import { Footer } from "../Footer/Footer";
import { Coaldash } from "../Coaldash/Coaldash";

const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
];


const energyTransitionData = [
    { country: 'Sweden', score: 78.4 },
    { country: 'Denmark', score: 75.2 },
    { country: 'Finland', score: 74.5 },
    { country: 'Switzerland', score: 73.4 },
    { country: 'France', score: 71.1 },
    { country: 'Norway', score: 69.9 },
    { country: 'Iceland', score: 68.0 },
    { country: 'Austria', score: 67.9 },
    { country: 'Estonia', score: 67.8 },
    { country: 'Netherlands', score: 66.7 }
];

const carbonReadinessData = [
    { country: 'U.S.', score: 72 },
    { country: 'Canada', score: 71 },
    { country: 'Norway', score: 67 },
    { country: 'U.K.', score: 66 },
    { country: 'Australia', score: 62 },
    { country: 'Germany', score: 56 },
    { country: 'Denmark', score: 56 },
    { country: 'Netherlands', score: 55 },
    { country: 'China', score: 53 },
    { country: 'Japan', score: 50 }
];

const productionData = [
    { year: 1980, production: 3.79, consumption: 3.63, reserves: 4.44 },
    { year: 1990, production: 4.74, consumption: 4.74, reserves: 6.15 },
    { year: 2000, production: 5.42, consumption: 5.42, reserves: 7.32 },
    { year: 2010, production: 7.16, consumption: 7.16, reserves: 8.44 },
    { year: 2015, production: 7.86, consumption: 7.86, reserves: 8.79 },
    { year: 2019, production: 7.78, consumption: 7.84, reserves: 8.96 },
    { year: 2020, production: 7.13, consumption: 7.13, reserves: 8.98 },
    { year: 2021, production: 7.66, consumption: 7.66, reserves: 8.97 },
    { year: 2022, production: 8.03, consumption: 8.03, reserves: 9.04 },
    { year: 2023, production: 8.16, consumption: 8.16, reserves: 9.58 }
];

const productionData2 = [
    { name: 'Anthracite', value: 5 },
    { name: 'Metallurgical Coal', value: 20 },
    { name: 'Bituminous Coal', value: 50 },
    { name: 'Sub-bituminous Coal', value: 20 },
    { name: 'Lignite', value: 5 }
];

const consumptionData = [
    { name: 'Anthracite', value: 5 },
    { name: 'Metallurgical Coal', value: 20 },
    { name: 'Bituminous Coal', value: 50 },
    { name: 'Sub-bituminous Coal', value: 20 },
    { name: 'Lignite', value: 5 }
];

const topConsumptionCountries = [
    { country: 'China', '2019': 5156, '2021': 5436, '2023': 5536 },
    { country: 'India', '2019': 1331, '2021': 1336, '2023': 1536 },
    { country: 'United States', '2019': 536, '2021': 306, '2023': 267 },
    { country: 'Indonesia', '2019': 191, '2021': 187, '2023': 191 },
    { country: 'Russia', '2019': 267, '2021': 145, '2023': 187 },
    { country: 'South Africa', '2019': 134, '2021': 132, '2023': 145 },
    { country: 'Japan', '2019': 187, '2021': 134, '2023': 132 },
    { country: 'Germany', '2019': 145, '2021': 132, '2023': 134 },
    { country: 'South Korea', '2019': 132, '2021': 0, '2023': 0 },
    { country: 'Turkey', '2019': 0, '2021': 0, '2023': 0 }
];

const fastestGrowingCountries = [
    { country: 'United Arab Emirates', 'CAGR (2013-2023)': 25, 'CAGR (2018-2023)': 16 },
    { country: 'Bangladesh', 'CAGR (2013-2023)': 22, 'CAGR (2018-2023)': 21 },
    { country: 'Ethiopia', 'CAGR (2013-2023)': 21, 'CAGR (2018-2023)': 19 },
    { country: 'Peru', 'CAGR (2013-2023)': 21, 'CAGR (2018-2023)': 16 },
    { country: 'Indonesia', 'CAGR (2013-2023)': 19, 'CAGR (2018-2023)': 16 },
    { country: 'Nepal', 'CAGR (2013-2023)': 19, 'CAGR (2018-2023)': 14 },
    { country: 'Kenya', 'CAGR (2013-2023)': 16, 'CAGR (2018-2023)': 16 },
    { country: 'Cambodia', 'CAGR (2013-2023)': 16, 'CAGR (2018-2023)': 16 },
    { country: 'Dominican Republic', 'CAGR (2013-2023)': 16, 'CAGR (2018-2023)': 14 },
    { country: 'Kyrgyzstan', 'CAGR (2013-2023)': 14, 'CAGR (2018-2023)': 14 }
];

const topReservesCountries = [
    { country: 'United States', '2019': 179, '2021': 179, '2023': 273 },
    { country: 'Russia', '2019': 173, '2021': 173, '2023': 179 },
    { country: 'China', '2019': 141, '2021': 165, '2023': 173 },
    { country: 'Australia', '2019': 141, '2021': 141, '2023': 165 },
    { country: 'India', '2019': 39, '2021': 39, '2023': 141 },
    { country: 'Germany', '2019': 39, '2021': 39, '2023': 38 },
    { country: 'Indonesia', '2019': 38, '2021': 38, '2023': 39 },
    { country: 'Ukraine', '2019': 31, '2021': 31, '2023': 39 },
    { country: 'Kyrgyzstan', '2019': 31, '2021': 31, '2023': 31 },
    { country: 'Poland', '2019': 31, '2021': 31, '2023': 31 }
];

const reservesGrowthRates = [
    { country: 'United States', 'CAGR (2013-2023)': 2, 'CAGR (2018-2023)': 0 },
    { country: 'Russia', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 0 },
    { country: 'China', 'CAGR (2013-2023)': 2, 'CAGR (2018-2023)': 0 },
    { country: 'Australia', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 4 },
    { country: 'India', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 0 },
    { country: 'Germany', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 0 },
    { country: 'Indonesia', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 3 },
    { country: 'Ukraine', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 0 },
    { country: 'Kyrgyzstan', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': 0 },
    { country: 'Poland', 'CAGR (2013-2023)': 0, 'CAGR (2018-2023)': -1 }
];

const coalImportData = {
    Anthracite: [
        { country: 'China', volume: 5 },
        { country: 'South Korea', volume: 4 },
        { country: 'Japan', volume: 4 },
        { country: 'Vietnam', volume: 3 },
        { country: 'India', volume: 2 }
    ],
    Bituminous: [
        { country: 'Japan', volume: 132 },
        { country: 'South Korea', volume: 100 },
        { country: 'China', volume: 92 },
        { country: 'India', volume: 65 },
        { country: 'Turkey', volume: 46 }
    ],
    Lignite: [
        { country: 'China', volume: 89 },
        { country: 'Serbia', volume: 3 },
        { country: 'Russia', volume: 3 },
        { country: 'Brunei', volume: 1 }
    ],
    SubBituminous: [
        { country: 'India', volume: 135 },
        { country: 'China', volume: 46 },
        { country: 'Philippines', volume: 37 },
        { country: 'Malaysia', volume: 27 },
        { country: 'Vietnam', volume: 23 }
    ]
};

// Static content for industry analysis sections
const MARKET_SECTIONS = {
    marketOverview: {
        title: "Scope",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">1. Energy Transition and Coal Market Report</h1>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">1. Market Overview</h2>
                        <p className="text-gray-700">
                            The global energy landscape is undergoing significant transformation, with countries
                            implementing diverse strategies to transition towards cleaner and more sustainable energy sources.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">2. Key Insights</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Global coal demand reached a record 8.7 billion tonnes in 2023</li>
                            <li>Significant growth in Asian markets, particularly China and India</li>
                            <li>Decline in coal consumption in Europe and the United States</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Energy Transition Index - Top 10 Countries</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={energyTransitionData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="score" fill={COLORS[0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">CCS Carbon Readiness Index - Top 10 Countries</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={carbonReadinessData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="score" fill={COLORS[2]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Future of Coal Market</h2>
                    <p className="text-gray-700 mb-4">
                        The International Energy Agency (IEA) projects global coal demand to plateau at approximately 8.77 billion tonnes
                        in 2024. While Asian markets show growth, European and U.S. markets continue to decline.
                    </p>
                    <p className="text-gray-700">
                        Countries are setting varied timelines to phase out coal, with the United Kingdom, Germany, Canada, and Italy
                        pledging significant reductions in coal usage to align with net-zero emission goals.
                    </p>
                </div>
            </div>
        )
    },
    executiveSummary: {
        title: "Value Chain Analysis",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">2. Executive Summary</h2>

                <div className="mb-6">
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={productionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis label={{ value: 'Billion Short Tons', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="production" fill={COLORS[0]} name="Production" />
                            <Bar dataKey="consumption" fill={COLORS[1]} name="Consumption" />
                            <Bar dataKey="reserves" fill={COLORS[2]} name="Reserves" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-center mt-2 text-sm text-gray-600">
                        Global Coal Market: CAGR 2019-2023 (1.4%)
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "2.1 Key Trends by Product/Service Type", color: COLORS[0] },
                        { title: "2.2 Key Trends by Technology/Connectivity/Form", color: COLORS[1] },
                        { title: "2.3 Key Trends by Application/Functionality", color: COLORS[2] },
                        { title: "2.4 Key Trends by End-Use Industry/Sector", color: COLORS[3] },
                        { title: "2.5 Key Trends by Geography", color: COLORS[4] },
                        { title: "2.6 Market Revenue and Size Snapshot", color: COLORS[0] }
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md"
                            style={{ borderTop: `4px solid ${section.color}` }}
                        >
                            <h3 className="font-semibold mb-2">{section.title}</h3>
                            <p>Detailed insights and key trends for the specified market segment.</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    comparativeAnalysis: {
        title: "Production",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">3. Comparative Analysis</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-center">Production</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={productionData2}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {productionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-center">Consumption</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={consumptionData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {consumptionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h3 className="font-semibold mb-4">Market Insights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold mb-2">Production Trends</h4>
                            <p>Anthracite production remains limited, primarily concentrated in China and Russia, with stable output due to its high carbon content and niche applications. Metallurgical coal production is steady, driven by demand from the steel industry, with Australia and the U.S. as major producers. Bituminous coal output declines in Western markets but continues to grow in Asia. Sub-bituminous coal production decreases in North America but remains crucial for electricity generation in developing regions. Lignite production stays relatively stable in countries with high domestic reliance, such as Germany and China, but faces long-term decline due to environmental concerns and energy transitions.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Consumption Trends</h4>
                            <p>Anthracite consumption remains limited to specialized industrial applications such as steelmaking and heating. Metallurgical coal demand remains strong, particularly in China and India, due to ongoing infrastructure and construction needs. Bituminous coal consumption declines in Europe and North America but continues to power thermal plants in emerging markets. Sub-bituminous coal consumption is reducing in developed economies, though it remains a key energy source for several Asian countries. Lignite demand stays significant in regions with abundant reserves, such as Eastern Europe and parts of Asia, though it faces pressure from decarbonization policies and renewable energy transitions.</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "3.1 Market Share Analysis - Major Companies",
                        "3.2 Product/Service Benchmarking - Major Companies",
                        "3.3 Top 5 Financials Analysis",
                        "3.4 Patent Analysis - Major Companies",
                        "3.5 Pricing Analysis (Average Selling Prices - ASPs)"
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md"
                            style={{ borderTop: `4px solid ${COLORS[index % COLORS.length]}` }}
                        >
                            <h3 className="font-semibold mb-2">{section}</h3>
                            <p>Comprehensive comparative insights and analysis.</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    startupScenario: {
        title: "Demand/Consumption",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">4. Production and Consumption Landscape</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-center">Consumption: Top 10 Countries</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={topConsumptionCountries}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis label={{ value: 'Billion Short Tons', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="2019" fill={COLORS[0]} />
                                <Bar dataKey="2021" fill={COLORS[1]} />
                                <Bar dataKey="2023" fill={COLORS[2]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-center">Consumption: Top 10 Fastest Growing Countries</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={fastestGrowingCountries}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis label={{ value: 'CAGR (%)', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="CAGR (2013-2023)" fill={COLORS[3]} />
                                <Bar dataKey="CAGR (2018-2023)" fill={COLORS[4]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Top 10 Coal Production Countries (2023)</h3>
                        <p>The top 10 countries identified with highest coal production volume in 2023 were China, India, Indonesia, U.S., Russia, Australia, South Africa, Kazakhstan, Germany, & Poland. The top 3 producers China, India & Indonesia accounted for 4,808 BST, 1,068 BST & 861 BST of coal production respectively in 2023.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Highest Growth in Coal Production</h3>
                        <p>The 10 key countries which witnessed highest increase in coal production during 2018-2023 were Albania, Tanzania, Peru, Pakistan, Eswatini, Niger, Zambia, Bosnia & Herzegovina, Kyrgyzstan & Uzbekistan. The top 3 countries with highest growth in coal production by CAGR were Albania, Tanzania, Peru with 37%, 30% & 19% respectively during 2018-2023.</p>
                    </div>
                </div>
            </div>
        )
    },
    marketEntryScenario: {
        title: "Reserves",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">5. Coal Reserves Landscape</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-center">Reserves: Top 10 Countries</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={topReservesCountries}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis label={{ value: 'Billion Short Tons', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="2019" fill={COLORS[0]} />
                                <Bar dataKey="2021" fill={COLORS[1]} />
                                <Bar dataKey="2023" fill={COLORS[2]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-center">Reserves: Growth Rates</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={reservesGrowthRates}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis label={{ value: 'CAGR (%)', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="CAGR (2013-2023)" fill={COLORS[3]} />
                                <Bar dataKey="CAGR (2018-2023)" fill={COLORS[4]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Top Coal Reserves Countries</h3>
                        <p>The top 3 countries with highest coal reserves in 2023 were U.S., Russia & China. These countries' overall coal reserve stood at 273 BST, 179 BST & 173 BST in 2023.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Reserves Growth Insights</h3>
                        <p>The top 3 countries which witnessed an increase in overall coal reserves during 2018-2023 were India, U.S. & China. These countries' overall coal reserve increased by 4%, 2% & 2% respectively during 2018-2023 owing to discovery of new reserves.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.1 Regulatory Framework Overview</h3>
                        <p>Comprehensive analysis of regulatory environment and compliance requirements.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.2 New Business and Ease of Doing Business Index</h3>
                        <p>Evaluation of market entry barriers and business environment.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.3 Successful Venture Profiles</h3>
                        <p>Case studies of successful market entry strategies.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.4 Customer Analysis - Major Companies</h3>
                        <p>In-depth customer segment analysis and preferences.</p>
                    </div>
                </div>
            </div>
        )
    },
    marketForces: {
        title: "Import and Export",
        content: (
            <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">6. Import and Export</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {Object.entries(coalImportData).map(([gradeType, data]) => (
                        <div key={gradeType} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-2 text-center">{gradeType} Coal Import Volumes</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="country" />
                                    <YAxis label={{ value: 'Import Volume', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip />
                                    <Bar dataKey="volume" fill={COLORS[2]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.1 Regulatory Framework Overview</h3>
                        <p>Comprehensive analysis of regulatory environment and compliance requirements.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.2 New Business and Ease of Doing Business Index</h3>
                        <p>Evaluation of market entry barriers and business environment.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.3 Successful Venture Profiles</h3>
                        <p>Case studies of successful market entry strategies.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">5.4 Customer Analysis - Major Companies</h3>
                        <p>In-depth customer segment analysis and preferences.</p>
                    </div>
                </div>
            </div>
        )
    }
};

export const Coal = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [clarityDropdownOpen, setClarityDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const SidebarItem = ({ icon, label, onClick, isDropdown }) => (
        <div
            className="relative group w-full"
        >
            <div
                onClick={onClick}
                className={`
                    flex items-center 
                    p-3 
                    cursor-pointer 
                    rounded-lg 
                    transition-all 
                    ease-in-out 
                    duration-500
                    ${isExpanded ? 'w-full pl-4' : 'w-full pl-2'}
                    hover:bg-[${COLORS[0]}]/10
                    ${isDropdown ? 'relative' : ''}
                `}
            >
                {React.cloneElement(icon, {
                    className: `text-[${COLORS[0]}] mr-3 transition-all duration-500 ease-in-out`,
                    size: 24
                })}
                <div
                    className={`
                        overflow-hidden 
                        transition-all 
                        duration-500 
                        ease-in-out 
                        ${isExpanded ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}
                        flex items-center
                    `}
                >
                    <span className="text-gray-800 text-sm whitespace-nowrap flex items-center">
                        {label}
                        {isDropdown && (
                            <ChevronDown
                                className={`
                                    ml-2 
                                    transition-transform 
                                    duration-300 
                                    ease-in-out
                                    ${clarityDropdownOpen ? 'rotate-180' : ''}
                                `}
                                style={{ color: COLORS[0] }}
                                size={20}
                            />
                        )}
                    </span>
                </div>
            </div>

            {isDropdown && isExpanded && clarityDropdownOpen && (
                <div
                    className="absolute left-full top-0 ml-2 bg-white shadow-2xl rounded-lg p-2 z-50 transition-all duration-500 ease-in-out"
                    style={{
                        borderLeft: `4px solid ${COLORS[0]}`,
                        boxShadow: `0 10px 15px -3px ${COLORS[0]}30`
                    }}
                >
                    <div className="flex flex-col space-y-2">
                        {[
                            { icon: <Car />, label: "Automobile", href: "/automobile" },
                            { icon: <Stethoscope />, label: "Healthcare", href: "/healthcare" },
                            { icon: <Laptop />, label: "Technology", href: "/technology" },
                            { icon: <Box />, label: "Coal", href: "/Coal" }
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`
                                    flex items-center 
                                    p-2 
                                    hover:bg-[${COLORS[0]}]/10 
                                    rounded-lg 
                                    group/subitem
                                    transition-all 
                                    duration-300
                                    ease-in-out
                                `}
                            >
                                {React.cloneElement(item.icon, {
                                    className: `mr-2 text-[${COLORS[0]}] transition-transform duration-500 ease-in-out group-hover/subitem:rotate-6`,
                                    size: 20
                                })}
                                <span className="transition-all duration-500 ease-in-out group-hover/subitem:translate-x-1">
                                    {item.label}
                                </span>
                                <ChevronRight
                                    className={`
                                        ml-auto 
                                        opacity-0 
                                        group-hover/subitem:opacity-100 
                                        transition-all 
                                        duration-300
                                        ease-in-out
                                    `}
                                    style={{ color: COLORS[0] }}
                                    size={16}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            <div
                className={`
                    fixed 
                    left-0 
                    top-0 
                    h-full 
                    bg-white 
                    shadow-xl 
                    transition-all 
                    duration-300 
                    ease-in-out
                    z-50 
                    group
                    w-16 
                    hover:w-64
                `}
                onMouseEnter={() => {
                    setIsExpanded(true);
                }}
                onMouseLeave={() => {
                    setIsExpanded(false);
                    setClarityDropdownOpen(false);
                }}
            >
                <div
                    className="p-4 flex items-center justify-center h-16 border-b transition-all duration-500 ease-in-out"
                    style={{ borderBottomColor: COLORS[0] }}
                >
                    <h1
                        className="text-2xl font-bold tracking-wider transition-all duration-500 ease-in-out"
                        style={{
                            color: COLORS[0],
                            transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                            opacity: isExpanded ? 1 : 0.7
                        }}
                    >
                        {isExpanded ? "Clarity" : "C"}
                    </h1>
                </div>

                <div
                    className="flex flex-col space-y-2 p-2"
                    onMouseEnter={() => setIsExpanded(true)}
                >
                    <SidebarItem
                        icon={<LayoutDashboard />}
                        label="Dashboard"
                        onClick={() => navigate('/dashboard')}
                    />

                    <SidebarItem
                        icon={<Laptop />}
                        label="Clarity"
                        isDropdown={true}
                        onClick={() => setClarityDropdownOpen(!clarityDropdownOpen)}
                    />

                    <SidebarItem
                        icon={<Database />}
                        label="Data Library"
                        onClick={() => navigate('/data-library')}
                    />

                    <SidebarItem
                        icon={<FileText />}
                        label="Report Builder"
                        onClick={() => navigate('/report-builder')}
                    />

                    <SidebarItem
                        icon={<Bot />}
                        label="AI Analyst"
                        onClick={() => navigate('/ai-analyst')}
                    />

                    <SidebarItem
                        icon={<UserRound />}
                        label="Virtual Analyst Assistant"
                        onClick={() => navigate('/virtual-analyst')}
                    />

                    <div className="absolute bottom-0 w-full p-2">
                        <SidebarItem
                            icon={<LogOut />}
                            label="Logout"
                            onClick={handleLogout}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`
                    ml-16 
                    transition-all 
                    duration-500 
                    ease-in-out
                    ${isExpanded ? 'md:ml-64' : 'md:ml-16'}
                `}
            >
                <div
                    className="flex bg-[#8A4FFF]/20 p-4 space-x-4 shadow-sm overflow-x-auto whitespace-nowrap"
                >
                    <button
                        onClick={() => setActiveSection('dashboard')}
                        className={`
                           px-4 
                           py-2 
                           rounded-md 
                           transition-all 
                           duration-300 
                           text-sm 
                           font-medium
                           whitespace-nowrap
                           truncate
                           max-w-[200px]
                           ${activeSection === 'dashboard'
                                ? `bg-[#8A4FFF] text-white shadow-lg`
                                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'}
                       `}
                    >
                        Dashboard
                    </button>
                    {Object.keys(MARKET_SECTIONS).map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`
                               px-4 
                               py-2 
                               rounded-md 
                               transition-all 
                               duration-300 
                               text-sm 
                               font-medium
                               whitespace-nowrap
                               truncate
                               max-w-[200px]
                               ${activeSection === section
                                    ? `bg-[#8A4FFF] text-white shadow-lg`
                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'}
                           `}
                        >
                            {MARKET_SECTIONS[section].title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-6">
                    {activeSection === 'dashboard' ? (
                        <>
                            <Coaldash />
                        </>
                    ) : (
                        MARKET_SECTIONS[activeSection].content
                    )}
                </div>

                <Footer />
            </div>
        </>
    );
};