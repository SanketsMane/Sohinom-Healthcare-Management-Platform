import { ClipboardList, FileCheck, Settings, Users, ArrowRight } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We start with a comprehensive assessment of your billing needs, current environment, and operational scale to understand your unique requirements.",
      icon: ClipboardList,
      color: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      number: "02",
      title: "Service Agreement",
      description: "We mutually agree and finalize on a service contract and terms that align with your specific healthcare billing requirements and business objectives.",
      icon: FileCheck,
      color: "bg-green-600",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      number: "03",
      title: "Transition & Setup",
      description: "We implement our proven execution model, beginning with a smooth transition process to ensure minimal disruption to your ongoing operations.",
      icon: Settings,
      color: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="how-we-work" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How we work?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven three-step process ensures a seamless transition to enhanced healthcare billing operations
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line - Hidden on mobile, visible on large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-full w-full h-0.5 bg-blue-300 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden group">
                {/* Step Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
                      {step.number}
                    </div>
                    <div className="text-blue-600">
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Excellence Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Expert Team at Work
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our dedicated healthcare billing professionals work around the clock to ensure your 
                revenue cycle operates at peak efficiency. With years of experience and continuous 
                training, our team stays updated with the latest healthcare regulations and billing practices.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">98.5%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Healthcare Team Working"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to streamline your healthcare billing?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Let's discuss how our proven process can benefit your practice
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
