import { 
  Building2, 
  UserCheck, 
  Stethoscope, 
  TrendingUp, 
  Shield, 
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Award
} from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatWeDo = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [counters, setCounters] = useState({
    revenue: 0,
    accuracy: 0,
    clients: 0
  });

  // Counter animation effect
  useEffect(() => {
    const targets = { revenue: 25, accuracy: 99, clients: 500 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      revenue: targets.revenue / steps,
      accuracy: targets.accuracy / steps,
      clients: targets.clients / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounters(prev => ({
          revenue: Math.min(Math.floor(prev.revenue + increment.revenue), targets.revenue),
          accuracy: Math.min(Math.floor(prev.accuracy + increment.accuracy), targets.accuracy),
          clients: Math.min(Math.floor(prev.clients + increment.clients), targets.clients)
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Hospitals / Facilities",
      description: "Comprehensive billing solutions for large healthcare facilities with advanced reporting and analytics",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradientColor: "from-blue-500 to-blue-600",
      features: ["Multi-location support", "Advanced analytics", "24/7 monitoring", "Scalable solutions"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Medical Billers",
      description: "Professional support and enhancement for existing billing operations with proven methodologies",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradientColor: "from-green-500 to-green-600",
      features: ["Process optimization", "Training programs", "Quality assurance", "Best practices"],
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Individual Providers / Practices",
      description: "Tailored billing solutions for independent healthcare providers with personalized attention",
      icon: Stethoscope,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradientColor: "from-purple-500 to-purple-600",
      features: ["Custom workflows", "Direct support", "Flexible pricing", "Personal touch"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Increase revenue up to",
      stat: `${counters.revenue}%`,
      color: "text-green-600",
      bgColor: "from-green-100 to-green-200"
    },
    {
      icon: Target,
      title: "Claims Accuracy",
      description: "Processing accuracy rate",
      stat: `${counters.accuracy}%`,
      color: "text-blue-600",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      icon: Award,
      title: "Trusted Partners",
      description: "Healthcare providers served",
      stat: `${counters.clients}+`,
      color: "text-purple-600",
      bgColor: "from-purple-100 to-purple-200"
    }
  ];

  const processSteps = [
    {
      title: "Assessment",
      description: "Comprehensive analysis of your current billing processes",
      icon: Target,
      color: "bg-blue-500"
    },
    {
      title: "Implementation", 
      description: "Seamless integration with your existing systems",
      icon: Zap,
      color: "bg-green-500"
    },
    {
      title: "Optimization",
      description: "Continuous improvement and performance monitoring", 
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "Support",
      description: "Ongoing support and maintenance services",
      icon: Shield,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What we do?
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive medical billing services and revenue cycle management solutions 
            designed to streamline your healthcare operations and maximize profitability.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-16"></div>
        </div>

        {/* Enhanced Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our current customer focus is on:
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  activeCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Enhanced Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className={`absolute top-4 left-4 p-3 bg-gradient-to-br ${service.gradientColor} text-white rounded-xl shadow-lg`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 ${service.color} mr-3 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className={`inline-flex items-center ${service.color} hover:${service.color.replace('text', 'text').replace('600', '700')} font-semibold group-hover:translate-x-2 transition-all duration-300`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Benefits Section with Animated Counters */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Our Services?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${benefit.bgColor} rounded-2xl p-8 text-center group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="bg-white rounded-full p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <div className={`text-4xl font-bold ${benefit.color} mb-3 font-mono`}>
                  {benefit.stat}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Proven Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 z-10"></div>
                )}
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-20 group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.color} text-white rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Coverage Area */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-white mr-3" />
            <h3 className="text-3xl font-bold">Our Service Coverage</h3>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8">
            We currently service healthcare providers across India with our Bangalore headquarters, 
            offering comprehensive medical billing and revenue cycle management solutions 
            tailored to Indian healthcare standards and international best practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-medium shadow-lg hover:bg-white/30 transition-colors duration-300">
              India-wide Coverage
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-medium shadow-lg hover:bg-white/30 transition-colors duration-300">
              Bangalore HQ
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-medium shadow-lg hover:bg-white/30 transition-colors duration-300">
              International Standards
            </span>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
