import HerosectionEntretenimento from "@/components/herosection-entretenimento/herosection-entretenimento"
import { getTrendingList } from "./requests"
import Carousel from "@/components/carousel/carousel"

export default async function Entretenimento() {
    const { results: trendingList } = await getTrendingList()
    
    return (
        <section className="text-white flex flex-col w-full pb-10">
            <HerosectionEntretenimento />

            <Carousel  trendingList={trendingList} className="z-50 mt-[-100px]"/>
        </section>
    )
}