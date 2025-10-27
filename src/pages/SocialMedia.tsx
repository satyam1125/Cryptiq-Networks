import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { Users } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      <ParticleBackground />

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <Users className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Social Media Management
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We manage your social presence, create daily posts, grow followers and boost engagement with a dedicated team.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">How We Work</h2>
          <p className="text-muted-foreground">
            We craft a tailored social strategy, publish daily high-quality posts, run targeted engagement campaigns,
            and analyze performance to continuously optimize. Content mixes include feed posts, short-form videos,
            stories and carousel posts depending on platform and goals.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Daily Posting & Engagement</h2>
          <p className="text-muted-foreground">
            Our content calendar ensures consistent daily posting. We proactively engage with audiences: respond to comments,
            participate in relevant conversations, and run community-building activities to increase organic reach and followers.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Dedicated Team</h2>
          <p className="text-muted-foreground">
            You get a dedicated social manager, content creator, and performance analyst. The team coordinates with your brand
            to maintain voice, creative direction, and campaign goals.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Reporting & Growth</h2>
          <p className="text-muted-foreground">
            We deliver regular analytics reports (engagement, follower growth, reach) and iterate campaigns to maximize ROI.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="social-media"
            title="Social Media Enquiry"
            description="Tell us about your current social presence and goals; our team will propose a plan."
          />
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;