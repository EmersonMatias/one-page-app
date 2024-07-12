async function getUpcomingMovies(): Promise<Upcoming> {
    const res = await fetch(`${process.env.BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: Upcoming = await res.json()

    return data
}

export default getUpcomingMovies