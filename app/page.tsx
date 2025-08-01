'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-green-800 mb-6">Welcome to Exotic Flora</h1>
          <p className="text-xl text-gray-600 mb-8">Your premium plant nursery and landscaping service</p>
          <a 
            href="https://wa.me/919211549170?text=Hi!%20I'm%20interested%20in%20your%20exotic%20plants.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us on WhatsApp
          </a>
        </section>
      </main>
    </div>
  );
}
