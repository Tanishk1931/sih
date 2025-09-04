import { ReactNode, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Explore",
    children: [
      { label: "Virtual Tours", to: "/virtual-tours" },
      { label: "Monastery Map", to: "/map" },
      { label: "Digital Archives", to: "/archives" },
      { label: "Cultural Calendar", to: "/calendar" },
    ],
  },
  {
    label: "Plan",
    children: [
      { label: "Transport & Tourism", to: "/transport" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

function LanguageSwitcher() {
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

function Dropdown({ label, children }: { label: string; children: ReactNode }) {
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
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-yellow-500 text-white shadow-md">
            <span className="font-bold">M</span>
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-foreground md:text-lg">Monastery360</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground md:text-xs">Sikkim Digital Heritage</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <Dropdown key={item.label} label={item.label}>
                <ul className="grid gap-1">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        className={({ isActive }) =>
                          `block rounded px-3 py-2 text-sm ${
                            isActive ? "bg-accent text-primary" : "hover:bg-accent"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Dropdown>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                className={({ isActive }) =>
                  `rounded px-3 py-2 text-sm font-semibold ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/virtual-tours"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:brightness-110 md:inline-block"
          >
            Explore 360°
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="flex items-center gap-2 overflow-x-auto px-4 pb-3">
          {(() => {
            const items: { label: string; to: string }[] = [];
            navItems.forEach((i) => {
              // @ts-expect-error - runtime check
              if (i.children) {
                // @ts-expect-error - runtime check
                items.push(...i.children);
              } else if ("to" in i && i.to) {
                // @ts-expect-error - runtime check
                items.push({ label: i.label, to: i.to });
              }
            });
            return items.map((child) => (
              <NavLink
                key={child.to}
                to={child.to}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full border px-3 py-1.5 text-xs ${
                    isActive ? "border-primary text-primary" : "border-border"
                  }`
                }
              >
                {child.label}
              </NavLink>
            ));
          })()}
        </div>
      </div>
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
