import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Shield, MessageCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: CheckCircle, text: "24/7 Healthcare Support" },
    { icon: Shield, text: "HIPAA Compliant Solutions" },
    { icon: Award, text: "Industry Leading Expertise" },
    { icon: Users, text: "Dedicated Healthcare Teams" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                #1 Healthcare Management Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Professional{' '}
                <span className="text-slate-600">Medical Billing</span> Partner
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                We help reduce your denials and maximize your revenue with expert 
                healthcare process outsourcing focused on speed and reliability.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <feature.icon className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="https://wa.me/919740272509?text=Hello, I'm interested in your healthcare management services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Professional Doctor"
                className="w-full h-80 object-cover rounded-xl"
                loading="eager"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-600">500+</div>
                    <div className="text-xs text-gray-600">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-600">99%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
