import React, { useEffect } from 'react'
import style from '@/components/modals/LoginGuide.module.css'
import { useRouter } from 'next/router';

export default function LoginGuide() {

  const router = useRouter();

  useEffect(() => {
    // 3초 후에 페이지 이동
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  }, []);

  return (
    <div className={style.modalWrap}>
      <p>로그인이 필요한 서비스입니다.</p>
    </div>
  )
}
