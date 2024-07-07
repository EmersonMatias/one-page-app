import HerosectionEntretenimento from "@/components/herosection-entretenimento/herosection-entretenimento"
import { getNowPlayingList, getOnTheAirList, getTrendingList } from "./requests"
import Carousel from "@/components/carousel/carousel"

export default async function Entretenimento() {
    const { results: trendingList } = await getTrendingList()
    const {results: nowPlayingList} = await getNowPlayingList()
    const {results: onTheAirList} = await getOnTheAirList()

    console.log(onTheAirList)

    return (
        <section className="text-white flex flex-col w-full pb-10">
            <HerosectionEntretenimento />

            <Carousel  trendingList={trendingList} className="z-50 mt-[-100px]" title="Em alta"/>

            <Carousel  trendingList={nowPlayingList} className="z-50 mt-24" title="Filmes em Cartaz"/>

            <Carousel  trendingList={onTheAirList} className="z-50 mt-24" title="Programa no ar"/>

        </section>
    )
}