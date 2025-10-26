import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Mobile App Development',
    'Flutter Development',
    'Web Development',
    'MERN Stack Development',
    'PHP Development',
    'UI/UX Design',
    'Blockchain Development',
    'Technical Consulting'
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400" />,
      text: "ashiqkbk10@gmail.com",
      link: "mailto:ashiqkbk10@gmail.com"
    },
    {
      icon: <FaPhone className="text-green-400" />,
      text: "+91 9148097564",
      link: "tel:+919148097564"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400" />,
      text: "Puttur, Karnataka, India",
      link: null
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Mohammad Ashik</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Passionate Mobile App Developer with expertise in Flutter, REST APIs, and Firebase. 
              Building high-quality, scalable applications with a focus on performance and user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mohammad-ashik-20422618b"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ashikbright"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:ashiqkbk10@gmail.com"
                className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{info.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="text-md font-medium mb-2 text-blue-400">Current Status</h5>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>© {currentYear} Mohammad Ashik.</span>
              
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>Mobile App Developer | Full Stack Engineer</span>
            </div>
          </div>

          <div className="mt-4 text-center text-white-500 text-xs">
            <p>
              Specialized in Flutter, MERN Stack, PHP/MySQL | 
              Based in Mangalore, Karnataka | 
              Open to remote opportunities worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
