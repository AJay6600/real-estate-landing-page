import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToProperties = () => {
    document.getElementById('properties')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="parallax-bg w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${image})`,
                transform: `translateY(${index === currentImageIndex ? '0' : '20px'})`,
                transition: 'transform 2s ease-out'
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className={`relative z-10 flex items-center justify-center h-full text-center text-white px-4 ${
        isLoaded ? 'hero-enter' : 'opacity-0'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            isLoaded ? 'hero-text' : 'opacity-0'
          }`}>
            <span className="text-gradient-gold">Luxury</span> Real Estate
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light">
              Redefined
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200 ${
            isLoaded ? 'hero-text' : 'opacity-0'
          }`} style={{ animationDelay: '0.6s' }}>
            Discover premium properties and investment opportunities with Eumentis, 
            your trusted partner in luxury real estate.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isLoaded ? 'hero-text' : 'opacity-0'
          }`} style={{ animationDelay: '0.9s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:opacity-90 text-navy font-semibold px-8 py-3 text-lg"
              onClick={scrollToProperties}
            >
              View Properties
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg"
              asChild
            >
              <a href="tel:+1234567890">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown 
          size={32} 
          className="cursor-pointer hover:text-primary transition-colors duration-200"
          onClick={scrollToProperties}
        />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;