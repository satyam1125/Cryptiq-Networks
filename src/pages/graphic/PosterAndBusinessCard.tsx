import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const PosterAndBusinessCard = () => {
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
            Poster & Business Card Designing
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Print-ready poster designs and professional business cards tailored to your brand.
          </p>

          <p className="text-lg font-medium text-foreground mb-8">
            Pricing: 90% off — from 500 to 50₹
          </p>

          {/* Detailed explanation */}
          <div className="text-left space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground">Design Tools & Print-Ready Standards</h2>
            <p className="text-muted-foreground">
              We design posters and business cards using Adobe Illustrator and InDesign to ensure print-quality
              outcomes. Files include proper bleeds, crop marks, and CMYK color profiles. Final deliverables are
              provided in print-ready PDF, plus editable source files on request.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Creative Team & Craft</h2>
            <p className="text-muted-foreground">
              Our designers combine strategic layout composition with typographic expertise and strong visual hierarchy.
              Senior designers oversee concept and print specifications while creative juniors produce rapid iterations,
              ensuring both creative diversity and technical accuracy.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Poster & Card Workflow</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li><strong>Briefing:</strong> Size, audience, print method and messaging are confirmed.</li>
              <li><strong>Concepts:</strong> Multiple layouts and visual treatments are proposed.</li>
              <li><strong>Proofing:</strong> We supply a digital proof; two rounds of revisions are included.</li>
              <li><strong>Final Files:</strong> Print-ready PDFs and web-ready JPEG/PNG exports are delivered.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground">Why Choose Our Prints</h2>
            <p className="text-muted-foreground">
              Attention to print constraints (bleed, safe-zone), high-resolution artwork, and color-consistent exports
              keeps your printed materials looking as good as the designs on screen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="graphic-poster-businesscard"
            title="Poster / Business Card Enquiry"
            description="Tell us the design type, sizes and any reference ideas; we'll respond with pricing and timelines."
          />
        </div>
      </section>
    </div>
  );
};

export default PosterAndBusinessCard;