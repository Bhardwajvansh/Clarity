import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Headlines } from "../Headlines/Headlines";
import { Stats } from "../Stats/Stats";
import { Carousel } from "../Carousel/Carousel";
import { Footer } from "../Footer/Footer";
import { Chatbot } from "../Chatbot/Chatbot";
import { Parameters } from "../Parameters/Parameters";
import { Market } from "../Market/Market";
import { Specs } from "../Specs/Specs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

export const Hero = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get("http://localhost:3001/", { withCredentials: true });
                if (response.data !== "Success") {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Authentication error:", error);
                navigate("/login");
            }
        };
        verifyUser();
    }, [navigate]);

    const salesData = [
        { name: 'Jan', Electric: 400, Hybrid: 240, Conventional: 350 },
        { name: 'Feb', Electric: 300, Hybrid: 139, Conventional: 250 },
        { name: 'Mar', Electric: 200, Hybrid: 380, Conventional: 300 },
        { name: 'Apr', Electric: 278, Hybrid: 390, Conventional: 280 },
        { name: 'May', Electric: 189, Hybrid: 480, Conventional: 220 },
        { name: 'Jun', Electric: 239, Hybrid: 380, Conventional: 350 }
    ];

    const marketShareData = [
        { name: 'Tesla', value: 35 },
        { name: 'Toyota', value: 25 },
        { name: 'Ford', value: 20 },
        { name: 'Others', value: 20 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="bg-gradient-to-tr from-indigo-100 to-purple-100 p-10 mx-auto relative overflow-hidden shadow-sm">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>

                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-indigo-700 lg:text-7xl mb-4">Welcome to Clarity</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Automobile Sales Trends</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={salesData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Electric" fill="#0088FE" />
                                    <Bar dataKey="Hybrid" fill="#00C49F" />
                                    <Bar dataKey="Conventional" fill="#FFBB28" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Market Share Distribution</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={marketShareData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {marketShareData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-indigo-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Electric Vehicle Growth</h3>
                            <p className="text-gray-600">35% year-over-year increase in electric vehicle sales globally.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-indigo-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Segway Market</h3>
                            <p className="text-gray-600">Projected 15% growth in personal transportation devices.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-indigo-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Industry Analytics</h3>
                            <p className="text-gray-600">Comprehensive insights into automotive technology trends.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Carousel /> */}
            {/* <Stats /> */}
            <Parameters />
            <Market />
            <Specs />
            {/* <Headlines /> */}
            <Chatbot />
            <Footer />
        </div>
    );
};