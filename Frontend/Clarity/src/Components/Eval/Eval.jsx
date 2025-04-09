import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Briefcase, Building, Menu, X } from 'lucide-react';

export const Eval = () => {
    const location = useLocation();
    const { projectTitle, selectedCompanies, selectedParameters } = location.state || {
        projectTitle: "Market Analysis Q2",
        selectedCompanies: ["Microsoft", "Apple", "Google", "Amazon"],
        selectedParameters: ["Financial Performance", "Stock Growth", "Product Launches", "Partnerships"]
    };

    const [activeTab, setActiveTab] = useState('');
    const [parameterTabs, setParameterTabs] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeCompany, setActiveCompany] = useState('');

    useEffect(() => {
        if (selectedParameters && selectedParameters.length > 0) {
            setParameterTabs(selectedParameters);
            setActiveTab(selectedParameters[0]);
        }

        if (selectedCompanies && selectedCompanies.length > 0) {
            setActiveCompany(selectedCompanies[0]);
        }
    }, [selectedParameters, selectedCompanies]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCompanyClick = (company) => {
        setActiveCompany(company);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 flex">
            <div className={`bg-white shadow-md transition-all duration-300 flex flex-col ${sidebarOpen ? 'w-64' : 'w-16'}`}>
                <button
                    onClick={toggleSidebar}
                    className="p-2 self-end text-gray-500 hover:text-[#8A4FFF]"
                >
                    {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                </button>

                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center">
                        <Briefcase className="text-[#8A4FFF] w-6 h-6" />
                        {sidebarOpen && (
                            <h2 className="ml-2 font-bold text-gray-800 truncate">{projectTitle || "Project Title"}</h2>
                        )}
                    </div>
                </div>

                <div className="p-4 overflow-y-auto flex-grow">
                    {sidebarOpen && <h3 className="text-sm font-medium text-gray-500 mb-4">COMPANIES</h3>}
                    <div className="space-y-3">
                        {selectedCompanies && selectedCompanies.map((company, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-2 rounded-md cursor-pointer transition-colors
                                    ${company === activeCompany
                                        ? 'bg-[#8A4FFF]/20 border-l-4 border-[#8A4FFF]'
                                        : 'hover:bg-[#8A4FFF]/10'
                                    }`}
                                onClick={() => handleCompanyClick(company)}
                            >
                                <Building className={`${company === activeCompany ? 'text-[#8A4FFF]' : 'text-gray-500'} w-5 h-5`} />
                                {sidebarOpen && (
                                    <span className={`ml-3 truncate ${company === activeCompany ? 'font-medium text-[#8A4FFF]' : 'text-gray-700'}`}>
                                        {company}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <nav className="bg-[#8A4FFF]/20 shadow-sm">
                    <div className="flex items-center space-x-4 p-4">
                        <button
                            className="md:hidden text-gray-600 hover:text-[#8A4FFF]"
                            onClick={toggleSidebar}
                        >
                            <Menu />
                        </button>

                        {parameterTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    flex items-center px-4 py-2 rounded-md transition
                                    ${activeTab === tab
                                        ? 'bg-[#8A4FFF] text-white'
                                        : 'text-gray-600 bg-white hover:bg-gray-100'
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {activeTab || (parameterTabs.length > 0 ? parameterTabs[0] : "Select a parameter")}
                        </h2>
                        {activeCompany && (
                            <span className="ml-4 px-3 py-1 bg-[#8A4FFF]/10 text-[#8A4FFF] rounded-full text-sm font-medium">
                                {activeCompany}
                            </span>
                        )}
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-col space-y-4">
                        <p class="text-gray-700">
                            {activeCompany}, the parent company of Google, has consistently demonstrated strong financial performance,
                            driven by its dominant position in digital advertising, growth in cloud services, and investments in
                            emerging technologies. The company reports its financials on a quarterly basis, typically showing robust
                            revenue growth, healthy profit margins, and strong cash flows.
                        </p>

                        <div>
                            <p class="text-gray-700 mt-2">
                                {activeCompany} generates the majority of its revenue through advertising, including Search, YouTube ads, and the Google Network.
                                Over the years, the company has shown steady increases in total revenue, reflecting continued advertiser
                                demand and user engagement across its platforms. Additionally, Google Cloud has become a significant
                                contributor to revenue growth, with increasing adoption from enterprise customers.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-semibold text-gray-800">Profitability</h2>
                            <p class="text-gray-700 mt-2">
                                {activeCompany} maintains high profit margins, with operating income largely driven by its advertising business.
                                Its operating and net income have seen consistent year-over-year growth, thanks to a scalable business model and cost-effective infrastructure.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-semibold text-gray-800">Cash Flow and Liquidity</h2>
                            <p class="text-gray-700 mt-2">
                                The company generates strong free cash flow, allowing it to invest heavily in research and development,
                                acquire other businesses, and return capital to shareholders through share repurchases.
                                {activeCompany} holds a substantial amount of cash and marketable securities, reinforcing its financial stability.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-semibold text-gray-800">Segment Performance</h2>
                            <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li><strong>Google Services</strong> (Search, YouTube, Android, Chrome, Google Play): Remains the primary revenue driver.</li>
                                <li><strong>Google Cloud</strong>: Continues to grow rapidly, narrowing losses and moving toward profitability.</li>
                                <li><strong>Other Bets</strong> (Waymo, Verily): While not yet profitable, these ventures represent {activeCompany}’s long-term innovation pipeline.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 class="text-2xl font-semibold text-gray-800">Market Position</h2>
                            <p class="text-gray-700 mt-2">
                                {activeCompany}’s strong financial foundation enables it to remain competitive in a fast-evolving tech landscape.
                                With a diversified revenue base, consistent investment in AI and infrastructure, and strategic acquisitions,
                                the company is well-positioned for sustained growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eval;