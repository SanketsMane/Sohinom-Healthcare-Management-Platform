const Careers = () => {
  const openPositions = [
    {
      title: "Medical Billing Specialist",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our team as a Medical Billing Specialist to manage end-to-end billing processes for healthcare providers.",
      requirements: [
        "Bachelor's degree in Healthcare Administration or related field",
        "2+ years of medical billing experience",
        "Knowledge of ICD-10, CPT, and HCPCS coding",
        "Experience with EMR/EHR systems",
        "Strong attention to detail and analytical skills"
      ]
    },
    {
      title: "Revenue Cycle Analyst",
      department: "Analytics",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Analyze revenue cycle performance and identify opportunities for process improvements and revenue optimization.",
      requirements: [
        "Master's degree in Healthcare Management or Business Analytics",
        "3+ years of revenue cycle analysis experience",
        "Proficiency in data analysis tools (Excel, SQL, Tableau)",
        "Understanding of healthcare reimbursement models",
        "Strong communication and presentation skills"
      ]
    },
    {
      title: "Medical Coder (Remote)",
      department: "Coding",
      location: "Remote",
      type: "Part-time/Full-time",
      experience: "1-3 years",
      description: "Work remotely as a certified medical coder to ensure accurate coding of medical procedures and diagnoses.",
      requirements: [
        "CPC or CCS certification required",
        "1+ years of medical coding experience",
        "Proficiency in ICD-10-CM, CPT, and HCPCS",
        "Ability to work independently in a remote environment",
        "High-speed internet and dedicated workspace"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance-based bonuses",
      icon: "💰"
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: "🏥"
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and certification support",
      icon: "📚"
    },
    {
      title: "Flexible Work",
      description: "Hybrid and remote work options available",
      icon: "🏠"
    },
    {
      title: "Career Growth",
      description: "Clear career advancement paths and mentorship programs",
      icon: "📈"
    },
    {
      title: "Work-Life Balance",
      description: "Generous PTO and flexible scheduling options",
      icon: "⚖️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Build your career with a leading healthcare management services company committed to excellence and innovation
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Work With Us?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Current Openings
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                    Apply Now
                  </button>
                </div>

                <p className="text-secondary-700 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  Requirements:
                </h4>

                <ul className="space-y-2">
                  {position.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Application Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Submit your application through our online portal with your resume and cover letter."
              },
              {
                step: "2",
                title: "Initial Screening",
                description: "Our HR team will review your application and contact qualified candidates within 5 business days."
              },
              {
                step: "3",
                title: "Interviews",
                description: "Participate in technical and cultural fit interviews with our hiring team and department managers."
              },
              {
                step: "4",
                title: "Onboarding",
                description: "Join our comprehensive onboarding program and start your exciting career journey with us."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? Send us your resume anyway! We're always looking for talented individuals to join our growing team.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
