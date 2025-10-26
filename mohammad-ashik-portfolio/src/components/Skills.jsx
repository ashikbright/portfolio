import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaAndroid, 
  FaHtml5, 
  FaJs, 
  FaDatabase, 
  FaPhp, 
  FaServer, 
  FaReact
} from 'react-icons/fa';
import { SiMysql, SiFlutter } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { 
      name: 'Flutter', 
      category: 'Mobile',
      icon: <SiFlutter className="text-4xl" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    { 
      name: 'Android Java', 
      category: 'Mobile',
      icon: <FaAndroid className="text-4xl" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    { 
      name: 'HTML & CSS', 
      category: 'Frontend',
      icon: <FaHtml5 className="text-4xl" />,
      color: 'from-orange-500 to-blue-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    { 
      name: 'JavaScript', 
      category: 'Frontend',
      icon: <FaJs className="text-4xl" />,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    { 
      name: 'MySQL', 
      category: 'Database',
      icon: <SiMysql className="text-4xl" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    { 
      name: 'PHP', 
      category: 'Backend',
      icon: <FaPhp className="text-4xl" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    { 
      name: 'REST API', 
      category: 'Backend',
      icon: <FaServer className="text-4xl" />,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    },
    { 
      name: 'MERN Stack', 
      category: 'Full Stack',
      icon: <FaReact className="text-4xl" />,
      color: 'from-green-500 to-cyan-600',
      bgColor: 'bg-gradient-to-r from-green-50 to-cyan-50',
      textColor: 'text-cyan-600',
      borderColor: 'border-green-200'
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile': return <FaAndroid className="text-2xl text-blue-600" />;
      case 'Frontend': return <FaHtml5 className="text-2xl text-orange-600" />;
      case 'Backend': return <FaServer className="text-2xl text-purple-600" />;
      case 'Database': return <FaDatabase className="text-2xl text-blue-600" />;
      case 'Full Stack': return <FaReact className="text-2xl text-cyan-600" />;
      default: return <FaHtml5 className="text-2xl text-orange-600" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Mobile': return 'from-blue-500 to-blue-600';
      case 'Frontend': return 'from-orange-500 to-green-600';
      case 'Backend': return 'from-purple-500 to-indigo-600';
      case 'Database': return 'from-blue-500 to-blue-600';
      case 'Full Stack': return 'from-green-500 to-cyan-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden" ref={ref}>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies I work with to build amazing digital experiences
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">{category}</h3>
              <div className={`w-20 h-1 bg-gradient-to-r ${getCategoryColor(category)} mx-auto rounded-full`}></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className={`${skill.bgColor} ${skill.borderColor} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 text-center group cursor-pointer relative overflow-hidden`}
                  whileHover={{ y: -8, scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5, duration: 0.6 }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`${skill.textColor} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                      {skill.icon}
                    </div>
                    <span className={`font-bold ${skill.textColor} text-sm group-hover:scale-105 transition-transform duration-300 block`}>
                      {skill.name}
                    </span>
                    
                    {/* Animated underline */}
                    <div className={`mt-3 w-0 group-hover:w-full h-1 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 mx-auto`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-white via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Technical Expertise Summary</h3>
            <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
              Specialized in mobile and full-stack web development with strong expertise in Flutter, JavaScript, PHP, and database management. 
              Building scalable applications with modern technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {skills.length}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Technologies</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  5+
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Passion</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
