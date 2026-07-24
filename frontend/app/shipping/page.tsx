"use client";

import useSWR from "swr";
import { useState } from "react";

type ShippingOption = {
  id: string;
  display_name: string;
  amount: number;
  currency: string;
  min_days: number;
  max_days: number;
};

export default function ShippingPage() {
  const { data } = useSWR<{ options: ShippingOption[] }>(
    "/shipping/options",
    (url) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`).then((r) => r.json())
  );

  const [weight, setWeight] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold">Shipping Calculator</h1>
      <p className="mt-2 text-alakowe-muted">
        Transparent, real-time rates for Alakowe shipments.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="rounded-md border border-gray-300 bg-alakowe-surface px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-alakowe-primary"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className="rounded-md border border-gray-300 bg-alakowe-surface px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-alakowe-primary"
          placeholder="Destination country"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button
          className="rounded-md bg-alakowe-primary px-4 py-2 text-sm text-white hover:bg-alakowe-primaryDark transition"
          onClick={() => {
            // Later: call backend with weight & destination
          }}
        >
          Get Rates
        </button>
      </div>

      <div className="mt-10 space-y-3">
        {!data && <p className="text-sm text-alakowe-muted">Loading rates…</p>}
        {data?.options.map((opt) => (
          <div
            key={opt.id}
            className="flex items-center justify-between rounded-lg border border-blue-100 bg-alakowe-surface px-4 py-3"
          >
            <div>
              <div className="text-sm font-medium">{opt.display_name}</div>
              <div className="text-xs text-alakowe-muted">
                {opt.min_days}–{opt.max_days} business days
              </div>
            </div>
            <div className="text-sm text-alakowe-primary">
              {(opt.amount / 100).toFixed(2)} {opt.currency.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
