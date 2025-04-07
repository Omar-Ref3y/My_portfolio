import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="h-5 w-5" />,
      url: 'https://github.com',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="h-5 w-5" />,
      url: 'https://twitter.com',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="h-5 w-5" />,
      url: 'https://linkedin.com',
    },
  ];

  return (
    <footer className="relative py-12 bg-light dark:bg-dark transition-colors duration-300">
      <div className="section-container">
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-light-dark dark:bg-dark-light text-accent-light dark:text-accent-dark hover:text-primary dark:hover:text-primary border border-accent-light/20 dark:border-accent-dark/20 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-glow"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-light-dark dark:bg-dark-light text-accent-light dark:text-accent-dark hover:text-primary dark:hover:text-primary border border-accent-light/20 dark:border-accent-dark/20 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-center text-accent-light/70 dark:text-accent-dark/70 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p> {new Date().getFullYear()} Omar. All rights reserved.</p>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-light/50 dark:from-dark/50 to-transparent pointer-events-none transition-colors duration-300" />
    </footer>
  );
};

export default Footer;
