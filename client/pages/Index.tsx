import { Link } from "react-router-dom";

const quickLinks = [
  { title: "Virtual Tours", to: "/virtual-tours", desc: "Immerse in 360° panoramas of Sikkim’s sacred spaces.", icon: "🎥" },
  { title: "Monastery Map", to: "/map", desc: "Explore locations, routes, and nearby attractions.", icon: "🗺️" },
  { title: "Cultural Calendar", to: "/calendar", desc: "Festivals, rituals, and monastery events.", icon: "📅" },
];

const features = [
  {
    title: "Digital Archives",
    desc: "Access manuscripts, murals, oral histories and heritage records.",
    to: "/archives",
  },
  {
    title: "Narrated Walkthroughs",
    desc: "Multi‑language guides bringing stories and symbolism to life.",
    to: "/virtual-tours",
  },
  {
    title: "Travel & Services",
    desc: "Plan your visit with transport, stays, and certified guides.",
    to: "/transport",
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_10%,rgba(245,158,11,0.18),transparent),linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,0.35),rgba(0,0,0,0.75))]" />
        <video
          className="h-[64vh] w-full object-cover object-center md:h-[72vh]"
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.keralatourism.org/ktadmin/img/pages/video/kumarakom-1707217580_9c58f84841733798a0db.mp4"
        >
          <source src="https://www.keralatourism.org/ktadmin/img/pages/video/kumarakom-1707217580_9c58f84841733798a0db.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 mx-auto flex max-w-7xl flex-col justify-center px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow md:text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-black" />
              Sikkim • Cultural Heritage
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Monastery360: A Digital Heritage Platform for Sikkim’s Monasteries
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/90 md:mt-4 md:text-lg">
              Discover sacred spaces through immersive tours, curated archives, and an interactive map—crafted with reverence for the Himalayas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/virtual-tours"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:brightness-110 md:text-base"
              >
                Explore 360° Tours
              </Link>
              <Link
                to="/archives"
                className="rounded-md border border-yellow-400 bg-yellow-400/90 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-yellow-400 md:text-base"
              >
                Browse Archives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="mx-auto -mt-10 max-w-7xl px-4 md:-mt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((q) => (
            <Link
              key={q.title}
              to={q.to}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-black text-yellow-400 shadow-md">{q.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{q.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{q.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-14 max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            What you can explore
          </h2>
          <Link to="/about" className="text-sm font-semibold text-primary hover:underline">
            About the project →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 shadow transition hover:-translate-y-0.5 hover:shadow-xl">
              <div className="absolute right-0 top-0 -z-10 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-red-500/10 blur-2xl transition group-hover:translate-x-6 group-hover:-translate-y-6" />
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <Link to={f.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                Learn more
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="grid items-stretch gap-6 md:grid-cols-5">
          <div className="rounded-xl border border-border bg-black p-6 text-white md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">Highlights</p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight">
              Explore iconic monasteries and their living traditions
            </h3>
            <p className="mt-2 text-sm text-white/80">
              From Rumtek to Pemayangtse, discover timeless art, chants, and rituals. Dive into heritage through stories, visuals, and guided tours.
            </p>
            <Link to="/map" className="mt-4 inline-block rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:brightness-110">
              View interactive map
            </Link>
          </div>
          <div className="md:col-span-3">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Rumtek Monastery",
                  img: "https://images.unsplash.com/photo-1628659450522-dc20076cedb9?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  title: "Pemayangtse Monastery",
                  img: "https://images.unsplash.com/photo-1602584729270-94a6da7f0e59?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  title: "Tashiding Monastery",
                  img: "https://images.unsplash.com/photo-1530432999454-016a47c78af3?q=80&w=1974&auto=format&fit=crop",
                },
              ].map((m) => (
                <div key={m.title} className="group overflow-hidden rounded-xl border border-border bg-white shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img src={m.img} alt={m.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <p className="absolute bottom-2 left-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                      {m.title}
                    </p>
                  </div>
                  <div className="p-4 text-sm text-muted-foreground">
                    360° view and historical overview coming soon
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-black via-black to-zinc-900 p-8 text-white md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold">Join the preservation effort</h3>
              <p className="mt-2 text-white/85">
                Monastery360 is designed for researchers, monks, students, and travelers. This platform is API‑ready for future integrations.
              </p>
              <div className="mt-4 flex gap-3">
                <Link to="/contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:brightness-110">
                  Contact us
                </Link>
                <Link to="/about" className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-500/30 blur-2xl" />
              <div className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-yellow-400/30 blur-2xl" />
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-md bg-white/10 p-3">
                    <p className="font-extrabold text-yellow-400">360°</p>
                    <p className="mt-1 opacity-80">Virtual Tours</p>
                  </div>
                  <div className="rounded-md bg-white/10 p-3">
                    <p className="font-extrabold text-yellow-400">Map</p>
                    <p className="mt-1 opacity-80">Geo-tagged</p>
                  </div>
                  <div className="rounded-md bg-white/10 p-3">
                    <p className="font-extrabold text-yellow-400">Archive</p>
                    <p className="mt-1 opacity-80">Searchable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
