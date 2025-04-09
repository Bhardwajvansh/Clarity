import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
];

export const Report = () => {
    const navigate = useNavigate();
    const [topic] = useState('AI in Automobiles'); // Preset topic, no setter
    const [themes, setThemes] = useState(['']);
    const [selectedSubtopics, setSelectedSubtopics] = useState(5);
    const [errors, setErrors] = useState({});

    // New state for library selection
    const [isLibraryEnabled, setIsLibraryEnabled] = useState(false);
    const [selectedLibrary, setSelectedLibrary] = useState('');
    const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] = useState(false);

    const libraryOptions = [
        'Personal Library',
        'Team Library',
        'Global Library',
        'Company Library'
    ];

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

    const validateForm = () => {
        const newErrors = {};

        // Topic validation removed since it's preset

        // Validate at least one theme
        // const validThemes = themes.filter(theme => theme.trim() !== '');
        // if (validThemes.length === 0) {
        //     newErrors.themes = 'At least one theme is required';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Prepare course data
            const courseData = {
                topic,
                themes: themes.filter(theme => theme.trim() !== ''),
                subtopics: selectedSubtopics,
                library: isLibraryEnabled ? selectedLibrary : null
            };

            // Navigate to course generation route
            navigate('/generate-course', { state: courseData });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 flex items-center justify-center p-10">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 border border-[#9370DB]/20">
                <h1 className="text-3xl font-bold text-center text-[#6A5ACD] mb-4">
                    Generate Report
                </h1>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-4">
                    <p className="font-medium">Demo Mode</p>
                    <p className="text-sm">Topic editing is disabled in this demonstration.</p>
                </div>

                <p className="text-center mb-6 opacity-80">
                    Enter a list of themes related to AI in Automobiles that you want to explore in this course.
                </p>

                <form onSubmit={handleSubmit}>
                    <label className="block text-[#6A5ACD] font-medium">
                        Add a topic for the course
                        <input
                            type="text"
                            value={topic}
                            disabled
                            className="w-full px-4 py-3 mb-2 border border-[#9370DB]/50 rounded-lg bg-gray-100 cursor-not-allowed"
                        />
                        <p className="text-sm text-gray-500 italic">Topic is preset in demo mode</p>
                    </label>

                    <label className="block text-[#6A5ACD] font-medium mt-4">
                        Add themes for the course
                        <div className="space-y-4 mb-4">
                            {themes.map((theme, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        placeholder={`Theme ${index + 1}`}
                                        value={theme}
                                        onChange={(e) => updateTheme(index, e.target.value)}
                                        className="w-full px-4 py-3 border border-[#9370DB]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF]"
                                    />
                                </div>
                            ))}
                            {errors.themes && (
                                <p className="text-red-500 text-sm mt-1">{errors.themes}</p>
                            )}
                        </div>
                    </label>

                    <div className="flex space-x-4 mb-4">
                        <button
                            type="button"
                            onClick={addTheme}
                            disabled={themes.length >= 5}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            Add theme
                        </button>
                        {themes.length > 1 && (
                            <button
                                type="button"
                                onClick={removeTheme}
                                className="flex-1 px-4 py-3 bg-gradient-to-r from-[#DA70D6] to-[#BA55D3] text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Remove theme
                            </button>
                        )}
                    </div>

                    {/* <div className="space-y-2">
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
                    </div> */}

                    {/* <div className="flex items-center space-x-2 mt-4">
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
                    </div> */}

                    <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="library-toggle"
                                checked={isLibraryEnabled}
                                onChange={() => setIsLibraryEnabled(!isLibraryEnabled)}
                                className="form-checkbox h-5 w-5 text-[#8A4FFF]"
                            />
                            <label htmlFor="library-toggle" className="text-[#6A5ACD]">
                                Take data from Library?
                            </label>
                        </div>

                        {isLibraryEnabled && (
                            <div className="relative mt-2">
                                <div
                                    className="w-full px-4 py-3 border border-[#9370DB]/50 rounded-lg flex justify-between items-center cursor-pointer"
                                    onClick={() => setIsLibraryDropdownOpen(!isLibraryDropdownOpen)}
                                >
                                    <span className="text-[#6A5ACD]">
                                        {selectedLibrary || 'Select Library'}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#6A5ACD]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                {isLibraryDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-[#9370DB]/50 rounded-lg shadow-lg">
                                        {libraryOptions.map((library) => (
                                            <div
                                                key={library}
                                                className="px-4 py-3 hover:bg-[#9370DB]/10 cursor-pointer text-[#6A5ACD]"
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

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};