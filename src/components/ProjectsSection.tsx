import { ExternalLink, Github, Bot, FileText, Map, ShoppingBag, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AdmitFlow",
    icon: Bot,
    description:
      "A comprehensive university admission platform featuring an AI-powered chatbot that helps students navigate the admission process seamlessly.",
    problem: "Complex admission processes overwhelm students",
    solution: "Integrated chatbot provides instant, accurate guidance",
    tech: ["Python", "LangChain", "React", "MongoDB"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "SmartSubmit",
    icon: FileText,
    description:
      "Intelligent automation system that streamlines the lab report submission process, saving time and reducing manual errors.",
    problem: "Manual lab report submissions are time-consuming",
    solution: "Automated workflow handles formatting and submission",
    tech: ["Python", "Selenium", "Automation"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Congestion Prediction System",
    icon: Map,
    description:
      "AI-based system for predicting traffic congestion and optimizing emergency resource allocation in urban areas.",
    problem: "Inefficient emergency response due to traffic",
    solution: "ML-powered predictions enable proactive resource placement",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "NearBuy",
    icon: ShoppingBag,
    description:
      "Full-stack e-commerce platform connecting users with nearby stores, enabling local commerce discovery and shopping.",
    problem: "Local businesses struggle with online visibility",
    solution: "Location-based platform bridges consumers and local shops",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cash Flow Minimizer",
    icon: Coins,
    description:
      "DSA-based optimization tool that minimizes cash flow transactions in group expenses using graph algorithms.",
    problem: "Complex group expense settlements",
    solution: "Graph algorithms optimize and reduce transactions",
    tech: ["C++", "Graph Algorithms", "DSA"],
    color: "from-yellow-500 to-orange-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in AI/ML, automation, and full-stack development
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Project Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.color}`}
                />
                
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.color} opacity-80`}
                    >
                      <project.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-1 rounded">
                        PROBLEM
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        SOLUTION
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
