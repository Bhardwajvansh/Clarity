import React, { useState } from 'react';
import {
    Heart,
    ShoppingCart,
    Building2,
    Settings,
    ChevronLeft,
    ChevronRight,
    Smartphone,
    Utensils,
    Sofa,
    Shirt,
    Globe,
    Star,
    Zap,
    Cpu,
    Truck,
    Package
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const UserOnboarding = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedSector, setSelectedSector] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    const [selectedCompetitors, setSelectedCompetitors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const navigate = useNavigate();

    const sectors = [
        { id: 1, name: 'Healthcare', icon: <Heart size={28} />, description: 'Medical, Pharma, Devices' },
        { id: 2, name: 'Retail', icon: <ShoppingCart size={28} />, description: 'E-commerce, Stores, CPG' },
        { id: 3, name: 'Financial Services', icon: <Building2 size={28} />, description: 'Banking, Insurance, Fintech' },
        { id: 4, name: 'Manufacturing', icon: <Settings size={28} />, description: 'Industrial, Production' },
    ];

    const products = [
        { id: 1, name: 'Apparel', icon: <Shirt size={28} />, description: 'Clothing & Fashion' },
        { id: 2, name: 'Electronics', icon: <Smartphone size={28} />, description: 'Devices & Gadgets' },
        { id: 3, name: 'Food & Beverage', icon: <Utensils size={28} />, description: 'Grocery & Consumables' },
        { id: 4, name: 'Home Goods', icon: <Sofa size={28} />, description: 'Furniture & Decor' },
    ];

    const accounts = [
        { id: 1, name: 'GlobalMart', icon: <Building2 size={28} />, description: 'Retail Chain', revenue: '$42.5M' },
        { id: 2, name: 'TechWorld', icon: <ShoppingCart size={28} />, description: 'Electronics Retailer', revenue: '$47M' },
        { id: 3, name: 'FoodCo', icon: <ShoppingCart size={28} />, description: 'Grocery Chain', revenue: '$31.1M' },
        { id: 4, name: 'ECommerce Inc', icon: <Globe size={28} />, description: 'Online Marketplace', revenue: '$62M' },
    ];

    const competitors = [
        { id: 1, name: 'FastTech Inc', icon: <Zap size={28} />, description: 'Market Share: 12%', threat: 'Low' },
        { id: 2, name: 'Innovate Corp', icon: <Zap size={28} />, description: 'Market Share: 28%', threat: 'High' },
        { id: 3, name: 'Global Solutions', icon: <Globe size={28} />, description: 'Market Share: 18%', threat: 'Medium' },
        { id: 4, name: 'Premium Tech', icon: <Star size={28} />, description: 'Market Share: 15%', threat: 'Medium' },
    ];

    const vendors = [
        { id: 1, name: 'TechSupply Co', icon: <Cpu size={28} />, description: 'Components', risk: 'Low', spend: 'Low' },
        { id: 2, name: 'GlobalParts Inc', icon: <ShoppingCart size={28} />, description: 'Manufacturing', risk: 'High', spend: 'Medium' },
        { id: 3, name: 'FastShip Logistics', icon: <Truck size={28} />, description: 'Logistics', risk: 'Medium', spend: 'Low' },
        { id: 4, name: 'Package Systems', icon: <Package size={28} />, description: 'Packaging', risk: 'Low', spend: 'Low' },
    ];

    const handleSectorSelect = (sector) => {
        setSelectedSector(sector);
    };

    const handleProductSelect = (product) => {
        if (selectedProducts.some(p => p.id === product.id)) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const handleAccountSelect = (account) => {
        if (selectedAccounts.some(a => a.id === account.id)) {
            setSelectedAccounts(selectedAccounts.filter(a => a.id !== account.id));
        } else {
            setSelectedAccounts([...selectedAccounts, account]);
        }
    };

    const handleCompetitorSelect = (competitor) => {
        if (selectedCompetitors.some(c => c.id === competitor.id)) {
            setSelectedCompetitors(selectedCompetitors.filter(c => c.id !== competitor.id));
        } else {
            setSelectedCompetitors([...selectedCompetitors, competitor]);
        }
    };

    const handleVendorSelect = (vendor) => {
        if (selectedVendors.some(v => v.id === vendor.id)) {
            setSelectedVendors(selectedVendors.filter(v => v.id !== vendor.id));
        } else {
            setSelectedVendors([...selectedVendors, vendor]);
        }
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const getThreatColor = (threat) => {
        switch (threat) {
            case 'High': return 'text-red-500';
            case 'Medium': return 'text-orange-500';
            case 'Low': return 'text-green-500';
            default: return '';
        }
    };

    const getRiskColor = (risk) => {
        switch (risk) {
            case 'High': return 'text-red-500';
            case 'Medium': return 'text-orange-500';
            case 'Low': return 'text-green-500';
            default: return '';
        }
    };

    const renderCard = (item, type) => {
        let isSelected = false;
        let handleSelect;

        switch (type) {
            case 'sector':
                isSelected = selectedSector?.id === item.id;
                handleSelect = () => handleSectorSelect(item);
                break;
            case 'product':
                isSelected = selectedProducts.some(p => p.id === item.id);
                handleSelect = () => handleProductSelect(item);
                break;
            case 'account':
                isSelected = selectedAccounts.some(a => a.id === item.id);
                handleSelect = () => handleAccountSelect(item);
                break;
            case 'competitor':
                isSelected = selectedCompetitors.some(c => c.id === item.id);
                handleSelect = () => handleCompetitorSelect(item);
                break;
            case 'vendor':
                isSelected = selectedVendors.some(v => v.id === item.id);
                handleSelect = () => handleVendorSelect(item);
                break;
            default:
                break;
        }

        return (
            <div
                key={item.id}
                onClick={handleSelect}
                className={`relative flex flex-col items-center p-6 border rounded-md cursor-pointer transition-all ${isSelected
                    ? 'border-blue-500 shadow-md bg-white'
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                    }`}
            >
                {(type === 'competitor' || type === 'vendor') && (
                    <div className={`absolute top-2 right-2 text-xs font-bold ${type === 'competitor' ? getThreatColor(item.threat) : getRiskColor(item.risk)
                        }`}>
                        {type === 'competitor' ? `${item.threat} Threat` : `${item.risk} Risk`}
                    </div>
                )}

                {type === 'account' && (
                    <div className="absolute top-2 right-2 text-xs font-bold text-blue-500">
                        {item.revenue}
                    </div>
                )}

                <div className="bg-gray-100 p-3 rounded-full mb-2">
                    {item.icon}
                </div>
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-xs text-gray-500 text-center mt-1">{item.description}</p>

                {type === 'vendor' && (
                    <div className="w-full mt-2">
                        <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 mr-1">Spend:</span>
                            <div className="h-1 bg-gray-200 rounded-full flex-grow">
                                <div
                                    className={`h-1 rounded-full ${item.spend === 'High' ? 'w-4/5 bg-blue-500' :
                                        item.spend === 'Medium' ? 'w-2/5 bg-blue-500' :
                                            'w-1/5 bg-blue-500'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const renderSelectedTags = (type) => {
        let selected = [];
        let removeHandler;

        switch (type) {
            case 'product':
                selected = selectedProducts;
                removeHandler = handleProductSelect;
                break;
            case 'account':
                selected = selectedAccounts;
                removeHandler = handleAccountSelect;
                break;
            case 'competitor':
                selected = selectedCompetitors;
                removeHandler = handleCompetitorSelect;
                break;
            case 'vendor':
                selected = selectedVendors;
                removeHandler = handleVendorSelect;
                break;
            default:
                return null;
        }

        return (
            <div className="flex flex-wrap gap-2 mt-2">
                {selected.map(item => (
                    <div
                        key={item.id}
                        className="flex items-center bg-blue-50 border border-blue-200 rounded-md px-2 py-1"
                    >
                        <div className="mr-1">
                            {item.icon && React.cloneElement(item.icon, { size: 16 })}
                        </div>
                        <span className="text-sm text-blue-700">{item.name}</span>

                        {type === 'competitor' && (
                            <span className={`ml-1 text-xs font-medium ${getThreatColor(item.threat)}`}>
                                {item.threat}
                            </span>
                        )}

                        {type === 'vendor' && (
                            <span className={`ml-1 text-xs font-medium ${getRiskColor(item.risk)}`}>
                                {item.risk}
                            </span>
                        )}

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                removeHandler(item);
                            }}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                        >
                            ×
                        </button>
                    </div>
                ))}

                <div className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer">
                    <span className="text-lg mr-1">+</span>
                    <span className="text-sm">Add More</span>
                </div>
            </div>
        );
    };

    const renderStepIndicator = () => {
        return (
            <div className="flex justify-center mt-8 mb-4">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className="flex items-center">
                        <div
                            className={`h-2 w-2 rounded-full mx-1 ${step === currentStep ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                        ></div>
                    </div>
                ))}
            </div>
        );
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <h2 className="text-xl font-bold mb-1">Step 1: Select Your Sector</h2>
                        <div className="h-1 w-24 bg-blue-500 mb-4"></div>
                        <p className="text-gray-600 mb-6">
                            When users first log in, they'll be guided through a series of selections to personalize their experience. The
                            first step is selecting their industry sector from the carousel below.
                        </p>

                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronLeft size={20} />
                            </button>

                            <div className="grid grid-cols-4 gap-4">
                                {sectors.map(sector => renderCard(sector, 'sector'))}
                            </div>

                            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {selectedSector && (
                            <div className="mt-8 border-l-4 border-gray-200 pl-4">
                                <h3 className="text-gray-700 font-medium">Selected Sector: {selectedSector.name}</h3>
                                <p className="text-gray-600 mt-2">
                                    Based on this selection, the platform will customize analytics, benchmark data, and industry-specific insights for the retail sector.
                                </p>
                            </div>
                        )}
                    </>
                );

            case 2:
                return (
                    <>
                        <h2 className="text-xl font-bold mb-1">Step 2: Select Your Products/Services</h2>
                        <div className="h-1 w-24 bg-blue-500 mb-4"></div>
                        <p className="text-gray-600 mb-6">
                            Based on the selected sector (Retail), users can now choose their key products or services. Multiple selections
                            are allowed to create a comprehensive intelligence profile.
                        </p>

                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronLeft size={20} />
                            </button>

                            <div className="grid grid-cols-4 gap-4">
                                {products.map(product => renderCard(product, 'product'))}
                            </div>

                            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-gray-700 font-medium">Selected Products/Services:</h3>
                            {renderSelectedTags('product')}

                            {selectedProducts.length > 0 && (
                                <p className="text-gray-600 mt-3">
                                    Your AI analysis will focus on market intelligence for {selectedProducts.map(p => p.name).join(' and ')} products in the Retail sector.
                                </p>
                            )}
                        </div>
                    </>
                );

            case 3:
                return (
                    <>
                        <h2 className="text-xl font-bold mb-1">Step 3: Select Your Key Sales Accounts</h2>
                        <div className="h-1 w-24 bg-blue-500 mb-4"></div>
                        <p className="text-gray-600 mb-6">
                            Now, select the companies you're selling to. These key accounts will be monitored for opportunities, risks,
                            and strategic insights to help you optimize your sales strategy.
                        </p>

                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronLeft size={20} />
                            </button>

                            <div className="grid grid-cols-4 gap-4">
                                {accounts.map(account => renderCard(account, 'account'))}
                            </div>

                            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-gray-700 font-medium">Selected Key Accounts:</h3>
                            {renderSelectedTags('account')}

                            {selectedAccounts.length > 0 && (
                                <p className="text-gray-600 mt-3">
                                    The AI will generate insights, track news, and monitor trends specifically for these key accounts, helping you optimize your business relationship with them.
                                </p>
                            )}
                        </div>

                        <div className="bg-gray-50 p-3 rounded-md mt-4 text-sm text-gray-600">
                            <p>These accounts will be plotted on a value/potential matrix in your dashboard</p>
                        </div>
                    </>
                );

            case 4:
                return (
                    <>
                        <h2 className="text-xl font-bold mb-1">Step 4: Select Your Competitors</h2>
                        <div className="h-1 w-24 bg-blue-500 mb-4"></div>
                        <p className="text-gray-600 mb-6">
                            Now, identify your main competitors in the market. Our AI will track their movements, analyze their
                            strategies, and help you position your offerings more effectively.
                        </p>

                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronLeft size={20} />
                            </button>

                            <div className="grid grid-cols-4 gap-4">
                                {competitors.map(competitor => renderCard(competitor, 'competitor'))}
                            </div>

                            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-gray-700 font-medium">Selected Competitors:</h3>
                            {renderSelectedTags('competitor')}

                            {selectedCompetitors.length > 0 && (
                                <p className="text-gray-600 mt-3">
                                    The platform will monitor these competitors' activities, product launches, market positioning, and generate insights to help you maintain a competitive
                                    edge.
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                                <p>Your competitors will be analyzed in a RADAR chart showing service alignment and client alignment relative to your company</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600 flex items-center">
                                <span className="p-1 bg-white rounded-full mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                                        <path d="M12 2v2"></path>
                                        <path d="M12 22v-2"></path>
                                        <path d="m17 20.66-1-1.73"></path>
                                        <path d="M11 10.27 7 3.34"></path>
                                        <path d="m20.66 17-1.73-1"></path>
                                        <path d="m3.34 7 1.73 1"></path>
                                        <path d="M14 12h8"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="m20.66 7-1.73 1"></path>
                                        <path d="m3.34 17 1.73-1"></path>
                                        <path d="m17 3.34-1 1.73"></path>
                                        <path d="m7 20.66-1-1.73"></path>
                                    </svg>
                                </span>
                                <p>AI will automatically detect emerging competitors in your space</p>
                            </div>
                        </div>
                    </>
                );

            case 5:
                return (
                    <>
                        <h2 className="text-xl font-bold mb-1">Step 5: Select Your Key Vendors</h2>
                        <div className="h-1 w-24 bg-blue-500 mb-4"></div>
                        <p className="text-gray-600 mb-6">
                            Finally, select your key suppliers and vendors. The platform will monitor their performance, risk factors, and
                            spend analytics to help optimize your supply chain strategy.
                        </p>

                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronLeft size={20} />
                            </button>

                            <div className="grid grid-cols-4 gap-4">
                                {vendors.map(vendor => renderCard(vendor, 'vendor'))}
                            </div>

                            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-gray-700 font-medium">Selected Key Vendors:</h3>
                            {renderSelectedTags('vendor')}

                            {selectedVendors.length > 0 && (
                                <p className="text-gray-600 mt-3">
                                    The platform will monitor these vendors for supply chain disruptions, financial stability, and other risk factors while analyzing spend patterns for
                                    optimization opportunities.
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600 flex items-center">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m4.9 4.9 14.2 14.2"></path>
                                    </svg>
                                </span>
                                <p>Your dashboard will include a color-coded risk analysis visualization for all selected vendors</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600 flex items-center">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20"></path>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </span>
                                <p>Spend analysis will highlight top vendors by contribution to optimize purchasing strategy</p>
                            </div>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex justify-center flex-col bg-gray-100" >
            <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold mb-6">User Onboarding</h1>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    {renderStepContent()}

                    {renderStepIndicator()}

                    <div className="flex justify-between mt-6">
                        {currentStep > 1 && (
                            <button
                                onClick={prevStep}
                                className="flex items-center text-gray-600 hover:text-gray-800"
                            >
                                <ChevronLeft size={16} />
                                <span className="ml-1">Previous: {currentStep === 2 ? 'Sectors' : currentStep === 3 ? 'Products' : currentStep === 4 ? 'Accounts' : 'Competitors'}</span>
                            </button>
                        )}

                        {currentStep < 5 ? (
                            <button
                                onClick={nextStep}
                                className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Continue
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate('/stdashboard')}
                                className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                            >
                                Complete Setup
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}