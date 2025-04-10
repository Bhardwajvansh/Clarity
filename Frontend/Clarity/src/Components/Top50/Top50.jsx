import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Car, Code, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

const COLORS = {
    powertrain: "#3498db",
    adas: "#8A4FFF",
    software: "#27ae60",
    manufacturing: "#f39c12"
};

export const Top50 = () => {
    const [activeCategory, setActiveCategory] = useState("powertrain");
    const navigate = useNavigate();

    const categories = {
        powertrain: {
            title: "Powertrain & Electrification Technologies",
            icon: <Zap size={24} />,
            color: COLORS.powertrain,
            technologies: [
                {
                    id: 1,
                    title: "Advanced Battery Technology",
                    status: "High Growth",
                    description: "Next-generation batteries with higher energy density, faster charging, and longer lifespan. Includes solid-state, lithium-sulfur, and silicon anode technologies.",
                    marketPotential: "$250 billion by 2030, growing at a CAGR of 26%"
                },
                {
                    id: 2,
                    title: "Ultra-Fast Charging",
                    status: "Emerging",
                    description: "Systems enabling 350kW+ charging speeds, allowing EVs to charge to 80% capacity in under 15 minutes. Includes cooling systems and high-capacity connectors.",
                    marketPotential: "$45 billion by 2030, with 35% CAGR"
                },
                {
                    id: 3,
                    title: "Hydrogen Fuel Cell Systems",
                    status: "Emerging",
                    description: "Fuel cell powertrains using hydrogen to generate electricity with water as the only emission. Particularly valuable for heavy-duty and long-range applications.",
                    marketPotential: "$70 billion by 2030, with 29% CAGR"
                },
                {
                    id: 4,
                    title: "800V Architecture",
                    status: "Growing",
                    description: "High-voltage electrical systems enabling faster charging, reduced weight, improved efficiency, and better thermal management in EVs.",
                    marketPotential: "$35 billion by 2030"
                },
                {
                    id: 5,
                    title: "Wireless EV Charging",
                    status: "Early Stage",
                    description: "Inductive charging systems allowing EVs to be charged without physical connections. Includes static parking pad solutions and dynamic in-road charging.",
                    marketPotential: "$15 billion by 2030, with 46% CAGR"
                },
                {
                    id: 6,
                    title: "Silicon Carbide Power Electronics",
                    status: "Growing",
                    description: "Wide-bandgap semiconductor technology enabling more efficient power conversion, higher operating temperatures, and reduced cooling requirements.",
                    marketPotential: "$7.5 billion by 2030 in automotive applications"
                }
            ]
        },
        adas: {
            title: "ADAS & Autonomous Driving Technologies",
            icon: <Car size={24} />,
            color: COLORS.adas,
            technologies: [
                {
                    id: 9,
                    title: "LiDAR Systems",
                    status: "High Growth",
                    description: "Advanced light detection and ranging sensors for highly accurate 3D mapping and object detection, crucial for L3+ autonomous vehicles. Includes solid-state and FMCW designs.",
                    marketPotential: "$8 billion by 2030, with 36% CAGR"
                },
                {
                    id: 10,
                    title: "Edge AI Computing Platforms",
                    status: "Critical",
                    description: "High-performance, low-power computing systems for real-time processing of sensor data and AI-driven decision making in autonomous vehicles.",
                    marketPotential: "$12 billion by 2030, with 32% CAGR"
                },
                {
                    id: 11,
                    title: "HD Maps & Localization",
                    status: "Growing",
                    description: "Centimeter-accurate mapping and localization systems that enable autonomous vehicles to precisely determine their position and navigate complex environments.",
                    marketPotential: "$16 billion by 2030"
                },
                {
                    id: 12,
                    title: "4D Imaging Radar",
                    status: "Emerging",
                    description: "High-resolution radar systems capable of detecting velocity, range, angle, and elevation of objects, providing enhanced perception in all weather conditions.",
                    marketPotential: "$5.5 billion by 2030, with 30% CAGR"
                },
                {
                    id: 13,
                    title: "Sensor Fusion Algorithms",
                    status: "Critical",
                    description: "Software that combines data from multiple sensors (cameras, radar, LiDAR) to create a comprehensive and redundant understanding of the vehicle's surroundings.",
                    marketPotential: "Part of $40+ billion autonomous software market by 2030"
                },
                {
                    id: 14,
                    title: "Driver Monitoring Systems",
                    status: "Growing",
                    description: "Camera and sensor-based systems that monitor driver attention, alertness, and readiness to take control in semi-autonomous vehicles. Critical for L2+ systems.",
                    marketPotential: "$4.5 billion by 2030"
                }
            ]
        },
        software: {
            title: "Software & Digital Platforms",
            icon: <Code size={24} />,
            color: COLORS.software,
            technologies: [
                {
                    id: 23,
                    title: "Software-Defined Vehicle Architecture",
                    status: "Transformative",
                    description: "Centralized computing architecture that abstracts hardware from software, enabling flexible feature deployment, improvements, and monetization throughout vehicle lifecycle.",
                    marketPotential: "$640 billion by 2030, with 34% CAGR"
                },
                {
                    id: 24,
                    title: "AI & Machine Learning Platforms",
                    status: "Critical",
                    description: "Software frameworks that enable continuous learning and improvement of vehicle functions, personalization, and adaptive features based on usage patterns.",
                    marketPotential: "$35 billion by 2030"
                },
                {
                    id: 25,
                    title: "Over-the-Air Update Systems",
                    status: "Essential",
                    description: "Platforms enabling secure, reliable wireless updates to vehicle software and firmware, supporting new features, bug fixes, and security patches throughout vehicle life.",
                    marketPotential: "$14 billion by 2030"
                },
                {
                    id: 26,
                    title: "App Stores & Ecosystem",
                    status: "Growing",
                    description: "Vehicle-specific application marketplaces and developer ecosystems enabling third-party software integration and new revenue streams for automakers.",
                    marketPotential: "$24 billion by 2030"
                },
                {
                    id: 27,
                    title: "Blockchain for Automotive",
                    status: "Emerging",
                    description: "Decentralized ledger technology for secure vehicle data sharing, supply chain transparency, fractional ownership models, and usage-based services.",
                    marketPotential: "$5.6 billion by 2030"
                },
                {
                    id: 28,
                    title: "Data Marketplaces",
                    status: "Emerging",
                    description: "Platforms for securely sharing and monetizing vehicle-generated data with third parties while maintaining privacy and compliance with regulations.",
                    marketPotential: "$3.5 billion by 2030"
                }
            ]
        },
        manufacturing: {
            title: "Manufacturing & Materials Technologies",
            icon: <Factory size={24} />,
            color: COLORS.manufacturing,
            technologies: [
                {
                    id: 30,
                    title: "Advanced Composites",
                    status: "Growing",
                    description: "Lightweight, high-strength materials including carbon fiber, glass fiber composites, and natural fiber reinforced polymers for vehicle weight reduction and improved efficiency.",
                    marketPotential: "$18 billion by 2030 in automotive applications"
                },
                {
                    id: 31,
                    title: "Additive Manufacturing",
                    status: "Growing",
                    description: "3D printing technologies for rapid prototyping, tooling, and production of complex components with optimized designs not possible with traditional manufacturing methods.",
                    marketPotential: "$12 billion by 2030 in automotive applications"
                },
                {
                    id: 32,
                    title: "Advanced Robotics & Cobots",
                    status: "Critical",
                    description: "Next-generation industrial robots and collaborative robots working alongside humans in manufacturing, featuring enhanced flexibility, AI integration, and safety features.",
                    marketPotential: "$22 billion by 2030 in automotive applications"
                },
                {
                    id: 33,
                    title: "Digital Twins for Manufacturing",
                    status: "Growing",
                    description: "Virtual replicas of physical production systems enabling simulation, optimization, and predictive maintenance of manufacturing processes and facilities.",
                    marketPotential: "$6 billion by 2030 in automotive manufacturing"
                },
                {
                    id: 34,
                    title: "Advanced Battery Manufacturing",
                    status: "Critical",
                    description: "Innovative production technologies for EV batteries including dry electrode processing, automated assembly, and rapid formation techniques to reduce costs and environmental impact.",
                    marketPotential: "$45 billion by 2030"
                },
                {
                    id: 35,
                    title: "Smart Factory Solutions",
                    status: "Growing",
                    description: "Industry 4.0 technologies including IoT sensors, edge computing, and AI-driven analytics enabling fully connected, flexible, and adaptive manufacturing operations.",
                    marketPotential: "$32 billion by 2030 in automotive manufacturing"
                }
            ]
        }
    };

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "High Growth":
                return "bg-purple-600";
            case "Growing":
                return "bg-blue-500";
            case "Emerging":
                return "bg-teal-500";
            case "Early Stage":
                return "bg-orange-400";
            case "Critical":
                return "bg-red-500";
            case "Essential":
                return "bg-green-500";
            case "Transformative":
                return "bg-indigo-600";
            default:
                return "bg-gray-500";
        }
    };

    const activeData = categories[activeCategory];

    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-indigo-100 p-10">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-purple-500">Top 50 Technologies</h1>
                <div className="flex gap-4">
                    <button
                        onClick={()=>{navigate("/subcat")}}
                        className="px-4 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <div className="flex items-center gap-2">
                            <p>Subcategories</p>
                            <ChevronRight size={18} />
                        </div>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="border-b border-gray-200">
                    <div className="flex">
                        {Object.keys(categories).map((category) => (
                            <button
                                key={category}
                                className={`flex items-center gap-2 py-4 px-6 font-medium text-sm transition-colors ${activeCategory === category
                                    ? `text-${category === 'adas' ? 'purple' : category === 'powertrain' ? 'blue' : category === 'software' ? 'green' : 'yellow'}-600 border-b-2`
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                                style={{
                                    borderBottomColor:
                                        activeCategory === category ? categories[category].color : "transparent"
                                }}
                                onClick={() => setActiveCategory(category)}
                            >
                                <span
                                    className="p-1.5 rounded-md"
                                    style={{
                                        backgroundColor: `${categories[category].color}15`
                                    }}
                                >
                                    <span style={{ color: categories[category].color }}>
                                        {categories[category].icon}
                                    </span>
                                </span>
                                {categories[category].title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeData.technologies.map((tech) => (
                            <div key={tech.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center">
                                            <span className="bg-gray-100 text-gray-600 rounded-full h-8 w-8 flex items-center justify-center text-sm font-semibold mr-3">
                                                {tech.id}
                                            </span>
                                            <h3 className="font-semibold text-lg text-gray-800">{tech.title}</h3>
                                        </div>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full text-white ${getStatusBadgeClass(tech.status)}`}
                                        >
                                            {tech.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                                    <div className="border-t border-gray-100 pt-3">
                                        <p className="text-sm font-medium text-gray-700">Market Potential: <span className="text-purple-600">{tech.marketPotential}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};