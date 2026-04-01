import { Cpu, Layers, Zap, ArrowRight } from "lucide-react"

const facts = [
  {
    icon: Cpu,
    title: "The compiler behind Lazarus",
    desc: "Lazarus relies entirely on Free Pascal (FPC) to compile your code. FPC is a production-grade, self-hosting compiler with over 30 years of active development.",
  },
  {
    icon: Layers,
    title: "Multiple OS and CPU targets",
    desc: "FPC can target Windows, Linux, macOS, BSD, iOS, Android, and more. Supported architectures include x86, x64, ARM, ARM64, PowerPC, MIPS, SPARC, and 68000.",
  },
  {
    icon: Zap,
    title: "Native, high-performance output",
    desc: "Applications compiled with FPC are native executables — no virtual machine, no interpreter, no runtime overhead. Fast startup, low memory footprint, real OS integration.",
  },
]

export function FreePascalSection() {
  return (
    <section id="freepascal" className="py-24 bg-surface-subtle" aria-labelledby="fpc-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
              The Compiler
            </p>
            <h2
              id="fpc-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6"
            >
              How Lazarus works with Free Pascal
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lazarus is the IDE and visual tooling layer. Free Pascal is the engine that turns
              your Object Pascal source into native machine code. Together, they form a complete
              development stack for building production applications without any cost or
              licensing fees.
            </p>

            {/* Stack diagram */}
            <div className="flex flex-col gap-1">
              {[
                { label: "Your Application", color: "bg-primary text-primary-foreground" },
                { label: "Lazarus IDE + LCL", color: "bg-primary/70 text-primary-foreground" },
                { label: "Free Pascal Compiler (FPC)", color: "bg-primary/50 text-primary-foreground" },
                { label: "Native OS / Hardware", color: "bg-muted text-muted-foreground border border-border" },
              ].map((layer, i, arr) => (
                <div key={layer.label} className="flex flex-col items-center">
                  <div
                    className={`w-full rounded-lg px-5 py-3 text-sm font-medium text-center ${layer.color}`}
                  >
                    {layer.label}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-4 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-5">
            {facts.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-xl p-6 flex gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <a
              href="https://www.freepascal.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              Visit the Free Pascal website
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
