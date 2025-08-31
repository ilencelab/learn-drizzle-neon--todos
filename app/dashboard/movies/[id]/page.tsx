import { BackToMoviesButton } from "@/components/movies/back-to-movies-button";
import { DeleteSeenMovie } from "@/components/movies/delete-seen-movie";
import { MovieItem } from "@/components/movies/movie-item";
import { WatchedMovieMarkForm } from "@/components/movies/watched-movie-mark-form";
import { Dropdown } from "@/components/ui/dropdown";
import { getCurrentUser } from "@/lib/auth";
import { getWatchedMovie } from "@/lib/db";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const user = await getCurrentUser();
  const movie = await getWatchedMovie(parseInt(id), user.id);

  return {
    title: `${movie?.tmdbData.title} | 看过` || "404",
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const user = await getCurrentUser();
  const movie = await getWatchedMovie(parseInt(id), user.id);

  if (!movie) {
    return <p>OOPs</p>;
  }

  return (
    <>
      <header className="sticky top-0 z-10 flex h-14 items-center border-b border-gray-200 bg-white/80 px-4 shadow backdrop-blur">
        <div className="flex w-full items-center justify-between">
          <BackToMoviesButton />
          <Dropdown>
            <DeleteSeenMovie id={movie.id} />
          </Dropdown>
        </div>
      </header>
      <main className="p-4">
        <div className="space-y-4">
          <MovieItem movie={movie.tmdbData} />
          <hr className="text-gray-200" />
          <WatchedMovieMarkForm
            id={movie.id}
            watchedAt={movie.watchedAt}
            rating={movie.rating}
            thoughts={movie.thoughts || ""}
          />
        </div>
      </main>
    </>
  );
}
