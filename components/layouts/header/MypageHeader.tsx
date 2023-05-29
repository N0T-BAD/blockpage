import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import style from '@/components/layouts/header/MypageHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function MypageHeader() {

  const router = useRouter();
  
  return (
    <header className={style.headerSection}>
      <div className={style.MypageHeader}>
        <div className={style.leftHead}>
          <BackBtn
            onClick={() => router.back()}
          />
        </div>
        <div className={style.centerHead}>
          <p>마이페이지</p>
        </div>
        {
          router.asPath !== '/mypage' ? <div className={style.rightHead} onClick={()=>signOut()}>
            <Image src={"/assets/images/icons/logout.svg"} alt={"로그아웃"} width={19.5} height={19.5} />
          </div> : 
          <div className={style.rightHead}>
          </div>
        }
      </div>
    </header >
  )
}
