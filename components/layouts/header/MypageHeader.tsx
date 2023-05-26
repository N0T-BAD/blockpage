import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import style from '@/components/layouts/header/MypageHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function MypageHeader() {

  const router = useRouter();
  const { push } = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      Swal.fire({
        title: '로그인이 필요합니다.',
        text: '로그인 페이지로 이동합니다.',
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#a6c9ff',
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login');
        }
      })
    }
  }, [session])

  const handleLogout = () => {
    router.push('/');
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: '로그아웃 되었습니다.',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
      .then((res) => {
        if (res) {
          signOut();
        }
      })
  }

  return (
    <header className={style.headerSection}>
      <div className={style.MypageHeader}>
        <div className={style.leftHead}>
          <BackBtn
            onClick={() => push("/")}
          />
        </div>
        <div className={style.centerHead}>
          <p>마이페이지</p>
        </div>
        <div className={style.rightHead} onClick={handleLogout}>
          <Image src={"/assets/images/icons/logout.svg"} alt={"로그아웃"} width={19.5} height={19.5} />
        </div>
      </div>
    </header >
  )
}
