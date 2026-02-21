"use client"
import { useRef } from "react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function HighlightsSec({ data }){
    if (!data) return null
    const swiperRef = useRef(null)
    return(
        <main>
            <div className="highlights_sec sec-pad-all">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="colA">
                            <div className="heading">
                                <h3>{data.heading}</h3>
                                <p>{data.subheading}</p>
                            </div>
                        </div>
                        <div className="colB">
                            <div className="count_wrapper">
                                {data.countData.map((count) => (
                                   <div className="count_col" key={count.id}>
                                        <h6>{count.countNo}</h6>
                                        <h5>{count.countHeading}</h5>
                                        <p>{count.countSubHeading}</p>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    className="highlight_slider"
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
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        540: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        991: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {
                        data.clientData.map((client) => (
                            <SwiperSlide key={client.id}>
                                <figure>
                                    <Image src={client.imgSrc} width={144} height={65} alt="Client Logo"></Image>
                                </figure>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </main>
    )
}