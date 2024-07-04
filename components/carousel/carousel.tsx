'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Carousel({ trendingList, className }: CarouselProps) {
    return (
        <div className={`${className}`} >
            <Swiper
                modules={[Navigation]}
                slidesPerView={5.65}
                navigation
                centeredSlides={true}
                centeredSlidesBounds={true}
            >

                {trendingList.map(({ poster_path, id, name, title }) => (
                    <SwiperSlide key={id} className="hover:scale-110">
                        <Image
                            className="w-[260px] h-auto bg-red-500"
                            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/${poster_path}`}
                            alt={name! || title!}
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
    trendingList: Movie[],
    className?: string
}