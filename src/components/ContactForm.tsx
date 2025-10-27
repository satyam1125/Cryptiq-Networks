import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormProps {
  defaultService?: string;
  title?: string;
  description?: string;
}

const ContactForm = ({ 
  defaultService = "", 
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you as soon as possible."
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: defaultService,
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-lg border-border">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
              Service *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a service</option>
              <option value="website-development">Website Development</option>
              <option value="app-development">App Development</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="seo-optimization">SEO Optimization</option>
              <option value="web-dev-from-scratch">Web Dev from Scratch</option>
              <option value="modify-website">Modify Existing Website</option>

              {/* New services */}
              <option value="ai-agents">AI Agents</option>
              <option value="graphic-logo-design">Graphic - Logo Designing</option>
              <option value="graphic-poster-businesscard">Graphic - Poster & Business Card</option>
              <option value="graphic-ui-ux">Graphic - UI / UX Designing</option>
              <option value="social-media">Social Media Management</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white font-medium py-3"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
