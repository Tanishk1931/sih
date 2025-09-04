import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function About() {
  return (
    <PlaceholderPage
      title="About Monastery360"
      description="Background on Sikkim’s monasteries and the mission of Monastery360 to preserve and present cultural heritage through immersive digital experiences."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
          <p>
            Monastery360 documents sacred sites across Sikkim with high‑quality imagery, 360° panoramas, and curated narratives in multiple languages.
          </p>
          <p className="mt-2">
            Our objectives include preservation, education, accessibility, and respectful representation of living traditions.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
          <p>
            This platform is designed to integrate future APIs for archives, maps, and booking systems, enabling a seamless experience for visitors and researchers.
          </p>
        </div>
      </div>
    </PlaceholderPage>
  );
}
