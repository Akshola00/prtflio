import { Code2, Server, Database, Lock, Cpu, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: Server,
    skills: ["Rust", "Axum", "Tokio", "Async Services", "Systems Development"],
    primary: true,
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Rust", "TypeScript", "Cairo", "Solidity"],
    primary: false,
  },
  {
    title: "Frameworks & Crates",
    icon: Cpu,
    skills: ["Cargo", "Axum", "Clap", "Serde", "Tokio", "Reqwest", "SQLx", "Tracing"],
    primary: false,
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    primary: false,
  },
  {
    title: "Blockchain",
    icon: Lock,
    skills: ["Cairo", "Solidity", "ZK-STARKs", "StarkNet", "Stellar"],
    primary: false,
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Git", "GitHub", "Docker", "Digital Ocean", "CI/CD"],
    primary: false,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-2 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Skills & Tech Stack</h2>
          <p className="text-muted-foreground">Technologies I work with daily and have deep expertise in.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-300 ${
                category.primary
                  ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-md ${category.primary ? "bg-primary/20" : "bg-muted"}`}>
                  <category.icon className={`h-5 w-5 ${category.primary ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      category.primary ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
