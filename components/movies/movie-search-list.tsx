import { MovieDialog } from "@/components/movies/movie-dialog";
import { MovieItem } from "@/components/movies/movie-item";
import { searchMovie } from "@/lib/tmdb";

export async function MovieSearchList({ query }: { query: string }) {
  const movies = query ? await searchMovie(query) : [];

  if (!movies || movies.length === 0) {
    return <div className="text-gray-500 text-center py-8">暂无搜索结果</div>;
  }

  return (
    <ul className="space-y-4">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="bg-white rounded-lg shadow p-3 sm:p-4 relative"
        >
          <MovieItem movie={movie} />
          <MovieDialog movie={movie} />
        </li>
      ))}
    </ul>
  );
}
