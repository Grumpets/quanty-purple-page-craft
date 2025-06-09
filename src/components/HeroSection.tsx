
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 relative">
      <div className="mb-6 animate-fade-in flex items-center justify-center gap-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
        <span className="text-green-400 font-medium">Quanty: Online</span>
      </div>
      
      <div className="max-w-5xl mx-auto animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-text-primary">Take Control with</span>
          <br />
          <span className="text-gradient">Quanty</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          A robust and intelligent bot designed for effortless server management — featuring
          <span className="text-purple-accent"> ER:LC Integration</span>, <span className="text-purple-accent">Discord Integration</span>, <span className="text-purple-accent">Moderation</span>, <span className="text-purple-accent">Automations</span> and so much more!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gradient-purple-light text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
            Add to Server
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
