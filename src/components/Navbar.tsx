import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const letterVariants = {
    hover: {
      y: -3,
      color: '#00DC82',
      textShadow: '0 0 8px rgba(0, 220, 130, 0.5)',
      transition: {
        duration: 0.2,
      },
    },
  };

  const nameVariants = {
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-secondary/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.a
            href="#hero"
            className="text-2xl font-bold flex items-center gap-2"
            variants={nameVariants}
            whileHover="hover"
          >
            {Array.from("Omar").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-primary inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-secondary/10 hover:bg-primary/20 text-secondary hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 md:hidden text-secondary hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 border-b border-secondary/10"
          >
            <div className="section-container py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-secondary hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => {
                    setIsDark(!isDark);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDark ? (
                    <>
                      <FiSun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FiMoon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
