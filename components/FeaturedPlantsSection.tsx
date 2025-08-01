import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Clock, Thermometer, Droplets } from 'lucide-react';

export default function FeaturedPlantsSection() {
  const whatsappNumber = "+919211549170";

  const featuredPlants = [
    {
      name: "Miyazaki Mango",
      scientificName: "Mangifera indica 'Miyazaki'",
      origin: "Japan",
      price: "₹25,000 - ₹35,000",
      image: "https://seed2plant.in/cdn/shop/files/Japanese_Miyazaki_Mango_Grafted_Live_Plant.jpg?v=1717588681",
      description: "The world's most expensive mango variety, known for its exceptional sweetness and ruby-red skin when ripe.",
      features: [
        "Exceptionally sweet with complex flavor profile",
        "Distinctive ruby-red coloration",
        "Limited production worldwide",
        "Bears fruit in 3-4 years"
      ],
      growingConditions: {
        temperature: "25-35°C",
        humidity: "60-80%",
        sunlight: "Full sun 6-8 hours"
      },
      badge: "Premium"
    },
    {
      name: "Seedless Cherry Black Mango",
      scientificName: "Mangifera indica 'Cherry Black'",
      origin: "Thailand",
      price: "₹18,000 - ₹22,000",
      image: "https://m.media-amazon.com/images/I/81K7tLGTpsL._UF350,350_QL80_.jpg",
      description: "A rare seedless variety with dark purple-black skin and incredibly sweet, cherry-flavored flesh.",
      features: [
        "Completely seedless variety",
        "Dark purple-black exterior",
        "Cherry-like sweet flavor",
        "Compact size perfect for containers"
      ],
      growingConditions: {
        temperature: "22-32°C",
        humidity: "65-85%",
        sunlight: "Full sun 6-7 hours"
      },
      badge: "Rare"
    },
    {
      name: "Dragon Fruit Cactus",
      scientificName: "Hylocereus undatus",
      origin: "Vietnam",
      price: "₹5,000 - ₹8,000",
      image: "https://cdn.mos.cms.futurecdn.net/6UvKrXgh9VUoRoSj3bCB7A.jpg",
      description: "Exotic climbing cactus producing stunning white-fleshed dragon fruits with black seeds.",
      features: [
        "Night-blooming cereus flowers",
        "Self-pollinating variety",
        "Fruits within 2-3 years",
        "Unique architectural plant form"
      ],
      growingConditions: {
        temperature: "20-30°C",
        humidity: "50-70%",
        sunlight: "Partial shade 4-6 hours"
      },
      badge: "Exotic"
    }
  ];

  const handleWhatsAppClick = (plantName: string) => {
    const message = `Hi! I'm interested in the ${plantName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="plants" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-green-800 mb-6">
            Featured Exotic Plants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our crown jewels - rare imported varieties that represent the pinnacle of horticultural excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {featuredPlants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    {plant.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm">Rare</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-green-800 mb-2">{plant.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{plant.scientificName}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{plant.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Thermometer className="w-4 h-4 mr-2 text-red-500" />
                    <span>Temperature: {plant.growingConditions.temperature}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Droplets className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Humidity: {plant.growingConditions.humidity}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                    <span>{plant.growingConditions.sunlight}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Origin: {plant.origin}</span>
                    <span className="text-lg text-green-700">{plant.price}</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppClick(plant.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    💬 Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}