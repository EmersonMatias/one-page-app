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
    title: string
}

type Serie =  {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: 5,
    vote_count: 13
}

type Media_Type = {
    media_type: "tv" | "movie" | "person"
}

type Trending = {
    page: number,
    results: (Movie & Media_Type  | Serie & Media_Type)[],
    total_pages: number,
    total_results: number
}

type OnTheAir = {
    page: number,
    results: TSerie[]
}

type NowPlaying = {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: TMovie[]
}


