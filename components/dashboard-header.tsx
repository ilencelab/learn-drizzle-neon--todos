import { signOut } from "@/actions/auth";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardHeader() {
  const user = await getCurrentUser();

  return (
    <header className="py-8">
      <div className="flex justify-between">
        <h1>
          Todos
          <span className="ml-2 text-sm text-gray-600">{`(${user.name})`}</span>
        </h1>
        <form action={signOut}>
          <button type="submit">Sign Out</button>
        </form>
      </div>
    </header>
  );
}
