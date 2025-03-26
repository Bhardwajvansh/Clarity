import React from 'react';

export const Agents = () => {
  const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
  ];

  const agents = [
    {
      icon: '📊',
      title: 'Market Intelligence',
      description: 'Market intelligence agents cover industry landscape, market revenue, regional analysis and competitive benchmarking for any category, sector or technology.',
      agentType: 'Text Agent'
    },
    {
      icon: '📈',
      title: 'Financial Intelligence',
      description: 'Financial intelligence agents offer comprehensive financial insight of any publicly traded company. These agents covers all financial metrics, economic trends and technical insights on stocks',
      agentType: 'Text Agent'
    },
    {
      icon: '📋',
      title: 'Competitive Intelligence',
      description: 'Competitive Intelligence performs competitive analysis on any company in real time and with a historical window.',
      agentType: 'Text Agent'
    },
    {
      icon: '📄',
      title: 'Annual Report',
      description: 'Annual Report agent tracks annual reports of 15000+ publicly traded companies and provides detailed analysis based on latest data across Balance sheet, Income Statement and Cash Flow',
      agentType: 'Text Agent'
    },
    {
      icon: '📊',
      title: 'Stock Data Agent',
      description: 'Analyses intraday stock in real-time and generates 20+ years of historical evidence.',
      agentType: 'Action Agent'
    },
    {
      icon: '📋',
      title: 'Indices Data Agent',
      description: 'Generates global indices data in real-time for quantitative market analysis.',
      agentType: 'Action Agent'
    },
    {
      icon: '🔄',
      title: 'Forex Data Agent',
      description: 'Allows informed trading with real-time and historical forex market data.',
      agentType: 'Action Agent'
    },
    {
      icon: '💰',
      title: 'Crypto Data Agent',
      description: 'Tracks major cryptocurrencies in real-time and generates 20+ years of historical evidence.',
      agentType: 'Action Agent'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Top Agents</h1>
        <a href="#" className="text-purple-600 hover:underline">View All Categories</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
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