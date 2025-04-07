import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <FiMail className="h-6 w-6" />,
      label: 'Email',
      value: 'omar@example.com',
      href: 'mailto:omar@example.com',
    },
    {
      icon: <FiPhone className="h-6 w-6" />,
      label: 'Phone',
      value: '+1 234 567 890',
      href: 'tel:+1234567890',
    },
    {
      icon: <FiMapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'New York, USA',
      href: '#',
    },
  ];

  const inputClasses = `w-full bg-light-dark dark:bg-dark-light border-2 border-accent-light/20 dark:border-accent-dark/20 
    focus:border-primary rounded-lg px-4 py-3 text-accent-light dark:text-accent-dark placeholder-accent-light/60 dark:placeholder-accent-dark/60
    outline-none transition-all duration-300 hover:border-primary/50 focus:shadow-glow`;

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-light dark:bg-dark transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent-light dark:text-accent-dark transition-colors duration-300">
            Get in <span className="text-primary text-shadow-glow">Touch</span>
          </h2>
          <p className="text-accent-light/80 dark:text-accent-dark/80 max-w-2xl mx-auto transition-colors duration-300">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={inputClasses}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-accent-light dark:text-accent-dark font-medium rounded-lg px-6 py-3 shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-accent-light dark:border-accent-dark" />
                  ) : (
                    <>
                      <FiSend className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-500 dark:text-green-400 mt-2 transition-colors duration-300">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 dark:text-red-400 mt-2 transition-colors duration-300">Failed to send message. Please try again.</p>
                )}
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-12"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-light-dark dark:bg-dark-light border-2 border-accent-light/20 dark:border-accent-dark/20 hover:border-primary transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-accent-light dark:text-accent-dark group-hover:text-primary transition-colors duration-300">{info.label}</h3>
                    <p className="text-accent-light/80 dark:text-accent-dark/80 transition-colors duration-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 right-0 h-64 w-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 left-0 h-64 w-64 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
          rotate: [90, 0, 90]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Contact;
