import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import { Link } from "react-router-dom";
import { Image, Layout, PenTool } from "lucide-react";

const GraphicDesigning = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      <ParticleBackground />

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Graphic Designing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Professional graphic design services: logo design, poster & business card design, and UI/UX design.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/graphic-designing/logo-designing" className="group">
              <div className="bg-card/50 p-8 rounded-2xl border border-border hover:border-primary text-center">
                <Image className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Logo Designing</h3>
                <p className="text-muted-foreground">Brand logos, marks and identity systems.</p>

                {/* Pricing */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">500</span>
                  <span className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold px-3 py-1 rounded-full">
                    50irs
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/services/graphic-designing/poster-businesscard" className="group">
              <div className="bg-card/50 p-8 rounded-2xl border border-border hover:border-primary text-center">
                <Layout className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Poster & Business Card</h3>
                <p className="text-muted-foreground">Print-ready posters and business card designs.</p>

                {/* Pricing */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">500</span>
                  <span className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold px-3 py-1 rounded-full">
                    50irs
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/services/graphic-designing/ui-ux-designing" className="group">
              <div className="bg-card/50 p-8 rounded-2xl border border-border hover:border-primary text-center">
                <PenTool className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">UI / UX Designing</h3>
                <p className="text-muted-foreground">User-centered UI/UX design for web & mobile.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesigning;