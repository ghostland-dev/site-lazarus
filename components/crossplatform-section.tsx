const operatingSystems = [
  { name: "Windows", tier: "primary" },
  { name: "Linux", tier: "primary" },
  { name: "macOS", tier: "primary" },
  { name: "FreeBSD", tier: "primary" },
  { name: "OpenBSD", tier: "secondary" },
  { name: "NetBSD", tier: "secondary" },
  { name: "ReactOS", tier: "secondary" },
  { name: "Haiku", tier: "secondary" },
  { name: "DOS", tier: "legacy" },
  { name: "MorphOS", tier: "legacy" },
  { name: "AmigaOS 4", tier: "legacy" },
  { name: "AROS", tier: "legacy" },
]

const architectures = [
  { name: "x86 (32-bit)", tier: "primary" },
  { name: "x86-64 (AMD64)", tier: "primary" },
  { name: "ARM (32-bit)", tier: "primary" },
  { name: "AArch64 (ARM64)", tier: "primary" },
  { name: "PowerPC", tier: "secondary" },
  { name: "PowerPC 64", tier: "secondary" },
  { name: "MIPS", tier: "secondary" },
  { name: "SPARC", tier: "secondary" },
  { name: "Motorola 68000", tier: "legacy" },
  { name: "Alpha", tier: "legacy" },
  { name: "IA-64 (Itanium)", tier: "legacy" },
  { name: "RISC-V 64", tier: "secondary" },
]

const tierStyle: Record<string, string> = {
  primary: "border-primary/40 bg-brand-blue-muted text-foreground",
  secondary: "border-border bg-card text-foreground",
  legacy: "border-border bg-muted/50 text-muted-foreground",
}

const tierDot: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-muted-foreground",
  legacy: "bg-muted-foreground/40",
}

export function CrossPlatformSection() {
  return (
    <section id="platforms" className="py-24 bg-background" aria-labelledby="platforms-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Cross-Platform
          </p>
          <h2
            id="platforms-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            One codebase, many destinations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Free Pascal and Lazarus support an unusually wide range of operating systems and
            CPU architectures — from modern desktops to legacy and embedded environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Operating systems */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">OS</span>
              Operating Systems
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {operatingSystems.map((os) => (
                <div
                  key={os.name}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${tierStyle[os.tier]}`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${tierDot[os.tier]}`} />
                  {os.name}
                </div>
              ))}
            </div>
          </div>

          {/* CPU architectures */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">CPU</span>
              CPU Architectures
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {architectures.map((arch) => (
                <div
                  key={arch.name}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${tierStyle[arch.tier]}`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${tierDot[arch.tier]}`} />
                  {arch.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground border-t border-border pt-6">
          <span className="font-medium text-foreground">Support level:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Primary — well supported
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            Secondary — supported, may vary
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
            Legacy / partial — limited support
          </span>
          <span className="mt-1 sm:mt-0">
            Support levels may vary depending on the OS / architecture / widgetset combination.
          </span>
        </div>
      </div>
    </section>
  )
}
