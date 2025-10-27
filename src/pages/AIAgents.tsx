import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";
import { MessageCircle, Cpu, Zap } from "lucide-react";

const AIAgents = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar hideMenu={true} />
      <ParticleBackground />

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            AI Agents
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We provide all types of AI agent solutions — conversational agents, automation bots,
            task-specific agents, autonomous workflows, and integrations with your systems.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 p-8 rounded-2xl border border-border text-center">
              <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversational Agents</h3>
              <p className="text-muted-foreground">Chatbots, virtual assistants and domain-specific conversational solutions.</p>
            </div>
            <div className="bg-card/50 p-8 rounded-2xl border border-border text-center">
              <Cpu className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Automation Agents</h3>
              <p className="text-muted-foreground">Process automation, scheduled agents and system orchestration.</p>
            </div>
            <div className="bg-card/50 p-8 rounded-2xl border border-border text-center">
              <Zap className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Integrations</h3>
              <p className="text-muted-foreground">Connect agents to APIs, CRMs, databases and third-party services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <ContactForm
            defaultService="ai-agents"
            title="AI Agent Enquiry"
            description="Tell us about the AI agent you need and we'll propose a custom solution."
          />
        </div>
      </section>
    </div>
  );
};

export default AIAgents;