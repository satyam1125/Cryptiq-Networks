import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink } from "lucide-react";

const OurWork = () => {
  const projects = [
    {
      name: "trilokigroup.com",
      title: "Triloki Group",
      description: "A comprehensive corporate website showcasing business services and portfolio. Built with modern design principles and optimized for performance.",
      category: "Corporate Website",
      technologies: ["React", "Tailwind CSS", "SEO Optimization"],
      link: "https://trilokigroup.com",
    },
    {
      name: "mahiraoverseas.com",
      title: "Mahira Overseas",
      description: "Professional e-commerce platform for international trade. Features include product catalogs, inquiry forms, and multilingual support.",
      category: "E-commerce",
      technologies: ["Next.js", "Payment Integration", "Multi-language"],
      link: "https://mahiraoverseas.com",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Our Previous Work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our portfolio of successful projects. Each website represents our commitment 
            to excellence, innovation, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(328,100%,54%,0.3)] animate-fade-in"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/80 mb-1">{project.category}</div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Domain Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent font-medium group-hover:translate-x-2 transition-transform"
                  >
                    Visit {project.name}
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
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-lg text-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-lg text-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg text-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Showcase Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful projects. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            title="Start Your Project Today"
            description="Tell us about your vision and let's make it a reality."
          />
        </div>
      </section>
    </div>
  );
};

export default OurWork;
