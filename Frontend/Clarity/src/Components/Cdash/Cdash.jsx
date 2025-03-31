import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Laptop, Box, Stethoscope, ArrowRight, CarFront } from 'lucide-react'

export const Cdash = () => {
    const navigate = useNavigate();
    const COLORS = [
        '#8A4FFF',
        '#6A5ACD',
        '#9370DB',
        '#BA55D3',
        '#DA70D6'
    ];

    const analyticsCards = [
        {
            icon: <CarFront size={32} />,
            title: "Automobiles",
            description: "Interactive data exploration and conversational insights about Automobiles.",
            route: "/automobile"
        },
        {
            icon: <Box size={32} />,
            title: "Coal",
            description: "Interactive data exploration and conversational insights about Coal.",
            route: "/Coal"
        },
        {
            icon: <Stethoscope size={32} />,
            title: "Healthcare",
            description: "Interactive data exploration and conversational insights related to Healthcare.",
            route: "/healthcare",
            isDisabled: true
        },
        {
            icon: <Laptop size={32} />,
            title: "Technology",
            description: "Interactive data exploration and conversational insights regarding Tech.",
            route: "/technology",
            isDisabled: true
        },
    ];

    return (
        <div>
            {/* New Analytics Cards */}
            <h1 className="text-3xl font-bold" style={{ background: `linear-gradient(to right, ${COLORS[0]}, ${COLORS[3]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Clarity Sectors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {analyticsCards.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-white p-6 rounded-lg shadow-sm transition duration-300 group ${card.isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}`}
                    >
                        <div className={`mb-4 ${card.isDisabled ? 'text-gray-400' : 'text-purple-500'}`}>
                            {card.icon}
                        </div>
                        <h3 className={`font-bold text-lg mb-2 ${card.isDisabled ? 'text-gray-400' : 'text-gray-800'}`}>
                            {card.title}
                            {card.isDisabled && <span className="ml-2 text-sm font-normal bg-gray-200 px-2 py-1 rounded text-gray-500">Coming Soon</span>}
                        </h3>
                        <p className={`mb-4 ${card.isDisabled ? 'text-gray-400' : 'text-gray-600'}`}>{card.description}</p>
                        {card.isDisabled ? (
                            <span className="flex items-center text-gray-400">
                                Coming Soon <ArrowRight className="ml-2" size={16} />
                            </span>
                        ) : (
                            <button
                                onClick={() => navigate(card.route)}
                                className="flex items-center text-purple-600 hover:text-purple-800 transition"
                            >
                                Visit {card.title} <ArrowRight className="ml-2" size={16} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}