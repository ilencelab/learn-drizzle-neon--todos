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
        <div className="mx-auto max-w-xl">{children}</div>
      </body>
    </html>
  );
}
