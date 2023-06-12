import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import style from '@/components/ui/ScrollToTopBtn.module.css'

export default function ScrollToTopBtn() {

  const [scrollY, setScrollY] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }

  useEffect(() => {
    if (scrollY > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [scrollY])

  return (
    <div className={isActive ? `${style.scrollWrap} ${style.active}` : `${style.scrollWrap}`}>
      <div className={style.scrollBtn} onClick={scrollToTop}>
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
