import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { TrendingUp, BarChart, Target, Zap } from "lucide-react";

const SEOOptimization = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Keyword Research",
      description: "In-depth analysis to identify high-impact keywords for your business",
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track your rankings and measure success with comprehensive reports",
    },
    {
      icon: Target,
      title: "On-Page Optimization",
      description: "Technical SEO improvements to boost your search engine visibility",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Strategic implementation for quick and sustainable ranking improvements",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            SEO Optimization Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Elevate your online presence and dominate search rankings with our proven SEO strategies. 
            We help businesses increase organic traffic and convert visitors into customers.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-fade-in"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto">
          <ContactForm
            defaultService="website-development"
            title="Ready to Boost Your Rankings?"
            description="Tell us about your SEO goals and we'll create a custom strategy for your business."
          />
        </div>
      </section>
    </div>
  );
};

export default SEOOptimization;
