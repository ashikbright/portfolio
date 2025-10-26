import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "OTT Platform",
      description: "Developed an Over-The-Top platform offering video streaming services with content categorization, playback controls, and user authentication.",
      tech: ["Flutter", "Firebase", "User Authentication", "Content Management"],
      status: "Under NDA",
      type: "Mobile Application"
    },
    {
      title: "Video Processing System",
      description: "Advanced video processing application with real-time editing capabilities, format conversion, and optimization features for various platforms.",
      tech: [ "Video Processing"],
      status: "Under NDA",
      type: "Media Processing Application"
    },
    {
      title: "Dental Association App",
      description: "Comprehensive dental management app with receipt generation, payment processing, and essential functionalities for dental professionals.",
      tech: ["Flutter", "Payment Integration", "Receipt Generation", "Database Management"],
      status: "Under NDA",
      type: "Healthcare Application"
    },
    {
      title: "Media Network App",
      description: "Multi-feature media app with live streaming, Bible with audio, chapter-wise hymns, and music player functionality.",
      tech: ["Flutter", "Live Streaming", "Audio Processing", "Media Player"],
      status: "Under NDA",
      type: "Media Application"
    },
    {
      title: "Digital Voting System",
      description: "Blockchain-based voting system for India, presented at International Conference DRISHTI-2023.",
      tech: ["Blockchain", "Smart Contracts", "Security", "Voting Algorithm"],
      status: "Research Project",
      type: "Blockchain Application"
    },
    {
      title: "Builders Hub",
      description: "Android application designed for construction worker management with comprehensive project tracking.",
      tech: ["Android", "Project Management", "Worker Tracking", "Database"],
      status: "Completed",
      type: "Management Application"
    },
    {
      title: "Share2Care",
      description: "Flutter application for donating unused items, promoting community sharing and sustainability.",
      tech: ["Flutter", "Community Features", "Donation System", "User Management"],
      status: "Completed",
      type: "Social Impact Application"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Some of my notable work and contributions</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              whileHover={{ y: -8 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <span className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    project.status === 'Under NDA' 
                      ? 'bg-orange-100 text-orange-700' 
                      : project.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
