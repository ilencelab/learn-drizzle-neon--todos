import { WatchedMovie } from "@/types/db";

export function WatchedMovieItem({ movie }: { movie: WatchedMovie }) {
  return (
    <div className="flex items-start gap-4">
      {/* 电影海报 */}
      {movie.posterUrl ? (
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-16 h-24 object-cover rounded shrink-0 bg-gray-100"
          loading="lazy"
        />
      ) : (
        <div className="w-16 h-24 flex items-center justify-center bg-gray-200 text-gray-400 rounded shrink-0 text-xs">
          无封面
        </div>
      )}
      {/* 电影信息 */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="font-semibold text-base truncate" title={movie.title}>
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
