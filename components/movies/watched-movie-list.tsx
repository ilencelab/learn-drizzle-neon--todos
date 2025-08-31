import { WatchedMovieItem } from "@/components/movies/watched-movie-item";
import { getCurrentUser } from "@/lib/auth";
import { getWatchedMovies } from "@/lib/db";
import Link from "next/link";

export async function WatchedMovieList() {
  const user = await getCurrentUser();
  const movies = await getWatchedMovies(user.id);

  if (!movies || movies.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        还没有标记的电影, 快去标记吧
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="relative rounded-lg bg-white p-3 shadow sm:p-4"
        >
          <WatchedMovieItem movie={movie} />
          <Link
            href={`/dashboard/movies/${movie.id}`}
            className="absolute inset-0"
          />
        </li>
      ))}
    </ul>
  );
}
