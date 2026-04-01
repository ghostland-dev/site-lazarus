"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Download, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check,
  Monitor,
  Apple,
  Terminal,
  Rocket,
  BookOpen,
  ArrowRight,
  Play
} from "lucide-react"

const platforms = [
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    requirements: [
      "Windows 7, 8, 10, or 11",
      "32-bit or 64-bit processor",
      "500 MB free disk space",
      "1 GB RAM minimum"
    ],
    steps: [
      {
        title: "Download the installer",
        description: "Get the latest Lazarus 4.6.0 installer from SourceForge. Choose the 64-bit version for modern systems.",
        link: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2064%20bits/",
        linkLabel: "Download for Windows 64-bit"
      },
      {
        title: "Run the installer",
        description: "Double-click the downloaded .exe file. If Windows SmartScreen appears, click \"More info\" then \"Run anyway\"."
      },
      {
        title: "Choose components",
        description: "Keep all components selected (IDE, LCL, Free Pascal Compiler). Choose your installation directory."
      },
      {
        title: "Complete installation",
        description: "Click Install and wait for the process to complete. Lazarus will create desktop and Start menu shortcuts."
      }
    ],
    downloadUrl: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2064%20bits/Lazarus%204.0/lazarus-4.0-fpc-3.2.2-win64.exe/download"
  },
  {
    id: "macos",
    name: "macOS",
    icon: Apple,
    requirements: [
      "macOS 10.13 High Sierra or later",
      "Intel or Apple Silicon (M1/M2/M3)",
      "1 GB free disk space",
      "Xcode Command Line Tools"
    ],
    steps: [
      {
        title: "Install Xcode Command Line Tools",
        description: "Open Terminal and run the command below. This installs the required build tools.",
        code: "xcode-select --install"
      },
      {
        title: "Download Lazarus",
        description: "Get the universal DMG package that works on both Intel and Apple Silicon Macs.",
        link: "https://sourceforge.net/projects/lazarus/files/Lazarus%20macOS%20x86-64/",
        linkLabel: "Download for macOS"
      },
      {
        title: "Install Free Pascal Compiler",
        description: "Download and install the Free Pascal compiler package first, then install Lazarus."
      },
      {
        title: "Open Lazarus",
        description: "Drag Lazarus to Applications. On first launch, right-click and choose \"Open\" to bypass Gatekeeper."
      }
    ],
    downloadUrl: "https://sourceforge.net/projects/lazarus/files/Lazarus%20macOS%20x86-64/"
  },
  {
    id: "linux",
    name: "Linux",
    icon: Terminal,
    requirements: [
      "Any modern Linux distribution",
      "GTK2, Qt5, or Qt6 libraries",
      "500 MB free disk space",
      "X11 or Wayland display server"
    ],
    steps: [
      {
        title: "Choose your package format",
        description: "Lazarus is available as DEB (Debian/Ubuntu), RPM (Fedora/openSUSE), or binary archives."
      },
      {
        title: "Download packages",
        description: "You need 3 packages: fpc (compiler), fpc-src (sources), and lazarus (IDE).",
        link: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20amd64%20DEB/",
        linkLabel: "Download DEB packages"
      },
      {
        title: "Install via terminal",
        description: "Install all three packages using your package manager.",
        code: "sudo dpkg -i fpc*.deb fpc-src*.deb lazarus*.deb"
      },
      {
        title: "Launch Lazarus",
        description: "Run 'lazarus-ide' from terminal or find Lazarus in your application menu."
      }
    ],
    downloadUrl: "https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20amd64%20DEB/"
  }
]

const firstProject = [
  {
    step: 1,
    title: "Create a new project",
    description: "Go to File → New → Application. This creates a new GUI application with a blank form."
  },
  {
    step: 2,
    title: "Design your form",
    description: "From the Standard tab in the Component Palette, drag a TButton and a TLabel onto the form."
  },
  {
    step: 3,
    title: "Add event handler",
    description: "Double-click the button. This creates an OnClick event handler in the code editor."
  },
  {
    step: 4,
    title: "Write code",
    description: "Inside the procedure, add:",
    code: "Label1.Caption := 'Hello, Lazarus!';"
  },
  {
    step: 5,
    title: "Run your app",
    description: "Press F9 or click Run → Run. Your application compiles and launches instantly."
  }
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="relative group mt-3">
      <pre className="bg-secondary rounded-lg px-4 py-3 font-mono text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
      </button>
    </div>
  )
}

export function GettingStartedContent() {
  const [selectedPlatform, setSelectedPlatform] = useState("windows")
  const currentPlatform = platforms.find(p => p.id === selectedPlatform)!

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-surface-subtle border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Quick Start Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Getting Started with Lazarus
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Install Lazarus IDE and create your first native application in under 10 minutes. 
            Follow our step-by-step guide for your platform.
          </p>
        </div>
      </section>

      {/* Platform Selection */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">1. Choose your platform</h2>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {platforms.map((platform) => {
              const Icon = platform.icon
              const isSelected = platform.id === selectedPlatform
              return (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                    isSelected 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{platform.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {platform.id === "windows" && "7, 8, 10, 11"}
                      {platform.id === "macos" && "Intel & Apple Silicon"}
                      {platform.id === "linux" && "DEB, RPM, Binary"}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Requirements */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-4">System Requirements</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {currentPlatform.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Installation Steps */}
          <h2 className="text-2xl font-bold text-foreground mb-6">2. Install Lazarus</h2>
          <div className="space-y-4 mb-12">
            {currentPlatform.steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {step.code && <CodeBlock code={step.code} />}
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      {step.linkLabel}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button asChild size="lg" className="gap-2">
              <a href={currentPlatform.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Download Lazarus 4.0 for {currentPlatform.name}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://sourceforge.net/projects/lazarus/files/" target="_blank" rel="noopener noreferrer">
                All Downloads
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* First Project */}
          <h2 className="text-2xl font-bold text-foreground mb-6">3. Create your first app</h2>
          <p className="text-muted-foreground mb-6">
            Let&apos;s build a simple &quot;Hello World&quot; application to verify your installation works correctly.
          </p>
          
          <div className="space-y-4 mb-8">
            {firstProject.map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-8 h-8 rounded-full bg-secondary text-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {item.code && <CodeBlock code={item.code} />}
                </div>
              </div>
            ))}
          </div>

          {/* Success Message */}
          <div className="bg-success/10 border border-success/30 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Congratulations!</h4>
                <p className="text-sm text-muted-foreground">
                  You&apos;ve created your first Lazarus application. Click the button in your running app 
                  and watch the label text change. You&apos;re now ready to build real applications!
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <h2 className="text-2xl font-bold text-foreground mb-6">4. Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://wiki.lazarus.freepascal.org/Lazarus_Tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Official Tutorial</h4>
                <p className="text-sm text-muted-foreground">Learn the basics step by step</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="/libraries"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Browse Libraries</h4>
                <p className="text-sm text-muted-foreground">Discover packages for your projects</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
