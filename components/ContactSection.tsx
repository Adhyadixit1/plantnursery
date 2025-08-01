import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Phone, MessageCircle, MapPin, Clock, Mail, Leaf } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = "+919211549170";
  
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to know more about your exotic plants and services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "WhatsApp",
      detail: "+91 92115 49170",
      description: "Available 9 AM - 8 PM"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "Quick Response",
      detail: "Within 2 Hours",
      description: "Expert plant advice"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Pan India Delivery",
      detail: "Nationwide Shipping",
      description: "Safe plant transportation"
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: "Consultation Hours",
      detail: "Mon - Sat",
      description: "9:00 AM - 8:00 PM"
    }
  ];

  const services = [
    "🌱 Plant Selection Consultation",
    "📋 Detailed Care Instructions",
    "🚚 Nationwide Safe Delivery",
    "📞 Post-Purchase Support",
    "🌿 Garden Design Advice",
    "🔄 Plant Health Check-ups"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Garden background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-emerald-800/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full">
              <Leaf className="w-12 h-12 text-green-300" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Start Your Exotic Garden Journey
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Get expert guidance on selecting and caring for your rare plants. We're here to help you create your dream garden.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl mb-6 text-center">Get In Touch</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-white/20 rounded-full">
                        {info.icon}
                      </div>
                    </div>
                    <h4 className="text-lg mb-1">{info.title}</h4>
                    <p className="text-green-200 mb-1">{info.detail}</p>
                    <p className="text-green-300 text-sm">{info.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-400 text-white py-4 text-lg rounded-xl"
                >
                  💬 Chat on WhatsApp
                </Button>
                
                <div className="text-center">
                  <p className="text-green-200 text-sm mb-2">Or call directly:</p>
                  <a 
                    href={`tel:${whatsappNumber}`}
                    className="text-2xl text-green-300 hover:text-white transition-colors"
                  >
                    {whatsappNumber}
                  </a>
                </div>
              </div>
            </div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
            >
              <h4 className="text-xl mb-4 text-center">What We Offer</h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {services.map((service, index) => (
                  <div key={index} className="text-green-100">
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Expert plant consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg">
                  "Every plant comes with personalized care guidance and ongoing support"
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4">
                <div className="text-2xl mb-1">500+</div>
                <div className="text-green-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4">
                <div className="text-2xl mb-1">50+</div>
                <div className="text-green-200 text-sm">Plant Varieties</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4">
                <div className="text-2xl mb-1">95%</div>
                <div className="text-green-200 text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          <h3 className="text-2xl md:text-3xl mb-4">
            Transform Your Garden Today
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Don't wait to start your exotic garden journey. Our rare plants are in limited quantities and high demand.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg rounded-xl"
          >
            🌿 Start Your Garden Journey
          </Button>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-green-200">
            © 2024 Exotic Flora. Bringing the world's rarest plants to your garden.
          </p>
        </div>
      </div>
    </section>
  );
}