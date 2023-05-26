import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import style from "@/components/modals/menu/Menu.module.css"
import CloseBtn from '@/components/ui/CloseBtn';
import UserProfileImg from '@/components/ui/UserProfileImg';
import MenuList from './MenuList';
import BtnSection from './BtnSection';

export default function MenuModal(props: { handleModal: () => void }) {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <section className={style.menuSection}>
      <div className={style.closeBtn}>
        <CloseBtn
          width={20}
          height={20}
          onClick={props.handleModal}
        />
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
