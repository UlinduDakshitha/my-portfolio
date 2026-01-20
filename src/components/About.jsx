import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiHeart, FiTarget, FiAward } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode />,
      title: "8+ Years",
      description: "Software Development Experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiTarget />,
      title: "50+ Projects",
      description: "Successfully Delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiAward />,
      title: "15+ Certifications",
      description: "Industry Recognized",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiHeart />,
      title: "Passion Driven",
      description: "Problem Solver",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Passionate developer crafting innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-3xl p-8 flex items-center justify-center">
                <FiUser size={200} className="text-gray-400 dark:text-gray-600" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi! I'm Ulindu Dakshitha
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <strong>Full Stack Developer</strong> with a passion for creating elegant solutions 
                to complex problems. With expertise spanning across modern web technologies, I specialize 
                in building scalable applications that make a difference.
              </p>
              <p>
                My journey in software development started with a curiosity about how things work, 
                and has evolved into a career dedicated to continuous learning and innovation. I thrive 
                in collaborative environments and enjoy mentoring others in their coding journey.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical blog posts. I believe in writing clean, 
                maintainable code and following best practices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 text-white`}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
