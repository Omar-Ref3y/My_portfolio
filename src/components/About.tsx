import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiGlobe, FiStar } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading frontend development for enterprise applications.',
      icon: <FiCode className="h-6 w-6 text-primary" />,
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive web applications using React and TypeScript.',
      icon: <FiLayout className="h-6 w-6 text-primary" />,
    },
    {
      year: '2019 - 2021',
      title: 'Web Developer',
      company: 'Creative Agency',
      description: 'Created engaging websites for various clients.',
      icon: <FiGlobe className="h-6 w-6 text-primary" />,
    },
    {
      year: '2018 - 2019',
      title: 'Junior Developer',
      company: 'StartUp Hub',
      description: 'Started my journey in web development.',
      icon: <FiStar className="h-6 w-6 text-primary" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-light dark:bg-dark transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-accent-light dark:text-accent-dark font-medium mb-4 px-4 py-1 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 border border-accent-light/20 dark:border-accent-dark/20 shadow-glow animate-glow-pulse transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Me
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-accent-light dark:text-accent-dark transition-colors duration-300">
            My Journey as a <span className="text-primary text-shadow-glow">Developer</span>
          </h2>
          
          <p className="text-accent-light dark:text-accent-dark max-w-2xl mx-auto transition-colors duration-300">
            A passionate frontend developer with a keen eye for design and a commitment to creating seamless user experiences.
            Here's my journey so far:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.year}
              variants={itemVariants}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 mr-4 p-3 rounded-lg bg-light-dark dark:bg-dark-light transition-colors duration-300">
                {experience.icon}
              </div>
              
              <div>
                <span className="text-primary font-medium">{experience.year}</span>
                <h3 className="text-xl font-semibold mb-2 text-accent-light dark:text-accent-dark transition-colors duration-300">
                  {experience.title}
                </h3>
                <p className="text-accent-light/80 dark:text-accent-dark/80 mb-1 transition-colors duration-300">
                  {experience.company}
                </p>
                <p className="text-accent-light/70 dark:text-accent-dark/70 transition-colors duration-300">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
