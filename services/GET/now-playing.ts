async function getNowPlayingList(): Promise<NowPlaying> {
    const res = await fetch(`${process.env.BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: NowPlaying = await res.json()

    return data

}

export default getNowPlayingList