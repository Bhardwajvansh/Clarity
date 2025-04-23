import React, { useState } from 'react';
import {
    ChevronDown,
    Download,
    TrendingUp,
    AlertCircle,
    ArrowRight,
    MessageCircle,
    Eye,
    ThumbsUp,
    Users,
    Bot,
    Megaphone
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip
} from 'recharts';

export const BrandSentimentDashboard = () => {
    const [dateRange, setDateRange] = useState('Last 30 Days');
    const [newsSource, setNewsSource] = useState('All Sources');

    const brandSentimentData = [
        { name: 'TechBrand', value: 85, color: '#22c55e' },
        { name: 'FoodCo', value: 65, color: '#3b82f6' },
        { name: 'RetailX', value: 0, color: '#9ca3af' },
        { name: 'ElectroGoods', value: -35, color: '#e5e7eb' },
        { name: 'AutoParts', value: -75, color: '#ef4444' }
    ];

    const sentimentTrends = [
        { name: 'TechBrand', change: 12, isPositive: true },
        { name: 'FoodCo', change: 5, isPositive: true },
        { name: 'RetailX', change: 0, isPositive: true },
        { name: 'ElectroGoods', change: 8, isPositive: false },
        { name: 'AutoParts', change: 27, isPositive: false }
    ];

    const competitorHealth = [
        { name: 'Competitor1', value: '+45', status: 'Neutral-Positive' },
        { name: 'Competitor2', value: '-16', status: 'Negative' }
    ];

    const newsItems = [
        {
            brand: 'TechBrand',
            sentiment: 'Very Positive',
            title: 'TechBrand launches new eco-friendly product line, commits to carbon neutrality by 2025',
            likes: '1.2K',
            shares: '3.5K',
            daysAgo: 2,
            sentimentBar: 95
        },
        {
            brand: 'FoodCo',
            sentiment: 'Positive',
            title: 'FoodCo\'s new organic product line exceeds sales expectations, premium pricing remains a concern',
            likes: '950',
            shares: '2.1K',
            daysAgo: 4,
            sentimentBar: 65
        },
        {
            brand: 'RetailX',
            sentiment: 'Neutral',
            title: 'RetailX announces 15 new store openings while facing supply chain challenges in existing locations',
            likes: '630',
            shares: '1.8K',
            daysAgo: 7,
            sentimentBar: 50
        },
        {
            brand: 'AutoParts',
            sentiment: 'Very Negative',
            title: 'AutoParts CEO resigns amid growing concerns over manufacturing quality and product reliability',
            likes: '1.6K',
            shares: '2.4K',
            daysAgo: 3,
            sentimentBar: 15
        }
    ];

    const getSentimentColor = (sentiment) => {
        switch (sentiment) {
            case 'Very Positive': return 'bg-green-500 text-white';
            case 'Positive': return 'bg-blue-500 text-white';
            case 'Neutral': return 'bg-gray-400 text-white';
            case 'Negative': return 'bg-orange-500 text-white';
            case 'Very Negative': return 'bg-red-500 text-white';
            default: return 'bg-gray-200 text-gray-800';
        }
    };

    const getSentimentBarColor = (sentiment) => {
        switch (sentiment) {
            case 'Very Positive': return 'bg-green-500';
            case 'Positive': return 'bg-blue-500';
            case 'Neutral': return 'bg-gray-400';
            case 'Negative': return 'bg-orange-500';
            case 'Very Negative': return 'bg-red-500';
            default: return 'bg-gray-200';
        }
    };

    const getTrendColor = (isPositive) => {
        return isPositive ? 'text-green-500' : 'text-red-500';
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1 p-6 bg-white shadow-md border border-gray-200 rounded-md m-4">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Brand IQ</h1>
                        <h2 className="text-lg font-medium text-gray-700 border-b-2 border-red-500 inline-block">News Sentiment Analysis</h2>
                    </div>
                    <div className="flex space-x-2">
                        <button className="flex items-center text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50">
                            <Download size={16} className="mr-2" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-4 mb-6">
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Date Range:</span>
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50">
                            <span>{dateRange}</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">News Sources:</span>
                        <button className="flex items-center space-x-1 text-sm bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-50">
                            <span>{newsSource}</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-base font-medium mb-4">Brand Sentiment Overview</h3>
                    <div className="flex justify-between items-end h-64 mb-2">
                        {brandSentimentData.map((brand, idx) => (
                            <div key={idx} className="flex flex-col items-center w-1/5">
                                <div className="h-48 flex items-end justify-center w-full">
                                    <div
                                        className="w-16 rounded-t-md"
                                        style={{
                                            height: `${Math.abs(brand.value) * 0.45}%`,
                                            backgroundColor: brand.color
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-2 text-sm text-center">{brand.name}</div>
                                <div className={`mt-1 font-medium ${brand.value > 0 ? 'text-green-500' : brand.value < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                                    {brand.value > 0 ? '+' : ''}{brand.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center text-xs text-gray-600 space-x-4 mt-4">
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                            <span>Very Negative</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-gray-400 mr-1"></div>
                            <span>Neutral</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                            <span>Very Positive</span>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-medium">Latest News Analysis</h3>
                        <a href="#" className="text-blue-500 text-sm flex items-center hover:underline">
                            View all news <ArrowRight size={14} className="ml-1" />
                        </a>
                    </div>

                    <div className="space-y-4">
                        {newsItems.map((item, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-800 mr-3">{item.brand}</span>
                                        <span className={`text-xs px-2 py-1 rounded ${getSentimentColor(item.sentiment)}`}>
                                            {item.sentiment}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500">{item.daysAgo} days ago</span>
                                </div>
                                <p className="text-sm text-gray-700 mb-3">{item.title}</p>
                                <div className="mb-3 w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`${getSentimentBarColor(item.sentiment)} h-2 rounded-full`}
                                        style={{ width: `${item.sentimentBar}%` }}
                                    ></div>
                                </div>
                                <div className="flex text-xs text-gray-500">
                                    <div className="flex items-center mr-4">
                                        <ThumbsUp size={14} className="mr-1" />
                                        <span>{item.likes}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MessageCircle size={14} className="mr-1" />
                                        <span>{item.shares}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-72 border-l border-gray-200 p-4 bg-white shadow-md m-4 mt-4 rounded-md">
                <div className="flex items-center mb-4">
                    <Megaphone size={18} className="text-blue-600 mr-2" />
                    <h4 className="text-base font-medium">Brand Insights</h4>
                </div>

                <div className="space-y-6">
                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Brand Momentum</h5>
                        <p className="text-xs text-gray-600">
                            TechBrand's sustainability initiatives are generating significant positive coverage and consumer engagement.
                        </p>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Reputation Alert</h5>
                        <p className="text-xs text-gray-600">
                            AutoParts requires immediate crisis management to address product quality concerns and leadership changes.
                        </p>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-lg">
                        <h5 className="text-sm font-medium mb-2">Opportunity</h5>
                        <p className="text-xs text-gray-600">
                            FoodCo could benefit from addressing pricing concerns while maintaining focus on successful organic product line.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-sm font-medium mb-3">Recommended Actions</h5>
                        <div className="space-y-2">
                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Amplify TechBrand's sustainability messaging across media channels
                                </p>
                            </div>

                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Develop crisis response plan for AutoParts reputation issues
                                </p>
                            </div>

                            <div className="flex">
                                <div className="mt-1 mr-2 flex-shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    Create targeted messaging to address FoodCo's pricing perceptions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <button className="flex-1 flex items-center justify-center space-x-1 text-xs bg-white border border-gray-300 hover:bg-gray-50 transition-colors rounded-md px-3 py-2 shadow-sm">
                            <span className="font-medium">Full Brand Analysis</span>
                        </button>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-medium mb-3">30-Day Sentiment Trends</h3>
                        <div className="space-y-2">
                            {sentimentTrends.map((trend, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs">
                                    <span className="text-gray-600">{trend.name}</span>
                                    <div className={getTrendColor(trend.isPositive)}>
                                        <span className="flex items-center">
                                            {trend.isPositive ?
                                                <TrendingUp size={14} className="mr-1" /> :
                                                <TrendingUp size={14} className="mr-1" />
                                            }
                                            {trend.isPositive ? '+' : '-'}{trend.change} points
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-medium mb-3">Competitor Brand Health</h3>
                        <div className="space-y-2">
                            {competitorHealth.map((competitor, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs">
                                    <span className="text-gray-600">{competitor.name}</span>
                                    <span className={competitor.value.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                        {competitor.value} ({competitor.status})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center mb-3">
                            <Bot size={16} className="text-blue-600 mr-2" />
                            <h3 className="text-sm font-medium">AI Sentiment Alert</h3>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-xs text-gray-700">
                            Our AI has detected early signals of a potential positive spike for RetailX. Positive supply chain story developing.
                            <span className="text-blue-600 block mt-1 cursor-pointer">Click to analyze</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}