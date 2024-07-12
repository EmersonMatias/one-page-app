import getTrendingList from "@/services/GET/trending"
import getNowPlayingList from "@/services/GET/now-playing"
import getOnTheAirList from "@/services/GET/on-the-air"
import getUpcomingMovies from "@/services/GET/upcoming-movies"
import HerosectionEntretenimento from "@/components/entretenimento/hero-section"
import Carousel from "@/components/_ui/carousel"
import getAiringToday from "@/services/GET/airing-today"


export default async function Entretenimento() {
    const { results: trendingList } = await getTrendingList()
    const {results: nowPlayingList} = await getNowPlayingList()
    const {results: onTheAirList} = await getOnTheAirList()
    const {results: upcomingMovies} = await getUpcomingMovies()
    const {results: airingToday} = await getAiringToday()

    return (
        <section className="text-white flex flex-col w-full pb-10">
            <HerosectionEntretenimento />

            <Carousel  trendingList={trendingList} className="z-50 mt-[-100px]" title="Em alta"/>

            <Carousel  trendingList={nowPlayingList} className="z-50 mt-24" title="Filmes em Cartaz"/>

            <Carousel  trendingList={onTheAirList} className="z-50 mt-24" title="Programa no ar"/>

            <Carousel  trendingList={upcomingMovies} className="z-50 mt-24" title="Filmes por vir"/>

            <Carousel  trendingList={airingToday} className="z-50 mt-24" title="Programas exibidos hoje"/>

        </section>
    )
}