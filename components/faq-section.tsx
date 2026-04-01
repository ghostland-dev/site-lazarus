"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is Lazarus IDE?",
    a: "Lazarus is a free, open-source Integrated Development Environment (IDE) and Rapid Application Development (RAD) tool for the Object Pascal programming language. It provides a visual form designer, a code editor, a debugger, and a component palette — all built on top of the Free Pascal compiler.",
  },
  {
    q: "What is the difference between Lazarus and Free Pascal?",
    a: "Free Pascal (FPC) is the compiler. It takes your Object Pascal source code and produces native executables for the target platform. Lazarus is the IDE built on top of FPC — it provides the graphical development environment, the LCL component library, and the visual form designer. You need both to use Lazarus.",
  },
  {
    q: "Is Lazarus compatible with Delphi?",
    a: "Lazarus and Delphi share the same language roots (Object Pascal) and a similar IDE workflow. The LCL is API-inspired by Delphi's VCL, and many Delphi applications can be ported to Lazarus with moderate effort. However, they are not fully binary or source-compatible — migration guides are available in the official wiki.",
  },
  {
    q: "Can I build applications for Windows, Linux, and macOS?",
    a: "Yes. Lazarus and Free Pascal support all three platforms as primary targets. You can develop on any of them and cross-compile for others. macOS requires the Cocoa widgetset; Linux typically uses GTK2 or GTK3; Windows uses Win32/Win64.",
  },
  {
    q: "Is Lazarus free?",
    a: "Lazarus is completely free — free to download, free to use for personal or commercial projects, and free to modify and redistribute. It is licensed under the LGPL (for the LCL and runtime libraries) and GPL (for the IDE itself).",
  },
  {
    q: "Can I distribute proprietary applications built with Lazarus?",
    a: "Yes. The LCL is distributed under the modified LGPL with a linking exception, which means you can distribute closed-source commercial applications that link against it without any obligation to release your source code. The IDE itself (GPL) is not part of the distributed application.",
  },
  {
    q: "Which widgetsets are available?",
    a: "The main widgetsets are Win32/Win64 (Windows), GTK2 and GTK3 (Linux / BSD), Qt5 (cross-platform), and Cocoa (macOS). Additional widgetsets include fpGUI, NoGUI, and Custom Drawn controls. The choice depends on your target platform and deployment requirements.",
  },
  {
    q: "How can I contribute to the project?",
    a: "You can contribute by reporting bugs on the GitLab issue tracker, submitting merge requests, improving the wiki documentation, testing new releases, writing and sharing packages, or participating in the community forum and mailing lists.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-surface-subtle" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Answers to the most common questions about Lazarus and Free Pascal.
          </p>
        </div>

        <dl className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-foreground hover:bg-surface-subtle transition-colors"
                >
                  {item.q}
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </dt>
              {open === i && (
                <dd className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {item.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
