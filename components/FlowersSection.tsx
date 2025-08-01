import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Flower, Clock, Palette, Wind, Star } from 'lucide-react';

export default function FlowersSection() {
  const whatsappNumber = "+919211549170";

  const rareFlowers = [
    {
      name: "Queen of the Night Orchid",
      scientificName: "Epiphyllum oxypetalum",
      origin: "Central America",
      price: "₹12,000 - ₹18,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fragrance: "Intense vanilla and jasmine notes",
      bloomTime: "Night blooming, once a year",
      description: "A legendary orchid that blooms only one night per year, releasing an intoxicating fragrance that can perfume an entire garden.",
      features: [
        "Blooms only at night once yearly",
        "Intense vanilla-jasmine fragrance",
        "Large white trumpet-shaped flowers",
        "Can live for decades with proper care"
      ],
      fragranceProfile: {
        intensity: "Very Strong",
        duration: "8-12 hours",
        range: "Up to 50 meters",
        notes: ["Vanilla", "Jasmine", "Sweet honey"]
      }
    },
    {
      name: "Chocolate Cosmos",
      scientificName: "Cosmos atrosanguineus",
      origin: "Mexico",
      price: "₹8,000 - ₹12,000",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fragrance: "Rich chocolate and vanilla",
      bloomTime: "Summer to autumn",
      description: "An extinct-in-the-wild flower that smells exactly like dark chocolate, making it one of the most unique flowers in the world.",
      features: [
        "Extinct in wild, propagated only",
        "Genuine chocolate scent",
        "Dark burgundy velvety petals",
        "Long-lasting blooms"
      ],
      fragranceProfile: {
        intensity: "Strong",
        duration: "All day",
        range: "10-15 meters",
        notes: ["Dark chocolate", "Vanilla", "Cocoa butter"]
      }
    },
    {
      name: "Ylang Ylang",
      scientificName: "Cananga odorata",
      origin: "Philippines",
      price: "₹15,000 - ₹25,000",
      image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fragrance: "Exotic floral with sweet undertones",
      bloomTime: "Year-round in tropical climate",
      description: "The legendary perfume tree whose flowers are used in the world's most expensive fragrances. Its scent is said to reduce stress and promote relaxation.",
      features: [
        "Used in luxury perfumes",
        "Therapeutic aromatherapy properties",
        "Yellow star-shaped flowers",
        "Fast-growing evergreen tree"
      ],
      fragranceProfile: {
        intensity: "Very Strong",
        duration: "24+ hours",
        range: "Up to 100 meters",
        notes: ["Exotic floral", "Sweet custard", "Spicy undertones"]
      }
    },
    {
      name: "Tuberose 'The Pearl'",
      scientificName: "Polianthes tuberosa",
      origin: "Mexico",
      price: "₹5,000 - ₹8,000",
      image: "https://images.unsplash.com/photo-1597149434012-ca832deeec4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fragrance: "Intense white floral with narcotic quality",
      bloomTime: "Summer evenings",
      description: "Known as the 'Mistress of the Night', this flower releases one of the most powerful fragrances in the plant kingdom, strongest after sunset.",
      features: [
        "Narcotic-level fragrance intensity",
        "White double flowers",
        "Strongest scent at night",
        "Traditional perfumery ingredient"
      ],
      fragranceProfile: {
        intensity: "Extreme",
        duration: "12+ hours",
        range: "Up to 75 meters",
        notes: ["White floral", "Narcotic sweetness", "Honey undertones"]
      }
    }
  ];

  const handleWhatsAppClick = (flowerName: string) => {
    const message = `Hi! I'm interested in the ${flowerName}. Can you provide more details about its fragrance and care?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity.toLowerCase()) {
      case 'extreme': return 'bg-red-100 text-red-700';
      case 'very strong': return 'bg-orange-100 text-orange-700';
      case 'strong': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-green-100 text-green-700';
    }
  };

  return (
    <section id="flowers" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Flower className="w-16 h-16 text-pink-600" />
          </div>
          <h2 className="text-4xl md:text-5xl text-purple-800 mb-6">
            Rare Fragrant Flowers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover extraordinary flowers with powerful, lasting fragrances that can transform your garden into a sensory paradise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {rareFlowers.map((flower, index) => (
            <motion.div
              key={flower.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <ImageWithFallback
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      Rare Fragrance
                    </Badge>
                  </div>
                </div>

                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl text-purple-800 mb-2">{flower.name}</h3>
                  <p className="text-sm text-gray-500 italic mb-3">{flower.scientificName}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Wind className="w-4 h-4 mr-2 text-pink-500" />
                      <span className="text-gray-600">{flower.fragrance}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-gray-600">{flower.bloomTime}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {flower.description}
                  </p>

                  {/* Fragrance Profile */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
                    <h4 className="text-sm text-purple-800 mb-3 flex items-center">
                      <Palette className="w-4 h-4 mr-1" />
                      Fragrance Profile
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Intensity:</span>
                        <Badge size="sm" className={`ml-1 ${getIntensityColor(flower.fragranceProfile.intensity)}`}>
                          {flower.fragranceProfile.intensity}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <span className="ml-1 text-purple-700">{flower.fragranceProfile.duration}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">Range:</span>
                        <span className="ml-1 text-purple-700">{flower.fragranceProfile.range}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-gray-500 text-xs">Notes:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {flower.fragranceProfile.notes.map((note, i) => (
                          <Badge key={i} variant="outline" size="sm" className="text-xs">
                            {note}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">From {flower.origin}</span>
                    <span className="text-lg text-purple-700">{flower.price}</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppClick(flower.name)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    🌸 Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fragrance Care Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl text-purple-800 mb-2">Maximizing Fragrance</h3>
            <p className="text-gray-600">
              Expert tips to enhance and maintain the powerful fragrances of your rare flowers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="text-purple-800 mb-2">Evening Care</h4>
              <p className="text-sm text-gray-600">
                Most fragrant flowers release stronger scents in the evening. Water them in late afternoon for best results.
              </p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <h4 className="text-purple-800 mb-2">Humidity Control</h4>
              <p className="text-sm text-gray-600">
                Maintain 60-70% humidity around fragrant plants to enhance scent production and longevity.
              </p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="text-purple-800 mb-2">Strategic Placement</h4>
              <p className="text-sm text-gray-600">
                Place near seating areas and windows where air circulation can carry the fragrance throughout your space.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}