import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <Button
      className="floating-button bg-gradient-gold hover:opacity-90 text-navy font-semibold shadow-lg md:hidden rounded"
      size="lg"
      asChild
    >
      <a href="tel:+1234567890" className="flex items-center justify-center">
        <Phone size={20} />
      </a>
    </Button>
  );
};

export default FloatingCallButton;
