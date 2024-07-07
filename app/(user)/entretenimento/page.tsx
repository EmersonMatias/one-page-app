import getTrendingList from "@/services/GET/trending-list"
import getNowPlayingList from "@/services/GET/now-playing-list"
import getOnTheAirList from "@/services/GET/on-the-air-list"
import HerosectionEntretenimento from "@/components/entretenimento/hero-section"
import Carousel from "@/components/_ui/carousel"

export default async function Entretenimento() {
    const { results: trendingList } = await getTrendingList()
    const {results: nowPlayingList} = await getNowPlayingList()
    const {results: onTheAirList} = await getOnTheAirList()

    return (
        <section className="text-white flex flex-col w-full pb-10">
            <HerosectionEntretenimento />

            <Carousel  trendingList={trendingList} className="z-50 mt-[-100px]" title="Em alta"/>

            <Carousel  trendingList={nowPlayingList} className="z-50 mt-24" title="Filmes em Cartaz"/>

            <Carousel  trendingList={onTheAirList} className="z-50 mt-24" title="Programa no ar"/>
        </section>
    )
}