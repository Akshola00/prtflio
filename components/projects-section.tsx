import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Gitchecker - Git CLI Analyzer",
    description:
      "Command-line tool that scans directories for Git repositories, analyzes their metadata, and exports statistics in JSON. Implemented modular subcommands (stats, find, clean) with a pluggable, extensible architecture.",
    tech: ["Rust", "CLI", "Clap", "Serde", "JSON"],
    github: "https://github.com/Akshola00/gitchecker",
    demo: undefined,
    featured: true,
  },
  {
    title: "AutoSwappr - Backend Contributor",
    description:
      "Enhanced Rust/Axum backend with better transaction logging; improved code and backend logic. Contributed to improving the overall architecture and performance of the swap service.",
    tech: ["Rust", "Axum", "Backend", "Transactions"],
    github: "https://github.com/Akshola00",
    demo: "https://autoswap.thebuidl.org/",
    featured: true,
  },
  {
    title: "OnlyDust Fellowship",
    description:
      "Completed a selective three-month engineering fellowship focusing on open-source blockchain and Rust projects. Delivered 30+ PRs and contributed to 20+ early-stage projects, collaborating directly with maintainers.",
    tech: ["Rust", "Blockchain", "Open Source", "Cairo"],
    github: "https://github.com/Akshola00",
    demo: undefined,
    featured: true,
  },
  {
    title: "Paymesh - Payment Splitting Platform",
    description:
      "Built high-performance REST API with 40+ async Rust endpoints. Implemented Redis caching reducing response times by 93%. Integrated Prometheus and Grafana for comprehensive monitoring.",
    tech: ["Rust", "Axum", "SQLx", "Redis", "PostgreSQL"],
    github: "https://github.com/Web3Novalabs/PayMesh",
    demo: "https://paymesh.app",
    featured: true,
  },
  {
    title: "Studly Marketplace",
    description:
      "Designed and implemented marketplace with 20+ Rust/Axum endpoints for Courses, Resources and Assessments. Built custom WebSocket service for real-time likes/comments with <120ms latency.",
    tech: ["Rust", "Axum", "WebSocket", "Soroban"],
    github: "https://github.com/Akshola00",
    demo: "https://usestudly.com",
    featured: false,
  },
  {
    title: "Predifi - Prediction Protocol",
    description:
      "Decentralized outcome prediction protocol (on-chain prediction platform) built on StarkNet. Contributing to Web3 prediction markets infrastructure.",
    tech: ["Cairo", "StarkNet", "Smart Contracts", "ZK-STARKs"],
    github: "https://github.com/Web3Novalabs/predifi",
    demo: undefined,
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-2 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <p className="text-muted-foreground">A selection of projects I&apos;ve built and contributed to.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} Demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Akshola00?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            View all projects on GitHub
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
