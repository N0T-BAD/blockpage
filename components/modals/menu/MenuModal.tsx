import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';

import style from "@/components/modals/menu/Menu.module.css"
import CloseBtn from '@/components/ui/CloseBtn';
import MenuList from './MenuList';
import MenuBtnSection from './MenuBtnSection';

export default function MenuModal(props: {
  userProfileImg: string,
  userNickname: string,
  userProfileSkin: string,
  handleModal: () => void,
}) {

  const router = useRouter();
  const { data: session } = useSession();

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
        <div className={style.user} onClick={session ? undefined : () => router.push("/login")}>
          <div className={style.userProfileDiv}>
            <div className={style.userProfileImgDiv}>
              {
                //
                session?.email ?
                  <Image
                    src={props.userProfileImg}
                    alt='유저 프로필 이미지'
                    width={70}
                    height={70}
                    priority
                  />
                  :
                  <Image
                    src={'/assets/images/mypage/userImg.png'}
                    alt='게스트 프로필 이미지'
                    width={70}
                    height={70}
                    priority
                  />
              }
            </div>
            <div className={style.selectedUserSkin}>
              {
                props.userProfileSkin !== '' &&
                <Image
                  src={props.userProfileSkin}
                  alt='스킨 이미지'
                  width={70}
                  height={70}
                  priority
                />
              }
            </div>
          </div>
          {
            session ?
              <div className={style.userSectionTxt}>
                <p>{props.userNickname} 님</p>
                <p>환영합니다.</p>
              </div>
              :
              <div className={style.guestSectionTxt}>
                <p>로그인을 해주세요.</p>
              </div>
          }
        </div>
      </section>
      <MenuBtnSection />
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
    </section >
  )
}