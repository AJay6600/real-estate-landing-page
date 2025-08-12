import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Property Investor",
      content: "Eumentis helped me find the perfect investment property. Their market knowledge and professional service exceeded my expectations. The ROI has been incredible!",
      rating: 5,
      location: "Beverly Hills, CA"
    },
    {
      name: "David Rodriguez",
      role: "First-time Buyer",
      content: "As a first-time luxury home buyer, I was nervous about the process. The Eumentis team guided me every step of the way with patience and expertise.",
      rating: 5,
      location: "Manhattan, NY"
    },
    {
      name: "Emily Chen",
      role: "Real Estate Developer",
      content: "Working with Eumentis on multiple projects has been a game-changer. Their attention to detail and commitment to excellence is unmatched in the industry.",
      rating: 5,
      location: "Miami Beach, FL"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Client <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience 
            working with Eumentis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      className="text-primary fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <div>
                    <h4 className="text-xl font-semibold text-navy">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-navy text-navy hover:bg-navy hover:text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-navy text-navy hover:bg-navy hover:text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight size={20} />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;