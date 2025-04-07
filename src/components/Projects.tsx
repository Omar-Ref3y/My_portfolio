import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

interface ProjectDetails {
  challenge: string;
  solution: string;
  features: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  details: ProjectDetails;
}

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'react', name: 'React' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'HTML', name: 'HTML' },
  ];

  // Normalize filter ID to match project tags
  const normalizeFilter = (filter: string) => {
    return filter.toLowerCase().replace('.', '');
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'SAFARNY Landing Page',
      description: 'A landing page for SAFARNY.',
      image: '/projects/Screenshot 2025-04-04 184052.png',
      tags: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com',
      live: 'https://3marportfolio.netlify.app/',
      details: {
        challenge: 'Creating a scalable and performant landing page.',
        solution: 'Implemented server-side rendering and optimized database queries.',
        features: [
          'Responsive design',
          'Dark mode support',
          'Project showcase',
        ],
      },
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: '/projects/Screenshot 2025-04-04 185306.png',
      tags: ['react', 'typescript'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: {
        challenge: 'Building a real-time collaboration system.',
        solution: 'Used WebSocket for live updates and implemented optimistic UI updates.',
        features: [
          'Real-time collaboration',
          'Drag and drop interface',
          'Task dependencies',
          'Progress tracking',
        ],
      },
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my work and skills.',
      image: '/projects/Screenshot 2025-03-07 220531.png',
      tags: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: {
        challenge: 'Creating an engaging and performant portfolio experience.',
        solution: 'Used modern animations and optimized asset loading for smooth interactions.',
        features: [
          'Responsive design',
          'Smooth animations',
          'Dark mode support',
          'Project showcase',
        ],
      },
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my work and skills.',
      image: '/projects/Screenshot 2025-03-07 224048.png',
      tags: ['react', 'typescript'],
      github: 'https://github.com',
      live: 'https://3marportfolio.netlify.app/',
      details: {
        challenge: 'Creating a responsive and engaging portfolio experience.',
        solution: 'Used modern animations and optimized asset loading for smooth interactions.',
        features: [
          'Responsive design',
          'Dark mode support',
          'Project showcase',
        ],
      },
    },
    {
      id: 5,
      title: 'pioneers Landing Page',
      description: 'A comprehensive project management and team collaboration platform.',
      image: '/projects/Screenshot 2025-04-04 192421.png',
      tags: ['react', 'typescript'],
      github: 'https://github.com',
      live: 'https://pioneerseg.netlify.app/',
      details: {
        challenge: 'Building a scalable project management solution.',
        solution: 'Implemented microservices architecture and real-time collaboration features.',
        features: [
          'Team collaboration tools',
          'Resource management',
          'Time tracking',
          'Project analytics',
        ],
      },
    },
    {
      id: 6,
      title: 'courses platform',
      description: 'A data visualization and analytics platform for business intelligence.',
      image: '/projects/Screenshot 2025-01-28 190835.png',
      tags: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: {
        challenge: 'Processing and visualizing large datasets efficiently.',
        solution: 'Used WebGL for rendering and implemented data streaming.',
        features: [
          'Interactive charts',
          'Custom dashboards',
          'Data export',
          'Real-time updates',
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-light dark:bg-dark transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block text-accent-light dark:text-accent-dark font-medium mb-4 px-4 py-1 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 border border-accent-light/20 dark:border-accent-dark/20 shadow-glow animate-glow-pulse transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent-light dark:text-accent-dark transition-colors duration-300">
            Featured <span className="text-primary text-shadow-glow">Projects</span>
          </h2>
          
          <p className="text-accent-light/80 dark:text-accent-dark/80 max-w-2xl mx-auto mb-8 transition-colors duration-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${selectedFilter === filter.id
                    ? 'bg-primary text-dark'
                    : 'bg-light-dark dark:bg-dark-light text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10'
                  }
                `}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects
              .filter(project => selectedFilter === 'all' || project.tags.includes(normalizeFilter(selectedFilter)))
              .map(project => (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  className="card group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-accent-light dark:text-accent-dark group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-accent-light/70 dark:text-accent-dark/70 mb-4 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-sm rounded-md bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-light/80 dark:bg-dark/80 backdrop-blur-sm transition-colors duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-light dark:bg-dark rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-accent-light/20 dark:border-accent-dark/20 shadow-glow transition-colors duration-300"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300 text-accent-light dark:text-accent-dark hover:text-primary"
                onClick={() => setSelectedProject(null)}
              >
                <FiX className="h-6 w-6" />
              </button>

              <div className="w-full h-64 bg-light-dark dark:bg-dark-light flex items-center justify-center rounded-lg mb-6 border-2 border-accent-light/20 dark:border-accent-dark/20 transition-colors duration-300">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-accent-light dark:text-accent-dark transition-colors duration-300">
                {selectedProject.title}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">The Challenge</h4>
                  <p className="text-accent-light/80 dark:text-accent-dark/80 transition-colors duration-300">
                    {selectedProject.details.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">The Solution</h4>
                  <p className="text-accent-light/80 dark:text-accent-dark/80 transition-colors duration-300">
                    {selectedProject.details.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-accent-light/80 dark:text-accent-dark/80 space-y-1 transition-colors duration-300">
                    {selectedProject.details.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-accent-light dark:text-accent-dark hover:bg-primary-glow transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
                  >
                    <FiGithub className="h-5 w-5" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-accent-light dark:text-accent-dark hover:bg-primary-glow transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
                  >
                    <FiExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
