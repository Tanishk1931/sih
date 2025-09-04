import { useState } from "react";
import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function VirtualTours() {
  const [lang, setLang] = useState("EN");
  return (
    <PlaceholderPage
      title="Virtual Tours (360°)"
      description="Experience panoramic views with narrated walkthroughs. Language toggle and tour list are placeholders for now."
    >
      <div className="mb-4 flex items-center gap-2 text-sm">
        <span className="font-semibold">Narration:</span>
        {[
          { code: "EN", label: "English" },
          { code: "NE", label: "नेपाली" },
          { code: "HI", label: "हिंदी" },
          { code: "TB", label: "བོད་ཡིག" },
        ].map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`rounded-full border px-3 py-1 ${
              lang === l.code ? "border-primary text-primary" : "border-border"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-border bg-white shadow">
            <div className="relative h-40 bg-[linear-gradient(135deg,rgba(239,68,68,0.2),rgba(234,179,8,0.2))]">
              <div className="absolute inset-0 grid place-items-center text-6xl">🧭</div>
            </div>
            <div className="p-4 text-sm">
              <p className="font-semibold">Monastery Tour #{i + 1}</p>
              <p className="mt-1 text-muted-foreground">360° panoramic placeholder ��� Narration: {lang}</p>
            </div>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
