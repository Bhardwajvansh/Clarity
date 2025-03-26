import React, { useState } from 'react';

const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
];

export const Report = () => {
    const [themes, setThemes] = useState(['']);
    const [selectedSubtopics, setSelectedSubtopics] = useState(5);
    const addTheme = () => {
        if (themes.length < 5) {
            setThemes([...themes, '']);
        }
    };

    const removeTheme = () => {
        if (themes.length > 1) {
            setThemes(themes.slice(0, -1));
        }
    };

    const updateTheme = (index, value) => {
        const newThemes = [...themes];
        newThemes[index] = value;
        setThemes(newThemes);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 flex items-center justify-center p-10">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 border border-[#9370DB]/20">
                <h1 className="text-3xl font-bold text-center text-[#6A5ACD] mb-4">
                    Generate Course
                </h1>

                <p className="text-center mb-6 opacity-80">
                    Type the topic on which you want to generate a course.
                    Also, you can enter a list of subtopics, which are the specifics you want to learn.
                </p>

                <label className="block text-[#6A5ACD] font-medium">
                    Add a topic for the course
                    <input
                        type="text"
                        placeholder="Topic"
                        className="w-full px-4 py-3 mb-4 border border-[#9370DB]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF]"
                    />
                </label>

                <label className="block text-[#6A5ACD] font-medium">
                    Add themes for the course
                    <div className="space-y-4 mb-4">
                        {themes.map((theme, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Theme ${index + 1}`}
                                value={theme}
                                onChange={(e) => updateTheme(index, e.target.value)}
                                className="w-full px-4 py-3 border border-[#9370DB]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF]"
                            />
                        ))}
                    </div>
                </label>

                <div className="flex space-x-4 mb-4">
                    <button
                        onClick={addTheme}
                        disabled={themes.length >= 5}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        Add theme
                    </button>
                    {themes.length > 1 && (
                        <button
                            onClick={removeTheme}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-[#DA70D6] to-[#BA55D3] text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Remove theme
                        </button>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="block text-[#6A5ACD] font-medium">
                        For free member sub topics is limited to 5
                    </label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="subtopics"
                                value={5}
                                checked={selectedSubtopics === 5}
                                onChange={() => setSelectedSubtopics(5)}
                                className="text-[#8A4FFF] focus:ring-[#9370DB]"
                            />
                            <span className="text-[#6A5ACD]">5</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="subtopics"
                                value={10}
                                checked={selectedSubtopics === 10}
                                onChange={() => setSelectedSubtopics(10)}
                                className="text-[#8A4FFF] focus:ring-[#9370DB]"
                            />
                            <span className="text-[#6A5ACD]">10</span>
                        </label>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="file"
                        className="hidden"
                        id="pdfUpload"
                    />
                    <label
                        htmlFor="pdfUpload"
                        className="px-4 py-2 border border-[#9370DB]/50 rounded-lg cursor-pointer hover:bg-[#9370DB]/10 text-[#6A5ACD]"
                    >
                        Choose Files
                    </label>
                    <span className="text-[#BA55D3] opacity-70">No file chosen</span>
                </div>

                <button
                    className="w-full py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};