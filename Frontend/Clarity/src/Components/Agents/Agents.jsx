import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Agents = () => {
  const navigate = useNavigate();
  const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
  ];

  const agents = [
    {
      "icon": "📊",
      "title": "Market IQ",
      "description": "Market IQ agents provide deep insights into industry landscapes, market revenues, regional trends, and benchmarking across categories, sectors, and technologies.",
      "agentType": "Text Agent",
      "navigate": "/dashboard",
    },
    {
      "icon": "📈",
      "title": "Account IQ",
      "description": "Account IQ agents deliver comprehensive financial analysis of publicly traded companies, including key financial metrics, market trends, and technical stock insights.",
      "agentType": "Text Agent",
      "navigate": "/automobile",
    },
    {
      "icon": "📋",
      "title": "Brand IQ",
      "description": "Brand IQ agents conduct competitive intelligence, analyzing companies in real time and historically to evaluate brand positioning and market performance.",
      "agentType": "Text Agent",
      "navigate": "/brandnews",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 p-8 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Top Agents</h1>
        <a href="#" className="text-purple-600 hover:underline">View All Categories</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="border bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
            style={{
              borderColor: COLORS[index % COLORS.length],
              boxShadow: `0 4px 6px -1px ${COLORS[index % COLORS.length]}40`
            }}
          >
            <div className="text-3xl mb-4" style={{ color: COLORS[index % COLORS.length] }}>{agent.icon}</div>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: COLORS[index % COLORS.length] }}
            >
              {agent.title}
            </h2>
            <p className="text-gray-600 mb-4 flex-grow">{agent.description}</p>
            <div className="flex justify-between items-center">
              <button
                className="px-4 py-2 rounded-full text-white transition-all duration-300 hover:opacity-90"
                onClick={() => navigate(agent.navigate)}
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                  boxShadow: `0 2px 4px -1px ${COLORS[index % COLORS.length]}80`
                }}
              >
                BROWSE AGENT
              </button>
              <span className="text-gray-500 text-sm">{agent.agentType}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;