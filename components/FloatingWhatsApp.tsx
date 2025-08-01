import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useCallback } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919211549170";

  const quickMessages = [
    "I'm interested in your exotic plants",
    "Can you help me choose the right plant?",
    "What care instructions do you provide?",
    "Do you deliver nationwide?",
    "Tell me about your rarest plants"
  ];

  const handleWhatsAppClick = useCallback((message?: string) => {
    const defaultMessage = message || "Hi! I'm interested in your exotic plants. Can you help me?";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  }, [whatsappNumber]);

  const togglePanel = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Quick Messages Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 w-80 max-w-[calc(100vw-3rem)] border border-green-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-green-800 font-medium">💬 Quick Message</h4>
                  <p className="text-gray-500 text-sm">Choose a message to start chatting</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppClick(message)}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 text-sm text-gray-700 border border-green-100 hover:border-green-200"
                  >
                    {message}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsAppClick()}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  💬 Start Custom Chat
                </motion.button>
              </div>

              <div className="text-center mt-3 text-xs text-gray-500">
                We typically respond within 2 hours
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 30 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePanel}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors duration-200 relative overflow-hidden"
        >
          {/* Optimized pulse animation */}
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-green-400 rounded-full opacity-20"
          />
          
          <MessageCircle size={28} className="relative z-10" />
          
          {/* Notification dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.button>

        {/* Optimized tooltip - only show after delay */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.3 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm pointer-events-none"
        >
          Need help? Chat with us!
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
        </motion.div>
      </motion.div>
    </>
  );
}