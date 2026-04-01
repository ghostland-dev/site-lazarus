import { Code2 } from "lucide-react"

const columns = [
  {
    heading: "Overview",
    links: [
      { label: "Introduction", href: "#introduction" },
      { label: "Core Strengths", href: "#features" },
      { label: "Free Pascal", href: "#freepascal" },
      { label: "LCL", href: "#lcl" },
      { label: "Widgetsets", href: "#widgetsets" },
      { label: "Cross-Platform", href: "#platforms" },
    ],
  },
  {
    heading: "Documentation",
    links: [
      { label: "Getting Started", href: "https://wiki.lazarus.freepascal.org/Getting_Lazarus" },
      { label: "Tutorials", href: "https://wiki.lazarus.freepascal.org/Tutorials" },
      { label: "LCL Reference", href: "https://wiki.lazarus.freepascal.org/LCL" },
      { label: "Cross-Compilation", href: "https://wiki.lazarus.freepascal.org/Cross_compiling" },
      { label: "Migration from Delphi", href: "https://wiki.lazarus.freepascal.org/Lazarus_for_Delphi_users" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Downloads",
    links: [
      { label: "Windows", href: "https://gitlab.com/freepascal.org/lazarus/-/releases" },
      { label: "Linux", href: "https://gitlab.com/freepascal.org/lazarus/-/releases" },
      { label: "macOS", href: "https://gitlab.com/freepascal.org/lazarus/-/releases" },
      { label: "Source Code", href: "https://gitlab.com/freepascal.org/lazarus" },
      { label: "Release notes", href: "https://gitlab.com/freepascal.org/lazarus/-/releases" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "GitLab Repository", href: "https://gitlab.com/freepascal.org/lazarus" },
      { label: "Forum", href: "https://forum.lazarus.freepascal.org/" },
      { label: "Mailing lists", href: "https://lists.lazarus-ide.org/" },
      { label: "Bug tracker", href: "https://gitlab.com/freepascal.org/lazarus/-/issues" },
      { label: "Package manager", href: "https://packages.lazarus-ide.org/" },
      { label: "Contribute", href: "#contribute" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-surface-subtle border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">Lazarus IDE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Open-source RAD environment for Object Pascal, powered by Free Pascal.
            </p>
            <p className="text-xs text-muted-foreground">
              Licensed under{" "}
              <a
                href="https://www.gnu.org/licenses/lgpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                LGPL
              </a>{" "}
              /{" "}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                GPL
              </a>
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Lazarus IDE contributors. All rights reserved.
            </p>
            <p className="font-medium text-foreground/70">
              This is an unofficial community website and is not the official Lazarus IDE website.
              It was created as a temporary resource while the official site is unavailable.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://gitlab.com/freepascal.org/lazarus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitLab
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://wiki.lazarus.freepascal.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Wiki
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://forum.lazarus.freepascal.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Forum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
