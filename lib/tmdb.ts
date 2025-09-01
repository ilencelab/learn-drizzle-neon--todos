const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const image = {
  secure_base_url: "https://image.tmdb.org/t/p/",
  poster_size: "w500",
  backdrop_size: "w300",
  backdrop_size_780: "w780",
};

export type TMDBSearchResult = {
  id: number;
  // movie 用 title，tv 用 name，统一成 title
  title: string;
  // movie 用 release_date，tv 用 first_air_date，统一成 releaseDate
  releaseDate: string;
  posterUrl: string;
  backdropUrl: string;
  // movie 用 original_title，tv 用 original_name，统一成 originalTitle
  originalTitle: string;
  originalLanguage: string;
  mediaType: "movie" | "tv";
};

export const searchMedia = async (
  query: string,
  page: number = 1,
): Promise<TMDBSearchResult[]> => {
  try {
    const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      query,
    )}&language=zh-CN&page=${page}&include_adult=false`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const { results } = await response.json();

    const items: TMDBSearchResult[] = [];

    if (!results || results.length === 0) return items;

    for (const item of results) {
      // 只要 movie 和 tv，排除 person
      if (item.media_type !== "movie" && item.media_type !== "tv") continue;

      items.push({
        id: item.id,
        title: item.title || item.name, // movie: title, tv: name
        releaseDate: item.release_date || item.first_air_date || "",
        posterUrl: item.poster_path
          ? `${image.secure_base_url}${image.poster_size}${item.poster_path}`
          : "",
        backdropUrl: item.backdrop_path
          ? `${image.secure_base_url}${image.backdrop_size_780}${item.backdrop_path}`
          : "",
        originalTitle: item.original_title || item.original_name || "",
        originalLanguage: item.original_language,
        mediaType: item.media_type, // "movie" | "tv"
      });
    }

    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
