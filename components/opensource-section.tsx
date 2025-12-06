"use client"

import { ExternalLink, Github, Star, GitPullRequest, Link } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contributions = [
  {
    project: "OnlyDust Fellowship",
    description: "Selective three-month engineering fellowship focusing on open-source blockchain and Rust projects.",
    contribution: "Delivered 30+ PRs and contributed to 20+ early-stage projects, collaborating directly with maintainers.",
    tech: ["Rust", "Blockchain", "Cairo", "Open Source"],
    github: "https://github.com/Akshola00",
    prCount: 30,
    featured: true,
  },
  {
    project: "AutoSwappr",
    description: "Rust/Axum-based swap service for blockchain transactions.",
    contribution: "Enhanced backend with better transaction logging; improved code and backend logic for better performance.",
    tech: ["Rust", "Axum", "Backend"],
    github: "https://autoswap.thebuidl.org/",
    prCount: undefined,
    featured: true,
  },
  {
    project: "Fortichain Contracts",
    description: "StarkNet smart contract infrastructure with upgradeability features.",
    contribution: "Implemented OpenZeppelin upgradeability functionality with comprehensive testing including access control edge cases for non-admin upgrade attempts.",
    tech: ["Cairo", "StarkNet", "OpenZeppelin", "Smart Contracts"],
    github: "https://github.com/skill-mind/Fortichain-Contracts/pull/27",
    prCount: undefined,
    featured: false,
  },
  {
    project: "SkillNet Exam Contracts",
    description: "Decentralized examination platform on StarkNet with IPFS integration.",
    contribution: "Introduced exam result submission system, data retrieval mechanisms, and secure IPFS storage integration using Pinata for reliable off-chain data management.",
    tech: ["Cairo", "StarkNet", "IPFS", "Pinata"],
    github: "https://github.com/skill-mind/skillnet-exam-contracts/pull/15",
    prCount: undefined,
    featured: false,
  },
  {
    project: "MusicStrk",
    description: "Music platform built on StarkNet for session and audition management.",
    contribution: "Overhauled session and audition creation logic with secure auto-generated unique identifiers, improved access control, and robust event logging with comprehensive testing.",
    tech: ["Cairo", "StarkNet", "Smart Contracts"],
    github: "https://github.com/hackinsync/musicstrk/pull/114",
    prCount: undefined,
    featured: false,
  },
  {
    project: "ZeroXBridge Frontend",
    description: "Cross-chain bridge platform frontend for seamless asset transfers.",
    contribution: "Built fully functional Blog page with clean layout for displaying articles, announcements, and educational content to enhance user engagement.",
    tech: ["React", "TypeScript", "Frontend"],
    github: "https://github.com/Explore-Beyond-Innovations/ZeroXBridge_Frontend/pull/205",
    prCount: undefined,
    featured: false,
  },
  {
    project: "Snipu",
    description: "Code snippet sharing platform with social features.",
    contribution: "Implemented trending snippets retrieval system based on user reactions with comprehensive data structures, error handling, and test coverage.",
    tech: ["Rust", "Backend", "API"],
    github: "https://github.com/Cloudra-Labs/Snipu/pull/139",
    prCount: undefined,
    featured: false,
  },
]

export function OpenSourceSection() {
  return (
    <section id="opensource" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-2 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Open Source Contributions</h2>
          <p className="text-muted-foreground">
            Contributing to the open-source community and collaborating with maintainers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((contrib, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {contrib.featured && <Star className="h-4 w-4 text-primary fill-primary" />}
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contrib.project}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={contrib.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${contrib.project} GitHub`}
                    >
                      <Link className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {contrib.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/90 mb-3">
                    <span className="font-semibold text-primary">My Contribution:</span> {contrib.contribution}
                  </p>
                  {contrib.prCount && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <GitPullRequest className="h-3 w-3" />
                      <span>{contrib.prCount}+ Pull Requests</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {contrib.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
