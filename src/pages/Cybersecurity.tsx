import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { Shield, Lock, Search, AlertTriangle } from "lucide-react";

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: "Security Architecture",
      description: "Design and implement robust security frameworks to protect your digital infrastructure",
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description: "Identify vulnerabilities before attackers do with comprehensive security assessments",
    },
    {
      icon: Search,
      title: "Digital Forensics",
      description: "Investigate security incidents and recover critical digital evidence",
    },
    {
      icon: AlertTriangle,
      title: "Threat Analysis",
      description: "Continuous monitoring and analysis to detect and prevent cyber threats",
    },
  ];

  const protectionAreas = [
    "Network Security",
    "Application Security",
    "Data Protection",
    "Cloud Security",
    "Incident Response",
    "Compliance & Auditing",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Cyber Security Architecture & Forensics
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Protect your digital assets with comprehensive cybersecurity solutions. We provide 
            enterprise-grade security architecture and expert forensics services to keep your business safe.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Security Services
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

          {/* Protection Areas */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Areas of Protection
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {protectionAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-lg p-4 rounded-xl border border-border text-center hover:border-primary transition-all hover:scale-105"
                >
                  <span className="font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Security Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-3">24/7</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Monitoring</h4>
              <p className="text-muted-foreground">
                Round-the-clock security surveillance and threat detection
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-3">Expert</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Team</h4>
              <p className="text-muted-foreground">
                Certified security professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-3">Proven</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Track Record</h4>
              <p className="text-muted-foreground">
                Successfully protected hundreds of organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ContactForm
            defaultService="cybersecurity"
            title="Secure Your Business Today"
            description="Let us help protect your digital assets with our comprehensive cybersecurity solutions."
          />
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
