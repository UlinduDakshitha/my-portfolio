import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight, FiTag } from 'react-icons/fi';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-ready applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      tags: ["Node.js", "Microservices", "Docker"]
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      excerpt: "Explore advanced techniques to optimize React applications including memoization, code splitting, and lazy loading.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      id: 3,
      title: "AWS Lambda: Serverless Architecture Guide",
      excerpt: "A comprehensive guide to building serverless applications with AWS Lambda, API Gateway, and DynamoDB.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      tags: ["AWS", "Serverless", "Lambda"]
    },
    {
      id: 4,
      title: "TypeScript Best Practices for 2024",
      excerpt: "Modern TypeScript patterns and practices to write type-safe, maintainable code in your applications.",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      tags: ["TypeScript", "Best Practices", "JavaScript"]
    },
    {
      id: 5,
      title: "GraphQL vs REST: Making the Right Choice",
      excerpt: "Understanding the differences between GraphQL and REST APIs to make informed architectural decisions.",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      tags: ["GraphQL", "REST", "API"]
    },
    {
      id: 6,
      title: "Modern CSS: Grid and Flexbox Mastery",
      excerpt: "Master CSS Grid and Flexbox to create responsive, modern web layouts with ease.",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
      tags: ["CSS", "Grid", "Flexbox"]
    }
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Cloud', 'Programming'];

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'all' || post.category === selectedCategory
  );

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog & Articles
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Thoughts, tutorials, and insights on web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-90" />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      <FiTag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <FiArrowRight />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
