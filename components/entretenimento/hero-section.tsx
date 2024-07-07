import { trending } from "@/functions/trending";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import Button from "../_ui/button";

export default async function HerosectionEntretenimento() {
    const { backgroundImageUrl, trendingDescription, trendingTitle } = await trending()

    return (
        <div className="relative h-dvh w-full flex items-center pl-28">
            <div className="z-40 text-4xl max-w-[700px] gap-8 flex flex-col ml-20 mb-[100px]">
                <h1 className="font-bold text-7xl line-clamp-3">{trendingTitle}</h1>
                <p className="text-xl leading-relaxed font-light  line-clamp-6">{trendingDescription}</p>

                <div className="flex gap-8 items-center">
                    <Button name="Assistir Trailer" />
                    <MdFavorite className="h-8 w-auto  cursor-pointer" />
                    <FaEye className="h-8 w-auto cursor-pointer" />

                    <RiAddBoxFill className="h-8 w-auto cursor-pointer" />
                </div>
            </div>

            <Image
                src={backgroundImageUrl}
                layout="fill"
                objectFit="cover"
                alt="Backdrop"
                objectPosition="top"
                className="z-0"
            />

            <div
                className="absolute top-0 left-0 w-full h-full z-10"
                style={{ background: 'linear-gradient(to right, #060606, transparent)' }}
            />
        </div>
    )
}