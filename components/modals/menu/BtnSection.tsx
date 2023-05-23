import React from 'react'
import { useRouter } from 'next/router'

import style from "@/components/modals/menu/Menu.module.css"

export default function BtnSection() {

  const router = useRouter();

  const handleLogout = () => {
    console.log("logout");
  }

  return (
    <section className={style.btnSection}>
      <div className={style.mypageBtn} onClick={() => router.push("/mypage")}>
        마이페이지
      </div>
      <div className={style.logoutBtn} onClick={handleLogout}>
        로그아웃
      </div>
    </section>
  )
}
