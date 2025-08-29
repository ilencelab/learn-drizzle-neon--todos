import { SearchMovieLink } from "@/components/movies/links";
import { MovieList } from "@/components/movies/watched-movie-list";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white px-4 py-6 sm:px-8">
      <h1 className="text-xl font-bold mb-4 sm:text-2xl">Movies</h1>
      <MovieList />
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <SearchMovieLink />
      </div>
    </div>
  );
}
