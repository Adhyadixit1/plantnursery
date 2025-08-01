import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Leaf, Flower2, TreePine } from 'lucide-react';
import { useMemo } from 'react';

export default function PlantCatalogSection() {
  const whatsappNumber = "+919211549170";

  // Memoize plant data to prevent unnecessary re-renders
  const plantCategories = useMemo(() => ({
    fruits: [
      {
        name: "Miyazaki Mango",
        image: "https://seed2plant.in/cdn/shop/files/Japanese_Miyazaki_Mango_Grafted_Live_Plant.jpg?v=1717588681",
        price: "₹25,000 - ₹35,000",
        rarity: "Premium",
        origin: "Japan"
      },
      {
        name: "Cherry Black Mango",
        image: "https://m.media-amazon.com/images/I/81K7tLGTpsL._UF350,350_QL80_.jpg",
        price: "₹18,000 - ₹22,000",
        rarity: "Rare",
        origin: "Thailand"
      },
      {
        name: "Dragon Fruit Cactus",
        image: "https://cdn.mos.cms.futurecdn.net/6UvKrXgh9VUoRoSj3bCB7A.jpg",
        price: "₹5,000 - ₹8,000",
        rarity: "Exotic",
        origin: "Vietnam"
      },
      {
        name: "Japanese White Peach",
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹12,000 - ₹16,000",
        rarity: "Premium",
        origin: "Japan"
      },
      {
        name: "Passion Fruit Vine",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹3,000 - ₹5,000",
        rarity: "Available",
        origin: "Brazil"
      },
      {
        name: "Rambutan Tree",
        image: "https://images.unsplash.com/photo-1576089073624-9f0b737b4c13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹8,000 - ₹12,000",
        rarity: "Rare",
        origin: "Malaysia"
      }
    ],
    flowers: [
      {
        name: "Queen of the Night",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹12,000 - ₹18,000",
        rarity: "Premium",
        origin: "Central America"
      },
      {
        name: "Chocolate Cosmos",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹8,000 - ₹12,000",
        rarity: "Extinct in Wild",
        origin: "Mexico"
      },
      {
        name: "Ylang Ylang Tree",
        image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹15,000 - ₹25,000",
        rarity: "Premium",
        origin: "Philippines"
      },
      {
        name: "Ghost Orchid",
        image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹20,000 - ₹30,000",
        rarity: "Ultra Rare",
        origin: "Florida"
      },
      {
        name: "Blue Rose Bush",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹10,000 - ₹15,000",
        rarity: "Rare",
        origin: "Japan"
      },
      {
        name: "Tuberose Pearl",
        image: "https://images.unsplash.com/photo-1597149434012-ca832deeec4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹5,000 - ₹8,000",
        rarity: "Available",
        origin: "Mexico"
      }
    ],
    ornamental: [
      {
        name: "Japanese Maple Bloodgood",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹15,000 - ₹20,000",
        rarity: "Premium",
        origin: "Japan"
      },
      {
        name: "Purple Passion Plant",
        image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹2,000 - ₹3,000",
        rarity: "Available",
        origin: "Java"
      },
      {
        name: "Black Bamboo",
        image: "https://images.unsplash.com/photo-1542937307-6b3fe53da60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹8,000 - ₹12,000",
        rarity: "Rare",
        origin: "China"
      },
      {
        name: "Sensitive Plant",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹1,500 - ₹2,500",
        rarity: "Available",
        origin: "Brazil"
      },
      {
        name: "String of Hearts",
        image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹3,000 - ₹5,000",
        rarity: "Exotic",
        origin: "South Africa"
      },
      {
        name: "Prayer Plant",
        image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        price: "₹2,500 - ₹4,000",
        rarity: "Available",
        origin: "Brazil"
      }
    ]
  }), []);

  const getRarityColor = useMemo(() => (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'ultra rare':
      case 'extinct in wild':
        return 'bg-red-600 text-white';
      case 'premium':
        return 'bg-purple-600 text-white';
      case 'rare':
        return 'bg-orange-500 text-white';
      case 'exotic':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-green-500 text-white';
    }
  }, []);

  const handleWhatsAppClick = useMemo(() => (plantName: string, category: string) => {
    const message = `Hi! I'm interested in the ${plantName} from your ${category} collection. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, [whatsappNumber]);

  // Static PlantGrid component to prevent re-animations
  const PlantGrid = useMemo(() => ({ plants, category }: { plants: typeof plantCategories.fruits; category: string }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant, index) => (
        <div
          key={`${category}-${plant.name}-${index}`}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <Badge className={getRarityColor(plant.rarity)}>
                {plant.rarity}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 text-xs text-gray-600">
              {plant.origin}
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg text-green-800 mb-2">{plant.name}</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-green-600 font-medium">{plant.price}</span>
            </div>
            
            <Button 
              onClick={() => handleWhatsAppClick(plant.name, category)}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              💬 Enquire Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  ), [getRarityColor, handleWhatsAppClick]);

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>

      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-green-800 mb-6">
              Complete Plant Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our extensive collection of rare imported plants, exotic flowers, and unique ornamental varieties
            </p>
          </motion.div>

          <div className="w-full">
            <Tabs defaultValue="fruits" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="fruits" className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Fruit Plants
                </TabsTrigger>
                <TabsTrigger value="flowers" className="flex items-center gap-2">
                  <Flower2 className="w-4 h-4" />
                  Flowers
                </TabsTrigger>
                <TabsTrigger value="ornamental" className="flex items-center gap-2">
                  <TreePine className="w-4 h-4" />
                  Ornamental
                </TabsTrigger>
              </TabsList>

              <TabsContent value="fruits" className="mt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-green-800 mb-2">Exotic Fruit Plants</h3>
                  <p className="text-gray-600">Rare fruit-bearing plants from around the world</p>
                </div>
                <PlantGrid plants={plantCategories.fruits} category="fruit plants" />
              </TabsContent>

              <TabsContent value="flowers" className="mt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-green-800 mb-2">Rare Fragrant Flowers</h3>
                  <p className="text-gray-600">Extraordinary flowers with powerful, lasting fragrances</p>
                </div>
                <PlantGrid plants={plantCategories.flowers} category="fragrant flowers" />
              </TabsContent>

              <TabsContent value="ornamental" className="mt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-green-800 mb-2">Unique Ornamental Plants</h3>
                  <p className="text-gray-600">Distinctive plants that add character to any garden</p>
                </div>
                <PlantGrid plants={plantCategories.ornamental} category="ornamental plants" />
              </TabsContent>
            </Tabs>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 bg-green-100 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl text-green-800 mb-4">Don't See What You're Looking For?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We specialize in sourcing rare and exotic plants from around the world. 
              If you have a specific variety in mind, we can help you find it!
            </p>
            <Button 
              onClick={() => {
                const message = "Hi! I'm looking for a specific rare plant that I don't see in your catalog. Can you help me find it?";
                const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              🔍 Request Special Plant
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}