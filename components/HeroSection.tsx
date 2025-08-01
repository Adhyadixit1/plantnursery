import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const whatsappNumber = "+919211549170";
  const message = "Hi! I'm interested in your exotic plants. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-green-900 to-emerald-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/90 z-10" />
        
        {/* Optimized Background Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Exotic plant nursery with a variety of beautiful plants"
          className="w-full h-full object-cover"
          priority
          quality={90}
          style={{
            transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
            willChange: 'transform',
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-green-100 bg-green-800/30 backdrop-blur-sm rounded-full border border-green-700/50"
            >
              🌿 Premium Plants & Landscaping Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Exotic Flora
              </span>
              <br />
              <span className="text-white/90">Nursery & Landscaping</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Discover rare imported hybrid plants including Miyazaki Mangoes, 
              Seedless Cherry Black Mangoes, and exotic fragrant flowers from around the world. 
              Your perfect garden starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>🌱</span>
                  <span>Explore Our Collection</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              
              <Button
                onClick={() => scrollToSection('catalog')}
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg font-medium rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10">View Catalog</span>
                <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></span>
              </Button>
            </motion.div>

            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-6 text-green-100/80 text-sm"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>100% Organic Plants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Free Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Nationwide Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <div className="text-white/60 group-hover:text-white text-sm mb-2 transition-colors">
            Scroll to explore
          </div>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-1 group-hover:border-white/80 transition-colors">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-1"
              animate={{
                y: [0, 8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}