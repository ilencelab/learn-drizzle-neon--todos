import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon | Ilence Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="max-w-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
