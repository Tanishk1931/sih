import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function Calendar() {
  const events = [
    { date: "Jan 14", title: "Losar Preparations", place: "Rumtek" },
    { date: "Feb 10", title: "Losar (Tibetan New Year)", place: "Gangtok" },
    { date: "Mar 22", title: "Chham Dance", place: "Pemayangtse" },
  ];
  return (
    <PlaceholderPage
      title="Cultural Calendar"
      description="Explore events, festivals, and rituals. Booking and participation options will be integrated."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {events.map((e) => (
          <div
            key={e.title}
            className="flex items-center gap-4 rounded-lg border border-border bg-white p-4 shadow"
          >
            <div className="grid h-14 w-14 place-items-center rounded-md bg-black text-yellow-400">
              <span className="text-sm font-extrabold">{e.date}</span>
            </div>
            <div className="text-sm">
              <p className="font-semibold">{e.title}</p>
              <p className="text-muted-foreground">{e.place}</p>
            </div>
            <div className="ml-auto">
              <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                Notify me
              </button>
            </div>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
