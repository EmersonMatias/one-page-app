import { getTrendingList } from "@/app/inicio/entretenimento/requests"

export async function trending(): Promise<TTrending> {
    const { results: trendingList } = await getTrendingList()
    const numberSort = Math.floor(Math.random() * 21)
    const trending = trendingList[numberSort]
    const backgroundImageUrl = `${process.env.BASE_URL_IMAGE}/${trending.backdrop_path}`
    const trendingTitle = trending.name ?? trending.title
    const trendingDescription = trending.overview

    const res = {
        backgroundImageUrl,
        trendingTitle,
        trendingDescription
    }

    return res
}


type TTrending = {
    backgroundImageUrl: string,
    trendingTitle: string | undefined,
    trendingDescription: string
}