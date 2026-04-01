import { IdeMockup } from "@/components/ide-mockup"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, Github, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -z-10 rounded-b-full opacity-10 dark:opacity-15 bg-primary blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-primary/30 bg-brand-blue-muted text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Version 4.6.0 — February 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Lazarus IDE{" "}
              <span className="text-primary">—</span>{" "}
              Open-Source RAD in Free Pascal
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Build native cross-platform applications in Object Pascal from a single codebase.
              Familiar Delphi-like workflow, modern tooling, zero cost.
            </p>

            <p className="font-mono text-sm text-primary font-semibold tracking-wide">
              Write once, compile anywhere.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="gap-2">
                <a href="#downloads">
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="#documentation">
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <a
                  href="https://gitlab.com/freepascal.org/lazarus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitLab
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
              {[
                { value: "25+", label: "Years active" },
                { value: "9", label: "Widgetsets" },
                { value: "10+", label: "Target platforms" },
                { value: "Free", label: "Open-source" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: IDE mockup */}
          <div className="hidden lg:block">
            <IdeMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
