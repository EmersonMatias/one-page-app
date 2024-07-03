import Image from "next/image"
import { getDiscoverMovies } from "./requests"

export default async function Filmes() {
    const { results: discoverMoviesList } = await getDiscoverMovies()
    const numberSort = Math.floor(Math.random() * 21)

    return (
        <section className="text-white flex flex-col w-full">
           Filmes
        </section>
    )
}