import React, { useState } from 'react';
import { Copy, RefreshCw, Download } from 'lucide-react';
import { Chatbot } from "../Chatbot/Chatbot";

const courseStructure = {
    "Autonomous Driving": [
        "Path Planning and Decision Making",
        "Object Detection and Recognition",
        "Sensor Fusion (LiDAR, Radar, Camera)",
        "Level of Automation (SAE Levels 0-5)",
        "AI Hardware and Software Architecture"
    ],
    "Driver Assistance Systems (ADAS)": [
        "Adaptive Cruise Control (ACC)",
        "Lane Keeping Assist (LKA) and Lane Departure Warning (LDW)",
        "Automatic Emergency Braking (AEB)",
        "Blind Spot Monitoring (BSM)",
        "Park Assist"
    ],
    "Blind Spot Monitoring (BSM)": [
        "Adaptive Cruise Control (ACC)",
        "Lane Keeping Assist (LKA) and Lane Departure Warning (LDW)",
        "Automatic Emergency Braking (AEB)",
        "Blind Spot Monitoring (BSM)",
        "Park Assist"
    ],
    "Park Assist": [
        "Adaptive Cruise Control (ACC)",
        "Lane Keeping Assist (LKA) and Lane Departure Warning (LDW)",
        "Automatic Emergency Braking (AEB)",
        "Blind Spot Monitoring (BSM)",
        "Park Assist"
    ]
};

const contentDetails = {
    "Path Planning and Decision Making": {
        description: "Let's dive deep into the fascinating and rapidly evolving world of Artificial Intelligen ",
        sections: [
            {
                title: "AI in Path Planning",
                content: "Path planning involves using AI algorithms to deter"
            }
        ]
    },
    "Object Detection and Recognition": {
        description: "A critical component of autonomous driving that enables vehicles to understand their environment.",
        sections: [
            {
                title: "Computer Vision Techniques",
                content: "Uses deep learning models to identify and classify objects in real-time using sensor data."
            }
        ]
    },
    "Sensor Fusion (LiDAR, Radar, Camera)": {
        description: "A critical component of autonomous driving that enables vehicles to understand their environment.",
        sections: [
            {
                title: "Computer Vision Techniques",
                content: "Uses deep learning models to identify and classify objects in real-time using sensor data."
            }
        ]
    },
    "Level of Automation (SAE Levels 0-5)": {
        description: "A critical component of autonomous driving that enables vehicles to understand their environment.",
        sections: [
            {
                title: "Computer Vision Techniques",
                content: "Uses deep learning models to identify and classify objects in real-time using sensor data."
            }
        ]
        
    },
    "AI Hardware and Software Architecture": {
        description: "A critical component of autonomous driving that enables vehicles to understand their environment.",
        sections: [
            {
                title: "Computer Vision Techniques",
                content: "Uses deep learning models to identify and classify objects in real-time using sensor data."
            }
        ]
    }
    // Add more detailed content for other subtopics
};

export const Generated = () => {
    const [selectedTheme, setSelectedTheme] = useState(Object.keys(courseStructure)[0]);
    const [selectedSubtopic, setSelectedSubtopic] = useState(courseStructure[selectedTheme][0]);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(contentDetails[selectedSubtopic], null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleDownload = () => {
        alert('PDF download functionality to be implemented');
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                {Object.entries(courseStructure).map(([theme, subtopics]) => (
                    <div key={theme} className="mb-4">
                        <div
                            className={`px-4 py-3 font-bold ${selectedTheme === theme
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-purple-50'
                                }`}
                            onClick={() => setSelectedTheme(theme)}
                        >
                            {theme}
                        </div>
                        {selectedTheme === theme && (
                            <div className="bg-white">
                                {subtopics.map((subtopic) => (
                                    <div
                                        key={subtopic}
                                        className={`px-6 py-2 cursor-pointer ${selectedSubtopic === subtopic
                                                ? 'bg-purple-100 text-purple-700'
                                                : 'hover:bg-purple-50'
                                            }`}
                                        onClick={() => setSelectedSubtopic(subtopic)}
                                    >
                                        {subtopic}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="flex-grow p-10 relative">
                {/* Top Right Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 bg-white p-2 rounded-full shadow-lg">
                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-full hover:bg-purple-100 transition"
                        title={copied ? "Copied!" : "Copy Content"}
                    >
                        {copied ? '✓' : <Copy className="text-purple-600" />}
                    </button>
                    <button
                        onClick={handleRefresh}
                        className="p-2 rounded-full hover:bg-purple-100 transition"
                        title="Refresh"
                    >
                        <RefreshCw className="text-purple-600" />
                    </button>
                    <button
                        onClick={handleDownload}
                        className="p-2 rounded-full hover:bg-purple-100 transition"
                        title="Download PDF"
                    >
                        <Download className="text-purple-600" />
                    </button>
                </div>

                <Chatbot />

                {/* Content Display */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-purple-700 mb-4">
                        {selectedSubtopic}
                    </h1>

                    {contentDetails[selectedSubtopic] ? (
                        <>
                            <p className="text-gray-600 mb-6">
                                {contentDetails[selectedSubtopic].description}
                            </p>

                            {contentDetails[selectedSubtopic].sections.map((section, index) => (
                                <div key={index} className="mb-4">
                                    <h2 className="text-xl font-semibold text-purple-600 mb-2">
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-700">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className="text-gray-500">
                            Detailed content for this subtopic is coming soon.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};