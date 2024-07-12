async function getAiringToday(): Promise<AiringToday> {
    const res = await fetch(`${process.env.BASE_URL}/tv/airing_today?api_key=${process.env.API_KEY}&language=pt-BR`)

    if (!res.ok) {
        throw new Error("Faild to get trending list")
    }

    const data: AiringToday = await res.json()

    return data
}

export default getAiringToday