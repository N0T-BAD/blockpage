import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

import style from "@/components/pages/menu/Menu.module.css"
import CloseBtn from '@/components/ui/CloseBtn';
import UserProfileImg from '@/components/ui/UserProfileImg';
import MenuList from './MenuList';
import BtnSection from './BtnSection';

export default function Menu() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  }

  return (
    <section className={style.menuSection}>
      <div className={style.closeBtn}>
        <CloseBtn />
      </div>
      <section className={style.userSection}>
        <div className={style.user} onClick={handleLogin}>
          <UserProfileImg />
          <div className={style.userSectionTxt}>
            <p>404님</p>
            <p>오늘도 좋은 하루입니다.</p>
          </div>
        </div>
      </section>
      <BtnSection />
      <MenuList />
      <div className={style.logoImg}>
        <Image
          src={'/assets/images/logo/logo.svg'}
          alt='logo'
          width={120}
          height={60}
          priority
        />
      </div>
    </section>
  )
}
