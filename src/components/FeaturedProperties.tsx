import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,850,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      status: "For Sale",
      featured: true
    },
    {
      id: 2,
      image: property2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$4,200,000",
      beds: 3,
      baths: 2,
      sqft: "2,800",
      status: "New Listing",
      featured: true
    },
    {
      id: 3,
      image: property3,
      title: "Oceanfront Condo",
      location: "Miami Beach, FL",
      price: "$1,650,000",
      beds: 2,
      baths: 2,
      sqft: "1,900",
      status: "For Sale",
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Featured <span className="text-gradient-gold">Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, 
            each offering exceptional value and luxury living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="property-card overflow-hidden border-0 shadow-lg"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      property.featured 
                        ? 'bg-gradient-gold text-navy' 
                        : 'bg-secondary text-white'
                    } font-semibold`}
                  >
                    {property.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    {property.price}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Bed size={16} className="mr-1" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-gold hover:opacity-90 text-navy font-semibold"
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                    asChild
                  >
                    <a href="tel:+1234567890">Call</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;