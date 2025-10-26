import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import ParticleBackground from "@/components/ParticleBackground";
import { Globe, Smartphone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated particle background */}
        <div className="absolute inset-0 -z-10">
          <ParticleBackground />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto text-center max-w-5xl">
          {/* 3D Animated Company Name */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{
                textShadow: "0 10px 30px rgba(255, 20, 147, 0.3), 0 0 60px rgba(255, 20, 147, 0.2)",
                filter: "drop-shadow(0 0 20px rgba(255, 20, 147, 0.4))"
              }}
              animate={{
                rotateX: [0, 5, 0, -5, 0],
                rotateY: [0, 3, 0, -3, 0],
                scale: [1, 1.02, 1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              CRYPTIQ NETWORKS
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Design, Deploy & Defend
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Your trusted partner in web development, app creation, and cybersecurity solutions. 
            We bring your digital vision to life with cutting-edge technology and unmatched expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/our-work#contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/our-work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon={Globe}
              title="Website Development"
              description="From stunning landing pages to complex e-commerce platforms, we create websites that captivate and convert."
              link="/services/website-development"
            />
            <ServiceCard
              icon={Smartphone}
              title="App Development"
              description="Transform your ideas into powerful mobile and web applications with seamless user experiences."
              link="/services/app-development"
            />
            <ServiceCard
              icon={Shield}
              title="Cyber Security"
              description="Protect your digital assets with our comprehensive cybersecurity architecture and forensics services."
              link="/services/cybersecurity"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can help bring your vision to life
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link to="/our-work#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
