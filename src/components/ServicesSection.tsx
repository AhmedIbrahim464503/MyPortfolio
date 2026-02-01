import { Bot, Globe, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Designing and building intelligent, task-oriented AI agents that automate complex workflows and enhance decision-making processes.",
    features: [
      "Custom LLM-powered agents",
      "RAG system implementation",
      "Conversational AI solutions",
      "Workflow automation",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building modern, responsive full-stack web applications using the MERN stack with focus on performance and user experience.",
    features: [
      "React & Node.js applications",
      "RESTful API development",
      "Database design & optimization",
      "Responsive UI/UX",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Scraping & Automation",
    description:
      "Creating efficient automation solutions and web scrapers that streamline repetitive tasks and extract valuable data.",
    features: [
      "Data extraction pipelines",
      "Task automation scripts",
      "Browser automation",
      "API integration",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional services to help bring your ideas to life with cutting-edge technology
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn hover:bg-primary/10 p-0"
                  asChild
                >
                  <a href="#contact" className="flex items-center gap-2">
                    <span className="text-primary">Get Started</span>
                    <ArrowRight
                      size={16}
                      className="text-primary group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
