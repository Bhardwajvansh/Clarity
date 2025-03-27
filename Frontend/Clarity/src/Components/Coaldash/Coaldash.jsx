import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Line } from 'recharts';

const COLORS = ['#8A4FFF', '#6A5ACD', '#9370DB', '#BA55D3', '#DA70D6'];

const coalPlannedProjects = [
    { project: 'Carmalco Coal Mine', production: 375 },
    { project: 'Oyu Coal Project', production: 315 },
    { project: 'Eagle Coal Project', production: 250 },
    { project: 'Gahcho Coal Project', production: 200 },
    { project: 'Alpha Coal Project', production: 180 },
    { project: 'Waterberg Coal Project', production: 160 },
    { project: 'Thakadu Coal Project', production: 150 },
    { project: 'Waterberg Coal Block II', production: 150 },
    { project: 'Vaschak Coal Project', production: 140 },
    { project: 'Winchester Coal Project', production: 140 }
];

const supplyDemandData = [
    { year: '2013', supply: 1050000, demand: 1050000, gap: 0 },
    { year: '2014', supply: 1050000, demand: 1050000, gap: 0 },
    { year: '2015', supply: 1000000, demand: 980000, gap: -20000 },
    { year: '2016', supply: 950000, demand: 970000, gap: 20000 },
    { year: '2017', supply: 980000, demand: 1000000, gap: 20000 },
    { year: '2018', supply: 1050000, demand: 1020000, gap: -30000 },
    { year: '2019', supply: 1020000, demand: 1000000, gap: -20000 },
    { year: '2020', supply: 970000, demand: 950000, gap: -20000 },
    { year: '2021', supply: 1020000, demand: 1000000, gap: -20000 },
    { year: '2022', supply: 1050000, demand: 1030000, gap: -20000 },
    { year: '2023', supply: 1100000, demand: 1070000, gap: -30000 }
];

export const Coaldash = () => {
    return (
        <div className="p-6 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Coal Market Dashboard</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2 text-center">Top 25 Coal Planned/Exploration Projects</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={coalPlannedProjects}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="project" angle={-45} textAnchor="end" interval={0} height={100} />
                            <YAxis label={{ value: 'Production (Mtpa)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Bar dataKey="production" fill={COLORS[0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2 text-center">Global Coal Supply-Demand Gap (2013-2023)</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart data={supplyDemandData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis yAxisId="left" label={{ value: 'Supply/Demand', angle: -90, position: 'insideLeft' }} />
                            <YAxis yAxisId="right" orientation="right" label={{ value: 'Gap', angle: 90, position: 'insideRight' }} />
                            <Tooltip />
                            <Bar yAxisId="left" dataKey="supply" barSize={20} fill={COLORS[1]} />
                            <Bar yAxisId="left" dataKey="demand" barSize={20} fill={COLORS[2]} />
                            <Line yAxisId="right" type="monotone" dataKey="gap" stroke={COLORS[3]} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="font-semibold mb-4">Key Market Insights</h3>
                <p>The International Energy Agency's (IEA) Net Zero Emissions by 2050 Scenario outlines a pathway where global coal use declines by approximately 90% by 2050, with the power sector in advanced economies achieving complete decarbonization by 2035 and worldwide by 2040.</p>
                <p className="mt-2">Despite these targets, global coal demand has been on the rise. In 2023, coal consumption reached a record 8.7 billion tonnes, a 2.6% increase from the previous year. This growth was predominantly driven by increased demand in Asia, particularly in China and India, together accounting for 80% of global coal consumption.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">6.1 Market Drivers</h3>
                    <p>Key economic and industrial factors propelling coal market growth, including energy demand in developing nations and industrial expansion.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">6.2 Market Constraints</h3>
                    <p>Challenges including environmental regulations, renewable energy competition, and global decarbonization efforts.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">6.3 Market Opportunities</h3>
                    <p>Potential growth areas in clean coal technologies, carbon capture, and emerging market energy infrastructure.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">6.4 Competitive Landscape</h3>
                    <ul className="list-disc pl-5">
                        <li>Supplier power dynamics</li>
                        <li>Buyer negotiation capabilities</li>
                        <li>Barriers to market entry</li>
                        <li>Intensity of competitive rivalry</li>
                        <li>Threat of alternative energy sources</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};