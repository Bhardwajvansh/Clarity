import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Chatbot } from "../Chatbot/Chatbot";
import { Parameters } from "../Parameters/Parameters";
import { Market } from "../Market/Market";
import { Specs } from "../Specs/Specs";
import { Dashboard } from "../Dashboard/Dashboard";


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


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Dashboard />
            <Parameters />
            <Market />
            <Specs />
            <Chatbot />
            <Footer />
        </div>
    );
};