import React, { useEffect } from 'react'
import style from '@/components/modals/LoginGuide.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function LoginGuide() {

  const router = useRouter();

  useEffect(() => {
    // 3초 후에 페이지 이동
    setTimeout(() => {
      router.push('/login');
    }, 1000);
  }, []);

  return (
    <>
      <div className={style.loaderContainer}>
        <div className={style.loader}>
          <Image src='/assets/images/icons/loading.svg' alt='loading' width={30} height={30} />
        </div>
      </div>
      <div className={style.logintextbox}>
        <p className={style.logintext}>로그인이 필요한 서비스입니다.</p>
      </div>
    </>
  )
}
