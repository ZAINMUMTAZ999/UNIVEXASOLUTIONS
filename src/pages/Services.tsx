import  { useState, useEffect } from 'react';
import {  Code, Palette, Zap,  Award, CheckCircle,  Globe, Search, Shield, Smartphone, Database,  Wrench, TrendingUp, BarChart3 } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored solutions built with modern technologies like React, Node.js, and Python to meet your unique business requirements.",
      features: ["React & Vue.js", "Node.js Backend", "API Development", "Database Design"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Intuitive and aesthetically pleasing designs that enhance user experience and drive conversions.",
      features: ["Wireframing", "Prototyping", "Visual Design", "User Testing"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment processing and inventory management systems.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Admin Dashboard"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your website's visibility and organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"]
    },
    // {
    //   icon: <Cloud className="w-8 h-8" />,
    //   title: "Cloud Services",
    //   description: "Scalable cloud infrastructure setup and management for reliable, high-performance applications.",
    //   features: ["AWS/Azure Setup", "DevOps Pipeline", "Auto Scaling", "Monitoring"]
    // }
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed and user experience."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Implementation",
      description: "Robust security measures to protect your data and users."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Efficient database design and optimization for better performance."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and technical support for your applications."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to track performance and make informed decisions."
    }
  ];



  return (
  <div className="min-h-screen bg-white">
      {/* Main Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Web Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom web applications to mobile apps and e-commerce platforms, 
              we deliver cutting-edge solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Additional Services & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to ensure your digital success across all touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  

    </div>
  );
};

export default Services;