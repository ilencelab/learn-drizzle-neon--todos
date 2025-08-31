"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function MovieSearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    if (!query.trim()) return;

    const params = new URLSearchParams(searchParams);
    if (query.trim()) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    const newQueryString = params.toString();
    replace(`${pathname}?${newQueryString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="query"
        placeholder="搜索电影..."
        required
        autoComplete="off"
        autoFocus
        defaultValue={searchParams.get("query")?.toString()}
        className="w-full flex-1 rounded border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </form>
  );
}
