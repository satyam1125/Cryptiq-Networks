import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import ParticleBackground from "@/components/ParticleBackground";
import ContactForm from "@/components/ContactForm";
import { Globe, Smartphone, Shield, MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Back-to-top button */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated particle background */}
        <div className="absolute inset-0 -z-10">
          <ParticleBackground />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
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
              className="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
              style={{
                textShadow: "0 10px 30px rgba(0, 149, 255, 0.3), 0 0 60px rgba(0, 149, 255, 0.2)",
                filter: "drop-shadow(0 0 20px rgba(0, 149, 255, 0.4))"
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
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" asChild className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
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

            {/* New services: AI Agents & Graphic Designing */}
            <ServiceCard
              icon={MapPin}
              title="AI Agents"
              description="Custom AI agent solutions — automation, chatbots, autonomous agents and integrations."
              link="/services/ai-agents"
            />
            <ServiceCard
              icon={Mail}
              title="Graphic Designing"
              description="Logo, poster, business card and UI/UX design services to elevate your brand."
              link="/services/graphic-designing"
            />

            <ServiceCard
              icon={Users}
              title="Social Media Management"
              description="Daily posting, follower growth and engagement with a dedicated social team."
              link="/services/social-media"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Office Address Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <ParticleBackground />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm
                title=""
                description=""
              />
            </div>

            {/* Office Addresses */}
            <div className="space-y-6">
              {/* Mumbai Office */}
              <Card className="bg-card/50 backdrop-blur-lg border-border hover:border-blue-500 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Mumbai Office</h3>
                      <p className="text-muted-foreground text-sm">
                        Ulwe,<br />
                        Belapur,<br />
                         Navi Mumbai, Maharashtra 410206
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <a href="tel:+912212345678" className="text-sm text-muted-foreground hover:text-blue-500">
                        +91 7400131613
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <a href="mailto:mumbai@cryptiqnetworks.com" className="text-sm text-muted-foreground hover:text-blue-500">
                        cryptiqnetworks@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prayagraj Office */}
              <Card className="bg-card/50 backdrop-blur-lg border-border hover:border-blue-500 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Prayagraj Office</h3>
                      <p className="text-muted-foreground text-sm">
                        Hanuman Mandir,<br />
                        Civil Lines,<br />
                        Prayagraj, Uttar Pradesh 211019
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <a href="tel:+915322123456" className="text-sm text-muted-foreground hover:text-blue-500">
                        +91 6392769496
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <a href="mailto:prayagraj@cryptiqnetworks.com" className="text-sm text-muted-foreground hover:text-blue-500">
                        cryptiqnetworks@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-black mb-4">CRYPTIQ NETWORKS</h3>
              <p className="text-white/80 mb-4">
                Design, Deploy & Defend - Your trusted partner in digital transformation.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/cryptiq_network?igsh=MWNpbTJ5M3Zud29wbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/satyamcyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/website-development" className="text-white/80 hover:text-white transition-colors">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/social-media" className="text-white/80 hover:text-white transition-colors">
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link to="/services/app-development" className="text-white/80 hover:text-white transition-colors">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/cybersecurity" className="text-white/80 hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </li>

                {/* New links */}
                <li>
                  <Link to="/services/ai-agents" className="text-white/80 hover:text-white transition-colors">
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link to="/services/graphic-designing" className="text-white/80 hover:text-white transition-colors">
                    Graphic Designing
                  </Link>
                </li>

                <li>
                  <Link to="/our-work" className="text-white/80 hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:cryptiqnetworks@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    cryptiqnetworks@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+912212345678" className="text-white/80 hover:text-white transition-colors">
                    +91 7400131613
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-white/80">
                    Mumbai & Prayagraj, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Cryptiq Networks. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
