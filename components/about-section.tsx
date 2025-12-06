import { Calendar, MapPin, Briefcase } from "lucide-react"

const timeline = [
  {
    year: "2025 August",
    title: "Rust Backend (Payments, Analytics)",
    company: "Paymesh - Automatic Payment Splitting Infra",
    description:
      "Developed 40+ async Rust API endpoints (user, admin, indexer, SQLx). Implemented structured logging with tracing, reducing payment-pipeline debugging time by 40%. Deployed Redis caching for critical routes with response times from ~130 ms to ~10 ms (93% faster). Integrated Prometheus and Grafana for metrics, alerting, and performance monitoring. Increased backend request throughput by ~30% through async flow optimization and caching.",
  },
  {
    year: "2025 October",
    title: "Backend (Realtime, Feed)",
    company: "Studly Platform - AI Powered Study Platform",
    description:
      "Launched Profile Points & Streaks for 600+ users, boosting weekly engagement by ~18%. Built custom WebSocket service for likes/comments with <120 ms latency. Designed and implemented the Studly Marketplace with 20+ Rust/Axum endpoints for Courses, Resources and Assessments.",
  },
  {
    year: "2025 — Present",
    title: "Bitcoin Ecosystem Engagement",
    company: "Btrust Kano Community & Bitcoin Workshops",
    description:
      "Btrust Kano Community Member: Participate in BitDev meetups, collaborate with African Bitcoin developers, and discuss with peers on Bitcoin protocol and Lightning Network topics. Completed Digifacts Bitcoin workshop. Rust for Bitcoin Bootcamp Buidl Mentor: Mentored bootcamp students on Rust for Bitcoin and various implementations of Bitcoin in Rust, exploring tasks from Bitcoin Dojo and facilitating peer learning.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a developer passionate about building efficient, performant systems that blend robust
                engineering with clean architecture. My core strength lies in{" "}
                <span className="text-primary font-medium">Rust</span>, where I craft backend services, CLI tools, and
                crates that prioritize performance and safety.
              </p>
              <p>
                While my heart is in systems engineering, I&apos;m equally comfortable on the frontend, building
                full-stack applications with React and Next.js. I believe in understanding the full stack to make better
                architectural decisions.
              </p>
              <p>
                I&apos;m an active open-source contributor, assisted in maintaining one project and contributing to several others.
                I&apos;m also a smart contract developer, working with{" "}
                <span className="text-primary font-medium">Cairo</span> for ZK-STARKs and{" "}
                <span className="text-primary font-medium">Stellar Soroban</span> for smart contract development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Experience
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-6 border-l border-border">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground">{item.year}</p>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-primary">{item.company}</p>
                    <p className="text-sm text-muted-foreground pt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
