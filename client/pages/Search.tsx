import { useSearchParams } from "react-router-dom";
import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  return (
    <PlaceholderPage
      title={`Search: ${q}`}
      description={
        q
          ? `Showing placeholder results for "${q}" across tours, monasteries, and archives.`
          : "Type a query in the search bar to explore content."
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: q ? 6 : 0 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-white p-4 text-sm shadow"
          >
            <p className="font-semibold">Result #{i + 1}</p>
            <p className="mt-1 text-muted-foreground">
              Placeholder item for query "{q}"
            </p>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
