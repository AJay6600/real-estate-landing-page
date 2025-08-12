import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import CompanyHighlights from '@/components/CompanyHighlights';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <HeroSection />
      <FeaturedProperties />
      <CompanyHighlights />
      <Testimonials />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
