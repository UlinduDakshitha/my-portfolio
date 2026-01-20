import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      tags: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
      icon: <FaReact />,
      github: "https://github.com/UlinduDakshitha/ecommerce-platform",
      live: "https://demo-ecommerce.com",
      stars: 142,
      forks: 38,
      status: "active"
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "AI-powered content generation using GPT-4 and custom ML models",
      tags: ["Python", "FastAPI", "React", "OpenAI", "Docker"],
      icon: <FaPython />,
      github: "https://github.com/UlinduDakshitha/ai-content-generator",
      live: "https://ai-content-demo.com",
      stars: 89,
      forks: 24,
      status: "upgrade"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "Scalable chat application with voice/video calling features",
      tags: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
      icon: <FaNodeJs />,
      github: "https://github.com/UlinduDakshitha/chat-app",
      live: "https://chat-demo.com",
      stars: 56,
      forks: 18,
      status: "active"
    },
    {
      id: 4,
      title: "DevOps Dashboard",
      description: "Monitoring dashboard for cloud infrastructure and CI/CD pipelines",
      tags: ["Next.js", "Go", "Docker", "Kubernetes", "Prometheus"],
      icon: <FaReact />,
      github: "https://github.com/UlinduDakshitha/devops-dashboard",
      live: "https://devops-dashboard.com",
      stars: 72,
      forks: 31,
      status: "upgrade"
    }
  ];

  const filters = ['all', 'active', 'upgrade'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.status === activeFilter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Current projects with live demos and source code
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full capitalize font-medium ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {filter === 'upgrade' ? '🔄 Upgrading' : filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                      <div className="text-blue-600 dark:text-blue-300 text-xl">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <FiStar /> {project.stars}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <FiGitBranch /> {project.forks}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {project.status === 'upgrade' ? '🔄 Upgrading' : 'Active'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FiGithub /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  </div>
                  
                  {project.status === 'upgrade' && (
                    <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Currently Upgrading</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/UlinduDakshitha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <FiGithub />
            <span className="text-lg font-medium">View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;