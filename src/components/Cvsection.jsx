import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiBook, FiCalendar } from 'react-icons/fi';

const CVSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of microservices architecture. Improved system performance by 40%.",
      tech: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications with React and Express.",
      tech: ["React", "Express", "MongoDB", "Redis"]
    }
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      grade: "First Class Honors"
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect", issuer: "Amazon", year: "2023" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2022" }
  ];

  const downloadCV = () => {
    // Simulate CV download
    const link = document.createElement('a');
    link.href = '/cv-ulindu-dakshitha.pdf';
    link.download = 'Ulindu_Dakshitha_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Curriculum Vitae
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Professional journey and achievements
          </p>
        </motion.div>

        {/* CV Download Button */}
        <div className="text-center mb-12">
          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <FiDownload />
            <span className="text-lg font-medium">Download CV (PDF)</span>
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
            { id: 'education', label: 'Education', icon: <FiBook /> },
            { id: 'certifications', label: 'Certifications', icon: <FiAward /> }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <FiCalendar />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                      {edu.grade}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <FiAward size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CVSection;
