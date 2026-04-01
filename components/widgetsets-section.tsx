const widgetsets = [
  {
    name: "Win32/Win64",
    use: "Windows applications",
    status: "stable",
    note: "Native Windows API. Default widgetset on Windows.",
  },
  {
    name: "GTK2",
    use: "Linux and BSD",
    status: "stable",
    note: "Widely deployed on Linux. Mature and well-tested.",
  },
  {
    name: "GTK3",
    use: "Modern Linux / BSD",
    status: "stable",
    note: "Updated GTK toolkit with improved rendering and HiDPI.",
  },
  {
    name: "Qt4",
    use: "Cross-platform",
    status: "legacy",
    note: "Qt 4 binding. Superseded by Qt5.",
  },
  {
    name: "Qt5",
    use: "Cross-platform",
    status: "stable",
    note: "Qt 5 binding. Supported on Linux, Windows, and macOS.",
  },
  {
    name: "Cocoa",
    use: "macOS",
    status: "stable",
    note: "Native macOS API. Default widgetset on macOS.",
  },
  {
    name: "fpGUI",
    use: "Lightweight environments",
    status: "experimental",
    note: "Custom drawn. Useful for minimal or embedded setups.",
  },
  {
    name: "NoGUI",
    use: "Headless / server",
    status: "stable",
    note: "No graphical output. Suitable for CLI tools and daemons.",
  },
  {
    name: "Custom Drawn",
    use: "Portable / mobile",
    status: "experimental",
    note: "Software-rendered controls. Targets Android and other platforms.",
  },
]

const statusColors: Record<string, string> = {
  stable: "bg-[oklch(0.85_0.12_145)] text-[oklch(0.25_0.10_145)] dark:bg-[oklch(0.25_0.10_145)] dark:text-[oklch(0.85_0.12_145)]",
  legacy: "bg-[oklch(0.93_0.10_60)] text-[oklch(0.40_0.10_60)] dark:bg-[oklch(0.30_0.10_60)] dark:text-[oklch(0.88_0.10_60)]",
  experimental: "bg-[oklch(0.92_0.08_255)] text-[oklch(0.40_0.12_255)] dark:bg-[oklch(0.22_0.10_255)] dark:text-[oklch(0.80_0.12_255)]",
}

export function WidgetsetsSection() {
  return (
    <section id="widgetsets" className="py-24 bg-surface-subtle" aria-labelledby="widgetsets-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Widgetsets
          </p>
          <h2
            id="widgetsets-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            Native look and feel on every platform
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The LCL delegates rendering to a widgetset that maps to the native graphical
            toolkit of the target OS. Choose the right one for your deployment target.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm" aria-label="Widgetsets table">
            <thead>
              <tr className="border-b border-border bg-surface-subtle">
                <th className="text-left px-5 py-3 font-semibold text-foreground">Widgetset</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">Primary use</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {widgetsets.map((ws, i) => (
                <tr
                  key={ws.name}
                  className={`border-b border-border last:border-0 hover:bg-surface-subtle transition-colors ${
                    i % 2 === 0 ? "" : "bg-surface-subtle/40"
                  }`}
                >
                  <td className="px-5 py-3 font-mono font-semibold text-foreground whitespace-nowrap">
                    {ws.name}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{ws.use}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[ws.status]}`}
                    >
                      {ws.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{ws.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
