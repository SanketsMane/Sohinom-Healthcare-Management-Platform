const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Get in touch with our healthcare management experts to discuss your billing and revenue cycle needs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-secondary-700 mb-2">
                    Organization/Practice Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Service Information</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Please describe your needs or questions in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>

                <p className="text-sm text-secondary-600">
                  * Required fields. We'll respond to your inquiry within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Office Address</h3>
                    <p className="text-secondary-700 leading-relaxed">
                      Sohin Om Healthcare Management Services<br />
                      1681 6th Main Road, RPC Layout<br />
                      Vijayanagar, Bangalore 560104<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Phone</h3>
                    <p className="text-secondary-700">+91-XXXXX-XXXXX</p>
                    <p className="text-sm text-secondary-600">(Contact details to be updated)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Email</h3>
                    <p className="text-secondary-700">info@sohinomhealthcare.com</p>
                    <p className="text-sm text-secondary-600">(Email to be configured)</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Business Hours</h3>
                    <div className="text-secondary-700 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 9:00 AM - 1:00 PM IST</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-secondary-600 mt-2">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Find Us</h3>
                <div className="bg-secondary-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-secondary-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-secondary-600">Interactive map will be available soon</p>
                    <p className="text-sm text-secondary-500 mt-2">Vijayanagar, Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can help optimize your healthcare revenue cycle.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
