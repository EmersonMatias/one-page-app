type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    media_type: 'tv' | 'movie' | 'person'
    name?: string
    title?: string,
}

type TMovies = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}