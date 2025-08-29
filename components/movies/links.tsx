import Link from "next/link";

export function SearchMovieLink() {
  return (
    <Link
      href="/dashboard/movies/new"
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors text-3xl"
      aria-label="Add Movie"
      title="Add Movie"
    >
      +
    </Link>
  );
}
