import { Code2, Database, Brain, Globe, Bot, Cog } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Databases",
    icon: Database,
    skills: ["Python", "SQL", "TypeScript", "JavaScript"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI / ML & Agent Systems",
    icon: Brain,
    skills: ["LangChain", "LangGraph", "RAG Systems", "OpenAI API"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Node.js", "Express", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Automation",
    icon: Bot,
    skills: ["Web Scraping", "Task Automation", "Selenium", "BeautifulSoup"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Tools & Frameworks",
    icon: Cog,
    skills: ["Git", "Docker", "VS Code", "Postman"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Currently Learning",
    icon: Code2,
    skills: ["Advanced ML", "Cloud Services", "System Design", "MLOps"],
    color: "from-indigo-500 to-purple-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and modern web applications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6 hover-glow transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Marquee */}
          <div className="mt-16 overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...skillCategories, ...skillCategories].map((cat, i) =>
                cat.skills.map((skill, j) => (
                  <span
                    key={`${i}-${j}`}
                    className="text-muted-foreground/40 font-display text-2xl whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
