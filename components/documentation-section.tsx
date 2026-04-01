import { BookOpen, PlayCircle, Layers, ArrowLeftRight, ArrowRight, HelpCircle, Users, GitBranch } from "lucide-react"

const docs = [
  {
    icon: BookOpen,
    title: "Getting Started",
    desc: "Install Lazarus, create your first project, and run your first application.",
    href: "https://wiki.lazarus.freepascal.org/Getting_Lazarus",
  },
  {
    icon: PlayCircle,
    title: "Tutorials",
    desc: "Step-by-step guides covering forms, controls, databases, and more.",
    href: "https://wiki.lazarus.freepascal.org/Tutorials",
  },
  {
    icon: Layers,
    title: "LCL Reference",
    desc: "Complete API documentation for the Lazarus Component Library.",
    href: "https://wiki.lazarus.freepascal.org/LCL",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Compilation",
    desc: "Set up your environment to compile for a different OS or CPU architecture.",
    href: "https://wiki.lazarus.freepascal.org/Cross_compiling",
  },
  {
    icon: ArrowRight,
    title: "Migrating from Delphi",
    desc: "A practical guide to porting VCL applications to Lazarus and the LCL.",
    href: "https://wiki.lazarus.freepascal.org/Lazarus_for_Delphi_users",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    desc: "Answers to the most common questions about Lazarus and Free Pascal.",
    href: "#faq",
  },
  {
    icon: Users,
    title: "Community Forum",
    desc: "Ask questions, share projects, and get help from the global Pascal community.",
    href: "https://forum.lazarus.freepascal.org/",
  },
  {
    icon: GitBranch,
    title: "Git Repository",
    desc: "Browse the source code, report issues, and submit merge requests on GitLab.",
    href: "https://gitlab.com/freepascal.org/lazarus",
  },
]

export function DocumentationSection() {
  return (
    <section id="documentation" className="py-24 bg-background" aria-labelledby="docs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Documentation
          </p>
          <h2
            id="docs-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            Everything you need to learn and build
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A wealth of documentation, tutorials, and community resources — accumulated
            over more than two decades of open-source development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-blue-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
              <span className="mt-auto text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Open <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
