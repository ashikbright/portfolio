import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity, FaBookOpen, FaAward } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "St Joseph Engineering College, Mangalore",
      description: "Advanced studies in computer applications with focus on software development, database management, and emerging technologies.",
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      level: "Post Graduate"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St Philomena College, Puttur",
      description: "Comprehensive undergraduate program covering programming languages, database systems, web technologies, and software engineering principles.",
      icon: <FaUniversity className="text-3xl text-green-600" />,
      level: "Graduate"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">Educational Background</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Academic journey and qualifications</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gray-50 p-4 rounded-full">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-600 font-semibold mb-3">{edu.institution}</h4>
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {edu.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              </div>

              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-6 lg:left-6 top-20 w-px h-12 bg-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Foundation</h3>
            <p className="text-gray-600 leading-relaxed">
              My educational journey has provided me with a strong foundation in computer science and applications. 
              The comprehensive curriculum has equipped me with essential knowledge in programming, software development, 
              and emerging technologies that I apply in my professional work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
