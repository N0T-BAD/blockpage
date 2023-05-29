import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from '@/components/pages/main/MainBannerSection.module.css'
import { MainBannerType } from '@/types/mainBannerType'
import { mainEventBannerData } from '@/data/dummy/mainEventBannerData'
import Image from 'next/image'

const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            Previous
        </div>
    );
};

const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            Next
        </div>
    );
};

export default function MainBannerSection(props: { data: MainBannerType }) {

    const data = props.data;

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }

    return (
        <section className={style.mainBannerSection}>
            <div className={style.bannerBox}>
                <Slider {...sliderSettings}>
                    {mainEventBannerData.map((data: MainBannerType) => (
                        <div className={style.bannerWrap} key={data.id}>
                            <div className={style.bannerImg}>
                                <Image src={data.imgUrl} alt={data.name} width={200} height={200} priority />
                            </div>
                            <div className={style.line}></div>
                            <p>{data.name}</p>
                            <p className={style.option}>{data.categoryName}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
