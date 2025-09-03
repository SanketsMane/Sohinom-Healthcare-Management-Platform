import Specialities from '../components/Specialities';

const SpecialitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Our Specialities
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              We provide specialized medical billing and revenue cycle management services across various healthcare disciplines
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Specialities Component */}
      <Specialities />

      {/* Additional Benefits Section */}
      <section className="section-padding bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Our Specialized Services?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Specialty Expertise",
                description: "Our team includes certified professionals with deep knowledge of specialty-specific coding and billing requirements.",
                icon: "🎯"
              },
              {
                title: "Compliance Assurance",
                description: "We stay current with specialty-specific regulations, guidelines, and payer requirements to ensure full compliance.",
                icon: "✅"
              },
              {
                title: "Maximized Revenue",
                description: "Our specialty focus helps identify and capture revenue opportunities specific to your medical practice.",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Specialized Billing Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our specialty-focused approach ensures that your practice receives the most accurate and efficient billing services tailored to your specific medical field.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Discuss Your Specialty Needs
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpecialitiesPage;
