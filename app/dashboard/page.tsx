import Link from "next/link";

const routes = ["todos", "movies"];

export default async function Page() {
  return (
    <>
      <div className="px-4 py-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {routes.map((r) => (
            <li key={r}>
              <Link href={`/dashboard/${r}`}>{r}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
