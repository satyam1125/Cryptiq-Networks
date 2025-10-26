import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { FileText, ShoppingCart, Briefcase, GraduationCap, User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WebDevFromScratch = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setShowContactForm(true);
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Web Development from Scratch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Whether you need a simple landing page or a complex e-commerce platform, 
            we build custom websites tailored to your exact requirements.
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Landing Pages Card */}
            <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-10 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(328,100%,54%,0.2)] animate-fade-in">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Landing Pages
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Perfect for establishing your online presence
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground text-lg">
                  Ideal for:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Office & Business</p>
                      <p className="text-sm text-muted-foreground">Professional presence for your company</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Schools & Education</p>
                      <p className="text-sm text-muted-foreground">Showcase your institution's programs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Portfolio & Personal</p>
                      <p className="text-sm text-muted-foreground">Display your work and achievements</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => handleServiceSelect("Landing Page Development")}
              >
                Get Started with Landing Page
              </Button>
            </div>

            {/* E-commerce Card */}
            <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-10 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(328,100%,54%,0.2)] animate-fade-in">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  E-commerce Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Complete business solutions with integrated payment systems
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground text-lg">
                  Perfect for:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ShoppingCart className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Online Stores</p>
                      <p className="text-sm text-muted-foreground">Full-featured e-commerce platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Booking Systems</p>
                      <p className="text-sm text-muted-foreground">Appointment and reservation management</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Payment Integration</p>
                      <p className="text-sm text-muted-foreground">Secure payment gateway setup</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => handleServiceSelect("E-commerce Development")}
              >
                Get Started with E-commerce
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {showContactForm && (
        <section id="contact-form" className="py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <ContactForm
              defaultService="website-development"
              title={`Let's Build Your ${selectedService}`}
              description="Share your requirements and we'll create a custom solution for you."
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default WebDevFromScratch;
