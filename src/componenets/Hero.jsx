import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[FaReact, FaNodeJs, FaPython, SiTypescript, SiMongodb].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-200 dark:text-blue-900"
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100 
            }}
            animate={{
              y: [null, Math.random() * 100, Math.random() * 100],
              rotate: 360,
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + index * 10}%`,
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
          >
            <img
              src="https://avatars.githubusercontent.com/u/username"
              alt="Ulindu Dakshitha"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=Ulindu+Dakshitha&background=6366f1&color=fff&size=256`;
              }}
            />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ulindu Dakshitha
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Software Engineer & Problem Solver
          </motion.p>

          <motion.p 
            className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting elegant solutions to complex problems with modern technologies.
            Passionate about creating impactful digital experiences.
          </motion.p>

          {/* Social Links & CTA */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/UlinduDakshitha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <FiGithub /> GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/ulindu-dakshitha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <FiLinkedin /> LinkedIn
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('cv')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              <FiDownload /> Download CV
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;