"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Search,
  Package,
  Database,
  Globe,
  Image as ImageIcon,
  FileText,
  Lock,
  Wifi,
  BarChart3,
  Gamepad2,
  ExternalLink,
  Star,
  Download,
  Filter,
} from "lucide-react"

const categories = [
  { id: "all", label: "All", icon: Package },
  { id: "database", label: "Database", icon: Database },
  { id: "network", label: "Network", icon: Wifi },
  { id: "graphics", label: "Graphics", icon: ImageIcon },
  { id: "ui", label: "UI Components", icon: BarChart3 },
  { id: "security", label: "Security", icon: Lock },
  { id: "reporting", label: "Reporting", icon: FileText },
  { id: "games", label: "Games", icon: Gamepad2 },
]

const libraries = [
  {
    name: "ZeosLib",
    category: "database",
    description: "Database connectivity components supporting MySQL, PostgreSQL, SQLite, Firebird, Oracle, and more.",
    url: "https://zeoslib.sourceforge.net/",
    stars: "Popular",
    license: "LGPL",
  },
  {
    name: "mORMot 2",
    category: "database",
    description: "High-performance ORM framework with SOA, REST, and JSON support for enterprise applications.",
    url: "https://github.com/synopse/mORMot2",
    stars: "Trending",
    license: "MPL/LGPL",
  },
  {
    name: "SQLdb",
    category: "database",
    description: "Built-in database framework included with Free Pascal, supporting multiple database backends.",
    url: "https://wiki.freepascal.org/SQLdb",
    stars: "Core",
    license: "LGPL",
  },
  {
    name: "Synapse",
    category: "network",
    description: "Lightweight TCP/IP library for network communication, HTTP, FTP, SMTP, and more.",
    url: "http://www.ararat.cz/synapse/",
    stars: "Popular",
    license: "BSD",
  },
  {
    name: "Indy",
    category: "network",
    description: "Internet Direct library providing TCP/IP client and server components.",
    url: "https://www.indyproject.org/",
    stars: "Popular",
    license: "BSD",
  },
  {
    name: "lNet",
    category: "network",
    description: "Lightweight networking library with event-driven architecture for Lazarus.",
    url: "https://wiki.freepascal.org/lNet",
    stars: "Core",
    license: "LGPL",
  },
  {
    name: "BGRABitmap",
    category: "graphics",
    description: "Advanced bitmap manipulation with layers, filters, gradients, and anti-aliased drawing.",
    url: "https://github.com/bgrabitmap/bgrabitmap",
    stars: "Popular",
    license: "LGPL",
  },
  {
    name: "PascalMagick",
    category: "graphics",
    description: "ImageMagick bindings for Free Pascal, enabling professional image processing.",
    url: "https://wiki.freepascal.org/PascalMagick",
    stars: "Useful",
    license: "Various",
  },
  {
    name: "GLScene",
    category: "graphics",
    description: "OpenGL-based 3D library for creating games and visualizations.",
    url: "https://glscene.sourceforge.net/",
    stars: "Popular",
    license: "MPL",
  },
  {
    name: "LazReport",
    category: "reporting",
    description: "Visual report designer and engine integrated with Lazarus, similar to FastReport.",
    url: "https://wiki.freepascal.org/LazReport",
    stars: "Core",
    license: "LGPL",
  },
  {
    name: "fpReport",
    category: "reporting",
    description: "Report generator framework included with Free Pascal for creating PDF and HTML reports.",
    url: "https://wiki.freepascal.org/fpreport",
    stars: "Core",
    license: "LGPL",
  },
  {
    name: "VirtualTreeView",
    category: "ui",
    description: "High-performance tree/list view component with virtual mode and custom drawing.",
    url: "https://github.com/JAM-Software/Virtual-TreeView",
    stars: "Popular",
    license: "LGPL",
  },
  {
    name: "ATSynEdit",
    category: "ui",
    description: "Powerful syntax-highlighting editor component with code folding and multi-caret support.",
    url: "https://github.com/Alexey-T/ATSynEdit",
    stars: "Trending",
    license: "MPL",
  },
  {
    name: "DCPCRYPT",
    category: "security",
    description: "Cryptographic component library supporting AES, Blowfish, SHA, MD5, and more.",
    url: "https://wiki.freepascal.org/DCPcrypt",
    stars: "Popular",
    license: "MIT",
  },
  {
    name: "OpenSSL",
    category: "security",
    description: "OpenSSL bindings for Free Pascal enabling SSL/TLS connections.",
    url: "https://wiki.freepascal.org/OpenSSL",
    stars: "Core",
    license: "Apache",
  },
  {
    name: "Castle Game Engine",
    category: "games",
    description: "Cross-platform 3D/2D game engine with visual editor, physics, and modern rendering.",
    url: "https://castle-engine.io/",
    stars: "Trending",
    license: "LGPL",
  },
  {
    name: "Allegro.pas",
    category: "games",
    description: "Pascal bindings for the Allegro game programming library.",
    url: "https://allegro-pas.sourceforge.net/",
    stars: "Useful",
    license: "zlib",
  },
  {
    name: "SDL2",
    category: "games",
    description: "Simple DirectMedia Layer 2 bindings for multimedia, audio, and input handling.",
    url: "https://github.com/PascalGameDevelopment/SDL2-for-Pascal",
    stars: "Popular",
    license: "zlib",
  },
]

