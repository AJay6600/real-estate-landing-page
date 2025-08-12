import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCallButton = () => {
  return (
    <Button
      className="floating-button bg-gradient-gold hover:opacity-90 text-navy font-semibold shadow-lg md:hidden"
      size="lg"
      asChild
    >
      <a href="tel:+1234567890" className="flex items-center justify-center">
        <Phone size={20} />
        <span className="hidden sm:inline ml-2">Call Now</span>
      </a>
    </Button>
  );
};

export default FloatingCallButton;