import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TilesSection = () => {
  const navigate = useNavigate();
  
  const tools = [
    {
      name: 'Zalgo Text Generator',
      description: 'Transform regular text into creepy, glitchy style.',
      path: '/text-generators/zalgo',
      bgColor: 'bg-blue-50 dark:bg-blue-900/30',
      hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/50'
    },
    {
      name: 'Glitch Text Generator',
      description: 'Create cool, distorted text effects.',
      path: '/text-generators/glitch',
      bgColor: 'bg-purple-50 dark:bg-purple-900/30',
      hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/50'
    },
    {
      name: 'Unicode Text Converter',
      description: 'Convert plain text to Unicode format.',
      path: '/text-generators/unicode',
      bgColor: 'bg-green-50 dark:bg-green-900/30',
      hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/50'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="mt-24 py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Text Tools
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`
                ${tool.bgColor} 
                ${tool.hoverColor}
                p-8 
                rounded-2xl 
                shadow-lg 
                cursor-pointer 
                transition-all 
                duration-300 
                min-h-[250px]
                flex 
                flex-col 
                justify-between
                transform
                hover:shadow-xl
              `}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(tool.path)}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-poppins">
                  {tool.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-montserrat">
                  {tool.description}
                </p>
              </div>
              
              <motion.div 
                className="mt-6 text-blue-600 dark:text-blue-400 font-semibold"
                whileHover={{ x: 5 }}
              >
                Try it now →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TilesSection; 