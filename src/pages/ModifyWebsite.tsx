import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { Wrench, Sparkles, Rocket, Shield, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ModifyWebsite = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const features = [
    {
      icon: Wrench,
      title: "Feature Updates",
      description:
        "Add new functionality and modern features to your existing site",
    },
    {
      icon: Sparkles,
      title: "Design Refresh",
      description:
        "Modernize your website's look and feel with contemporary design",
    },
    {
      icon: Rocket,
      title: "Performance Boost",
      description:
        "Optimize speed and performance for better user experience",
    },
    {
      icon: Shield,
      title: "Security Updates",
      description:
        "Keep your website secure with the latest security patches",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      {showTop && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="fixed right-4 bottom-6 md:bottom-8 z-50 bg-background/70 backdrop-blur rounded-full shadow-lg text-foreground hover:text-primary"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Modify Your Existing Website
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Upgrade your current website with new features, modern design, and improved performance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300"
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
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="modify-website"
            title="Upgrade Your Website"
            description="Share your website URL and tell us what improvements you'd like to make."
          />
        </div>
      </section>
    </div>
  );
};

export default ModifyWebsite;
