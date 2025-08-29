import { WatchedMovieItem } from "@/components/movies/watched-movie-item";
import { getCurrentUser } from "@/lib/auth";
import { getWatchedMovies } from "@/lib/db";

export async function MovieList() {
  const user = await getCurrentUser();
  const movies = await getWatchedMovies(user.id);

  if (!movies || movies.length === 0) {
    return (
      <div className="text-gray-500 text-center py-8">
        还没有标记的电影, 快去标记吧
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="bg-white rounded-lg shadow p-3 sm:p-4 relative"
        >
          <WatchedMovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}
