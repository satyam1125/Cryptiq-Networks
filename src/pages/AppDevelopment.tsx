import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { Smartphone, Monitor, Layers, Rocket, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AppDevelopment = () => {
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
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android apps with seamless performance and beautiful interfaces",
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Powerful web apps that work across all devices and browsers",
    },
    {
      icon: Layers,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere with modern cross-platform frameworks",
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Launch your product quickly with a minimum viable product approach",
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Firebase",
    "AWS",
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              App Development Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Transform your ideas into powerful mobile and web applications. We build scalable, 
              user-friendly apps that engage users and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-fade-in"
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

          {/* Technologies Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Technologies We Use
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-lg px-6 py-3 rounded-full border border-border hover:border-primary transition-all hover:scale-105"
                >
                  <span className="font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your vision and requirements" },
              { step: "02", title: "Design", desc: "Create intuitive user interfaces" },
              { step: "03", title: "Develop", desc: "Build with cutting-edge technology" },
              { step: "04", title: "Deploy", desc: "Launch and maintain your app" },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card/50 backdrop-blur-lg rounded-xl border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-3">{phase.step}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="app-development"
            title="Let's Build Your App"
            description="Share your app idea with us and we'll help bring it to life."
          />
        </div>
      </section>

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
    </div>
  );
};

export default AppDevelopment;
