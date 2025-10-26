import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      company: "Accolade Tech Solutions Pvt Ltd",
      position: "Mobile App Developer",
      duration: "May 2024 - Present",
      description: "Mobile App Developer with strong expertise in Flutter, Rest APIs, and Firebase, while also having experience in full-stack web development using MERN stack, PHP, and MySQL.",
      achievements: [
        "Developed multiple cross-platform mobile applications using Flutter",
        "Integrated REST APIs and Firebase for real-time data management",
        "Implemented full-stack solutions using MERN stack and PHP/MySQL"
      ]
    },
    {
      company: "Ash Designs (MSME Registered)",
      position: "Founder & CEO",
      duration: "June 2019 - Present",
      description: "Founded and successfully managed an MSME registered company specializing in web development, mobile applications, and digital solutions. Built a thriving freelancing business with expertise in WordPress, Android development, and content management.",
      achievements: [
        "Successfully registered company under MSME (Micro, Small & Medium Enterprises) scheme",
        "Built custom websites using WordPress and Google Sites for diverse clientele",
        "Developed Android applications for various clients across different industries",
        "Created content management solutions using Blogger platform",
        "Managed client relationships and project delivery for 5+ years",
        "Established strong reputation in the local business community"
      ]
    },
    {
      company: "Vricsa Technologies Pvt Ltd",
      position: "Flutter Intern",
      duration: "November 2023 - January 2024",
      description: "Contributed to an open-source project using Flutter framework.",
      achievements: [
        "Contributed to open-source Flutter project development",
        "Collaborated with development team on mobile app features",
        "Gained experience in collaborative software development"
      ]
    },
    {
      company: "Codsoft",
      position: "Android Application Development Intern",
      duration: "October 2023 - November 2023",
      description: "Experienced in developing Android applications using Flutter.",
      achievements: [
        "Developed Android applications using Flutter framework",
        "Learned mobile app development best practices",
        "Completed multiple mobile app projects during internship"
      ]
    },
    {
      company: "Accolade Tech Solutions",
      position: "UI/UX and Blockchain Intern",
      duration: "April 2023",
      description: "Experienced with UI/UX design and Smart contract development in Blockchain Technology.",
      achievements: [
        "Designed user interfaces following modern UI/UX principles",
        "Developed smart contracts for blockchain applications",
        "Gained expertise in blockchain technology fundamentals"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">My journey in software development</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                    <h4 className="text-lg text-blue-600 font-semibold">{exp.company}</h4>
                  </div>
                  <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
