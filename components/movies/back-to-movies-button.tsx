"use client";

import { useRouter } from "next/navigation";

export function BackToMoviesButton() {
  const { back } = useRouter();

  return (
    <button
      className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
      onClick={back}
    >
      <svg
        className="mr-2 h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      返回
    </button>
  );
}
