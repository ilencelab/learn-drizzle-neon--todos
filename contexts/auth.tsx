"use client";

import { ReactNode, createContext, useContext } from "react";

type AuthContextProps = {
  userId: string;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
};

export function AuthProvider({
  children,
  ...props
}: { children: ReactNode } & AuthContextProps) {
  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>;
}
