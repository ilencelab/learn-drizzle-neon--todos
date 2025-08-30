import { WatchedMovie } from "@/types/db";

export function WatchedMovieItem({ movie }: { movie: WatchedMovie }) {
  return (
    <div className="flex items-start gap-4">
      {/* 电影海报 */}
      {movie.posterUrl ? (
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="h-24 w-16 shrink-0 rounded bg-gray-100 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded bg-gray-200 text-xs text-gray-400">
          无封面
        </div>
      )}
      {/* 电影信息 */}
      <div className="min-w-0 flex-1 space-y-1">
        <div className="truncate text-base font-semibold" title={movie.title}>
          {movie.title}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: movie.rating }, (_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          <span>{movie.watchedAt} 看完</span>
        </div>
      </div>
    </div>
  );
}
