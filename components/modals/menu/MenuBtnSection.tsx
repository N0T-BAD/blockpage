import React from 'react'
import { useRouter } from 'next/router'

import style from "@/components/modals/menu/Menu.module.css"
import { signOut, useSession } from 'next-auth/react';

export default function MenuBtnSection() {

  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section className={style.btnSection}>
      <div className={style.mypageBtn} onClick={() => router.push("/mypage")}>
        마이페이지
      </div>
      {
        session ?
          (
            <div className={style.logoutBtn} onClick={() => signOut()}>
              로그아웃
            </div>
          ) : (
            <div className={style.logoutBtn} onClick={() => router.push("/login")}>
              로그인
            </div>
          )
      }
    </section>
  )
}
