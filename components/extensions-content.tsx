"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Puzzle,
  Terminal,
  FileCode,
  Bug,
  Sparkles,
  ExternalLink,
  Download,
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const editorTabs = [
  { id: "vscode", label: "VS Code", icon: Code2 },
  { id: "sublime", label: "Sublime Text", icon: FileCode },
  { id: "vim", label: "Vim / Neovim", icon: Terminal },
  { id: "other", label: "Other Editors", icon: Puzzle },
]

const extensions = {
  vscode: [
    {
      name: "Pascal",
      author: "Alessandro Fragnani",
      description:
        "Comprehensive Pascal language support including syntax highlighting, code snippets, and formatting for Free Pascal and Delphi.",
      installs: "500K+",
      rating: 4.8,
      url: "https://marketplace.visualstudio.com/items?itemName=alefragnani.pascal",
      featured: true,
    },
    {
      name: "Pascal Formatter",
      author: "Alessandro Fragnani",
      description:
        "Automatic code formatting for Pascal files using JEDI Code Format or PTOP formatter.",
      installs: "100K+",
      rating: 4.5,
      url: "https://marketplace.visualstudio.com/items?itemName=alefragnani.pascal-formatter",
      featured: false,
    },
    {
      name: "OmniPascal",
      author: "Wosi",
      description:
        "Professional Pascal IDE features: code completion, navigation, refactoring, and debugging support.",
      installs: "50K+",
      rating: 4.7,
      url: "https://www.omnipascal.com/",
      featured: true,
    },
    {
      name: "Lazarus Pascal Debug",
      author: "nickleza",
      description:
        "Debug adapter for Lazarus projects using GDB, enabling breakpoints and variable inspection.",
      installs: "10K+",
      rating: 4.2,
      url: "https://marketplace.visualstudio.com/items?itemName=nickleza.lazarus-pascal-debug",
      featured: false,
    },
    {
      name: "Pascal Language Server",
      author: "genericptr",
      description:
        "Language Server Protocol implementation for Pascal providing intelligent code assistance.",
      installs: "20K+",
      rating: 4.3,
      url: "https://github.com/genericptr/pascal-language-server",
      featured: false,
    },
  ],
  sublime: [
    {
      name: "Pascal Syntax",
      author: "Sublime HQ",
      description: "Built-in Pascal syntax highlighting and basic language support for Sublime Text.",
      installs: "Default",
      rating: 4.5,
      url: "https://www.sublimetext.com/",
      featured: true,
    },
    {
      name: "Pascal Snippets",
      author: "Community",
      description: "Collection of useful Pascal code snippets for faster development.",
      installs: "5K+",
      rating: 4.0,
      url: "https://packagecontrol.io/search/pascal",
      featured: false,
    },
    {
      name: "SublimeLinter-fpc",
      author: "Community",
      description: "Free Pascal compiler integration for real-time error checking in Sublime Text.",
      installs: "2K+",
      rating: 4.1,
      url: "https://packagecontrol.io/packages/SublimeLinter-fpc",
      featured: false,
    },
  ],
  vim: [
    {
      name: "vim-pascal",
      author: "Various",
      description: "Enhanced Pascal syntax highlighting and indentation for Vim and Neovim.",
      installs: "GitHub",
      rating: 4.4,
      url: "https://github.com/vim-scripts/pascal.vim",
      featured: true,
    },
    {
      name: "CoC-Pascal",
      author: "Community",
      description: "Conquer of Completion source for Pascal using the Pascal Language Server.",
      installs: "GitHub",
      rating: 4.3,
      url: "https://github.com/neoclide/coc.nvim",
      featured: false,
    },
    {
      name: "nvim-lspconfig",
      author: "Neovim",
      description: "Native LSP configuration for Neovim with Pascal Language Server support.",
      installs: "Popular",
      rating: 4.8,
      url: "https://github.com/neovim/nvim-lspconfig",
      featured: true,
    },
  ],
  other: [
    {
      name: "Geany Pascal Plugin",
      author: "Geany Team",
      description: "Lightweight IDE with Pascal support, symbol browser, and build system integration.",
      installs: "Built-in",
      rating: 4.2,
      url: "https://www.geany.org/",
      featured: true,
    },
    {
      name: "Kate Pascal Mode",
      author: "KDE",
      description: "Pascal syntax highlighting and code folding for the Kate text editor.",
      installs: "Built-in",
      rating: 4.0,
      url: "https://kate-editor.org/",
      featured: false,
    },
    {
      name: "Emacs pascal-mode",
      author: "GNU",
      description: "Major mode for editing Pascal code in GNU Emacs with indentation and highlighting.",
      installs: "MELPA",
      rating: 4.1,
      url: "https://www.gnu.org/software/emacs/",
      featured: false,
    },
    {
      name: "Notepad++ Pascal",
      author: "UDL",
      description: "User Defined Language support for Pascal syntax in Notepad++.",
      installs: "Manual",
      rating: 3.8,
      url: "https://notepad-plus-plus.org/",
      featured: false,
    },
  ],
}

