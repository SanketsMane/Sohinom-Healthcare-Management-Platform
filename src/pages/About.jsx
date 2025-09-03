const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              About Sohin Om Healthcare Management Services
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Your trusted partner in healthcare revenue cycle management and medical billing excellence
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-secondary-700">
                <p>
                  <strong className="text-blue-600">Sohin Om Healthcare Management Services</strong> was founded with a 
                  clear mission: to revolutionize healthcare revenue cycle management by providing comprehensive, 
                  reliable, and HIPAA-compliant medical billing solutions.
                </p>
                <p>
                  Based in the heart of Bangalore, India's technology hub, we combine local expertise with 
                  international healthcare standards to deliver exceptional service to healthcare providers 
                  across various specialties.
                </p>
                <p>
                  Our team of certified medical billing professionals brings years of experience in healthcare 
                  administration, ensuring that every claim is processed accurately and efficiently to maximize 
                  your revenue potential.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-secondary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Our Mission</h3>
              <p className="text-lg text-secondary-700 mb-6">
                To empower healthcare providers by eliminating administrative burdens, reducing claim denials, 
                and maximizing revenue through innovative billing solutions and exceptional customer service.
              </p>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Our Vision</h3>
              <p className="text-lg text-secondary-700">
                To be the leading healthcare management services provider, known for our integrity, innovation, 
                and commitment to helping healthcare providers focus on what they do best - providing quality 
                patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our operations and client relationships.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We strive for perfection in every aspect of our service delivery and client satisfaction.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "We continuously adapt and improve our processes using the latest technology and best practices.",
                icon: "💡"
              },
              {
                title: "Compliance",
                description: "We strictly adhere to HIPAA regulations and healthcare industry standards.",
                icon: "🔒"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Our certified professionals have extensive experience in medical billing and revenue cycle management.",
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Technology Driven",
                description: "We use advanced billing software and automation tools to ensure accuracy and efficiency.",
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is available round-the-clock to address your queries and concerns.",
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
