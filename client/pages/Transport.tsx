import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function Transport() {
  return (
    <PlaceholderPage
      title="Transport & Tourism Services"
      description="Integration section for local transport booking links and recommendations for hotels, restaurants, and guides."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { name: "Local Taxi", link: "#" },
          { name: "Govt. Bus", link: "#" },
          { name: "Certified Guide", link: "#" },
          { name: "Hotels", link: "#" },
          { name: "Homestays", link: "#" },
          { name: "Restaurants", link: "#" },
        ].map((s) => (
          <a key={s.name} href={s.link} className="rounded-lg border border-border bg-white p-4 text-sm font-semibold shadow hover:bg-accent">
            {s.name}
          </a>
        ))}
      </div>
    </PlaceholderPage>
  );
}
