import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Alakowe | Premium Fashion Shipping",
  description: "Minimal, modern shipping for a single luxury brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-alakowe-bg text-alakowe-text antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6">{children}</main>
      </body>
    </html>
  );
}
