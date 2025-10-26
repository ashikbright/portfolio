import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaCloud, 
  FaUsers, 
  FaLightbulb,
  FaGraduationCap,
  FaAward,
  FaHeart,
  FaRocket,
  FaDownload
} from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: '5+', label: 'Years Experience', icon: <FaCode className="text-blue-600" /> },
    { number: '15+', label: 'Projects Completed', icon: <FaRocket className="text-green-600" /> },
    { number: 'MSME', label: 'Registered Company', icon: <FaAward className="text-purple-600" /> },
    { number: '88%', label: 'MCA Grade', icon: <FaGraduationCap className="text-orange-600" /> }
  ];

  const expertise = [
    {
      icon: <FaMobile className="text-3xl text-blue-600" />,
      title: 'Mobile Development',
      description: 'Expert in Flutter framework with extensive experience in cross-platform mobile app development, REST API integration, and Firebase implementation.'
    },
    {
      icon: <FaCode className="text-3xl text-green-600" />,
      title: 'Full Stack Development',
      description: 'Proficient in MERN stack, PHP/MySQL development with hands-on experience in building scalable web applications and backend systems.'
    },
    {
      icon: <FaDatabase className="text-3xl text-purple-600" />,
      title: 'Database Management',
      description: 'Strong expertise in MySQL database design, optimization, and management with experience in complex data relationships and queries.'
    },
    {
      icon: <FaCloud className="text-3xl text-red-600" />,
      title: 'Cloud & APIs',
      description: 'Experience with Firebase, REST APIs, and cloud services integration for real-time applications and scalable solutions.'
    },
    {
      icon: <FaUsers className="text-3xl text-indigo-600" />,
      title: 'Entrepreneurship',
      description: 'Founded and successfully managed Ash Designs, an MSME registered company, demonstrating strong business acumen and client management skills.'
    }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Entrepreneurial Journey',
      description: 'Founded Ash Designs and began freelancing, working on WordPress, Blogger, and Android development projects. Later registered the company under MSME scheme.'
    },
    {
      year: '2022',
      title: 'Academic Excellence',
      description: 'Graduated with BCA degree achieving 92% and started MCA program at St Joseph Engineering College.'
    },
    {
      year: '2023',
      title: 'Industry Exposure',
      description: 'Gained experience through multiple internships in UI/UX, Blockchain, Android development, and Flutter.'
    },
    {
      year: '2024',
      title: 'Professional Growth',
      description: 'Joined Accolade Tech Solutions as Mobile App Developer, working on complex enterprise applications.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer crafting innovative mobile and web solutions with a focus on performance and user experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Story</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg font-medium text-gray-800 mb-3">
                  Hello! I'm <strong className="text-blue-600">Mohammad Ashik</strong>, a passionate Mobile App Developer 
                  from Puttur, Karnataka, with over 5 years of experience in creating innovative digital solutions.
                </p>
                <p>
                  My journey in technology began with a curiosity about how mobile applications work, which led me 
                  to pursue Computer Applications and specialize in mobile development.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Current Role</p>
                    <p>Working at <strong className="text-blue-600">Accolade Tech Solutions</strong> as a Mobile App Developer, specializing in Flutter development, REST APIs, and Firebase integration.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Entrepreneurial Success</p>
                    <p>Founded and successfully managed <strong className="text-blue-600">Ash Designs</strong>, an MSME registered company, building a thriving freelancing business since 2019.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Leadership & Recognition</p>
                    <p>Hold the prestigious <strong className="text-blue-600">Rajyapuraskar Rover Award</strong> and am <strong className="text-blue-600">NCC A Grade certified</strong>, demonstrating commitment to excellence.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "I believe in building applications that not only function flawlessly but also make a positive impact on users' lives. 
                  When I'm not coding, I enjoy contributing to open-source projects, participating in scouting activities, 
                  and researching emerging technologies like blockchain."
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
              <motion.a
                href="#" // Replace with your resume download link
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Stats and Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Statistics */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg text-center"
                  >
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaLightbulb className="text-yellow-500 text-xl" />
                  <span className="text-gray-700"><strong>Innovation:</strong> Always exploring new technologies and creative solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-red-500 text-xl" />
                  <span className="text-gray-700"><strong>Quality:</strong> Committed to delivering high-performance, scalable applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUsers className="text-blue-500 text-xl" />
                  <span className="text-gray-700"><strong>Collaboration:</strong> Believing in teamwork and community-driven development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaAward className="text-purple-500 text-xl" />
                  <span className="text-gray-700"><strong>Excellence:</strong> Striving for perfection in every project I undertake</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.2 + (index * 0.1), duration: 0.6 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and collaborate with passionate teams. 
            Whether it's a mobile app, web application, or innovative tech solution, let's bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
