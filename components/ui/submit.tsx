"use client";

import { useFormStatus } from "react-dom";

export function Submit({ children, ...props }: React.ComponentProps<"button">) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} {...props}>
      {pending ? "加载中..." : children}
    </button>
  );
}
