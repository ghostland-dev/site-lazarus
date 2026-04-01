import { Bug, GitPullRequest, BookOpen, FlaskConical, Package, MessageSquare, ArrowRight } from "lucide-react"

const ways = [
  {
    icon: Bug,
    title: "Report bugs",
    desc: "Found an issue? File a detailed bug report on the GitLab issue tracker.",
    href: "https://gitlab.com/freepascal.org/lazarus/-/issues",
  },
  {
    icon: GitPullRequest,
    title: "Submit patches",
    desc: "Fix bugs or implement features — submit a merge request on GitLab.",
    href: "https://gitlab.com/freepascal.org/lazarus/-/merge_requests",
  },
  {
    icon: BookOpen,
    title: "Improve documentation",
    desc: "Contribute to the Lazarus wiki — tutorials, guides, and API docs.",
    href: "https://wiki.lazarus.freepascal.org/",
  },
  {
    icon: FlaskConical,
    title: "Test releases",
    desc: "Try pre-release builds and report regressions before they reach stable.",
    href: "https://gitlab.com/freepascal.org/lazarus/-/releases",
  },
  {
    icon: Package,
    title: "Publish packages",
    desc: "Share reusable components via the Online Package Manager (OPM).",
    href: "https://packages.lazarus-ide.org/",
  },
  {
    icon: MessageSquare,
    title: "Join the forum",
    desc: "Help other developers, share knowledge, and discuss ideas.",
    href: "https://forum.lazarus.freepascal.org/",
  },
]

export function ContributionSection() {
  return (
    <section id="contribute" className="py-24 bg-background" aria-labelledby="contribute-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statement block */}
        <div className="rounded-2xl border border-primary/30 bg-brand-blue-muted px-8 py-10 mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <GitPullRequest className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2
              id="contribute-heading"
              className="text-xl sm:text-2xl font-bold text-foreground mb-2"
            >
              An open-source project under active development.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Lazarus is built entirely by volunteers and contributors from around the world.
              Every contribution — big or small — moves the project forward and helps
              Object Pascal developers everywhere.
            </p>
          </div>
          <a
            href="https://gitlab.com/freepascal.org/lazarus"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View on GitLab
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ways.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 flex gap-4 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
