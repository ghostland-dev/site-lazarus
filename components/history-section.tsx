const timeline = [
  {
    year: "1997–1998",
    title: "Megido — the predecessor",
    desc: "A group of developers attempted to create an open-source Delphi clone called Megido. The project struggled and was eventually abandoned, leaving no usable result.",
  },
  {
    year: "1999",
    title: "Lazarus is born",
    desc: "Lazarus was started as a fresh attempt to build an open-source IDE for Free Pascal. The name was chosen deliberately — a project \"raised from the dead\" after Megido's failure, referencing the biblical story of Lazarus.",
  },
  {
    year: "2000–2001",
    title: "Early public releases",
    desc: "Initial versions appeared on SourceForge. The project attracted early adopters from the Pascal and Delphi community who saw the value of a free, cross-platform alternative.",
  },
  {
    year: "2001–2010",
    title: "Steady growth",
    desc: "The project gained stability. The LCL matured, the form designer became usable, and cross-platform support for Linux and Windows solidified. A growing community of contributors joined.",
  },
  {
    year: "2010–2020",
    title: "Maturity and broadening platform support",
    desc: "macOS support improved significantly with the Cocoa widgetset. Cross-compilation became a well-documented feature. Dozens of third-party component packages were published.",
  },
  {
    year: "2020–2025",
    title: "Modern era",
    desc: "Lazarus continued to track Free Pascal releases. HiDPI improvements, GTK3 and Qt5 widgetsets, and ongoing IDE refinements kept the toolchain competitive for everyday development.",
  },
  {
    year: "February 2026",
    title: "Lazarus 4.6.0 released",
    desc: "The latest stable release, version 4.6.0, was published on February 25, 2026. Development remains active with regular releases and an engaged global community.",
    current: true,
  },
]

export function HistorySection() {
  return (
    <section id="history" className="py-24 bg-background" aria-labelledby="history-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-1">
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
              Project History
            </p>
            <h2
              id="history-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6"
            >
              More than 25 years of development
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lazarus began in 1999 as a community response to the lack of a free, open-source
              IDE for Object Pascal developers. The name itself carries meaning — the project
              was conceived as a resurrection of an earlier, failed attempt named Megido.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From those early beginnings, Lazarus has grown into a mature and reliable IDE
              that runs on a wider range of platforms than most commercial counterparts.
            </p>
          </div>

          {/* Right: timeline */}
          <div className="lg:col-span-2">
            <ol className="relative border-l border-border pl-8 space-y-10" aria-label="Project timeline">
              {timeline.map((event) => (
                <li key={event.year} className="relative">
                  {/* Dot */}
                  <span
                    className={`absolute -left-[2.6rem] mt-1 flex w-6 h-6 items-center justify-center rounded-full border-2 ${
                      event.current
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-border"
                    }`}
                    aria-hidden="true"
                  >
                    {event.current && (
                      <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </span>

                  <div>
                    <span
                      className={`inline-block font-mono text-xs px-2 py-0.5 rounded-full mb-2 ${
                        event.current
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-subtle text-muted-foreground border border-border"
                      }`}
                    >
                      {event.year}
                    </span>
                    <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
