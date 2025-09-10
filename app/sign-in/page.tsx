import { signIn } from "@/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  const formAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await signIn({ email, password });
    redirect("/dashboard");
  };

  return (
    <form
      action={formAction}
      className="mx-auto mt-10 max-w-sm space-y-4 rounded bg-white p-6 shadow"
    >
      <div className="mb-6 flex justify-between">
        <h1 className="font-bold">
          <Link href="/">Neonlabs</Link>
        </h1>
        <h2>Sign In</h2>
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
          className="w-full rounded border px-3 py-2 focus:border-blue-500 focus:ring focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="w-full rounded border px-3 py-2 focus:border-blue-500 focus:ring focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}
