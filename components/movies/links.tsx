import Link from "next/link";

export function SearchMovieLink() {
  return (
    <Link
      href="/dashboard/movies/new"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-3xl text-white shadow-lg transition-colors hover:bg-black/80 sm:h-16 sm:w-16"
      aria-label="Add Movie"
      title="Add Movie"
    >
      +
    </Link>
  );
}
