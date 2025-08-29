import { AuthProvider } from "@/contexts/auth";
import { getCurrentUser } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return <AuthProvider userId={user.id}>{children}</AuthProvider>;
}
