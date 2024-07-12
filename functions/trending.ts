
import getTrendingList from "@/services/GET/trending"
import { isMovie } from "./is-movie"

export async function trending(): Promise<Trending> {
    const { results: trendingList } = await getTrendingList()
    const numberSort = Math.floor(Math.random() * 21)
    const trending = trendingList[numberSort]
    const backgroundImageUrl = `${process.env.BASE_URL_IMAGE}/${trending.backdrop_path}`
    const trendingTitle = isMovie(trending) ? trending.title : trending.name
    const trendingDescription = trending.overview

    const res = {
        backgroundImageUrl,
        trendingTitle,
        trendingDescription
    }

    return res
}


type Trending = {
    backgroundImageUrl: string,
    trendingTitle: string | undefined,
    trendingDescription: string
}