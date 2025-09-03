import HowWeWork from '../components/HowWeWork';

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              How We Work
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Our proven methodology ensures a smooth transition and exceptional results for your healthcare billing needs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* How We Work Component */}
      <HowWeWork />

      {/* Detailed Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Detailed Implementation Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: Discovery & Assessment",
                duration: "Week 1-2",
                activities: [
                  "Comprehensive analysis of current billing processes",
                  "Technology infrastructure assessment",
                  "Staff workflow evaluation",
                  "Identification of pain points and opportunities",
                  "Custom solution design"
                ],
                color: "blue"
              },
              {
                phase: "Phase 2: Planning & Agreement",
                duration: "Week 3",
                activities: [
                  "Service level agreement finalization",
                  "Pricing structure confirmation",
                  "Implementation timeline development",
                  "Resource allocation planning",
                  "Risk assessment and mitigation strategies"
                ],
                color: "green"
              },
              {
                phase: "Phase 3: Transition & Implementation",
                duration: "Week 4-6",
                activities: [
                  "Data migration and system integration",
                  "Staff training and knowledge transfer",
                  "Workflow optimization",
                  "Quality assurance testing",
                  "Go-live preparation and execution"
                ],
                color: "purple"
              },
              {
                phase: "Phase 4: Optimization & Support",
                duration: "Ongoing",
                activities: [
                  "Performance monitoring and reporting",
                  "Continuous process improvement",
                  "Regular quality audits",
                  "24/7 customer support",
                  "Strategic consultations and reviews"
                ],
                color: "orange"
              }
            ].map((phase, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className={`bg-${phase.color}-100 rounded-xl p-6 text-center`}>
                    <h3 className={`text-xl font-bold text-${phase.color}-800 mb-2`}>
                      {phase.phase}
                    </h3>
                    <p className={`text-${phase.color}-600 font-medium`}>
                      {phase.duration}
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <svg className={`w-5 h-5 text-${phase.color}-600 mt-1 mr-3 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              We measure our success by your success
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "95%+", description: "First Pass Claim Acceptance Rate" },
              { metric: "30%", description: "Average Reduction in A/R Days" },
              { metric: "15%+", description: "Increase in Net Revenue" },
              { metric: "24/7", description: "Customer Support Availability" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.metric}
                </div>
                <p className="text-secondary-700 font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;
