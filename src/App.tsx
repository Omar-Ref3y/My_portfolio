import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LoadingSpinner = () => (
  <motion.div 
    className="h-screen w-screen flex items-center justify-center bg-light dark:bg-dark transition-colors duration-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="relative">
      <motion.div
        className="w-16 h-16 border-4 border-primary rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          },
          scale: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      />
      <motion.div
        className="absolute inset-0 border-t-4 border-primary-light rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  </motion.div>
);

const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="relative">
        <Navigation />
        
        <main className="relative bg-light dark:bg-dark text-accent-light dark:text-accent-dark transition-colors duration-300">
          <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-light dark:via-dark to-light dark:to-dark opacity-50 pointer-events-none transition-colors duration-300" />
          
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-light dark:bg-dark transition-colors duration-300">
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
