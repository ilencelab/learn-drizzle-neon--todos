import { AuthProvider } from "@/contexts/auth";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";

const routes = ["todos", "movies"];

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <AuthProvider userId={user.id}>
      <div className="px-4 py-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {routes.map((r) => (
            <li key={r}>
              <Link href={`/dashboard/${r}`}>{r}</Link>
            </li>
          ))}
        </ul>
      </div>
    </AuthProvider>
  );
}
