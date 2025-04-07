import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { useState, useMemo } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate optimized binary matrix
  const generateBinaryMatrix = () => {
    const rows = 15; // Increased for more coverage
    const cols = 18; // Increased for more coverage
    const matrix = [];
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Create a denser pattern around the center
        const distanceFromCenter = Math.abs(i - rows/2) + Math.abs(j - cols/2);
        if (distanceFromCenter <= 8) { // Increased radius
          matrix.push({
            id: `${i}-${j}`,
            text: Math.random() > 0.5 ? '1' : '0',
            x: (j - cols/2) * 35, // Adjusted spacing
            y: (i - rows/2) * 35, // Adjusted spacing
            delay: distanceFromCenter * 0.02, // Faster animation
          });
        }
      }
    }
    return matrix;
  };

  const binaryMatrix = useMemo(() => generateBinaryMatrix(), []);
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light dark:bg-dark transition-colors duration-300">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.span 
              className="inline-block text-accent-light dark:text-accent-dark font-medium mb-2 px-4 py-1 rounded-full bg-accent-light/5 dark:bg-accent-dark/5 border border-accent-light/10 dark:border-accent-dark/10 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi there, I'm
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <motion.div 
                className="text-primary text-shadow-glow inline-block relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover="hover"
              >
                {Array.from("Omar").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block relative"
                    variants={{
                      hover: {
                        y: -5,
                        x: 0,
                        rotate: [-5, 5, 0],
                        scale: 1.1,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                          delay: index * 0.05,
                          rotate: {
                            duration: 0.5,
                            ease: "easeInOut",
                            repeat: 0,
                          },
                        },
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                  variants={{
                    hover: {
                      scaleX: 1,
                      transition: { duration: 0.3, delay: 0.2 },
                    },
                  }}
                  initial={{ scaleX: 0 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
              <motion.span
                className="text-accent-light dark:text-accent-dark block mt-2 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Full Stack Developer
              </motion.span>
            </h1>

            <motion.p
              className="text-accent-light/80 dark:text-accent-dark/80 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I build exceptional digital experiences that make life easier and more enjoyable.
              Let's create something amazing together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-primary text-accent-light dark:text-accent-dark hover:bg-primary-glow transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-light-dark dark:bg-dark-light text-accent-light dark:text-accent-dark border border-accent-light/20 dark:border-accent-dark/20 hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="relative z-10 w-80 h-80 mx-auto rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/projects/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                initial={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>

            {/* Binary Matrix Animation */}
            <motion.div className="absolute inset-0 -z-10">
              {binaryMatrix.map((bit) => (
                <motion.div
                  key={bit.id}
                  className="absolute text-base font-mono text-primary/20 dark:text-primary/30"
                  style={{
                    x: bit.x,
                    y: bit.y,
                    willChange: 'transform, opacity'
                  }}
                  animate={isHovered ? {
                    opacity: [0, 0.9, 0],
                    x: [bit.x, bit.x + (bit.x > 0 ? 80 : -80)],
                    y: [bit.y, bit.y + (bit.y > 0 ? 80 : -80)],
                  } : {
                    opacity: 0,
                    x: bit.x,
                    y: bit.y
                  }}
                  transition={{
                    duration: 1.5,
                    delay: bit.delay,
                    repeat: isHovered ? Infinity : 0,
                    repeatType: 'reverse',
                    ease: 'easeOut'
                  }}
                >
                  {bit.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-accent-light/60 dark:text-accent-dark/60 text-sm mb-2 group-hover:text-primary transition-colors duration-300">
            Scroll down
          </span>
          <FiArrowDown className="h-5 w-5 text-accent-light/60 dark:text-accent-dark/60 group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 h-[500px] w-[500px] bg-gradient-to-r from-primary/10 to-accent-light/10 dark:to-accent-dark/10 rounded-full blur-3xl transition-colors duration-300"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] bg-gradient-to-r from-primary/10 to-accent-light/10 dark:to-accent-dark/10 rounded-full blur-3xl transition-colors duration-300"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.15, 0.25],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-gradient-to-r from-primary/5 via-primary/10 to-accent-light/5 dark:to-accent-dark/5 rounded-full blur-3xl transition-colors duration-300"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
