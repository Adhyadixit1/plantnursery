import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote, ThumbsUp, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      plant: "Miyazaki Mango",
      review: "I purchased a Miyazaki mango sapling 3 years ago and it finally fruited this season! The taste is absolutely incredible - nothing like any mango I've ever had. The sweetness is unreal and the texture is like butter. Worth every penny of the ₹30,000 I paid. The team provided excellent care instructions and follow-up support.",
      story: "As a fruit enthusiast, this has been a dream come true. My neighbors can't believe the quality of mangoes growing in my Mumbai terrace garden!"
    },
    {
      name: "Priya Sharma",
      location: "Delhi NCR",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b732?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      plant: "Queen of the Night Orchid",
      review: "The Queen of the Night orchid I bought bloomed for the first time last month and the experience was magical! The fragrance filled my entire house and lasted the whole night. My family and I stayed awake just to witness this rare beauty. The customer service was exceptional - they even called to remind me about the expected bloom time.",
      story: "It was like having a natural perfume factory in my garden. The scent was so intoxicating that even my neighbors came to see what was happening!"
    },
    {
      name: "Dr. Mehta",
      location: "Pune, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      plant: "Chocolate Cosmos",
      review: "Being a botanist, I was skeptical about the chocolate fragrance claim, but I was completely blown away! The scent is genuinely chocolate-like, and the flowers are stunning. It's become the centerpiece of my research garden. Students are always amazed when they smell it. The plant care documentation provided was scientifically accurate and very helpful.",
      story: "This extinct-in-the-wild species is now thriving in my garden, contributing to conservation while providing daily joy."
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      plant: "Dragon Fruit Cactus",
      review: "My dragon fruit plant has been producing beautiful fruits for the past year. The taste is so much better than store-bought ones - fresh, sweet, and the texture is perfect. The plant itself is architectural and adds a unique element to my garden design. Great investment for both aesthetics and taste!",
      story: "Friends are always surprised to see dragon fruits growing in Gujarat! It's become a conversation starter at every gathering."
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      plant: "Ylang Ylang Tree",
      review: "The Ylang Ylang tree has transformed my garden into a paradise. The fragrance is therapeutic - I literally feel more relaxed when I'm near it. My wife uses the flowers to make natural perfume oil. Despite Rajasthan's harsh climate, it's thriving with the care guidance provided. Absolutely recommended for anyone who loves natural fragrances.",
      story: "Our evening tea sessions in the garden have become a daily ritual, thanks to this amazing fragrant tree."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: <Heart className="w-6 h-6 text-red-500" /> },
    { number: "95%", label: "Plant Survival Rate", icon: <ThumbsUp className="w-6 h-6 text-green-500" /> },
    { number: "50+", label: "Rare Varieties", icon: <Star className="w-6 h-6 text-yellow-500" /> }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Stories from Our Garden Family
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Real experiences from customers who have transformed their gardens with our exotic plants
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
              <div className="text-green-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg">{testimonial.name}</h4>
                  <p className="text-green-200 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex mr-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-green-200 text-sm">• {testimonial.plant}</span>
              </div>

              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-green-300 opacity-50 absolute -top-2 -left-2" />
                <p className="text-green-50 relative pl-6 italic">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-800/20 rounded-r-lg">
                <p className="text-green-100 text-sm">
                  💚 <strong>Customer Story:</strong> {testimonial.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          <h3 className="text-2xl md:text-3xl mb-4">
            Ready to Start Your Own Success Story?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their gardens with our exotic plants. 
            Every plant comes with detailed care instructions and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const message = "Hi! I'd like to know more about your exotic plants and success stories.";
                const whatsappUrl = `https://wa.me/919211549170?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              💬 Share Your Dream Garden
            </button>
            <button 
              onClick={() => document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg transition-colors"
            >
              🌿 Browse Collection
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}