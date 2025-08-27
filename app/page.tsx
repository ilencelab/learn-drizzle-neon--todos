import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div className="flex justify-between py-8">
        <h1>Todos</h1>
        <div className="space-x-4">
          <Link href="/sign-up">Sign Up</Link>
          <Link href="/sign-in">Sign In</Link>
        </div>
      </div>
    </>
  );
}
