import { TMDBSearchResult } from "@/lib/tmdb";

export function MovieItem({ movie }: { movie: TMDBSearchResult }) {
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
      <div className="min-w-0 flex-1">
        <div className="truncate text-base font-semibold">{movie.title}</div>
        <div className="mt-1 text-sm text-gray-500">
          <span>上映：{movie.releaseDate}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 truncate text-xs text-gray-400">
          <div className="rounded bg-gray-200 px-1 py-0.5">
            {movie.mediaType === "movie" ? "影" : "剧"}
          </div>
          <span>
            原名：
            {movie.originalTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
