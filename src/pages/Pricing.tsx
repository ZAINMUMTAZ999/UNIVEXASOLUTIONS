
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react'; // Using lucide-react for icons
import { Link } from 'react-router-dom';

// Main Pricing Section Component
const Pricing = () => {
    // Data for the pricing plans. This makes it easy to manage and update.
    const pricingPlans = [
        {
            name: "Basic",
            price: "PKR 50k - 70k",
            description: "Ideal for personal projects or small businesses needing a professional online presence.",
            features: [
                { text: "4 to 5 Pages", included: true },
                { text: "Responsive on all devices", included: true },
                     { text: "Free Maintenance 24/7", included: true },
                { text: "User Authentication", included: true },
                { text: "Revisions", included: false },
                { text: "Source Code", included: false },
                { text: "Custom Domain", included: false },
                { text: "Admin Panel", included: false },
                { text: "Role-Based Access", included: false },
                { text: "Charts & Dashboards", included: false },
            ],
            isPopular: false,
        },
        {
            name: "Standard",
            price: "PKR 80k - 250k",
            description: "Perfect for growing businesses that require more functionality and control.",
            features: [
                { text: "6 to 8 Pages", included: true },
                { text: "Responsive on all devices", included: true },
                { text: "Free Maintenance 24/7", included: true },
                { text: "User Authentication", included: true },
                { text: "Role-Based Access", included: true },
                { text: "Admin Panel", included: true },
                { text: "2+ Custom Dashboards", included: true },
                { text: "Interactive Charts", included: true },
                { text: "Custom Domain Setup", included: true },
                { text: "Full Source Code", included: true },
                { text: "Revisions", included: true },
            ],
            isPopular: true,
        },
        {
            name: "Premium",
            price: "Coming Soon",
            description: "Advanced, enterprise-level solutions. Get in touch for a custom consultation.",
            features: [], // No features listed for the "Coming Soon" plan
            isPopular: false,
            isComingSoon: true,
        }
    ];

    return (
        <section className="w-full bg-white text-gray-900  text-sm ">
            <div className="container  mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold -tracking-tighter text-black">
                        Find the Perfect Plan for You
                    </h2>
                    <p className="mt-3 text-sm md:text-sm text-gray-600 max-w-2xl mx-auto">
                        Transparent pricing for projects of all sizes. Let's build something amazing together.
                    </p>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto  items-start">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative border rounded-2xl p-8 flex flex-col h-full ${
                                plan.isPopular ? 'border-blue-500 border-2' : 'border-gray-200'
                            } ${plan.isComingSoon ? 'bg-gray-50' : 'bg-white'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>
                                </div>
                            )}

                            <h3 className="text-2xl font-semibold">{plan.name}</h3>
                            <p className="mt-1 text-gray-500">{plan.description}</p>
                            
                            <div className="mt-6">
                                <span className={`text-4xl font-bold ${plan.isComingSoon ? 'text-gray-400' : 'text-black'}`}>{plan.price}</span>
                            </div>

                            <div className="flex-grow">
                                {plan.isComingSoon ? (
                                    <div className="flex flex-col items-center justify-center h-full my-8">
                                         <p className="text-2xl font-bold text-gray-800">Coming Soon!</p>
                                         <p className="text-gray-500 mt-2">Exciting new features are on the way.</p>
                                    </div>
                                ) : (
                                    <ul className="mt-8 space-y-4">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center">
                                                {feature.included ? (
                                                    <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                                                ) : (
                                                    <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                                )}
                                                <span className={`${feature.included ? 'text-gray-800' : 'text-gray-500 line-through'}`}>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            
                           <div className="mt-8">
                                {plan.isComingSoon ? (
                                     <div className="w-full text-center font-semibold py-3 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed">
                                        Stay Tuned
                                     </div>
                                ) : (
                                    <Link
                                        to="/contactUs"
                                        className={`block w-full text-center font-semibold py-3 rounded-lg transition-colors ${
                                            plan.isPopular
                                                ? 'bg-blue-500 text-white hover:bg-blue-600'
                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                    >
                                        Get Started
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
