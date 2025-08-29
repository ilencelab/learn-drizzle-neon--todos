import Link from "next/link";
import type { Metadata } from "next";

const routes = ["todos"];

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div className="py-8 px-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {routes.map((r) => (
          <li key={r}>
            <Link href={`/dashboard/${r}`}>{r}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
