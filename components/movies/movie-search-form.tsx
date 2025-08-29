"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

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
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="搜索电影..."
        required
        autoComplete="off"
        defaultValue={searchParams.get("query")?.toString()}
        className="border rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-black/80 transition-colors"
      >
        搜索
      </button>
    </form>
  );
}
