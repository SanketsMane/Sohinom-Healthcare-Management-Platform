const Services = () => {
  const services = [
    {
      title: "Medical Billing",
      description: "Comprehensive medical billing services including claim submission, payment posting, and follow-up.",
      features: [
        "Accurate claim preparation and submission",
        "Electronic and paper claim processing",
        "Payment posting and reconciliation",
        "Denial management and appeals",
        "Patient billing and collections"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Revenue Cycle Management",
      description: "End-to-end revenue cycle management to optimize your healthcare organization's financial performance.",
      features: [
        "Patient registration and eligibility verification",
        "Prior authorization management",
        "Charge capture and coding",
        "Claims processing and follow-up",
        "Financial reporting and analytics"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Medical Coding",
      description: "Professional medical coding services ensuring accurate ICD-10, CPT, and HCPCS code assignment.",
      features: [
        "ICD-10-CM diagnosis coding",
        "CPT procedure coding",
        "HCPCS Level II coding",
        "DRG assignment",
        "Coding audits and compliance"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Claims Management",
      description: "Efficient claims processing and management to reduce denials and accelerate reimbursements.",
      features: [
        "Claims scrubbing and validation",
        "Electronic claims submission",
        "Real-time eligibility verification",
        "Prior authorization tracking",
        "Claims status monitoring"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Denial Management",
      description: "Comprehensive denial management and appeals process to recover lost revenue.",
      features: [
        "Denial analysis and categorization",
        "Root cause identification",
        "Appeals preparation and submission",
        "Denial trend reporting",
        "Process improvement recommendations"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Accounts Receivable Management",
      description: "Proactive AR management to optimize cash flow and reduce outstanding balances.",
      features: [
        "AR aging analysis",
        "Insurance follow-up",
        "Patient collections",
        "Payment plan setup",
        "Bad debt management"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Comprehensive healthcare management solutions designed to optimize your revenue cycle and reduce administrative burden
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-secondary-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-secondary-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  Key Features:
                </h4>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our comprehensive healthcare management services can help your practice or facility maximize revenue and reduce administrative costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Get Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
