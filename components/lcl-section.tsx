import { ArrowRight } from "lucide-react"

const components = [
  "TForm", "TButton", "TEdit", "TLabel",
  "TListBox", "TComboBox", "TCheckBox", "TRadioButton",
  "TPanel", "TGroupBox", "TMemo", "TImage",
  "TTimer", "TMenu", "TScrollBar", "TTreeView",
]

export function LclSection() {
  return (
    <section id="lcl" className="py-24 bg-background" aria-labelledby="lcl-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: description */}
          <div>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
              Lazarus Component Library
            </p>
            <h2
              id="lcl-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6"
            >
              The LCL — cross-platform components, one API
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The Lazarus Component Library (LCL) is a rich set of visual and non-visual
              components inspired by Delphi&apos;s VCL. It was redesigned from the ground up
              to support cross-platform development: your application code calls the LCL API,
              and the LCL delegates to the appropriate native widgetset for the current platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This architecture separates your application logic from the graphical subsystem.
              You write code once against the LCL API, and the rendering is handled natively
              by GTK, Qt, Win32, Cocoa, or whichever widgetset is active.
            </p>

            {/* Architecture diagram */}
            <div className="rounded-xl border border-border bg-surface-subtle p-6">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                Architecture
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  "Your Application",
                  "LCL API",
                  "Widgetset Interface",
                  "Native OS Layer",
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: component palette */}
          <div>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Sample components
            </p>
            <div className="grid grid-cols-2 gap-2">
              {components.map((comp) => (
                <div
                  key={comp}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-mono text-foreground hover:border-primary/50 hover:bg-brand-blue-muted transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {comp}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Hundreds of additional components are available through the Lazarus package manager (OPM).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
