import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Search, Code, Edit } from "lucide-react";

const WebsiteDevelopment = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our expert SEO strategies.",
      link: "/services/website-development/seo-optimization",
    },
    {
      icon: Code,
      title: "Web Development from Scratch",
      description: "Custom-built websites tailored to your specific needs, from landing pages to e-commerce.",
      link: "/services/website-development/web-dev-from-scratch",
    },
    {
      icon: Edit,
      title: "Modify Existing Website",
      description: "Enhance and update your current website with modern features and improved performance.",
      link: "/services/website-development/modify-website",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Website Development Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            From concept to launch, we create stunning, high-performance websites that drive results. 
            Choose the service that best fits your needs.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group"
              >
                <div className="h-full bg-white/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_40px_hsl(328,100%,54%,0.3)] hover:scale-105 animate-fade-in">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
