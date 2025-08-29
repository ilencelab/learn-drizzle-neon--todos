const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const image = {
  secure_base_url: "https://image.tmdb.org/t/p/",
  poster_size: "w500",
  backdrop_size: "w300",
  backdrop_size_780: "w780",
};

export interface TMDBMovie {
  id: number;
  title: string;
  releaseDate: string;
  posterUrl: string;
  backdropUrl: string;
  originalTitle: string;
  originalLanguage: string;
}

export const searchMovie = async (title: string): Promise<TMDBMovie[]> => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${title}&language=zh-CN`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const { results } = await response.json();

    const movies: TMDBMovie[] = [];

    if (!results || results.length === 0) return movies;

    for (const item of results) {
      const {
        id,
        title,
        release_date,
        poster_path,
        backdrop_path,
        original_title,
        original_language,
      } = item;

      movies.push({
        id,
        title,
        releaseDate: release_date,
        posterUrl: `${image.secure_base_url}${image.poster_size}${poster_path}`,
        backdropUrl: `${image.secure_base_url}${image.backdrop_size_780}${backdrop_path}`,
        originalTitle: original_title,
        originalLanguage: original_language,
      });
    }

    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};
