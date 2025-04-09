import { useState } from 'react';
import { ChevronRight, ChevronLeft, Info, ChevronDown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Company = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [projectTitle, setProjectTitle] = useState('');
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [companyInput, setCompanyInput] = useState('');
    const [selectedParameters, setSelectedParameters] = useState([]);
    const [parameterValue, setParameterValue] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        setActiveStep(prevStep => Math.min(prevStep + 1, 3));
    };

    const handlePrevious = () => {
        setActiveStep(prevStep => Math.max(prevStep - 1, 1));
    };

    const addCompany = () => {
        if (companyInput.trim()) {
            setSelectedCompanies([...selectedCompanies, companyInput]);
            setCompanyInput('');
        }
    };

    const removeCompany = (index) => {
        setSelectedCompanies(selectedCompanies.filter((_, i) => i !== index));
    };

    const addParameter = () => {
        if (parameterValue && !selectedParameters.includes(parameterValue)) {
            setSelectedParameters([...selectedParameters, parameterValue]);
            setParameterValue('');
        }
    };

    const removeParameter = (param) => {
        setSelectedParameters(selectedParameters.filter(p => p !== param));
    };

    const parameters = [
        { value: "financial_performance", label: "Financial Performance" },
        { value: "stock_growth", label: "Stock Growth" },
        { value: "product_launches", label: "Product Launches" },
        { value: "partnership", label: "Partnership" },
        { value: "pricing_strategies", label: "Pricing Strategies" }
    ];


    const renderStepContent = () => {
        switch (activeStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Companies</h2>
                        <p className="text-gray-600">Start by selecting a companies and project title.</p>

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Project title</label>
                            <input
                                type="text"
                                placeholder="Type a title"
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-gray-700 font-medium">Select a Company</label>
                                <button
                                    className="text-purple-600 flex items-center"
                                    onClick={addCompany}
                                >
                                    <span className="text-xl mr-1">+</span> Add New
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Type a company name..."
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                value={companyInput}
                                onChange={(e) => setCompanyInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && addCompany()}
                            />
                        </div>

                        {selectedCompanies.length > 0 && (
                            <div className="mt-4">
                                <h3 className="font-medium text-gray-700 mb-2">Selected Companies:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCompanies.map((company, index) => (
                                        <div key={index} className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 flex items-center">
                                            {company}
                                            <button onClick={() => removeCompany(index)} className="ml-2">
                                                <X className="w-4 h-4 text-purple-700 hover:text-purple-900" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-blue-50 p-4 rounded-md flex items-start">
                            <Info className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                            <p className="text-blue-700">You can select multiple companies.</p>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Parameters</h2>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-gray-700 font-medium">Select Parameters</label>
                            </div>
                            <div className="relative">
                                <select
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none"
                                    value={parameterValue}
                                    onChange={(e) => setParameterValue(e.target.value)}
                                    onClick={addParameter}
                                >
                                    <option value="">Select a parameter</option>
                                    {parameters.map(param => (
                                        <option key={param.value} value={param.lable}>
                                            {param.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-3 text-gray-500" />
                            </div>
                        </div>

                        {selectedParameters.length > 0 && (
                            <div className="mt-4">
                                <h3 className="font-medium text-gray-700 mb-2">Selected Parameters:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedParameters.map((param) => {
                                        const paramObj = parameters.find(p => p.value === param) || { label: param };
                                        return (
                                            <div key={param} className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 flex items-center">
                                                {paramObj.label}
                                                <button onClick={() => removeParameter(param)} className="ml-2">
                                                    <X className="w-4 h-4 text-purple-700 hover:text-purple-900" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="bg-blue-50 p-4 rounded-md flex items-start">
                            <Info className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                            <p className="text-blue-700">You can select multiple parameters.</p>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Schedule</h2>

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Schedule</label>
                            <div className="flex items-center space-x-2">
                                <div className="flex-none">
                                    <span className="mr-2">Every</span>
                                </div>
                                <div className="relative w-40">
                                    <select className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none">
                                        <option value="day">day</option>
                                        <option value="week" selected>week</option>
                                        <option value="month">month</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-500" />
                                </div>
                                <div className="flex-none">
                                    <span className="mx-2">on</span>
                                </div>
                                <div className="relative w-40">
                                    <select className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none">
                                        <option value="monday" selected>MONDAY</option>
                                        <option value="tuesday">TUESDAY</option>
                                        <option value="wednesday">WEDNESDAY</option>
                                        <option value="thursday">THURSDAY</option>
                                        <option value="friday">FRIDAY</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-500" />
                                </div>
                                <div className="flex-none">
                                    <span className="mx-2">at</span>
                                </div>
                                <div className="relative w-24">
                                    <select className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none">
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i} value={i + 1} selected={i + 1 === 5}>{i + 1}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-500" />
                                </div>
                                <div className="flex-none">
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="relative w-24">
                                    <select className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none">
                                        {['00', '15', '30', '45'].map((min) => (
                                            <option key={min} value={min} selected={min === '30'}>{min}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md flex items-start">
                            <Info className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                            <p className="text-blue-700">Timezone should be EDT.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 p-8">
            <div className="max-w-4xl my-2 mx-auto p-6 bg-white rounded-lg shadow-sm">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Company Information</h1>
                </div>
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-8 w-full">
                            {[1, 2, 3].map(step => (
                                <div key={step} className="flex flex-col items-center flex-1">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center ${step === activeStep ? 'bg-purple-600 text-white' :
                                            step < activeStep ? 'bg-purple-200 text-purple-700' : 'bg-gray-200 text-gray-500'
                                            }`}
                                    >
                                        {step}
                                    </div>
                                    <div className="mt-2 text-center">
                                        <div className={`font-medium ${step === activeStep ? 'text-purple-600' : 'text-gray-500'}`}>
                                            {step === 1 ? 'Companies' : step === 2 ? 'Parameters' : 'Schedule'}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {step === 1 ? 'Select companies and the project title' :
                                                step === 2 ? 'Choose competitive intelligence parameters' :
                                                    'Set your schedule'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    {renderStepContent()}
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={handlePrevious}
                        disabled={activeStep === 1}
                        className={`flex items-center px-4 py-2 rounded-md transition ${activeStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Previous
                    </button>

                    <button
                        onClick={
                            activeStep === 3
                                ? () =>
                                    navigate("/eval", {
                                        state: {
                                            projectTitle,
                                            selectedCompanies,
                                            selectedParameters,
                                        },
                                    })
                                :
                                handleNext
                        }
                        className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                        {activeStep === 3 ? 'Submit' : 'Next'}
                        {activeStep !== 3 && <ChevronRight className="w-5 h-5 ml-1" />}
                    </button>
                </div>
            </div>
        </div >
    );
};