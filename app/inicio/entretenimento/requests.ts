export async function getTrendingList(): Promise<TMovies> {
    const res = await fetch(`${process.env.BASE_URL}/trending/all/day?api_key=${process.env.API_KEY}&language=pt-BR`)

    if(!res.ok){
        throw new Error("Faild to get trending list")
    }

    const data: TMovies = await res.json()

    return data
}