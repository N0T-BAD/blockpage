import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';

import style from "@/components/modals/menu/Menu.module.css"
import CloseBtn from '@/components/ui/CloseBtn';
import MenuList from './MenuList';
import MenuBtnSection from './MenuBtnSection';
import axios from 'axios';

export default function MenuModal(props: { handleModal: () => void }) {

  const router = useRouter();
  const { data: session } = useSession();
  const [userProfileImg, setUserProfileImg] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');
  const [userProfileSkin, setUserProfileSkin] = useState<string>('');

  useEffect(() => {
    if (session) {
      axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
        .then((res) => {
          setUserProfileImg(res.data.data.profileImage);
          setUserNickname(res.data.data.nickname);
          setUserProfileSkin(res.data.data.profileSkin);
          console.log(res.data.data.profileSkin);
          console.log(res.data.data)
        })
    }
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
                    src={userProfileImg}
                    alt='유저 프로필 이미지'
                    width={80}
                    height={80}
                    priority
                  />
                  :
                  <Image
                    src={'/assets/images/mypage/userImg.png'}
                    alt='게스트 프로필 이미지'
                    width={80}
                    height={80}
                    priority
                  />
              }
            </div>
            <div className={style.selectedUserSkin}>
              {
                userProfileSkin !== '' &&
                <Image
                  src={userProfileSkin}
                  alt='스킨 이미지'
                  width={80}
                  height={80}
                  priority
                />
              }
            </div>
          </div>
          {
            session ?
              <div className={style.userSectionTxt}>
                <p>{userNickname} 님</p>
                <p>오늘도 좋은 하루입니다.</p>
              </div>
              : <p>로그인을 해주세요.</p>
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
