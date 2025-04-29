import React from 'react'
import { useState } from 'react'
import { BarChart2, TrendingUp } from 'lucide-react'
import { Search, Plus, Filter, ArrowUpRight, ChevronDown, MoreHorizontal, AlertCircle, Database, BarChart, LineChart, Bell } from 'lucide-react';
import { Info, ExternalLink, ChevronRight, Lightbulb, BookOpen, Users } from 'lucide-react';
import { Globe, Star, CheckCircle2, Clipboard, ArrowRight, ThumbsUp } from 'lucide-react';
import { MessageSquare, Phone, PieChart, Mail, Linkedin, Trash2, Edit3 } from 'lucide-react';


export const Acciq = () => {
    const [activeTab, setActiveTab] = useState("Customer Dashboard");
    const [showMoreDecisionMakers, setShowMoreDecisionMakers] = useState(false);
    const [activeTab2, setActiveTab2] = useState('Person Details');
    const [activeTab3, setActiveTab3] = useState('sequences');

    const [accounts, setAccounts] = useState([
        {
            id: 1,
            initial: 'B',
            company: 'Brex',
            description: 'Financial Services',
            industry: 'Financial Technology',
            score: 85,
            recentActivity: {
                type: 'Financial Update',
                details: '$235M Credit Facility'
            }
        },
        {
            id: 2,
            initial: 'W',
            company: 'Walmart',
            description: 'Retail',
            industry: 'Retail Giant',
            score: 92,
            recentActivity: {
                type: 'Product Update',
                details: 'Launched supplier program'
            }
        },
        {
            id: 3,
            initial: 'C',
            company: 'Canva',
            description: 'Design Software',
            industry: 'Creative Technology',
            score: 78,
            recentActivity: {
                type: 'Executive Event',
                details: 'CTO product appearance'
            }
        }
    ]);

    const OutreachAutomation = () => {
        return (
            <div className="bg-white min-h-screen p-6 font-sans">
                <div className="flex mb-6 border-b border-gray-300">
                    <button
                        className={`px-4 py-2 ${activeTab3 === 'sequences' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab3('sequences')}
                    >
                        Sequences
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab3 === 'templates' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab3('templates')}
                    >
                        Templates
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab3 === 'analytics' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab3('analytics')}
                    >
                        Analytics
                    </button>
                    <div className="ml-auto">
                        <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md">
                            <Plus size={16} />
                            <span>New Campaign</span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-2/3 border border-gray-300 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b border-gray-300">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="font-semibold">Bex $235M Expansion Campaign</h2>
                                    <p className="text-xs text-gray-500">Designed for Bex's expansion initiative</p>
                                </div>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">Activate Campaign</button>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex gap-4 mb-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <span className="text-sm">1</span>
                                    </div>
                                    <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-blue-100 rounded-full p-1">
                                            <Mail size={16} className="text-blue-600" />
                                        </div>
                                        <span className="font-medium">Email</span>
                                        <div className="ml-auto text-xs text-gray-500">Day 1</div>
                                        <div className="flex">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <Edit3 size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-2">
                                        <div className="mb-2">
                                            <div className="flex justify-between mb-1">
                                                <div className="font-medium">Initial Outreach</div>
                                                <div className="flex gap-1">
                                                    <span className="text-xs px-1 rounded bg-blue-100 text-blue-600">Draft</span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500">Subject: Congratulations on Bex's $235M Credit Line</div>
                                        </div>
                                        <div className="text-sm text-gray-700 mb-3">
                                            <p className="mb-2">Hi [First_Name],</p>
                                            <p className="mb-2">Congratulations on securing a $235M credit facility to expand operations! This is quite the achievement and speaks to your significant growth plans. This can sometimes present new internal challenges and that's why our team has been...</p>
                                            <p className="mb-2">Would you be open to a brief conversation about how we could support your expansion?</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-2 py-1 bg-gray-200 rounded text-xs">Send Preview</button>
                                            <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Customize</button>
                                            <button className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">AI Rewrite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <span className="text-sm">2</span>
                                    </div>
                                    <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-blue-100 rounded-full p-1">
                                            <Linkedin size={16} className="text-blue-600" />
                                        </div>
                                        <span className="font-medium">LinkedIn</span>
                                        <div className="ml-auto text-xs text-gray-500">Day 3</div>
                                        <div className="flex">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <Edit3 size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-2">
                                        <div className="mb-2">
                                            <div className="flex justify-between mb-1">
                                                <div className="font-medium">LinkedIn Connection</div>
                                                <div className="flex gap-1">
                                                    <span className="text-xs px-1 rounded bg-blue-100 text-blue-600">Draft</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-700 mb-3">
                                            <p className="mb-2">Hi [First_Name], I reached out via email regarding your expansion plans. I'd love to connect and share some insights on how other companies like yours manage transformation during growth phases.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-2 py-1 bg-gray-200 rounded text-xs">Send Preview</button>
                                            <button className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">AI Rewrite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <span className="text-sm">3</span>
                                    </div>
                                    <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-blue-100 rounded-full p-1">
                                            <Phone size={16} className="text-blue-600" />
                                        </div>
                                        <span className="font-medium">Follow-up Call</span>
                                        <div className="ml-auto text-xs text-gray-500">Day 5</div>
                                        <div className="flex">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <Edit3 size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-2">
                                        <div className="mb-2">
                                            <div className="flex justify-between mb-1">
                                                <div className="font-medium">Call Script</div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-700 mb-3">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Introduce yourself and reference previous outreach</li>
                                                <li>Congratulate on credit facility and expansion plans</li>
                                                <li>Ask about current communication challenges with teams</li>
                                                <li>Discuss relevance of our platform</li>
                                                <li>Share short case study of similar client's success</li>
                                                <li>Suggest a formal demo with their team</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <span className="text-sm">4</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-blue-100 rounded-full p-1">
                                            <Mail size={16} className="text-blue-600" />
                                        </div>
                                        <span className="font-medium">Email</span>
                                        <div className="ml-auto text-xs text-gray-500">Day 7</div>
                                    </div>

                                    <div className="border rounded-lg p-4 bg-gray-50 mb-2 border-dashed flex items-center justify-center">
                                        <button className="flex items-center gap-1 text-gray-500">
                                            <Plus size={16} />
                                            <span>Add follow-up message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-gray-600">
                                    <Plus size={16} />
                                    <span>Add Step</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="border border-gray-300 rounded-lg mb-6">
                            <div className="p-4 border-b border-gray-300">
                                <h3 className="font-medium">Campaign Targets</h3>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <input type="checkbox" id="target1" checked />
                                    <label htmlFor="target1" className="text-sm font-medium">Target 1</label>
                                    <div className="ml-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center">
                                                <span className="text-xs text-violet-600">HL</span>
                                            </div>
                                            <span className="text-sm">Hugo Lynch</span>
                                            <ChevronDown size={16} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="target2" checked />
                                    <label htmlFor="target2" className="text-sm font-medium">Target 2</label>
                                    <div className="ml-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <span className="text-xs text-green-600">CM</span>
                                            </div>
                                            <span className="text-sm">Camila Moreno</span>
                                            <ChevronDown size={16} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-4 text-sm text-blue-600">+ Add Contact</button>
                            </div>
                        </div>
                        <div className="border border-gray-300 rounded-lg mb-6">
                            <div className="p-4 border-b border-gray-300">
                                <h3 className="font-medium">Campaign Timeline</h3>
                                <p className="text-xs text-gray-500">4 contacts</p>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-3 text-center text-xs text-gray-500 mb-2">
                                    <div>Time Span</div>
                                    <div>Response Rate</div>
                                    <div>Delivery Status</div>
                                </div>
                                <div className="grid grid-cols-3 text-center">
                                    <div>-</div>
                                    <div>-</div>
                                    <div>-</div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-300 rounded-lg mb-6">
                            <div className="p-4 border-b border-gray-300 bg-blue-50 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                                        <MessageSquare size={16} className="text-blue-600" />
                                    </div>
                                    <h3 className="font-medium">AI Messaging Assistant</h3>
                                </div>
                                <button className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Enable</button>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-600 mb-4">
                                    Our AI tool will auto-create custom intros and personalize messages to increase response rates. Our NLP models will analyze context to determine the perfect message timing during expansion phases.
                                </p>
                                <div className="bg-gray-50 p-3 rounded text-sm">
                                    <p className="text-gray-600 mb-2"><strong>Managing Variations</strong></p>
                                    <p className="text-gray-500">
                                        Select to use pre-built message variations or create custom variations specified for core messaging while maintaining a cohesive brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-300 rounded-lg mb-6">
                            <div className="p-4 border-b border-gray-300">
                                <h3 className="font-medium">Common Steps Setup</h3>
                            </div>
                            <div className="p-4">
                                <button className="block w-full text-left p-2 hover:bg-gray-50 text-sm">
                                    Optimized Messages
                                </button>
                                <button className="block w-full text-left p-2 hover:bg-gray-50 text-sm">
                                    Generic Messages
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-4 items-center mt-12 pt-6">
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Users size={20} className="text-indigo-600 mr-2" />
                            <h3 className="font-bold">Multi-Channel Outreach</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Create complete outreach campaigns across email, LinkedIn and more with granular sequence follow-ups.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <MessageSquare size={20} className="text-indigo-600 mr-2" />
                            <h3 className="font-bold">AI Messaging Support</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Create personalized, contextually relevant messages using the same AI model that powers your sales target outputs.                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <BarChart2 size={20} className="text-indigo-600 mr-2" />
                            <h3 className="font-bold">Performance Analytics</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Track engagement analytics and optimize outreach strategy with real-time performance insights.
                        </p>
                    </div>
                    {/* <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-purple-100 rounded-full p-1">
                                <MessageSquare size={16} className="text-purple-600" />
                            </div>
                            <div className="text-xs">
                                <div className="font-medium">AI Messaging Support</div>
                                <div className="text-gray-500">Create personalized, contextually relevant messages using the same AI model that powers your sales target outputs.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-100 rounded-full p-1">
                                <BarChart2 size={16} className="text-green-600" />
                            </div>
                            <div className="text-xs">
                                <div className="font-medium">Performance Analytics</div>
                                <div className="text-gray-500">Track engagement analytics and optimize outreach strategy with real-time performance insights.</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }

    const ICPIdentificationPlatform = () => {

        const tabs2 = ['Person Details', 'Department Insights', 'Department Dynamics', 'Buying Committee', 'Tech Stack'];

        return (
            <div className="flex flex-col bg-gray-50">
                <div className="flex-1 overflow-hidden">
                    <div className="p-4">
                        <div className="mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md">B</div>
                                <div>
                                    <div className="text-sm font-medium">Brex</div>
                                    <div className="text-xs text-gray-500">Key Decision Makers</div>
                                </div>
                                <div className="ml-auto">
                                    <button className="bg-indigo-600 text-white text-xs py-1 px-3 rounded-full">Prospect</button>
                                    <button className="border border-gray-300 text-gray-600 text-xs py-1 px-3 rounded-full ml-2">Export</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 mb-4 text-xs">
                            {tabs2.map(tab => (
                                <button
                                    key={tab}
                                    className={`px-2 py-1 rounded-lg ${activeTab2 === tab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab2(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <div className="space-y-3">
                                    <div className="bg-white rounded-lg shadow p-3 border-l-4 border-blue-500">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-600">LP</div>
                                            <div>
                                                <div className="text-sm font-medium">Lloyd C</div>
                                                <div className="text-xs text-gray-500">Head of Information Technology</div>
                                            </div>
                                            <div className="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">IT Department</div>
                                        </div>
                                        <div className="text-xs mt-2 flex justify-between">
                                            <span className="text-green-500">90% Match Rate</span>
                                            <span>Very Likely To Reply</span>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg shadow p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs text-purple-600">PE</div>
                                            <div>
                                                <div className="text-sm font-medium">Paige Edwards</div>
                                                <div className="text-xs text-gray-500">Director, Workplace and Employee Experience</div>
                                            </div>
                                            <div className="ml-auto text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">HR & Operations</div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg shadow p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">CM</div>
                                            <div>
                                                <div className="text-sm font-medium">Candela Mateo</div>
                                                <div className="text-xs text-gray-500">Chief Operating Officer</div>
                                                <div className="flex items-center mt-1">
                                                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                                    <span className="text-xs text-red-600 ml-1">Match Your Target</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Lloyd Profile Card */}
                                <div className="mt-6 bg-white rounded-lg shadow p-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                            LC
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold">Lloyd C</h3>
                                            <p className="text-sm text-gray-600">Head of Information Technology</p>
                                            <p className="text-xs text-gray-500 mt-1">Brex • San Francisco, CA</p>

                                            <div className="mt-3 flex items-center">
                                                <button className="bg-indigo-600 text-white text-xs py-1 px-3 rounded-md">View</button>
                                                <button className="border border-gray-200 text-xs py-1 px-3 rounded-md ml-2">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-xs text-gray-500 uppercase font-medium mb-2">CONTACT DETAILS</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center text-sm">
                                                <Info size={16} className="text-gray-400 mr-2" />
                                                <span>lloyd.c@brex.com</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Info size={16} className="text-gray-400 mr-2" />
                                                <span>+1 (415) 555-1234</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-xs text-gray-500 uppercase font-medium mb-2">BACKGROUND</h4>
                                        <p className="text-sm text-gray-600">
                                            Leads the IT department at Brex, focusing on digital transformation initiatives to improve operational efficiency across the organization.
                                        </p>

                                        <div className="mt-4 flex text-xs text-gray-500 divide-x divide-gray-200">
                                            <span className="pr-2">Brex • 3 years</span>
                                            <span className="px-2">Previously: GitLab</span>
                                            <span className="pl-2">Stanford • CS</span>
                                        </div>

                                        <div className="mt-4 flex text-xs text-gray-500">
                                            <span className="pr-2">Agile Certification</span>
                                            <span className="px-2">Cloud Computing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - AI Generated Insights */}
                            <div className="col-span-2">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="font-semibold">AI Generated Insights</h3>

                                    <div className="mt-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-medium mb-2">Role in Buying Committee</h4>
                                            <p className="text-sm text-gray-600">
                                                Lloyd is a key decision maker in the IT department. He would be responsible for IT strategy, managing IT consultants, and working with the vendor management team.
                                            </p>

                                            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-3">
                                                <p className="text-sm text-blue-800">
                                                    "I'm constantly looking for solutions that can help us streamline operations and improve productivity."
                                                </p>
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="font-medium text-sm mb-2">Responsibilities & Pain Points</h5>
                                                <ul className="text-sm text-gray-600 space-y-2">
                                                    <li className="flex items-start">
                                                        <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                                                        <span>Implementing IT infrastructure with amazing reliability</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                                                        <span>Balancing security concerns with user productivity</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                                                        <span>Governance / Security and compliance initiatives</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                                                        <span>Supporting from operations with outdated IT processes</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                                                        <span>Sluggish team collaboration across global offices</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-6">
                                                <h5 className="font-medium text-sm mb-2">AI Recommended Approach</h5>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    Focus on how your solution helps streamline internal communication and enhances team collaboration through centralized data repositories. Emphasize time savings, operational efficiencies, better data security features, and integration capabilities with their existing tech stack.
                                                </p>

                                                <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                                                    <p className="text-sm text-green-800">
                                                        <span className="font-medium">Suggested conversation starter:</span> "The ACME toolkit might be especially helpful for organizations like yours planning to scale their infrastructure to support this growth?"
                                                    </p>
                                                </div>

                                                <div className="mt-4 bg-orange-50 border border-orange-100 rounded-lg p-3">
                                                    <p className="text-sm text-orange-800">
                                                        <span className="font-medium">Common objection warning:</span> Most challenges you may face with team collaboration across different regions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 mt-6">
                                    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                                        <div className="flex items-center mb-3">
                                            <Search size={16} className="text-indigo-600 mr-2" />
                                            <h4 className="text-sm font-medium">Advanced Contact Discovery</h4>
                                        </div>
                                        <p className="text-xs text-gray-500 flex-1">
                                            Automatically identify and profile key decision makers based on signal fit and role.
                                        </p>
                                        <ChevronRight size={16} className="text-gray-400 self-end mt-2" />
                                    </div>

                                    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                                        <div className="flex items-center mb-3">
                                            <Users size={16} className="text-purple-600 mr-2" />
                                            <h4 className="text-sm font-medium">Committee Mapping</h4>
                                        </div>
                                        <p className="text-xs text-gray-500 flex-1">
                                            Map entire organizational hierarchies and decision-making structure with precision.
                                        </p>
                                        <ChevronRight size={16} className="text-gray-400 self-end mt-2" />
                                    </div>

                                    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                                        <div className="flex items-center mb-3">
                                            <Globe size={16} className="text-green-600 mr-2" />
                                            <h4 className="text-sm font-medium">Integrated Engagement Guidance</h4>
                                        </div>
                                        <p className="text-xs text-gray-500 flex-1">
                                            Get AI-personalized outreach recommendations to boost to-field contacts rate and pitch rate.
                                        </p>
                                        <ChevronRight size={16} className="text-gray-400 self-end mt-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const CustomerIntelligenceReport = () => {
        return (
            <div className="bg-gray-50 min-h-screen p-4 font-sans">
                <h1 className="text-indigo-600 text-2xl font-bold mb-1">Customer Intelligence Report</h1>
                <p className="text-gray-500 text-sm mb-6">Detailed view of customer insights, activities, and key contacts after clicking on an account</p>
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="bg-gray-800 text-white h-10 w-10 rounded flex items-center justify-center mr-3">
                                <span className="font-bold">B</span>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">Brex</h2>
                                <p className="text-gray-500 text-sm">Corporate Cards & Financial Technology</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded flex items-center">
                                <span>Contact</span>
                            </button>
                            <button className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded flex items-center">
                                <span>Save</span>
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-2 py-2 rounded">
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg">Latest Financial Updates</h3>
                                <a href="#" className="text-indigo-600 text-sm">View all</a>
                            </div>
                            <div className="bg-white rounded-lg shadow mb-4">
                                <div className="p-4">
                                    <div className="flex items-center mb-1">
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">Financial Update</span>
                                        <span className="text-gray-500 text-xs">January 15, 2025</span>
                                    </div>
                                    <h4 className="font-bold mb-2">Secured $235M Credit Facility For Card Expansion</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Brex has secured a $235 million revolving credit facility to enhance its corporate card offerings. This strategic move aims to strengthen Brex's capital position and accelerate its growth trajectory in corporate cards and aid with payment infrastructure.
                                    </p>
                                    <div className="flex space-x-3 text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <ExternalLink size={14} className="mr-1" />
                                            <span>Finance Globed</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Info size={14} className="mr-1" />
                                            <span>PR Newswire</span>
                                        </div>
                                        <div className="flex items-center">
                                            <ChevronRight size={14} className="mr-1" />
                                            <span>FINANCE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow">
                                <div className="p-4">
                                    <div className="flex items-center mb-1">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">Team Update</span>
                                        <span className="text-gray-500 text-xs">January 17, 2025</span>
                                    </div>
                                    <h4 className="font-bold mb-2">Reorganized Design Team Structure</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Brex has announced a reorganization of their design team structure to better align with their product development goals and customer experience priorities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Why It Matters for Slack</h3>
                            <div className="bg-white rounded-lg shadow p-4">
                                <div className="mb-6">
                                    <div className="flex items-start mb-2">
                                        <div className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">1</div>
                                        <div>
                                            <h4 className="font-bold">Indicates a focus on scaling operations and product growth</h4>
                                            <p className="text-gray-600 text-sm">
                                                The secured credit facility is aimed at expanding Brex's corporate card offerings and financial infrastructure efforts.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-start mb-2">
                                        <div className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">2</div>
                                        <div>
                                            <h4 className="font-bold">Supports an expansion of global operations</h4>
                                            <p className="text-gray-600 text-sm">
                                                The capital enables the expansion of global corporate card offerings, indicating a push towards international markets.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-start mb-2">
                                        <div className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">3</div>
                                        <div>
                                            <h4 className="font-bold">Slack can help enhance team collaboration efficiency across different geographies</h4>
                                            <p className="text-gray-600 text-sm">
                                                Supporting Brex's global expansion efforts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Key Decision Makers</h3>
                            <div className="space-y-3">
                                <div className="bg-white rounded-lg shadow p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-indigo-100 text-indigo-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                                <span className="font-bold">LC</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Lloyd C.</h4>
                                                <p className="text-gray-500 text-xs">Head of Information Technology</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-purple-100 text-purple-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                                <span className="font-bold">PS</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Page Sanchez</h4>
                                                <p className="text-gray-500 text-xs">Director, Marketing Experience</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-pink-100 text-pink-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                                <span className="font-bold">CM</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Camila Matias</h4>
                                                <p className="text-gray-500 text-xs">Chief Operating Officer</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </div>

                                <button
                                    className="text-indigo-600 text-sm flex items-center justify-center w-full"
                                    onClick={() => setShowMoreDecisionMakers(!showMoreDecisionMakers)}
                                >
                                    Show more ({showMoreDecisionMakers ? 'less' : '3'})
                                    <ChevronDown size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg">AI Insights</h3>
                                <button className="bg-indigo-600 text-white text-xs px-3 py-1 rounded">
                                    Ask AI
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-start">
                                        <div className="bg-indigo-100 p-2 rounded mr-3">
                                            <Lightbulb size={20} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Growth Opportunity</h4>
                                            <p className="text-gray-600 text-xs">
                                                The $235M credit facility suggests Brex is preparing for significant expansion. This presents an opportunity to position your product as a scalability enabler for their growth plans.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-start">
                                        <div className="bg-indigo-100 p-2 rounded mr-3">
                                            <Users size={20} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Contact Strategy</h4>
                                            <p className="text-gray-600 text-xs">
                                                Lloyd C. as Head of IT will be instrumental in technology integration decisions as Brex expands globally. Recommended contact with both Lloyd and Camila to address operational capabilities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Database size={20} className="text-indigo-600 mr-2" />
                            <h3 className="font-bold">Comprehensive Company View</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Detailed intelligence reports combine financial data from updates and strategy moves in a single unified interface.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Users size={20} className="text-purple-600 mr-2" />
                            <h3 className="font-bold">Key Decision Maker Profiles</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Automatically identify and highlight decision makers with direct contact information and roles.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-3">
                            <Lightbulb size={20} className="text-green-600 mr-2" />
                            <h3 className="font-bold">AI-Driven Opportunity Insights</h3>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Intelligent algorithms analyze customer data to deliver actionable sales opportunities and outreach recommendations.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const CustomerDashboard = () => {
        return (
            <div className="bg-gray-50 min-h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600 mb-1">Customer Dashboard</h1>
                    <p className="text-gray-600 mb-6 text-sm">The main view of the AccountIQ module providing a comprehensive overview of all customer accounts</p>
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-2">
                            <button className="bg-indigo-600 text-white px-3 py-2 rounded flex items-center text-sm">
                                <Plus size={16} className="mr-1" /> Add Account
                            </button>
                            <button className="bg-white border border-gray-300 px-3 py-2 rounded flex items-center text-sm">
                                <Filter size={16} className="mr-1" /> Filters
                            </button>
                            <button className="bg-white border border-gray-300 px-3 py-2 rounded flex items-center text-sm">
                                <BarChart size={16} className="mr-1" /> Sort
                            </button>
                        </div>
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search accounts"
                                className="pl-9 pr-4 py-2 border border-gray-300 rounded w-64"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">Total Accounts</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">234</div>
                                <div className="bg-blue-100 p-1 rounded">
                                    <Database size={16} className="text-blue-600" />
                                </div>
                            </div>
                            <div className="text-green-500 text-xs flex items-center mt-2">
                                <ArrowUpRight size={12} className="mr-1" /> 12% increase
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">Active Opportunities</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">58</div>
                                <div className="bg-purple-100 p-1 rounded">
                                    <BarChart size={16} className="text-purple-600" />
                                </div>
                            </div>
                            <div className="text-red-500 text-xs flex items-center mt-2">
                                <ArrowUpRight size={12} className="mr-1" /> 5% decrease
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">Market Potential</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">$1.2B</div>
                                <div className="bg-green-100 p-1 rounded">
                                    <LineChart size={16} className="text-green-600" />
                                </div>
                            </div>
                            <div className="text-green-500 text-xs flex items-center mt-2">
                                <ArrowUpRight size={12} className="mr-1" /> 8% growth
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                            <div className="text-gray-500 text-xs uppercase mb-1">AI Insights</div>
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">42</div>
                                <div className="bg-yellow-100 p-1 rounded">
                                    <AlertCircle size={16} className="text-yellow-600" />
                                </div>
                            </div>
                            <div className="text-blue-500 text-xs flex items-center mt-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div> 7 new this week
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-300 shadow-sm mb-6 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs uppercase text-gray-500 bg-gray-50 border-b border-gray-300">
                                    <th className="px-6 py-3">Company</th>
                                    <th className="px-6 py-3">Industry</th>
                                    <th className="px-6 py-3">Score</th>
                                    <th className="px-6 py-3">Recent Activity</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map(account => (
                                    <tr key={account.id} className="border-b border-gray-300">
                                        <td className="px-6 py-4 flex items-center">
                                            <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${account.initial === 'B' ? 'bg-indigo-600' :
                                                account.initial === 'W' ? 'bg-purple-600' : 'bg-blue-600'
                                                }`}>
                                                {account.initial}
                                            </div>
                                            <div className="ml-3">
                                                <div className="font-medium">{account.company}</div>
                                                <div className="text-xs text-gray-500">{account.description}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">{account.industry}</td>
                                        <td className="px-6 py-4">
                                            <div className="w-24">
                                                <div className="h-2 w-full bg-gray-200 rounded-full">
                                                    <div
                                                        className={`h-2 rounded-full ${account.score > 90 ? 'bg-green-500' :
                                                            account.score > 80 ? 'bg-green-500' : 'bg-green-500'
                                                            }`}
                                                        style={{ width: `${account.score}%` }}
                                                    ></div>
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">{account.score}/100</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`text-xs px-2 py-1 rounded inline-block ${account.recentActivity.type === 'Financial Update' ? 'bg-blue-100 text-blue-700' :
                                                account.recentActivity.type === 'Product Update' ? 'bg-green-100 text-green-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {account.recentActivity.type}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">{account.recentActivity.details}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center">
                                                <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded">
                                                    <AlertCircle size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:bg-gray-50 rounded ml-2">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4 mb-6 border border-indigo-100">
                        <div className="flex items-center mb-2">
                            <div className="bg-indigo-100 p-1 rounded-full">
                                <AlertCircle size={16} className="text-indigo-600" />
                            </div>
                            <span className="ml-2 font-medium text-indigo-800">AI Suggested Action</span>
                        </div>
                        <p className="text-sm text-indigo-800 mb-3">
                            Brex's recent $235M credit facility indicates expansion plans. Consider reaching out to their Head of Information Technology about how your solutions can support their growth.
                        </p>
                        <button className="bg-indigo-600 text-white text-sm px-4 py-1 rounded">
                            Take Action
                        </button>
                    </div>
                    {/* Bottom Features */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex">
                            <div className="bg-blue-100 p-2 rounded mr-3">
                                <Search size={20} className="text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Intelligent Account Discovery</h3>
                                <p className="text-sm text-gray-600">
                                    AI-powered customer detection automatically highlights accounts with recent strategic moves or investment activities.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex">
                            <div className="bg-purple-100 p-2 rounded mr-3">
                                <BarChart size={20} className="text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Custom Scoring Models</h3>
                                <p className="text-sm text-gray-600">
                                    Proprietary account scoring algorithm combines financial data, growth indicators, and opportunity signals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex">
                            <div className="bg-green-100 p-2 rounded mr-3">
                                <Bell size={20} className="text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Real-time Activity Monitoring</h3>
                                <p className="text-sm text-gray-600">
                                    Live notifications on significant account events, executive changes, and new buying opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <h1 className="font-bold text-3xl text-gray-800">AccountIQ</h1>
                    <span className="text-xs ml-10 text-gray-500">Last update: Today, 9:52 AM</span>
                </div>
                <div className="flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search dashboard..."
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm w-48"
                        />
                    </div>
                    <div className="flex ml-4 space-x-1">
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Customer Dashboard" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Customer Dashboard")}
                        >
                            <div className="flex items-center">
                                <BarChart2 size={14} className="mr-1" />
                                Customer Dashboard
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Customer Intelligence Report" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Customer Intelligence Report")}
                        >
                            <div className="flex items-center">
                                <TrendingUp size={14} className="mr-1" />
                                Intelligence Report
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "ICP Identification Platform" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("ICP Identification Platform")}
                        >
                            <div className="flex items-center">
                                <Star size={14} className="mr-1" />
                                ICP Identification Platform
                            </div>
                        </button>
                        <button
                            className={`px-3 py-1 text-xs rounded-md ${activeTab === "Outreach Automation" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setActiveTab("Outreach Automation")}
                        >
                            <div className="flex items-center">
                                <Users size={14} className="mr-1" />
                                Outreach Automation
                            </div>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                {activeTab === 'Customer Dashboard' && CustomerDashboard()}
                {activeTab === 'Customer Intelligence Report' && CustomerIntelligenceReport()}
                {activeTab === 'ICP Identification Platform' && ICPIdentificationPlatform()}
                {activeTab === 'Outreach Automation' && OutreachAutomation()}
            </main>
        </div>
    )
}
