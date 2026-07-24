import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-alakowe-surface">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-alakowe-primary">
          Alakowe
        </Link>
        <div className="flex gap-6 text-sm text-alakowe-muted">
          <Link href="/shipping" className="hover:text-alakowe-primary">
            Shipping
          </Link>
          <Link href="/dashboard" className="hover:text-alakowe-primary">
            Dashboard
          </Link>
          <Link href="/tracking" className="hover:text-alakowe-primary">
            Track
          </Link>
        </div>
      </div>
    </nav>
  );
}
