
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Check, Mail, MapPin, Phone, X, Send } from 'lucide-react';
import { AppContext } from '@/context/AppNotify';
import { contactUsApi, contactUsTypes } from '@/Api';
import { useEffect } from 'react';





const PricingAndContactPage = () => {
    const { showToast } = AppContext();
     const navigate = useNavigate();
      const location = useLocation();
   
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<contactUsTypes>();
   
     const { mutate: apiMutate, isLoading } = useMutation(contactUsApi, {
       onSuccess: () => {
         showToast({ message: "Message sent successfully!", type: "SUCCESS" });
         navigate("/");
       },
       onError: (error: Error) => {
         showToast({ message: error.message, type: "ERROR" });
       },
     });
   
     const onSubmits = handleSubmit((data) => apiMutate(data));
      useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1); // "contact-form"
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]); 

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
            features: [],
            isPopular: false,
            isComingSoon: true,
        }
    ];

    return (
        <main className="bg-gray-50 ">
            {/* --- Pricing Section --- */}
            <section className="w-full bg-gray-50 text-gray-900 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className=" -mt-6  text-lg md:text-5xl font-bold tracking-tight text-black">
                            Find the Perfect Plan for You
                        </h2>
                        <p className="  text-xs md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Transparent pricing for projects of all sizes. Let's build something amazing together.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`relative border rounded-2xl p-8 flex flex-col h-full ${ plan.isPopular ? 'border-blue-500 shadow-xl' : 'border-gray-200 shadow-md' } ${ plan.isComingSoon ? 'bg-gray-100' : 'bg-white'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                               {/* Plan content remains the same */}
                               <div className="flex-grow flex flex-col">
                                    {plan.isPopular && (
                                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                            <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>
                                        </div>
                                    )}
                                    <h3 className="text-lg text-blue-600 underline tracking-wide md:text-2xl lg:text-2xl font-extrabold">{plan.name}</h3>
                                    <p className="mt-1 text-sm md:text-lg lg:text-lg text-gray-500 min-h-[40px]">{plan.description}</p>
                                    <div className="mt-0 md:mt-3">
                                        <span className={`text-lg md:text-4xl font-bold ${plan.isComingSoon ? 'text-gray-400' : 'text-black'}`}>{plan.price}</span>
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
                                                    <li key={fIndex} className="flex items-center text-sm tracking-tight -mt-8 md:text-lg md:mt-3">
                                                        {feature.included ? (
                                                            <Check className="h-5 w-5 text-blue-500 mr-1 md:mr-3 flex-shrink-0" />
                                                        ) : (
                                                            <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                                        )}
                                                        <span className={`${feature.included ? 'text-gray-800 ' : 'text-gray-500 line-through'}`}>{feature.text}</span>
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
                                            <Link to="#contact-form" className={`block w-full text-center font-semibold py-3 rounded-lg transition-colors ${ plan.isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-400 text-white hover:bg-blue-500'}`}>
                                                Get Started
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section id="contact-form" className="w-full bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                         <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Let's Start a Project</h2>
                         <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Have a question or a project in mind? Fill out the form below and we'll get back to you.</p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
                       
                        {/* Contact Form */}
                        <motion.div 
                            className="w-full lg:w-2/3"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <form onSubmit={onSubmits} className="bg-gray-100 p-8 rounded-2xl space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                                        <input type="text" {...register("name", { required: "Full name is required" })} className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe" />
                                        {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                                        <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})} className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com"/>
                                        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                                        <input type="tel" {...register("phoneNumber", { required: "Phone number is required" })} className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="+92 300 1234567" />
                                        {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
                                    </div>
                                     <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Interested In</label>
                                        <select {...register("interestedIn", { required: "Please select an option" })} className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                            <option value="">Select a service...</option>
                                            <option value="Basic Plan">Basic Plan</option>
                                            <option value="Standard Plan">Standard Plan</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile App">Mobile App</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.interestedIn && <span className="text-red-500 text-xs mt-1">{errors.interestedIn.message}</span>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
                                    <textarea {...register("message", { required: "Message is required" })} rows={5} className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" placeholder="Tell us about your project..."/>
                                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                                </div>
                                <div>
                                    <button type="submit" disabled={isLoading} className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        <Send className="h-5 w-5 mr-2" />
                                        {isLoading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                         {/* Contact Info */}
                        <motion.div 
                            className="w-full lg:w-1/3"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gray-100 p-8 rounded-2xl h-full">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Our Office</h4>
                                            <p className="text-gray-600">Bank Square Plaza,F-11 Markaz,Islamabad, Pakistan</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Email Us</h4>
                                            <p className="text-gray-600">mzainmumtaz99@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">📞Call Us</h4>
                                            <p className="text-gray-600">+92-3246288217</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default PricingAndContactPage;
