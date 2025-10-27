import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const LogoDesign = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
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

      <ParticleBackground />

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Logo Designing
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Professional logo design to establish a strong brand identity.
          </p>

          <p className="text-lg font-medium text-foreground mb-8">
            Pricing: 90% off — from 500 to 50₹
          </p>

          {/* Detailed explanation */}
          <div className="text-left space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground">Premium Tools & Workflow</h2>
            <p className="text-muted-foreground">
              We use industry-leading design tools and workflows — Figma for collaborative vector work,
              Adobe Illustrator for precision vector marks, and Adobe Photoshop for supporting visuals.
              Our process combines handcrafted design principles with selective AI-assisted tooling to speed
              iterations while preserving creative control. All logos are delivered as scalable vector files
              (SVG / EPS) plus high-resolution PNGs and JPGs for immediate use.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Expert Designers & Creative Minds</h2>
            <p className="text-muted-foreground">
              Our design team pairs senior brand strategists with fresh creative talent. Senior designers
              set the concept direction and ensure brand alignment, while newer designers bring modern trends
              and experimental thinking — this combination produces unique, market-ready identities that
              stand out while remaining timeless.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">How We Work — From Brief to Launch</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li><strong>Discovery:</strong> We start with a short workshop to capture brand values, audience and usage.</li>
              <li><strong>Concepting:</strong> Multiple distinct logo directions are sketched and refined.</li>
              <li><strong>Refinement:</strong> One direction is selected and polished with typography, color and layout systems.</li>
              <li><strong>Delivery:</strong> Final assets, style guidance, and export-ready files are handed off.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground">Quality & Revisions</h2>
            <p className="text-muted-foreground">
              Every logo goes through a quality checklist — scalability, visual balance, legibility across sizes,
              and color accessibility. Standard delivery includes 2 rounds of revisions; additional revisions
              available on request.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">What You Get</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>SVG, EPS, PNG (transparent), JPG</li>
              <li>Full color, single-color, and reversed variations</li>
              <li>Basic brand usage guidelines (colors, clearspace)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="graphic-logo-design"
            title="Logo Design Enquiry"
            description="Share your brand details and requirements; we'll get back with options and timelines."
          />
        </div>
      </section>
    </div>
  );
};

export default LogoDesign;