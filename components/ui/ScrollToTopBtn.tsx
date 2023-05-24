import React, { useEffect, useState } from 'react'
import style from '@/components/ui/ScrollToTopBtn.module.css'
import Image from 'next/image'

export default function ScrollToTopBtn() {

  const [scrollY, setScrollY] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };

  if( typeof window !== "undefined" ) {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }

  useEffect(() => {
    console.log(scrollY)
    if(scrollY > 30) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [scrollY])

  return (
    <div className={isActive ? `${style.scrollWrap} ${style.active}` :`${style.scrollWrap} ${style.close}`} onClick={scrollToTop}>
      <div className={style.scrollBtn}>
        <Image
          src={'/assets/images/icons/back.svg'}
          alt="backBtnIcon"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  )
}
