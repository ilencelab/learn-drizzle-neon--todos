import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { AuthProvider } from "@/contexts/auth";

const routes = ["todos", "movies"];

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <AuthProvider userId={user.id}>
      <div className="py-8 px-4">
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
