import { ReactNode, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navItems: { label: string; to: string }[] = [
  { label: "Where to go", to: "/where-to-go" },
  { label: "Experiences", to: "/experiences" },
  { label: "Plan your trip", to: "/plan" },
  { label: "Monasteries", to: "/monasteries" },
  { label: "Festivals & Events", to: "/festivals" },
];

/* Language switcher removed per new navbar spec */
function LanguageSwitcherRemoved() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const languages: { code: string; label: string }[] = [
    { code: "EN", label: "English" },
    { code: "NE", label: "नेपाली" },
    { code: "HI", label: "हिंदी" },
    { code: "TB", label: "བོད་ཡིག" },
  ];
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 rounded-md border border-border bg-white/80 px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur hover:bg-white/95 md:text-base"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
        {lang}
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-md border border-border bg-popover/95 p-1 text-sm shadow-xl backdrop-blur md:text-base"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={lang === l.code}
                className={`flex w-full items-center justify-between rounded px-3 py-2 hover:bg-accent ${
                  lang === l.code ? "text-primary" : "text-foreground"
                }`}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span>{l.label}</span>
                {lang === l.code && (
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M16.704 5.29a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3A1 1 0 016.29 9.79l2.293 2.293 6.793-6.793a1 1 0 011.328 0z" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* Dropdown removed in favor of inline links per new navbar spec */
function DropdownRemoved({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:text-primary md:text-base"
      >
        {label}
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 z-40 mt-2 min-w-56 rounded-md border border-border bg-popover/95 p-2 shadow-xl backdrop-blur">
          {children}
        </div>
      )}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q.length) navigate(`/search?q=${encodeURIComponent(q)}`);
    setOpen(false);
  };
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-b from-red-900/70 to-transparent text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-yellow-400 shadow-md ring-1 ring-yellow-400/60">
            <span className="font-extrabold">ST</span>
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-yellow-300/90 md:text-xs">Sikkim Tourism</p>
          </div>
        </Link>

        {/* Desktop links + search */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <form onSubmit={onSearch} className="ml-3 hidden items-center gap-2 md:flex">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tours, archives, monasteries..."
              className="w-56 rounded-md bg-white/10 px-3 py-2 text-sm placeholder-white/70 outline-none ring-1 ring-white/20 focus:ring-yellow-300"
            />
            <button type="submit" className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow hover:brightness-110">
              Search
            </button>
          </form>
        </div>

        {/* Mobile hamburger */}
        <button
          className="grid h-10 w-10 place-items-center rounded-md bg-black/40 ring-1 ring-white/15 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mx-auto max-w-7xl px-4 pb-4 md:hidden">
          <div className="overflow-hidden rounded-xl bg-black/80 shadow-xl ring-1 ring-white/10">
            <form onSubmit={onSearch} className="flex gap-2 px-4 py-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tours, archives, monasteries..."
                className="w-full rounded-md bg-white/10 px-3 py-2 text-sm placeholder-white/70 outline-none ring-1 ring-white/20 focus:ring-yellow-300"
              />
              <button type="submit" className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">Go</button>
            </form>
            <div className="grid border-t border-white/10">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "bg-white/5 text-yellow-300" : "hover:bg-white/5 hover:text-yellow-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">M</div>
            <span className="font-bold">Monastery360</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A Digital Heritage Platform preserving and showcasing Sikkim’s monasteries through immersive 360° experiences, archives, and cultural insights.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Quick Links</p>
          <ul className="grid gap-2 text-sm">
            <li><Link className="hover:text-primary" to="/archives">Digital Archives</Link></li>
            <li><Link className="hover:text-primary" to="/map">Monastery Map</Link></li>
            <li><Link className="hover:text-primary" to="/calendar">Cultural Calendar</Link></li>
            <li><Link className="hover:text-primary" to="/transport">Transport & Tourism</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Government Contact</p>
          <p className="text-sm text-muted-foreground">
            Government of Sikkim – Department of Higher & Technical Education
          </p>
          <p className="mt-2 text-sm">Email: info@dhtesikkim.gov.in</p>
          <p className="text-sm">Phone: +91-3592-XXXXXX</p>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-black/90 text-white grid place-items-center hover:brightness-110"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12"/></svg></a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full bg-black/90 text-white grid place-items-center hover:brightness-110"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 7.5c.01.2.01.4.01.6 0 6-4.6 12.9-12.9 12.9-2.6 0-5-.8-7-2.1.4 0 .8.1 1.1.1 2.1 0 4.1-.7 5.6-1.9-2-.1-3.6-1.4-4.2-3.2.3.1.6.1.9.1.4 0 .9-.1 1.2-.2-2.1-.4-3.7-2.2-3.7-4.5v-.1c.6.3 1.3.5 2 .5-1.2-.8-2-2.1-2-3.6 0-.8.2-1.5.6-2.1 2.2 2.7 5.5 4.5 9.2 4.7-.1-.3-.1-.6-.1-.9 0-2.4 2-4.4 4.4-4.4 1.3 0 2.4.6 3.1 1.6 1-.2 1.9-.5 2.7-.9-.3 1-1 1.8-2.1 2.3 1-.1 1.8-.4 2.6-.7-.6 1-1.3 1.8-2.1 2.4z"/></svg></a>
            <a href="#" aria-label="YouTube" className="h-9 w-9 rounded-full bg-black/90 text-white grid place-items-center hover:brightness-110"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.8 8.5a3 3 0 00-2.1-2.1C18 6 12 6 12 6s-6 0-7.7.4a3 3 0 00-2.1 2.1A31 31 0 001 12a31 31 0 001.2 3.5 3 3 0 002.1 2.1C6 18 12 18 12 18s6 0 7.7-.4a3 3 0 002.1-2.1A31 31 0 0023 12a31 31 0 00-1.2-3.5zM10 15V9l6 3-6 3z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-black/95 py-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Monastery360 • Inspired by NTB design • All rights reserved
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
