import { TMDBMovie } from "@/lib/tmdb";

export function MovieItem({ movie }: { movie: TMDBMovie }) {
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
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-base truncate">{movie.title}</div>
        <div className="text-sm text-gray-500 mt-1">
          <span>上映：{movie.releaseDate}</span>
        </div>
        <div className="text-xs text-gray-400 mt-1 truncate">
          原名：{movie.originalTitle}
        </div>
      </div>
    </div>
  );
}
