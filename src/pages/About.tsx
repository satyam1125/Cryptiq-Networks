import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import { Users, Target, Zap, Award, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const team = [
    {
      name: "Satyam Mishra",
      role: "Founder",
      bio: "Visionary leader with a passion for innovative web solutions and cybersecurity.",
      image: "satyam.jpg",
    },
    {
      name: "Samartha Arote",
      role: "Co-Founder",
      bio: "Tech expert specializing in full-stack development and system architecture.",
      image: "samartha.jpg",
    },
    {
      name: "Ajay Mishra",
      role: "Co-Founder",
      bio: "Operations specialist ensuring smooth project delivery and client satisfaction.",
      image: "ajay.png",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering excellence in every project we undertake.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Staying ahead with cutting-edge technologies and creative solutions.",
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "We never compromise on quality, security, or performance.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            About Cryptiq Networks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We are a forward-thinking web3-focused design and development agency dedicated to 
            transforming digital experiences through innovation, security, and excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-8">
              At Cryptiq Networks, we believe in the power of technology to transform businesses 
              and create meaningful digital experiences. Our mission is to provide world-class 
              web development, app creation, and cybersecurity services that empower our clients 
              to thrive in the digital age.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              We are committed to excellence, innovation, and building long-term partnerships 
              with our clients. Every project we undertake is driven by our passion for creating 
              solutions that not only meet but exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-lg rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 animate-fade-in text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The visionary minds behind Cryptiq Networks, driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(328,100%,54%,0.3)] animate-fade-in"
              >
                {/* Avatar */}
                <div className="bg-gradient-to-br from-primary to-accent p-12 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Growing Team Message */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Growing Team
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team is constantly expanding with talented professionals who share our passion 
              for innovation and excellence. We're building a diverse team of developers, designers, 
              and security experts to better serve our clients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Whether you're looking for cutting-edge web solutions, innovative apps, or robust 
            cybersecurity, we're here to help you succeed.
          </p>
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

export default About;
