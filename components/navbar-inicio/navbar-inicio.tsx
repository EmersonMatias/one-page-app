import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";


export default function NavbarInicio() {
    return (
        <nav className="border-r-2 border-violet-700 bg-opacity-10 h-dvh w-28 flex flex-col items-center gap-10 py-10">
            <Link href="/inicio">
                <AiFillHome className="h-auto w-8 text-white" />
            </Link>

            <Link href="/inicio/filmes">
                <MdLocalMovies className="h-auto w-8 text-white"/>
            </Link>

        </nav>
    )
}