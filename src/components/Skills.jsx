import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker,
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql,
  SiNextdotjs, SiTailwindcss, SiKubernetes, SiJenkins
} from 'react-icons/si';
import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode />,
      skills: [
        { name: "React.js", icon: <FaReact />, level: 95, color: "from-cyan-500 to-blue-500" },
        { name: "TypeScript", icon: <SiTypescript />, level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "from-gray-800 to-black" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "from-teal-400 to-cyan-500" },
      ]
    },
    {
      title: "Backend",
      icon: <FiServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 90, color: "from-green-500 to-green-700" },
        { name: "Python", icon: <FaPython />, level: 85, color: "from-yellow-500 to-blue-500" },
        { name: "Java", icon: <FaJava />, level: 80, color: "from-red-500 to-orange-500" },
        { name: "GraphQL", icon: <SiGraphql />, level: 75, color: "from-pink-500 to-purple-500" },
      ]
    },
    {
      title: "Database",
      icon: <FiDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 88, color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 82, color: "from-blue-400 to-blue-600" },
        { name: "Redis", icon: <SiRedis />, level: 70, color: "from-red-600 to-red-800" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FiCloud />,
      skills: [
        { name: "AWS", icon: <FaAws />, level: 78, color: "from-orange-500 to-yellow-500" },
        { name: "Docker", icon: <FaDocker />, level: 85, color: "from-blue-400 to-cyan-500" },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 72, color: "from-blue-500 to-blue-700" },
        { name: "Jenkins", icon: <SiJenkins />, level: 68, color: "from-red-500 to-pink-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <div className="text-blue-600 dark:text-blue-300 text-xl">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-600 dark:text-gray-400">
                          {skill.icon}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">🚀 Currently Mastering</h3>
          <p className="text-lg opacity-90">
            Advanced Microservices Architecture • Machine Learning with Python • 
            Blockchain Development • Serverless Computing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;