import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";

const UIUXDesign = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      <ParticleBackground />

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            UI / UX Designing
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            We provide user-centered UI and UX design services for web and mobile applications.
          </p>
        </div>
      </section>

      {/* Detailed explanation */}
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Premium Tools & Prototyping</h2>
          <p className="text-muted-foreground">
            Our UX workflow uses Figma for collaborative design and prototyping, combined with usability testing
            tools and analytics to validate decisions. We produce interactive prototypes, design systems, and
            component libraries that developers can implement directly.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Research-Driven Design</h2>
          <p className="text-muted-foreground">
            We start with user research and stakeholder interviews to define personas and journeys. Wireframes and
            low-fidelity prototypes are iterated quickly, then elevated to high-fidelity visuals once core flows
            are validated.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Expert Designers & Collaboration</h2>
          <p className="text-muted-foreground">
            Senior UX leads craft information architecture and interaction patterns while UI designers focus on
            pixel-perfect visual language and accessibility. We emphasize handoffs with clean specs, tokenized
            colors and spacing, and ready-to-use component libraries to reduce development friction.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Deliverables & Process</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>User research summary & personas</li>
            <li>Wireframes and clickable prototypes</li>
            <li>High-fidelity UI screens with responsive variants</li>
            <li>Design system and developer-ready assets (Figma links, SVGs, tokens)</li>
            <li>Usability test reports and iteration plan</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">How to Get Started</h2>
          <p className="text-muted-foreground">
            Share your product goals and existing materials via the contact form below. We’ll propose a scoped plan
            with timelines, phases, and milestones.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="graphic-ui-ux"
            title="UI / UX Enquiry"
            description="Describe your project and goals; our designers will propose a tailored UX/UI approach."
          />
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;