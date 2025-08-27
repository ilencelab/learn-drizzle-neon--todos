"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await auth.api.signUpEmail({
    body: {
      name: email, // required
      email, // required
      password, // required
      // image: "https://example.com/image.png",
      // callbackURL: "https://example.com/callback",
    },
  });
};

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
};

export const signOut = async () => {
  await auth.api.signOut({
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  redirect("/sign-in");
};
