import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';

import style from "@/components/modals/menu/Menu.module.css"
import CloseBtn from '@/components/ui/CloseBtn';
import UserProfileImg from '@/components/ui/UserProfileImg';
import MenuList from './MenuList';
import MenuBtnSection from './MenuBtnSection';
import axios from 'axios';
import { userprofile } from '@/state/mypage/userprofile';
import { ChangeUserDataType, UserImgData } from '@/types/changeUserDataType';
import { useRecoilState } from 'recoil';
import { usernickname } from '@/state/mypage/usernickname';

export default function MenuModal(props: { handleModal: () => void }) {

  const router = useRouter();
  const { data: session } = useSession();
  const [userImg, setUserImg] = useRecoilState<UserImgData>(userprofile);
  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);

  useEffect(() => {
    if (session) {
      axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
        .then((res) => {
          const profileImage = res.data.data.profileImage;
          const nickname = res.data.data.nickname
          setUserImg({
            data: {
              profileImage,
            }
          })
          setUserNickname({
            data: {
              nickname,
            },
          })
          console.log(res.data)
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
          <UserProfileImg userImg={userImg} />
          {
            session ?
              <div className={style.userSectionTxt}>
                <p>{userNickname.data.nickname} 님</p>
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
