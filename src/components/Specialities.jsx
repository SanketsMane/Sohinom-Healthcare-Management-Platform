import { 
  Code, 
  FileText, 
  AlertTriangle, 
  CreditCard, 
  Shield, 
  Award,
  Stethoscope,
  Heart,
  Brain,
  Eye
} from 'lucide-react';

const Specialities = () => {
  const specialities = [
    {
      title: "Medical Coding",
      description: "Accurate ICD-10, CPT, and HCPCS coding services ensuring maximum reimbursement and compliance",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Claims Processing",
      description: "Efficient electronic claims submission and follow-up to reduce denial rates and accelerate payments",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Denial Management",
      description: "Proactive denial prevention and comprehensive appeals management to maximize revenue recovery",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "AR Management",
      description: "Comprehensive accounts receivable management with aging analysis and collection strategies",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Prior Authorization",
      description: "Streamlined prior authorization processes to reduce delays and ensure treatment approvals",
      icon: Shield,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Credentialing",
      description: "Provider enrollment and credentialing services with insurance networks and government programs",
      icon: Award,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const medicalSpecialties = [
    {
      name: "Cardiology",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Neurology",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Ophthalmology",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "General Practice",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="specialities" className="section-padding bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Specialities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare revenue cycle management services designed to optimize your practice's financial performance
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialities.map((speciality, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={speciality.image}
                  alt={speciality.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <div className={`${speciality.bgColor} rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <speciality.icon className={`w-6 h-6 ${speciality.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {speciality.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {speciality.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Medical Specialties We Serve */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Medical Specialties We Serve
            </h3>
            <p className="text-lg text-gray-600">
              We provide specialized billing services across various medical disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalSpecialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center mb-3">
                  <specialty.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {specialty.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to optimize your revenue cycle?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Let our experienced team help you reduce denials, increase collections, and streamline your billing operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn-primary">
                    Get Free Consultation
                  </button>
                  <button className="btn-secondary">
                    View Our Services
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Healthcare Professional Working"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
