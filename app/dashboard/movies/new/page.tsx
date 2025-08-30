import { Suspense } from "react";

import { CancelSearchButton } from "@/components/movies/cancel-search-button";
import { MovieSearchForm } from "@/components/movies/movie-search-form";
import { MovieSearchList } from "@/components/movies/movie-search-list";

interface PageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { query } = await searchParams;

  return (
    <>
      <div className="sticky top-0 z-50 bg-white p-6">
        <div className="flex items-center gap-2">
          <div className="grow">
            <MovieSearchForm />
          </div>
          <CancelSearchButton />
        </div>
      </div>
      <div className="px-6">
        <Suspense
          key={query}
          fallback={<p className="text-center">搜索中...</p>}
        >
          <MovieSearchList query={query || ""} />
        </Suspense>
      </div>
    </>
  );
}
