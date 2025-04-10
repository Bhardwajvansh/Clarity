import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, ChevronUp, Zap, Car, Cpu, Network, Battery, Gauge, ArrowUpRight } from 'lucide-react';

export const Subcat = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const navigate = useNavigate();
    const COLORS = {
        high: '#8A4FFF',
        medium: '#6A5ACD',
        low: '#9370DB',
        veryLow: '#BA55D3',
        header: '#DA70D6'
    };

    const toggleCategory = (category) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    const categories = [
        {
            id: 'powertrain',
            name: 'Powertrain & Electrification',
            icon: <Battery className="mr-2" />,
            market: '$462B by 2030 (CAGR 9.5%)',
            growth: 'High',
            segments: [
                { name: 'Smart Thermal Management', impact: 'High', market: '$24B by 2030' },
                { name: 'Advanced Electric Motors', impact: 'High', market: '$35B by 2030' },
                { name: 'Wireless Charging', impact: 'Medium', market: '$7B by 2030' },
                { name: 'Ultra-Fast Charging', impact: 'High', market: '$12B by 2030' },
                { name: 'Solid-State Batteries', impact: 'High', market: '$26B by 2032' }
            ]
        },
        {
            id: 'adas',
            name: 'ADAS & Autonomous Driving',
            icon: <Gauge className="mr-2" />,
            market: '$273.75B (2025) → $3.2T (2033)',
            growth: 'Very High',
            segments: [
                { name: 'V2X Communication', impact: 'High', market: '$12B by 2030' },
                { name: 'Computer Vision AI', impact: 'High', market: '$8.5B by 2029' },
                { name: 'Robotaxi Technology', impact: 'Medium', market: '$17B by 2025' },
                { name: 'Centralized ADAS Computing', impact: 'High', market: '$19B by 2028' },
                { name: 'Sensor Fusion', impact: 'High', market: '$14B by 2028' }
            ]
        },
        {
            id: 'connected',
            name: 'Connected Car Technologies',
            icon: <Network className="mr-2" />,
            market: '$35.9B (2024) → $56B (2035)',
            growth: 'Medium',
            segments: [
                { name: '5G Connectivity', impact: 'High', market: '$10B by 2035' },
                { name: 'Edge Computing', impact: 'High', market: '$8B by 2031' },
                { name: 'Cybersecurity', impact: 'High', market: '$9.3B by 2030' },
                { name: 'Fleet Management', impact: 'Medium', market: '$52B by 2030' },
                { name: 'Digital Twin Tech', impact: 'Medium', market: '$4B by 2033' }
            ]
        },
        {
            id: 'sdc',
            name: 'Software-Defined Vehicles',
            icon: <Cpu className="mr-2" />,
            market: '$213.5B (2024) → $1.2T (2030) at CAGR 34%',
            growth: 'Very High',
            segments: [
                { name: 'OTA Updates', impact: 'High', market: '$13B by 2030' },
                { name: 'App Ecosystems', impact: 'Medium', market: '$8B by 2028' },
                { name: 'Centralized Computing', impact: 'High', market: '$25B by 2030' },
                { name: 'Manufacturing AI', impact: 'Medium', market: '$12B by 2028' },
                { name: 'UX/UI', impact: 'Medium', market: '$7B by 2029' }
            ]
        },
        {
            id: 'sustainability',
            name: 'Sustainability & Circular Economy',
            icon: <ArrowUpRight className="mr-2" />,
            market: 'Part of $94.87B CASE tech by 2029',
            growth: 'High',
            segments: [
                { name: 'Carbon Neutral Manufacturing', impact: 'High', market: '$32B by 2030' },
                { name: 'Materials Recycling', impact: 'Medium', market: '$12B by 2030' },
                { name: 'Battery Analytics', impact: 'High', market: '$6B by 2029' },
                { name: 'Energy Efficiency', impact: 'High', market: '$8B by 2030' },
                { name: 'Reduced Emissions Routing', impact: 'Medium', market: '$4B by 2028' }
            ]
        },
        {
            id: 'business',
            name: 'New Mobility Business Models',
            icon: <Car className="mr-2" />,
            market: 'Part of total $2.2T (2024) → $2.8T (2033)',
            growth: 'Medium',
            segments: [
                { name: 'Subscription Services', impact: 'Medium', market: '$30B by 2030' },
                { name: 'MaaS', impact: 'Medium', market: '$40B by 2030' },
                { name: 'Data Monetization', impact: 'High', market: '$7B by 2029' },
                { name: 'Connectivity Subscription', impact: 'Medium', market: '$15B by 2032' },
                { name: 'Premium ADAS Subscription', impact: 'High', market: '$12B by 2030' }
            ]
        }
    ];

    const getImpactColor = (impact) => {
        switch (impact) {
            case 'High': return COLORS.high;
            case 'Medium': return COLORS.medium;
            case 'Low': return COLORS.low;
            case 'Very High': return COLORS.veryLow;
            default: return COLORS.medium;
        }
    };

    return (
        <div className="bg-gradient-to-tr from-purple-100 to-indigo-100 p-10">
            <div className='flex items-center justify-between mb-8'>
                <h1 className="text-3xl font-bold text-purple-500">Automotive Industry Market Map</h1>
                <button
                    onClick={() => { navigate("/Automobile") }}
                    className="px-4 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    <div className='flex gap-2'>
                        <p>Dashboard</p>< ChevronRight />
                    </div>
                </button>
            </div>
            <div className="mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Key Market Potential Figures</h2>
                    <ul className="space-y-1">
                        <li className="flex items-center"><Zap size={16} className="text-purple-600 mr-2" /> Total Automotive Market: $2.2T (2024) → $2.8T (2033)</li>
                        <li className="flex items-center"><Zap size={16} className="text-purple-600 mr-2" /> Software & Electronics: $462B by 2030 (CAGR 9.5%)</li>
                        <li className="flex items-center"><Zap size={16} className="text-purple-600 mr-2" /> CASE Technologies: $94.87B by 2029 (CAGR 19.2%)</li>
                        <li className="flex items-center"><Zap size={16} className="text-purple-600 mr-2" /> Software-Defined Vehicles: $213.5B (2024) → $1.2T (2030) at CAGR 34%</li>
                        <li className="flex items-center"><Zap size={16} className="text-purple-600 mr-2" /> Autonomous Vehicles: $273.75B (2025) → $3.2T (2033)</li>
                        <li className="flex items-center"><Zap size={16} className="text-purple-600 mr-2" /> Connected Vehicle Tech: $35.9B (2024) → $56B (2035)</li>
                    </ul>
                </div>
            </div>

            <div className="flex mb-3 px-4">
                <div className="flex items-center mr-6">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS.high }}></div>
                    <span className="text-sm">High Impact/Potential</span>
                </div>
                <div className="flex items-center mr-6">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS.medium }}></div>
                    <span className="text-sm">Medium Impact/Potential</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS.low }}></div>
                    <span className="text-sm">Low Impact/Potential</span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr style={{ backgroundColor: COLORS.header }}>
                            <th className="text-left p-3 text-white font-semibold">Tech Category</th>
                            <th className="text-left p-3 text-white font-semibold">Market Size</th>
                            <th className="text-left p-3 text-white font-semibold">Growth</th>
                            <th className="text-left p-3 text-white font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <>
                                <tr
                                    key={category.id}
                                    className={`border-b ${index % 2 === 0 ? 'bg-purple-50' : 'bg-white'} hover:bg-purple-100 cursor-pointer`}
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <td className="p-3">
                                        <div className="flex items-center font-medium">
                                            {category.icon}
                                            {category.name}
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm">{category.market}</td>
                                    <td className="p-3">
                                        <span
                                            className="inline-block rounded-full px-2 py-1 text-xs text-white"
                                            style={{ backgroundColor: getImpactColor(category.growth) }}
                                        >
                                            {category.growth}
                                        </span>
                                    </td>
                                    <td className="p-3 text-right">
                                        {expandedCategory === category.id ?
                                            <ChevronUp size={18} /> :
                                            <ChevronDown size={18} />
                                        }
                                    </td>
                                </tr>

                                {expandedCategory === category.id && (
                                    <tr>
                                        <td colSpan="4" className="p-0">
                                            <div className="p-4 bg-purple-50/50">
                                                <h3 className="font-medium mb-2">Key Segments:</h3>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                    {category.segments.map((segment) => (
                                                        <div
                                                            key={segment.name}
                                                            className="p-3 rounded-lg flex flex-col justify-between"
                                                            style={{ backgroundColor: `${getImpactColor(segment.impact)}33` }}
                                                        >
                                                            <div className="font-medium text-sm mb-2">{segment.name}</div>
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-xs">{segment.market}</span>
                                                                <span
                                                                    className="inline-block rounded-full px-2 py-1 text-xs text-white"
                                                                    style={{ backgroundColor: getImpactColor(segment.impact) }}
                                                                >
                                                                    {segment.impact}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}