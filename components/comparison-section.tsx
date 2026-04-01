import { Check, Minus } from "lucide-react"

const rows = [
  {
    label: "Licence",
    lazarus: "Free / Open-Source (LGPL + GPL)",
    delphi: "Commercial — subscription or perpetual",
    lazarusPositive: true,
    delphiPositive: false,
  },
  {
    label: "Language",
    lazarus: "Object Pascal (Free Pascal dialect)",
    delphi: "Object Pascal (Embarcadero dialect)",
    lazarusPositive: true,
    delphiPositive: true,
  },
  {
    label: "Cross-platform",
    lazarus: "Windows, Linux, macOS, BSD, and more",
    delphi: "Windows (primary), macOS, iOS, Android via FireMonkey",
    lazarusPositive: true,
    delphiPositive: true,
  },
  {
    label: "Cross-compilation",
    lazarus: "Compile for any supported target from any host",
    delphi: "Platform-specific builds; cross-compilation is limited",
    lazarusPositive: true,
    delphiPositive: false,
  },
  {
    label: "Source availability",
    lazarus: "Full source — IDE, compiler, and LCL",
    delphi: "Partial — RTL source included, compiler is closed",
    lazarusPositive: true,
    delphiPositive: false,
  },
  {
    label: "IDE experience",
    lazarus: "Functional, Delphi-like; actively improved",
    delphi: "Polished, mature; strong tooling ecosystem",
    lazarusPositive: false,
    delphiPositive: true,
  },
  {
    label: "Documentation",
    lazarus: "Community wiki, forums, FPC docs",
    delphi: "Extensive official docs, dedicated support",
    lazarusPositive: false,
    delphiPositive: true,
  },
  {
    label: "Community",
    lazarus: "Global open-source community; public forums",
    delphi: "Commercial vendor + partner ecosystem",
    lazarusPositive: true,
    delphiPositive: true,
  },
  {
    label: "VCL compatibility",
    lazarus: "LCL — API-compatible in many areas; migration guide available",
    delphi: "VCL is native; Windows-only",
    lazarusPositive: true,
    delphiPositive: true,
  },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 bg-surface-subtle" aria-labelledby="comparison-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Comparison
          </p>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            Lazarus vs Delphi
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Both tools share the same language roots. The choice depends on your
            priorities — this table presents the differences factually.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm" aria-label="Comparison between Lazarus and Delphi">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-4 text-muted-foreground font-medium w-1/5">
                  Aspect
                </th>
                <th className="text-left px-5 py-4 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-semibold text-foreground">Lazarus IDE</span>
                  </div>
                </th>
                <th className="text-left px-5 py-4 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                    <span className="font-semibold text-foreground">Delphi</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-border last:border-0 ${
                    i % 2 === 1 ? "bg-surface-subtle/50" : ""
                  }`}
                >
                  <td className="px-5 py-3 font-medium text-foreground align-top">{row.label}</td>
                  <td className="px-5 py-3 text-muted-foreground align-top">
                    <span className="flex items-start gap-2">
                      {row.lazarusPositive ? (
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      ) : (
                        <Minus className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                      )}
                      {row.lazarus}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground align-top">
                    <span className="flex items-start gap-2">
                      {row.delphiPositive ? (
                        <Check className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      ) : (
                        <Minus className="w-4 h-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      )}
                      {row.delphi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          This comparison is provided for informational purposes. Details may vary across versions. Delphi is a registered trademark of Embarcadero Technologies.
        </p>
      </div>
    </section>
  )
}
