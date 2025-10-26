import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { RefreshCw, Zap, Palette, Settings } from "lucide-react";

const ModifyWebsite = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Redesign & Modernization",
      description: "Update your website's look and feel with contemporary design trends",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up load times and improve overall site performance",
    },
    {
      icon: Palette,
      title: "UI/UX Enhancement",
      description: "Improve user experience with intuitive navigation and better layouts",
    },
    {
      icon: Settings,
      title: "Feature Addition",
      description: "Add new functionality and integrate modern features to your existing site",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Modify & Enhance Your Website
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Breathe new life into your existing website. Whether you need a complete redesign, 
            performance improvements, or new features, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Modification Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-fade-in"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Modify Your Existing Website?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Cost-Effective</div>
                <p className="text-muted-foreground">
                  More affordable than building from scratch
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Faster</div>
                <p className="text-muted-foreground">
                  Quick turnaround for updates and improvements
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">SEO Friendly</div>
                <p className="text-muted-foreground">
                  Maintain your existing rankings and authority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto">
          <ContactForm
            defaultService="website-development"
            title="Tell Us About Your Website"
            description="Share details about what you'd like to modify or improve on your existing website."
          />
        </div>
      </section>
    </div>
  );
};

export default ModifyWebsite;
