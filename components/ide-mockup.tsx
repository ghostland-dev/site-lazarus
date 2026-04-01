export function IdeMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Window chrome */}
      <div className="rounded-xl border border-border shadow-2xl overflow-hidden bg-surface-code">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[oklch(0.16_0.02_250)] border-b border-[oklch(0.22_0.015_250)]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center text-xs text-[oklch(0.55_0.01_250)] font-mono">
            Unit1.pas — Lazarus IDE 4.6.0
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex items-center gap-4 px-4 py-1.5 bg-[oklch(0.14_0.02_250)] border-b border-[oklch(0.22_0.015_250)]">
          {["File", "Edit", "View", "Project", "Run", "Packages", "Tools", "Help"].map((m) => (
            <span key={m} className="text-xs text-[oklch(0.72_0.005_250)] hover:text-white cursor-default select-none">
              {m}
            </span>
          ))}
        </div>

        {/* Editor body */}
        <div className="flex" style={{ minHeight: "320px" }}>
          {/* File tree */}
          <div className="w-36 bg-[oklch(0.13_0.02_250)] border-r border-[oklch(0.22_0.015_250)] p-2 text-xs font-mono">
            <div className="text-[oklch(0.55_0.01_250)] mb-1 text-[10px] uppercase tracking-wider">Project</div>
            <div className="space-y-0.5">
              {["MyApp.lpr", "Unit1.pas", "Unit1.lfm", "MainForm.pas"].map((f, i) => (
                <div
                  key={f}
                  className={`px-1.5 py-0.5 rounded text-[11px] ${
                    i === 1
                      ? "bg-[oklch(0.45_0.18_255)] text-white"
                      : "text-[oklch(0.65_0.005_250)] hover:bg-[oklch(0.20_0.015_250)]"
                  }`}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Code editor */}
          <div className="flex-1 p-4 overflow-hidden">
            <pre className="text-[12px] font-mono leading-relaxed">
              <code>
                <span className="text-[oklch(0.55_0.01_250)]">{"unit "}</span>
                <span className="text-[oklch(0.75_0.12_200)]">{"Unit1"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{";"}</span>{"\n\n"}
                <span className="text-[oklch(0.65_0.18_255)]">{"interface"}</span>{"\n\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"uses"}{"\n"}{"  "}</span>
                <span className="text-[oklch(0.75_0.12_200)]">{"Classes, SysUtils, Forms,"}</span>{"\n"}
                <span className="text-[oklch(0.75_0.12_200)]">{"  Controls, StdCtrls;"}</span>{"\n\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"type"}{"\n"}{"  "}</span>
                <span className="text-[oklch(0.65_0.18_255)]">{"TForm1"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{" = class("}</span>
                <span className="text-[oklch(0.75_0.12_200)]">{"TForm"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{")"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"    "}</span>
                <span className="text-[oklch(0.65_0.18_255)]">{"Button1"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{": "}</span>
                <span className="text-[oklch(0.75_0.12_200)]">{"TButton"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{";"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"    "}</span>
                <span className="text-[oklch(0.65_0.18_255)]">{"Label1"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{": "}</span>
                <span className="text-[oklch(0.75_0.12_200)]">{"TLabel"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{";"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"    "}</span>
                <span className="text-[oklch(0.65_0.18_255)]">{"procedure "}</span>
                <span className="text-[oklch(0.85_0.12_130)]">{"Button1Click"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{"(Sender: "}</span>
                <span className="text-[oklch(0.75_0.12_200)]">{"TObject"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{");"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"  end;"}</span>{"\n\n"}
                <span className="text-[oklch(0.65_0.18_255)]">{"implementation"}</span>{"\n\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"procedure "}</span>
                <span className="text-[oklch(0.65_0.18_255)]">{"TForm1"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{"."}</span>
                <span className="text-[oklch(0.85_0.12_130)]">{"Button1Click"}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{";"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"begin"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"  Label1.Caption := "}</span>
                <span className="text-[oklch(0.75_0.18_40)]">{`'Hello, World!'`}</span>
                <span className="text-[oklch(0.55_0.01_250)]">{";"}</span>{"\n"}
                <span className="text-[oklch(0.55_0.01_250)]">{"end;"}</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1 bg-[oklch(0.45_0.18_255)] text-white text-[10px] font-mono">
          <span>Unit1.pas</span>
          <span>Ln 22, Col 14</span>
          <span>Free Pascal 3.2.4</span>
          <span className="text-[oklch(0.90_0.08_130)]">Build: OK</span>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -inset-4 -z-10 rounded-2xl opacity-20 blur-3xl bg-primary" />
    </div>
  )
}
