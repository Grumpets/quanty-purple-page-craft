
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center relative z-10">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 gradient-purple-light rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">Q</span>
        </div>
        <span className="text-text-primary font-bold text-xl">Quanty</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Analytics</a>
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Insights</a>
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Quanty Pro</a>
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Resources</a>
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Support</a>
      </nav>
      
      <Button className="gradient-purple-light text-white hover:opacity-90 transition-opacity px-6">
        Get Access
      </Button>
    </header>
  );
};

export default Header;
