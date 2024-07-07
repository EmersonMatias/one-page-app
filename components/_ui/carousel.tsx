'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { isMovie } from "@/functions/is-movie";

export default function Carousel({ trendingList, className, title }: CarouselProps) {
    return (
        <div className={`${className} `} >
            <h6 className="text-3xl font-bold pl-[40px] mb-5">{title}</h6>
            <Swiper
                modules={[Navigation]}
                slidesPerView={5.65}
                navigation
                centeredSlides={true}
                centeredSlidesBounds={true}
            >

                {trendingList.map((movie) => (
                    <SwiperSlide key={movie.id} className="hover:scale-110">
                        <Image
                            className="w-[260px] h-auto bg-red-500"
                            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/${movie.poster_path}`}
                            alt={isMovie(movie) ? movie.title : movie.name}
                            width={260}
                            height={360}
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

type CarouselProps = {
    trendingList: (Movie | Serie)[],
    className?: string,
    title: string
}