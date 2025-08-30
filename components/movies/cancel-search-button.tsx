"use client";

import { useRouter } from "next/navigation";

export function CancelSearchButton() {
  const { back } = useRouter();

  return (
    <button
      className="rounded bg-black px-4 py-2 text-white transition-colors hover:bg-black/80"
      onClick={back}
    >
      取消
    </button>
  );
}
