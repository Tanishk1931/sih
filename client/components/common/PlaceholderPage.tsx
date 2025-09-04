import { Link } from "react-router-dom";

export default function PlaceholderPage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h1>
        {description && (
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
        <div className="mt-6 text-sm text-muted-foreground">
          This section is ready for backend integration. Tell me to fill this page when you are ready.
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110">Go Home</Link>
        </div>
      </div>
    </section>
  );
}
