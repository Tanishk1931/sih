import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function Archives() {
  return (
    <PlaceholderPage
      title="Digital Archives"
      description="Search scanned manuscripts, murals, and historical documents. Includes AI‑powered search and filters (placeholders)."
    >
      <div className="mb-4 flex gap-2">
        <input
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search archives (e.g., 'Pemayangtse murals')"
        />
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Search</button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-border bg-white p-4 text-sm shadow">
            <p className="font-semibold">Archive Item #{i + 1}</p>
            <p className="mt-1 text-muted-foreground">Category • Year • Monastery</p>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
