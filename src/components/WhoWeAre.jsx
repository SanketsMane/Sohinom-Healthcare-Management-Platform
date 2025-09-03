import { Shield, DollarSign, Award, MapPin, Users, Stethoscope } from 'lucide-react';

const WhoWeAre = () => {
  const features = [
    {
      title: "HIPAA Compliance",
      description: "Strict adherence to HIPAA regulations and healthcare data security standards",
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "Revenue Cycle Management",
      description: "Comprehensive RCM services to maximize your healthcare revenue potential",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "International Standards",
      description: "Following best practices and recommended guidelines from US Healthcare ecosystem",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Local Presence",
      description: "Based in Bangalore with deep understanding of Indian healthcare landscape",
      icon: MapPin,
      color: "text-orange-600"
    }
  ];

  const teamImages = [
    {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Healthcare Professional"
    },
    {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Medical Doctor"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Healthcare Team"
    },
    {
      src: "https://images.unsplash.com/photo-1594824618168-18bfe5a85f0c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Medical Professional"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Who we are?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-blue-600">Sohin Om Healthcare Management Services</strong> is a specialized 
              service provider focusing specifically on Healthcare Process Outsourcing Services. Our primary 
              service lines include comprehensive Medical Billing and Revenue Cycle Management (RCM) services.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Based in Bangalore, India, we bring together local expertise with international healthcare 
              standards. We follow strict guidelines and recommended practices as defined by various 
              agencies in the healthcare ecosystem and maintain full HIPAA compliance.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our commitment to excellence, combined with our deep understanding of healthcare billing 
              complexities, makes us the ideal partner for healthcare providers looking to optimize 
              their revenue cycle and reduce administrative costs.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">500+ Clients Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">10+ Years Experience</span>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Team Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-300 group"
            >
              <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Healthcare Excellence Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excellence in Healthcare Management
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of healthcare professionals and billing experts work tirelessly to ensure 
                your practice runs smoothly and efficiently. We understand the complexities of 
                healthcare billing and are committed to maximizing your revenue while maintaining 
                the highest standards of patient care.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600">
                  HIPAA Certified
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600">
                  ISO 27001
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600">
                  Healthcare Experts
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Healthcare Excellence"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
