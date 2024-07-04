import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";


export default function NavbarInicio() {
    return (
        <nav className="w-28 flex flex-col items-center gap-10 py-10 absolute z-20 h-dvh left-0 top-0">
            <Link href="/inicio">
                <AiFillHome className="h-auto w-8 text-white" />
            </Link>

            <Link href="/inicio/entretenimento">
                <MdLocalMovies className="h-auto w-8 text-white"/>
            </Link>

        </nav>
    )
}