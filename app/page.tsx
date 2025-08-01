import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false });
const FeaturedPlantsSection = dynamic(() => import('@/components/FeaturedPlantsSection'), { ssr: false });
const PlantFeaturesSection = dynamic(() => import('@/components/PlantFeaturesSection'), { ssr: false });
const FlowersSection = dynamic(() => import('@/components/FlowersSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: false });
const PlantCatalogSection = dynamic(() => import('@/components/PlantCatalogSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false });

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturedPlantsSection />
      <PlantFeaturesSection />
      <FlowersSection />
      <TestimonialsSection />
      <PlantCatalogSection />
      <ContactSection />
    </div>
  );
}