export function LibrariesContent() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = libraries.filter((lib) => {
    const matchesSearch =
      lib.name.toLowerCase().includes(search.toLowerCase()) ||
      lib.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "all" || lib.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Trending":
        return "bg-success/10 text-success border-success/20"
      case "Popular":
        return "bg-primary/10 text-primary border-primary/20"
      case "Core":
        return "bg-accent/10 text-accent border-accent/20"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="py-20 bg-surface-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Ecosystem
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Libraries & Packages
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore hundreds of open-source libraries and components for Free Pascal and Lazarus.
              From database connectivity to game engines, find the tools you need.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search libraries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Categories
              </h3>
              <nav className="flex flex-wrap lg:flex-col gap-2">
                {categories.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </nav>

              {/* Stats */}
              <div className="mt-10 p-5 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-4">Package Stats</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Libraries</span>
                    <span className="font-semibold text-foreground">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">OPM Packages</span>
                    <span className="font-semibold text-foreground">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contributors</span>
                    <span className="font-semibold text-foreground">1000+</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "library" : "libraries"}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((lib) => (
                  <a
                    key={lib.name}
                    href={lib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {lib.name}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${getStatusColor(
                              lib.stars
                            )}`}
                          >
                            <Star className="w-3 h-3" />
                            {lib.stars}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {lib.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-1 bg-secondary rounded text-secondary-foreground">
                        {lib.license}
                      </span>
                      <span className="text-muted-foreground capitalize">{lib.category}</span>
                    </div>
                  </a>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">No libraries found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OPM Section */}
      <section className="py-20 bg-surface-subtle border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Online Package Manager
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Install packages directly from within the Lazarus IDE using the built-in Online
                Package Manager (OPM). Browse, install, and update packages with a single click.
              </p>
              <div className="space-y-4">
                {[
                  "One-click installation from the IDE",
                  "Automatic dependency resolution",
                  "Regular updates and new packages",
                  "Community-contributed packages",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild className="gap-2">
                  <a href="https://wiki.freepascal.org/Online_Package_Manager" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Learn More
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a href="https://packages.lazarus-ide.org/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4" />
                    Browse Online
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-surface-code rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-warning/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
                <span className="ml-2 text-muted-foreground text-xs">Package Manager</span>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="text-primary">Package</span> {">"} Online Package Manager
                </p>
                <p className="text-success">Connecting to repository...</p>
                <p>Found 247 packages available</p>
                <p className="mt-4">
                  <span className="text-warning">Installing:</span> BGRABitmap v11.6.1
                </p>
                <p className="text-muted-foreground/60">Resolving dependencies...</p>
                <p className="text-success">Installation complete!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
