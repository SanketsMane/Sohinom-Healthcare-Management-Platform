import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';
import logo from '../assets/Sohin-removebg-preview.png';

const ContactFooter = () => {
  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Medical Billing',
    'Revenue Cycle Management',
    'Prior Authorization',
    'Claims Processing'
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { Icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { Icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { Icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Healthcare Operations?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Contact us today for a free consultation and see how we can help optimize your revenue cycle.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-blue-100">+91 80-41536750</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-blue-100">info@sohinomhealthcare.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group col-span-2">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-blue-100">1681 6th Main Road, RPC Layout, Vijayanagar, Bangalore 560104</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Get Your Free Consultation</h3>
                <p className="text-gray-600">
                  Discover how our healthcare management solutions can increase your revenue by up to 25%.
                </p>
                <div className="space-y-4">
                  <button className="btn-primary w-full group">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p className="text-sm text-gray-500">No commitment required • 30-minute call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Company Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="Sohin Om Healthcare" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Professional healthcare management services dedicated to maximizing revenue and streamlining operations.
              </p>
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`text-gray-400 ${color} transition-all duration-300 hover:scale-110 transform p-1.5 bg-gray-800 rounded-md hover:bg-gray-700`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Our Services</h4>
              <ul className="space-y-1.5">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-xs">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Contact</h4>
              <div className="space-y-1.5 text-xs">
                <p className="text-gray-400">+91 80-41536750</p>
                <p className="text-gray-400">info@sohinomhealthcare.com</p>
                <p className="text-gray-400">Mon-Fri: 9AM-6PM IST</p>
                <p className="text-gray-400 text-xs">24/7 Support Available</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2024 Sohin Om Healthcare Management Services. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
