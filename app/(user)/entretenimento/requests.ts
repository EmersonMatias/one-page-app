export async function getTrendingList(): Promise<Trending> {
    const res = await fetch(`${process.env.BASE_URL}/trending/all/day?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: Trending = await res.json()

    return data
}

export async function getNowPlayingList(): Promise<NowPlaying> {
    const res = await fetch(`${process.env.BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: NowPlaying = await res.json()

    return data

}

export async function getOnTheAirList(): Promise<OnTheAir>{
    const res = await fetch(`${process.env.BASE_URL}/tv/on_the_air?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: OnTheAir = await res.json()

    return data

}






