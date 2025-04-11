import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Subcat = () => {
    const [chartType, setChartType] = useState('stacked');
    const navigate = useNavigate();
    // Data extracted from the images
    const categories = [
        {
            id: 'powertrain',
            name: 'Powertrain & Electrification',
            marketSize: 462,
            marketYear: 2030,
            cagr: 9.5,
            growth: 'High',
            growthScore: 8,
            segments: [
                { name: 'Smart Thermal Management', marketSize: 24, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Advanced Electric Motors', marketSize: 35, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Wireless Charging', marketSize: 7, marketYear: 2030, impact: 'Medium', impactScore: 5 },
                { name: 'Ultra-Fast Charging', marketSize: 12, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Solid-State Batteries', marketSize: 26, marketYear: 2032, impact: 'High', impactScore: 8 }
            ]
        },
        {
            id: 'adas',
            name: 'ADAS & Autonomous Driving',
            marketSize: 3200,
            marketYear: 2033,
            startMarket: 273.75,
            startYear: 2025,
            growth: 'Very High',
            growthScore: 10,
            segments: [
                { name: 'V2X Communication', marketSize: 12, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Computer Vision AI', marketSize: 8.5, marketYear: 2029, impact: 'High', impactScore: 8 },
                { name: 'Robotaxi Technology', marketSize: 17, marketYear: 2025, impact: 'Medium', impactScore: 5 },
                { name: 'Centralized ADAS Computing', marketSize: 19, marketYear: 2028, impact: 'High', impactScore: 8 },
                { name: 'Sensor Fusion', marketSize: 14, marketYear: 2028, impact: 'High', impactScore: 8 }
            ]
        },
        {
            id: 'connected',
            name: 'Connected Car Technologies',
            marketSize: 56,
            marketYear: 2035,
            startMarket: 35.9,
            startYear: 2024,
            growth: 'Medium',
            growthScore: 5,
            segments: [
                { name: '5G Connectivity', marketSize: 10, marketYear: 2035, impact: 'High', impactScore: 8 },
                { name: 'Edge Computing', marketSize: 8, marketYear: 2031, impact: 'High', impactScore: 8 },
                { name: 'Cybersecurity', marketSize: 9.3, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Fleet Management', marketSize: 52, marketYear: 2030, impact: 'Medium', impactScore: 5 },
                { name: 'Digital Twin Tech', marketSize: 4, marketYear: 2033, impact: 'Medium', impactScore: 5 }
            ]
        },
        {
            id: 'sdc',
            name: 'Software-Defined Vehicles',
            marketSize: 1200,
            marketYear: 2030,
            startMarket: 213.5,
            startYear: 2024,
            cagr: 34,
            growth: 'Very High',
            growthScore: 10,
            segments: [
                { name: 'OTA Updates', marketSize: 13, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'App Ecosystems', marketSize: 8, marketYear: 2028, impact: 'Medium', impactScore: 5 },
                { name: 'Centralized Computing', marketSize: 25, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Manufacturing AI', marketSize: 12, marketYear: 2028, impact: 'Medium', impactScore: 5 },
                { name: 'UX/UI', marketSize: 7, marketYear: 2029, impact: 'Medium', impactScore: 5 }
            ]
        },
        {
            id: 'sustainability',
            name: 'Sustainability & Circular Economy',
            marketSize: 94.87,
            marketYear: 2029,
            growth: 'High',
            growthScore: 8,
            segments: [
                { name: 'Carbon Neutral Manufacturing', marketSize: 32, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Materials Recycling', marketSize: 12, marketYear: 2030, impact: 'Medium', impactScore: 5 },
                { name: 'Battery Analytics', marketSize: 6, marketYear: 2029, impact: 'High', impactScore: 8 },
                { name: 'Energy Efficiency', marketSize: 8, marketYear: 2030, impact: 'High', impactScore: 8 },
                { name: 'Reduced Emissions Routing', marketSize: 4, marketYear: 2028, impact: 'Medium', impactScore: 5 }
            ]
        }
    ];

    // For the growth/impact score visualization
    const radarData = categories.map(cat => {
        return {
            subject: cat.name.split(' ')[0],
            marketScore: Math.log10(cat.marketSize) * 2,
            growthScore: cat.growthScore,
            fullName: cat.name
        };
    });

    // For bar chart - market size by category
    const marketSizeData = categories.map(cat => {
        return {
            name: cat.name.split(' ')[0],
            marketSize: cat.marketSize,
            fullName: cat.name
        };
    });

    // For pie chart - market share
    const pieData = categories.map(cat => {
        return {
            name: cat.name.split(' ')[0],
            value: cat.marketSize,
            fullName: cat.name
        };
    });

    // Fixed: Create proper segment data for each category
    // Instead of using the segment names from just the first category,
    // we'll prepare individual datasets for each category

    // First, get all unique segment names from the first category to use as reference
    const powertrainSegments = categories[0].segments.map(seg => seg.name);

    // Create separate datasets for each category
    const powertrainData = {
        name: 'Powertrain',
        fullName: 'Powertrain & Electrification',
        ...Object.fromEntries(categories[0].segments.map(seg => [seg.name, seg.marketSize]))
    };

    const adasData = {
        name: 'ADAS',
        fullName: 'ADAS & Autonomous Driving',
        ...Object.fromEntries(categories[1].segments.map(seg => [seg.name, seg.marketSize]))
    };

    const connectedData = {
        name: 'Connected',
        fullName: 'Connected Car Technologies',
        ...Object.fromEntries(categories[2].segments.map(seg => [seg.name, seg.marketSize]))
    };

    const sdvData = {
        name: 'Software-Defined',
        fullName: 'Software-Defined Vehicles',
        ...Object.fromEntries(categories[3].segments.map(seg => [seg.name, seg.marketSize]))
    };

    const sustainabilityData = {
        name: 'Sustainability',
        fullName: 'Sustainability & Circular Economy',
        ...Object.fromEntries(categories[4].segments.map(seg => [seg.name, seg.marketSize]))
    };

    // Combine into a single array for the stacked bar chart
    const segmentData = [powertrainData, adasData, connectedData, sdvData, sustainabilityData];

    // Get all unique segment names across all categories
    const allSegmentNames = [
        ...new Set(
            categories.flatMap(cat => cat.segments.map(seg => seg.name))
        )
    ];

    // Colors for charts and segments
    const COLORS = ['#8A4FFF', '#6A5ACD', '#9370DB', '#BA55D3', '#DA70D6', '#EE82EE'];

    // More vibrant colors for segments
    const SEGMENT_COLORS = {
        'Smart Thermal Management': '#8A4FFF',
        'Advanced Electric Motors': '#6A5ACD',
        'Wireless Charging': '#9370DB',
        'Ultra-Fast Charging': '#BA55D3',
        'Solid-State Batteries': '#DA70D6',
        'V2X Communication': '#8A4FFF',
        'Computer Vision AI': '#6A5ACD',
        'Robotaxi Technology': '#9370DB',
        'Centralized ADAS Computing': '#BA55D3',
        'Sensor Fusion': '#DA70D6',
        '5G Connectivity': '#8A4FFF',
        'Edge Computing': '#6A5ACD',
        'Cybersecurity': '#9370DB',
        'Fleet Management': '#BA55D3',
        'Digital Twin Tech': '#DA70D6',
        'OTA Updates': '#8A4FFF',
        'App Ecosystems': '#6A5ACD',
        'Centralized Computing': '#9370DB',
        'Manufacturing AI': '#BA55D3',
        'UX/UI': '#DA70D6',
        'Carbon Neutral Manufacturing': '#8A4FFF',
        'Materials Recycling': '#6A5ACD',
        'Battery Analytics': '#9370DB',
        'Energy Efficiency': '#BA55D3',
        'Reduced Emissions Routing': '#DA70D6'
    };

    // Custom tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const categoryData = segmentData.find(cat => cat.name === label);

            if (chartType === 'bar') {
                const fullName = payload[0]?.payload?.fullName || label;
                return (
                    <div className="bg-white p-3 rounded shadow">
                        <p className="font-bold">{fullName}</p>
                        {payload.map((entry, index) => (
                            <p key={index} style={{ color: entry.color }}>
                                {entry.name}: ${entry.value}B
                            </p>
                        ))}
                    </div>
                );
            } else if (chartType === 'stacked') {
                return (
                    <div className="bg-white p-3 rounded shadow">
                        <p className="font-bold">{categoryData?.fullName || label}</p>
                        {payload.map((entry, index) => (
                            entry.value > 0 ? (
                                <p key={index} style={{ color: entry.color }}>
                                    {entry.name}: ${entry.value}B
                                </p>
                            ) : null
                        ))}
                    </div>
                );
            } else if (chartType === 'radar') {
                return (
                    <div className="bg-white p-3 rounded shadow">
                        <p className="font-bold">{payload[0]?.payload?.fullName}</p>
                        <p style={{ color: payload[0]?.color }}>Market Size (log): {payload[0]?.value.toFixed(1)}</p>
                        <p style={{ color: payload[1]?.color }}>Growth Score: {payload[1]?.value}</p>
                    </div>
                );
            } else if (chartType === 'pie') {
                return (
                    <div className="bg-white p-3 rounded shadow">
                        <p className="font-bold">{payload[0]?.payload?.fullName || payload[0]?.name}</p>
                        <p style={{ color: payload[0]?.color }}>${payload[0]?.value}B</p>
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <div className="bg-gradient-to-tr from-purple-100 to-indigo-100 p-6 rounded-lg">
            <div className='flex items-center justify-between mb-8'>
                <h1 className="text-3xl font-bold text-purple-500">Automotive Industry Market Map</h1>
                <button
                    onClick={() => { navigate("/autodash") }}
                    className="px-4 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    <div className='flex gap-2'>
                        <p>Dashboard</p>< ChevronRight />
                    </div>
                </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded ${chartType === 'bar' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
                    onClick={() => setChartType('bar')}
                >
                    Bar Chart
                </button>
                <button
                    className={`px-4 py-2 rounded ${chartType === 'stacked' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
                    onClick={() => setChartType('stacked')}
                >
                    Segment Breakdown
                </button>
                <button
                    className={`px-4 py-2 rounded ${chartType === 'pie' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
                    onClick={() => setChartType('pie')}
                >
                    Market Share
                </button>
                <button
                    className={`px-4 py-2 rounded ${chartType === 'radar' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
                    onClick={() => setChartType('radar')}
                >
                    Growth/Size Radar
                </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow h-96">
                {chartType === 'bar' && (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={marketSizeData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                            <YAxis label={{ value: 'Market Size (Billion $)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Bar dataKey="marketSize" name="Market Size (Billion $)" fill="#8A4FFF" />
                        </BarChart>
                    </ResponsiveContainer>
                )}

                {chartType === 'stacked' && (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={segmentData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                            <YAxis label={{ value: 'Segment Size (Billion $)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            {/* Map through segments from each category */}
                            {categories[0].segments.map((segment) => (
                                <Bar
                                    key={segment.name}
                                    dataKey={segment.name}
                                    stackId="a"
                                    fill={SEGMENT_COLORS[segment.name]}
                                    name={segment.name}
                                />
                            ))}
                            {categories[1].segments.map((segment) => (
                                !categories[0].segments.some(s => s.name === segment.name) && (
                                    <Bar
                                        key={segment.name}
                                        dataKey={segment.name}
                                        stackId="a"
                                        fill={SEGMENT_COLORS[segment.name]}
                                        name={segment.name}
                                    />
                                )
                            ))}
                            {categories.slice(2).flatMap(cat =>
                                cat.segments.filter(seg =>
                                    !categories[0].segments.some(s => s.name === seg.name) &&
                                    !categories[1].segments.some(s => s.name === seg.name)
                                )
                            ).map(segment => (
                                <Bar
                                    key={segment.name}
                                    dataKey={segment.name}
                                    stackId="a"
                                    fill={SEGMENT_COLORS[segment.name]}
                                    name={segment.name}
                                />
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                )}

                {chartType === 'pie' && (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                )}

                {chartType === 'radar' && (
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius={120} data={radarData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 10]} />
                            <Radar name="Market Size (log)" dataKey="marketScore" stroke="#8A4FFF" fill="#8A4FFF" fillOpacity={0.4} />
                            <Radar name="Growth Potential" dataKey="growthScore" stroke="#DA70D6" fill="#DA70D6" fillOpacity={0.4} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>
                )}
            </div>

            <div className="mt-6 bg-purple-50 p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-3 text-purple-700">Key Market Insights</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-600 mr-2"></span>
                        <span>Software-Defined Vehicles: The fastest growing segment with a CAGR of 34%</span>
                    </li>
                    <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-600 mr-2"></span>
                        <span>ADAS & Autonomous Driving: Largest potential market reaching $3.2T by 2033</span>
                    </li>
                    <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-600 mr-2"></span>
                        <span>Fleet Management: Largest individual segment at $52B by 2030</span>
                    </li>
                    <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-600 mr-2"></span>
                        <span>Top high-impact segments: Carbon Neutral Manufacturing ($32B), Advanced Electric Motors ($35B)</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}