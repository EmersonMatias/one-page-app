async function getOnTheAirList(): Promise<OnTheAir>{
    const res = await fetch(`${process.env.BASE_URL}/tv/on_the_air?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: OnTheAir = await res.json()

    return data

}

export default getOnTheAirList
