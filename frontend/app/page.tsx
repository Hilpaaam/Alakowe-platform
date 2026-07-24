import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Seamless global shipping for modern fashion
          </h1>
          <p className="mt-4 text-alakowe-muted">
            Alakowe is a premium shipping platform designed for a single,
            contemporary brand. Real-time rates, elegant tracking, and
            effortless checkout.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/shipping"
              className="inline-flex items-center justify-center rounded-md bg-alakowe-primary px-5 py-2.5 text-white text-sm hover:bg-alakowe-primaryDark transition"
            >
              Calculate Shipping
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm hover:border-alakowe-text transition"
            >
              View Dashboard
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100" />
      </div>
    </section>
  );
}
