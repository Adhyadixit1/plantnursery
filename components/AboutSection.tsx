import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Award, Globe, Heart } from 'lucide-react';

export default function AboutSection() {
  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl text-green-800 mb-6"
          >
            Rare Treasures from Around the World
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We specialize in importing and cultivating the world's most exotic and rare plants, 
            bringing you varieties that are not native to India but thrive in our carefully controlled environments.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Rare exotic plants"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Global Collection", desc: "Sourced from the finest nurseries across Japan, Thailand, and tropical regions" },
                { icon: Award, title: "Premium Quality", desc: "Each plant is carefully selected and quarantined before reaching you" },
                { icon: Leaf, title: "Expert Care", desc: "Detailed growing guides and ongoing support for every plant" },
                { icon: Heart, title: "Passion Driven", desc: "Years of experience in exotic plant cultivation and care" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <item.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-green-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-green-100 p-6 rounded-xl"
            >
              <h4 className="text-green-800 mb-3">Why Choose Exotic Plants?</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Unique varieties not available in local nurseries</li>
                <li>• Superior fruit quality and distinctive flavors</li>
                <li>• Conversation starters and garden centerpieces</li>
                <li>• Investment in rare horticultural specimens</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}