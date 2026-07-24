"use client";

import useSWR from "swr";

type Order = {
  id: string;
  status: string;
  total_amount: number;
  currency: string;
  created_at: string;
  tracking_number?: string | null;
  user: { email: string; name?: string | null };
};

export default function DashboardPage() {
  const { data } = useSWR<{ orders: Order[] }>(
    "/orders",
    (url) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`).then((r) => r.json())
  );

  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold">Orders</h1>
      <p className="mt-2 text-alakowe-muted">
        Manage and monitor Alakowe shipments in one place.
      </p>

      {!data && <p className="mt-6 text-sm text-alakowe-muted">Loading orders…</p>}

      {data && (
        <div className="mt-8 overflow-hidden rounded-lg border border-blue-100 bg-alakowe-surface">
          <table className="min-w-full divide-y divide-blue-100 text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-alakowe-muted">
                  Order
                </th>
                <th className="px-4 py-3 text-left font-medium text-alakowe-muted">
                  Customer
                </th>
                <th className="px-4 py-3 text-left font-medium text-alakowe-muted">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-medium text-alakowe-muted">
                  Total
                </th>
                <th className="px-4 py-3 text-left font-medium text-alakowe-muted">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-medium text-alakowe-muted">
                  Tracking
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {data.orders.map((o) => (
                <tr key={o.id} className="hover:bg-blue-50">
                  <td className="px-4 py-3 font-medium">{o.id.slice(0, 8)}</td>
                  <td className="px-4 py-3">
                    {o.user.name || o.user.email.split("@")[0]}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs text-alakowe-primary">
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {(o.total_amount / 100).toFixed(2)} {o.currency.toUpperCase()}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(o.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {o.tracking_number ? (
                      <a
                        href={`/tracking/${o.id}`}
                        className="text-alakowe-primary hover:underline"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-alakowe-muted">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
