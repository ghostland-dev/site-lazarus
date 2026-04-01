import {
  Globe2,
  Cpu,
  Zap,
  RefreshCw,
  GitBranch,
  ArrowLeftRight,
  Users,
  FileCode,
} from "lucide-react"

const features = [
  {
    icon: FileCode,
    title: "Open Source",
    desc: "Licensed under LGPL/GPL. Full source code available. No vendor lock-in.",
  },
  {
    icon: Globe2,
    title: "Cross-Platform",
    desc: "Target Windows, Linux, macOS, BSD, and more from a single project.",
  },
  {
    icon: Cpu,
    title: "Free Pascal Powered",
    desc: "Built on FPC — a mature, fast, self-hosting compiler with broad architecture support.",
  },
  {
    icon: Zap,
    title: "Rapid Visual Development",
    desc: "Drag-and-drop form designer with integrated property inspector and component palette.",
  },
  {
    icon: RefreshCw,
    title: "Object Pascal Compatible",
    desc: "Native support for Object Pascal syntax, generics, interfaces, and modern language features.",
  },
  {
    icon: GitBranch,
    title: "Delphi-Like Workflow",
    desc: "Familiar project structure, form editor, and coding model for developers migrating from Delphi.",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Compilation",
    desc: "Compile for x86, x64, ARM, PowerPC, MIPS, SPARC, and more from any supported host OS.",
  },
  {
    icon: Users,
    title: "Active Community",
    desc: "Decades of accumulated knowledge — forums, mailing lists, wikis, and hundreds of packages.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 bg-surface-subtle" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Core Strengths
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            Everything you need to build real applications
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lazarus brings together a productive IDE, a powerful compiler, and a rich component
            library — all without any licensing fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
