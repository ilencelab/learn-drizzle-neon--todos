import { SearchMovieLink } from "@/components/movies/links";
import { WatchedMovieList } from "@/components/movies/watched-movie-list";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white px-4 py-6 sm:px-8">
      <h1 className="mb-4 text-xl font-bold sm:text-2xl">Movies</h1>
      <WatchedMovieList />
      <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
        <SearchMovieLink />
      </div>
    </div>
  );
}
