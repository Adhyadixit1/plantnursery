import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Sprout, Apple, Leaf, Sun, Droplets, Thermometer, Shield } from 'lucide-react';

export default function PlantFeaturesSection() {
  const plantLifecycle = [
    {
      stage: "Planting",
      icon: <Sprout className="w-6 h-6" />,
      time: "Month 1",
      description: "Plant in well-draining soil with proper spacing and initial care setup.",
      color: "bg-green-100 text-green-700"
    },
    {
      stage: "Growth",
      icon: <Leaf className="w-6 h-6" />,
      time: "Months 2-24",
      description: "Active vegetative growth with regular feeding and pruning for shape.",
      color: "bg-blue-100 text-blue-700"
    },
    {
      stage: "Flowering",
      icon: <Sun className="w-6 h-6" />,
      time: "Months 24-36",
      description: "First flowering period begins, requiring specific care and pollination.",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      stage: "Fruiting",
      icon: <Apple className="w-6 h-6" />,
      time: "Months 36+",
      description: "Fruit development and maturation, harvest time varies by species.",
      color: "bg-red-100 text-red-700"
    }
  ];

  const careFeatures = [
    {
      icon: <Thermometer className="w-8 h-8 text-red-500" />,
      title: "Climate Control",
      description: "Our plants are acclimatized to Indian weather conditions gradually",
      details: ["Temperature range: 20-35°C", "Humidity monitoring", "Season adaptation"]
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Watering Schedule",
      description: "Precise watering requirements for each variety",
      details: ["Deep but infrequent watering", "Drainage systems", "Moisture monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Disease Prevention",
      description: "Comprehensive pest and disease management program",
      details: ["Organic treatments", "Regular health checks", "Quarantine protocols"]
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Light Requirements",
      description: "Optimal positioning and light exposure for healthy growth",
      details: ["Full sun exposure", "Seasonal adjustments", "Artificial supplementation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fruiting Cycle Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-green-800 mb-6">
            Plant Lifecycle & Fruiting Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the journey from seedling to harvest helps you plan and care for your exotic plants
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {plantLifecycle.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stage.color} mb-4`}>
                  {stage.icon}
                </div>
                <h3 className="text-xl text-green-800 mb-2">{stage.stage}</h3>
                <p className="text-sm text-gray-500 mb-3">{stage.time}</p>
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Care Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl text-green-800 mb-6">Expert Care Guidelines</h3>
          <p className="text-lg text-gray-600">
            Every exotic plant comes with detailed care instructions and ongoing support
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Plant care and maintenance"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {careFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-green-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Seasonal Care Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl text-green-800 mb-2">Seasonal Care Calendar</h3>
            <p className="text-gray-600">
              Month-by-month care guide for optimal plant health and fruiting
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-green-800 mb-2">Spring (Mar-May)</h4>
              <p className="text-sm text-gray-600">
                Active growth period, increase watering and begin feeding program
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="text-green-800 mb-2">Summer (Jun-Aug)</h4>
              <p className="text-sm text-gray-600">
                Peak growing season, maintain consistent moisture and protect from extreme heat
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="text-green-800 mb-2">Monsoon (Sep-Nov)</h4>
              <p className="text-sm text-gray-600">
                Adjust watering, improve drainage, watch for fungal issues
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-green-800 mb-2">Winter (Dec-Feb)</h4>
              <p className="text-sm text-gray-600">
                Reduce watering, protect from cold, prepare for next season
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}