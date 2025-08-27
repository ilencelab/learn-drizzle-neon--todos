import { signUp } from "@/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  const formAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await signUp({ email, password });
    redirect("/dashboard");
  };

  return (
    <form
      action={formAction}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow space-y-4"
    >
      <div className="flex justify-between mb-6">
        <h1 className="font-bold">
          <Link href="/">Todos</Link>
        </h1>
        <h2>Sign Up</h2>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
