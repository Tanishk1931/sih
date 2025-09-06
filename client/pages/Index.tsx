import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const quickLinks = [
  {
    title: "Virtual Tours",
    to: "/virtual-tours",
    desc: "Immerse in 360° panoramas of Sikkim’s sacred spaces.",
    icon: "🎥",
  },
  {
    title: "Monastery Map",
    to: "/map",
    desc: "Explore locations, routes, and nearby attractions.",
    icon: "🗺️",
  },
  {
    title: "Cultural Calendar",
    to: "/calendar",
    desc: "Festivals, rituals, and monastery events.",
    icon: "📅",
  },
];

const features = [
  {
    title: "Digital Archives",
    desc: "Access manuscripts, murals, oral histories and heritage records.",
    to: "/archives",
  },
  {
    title: "Narrated Walkthroughs",
    desc: "Multi-language guides bringing stories and symbolism to life.",
    to: "/virtual-tours",
  },
  {
    title: "Travel & Services",
    desc: "Plan your visit with transport, stays, and certified guides.",
    to: "/transport",
  },
];

function WondersHeader() {
  return (
    <div className="mb-8 text-center text-white">
      <h2 className="text-3xl font-extrabold md:text-4xl">
        Sikkim Stunning Wonders
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80 md:text-base">
        Enjoy the magnificent and varied allure of God's Own Country
      </p>
      <div className="mx-auto mt-4 h-1 w-36 rounded-full bg-gradient-to-r from-[hsl(var(--brand-red))] via-[hsl(var(--brand-yellow))] to-[hsl(var(--brand-red))]" />
    </div>
  );
}

function WondersGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const wonders = [
    {
      title: "Monasteries",
      to: "/monasteries",
      desc: "Ancient gompas, rituals, and living traditions.",
      img: "https://source.unsplash.com/1600x900/?sikkim,monastery",
    },
    {
      title: "Zero Point",
      to: "/zero-point",
      desc: "High‑altitude snow vistas at the road’s edge.",
      img: "https://source.unsplash.com/1600x900/?zero%20point,sikkim,snow",
    },
    {
      title: "Gangtok",
      to: "/gangtok",
      desc: "The vibrant capital with culture and cuisine.",
      img: "https://source.unsplash.com/1600x900/?gangtok,city,night",
    },
    {
      title: "Sikkim Cultural Heritage",
      to: "/heritage",
      desc: "Art, language, and festivals that define Sikkim.",
      img: "https://source.unsplash.com/1600x900/?sikkim,culture,festival",
    },
    {
      title: "Lachung",
      to: "/lachung",
      desc: "Gateway to Yumthang with stunning valleys.",
      img: "https://source.unsplash.com/1600x900/?lachung,valley",
    },
    {
      title: "Thangu Valley",
      to: "/thangu-valley",
      desc: "Pristine alpine meadows near Lachen with dramatic vistas.",
      img: "https://source.unsplash.com/1600x900/?thangu,valley,sikkim",
    },
  ];

  return (
    <div
      ref={ref}
      className={`grid gap-6 md:grid-cols-3 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-all duration-700 ease-out`}
    >
      {wonders.map((c, i) => (
        <Link
          key={c.title}
          to={c.to}
          className="group relative block h-[22rem] overflow-hidden rounded-2xl ring-1 ring-red-700/40 shadow-[0_0_12px_rgba(213,0,0,0.25)] transition-shadow md:h-[26rem] hover:ring-yellow-400/70 hover:shadow-[0_0_22px_rgba(255,193,7,0.45)]"
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          <img
            src={c.img}
            alt={c.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-black))] via-[hsl(var(--brand-black))/0.3] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="text-xl font-extrabold text-white drop-shadow">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-white/90">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 rounded-md bg-yellow-400/95 px-2.5 py-1.5 text-xs font-semibold text-black shadow">
              Explore
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
              </svg>
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-red-600/30 drop-shadow-[0_0_10px_rgba(213,0,0,0.35)] group-hover:ring-yellow-400/60 group-hover:drop-shadow-[0_0_18px_rgba(255,193,7,0.55)]" />
        </Link>
      ))}
    </div>
  );
}

