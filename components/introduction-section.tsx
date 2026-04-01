import { Code2, Cpu, Globe2, Layers } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "Open-Source IDE / RAD",
    desc: "Lazarus is a free, open-source Rapid Application Development environment distributed under the LGPL and GPL licences. Anyone can use, study, modify, and redistribute it.",
  },
  {
    icon: Cpu,
    title: "Powered by Free Pascal",
    desc: "Lazarus compiles with Free Pascal (FPC), a mature, high-performance compiler that targets a wide range of operating systems and CPU architectures.",
  },
  {
    icon: Layers,
    title: "Object Pascal, Naturally",
    desc: "The IDE and the applications you build are written in Object Pascal — a readable, statically-typed language with a rich object model and decades of proven use in production software.",
  },
  {
    icon: Globe2,
    title: "Cross-Platform from Day One",
    desc: "A single codebase compiles and runs natively on Windows, Linux, macOS, BSD, and more — without emulation, without a virtual machine, and without rewriting your UI for each target.",
  },
]

export function IntroductionSection() {
  return (
    <section id="introduction" className="py-24 bg-surface-subtle" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            What is Lazarus?
          </p>
          <h2
            id="intro-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            A modern IDE for Object Pascal developers
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Lazarus was designed to give Object Pascal developers a productive,
            Delphi-like experience while removing platform and licensing barriers.
            The goal is simple: one language, one codebase, native output everywhere.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Quote bar */}
        <div className="mt-12 rounded-xl border border-primary/30 bg-brand-blue-muted px-8 py-6 flex items-center gap-4">
          <div className="w-1 self-stretch rounded-full bg-primary shrink-0" />
          <blockquote className="text-lg font-semibold text-foreground text-balance">
            &ldquo;Write once, compile anywhere.&rdquo;
            <span className="block text-sm font-normal text-muted-foreground mt-1">
              Lazarus IDE — the open-source RAD for Object Pascal
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
