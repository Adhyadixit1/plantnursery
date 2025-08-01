import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);
      ticking = false;
    };

    return () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const scrollHandler = handleScroll();
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Plants', href: '#plants' },
    { label: 'Flowers', href: '#flowers' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Gallery', href: '#catalog' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <h1 className={`text-2xl font-bold transition-colors duration-200 ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`}>
              🌿 Exotic Flora
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                      : 'text-white hover:text-green-200 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:bg-green-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4 border border-green-100"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}