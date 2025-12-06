"use client"

import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechBadge } from "@/components/tech-badge"

const techStack = [
  { name: "Rust", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "TypeScript", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Axum", color: "bg-orange-400/20 text-orange-300 border-orange-400/30" },
  { name: "Tokio", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { name: "React", color: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30" },
  { name: "Next.js", color: "bg-foreground/10 text-foreground border-foreground/20" },
  { name: "Cairo", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
]

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Info */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
                Akinshola Akinniyi
              </h1>
              <p className="text-primary font-mono text-sm md:text-base">
                Software Engineer | Backend Systems | Blockchain Infrastructure
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Software developer and open-source contributor focused on building reliable backend systems, developer tools, CLI tools, and blockchain infrastructure. Skilled in Rust for high-performance SDKs and utilities, error handling, and maintainable architecture. Smart contract engineer experienced in Solidity and Cairo for secure zero-knowledge protocols.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} className={tech.color} />
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button asChild className="gap-2">
                <a href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/Akshola00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/akinshola-akinniyi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Akshola00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="hidden lg:flex flex-col gap-4">
            <NavLink href="#about" label="ABOUT" />
            <NavLink href="#projects" label="EXPERIENCE" />
            <NavLink href="#skills" label="PROJECTS" />
          </div>
        </div>
      </div>
    </section>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 text-xs font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
      {label}
    </a>
  )
}
