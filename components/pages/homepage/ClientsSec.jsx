"use client"
import { useRef } from "react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const clientData = [
    {
        id: 1,
        imgSrc: "/assets/images/others/client1.png"
    },
    {
        id: 2,
        imgSrc: "/assets/images/others/client2.png"
    },
    {
        id: 3,
        imgSrc: "/assets/images/others/client3.png"
    },
    {
        id: 4,
        imgSrc: "/assets/images/others/client4.png"
    },
    {
        id: 5,
        imgSrc: "/assets/images/others/client5.png"
    },
    {
        id: 6,
        imgSrc: "/assets/images/others/client6.png"
    },
    {
        id: 7,
        imgSrc: "/assets/images/others/client7.png"
    },
    {
        id: 8,
        imgSrc: "/assets/images/others/client1.png"
    },
    {
        id: 9,
        imgSrc: "/assets/images/others/client2.png"
    },
]

export default function ClientsSec() {
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="client_sec sec-pad-all">
                <div className="main_wrapper">
                    <Swiper
                        className="client_slider"
                        loop = {true}
                        ref={swiperRef}
                        modules={[Autoplay]}
                        speed={2000}
                        autoplay = {{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2.2,
                                spaceBetween: 10,
                            },
                            540: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {
                            clientData.map((data) => (
                                <SwiperSlide key={data.id}>
                                    <figure>
                                        <Image src={data.imgSrc} alt="Client Logo" width="150" height="70"></Image>
                                    </figure>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}