import { useState } from 'react';
import { Download, Expand, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function Automega() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pdfUrl = "/assets/Global-Connected-Vehicles-Industry-Thought-Leadership-Report.pdf";
    const navigate = useNavigate();
    const COLORS = [
        '#8A4FFF',
        '#6A5ACD',
        '#9370DB',
        '#BA55D3',
        '#DA70D6'
    ];

    return (
        <div className="mx-auto bg-gradient-to-tr from-purple-100 to-indigo-100 p-10">
            <div className='flex items-center justify-between mb-8'>
                <h1 className="text-3xl font-bold text-purple-500">Megatrend and Microboom</h1>
                <button
                    onClick={() => { navigate("/top50") }}
                    className="px-4 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    <div className='flex gap-2'>
                        <p>Top 50 Tech</p>< ChevronRight />
                    </div>
                </button>
            </div>

            {/* CASE Mobility Section */}
            <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center p-4" style={{ backgroundColor: COLORS[0] }}>
                    <div className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white font-bold mr-3">1</div>
                    <h2 className="text-xl font-semibold text-white">CASE (Connected, Autonomous, Shared, Electric) Mobility</h2>
                    <span className="ml-auto text-sm text-white font-medium">Market Potential: $94.87B by 2029 (19% CAGR)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    {/* Connected Vehicles */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-blue-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Connected Vehicles</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => window.open(pdfUrl, '_blank')}
                                    className="flex items-center text-white hover:text-blue-100 transition-colors"
                                    aria-label="Download PDF"
                                >
                                    <Download className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex items-center text-white hover:text-blue-100 transition-colors"
                                    aria-label="View PDF"
                                >
                                    <Expand className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Vehicle Data Monetization</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$250B potential by 2030</div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Connected Services</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$26.4B by 2030 (13.3% CAGR)</div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">V2X Communication</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$155.17B by 2030 (42.2% CAGR)</div>
                            </div>
                        </div>
                    </div>

                    {/* PDF Modal */}
                    <AnimatePresence>
                        {isModalOpen && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <motion.div
                                    className="bg-white rounded-lg shadow-xl max-w-6xl w-full min-h-screen flex flex-col overflow-hidden"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
                                        <h3 className="font-semibold">Global Connected Vehicles Industry Report</h3>
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="text-white hover:text-blue-100 transition-colors"
                                            aria-label="Close modal"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex-1 p-0 flex justify-center bg-gray-100">
                                        <iframe
                                            src={`${pdfUrl}#toolbar=0&navpanes=0`}
                                            className="w-full border-0"
                                            title="Global Connected Vehicles Industry Report"
                                            aria-label="PDF Document"
                                        />
                                    </div>

                                    <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50">
                                        <div className="flex items-center space-x-4">
                                            <a
                                                href={pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors flex items-center"
                                            >
                                                <Expand className="w-4 h-4 mr-1.5" />
                                                <span>Open Full Screen</span>
                                            </a>

                                            <a
                                                href={pdfUrl}
                                                download
                                                className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center"
                                            >
                                                <Download className="w-4 h-4 mr-1.5" />
                                                <span>Download</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Autonomous Vehicles */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-blue-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Autonomous Vehicles</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Robotaxis</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$174B by 2045 (37% CAGR)</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">ADAS Technology</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$134B by 2032</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">AV Sensing & Compute</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$35B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Shared Mobility */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-blue-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Shared Mobility</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Ride-Hailing</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$230B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Car Subscription</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$40B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Micro Mobility</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$215B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Electric Vehicles */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-blue-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Electric Vehicles</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Battery EVs</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$1.1T by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Charging Infrastructure</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$207B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span className="font-medium">Battery Tech & Recycling</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$175B by 2030</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Software-Defined Vehicles Section */}
            <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center p-4" style={{ backgroundColor: COLORS[2] }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-3" style={{ backgroundColor: COLORS[0] }}>2</div>
                    <h2 className="text-xl font-semibold text-white">Software-Defined Vehicles (SDVs)</h2>
                    <span className="ml-auto text-sm text-white font-medium">Market Potential: $1.24T by 2030 (34% CAGR)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    {/* Software Platforms */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[0] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>Software Platforms</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Operating Systems</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$8.9B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">App Ecosystems</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$25B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">OTA Updates</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$14.5B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* OEM Revenue Streams */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[0] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>OEM Revenue Streams</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Function-on-Demand</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$70B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Subscription Services</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$55B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Vehicle Lifecycle Software</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$35B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* E/E Architecture */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[0] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>E/E Architecture</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Zonal Controllers</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$18B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">High-Performance Compute</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$32B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Automotive Ethernet</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$9.5B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Development Tools */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[0] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>Development Tools</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Digital Twins</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$14.5B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">DevOps/CI/CD</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$8.7B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full   mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                                    <span className="font-medium">Simulation Platforms</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$12B by 2030</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Digital Transformation & AI Integration */}
            <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center p-4" style={{ backgroundColor: COLORS[3] }}>
                    <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white font-bold mr-3">3</div>
                    <h2 className="text-xl font-semibold text-white">Digital Transformation & AI Integration</h2>
                    <span className="ml-auto text-sm text-white font-medium">Market Potential: $32.4B by 2030 (40% CAGR)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    {/* AI Applications */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-purple-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>AI Applications</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Computer Vision</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$15.9B by 2027</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">In-Cabin Monitoring</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$8.7B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Predictive Maintenance</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$18.8B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Smart Manufacturing */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-purple-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Smart Manufacturing</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Industrial IoT</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$45B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Digital Twins in Production</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$13.2B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Robotics & Automation</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$37.8B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Customer Experience */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-purple-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Customer Experience</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Digital Retail</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$18.5B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Voice Assistants</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$8.9B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Personalization Engines</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$7.7B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Digital Enterprise */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-purple-500 text-white p-3 font-semibold flex items-center justify-between">
                            <span>Digital Enterprise</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Data Analytics Platforms</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$12.5B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Cybersecurity Solutions</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$9.8B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span className="font-medium">Cloud Services</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$25.7B by 2030</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sustainability & Circular Economy */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center p-4" style={{ backgroundColor: COLORS[4] }}>
                    <div style={{ backgroundColor: COLORS[3] }} className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-3">4</div>
                    <h2 className="text-xl font-semibold text-white">Sustainability & Circular Economy</h2>
                    <span className="ml-auto text-sm text-white font-medium">Market Potential: $900B by 2030</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    {/* Sustainable Materials */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[3] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>Sustainable Materials</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Bio-based Materials</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$35B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Lightweight Materials</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$126B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Recycled Content</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$58B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Powertrains */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[3] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>Alternative Powertrains</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Hydrogen Fuel Cells</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$140B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Solid-State Batteries</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$87B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Synthetic Fuels</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$45B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Circular Value Chain */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[3] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>Circular Value Chain</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Battery Recycling</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$24B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Remanufacturing</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$75B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">End-of-Life Vehicle Solutions</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$55B by 2030</div>
                            </div>
                        </div>
                    </div>

                    {/* Carbon Neutrality */}
                    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                        <div style={{ backgroundColor: COLORS[3] }} className="text-white p-3 font-semibold flex items-center justify-between">
                            <span>Carbon Neutrality</span>
                            <div className="flex gap-2">
                                <a href="/pdfs/placeholder.pdf" download title="Download PDF">
                                    <Download className="w-4 h-4 hover:opacity-80" />
                                </a>
                                <a href="/pdfs/placeholder.pdf" target="_blank" rel="noopener noreferrer" title="View PDF">
                                    <Expand className="w-4 h-4 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Green Manufacturing</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$95B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Carbon Capture</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$40B by 2030</div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                                    <span className="font-medium">Renewable Energy Integration</span>
                                </div>
                                <div className="text-sm text-gray-700 ml-5">$120B by 2030</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
