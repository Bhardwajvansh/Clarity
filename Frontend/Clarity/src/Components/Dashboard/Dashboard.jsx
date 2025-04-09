import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    User,
    CreditCard,
    TrendingUp,
    Clock,
    DollarSign,
    Zap,
    BarChart2,
    Star,
    Laptop,
    Database,
    Activity,
    ArrowRight,
} from 'lucide-react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    RadialBarChart,
    RadialBar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    Legend
} from 'recharts';

export const Dashboard = () => {
    const navigate = useNavigate();
    const COLORS = [
        '#8A4FFF',
        '#6A5ACD',
        '#9370DB',
        '#BA55D3',
        '#DA70D6'
    ];

    const timeSavedData = [
        { day: 'Mon', hours: 2 },
        { day: 'Tue', hours: 5 },
        { day: 'Wed', hours: 8 },
        { day: 'Thu', hours: 12 },
        { day: 'Fri', hours: 15 },
        { day: 'Sat', hours: 10 },
        { day: 'Sun', hours: 7 }
    ];

    const creditsData = [
        { name: 'Used', value: 350 },
        { name: 'Available', value: 650 }
    ];

    const opportunityData = [
        { name: 'Ai Analyst', value: 30 },
        { name: 'Report Builder', value: 45 },
        { name: 'Virtual Assistant', value: 25 }
    ];

    const utilizationData = [
        { name: 'Jan', value: 65 },
        { name: 'Feb', value: 75 },
        { name: 'Mar', value: 83 },
        { name: 'Apr', value: 87 },
        { name: 'May', value: 92 }
    ];

    const analyticsCards = [
        {
            icon: <Laptop size={32} />,
            title: "Clarity",
            description: "Interactive data exploration and conversational insights.",
            route: "/claritydashboard"
        },
        {
            icon: <Database size={32} />,
            title: "Data Library",
            description: "Comprehensive collection of curated datasets for in-depth analysis.",
            route: "/data-library"
        },
        {
            icon: <Activity size={32} />,
            title: "Report Builder",
            description: "Create customized reports with intuitive drag-and-drop interface.",
            route: "/report-builder"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "AI Analyst",
            description: "Advanced AI-powered insights and predictive analytics.",
            route: "/ai-analyst"
        },
        {
            icon: <User size={32} />,
            title: "Virtual Analyst Assistant",
            description: "Automated data interpretation and strategic recommendations.",
            route: "/virtual-analyst"
        },
    ];

    return (
        <div>
            <div className="bg-gradient-to-tr from-purple-100 to-indigo-100 p-10 mx-auto relative overflow-hidden shadow-sm">
                <h1 className="text-3xl font-bold" style={{ background: `linear-gradient(to right, ${COLORS[0]}, ${COLORS[3]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Clarity Dashboard
                </h1>
                <br />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>

                <div className="relative z-10">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div
                                className="md:col-span-2 text-white p-6 rounded-lg shadow-md"
                                style={{
                                    background: `linear-gradient(to right, ${COLORS[0]}, ${COLORS[3]})`
                                }}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <User className="mr-3" size={32} />
                                            <h1 className="text-3xl font-bold">Welcome, John</h1>
                                        </div>
                                        <p className="text-sm mb-4">Mar 24, 2025 18:28 PM</p>
                                        <div className="bg-white bg-opacity-20 inline-block px-3 py-1 rounded-full">
                                            <CreditCard className="inline mr-2 text-black" size={16} />
                                            <span className="text-sm text-black">Current Plan: Starter Plan</span>
                                        </div>
                                    </div>
                                    <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition flex items-center">
                                        <TrendingUp className="mr-2" size={16} />
                                        See Pricing Plans
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
                                <div className="flex items-center mb-4">
                                    <Clock className="mr-3 text-purple-600" size={24} />
                                    <h3 className="text-xl font-semibold text-purple-600">Time Saved</h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-3xl font-bold text-green-500 mr-4">59</div>
                                    <div className="text-gray-600">Total hours saved this week</div>
                                </div>
                                <div className="mt-4 h-32 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={timeSavedData}>
                                            <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                            <YAxis axisLine={false} tickLine={false} />
                                            <Tooltip
                                                cursor={{ fill: 'transparent' }}
                                                content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-white p-2 shadow-lg rounded-md">
                                                                <p className="text-gray-600">{`${payload[0].payload.day}: ${payload[0].value} hours`}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Bar
                                                dataKey="hours"
                                                fill={COLORS[1]}
                                                radius={[4, 4, 0, 0]}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <DollarSign className="mr-3 text-blue-600" size={24} />
                                    <h3 className="text-xl font-semibold text-blue-600">Available Credits</h3>
                                </div>
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl font-bold text-green-500 mr-4">650</div>
                                    <div className="text-gray-600">Credits remaining</div>
                                </div>
                                <div className="h-48 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={creditsData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {creditsData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#d1d5db' : COLORS[4]} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-white p-2 shadow-lg rounded-md">
                                                                <p className="text-gray-600">{`${payload[0].name}: ${payload[0].value} credits`}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <Zap className="mr-3 text-amber-500" size={24} />
                                    <h3 className="text-xl font-semibold text-amber-500">Latent Opportunity</h3>
                                </div>
                                <div className="flex items-center mb-4">
                                    <div className="text-gray-600">Potential enhancements to boost productivity</div>
                                </div>
                                <div className="h-48 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            layout="vertical"
                                            data={opportunityData}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <XAxis type="number" hide />
                                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                                            <Tooltip
                                                content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-white p-2 shadow-lg rounded-md">
                                                                <p className="text-gray-600">{`${payload[0].payload.name}: ${payload[0].value}% opportunity`}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Bar dataKey="value" fill={COLORS[2]} radius={[0, 4, 4, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <BarChart2 className="mr-3 text-indigo-600" size={24} />
                                    <h3 className="text-xl font-semibold text-indigo-600">Utilization Value</h3>
                                </div>
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl font-bold text-indigo-500 mr-4">92%</div>
                                    <div className="text-gray-600">Current utilization</div>
                                </div>
                                <div className="h-40 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={utilizationData}>
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                            <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
                                            <Tooltip
                                                content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-white p-2 shadow-lg rounded-md">
                                                                <p className="text-gray-600">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke={COLORS[0]}
                                                strokeWidth={3}
                                                dot={{ r: 4, fill: COLORS[0] }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Analytics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {analyticsCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 group"
                            >
                                <div className="text-purple-500 mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2">{card.title}</h3>
                                <p className="text-gray-600 mb-4">{card.description}</p>
                                <button
                                    onClick={() => navigate(card.route)}
                                    className="flex items-center text-purple-600 hover:text-purple-800 transition"
                                >
                                    Visit {card.title} <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}