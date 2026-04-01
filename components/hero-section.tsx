import { IdeMockup } from "@/components/ide-mockup"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Version 4.6.0 — February 2026
            </div>

            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/lazarus-logo.png"
                alt="Lazarus IDE"
                width={64}
                height={64}
                className="w-16 h-16 lg:hidden"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              <span className="text-balance">Build native apps with</span>
              <br />
              <span className="text-primary">Lazarus IDE</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              The free, open-source RAD environment for cross-platform development in Object Pascal. 
              Write once, compile for Windows, macOS, Linux, and more.
            </p>

            {/* Tagline */}
            <div className="flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Free Forever
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-md">
                Delphi Compatible
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-md">
                Native Performance
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg" className="gap-2 px-6 shadow-lg shadow-primary/20">
                <a href="#downloads">
                  <Download className="w-4 h-4" />
                  Download Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 px-6">
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
                  Source
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-6 mt-2 border-t border-border">
              {[
                { value: "25+", label: "Years Active" },
                { value: "9", label: "Widgetsets" },
                { value: "10+", label: "Platforms" },
                { value: "100%", label: "Free & Open" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground tracking-tight">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: IDE mockup */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-2xl" />
            <div className="relative">
              <IdeMockup />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ArrowRight className="w-4 h-4 rotate-90 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