const tools = [
  {
    name: "PTOP",
    category: "Formatter",
    description: "Pascal source code formatter included with Free Pascal for consistent code style.",
    icon: Sparkles,
  },
  {
    name: "FPDoc",
    category: "Documentation",
    description: "Documentation generator for Free Pascal projects, creating HTML/PDF docs from source.",
    icon: FileCode,
  },
  {
    name: "GDB",
    category: "Debugger",
    description: "GNU Debugger with full Pascal support for debugging Lazarus applications.",
    icon: Bug,
  },
  {
    name: "lazbuild",
    category: "Build Tool",
    description: "Command-line build tool for compiling Lazarus projects without the IDE.",
    icon: Terminal,
  },
  {
    name: "pas2js",
    category: "Transpiler",
    description: "Pascal to JavaScript transpiler for building web applications with Pascal.",
    icon: Code2,
  },
  {
    name: "fpcmake",
    category: "Build Tool",
    description: "Makefile generator for Free Pascal projects with dependency management.",
    icon: Puzzle,
  },
]

export function ExtensionsContent() {
  const [activeTab, setActiveTab] = useState("vscode")

  const currentExtensions = extensions[activeTab as keyof typeof extensions] || []

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="py-20 bg-surface-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Developer Tools
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Extensions & Editor Plugins
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enhance your Pascal development workflow with extensions for VS Code, Sublime Text,
              Vim, and other popular editors.
            </p>
          </div>
        </div>
      </section>

      {/* Editor Extensions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Editor Extensions
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-secondary/50 rounded-xl w-fit">
            {editorTabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === id
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Extensions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentExtensions.map((ext) => (
              <a
                key={ext.name}
                href={ext.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block bg-card border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  ext.featured ? "border-primary/30" : "border-border hover:border-primary/30"
                }`}
              >
                {ext.featured && (
                  <span className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {ext.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{ext.author}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {ext.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Download className="w-3.5 h-3.5" />
                      {ext.installs}
                    </span>
                    <span className="flex items-center gap-1 text-warning">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {ext.rating}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VS Code Setup Guide */}
      <section className="py-20 bg-surface-subtle border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Quick Setup for VS Code
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Get started with Pascal development in VS Code in minutes. Follow these steps to
                set up a productive development environment.
              </p>

              <ol className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Install Free Pascal Compiler",
                    desc: "Download and install FPC from freepascal.org or use your package manager.",
                  },
                  {
                    step: "2",
                    title: "Install Pascal Extension",
                    desc: "Search for \"Pascal\" by Alessandro Fragnani in the VS Code marketplace.",
                  },
                  {
                    step: "3",
                    title: "Configure FPC Path",
                    desc: "Set the pascal.compiler.path setting to your FPC installation.",
                  },
                  {
                    step: "4",
                    title: "Start Coding",
                    desc: "Create a .pas file and enjoy syntax highlighting, snippets, and formatting.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <Button asChild className="mt-8 gap-2">
                <a
                  href="https://wiki.freepascal.org/Visual_Studio_Code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Guide
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Code Preview */}
            <div className="bg-surface-code rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e1e] border-b border-[#333]">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-warning/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">hello.pas</span>
              </div>
              <pre className="p-5 text-sm font-mono overflow-x-auto">
                <code>
                  <span className="text-[#569cd6]">program</span>{" "}
                  <span className="text-[#dcdcaa]">HelloWorld</span>;{"\n\n"}
                  <span className="text-[#569cd6]">uses</span>{" "}
                  <span className="text-[#4ec9b0]">SysUtils</span>;{"\n\n"}
                  <span className="text-[#569cd6]">var</span>{"\n"}
                  {"  "}
                  <span className="text-[#9cdcfe]">name</span>:{" "}
                  <span className="text-[#4ec9b0]">string</span>;{"\n\n"}
                  <span className="text-[#569cd6]">begin</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#dcdcaa]">Write</span>(
                  <span className="text-[#ce9178]">{'"Enter your name: "'}</span>);{"\n"}
                  {"  "}
                  <span className="text-[#dcdcaa]">ReadLn</span>(<span className="text-[#9cdcfe]">name</span>);{"\n"}
                  {"  "}
                  <span className="text-[#dcdcaa]">WriteLn</span>(
                  <span className="text-[#ce9178]">{'"Hello, "'}</span>,{" "}
                  <span className="text-[#9cdcfe]">name</span>,{" "}
                  <span className="text-[#ce9178]">{'"!"'}</span>);{"\n"}
                  <span className="text-[#569cd6]">end</span>.
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Command-Line Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential tools included with Free Pascal and Lazarus for building, formatting, and
              debugging your projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(({ name, category, description, icon: Icon }) => (
              <div
                key={name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{name}</h3>
                    <p className="text-xs text-primary font-medium">{category}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to start developing?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Download Lazarus IDE for the complete development experience, or set up your favorite
            editor with Pascal extensions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="/#downloads">
                <Download className="w-4 h-4" />
                Download Lazarus
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="/libraries">
                <Puzzle className="w-4 h-4" />
                Browse Libraries
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
