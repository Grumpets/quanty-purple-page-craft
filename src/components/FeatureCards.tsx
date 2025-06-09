
import { BarChart3, Cpu, Zap } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-accent" />,
      title: "Advanced Analytics",
      description: "Seamlessly analyze complex datasets with our cutting-edge visualization tools"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-accent" />,
      title: "Smart Processing",
      description: "Automate data workflows and insights with intelligent machine learning algorithms"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-accent" />,
      title: "Real-time Intelligence",
      description: "Get instant insights with lightning-fast processing and live data streaming"
    }
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card-bg border border-purple-medium/30 rounded-xl p-8 hover:border-purple-light/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
