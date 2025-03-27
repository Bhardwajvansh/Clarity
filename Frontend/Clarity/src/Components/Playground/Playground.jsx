import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronDown, ChevronUp, Search, User, Bot } from 'lucide-react';

export const Playground = () => {
    const [currentMode, setCurrentMode] = useState('DeepBrain Reasoning');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLibraryEnabled, setIsLibraryEnabled] = useState(false);
    const [selectedLibrary, setSelectedLibrary] = useState('');
    const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const modes = [
        'DeepBrain Reasoning Pro',
        'DeepBrain Reasoning',
        'DeepBrain'
    ];

    const libraryOptions = [
        'Personal Library',
        'Team Library',
        'Global Library',
        'Company Library'
    ];

    const suggestedQueries = [
        'What are the emerging trends in renewable energy?',
        'Explain the basics of machine learning',
        'How does quantum computing work?',
        'Recommend some books on artificial intelligence'
    ];

    const handleGenerateContent = async () => {
        if (!query.trim()) return;

        // Add user message to chat
        const userMessage = { type: 'user', text: query };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setQuery('');
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: query }]
                        }]
                    })
                }
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const generatedText = data.candidates[0]?.content?.parts[0]?.text || 'No response generated.';

            // Add AI response to chat
            const aiMessage = { type: 'ai', text: generatedText };
            setMessages(prevMessages => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error('Error generating content:', error);
            const errorMessage = { type: 'ai', text: 'Sorry, there was an error generating the response.' };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestedQuery = (suggestedQuery) => {
        setQuery(suggestedQuery);
        handleGenerateContent();
    };

    const MarkdownComponents = {
        p: ({ children }) => <p className="mb-2">{children}</p>,
        h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-semibold mb-2">{children}</h2>,
        ul: ({ children }) => <ul className="list-disc pl-5 mb-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-5 mb-2">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>
    };

    return (
        <div className="flex flex-col h-screen pb-10 bg-white bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10">
            {/* Dropdown and Library Selection Container */}
            <div className="relative p-4 flex items-center space-x-4">
                {/* Mode Dropdown */}
                <div className="relative">
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

                {/* Library Selection */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="library-toggle"
                        checked={isLibraryEnabled}
                        onChange={() => setIsLibraryEnabled(!isLibraryEnabled)}
                        className="form-checkbox h-5 w-5 text-purple-600"
                    />
                    <label htmlFor="library-toggle" className="text-sm">Take data from Library?</label>

                    {isLibraryEnabled && (
                        <div className="relative">
                            <div
                                className="flex items-center justify-between w-48 p-2 border rounded-md cursor-pointer"
                                onClick={() => setIsLibraryDropdownOpen(!isLibraryDropdownOpen)}
                            >
                                <span className="text-sm">
                                    {selectedLibrary || 'Select Library'}
                                </span>
                                <ChevronDown className="w-4 h-4" />
                            </div>

                            {isLibraryDropdownOpen && (
                                <div className="absolute z-10 w-48 mt-1 bg-white border rounded-md shadow-lg">
                                    {libraryOptions.map((library) => (
                                        <div
                                            key={library}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setSelectedLibrary(library);
                                                setIsLibraryDropdownOpen(false);
                                            }}
                                        >
                                            {library}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col items-center justify-center text-center overflow-hidden">
                <h1 className="text-4xl font-bold mb-4 flex items-center">
                    DeepBrain
                    <span className="ml-2 text-purple-600">✨</span>
                </h1>
                <p className="text-gray-500 mb-8">
                    Powering next-gen research and market intelligence with AI-driven insights, precision, and speed.
                </p>
                <div className="text-sm text-gray-600 mb-4">
                    Currently using: {currentMode}
                    {isLibraryEnabled && selectedLibrary && ` | Library: ${selectedLibrary}`}
                </div>

                {/* Chat Messages Area */}
                <div className={`w-full transition-all duration-300 ease-in-out ${messages.length === 0
                        ? 'max-w-2xl'
                        : 'max-w-4xl'
                    } h-96 overflow-y-auto mb-4 p-4 bg-white border rounded-lg shadow-inner`}>
                    {messages.length === 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                            {suggestedQueries.map((suggestedQuery, index) => (
                                <div
                                    key={index}
                                    className="p-4 border rounded-lg text-left cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => handleSuggestedQuery(suggestedQuery)}
                                >
                                    <div className="flex items-center">
                                        <Search className="w-5 h-5 mr-2 text-purple-600" />
                                        <span>{suggestedQuery}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex items-start mb-4 ${message.type === 'user'
                                        ? 'justify-end'
                                        : 'justify-start'
                                    }`}
                            >
                                <div className={`flex items-center ${message.type === 'user'
                                        ? 'flex-row-reverse'
                                        : 'flex-row'
                                    }`}>
                                    {message.type === 'user' ? (
                                        <User className="w-8 h-8 text-purple-600 ml-2" />
                                    ) : (
                                        <Bot className="w-8 h-8 text-blue-600 mr-2" />
                                    )}
                                    <div className={`p-3 rounded-lg max-w-xl ${message.type === 'user'
                                            ? 'bg-purple-100 text-right'
                                            : 'bg-blue-100 text-left'
                                        }`}>
                                        <ReactMarkdown components={MarkdownComponents}>
                                            {message.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <div className="flex justify-start items-center">
                            <Bot className="w-8 h-8 text-blue-600 mr-2" />
                            <div className="p-3 bg-blue-100 rounded-lg">
                                Thinking...
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Search Input */}
            <div className="p-4 flex justify-center">
                <div className="relative w-full max-w-2xl">
                    <input
                        type="text"
                        placeholder="Ask me something..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleGenerateContent()}
                        className="w-full p-3 border rounded-full pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        onClick={handleGenerateContent}
                        disabled={isLoading || !query.trim()}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-50"
                    >
                        {isLoading ? '...' : <ChevronUp className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Playground;