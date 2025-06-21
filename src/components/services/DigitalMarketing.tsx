import React from 'react';
import { motion } from 'framer-motion';
import { 
    Megaphone,      // Icon for Brand Promotion
    Hash,           // Icon for X Trends
    CalendarDays,   // Icon for Event Management
    Share2,         // Icon for Social Media
    BrainCircuit,   // Icon for Strategy
    Users,          // Icon for Engagement
    BarChart3       // Icon for Analytics
} from 'lucide-react';

// Define a type for a single service/feature object
interface ServiceFeature {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const DigitalMarketing: React.FC = () => {
    // Array of features for the digital marketing services section
    const features: ServiceFeature[] = [
        { 
            name: 'Brand Promotion', 
            description: 'Elevate your brand\'s visibility and recognition with targeted campaigns that resonate with your audience.',
            icon: <Megaphone size={32} className="text-purple-400" /> 
        },
        { 
            name: 'Social Media Marketing', 
            description: 'Engage your community and drive growth with strategic content across all major social platforms.',
            icon: <Share2 size={32} className="text-purple-400" /> 
        },
        { 
            name: 'X (Twitter) Trends', 
            description: 'Capitalize on real-time conversations and trending topics to boost your brand\'s relevance and reach.',
            icon: <Hash size={32} className="text-purple-400" /> 
        },
        { 
            name: 'Event Management', 
            description: 'From virtual conferences to product launches, we manage and promote events that make an impact.',
            icon: <CalendarDays size={32} className="text-purple-400" /> 
        },
    ];
    
    // Animation variants for container elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    // Animation variants for item elements
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
        },
    };
    
    // --- Image URL ---
    const heroImageUrl = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop';
    
    return (
        <div className="w-full bg-gray-900">
            {/* --- Hero Section --- */}
            <div 
                className="relative w-full text-center px-4 py-20 md:py-28 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative z-10">
                    <motion.span 
                        className="text-base sm:text-lg text-purple-400 font-semibold tracking-wide"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Data-Driven Digital Marketing
                    </motion.span>
                    <motion.p 
                        className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Amplify Your Reach, Engage Your Audience
                    </motion.p>
                </div>
            </div>

            {/* --- Core Services Section --- */}
            <div className="w-full flex flex-col items-center text-center py-16 sm:py-20 px-4 bg-gray-900">
                <motion.h3 
                    className="font-bold text-2xl sm:text-3xl text-white mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Our Marketing Services
                </motion.h3>
                <motion.p 
                    className="mb-12 text-sm tracking-wider text-gray-400 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    We offer a full spectrum of digital marketing services designed to grow your brand and connect with your customers.
                </motion.p>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature) => (
                        <motion.div 
                            key={feature.name} 
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center flex flex-col items-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, borderColor: '#a78bfa' }} // purple-400
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="p-4 bg-gray-700 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">{feature.name}</h4>
                            <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            {/* --- Our Approach Section --- */}
            <div className="w-full bg-white text-black py-16 sm:py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h3 
                        className="text-2xl sm:text-3xl font-bold mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        A Strategy for Success
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center">
                            <BrainCircuit size={40} className="text-purple-400 mb-3" />
                            <h4 className="text-lg font-semibold">Strategic Planning</h4>
                            <p className="text-gray-400 mt-1">Custom strategies tailored to your unique business goals.</p>
                        </div>
                        {/* Item 2 */}
                        <div className="flex flex-col items-center">
                            <Users size={40} className="text-purple-400 mb-3" />
                            <h4 className="text-lg font-semibold">Audience Engagement</h4>
                            <p className="text-gray-400 mt-1">Creating meaningful content that builds a loyal community.</p>
                        </div>
                        {/* Item 3 */}
                        <div className="flex flex-col items-center">
                            <BarChart3 size={40} className="text-purple-400 mb-3" />
                            <h4 className="text-lg font-semibold">Analytics & Reporting</h4>
                            <p className="text-gray-400 mt-1">Transparent reporting to track progress and optimize ROI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;
