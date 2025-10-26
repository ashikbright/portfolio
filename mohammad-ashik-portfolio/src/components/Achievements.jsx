import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMedal, FaTrophy, FaAward, FaCertificate, FaUsers, FaGlobe } from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const achievements = [
    {
      title: "A Grade Certified in National Cadets Corps (NCC)",
      description: "Achieved A Grade certification in NCC, demonstrating leadership skills and discipline",
      icon: <FaMedal className="text-3xl text-yellow-500" />,
      category: "Military Training",
      year: "Active"
    },
    {
      title: "Rajyapuraskar Rover Award",
      description: "Received the prestigious Rajyapuraskar Rover Award in Rovers and Rangers by Former Governor of Karnataka on 28th February 2020",
      icon: <FaTrophy className="text-3xl text-yellow-500" />,
      category: "Scouting Excellence",
      year: "2020"
    },
    {
      title: "35th National Rover Scout Moot - Sri Lanka",
      description: "Participated in the 35th National Rover Scout Moot of Sri Lanka from 23rd April 2021 to 26th April 2021",
      icon: <FaGlobe className="text-3xl text-blue-500" />,
      category: "International Participation",
      year: "2021"
    },
    {
      title: "Research Paper Presentation - DRISHTI 2023",
      description: "Presented research paper on 'Digital Voting System for India using Blockchain Technology' at International Conference DRISHTI-2023 in Vivekananda College of Engineering and Technology on 26th July 2023",
      icon: <FaCertificate className="text-3xl text-green-500" />,
      category: "Academic Research",
      year: "2023"
    },
    {
      title: "Community Leadership",
      description: "Active involvement in scouting activities and community service through various initiatives and leadership roles",
      icon: <FaUsers className="text-3xl text-purple-500" />,
      category: "Community Service",
      year: "Ongoing"
    },
    {
      title: "Technical Innovation",
      description: "Developed multiple innovative applications including blockchain-based voting systems and healthcare management solutions",
      icon: <FaAward className="text-3xl text-red-500" />,
      category: "Innovation",
      year: "2023-2024"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-transparent mb-4">Achievements & Awards</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Recognition and accomplishments throughout my journey</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {achievement.icon}
                </div>
                <div>
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">{achievement.year}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notable Recognition</h3>
            <p className="text-gray-600 leading-relaxed">
              My achievements span across multiple domains including military training, community service, 
              academic research, and technical innovation. The Rajyapuraskar Rover Award represents the 
              highest recognition in Indian scouting, while my research presentation at international 
              conferences demonstrates technical expertise in emerging technologies like blockchain.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
