import React from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react';

import style from "@/components/modals/menu/Menu.module.css"

export default function MenuBtnSection() {

  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section className={style.btnSection}>
      <div className={style.mypageBtn} onClick={() => router.push("/mypage")}>
        <p>마이페이지</p>
      </div>
      {
        session ?
          (
            <div className={style.logoutBtn} onClick={() => signOut()}>
              <p>로그아웃</p>
            </div>
          ) : (
            <div className={style.logoutBtn} onClick={() => router.push("/login")}>
              <p>로그인</p>
            </div>
          )
      }
    </section>
  )
}
