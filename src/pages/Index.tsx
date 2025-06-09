
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated purple gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-purple-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/25 to-purple-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-bl from-purple-400/20 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-tl from-purple-700/25 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Smaller accent blobs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-accent/15 to-purple-light/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-tl from-purple-600/20 to-purple-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeatureCards />
      </div>
    </div>
  );
};

export default Index;
