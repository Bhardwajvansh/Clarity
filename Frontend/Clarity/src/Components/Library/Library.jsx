import React, { useState, useMemo } from 'react';
import {
    Folder,
    Users,
    Building2,
    Globe,
    CloudUpload,
    UserPlus,
    ChevronDown,
    ChevronUp,
    Check
} from 'lucide-react';

export const Library = () => {
    const [activeTab, setActiveTab] = useState('Personal');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDocuments, setSelectedDocuments] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const documents = [
        {
            id: 1,
            name: '2022 Annual Report On Market Issues And...',
            publisher: 'California ISO',
            year: '2023',
            industry: 'Energy & Utilities',
            geography: 'USA'
        },
        {
            id: 2,
            name: 'Spring 2023 Solar Industry Update',
            publisher: 'National Renewable Energy Laboratory, Bos...',
            year: '2023',
            industry: 'Energy & Utilities',
            geography: 'USA'
        },
        {
            id: 3,
            name: 'Gesetz Für Den Ausbau Erneuerbarer Energ...',
            publisher: 'Bundesministerium der Justiz, Bundesamt f...',
            year: '2024',
            industry: 'Energy & Utilities',
            geography: 'Germany'
        }
    ];

    const libraryTabs = [
        {
            name: 'Personal',
            icon: <Folder className="h-5 w-5 mr-2" />,
            title: 'Personal Library'
        },
        {
            name: 'Team',
            icon: <Users className="h-5 w-5 mr-2" />,
            title: 'Team Library'
        },
        {
            name: 'Company',
            icon: <Building2 className="h-5 w-5 mr-2" />,
            title: 'Company Library'
        },
        {
            name: 'Global',
            icon: <Globe className="h-5 w-5 mr-2" />,
            title: 'Global Library'
        }
    ];

    const toggleDocumentSelection = (documentId) => {
        setSelectedDocuments(prev =>
            prev.includes(documentId)
                ? prev.filter(id => id !== documentId)
                : [...prev, documentId]
        );
    };

    const toggleSelectAll = () => {
        setSelectedDocuments(
            selectedDocuments.length === documents.length
                ? []
                : documents.map(doc => doc.id)
        );
    };

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const sortedDocuments = useMemo(() => {
        if (!sortConfig.key) return documents;

        return [...documents].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [documents, sortConfig]);

    const filteredDocuments = sortedDocuments.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderLibraryContent = () => {
        return (
            <div className="p-6 max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">{activeTab} Library</h2>
                    {activeTab === 'Team' && (
                        <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                            <UserPlus className="h-5 w-5 mr-2" />
                            Invite Team Member
                        </button>
                    )}
                </div>

                <div className="border border-gray-200 rounded-lg">
                    {/* Drag and Drop Area */}
                    <div className="p-6 border-b border-gray-200 bg-gray-50 text-center">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                            <div className="flex justify-center mb-4">
                                <CloudUpload className="h-12 w-12 text-gray-400" />
                            </div>
                            <p className="text-gray-600 font-medium mb-2">Click to upload or drag and drop</p>
                            <p className="text-gray-500 text-sm">PDF, Word and Powerpoint Documents only</p>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex mb-4 space-x-2">
                            <input
                                type="text"
                                placeholder="Find document's title"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-64 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">View</button>
                        </div>

                        <div className="flex space-x-2 mb-4">
                            {['Publisher', 'Year', 'Industry', 'Geography', 'Document Type'].map((filter) => (
                                <button
                                    key={filter}
                                    className="flex items-center border border-gray-300 rounded px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                                    onClick={() => handleSort(filter.toLowerCase().replace(' ', ''))}
                                >
                                    {filter}
                                    {sortConfig.key === filter.toLowerCase().replace(' ', '') ? (
                                        sortConfig.direction === 'asc' ? (
                                            <ChevronUp className="ml-1 h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        )
                                    ) : null}
                                </button>
                            ))}
                        </div>

                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="p-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedDocuments.length === documents.length}
                                            onChange={toggleSelectAll}
                                            className="form-checkbox h-4 w-4 text-purple-600"
                                        />
                                    </th>
                                    <th className="text-left p-3 text-xs uppercase tracking-wider text-gray-500">Report Name</th>
                                    <th className="text-left p-3 text-xs uppercase tracking-wider text-gray-500">Publisher</th>
                                    <th className="text-left p-3 text-xs uppercase tracking-wider text-gray-500">Year</th>
                                    <th className="text-left p-3 text-xs uppercase tracking-wider text-gray-500">Industry</th>
                                    <th className="text-left p-3 text-xs uppercase tracking-wider text-gray-500">Geography</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDocuments.map((doc) => (
                                    <tr
                                        key={doc.id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="p-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedDocuments.includes(doc.id)}
                                                onChange={() => toggleDocumentSelection(doc.id)}
                                                className="form-checkbox h-4 w-4 text-purple-600"
                                            />
                                        </td>
                                        <td className="p-3">{doc.name}</td>
                                        <td className="p-3">{doc.publisher}</td>
                                        <td className="p-3">{doc.year}</td>
                                        <td className="p-3">{doc.industry}</td>
                                        <td className="p-3">{doc.geography}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="flex space-x-4 p-4">
                    {libraryTabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`
                flex items-center px-4 py-2 rounded-md transition
                ${activeTab === tab.name
                                    ? 'bg-purple-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }
              `}
                        >
                            {tab.icon}
                            {tab.name} Library
                        </button>
                    ))}
                </div>
            </nav>

            {renderLibraryContent()}
        </div>
    );
};