function InspiredSection() {
  const items = [
    {
      title: "Discover Sikkim’s Ancient History",
      to: "/inspire/history",
      desc: "Monastic chronicles, royal legacies, and timeless Himalayan lore.",
      img: "https://source.unsplash.com/1600x900/?sikkim,ancient,monastery,heritage",
    },
    {
      title: "Jaw-dropping Beautiful Views",
      to: "/inspire/views",
      desc: "Panoramas from alpine valleys to snow‑capped peaks.",
      img: "https://source.unsplash.com/1600x900/?sikkim,landscape,views",
    },
    {
      title: "The Most Tranquil Resorts in Sikkim",
      to: "/inspire/resorts",
      desc: "Handpicked retreats nestled amid nature and serenity.",
      img: "https://source.unsplash.com/1600x900/?sikkim,resort,spa",
    },
    {
      title: "Things to Do Free in Sikkim",
      to: "/inspire/free",
      desc: "Budget‑friendly experiences across culture and nature.",
      img: "https://source.unsplash.com/1600x900/?sikkim,trail,temple",
    },
    {
      title: "Keep the Kids Entertained in Sikkim",
      to: "/inspire/kids",
      desc: "Family‑friendly spots, parks, and playful discoveries.",
      img: "https://source.unsplash.com/1600x900/?sikkim,family,children",
    },
  ];
  const scroller = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const activeIndex = (i: number) =>
    hovered !== null ? hovered === i : selected === i;
  const scroll = (dir: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative w-full bg-[hsl(var(--brand-black))]">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-28">
        <div className="mb-8 text-center text-white">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Get Inspired to Explore Sikkim
          </h2>
          <div className="mx-auto mt-3 h-1 w-40 rounded-full bg-gradient-to-r from-[hsl(var(--brand-red))] via-[hsl(var(--brand-yellow))] to-[hsl(var(--brand-red))]" />
        </div>

        <div className="relative">
          <button
            aria-label="Previous"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[hsl(var(--brand-black)/0.6)] p-2 ring-1 ring-white/15 hover:bg-white/10"
          >
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 15.707a1 1 0 010-1.414L14.586 12H6a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[hsl(var(--brand-black)/0.6)] p-2 ring-1 ring-white/15 hover:bg-white/10"
          >
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7.707 4.293a1 1 0 010 1.414L5.414 8H14a1 1 0 110 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>
          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pr-8 pl-8 md:pl-12 md:pr-12"
          >
            {items.map((it, i) => {
              const isActive = activeIndex(i);
              const scaleClass = isActive
                ? "scale-[1.08]"
                : hovered !== null || selected !== null
                  ? "scale-[0.95]"
                  : "scale-[0.98]";
              return (
                <Link
                  key={it.title}
                  to={it.to}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(i)}
                  className={`group relative h-[26rem] w-[90%] min-w-[90%] snap-center overflow-hidden rounded-2xl ring-1 ring-red-700/40 shadow-[0_0_14px_rgba(213,0,0,0.28)] transition-all duration-500 ease-out hover:ring-yellow-400/70 hover:shadow-[0_0_26px_rgba(255,193,7,0.5)] sm:w-[72%] sm:min-w-[72%] md:h-[30rem] md:w-[54%] md:min-w-[54%] lg:h-[36rem] lg:w-[44%] lg:min-w-[44%] ${scaleClass}`}
                >
                  <img
                    src={it.img}
                    alt={it.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-black))] via-[hsl(var(--brand-black))/0.35] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-extrabold text-white drop-shadow">
                      {it.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">{it.desc}</p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-red-600/30 drop-shadow-[0_0_10px_rgba(213,0,0,0.35)] group-hover:ring-yellow-400/60 group-hover:drop-shadow-[0_0_18px_rgba(255,193,7,0.55)]" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div>
      {/* Navbar (absolute over video) */}
      <nav className="absolute top-0 left-0 z-20 w-full flex items-center justify-between px-8 py-5">
        <div className="text-2xl font-bold text-white">Sikkim Tourism</div>
        <ul className="flex gap-6 text-white font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer">Where to go</li>
          <li className="hover:text-yellow-400 cursor-pointer">Experiences</li>
          <li className="hover:text-yellow-400 cursor-pointer">
            Plan your trip
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">Monasteries</li>
          <li className="hover:text-yellow-400 cursor-pointer">
            Festival & Events
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative isolate h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.keralatourism.org/ktadmin/img/pages/video/kumarakom-1707217580_9c58f84841733798a0db.mp4"
        >
          <source
            src="https://www.keralatourism.org/ktadmin/img/pages/video/kumarakom-1707217580_9c58f84841733798a0db.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[hsl(var(--brand-black)/0.5)]"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div className="mt-6 flex gap-4" />
        </div>
      </section>

      {/* Sikkim Stunning Wonders */}
      <section className="relative w-full bg-gradient-to-b from-[hsl(var(--brand-black))] via-[hsl(var(--brand-black))] to-[hsl(var(--brand-black))]">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <WondersHeader />
          <WondersGrid />
        </div>
      </section>

      {/* Get Inspired Section */}
      <InspiredSection />

      {/* Quick Nav */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((q) => (
            <Link
              key={q.title}
              to={q.to}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-black text-yellow-400 shadow-md">
                  {q.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {q.title}
                  </h3>
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
          <Link
            to="/about"
            className="text-sm font-semibold text-primary hover:underline"
          >
            About the project →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 shadow transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 -z-10 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-red-500/10 blur-2xl transition group-hover:translate-x-6 group-hover:-translate-y-6" />
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <Link
                to={f.to}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
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
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              Highlights
            </p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight">
              Explore iconic monasteries and their living traditions
            </h3>
            <p className="mt-2 text-sm text-white/80">
              From Rumtek to Pemayangtse, discover timeless art, chants, and
              rituals. Dive into heritage through stories, visuals, and guided
              tours.
            </p>
            <Link
              to="/map"
              className="mt-4 inline-block rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
            >
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
                <div
                  key={m.title}
                  className="group overflow-hidden rounded-xl border border-border bg-white shadow"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
              <h3 className="text-2xl font-extrabold">
                Join the preservation effort
              </h3>
              <p className="mt-2 text-white/85">
                Monastery360 is designed for researchers, monks, students, and
                travelers. This platform is API-ready for future integrations.
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  to="/contact"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:brightness-110"
                >
                  Contact us
                </Link>
                <Link
                  to="/about"
                  className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                >
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
