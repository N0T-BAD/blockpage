import React, { use, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from '@/components/pages/main/MainBannerSection.module.css'
import { MainBannerType } from '@/types/mainBannerType'
import { mainEventBannerData } from '@/data/dummy/mainEventBannerData'
import Image from 'next/image'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

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

export default function MainBannerSection() {

  const { data: session } = useSession();
  const router = useRouter();

  const [mainBannerData, setMainBannerData] = useState<MainBannerType>({
    data: [{
      webtoonId: 0,
      cutoutImage: '',
      webtoonTitle: '',
      genre: '',
    }]
  })

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

  useEffect(() => {
    axios.get(`https://blockpage.site/webtoon-service/v1/webtoons/main`, {
      headers: {
        'Content-Type': 'application/json',
        memberId: session?.email || "",
      },
    })
      .then((res) => {
        console.log(res)
        setMainBannerData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handler = (webtoonId: number) => {
    router.push(`/webtoon/${webtoonId}`)
  }

  return (
    <section className={style.mainBannerSection}>
      <div className={style.bannerBox}>
        <Slider {...sliderSettings}>
          {mainBannerData.data.map((data) => (
            <div className={style.bannerWrap} key={data.webtoonId} onClick={() => handler(data.webtoonId)}>
              {data.cutoutImage === null ?
                <div className={style.bannerImg}>
                </div>
                :
                <div className={style.bannerImg}>
                  <Image src={data.cutoutImage} alt={data.webtoonTitle} width={200} height={200} priority />
                </div>
              }
              <div className={style.line}></div>
              <p className={style.webtoonTitle}>{data.webtoonTitle}</p>
              <p className={style.option}>{data.genre}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
