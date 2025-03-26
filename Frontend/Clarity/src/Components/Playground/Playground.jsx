import React, { useState } from 'react';
import { ChevronDown,ChevronUp , Search } from 'lucide-react';

export const Playground = () => {
    const [currentMode, setCurrentMode] = useState('DeepBrain Reasoning');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const modes = [
        'DeepBrain Reasoning Pro',
        'DeepBrain Reasoning',
        'DeepBrain'
    ];

    const suggestedQueries = [
        'What are the emerging trends in renewable energy?',
        'Explain the basics of machine learning',
        'How does quantum computing work?',
        'Recommend some books on artificial intelligence'
    ];

    return (
        <div className="flex flex-col h-screen pb-10 bg-white bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10">
            {/* Dropdown Container */}
            <div className="relative p-4">
                <div
                    className="flex items-center justify-between w-64 p-2 border rounded-md cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="text-sm">{currentMode}</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                {isDropdownOpen && (
                    <div className="absolute z-10 w-64 mt-1 bg-white border rounded-md shadow-lg">
                        {modes.map((mode) => (
                            <div
                                key={mode}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setCurrentMode(mode);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                {mode}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4 flex items-center">
                    DeepBrain
                    <span className="ml-2 text-purple-600">✨</span>
                </h1>
                <p className="text-gray-500 mb-8">
                    Powering next-gen research and market intelligence with AI-driven insights, precision, and speed.
                </p>
                <div className="text-sm text-gray-600 mb-4">
                    Currently using: {currentMode}
                </div>

                {/* Suggested Queries */}
                <div className="grid grid-cols-2 gap-4 max-w-2xl">
                    {suggestedQueries.map((query, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded-lg text-left cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center">
                                <Search className="w-5 h-5 mr-2 text-purple-600" />
                                <span>{query}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Search Input */}
            <div className="p-4 flex justify-center">
                <div className="relative w-full max-w-2xl">
                    <input
                        type="text"
                        placeholder="Ask me something..."
                        className="w-full p-3 border rounded-full pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                        <ChevronUp className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};