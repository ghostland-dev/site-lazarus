import { Download, ExternalLink, GitBranch, Package, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const platforms = [
  {
    name: "Windows",
    sub: "Windows 7 and later — 32-bit and 64-bit",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M3 5.5L14.5 4v12H3V5.5z" fill="currentColor" opacity=".9"/>
        <path d="M16 3.8L29 2v14H16V3.8z" fill="currentColor" opacity=".7"/>
        <path d="M3 17.5h11.5V29.5L3 28V17.5z" fill="currentColor" opacity=".7"/>
        <path d="M16 17.5H29v12.5L16 28.2V17.5z" fill="currentColor" opacity=".5"/>
      </svg>
    ),
    href: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2064%20bits/Lazarus%204.0/",
    directDownload: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2064%20bits/Lazarus%204.0/lazarus-4.0-fpc-3.2.2-win64.exe/download",
  },
  {
    name: "Linux",
    sub: "Debian / RPM packages and binary archives",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <ellipse cx="16" cy="13" rx="5" ry="7" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M11 20c-2 2-4 6-3 8 1 1.5 3.5 0 5-2m10 2c2-2 2-7-1-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="13.5" cy="11" r="1.2" fill="currentColor"/>
        <circle cx="18.5" cy="11" r="1.2" fill="currentColor"/>
        <path d="M13 14.5s1.2 2 3 2 3-2 3-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    href: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20amd64%20DEB/Lazarus%204.0/",
    directDownload: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20amd64%20DEB/Lazarus%204.0/",
  },
  {
    name: "macOS",
    sub: "macOS 10.13 and later — Intel and Apple Silicon",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M21 6c.3-2.2-1.5-4.4-3.7-4.5-.2 2.3 1.8 4.3 3.7 4.5z" fill="currentColor"/>
        <path d="M26 22c-1.1 2.4-1.6 3.5-3 4.8-1.9 1.8-4.5.3-7 .3s-5.1 1.5-7-.3C7.5 25.4 7 24.4 5.9 22c-2.8-6.2-.3-15.5 5.1-15.5 2.1 0 3.5 1.4 5 1.4s2.9-1.4 5-1.4c5.3 0 7.8 9.4 5 15.5z" fill="currentColor" opacity=".8"/>
      </svg>
    ),
    href: "https://sourceforge.net/projects/lazarus/files/Lazarus%20macOS%20x86-64/Lazarus%204.0/",
    directDownload: "https://sourceforge.net/projects/lazarus/files/Lazarus%20macOS%20x86-64/Lazarus%204.0/",
  },
  {
    name: "Source Code",
    sub: "Build from source with Free Pascal",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polyline points="10,9 4,16 10,23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,9 28,16 22,23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="19" y1="7" x2="13" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    href: "https://gitlab.com/freepascal.org/lazarus/-/tree/main",
    directDownload: "https://gitlab.com/freepascal.org/lazarus/-/archive/main/lazarus-main.zip",
  },
]

const links = [
  {
    icon: BookOpen,
    label: "Getting Started Guide",
    href: "/getting-started",
    internal: true,
  },
  {
    icon: GitBranch,
    label: "View Git repository",
    href: "https://gitlab.com/freepascal.org/lazarus",
    internal: false,
  },
  {
    icon: Package,
    label: "Package manager (OPM)",
    href: "https://wiki.lazarus.freepascal.org/Online_Package_Manager",
    internal: false,
  },
  {
    icon: ExternalLink,
    label: "All downloads on SourceForge",
    href: "https://sourceforge.net/projects/lazarus/files/",
    internal: false,
  },
]

export function DownloadsSection() {
  return (
    <section id="downloads" className="py-24 bg-surface-subtle" aria-labelledby="downloads-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2
            id="downloads-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            Download Lazarus 4.0
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Free to download, free to use, free to distribute. Choose your platform below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.directDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.sub}</p>
              </div>
              <Button size="sm" variant="outline" className="mt-auto w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors" tabIndex={-1}>
                <Download className="w-3.5 h-3.5" />
                Download
              </Button>
            </a>
          ))}
        </div>

        {/* Utility links */}
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map(({ icon: Icon, label, href, internal }) => (
            internal ? (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
