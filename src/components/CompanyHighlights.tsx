import { Award, Users, Home, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CompanyHighlights = () => {
  const highlights = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in luxury real estate services",
      stat: "50+ Awards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success",
      stat: "25+ Agents"
    },
    {
      icon: Home,
      title: "Properties Sold",
      description: "Successfully closed luxury property transactions",
      stat: "500+ Sales"
    },
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "Consistent portfolio value appreciation for clients",
      stat: "15% ROI"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Why Choose <span className="text-gradient-gold">Eumentis</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With decades of combined experience and a proven track record, 
            we deliver exceptional results in luxury real estate investments and sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="bg-gradient-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <highlight.icon size={28} className="text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {highlight.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;