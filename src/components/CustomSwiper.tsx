"use client"

// Import Swiper styles
import 'swiper/css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper"
import { Autoplay } from "swiper/modules"
import { TSlider } from '@/types/index';
import { customSwiperData } from '@/static/data/index';

type Props = {}

export default function CustomSwiper({ }: Props) {
    SwiperCore.use([Autoplay])

    return (
        <Swiper
            className="h-[4rem] overflow-hidden sm:h-[5rem] md:h-[6rem] lg:h-[7rem]"
            direction="vertical"
            loop={true}
            autoplay={true}
            allowTouchMove={false}
        >
            {
                customSwiperData.map((item: TSlider, index: number) => {
                    return (
                        <SwiperSlide key={index} className="w-full h-full md:mt-2">
                            <span className={`${item.className} text-[1.5rem] flex items-center justify-center cursor-pointer sm:text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem]`}>
                                {item.title}
                                <span className="mx-2 text-4xl cursor-pointer">{item.icon}</span>
                            </span>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
