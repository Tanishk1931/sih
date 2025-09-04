import PlaceholderPage from "@/components/common/PlaceholderPage";

export default function Contact() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Reach the Government of Sikkim (Department of Higher & Technical Education). Inquiry form is a placeholder."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
          <p className="font-semibold">
            Department of Higher & Technical Education
          </p>
          <p className="mt-1">Government of Sikkim</p>
          <p className="mt-2">Email: info@dhtesikkim.gov.in</p>
          <p>Phone: +91-3592-XXXXXX</p>
        </div>
        <form className="grid gap-3 rounded-lg border border-border bg-white p-4 text-sm shadow">
          <input
            className="rounded-md border border-border px-3 py-2"
            placeholder="Your name"
          />
          <input
            className="rounded-md border border-border px-3 py-2"
            placeholder="Email"
          />
          <textarea
            className="min-h-28 rounded-md border border-border px-3 py-2"
            placeholder="Message"
          />
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </PlaceholderPage>
  );
}
