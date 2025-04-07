import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiCsharp,
  SiMicrosoftsqlserver,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'JavaScript', icon: <FaJs />, level: 80 },
        { name: 'HTML', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS & SASS', icon: <FaCss3Alt />, level: 80 },
        { name: 'React', icon: <FaReact />, level: 70 },
      ],
    },
    {
      category: 'Modern Technologies',
      items: [
        { name: 'TypeScript', icon: <SiTypescript />, level: 60 },
        { name: 'Bootstrap & Tailwind', icon: <SiTailwindcss />, level: 75 },
        { name: 'React Native', icon: <FaReact />, level: 50 },
      ],
    },
    {
      category: 'Backend & Problem Solving',
      items: [
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver />, level: 70 },
        { name: 'C#', icon: <SiCsharp />, level: 70 },
        { name: 'Problem Solving', icon: <FaGitAlt />, level: 80 },
      ],
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
    <section id="skills" className="py-20 relative overflow-hidden bg-light dark:bg-dark transition-colors duration-300">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-accent-light dark:text-accent-dark font-medium mb-4 px-4 py-1 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 border border-accent-light/20 dark:border-accent-dark/20 shadow-glow animate-glow-pulse transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My Expertise
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent-light dark:text-accent-dark transition-colors duration-300">
            Technical <span className="text-primary text-shadow-glow">Skills</span>
          </h2>
          <p className="text-accent-light/80 dark:text-accent-dark/80 max-w-2xl mx-auto transition-colors duration-300">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-light-dark dark:bg-dark-light rounded-xl p-6 border-2 border-accent-light/10 dark:border-accent-dark/10 hover:border-primary group transition-all duration-500 hover:shadow-glow"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary group-hover:text-shadow-glow transition-all duration-300">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-primary group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-accent-light dark:text-accent-dark group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        className="text-sm text-accent-light/60 dark:text-accent-dark/60 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full overflow-hidden transition-colors duration-300">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary/80 to-primary relative"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        <motion.div 
                          className="absolute top-0 right-0 h-full w-[2px] bg-primary"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-primary/5"
              style={{
                fontSize: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
                scale: [1, Math.random() * 0.5 + 0.8],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {[<FaReact />, <SiTypescript />, <FaJs />, <SiTailwindcss />, <FaHtml5 />, <FaCss3Alt />][
                index % 6
              ]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
